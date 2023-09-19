const maps = {};
const mapsData = {};

function buildMap(mapId, datafile, download, overrideOptions) {
    const mapOptionsBase64 = document.getElementById('mapOptions' + mapId).innerText.trim();
    const mapOptionsText = (new TextDecoder()).decode(Uint8Array.from(atob(mapOptionsBase64), (m) => m.codePointAt(0)));  // Decode the base 64 text
    const options = JSON.parse(mapOptionsText);

    if (typeof options.data !== 'undefined' && Array.isArray(options.data)) options.data = options.data[options.data.length - 1]
    if (typeof options.legend !== 'undefined') options.legend = options.legend + mapId.toString()
    if (download) options.download = download

    document.getElementById('scaleQunitile' + mapId).style.display = 'none'
    document.getElementById('scaleContinuous' + mapId).style.display = 'none'
    if (typeof options.dataFormat !== 'undefined') {
        if (options.dataFormat == 'quintile') {
            document.getElementById('scaleQunitile' + mapId).style.display = 'block'
        } else if (options.dataFormat == 'sequential') {
            document.getElementById('scaleContinuous' + mapId).style.display = 'block'
        }
    }

    mapsData[mapId] = datafile || options.data.data || options.data
    if (overrideOptions && typeof overrideOptions.label !== 'undefined') {
        options['label'] = overrideOptions.label
    } else if (!overrideOptions && !datafile && options.data && typeof options.data.label !== 'undefined') {
        options['label'] = options.data.label
    }
    if (overrideOptions && typeof overrideOptions.reversePolarity !== 'undefined') {
        options['reversePolarity'] = overrideOptions.reversePolarity
    } else if (!overrideOptions && !datafile && options.data && typeof options.data.reversePolarity !== 'undefined') {
        options['reversePolarity'] = options.data.reversePolarity
    }

    const reversePolarity = typeof options.reversePolarity !== 'undefined' && options.reversePolarity;
    if (reversePolarity) {
        document.getElementById('scaleQunitile' + mapId).classList.add('reversePolarity');
    }
    else {
        document.getElementById('scaleQunitile' + mapId).classList.remove('reversePolarity');
    }

    maps[mapId] = new Choropleth(
        'map' + mapId,
        `${location.protocol}//${location.host}${options.map}`,
        `${location.protocol}//${location.host}${mapsData[mapId]}`,
        options
    )

    document.getElementById('mapZoomIn' + mapId).addEventListener('click', function () {
        maps[mapId].zoomIn()
    })

    document.getElementById('mapZoomOut' + mapId).addEventListener('click', function () {
        maps[mapId].zoomOut()
    })

    maps[mapId].downloadSize().then(data => {
        if (options.dataFormat == 'sequential') {
            document.getElementById('min_' + mapId).innerText = parseInt(maps[mapId].min, 10)
            document.getElementById('max_' + mapId).innerText = parseInt(maps[mapId].max, 10)
        }

        const items = document.getElementsByClassName('mapSize' + mapId)
        for (let i = 0; i < items.length; i++) {
            items.item(i).innerText = ' ' + data
        }
    })
}

window.document.addEventListener('DOMContentLoaded', function () {
    const prefix = 'mapOptions'
    const mapOptionsElements = document.querySelectorAll('[id^="' + prefix + '"]');
    mapOptionsElements.forEach(mapOptionsElement => {
        const mapId = mapOptionsElement.id.substring(prefix.length);
        if (parseInt(mapId).toString() === mapId) {  // Is the element Id in the form mapOptions123 (rather than mapOptionsFooBar)
            buildMap(mapId);
        }
    })
})

function downloadMap(mapId, datafile) {
    if (datafile) {
        const data = mapsData[mapId]
        buildMap(mapId, datafile, true)
        setTimeout(function () {
            buildMap(mapId, data)
        }, 2000)
    } else {
        maps[mapId].download()
    }
}
