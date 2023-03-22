var fs = require('fs');
var fsExtra = require("fs-extra");
var path = require('path');
var crypto = require('crypto');

var sass = require('node-sass');
var UglifyJS = require("uglify-js");


var pathToCurrentDirectory = '.';

var inputDirectory = './son/to-be-compiled/';
var inputJsDirectory = './son/to-be-compiled/scripts/';
var otherJsFiles = ['./node_modules/govuk-frontend/govuk/all.js']
var outputDirectory = '/son/static/assets';


function makeOutputDirectoryIfItDoesNotExist() {
    function action(directory) {
        console.log(`Making output directory (if it does not exist) [${directory + outputDirectory}]`);

        if (!fs.existsSync(directory + outputDirectory)) {
            fs.mkdirSync(directory + outputDirectory);
        }
    }

    action(pathToCurrentDirectory);
}

function deleteExistingCompiledCssAndJsFiles() {
    function action(directory) {
        console.log(`Deleting existing compiled CSS and JS files from output directory [${directory + outputDirectory}]`);
        var files = fs.readdirSync(directory + outputDirectory);

        files.forEach(function (fileName) {
            if (/app-.*.css/.test(fileName) || /app-.*.js/.test(fileName)) {
                var filePath = path.join(directory + outputDirectory, fileName);
                console.log(`Deleting file [${filePath}]`);
                fs.unlinkSync(filePath);
            }
        });
    }

    action(pathToCurrentDirectory);
}

function deleteExistingImagesAndFonts() {
    const imagesOutputDir = pathToCurrentDirectory + outputDirectory + '/images';
    console.log(`Deleting existing images [${imagesOutputDir}]`);
    fs.rmSync(imagesOutputDir, { recursive: true, force: true })

    const fontsOutputDir = pathToCurrentDirectory + outputDirectory + '/fonts';
    console.log(`Deleting existing fonts [${fontsOutputDir}]`);
    fs.rmSync(fontsOutputDir, { recursive: true, force: true })
}

function copyGovUkImagesAndFonts() {
    const imagesGovUkDir = pathToCurrentDirectory + '/node_modules/govuk-frontend/govuk/assets/images';
    const imagesOutputDir = pathToCurrentDirectory + outputDirectory + '/images';
    console.log(`Copying Gov.UK images from [${imagesGovUkDir}] to [${imagesOutputDir}]`);
    fsExtra.copySync(imagesGovUkDir, imagesOutputDir)

    const fontsGovUkDir = pathToCurrentDirectory + '/node_modules/govuk-frontend/govuk/assets/fonts';
    const fontsOutputDir = pathToCurrentDirectory + outputDirectory + '/fonts';
    console.log(`Copying Gov.UK fonts from [${fontsGovUkDir}] to [${fontsOutputDir}]`);
    fsExtra.copySync(fontsGovUkDir, fontsOutputDir)
}

function compileSass(inputFile, outputFileNamePrefix) {
    function saveAction(directory) {
        // Generate the filename, based on the hash
        var outputFilePath = `${directory + outputDirectory}/${outputFileNamePrefix}-${hashResult}.css`;
        console.log(`Saving SASS to file [${outputFilePath}]`);

        // Save the SASS
        fs.writeFileSync(outputFilePath, renderResult.css);
    }

    console.log(`Compiling SASS from file [${inputFile}]`);

    // Render the SASS to string
    var renderResult = sass.renderSync({
        file: inputFile
    });

    if (renderResult) {
        // Compute the hash of the compiled SASS
        var hash = crypto.createHash('sha256');
        hash.update(renderResult.css);
        var hashResult = hash.digest('hex');

        saveAction(pathToCurrentDirectory);
    }

}

function compileJs() {
    function saveAction(directory) {
        // Generate the filename, based on the hash
        var outputFilePath = `${directory + outputDirectory}/app-${hashResult}.js`;
        console.log(`Saving JS to file [${outputFilePath}]`);

        // Save the JS
        fs.writeFileSync(outputFilePath, minifyResult.code);
    }

    console.log(`Compiling JS`);
    var files = fs.readdirSync(inputJsDirectory);
    files = files
        .filter(fileName => fileName.endsWith('.js'))
        .map(fileName => path.join(inputJsDirectory, fileName));

    files = otherJsFiles.concat(files);

    var code = {};

    files.forEach(function (filePath) {
        var fileContents = fs.readFileSync(filePath, { encoding: 'utf8' });
        code[filePath] = fileContents;
    });

    var minifyOptions = {
        keep_fnames: false,
        mangle: false
    };
    var minifyResult = UglifyJS.minify(code, minifyOptions);

    if (minifyResult.code) {
        // Compute the hash of the compiled JS
        var hash = crypto.createHash('sha256');
        hash.update(minifyResult.code);
        var hashResult = hash.digest('hex');

        saveAction(pathToCurrentDirectory);
    } else {
        console.log("MINIFY ERROR: " + minifyResult.error)
    }
}

async function fullRecompile() {
    makeOutputDirectoryIfItDoesNotExist();
    deleteExistingCompiledCssAndJsFiles();
    deleteExistingImagesAndFonts();

    copyGovUkImagesAndFonts();
    compileSass('./son/to-be-compiled/styles/app.scss', 'app');

    compileJs();
}

function stopOnCtrlC() {
    if (process.platform === "win32") {
        var rl = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on("SIGINT",
            function () {
                process.emit("SIGINT");
            });
    }

    process.on("SIGINT",
        function () {
            //graceful shutdown
            process.exit();
        });
}

var needsRecompile = false;

async function recompileWhenNeeded() {
    var snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

    while (true) {
        await snooze(200);

        if (needsRecompile) {
            needsRecompile = false;
            fullRecompile({ runningLocally: true });
        }
    }
}

function watchAndAskForRecompile() {
    function fileChanged(eventType, filename) {
        if (filename && filename.indexOf('compiled') === -1) {
            needsRecompile = true;
        }
    }

    fs.watch(
        inputDirectory,
        {
            recursive: true
        },
        fileChanged
    );
}


if (process.argv.includes('--watch')) {
    fullRecompile();

    console.log('');
    console.log('Watching for changes');
    console.log('Press Ctrl+C to exit');
    console.log('');

    stopOnCtrlC();
    recompileWhenNeeded();
    watchAndAskForRecompile();
}
else
{
    fullRecompile();
}
