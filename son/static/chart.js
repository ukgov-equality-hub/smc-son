class Chart {

    // TOTO
    // Build chart from CSV, JSON
    // Data from URL
    // https://observablehq.com/@observablehq/plot-rule?collection=@observablehq/plot
    // https://observablehq.com/@mkfreeman/plot-tooltip

    constructor(el, data, options) {
        this.el = el
        this.data = data
        this.options = options || {}
        this.scriptSrc = ''
        this.loaded = false
        this.rendered = false
        this.debug = false

        if (window['chartjs']) {
            this.render()
        } else {
            this._init()
        }
    }

    _init() {
        const scripts = [`${this._scriptSrc()}data-utils.js`]//, 'https://d3js.org/d3.v7.min.js', 'https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6']
        const styles = [`${this._scriptSrc()}chart.css`]
        this._loadResources(scripts.concat(styles), this)
    }

    _scriptSrc() {
        if (this.scriptSrc != '') return this.scriptSrc
        const script = document.querySelector('script[src*="chart.js"]')
        if (script.src) {
            this.scriptSrc = script.src.substr(0, script.src.lastIndexOf('/') + 1)
            return this.scriptSrc
        }
        return ''
    }

    _loadResources(resources, self) {
        const downloaded = resources.map(x => false)

        function load(resource) {
            if (resource.indexOf('.') > -1) {
                if (resource.substr(resource.lastIndexOf('.') + 1).toLowerCase() == 'css') {
                    if (document.querySelector(`[href$="${resource.substr(resource.lastIndexOf('/'))}"]`) == null) {
                        let style = document.createElement('link')
                        style.rel = 'stylesheet'
                        style.href = resource
                        style.type = 'text/css'
                        style.setAttribute('data-loaded', 'false')
                        style.onload = function () {
                            loaded(resource, 'css', false)
                        }
                        document.head.appendChild(style)
                    } else {
                        loaded(resource, 'css', true)
                    }
                } else {
                    if (document.querySelector(`[src$="${resource.substr(resource.lastIndexOf('/'))}"]`) == null) {
                        let script = document.createElement('script')
                        script.type = 'text/javascript'
                        script.src = resource
                        script.setAttribute('data-loaded', 'false')
                        script.onload = function () {
                            loaded(resource, 'js', false)
                        }
                        document.head.appendChild(script)
                    } else {
                        loaded(resource, 'js', true)
                    }
                }
            }
        }

        function loaded(resource, type, preloaded) {
            let el = null
            if (type == 'css' && document.querySelector(`[href$="${resource.substr(resource.lastIndexOf('/'))}"]`) != null) {
                el = document.querySelector(`[href$="${resource.substr(resource.lastIndexOf('/'))}"]`)
            } else if (type == 'js' && document.querySelector(`[src$="${resource.substr(resource.lastIndexOf('/'))}"]`) != null) {
                el = document.querySelector(`[src$="${resource.substr(resource.lastIndexOf('/'))}"]`)
            }
            if (!el) return

            if (preloaded) {
                if (!el.hasAttribute('data-loaded') || el.getAttribute('data-loaded') == 'true') {
                    downloaded[resources.indexOf(resource)] = true
                } else {
                    setTimeout(function () {
                        loaded(resource, type, preloaded)
                    }, 100)
                }
            } else {
                downloaded[resources.indexOf(resource)] = true
                el.setAttribute('data-loaded', 'true')
            }

            for (let i = 0; i < downloaded.length; i++) {
                if (!downloaded[i]) {
                    return
                }
            }

            console.info('Chart resources loaded')
            window['chartjs'] = true

            if (self.el && self.data && typeof Plot !== 'undefined') {
                if (typeof self.options.responsive !== 'undefined' && self.options.responsive == true) {
                    window.addEventListener('resize', function (event) {
                        clearTimeout(window[`resized${self.el}`])
                        window[`resized${self.el}`] = setTimeout(function () {
                            self.render(self.filteredData)
                        }, 250)
                    }, true)
                }
                self.render()
            }
        }

        for (let i = 0; i < resources.length; i++) {
            load(resources[i])
        }
    }

    _until(x) {
        const poll = resolve => {
            if (x()) resolve()
            else setTimeout(_ => poll(resolve), 100)
        }
        return new Promise(poll)
    }

    render(filteredData) {
        this.loaded = true
        const div = document.getElementById(this.el)
        if (!div) return
        div.classList.add('chart')
        const options = this.options
        this.width = options.width || div.offsetWidth
        this.height = options.height || div.offsetHeight
        if (this.height == 0 && this.width == 0 && div.offsetParent === null) {     // element hidden?
            const dims = getDims(div)
            this.width = dims.width
            this.height = dims.height
        }
        const type = Array.isArray(options.type) ? options.type.map(x => x.toLowerCase()) : options.type.toLowerCase() || 'bar'
        const chartType = Array.isArray(type) ? type[0] : type
        Array.isArray(options.type) ? div.classList.add(...options.type.map(x => `chart-${x}`)) : div.classList.add(`chart-${type}`)
        let xkey = options.xkey || null, x1key = options.x1key || null, x2key = options.x2key || null
        let ykey = options.ykey || null, y1key = options.y1key || null, y2key = options.y2key || null
        let zkey = options.zkey || null
        let group = options.group || null
        const sort = options.sort || null
        const sortFacet = options.sortFacet || null
        let lci = options.lowerConfidence || null
        let uci = options.upperConfidence || null
        const showCi = options.confidenceIntervals || null
        const xvalue = options.xvalue || null
        const yvalue = options.yvalue || null
        const xrule = options.xrule || null
        const yrule = options.yrule || null
        let dataFormat = ['categorical', 'sequential', 'linear', 'quartile', 'quintile', 'decile'].includes(options.dataFormat) ? options.dataFormat : 'linear'
        const quantile = options.quantile || undefined
        const reversePolarity = options.reversePolarity || false
        const scale = options.scale ? options.scale : ''
        const rounding = options.rounding || null
        const limit = options.limit || 0
        let domain = options.domain || null
        let range = options.range || null
        const zero = options.zero === false ? false : true
        const multiply = options.multiply || null
        let xtitle = options.xtitle || null
        let ytitle = options.ytitle || null
        const maxBarSize = options.maxBarSize || -1
        const colourScheme = options.colourScheme || ['#C6322A','#F2B06E', '#FFFEC6', '#B1D678', '#47934B']
        const textLabels = ['top', 'right', 'bottom', 'left', 'center', 'outside'].includes(options.textLabels) ? options.textLabels : Array.isArray(options.textLabels) ? options.textLabels : ''
        const labelColour = options.labelColour || '#000'
        const labelKey = options.labelKey || null
        const maximumLabelLength = options.maxLabelLength || -1
        const rotateDomainLabels = options.rotateDomainLabels || false
        const showDots = options.showDots === false ? false : true
        const grid = options.grid === false ? false : true
        let xgrid = options.xgrid === false ? false : grid
        let ygrid = options.ygrid === false ? false : grid
        const xscale = ['sqrt', 'pow', 'log', 'symlog'].includes(options.xscale) ? options.xscale : null
        const yscale = ['sqrt', 'pow', 'log', 'symlog'].includes(options.yscale) ? options.yscale : null
        const smallScreenSize = 640
        let xticks = options.xticks === false ? false : options.xticks
        if (typeof options.xticksSmallScreen !== 'undefined' && this.width < smallScreenSize) {
            xticks = options.xticksSmallScreen === false ? false : options.xticksSmallScreen
        }
        let yticks = options.yticks === false ? false : options.yticks
        if (typeof options.yticksSmallScreen !== 'undefined' && this.height < smallScreenSize) {
            yticks = options.yticksSmallScreen === false ? false : options.yticksSmallScreen
        }
        const xticksLength = options.xticksLength || null
        const filterNaN = options.filterNaN === false ? false : true
        const legend = options.legend || false
        const reverseLegend = options.reverseLegend || false
        this.legendCheckboxes = options.legendCheckboxes || false
        const swatchSize = 20
        let margin = options.margin || [ options.marginTop || 10, options.marginRight || 10, options.marginBottom || 10, options.marginLeft || 10 ]
        this.title = options.title || ''
        this.tooltipTitle = options.tooltipTitle || undefined
        this.rolloverBehaviour = ['outline', 'fade'].includes(options.rolloverBehaviour) ? options.rolloverBehaviour : ''
        this.clickBehaviour = ['outline', 'fade', 'filter', 'isolate'].includes(options.clickBehaviour) ? options.clickBehaviour : ''
        this.isInteractive = this.rolloverBehaviour != '' || this.clickBehaviour != ''
        this.onRollover = options.onRollover || undefined
        this.onClick = options.onClick || undefined
        const style = options.style || {
            fontFamily: options.fontFamily || 'GDS Transport',
            fontSize: options.fontSize || '14px',
            overflow: 'visible',
            backgroundColor: options.backgroundColor || 'transparent'
        }
        let self = this

        this.dataUtils = new DataUtils()
        this.dataUtils.loadData(this.data).then(data => {
            buildChart(data)
        })

        function buildChart(data) {
            data = data.data || data
            if (!Array.isArray(data[0])) {
                const arr = []
                arr.push(data)
                data = arr
            }

            if (!xkey || !ykey) {
                const keys = Object.keys(data[0])
                xkey = keys[0]
                ykey = keys[1]
            }

            const orientation = ['bary', 'doty', 'liney'].includes(chartType) ? 'y' : 'x'
            self.isSmallScreen = ((orientation == 'y' && self.width < smallScreenSize) || (orientation != 'y' && self.height < smallScreenSize))
            if (multiply && isNumeric(multiply)) {
                for (let i = 0; i < data.length; i++) {
                    data[i] = data[i].map(x => {
                        if (isNumeric(x[orientation == 'y' ? ykey : xkey])) x[orientation == 'y' ? ykey : xkey] *= multiply
                        if (x1key && isNumeric(x[x1key])) x[x1key] *= multiply
                        if (x2key && isNumeric(x[x2key])) x[x2key] *= multiply
                        if (y1key && isNumeric(x[y1key])) x[y1key] *= multiply
                        if (y2key && isNumeric(x[y2key])) x[y2key] *= multiply
                        if (lci && isNumeric(x[lci])) x[lci] *= multiply
                        if (uci && isNumeric(x[uci])) x[uci] *= multiply
                        return x
                    })
                }
            }
            let vals = data
            if (zkey && !['line', 'liney'].includes(chartType)) {
                vals = new DataUtils().groupBy((Array.isArray(data[0]) ? data.flat() : data), orientation == 'y' ? xkey : ykey, orientation == 'y' ? ykey : xkey)
            } else if (Array.isArray(data[0])) {
                vals = data.flat()
            }

            let min = 0
            if (orientation == 'y') {
                min = d3.min(vals, x => parseFloat(x[ykey], 10))
                if (y1key && y2key && vals[0][y1key] && vals[0][y2key]) {
                    min = d3.min([d3.min(vals, x => parseFloat(x[y1key], 10)), d3.min(vals, x => parseFloat(x[y2key], 10))])
                }
            } else {
                min = d3.min(vals, x => parseFloat(x[xkey], 10))
                if (x1key && x2key && vals[0][x1key] && vals[0][x2key]) {
                    min = d3.min([d3.min(vals, x => parseFloat(x[x1key], 10)), d3.min(vals, x => parseFloat(x[x2key], 10))])
                }
            }
            if (zero && min > 0) min = 0
            let max = 100
            if (orientation == 'y') {
                max = d3.max(vals, x => parseFloat(x[ykey], 10))
                if (zkey && group) {
                    max = d3.max(new DataUtils().groupBy((Array.isArray(data[0]) ? data.flat() : data), [group, xkey], ykey), x => parseFloat(x[ykey], 10))
                }
                if (y1key && y2key && vals[0][y1key] && vals[0][y2key]) {
                    max = d3.max([d3.max(vals, x => parseFloat(x[y1key], 10)), d3.max(vals, x => parseFloat(x[y2key], 10))])
                }
            } else {
                max = d3.max(vals, x => parseFloat(x[xkey], 10))
                if (zkey && group) {
                    max = d3.max(new DataUtils().groupBy((Array.isArray(data[0]) ? data.flat() : data), [group, ykey], xkey), x => parseFloat(x[xkey], 10))
                }
                if (x1key && x2key && vals[0][x1key] && vals[0][x2key]) {
                    max = d3.max([d3.max(vals, x => parseFloat(x[x1key], 10)), d3.max(vals, x => parseFloat(x[x2key], 10))])
                }
            }
            self.min = min
            self.max = max
            self.mean = d3.mean(vals, x => parseFloat(x[orientation == 'y' ? ykey : xkey], 10))
            self.median = d3.median(vals, x => parseFloat(x[orientation == 'y' ? ykey : xkey], 10))
            if (!domain && orientation != 'y') domain = [min, max]
            if (!domain && orientation == 'y') domain = Array.from(new Set(data.flat().map(x => x[xkey])))
            if (!range && orientation != 'y') range = Array.from(new Set(data.flat().map(x => x[group || ykey])))
            if (!range && orientation == 'y') range = [min, max]

            if (['quartile', 'quintile', 'decile'].includes(chartType)) {
                dataFormat = chartType
                self.height = 35
                margin = [0, -7, 0, -7]
            } else {
                self.height -= zkey && legend ? legendHeight(domain, self.width) : 0
            }
            if (self.debug) console.log('min', min, 'max', max, 'range', range)

            let categories = [], groups = null
            if (zkey && group) {
                categories = Array.from(new Set(data.flat().map(x => x[zkey].toString())))
                groups = Array.from(new Set(data.flat().map(x => x[group].toString())))
            } else if (zkey) {
                categories = Array.from(new Set(data.flat().map(x => x[zkey].toString())))
            } else if (group) {
                categories = Array.from(new Set(data.flat().map(x => x[orientation == 'y' ? xkey : ykey].toString())))
            }

            const marks = []
            let chartData
            let originalData = null
            let hasCi = null

            if (Array.isArray(type) && categories.length > 0) {
                const multiTypes = {}
                for (const currentType of type) {
                    multiTypes[currentType] = []
                }

                for (let i = 0; i < categories.length; i++) {
                    const d = data[0].filter(x => {
                        if (zkey) {
                            return x[zkey] == categories[i]
                        } else if (group) {
                            return x[orientation == 'y' ? xkey : ykey] == categories[i]
                        }
                        return false
                    })
                    multiTypes[type[i]] = multiTypes[type[i]].concat(d)
                }

                data = []
                for (const currentType in multiTypes) {
                    if (multiTypes.hasOwnProperty(currentType)) {
                        data.push({ type: currentType, data: multiTypes[currentType] })
                    }
                }
            }

            for (let i = 0; i < data.length; i++) {
                const currentType = data[i].type || chartType
                const currentGroup = group//[ 'barx', 'bary'].includes(chartType) ? group : null
                if (filteredData) {
                    originalData = self.originalData || data[i].data || data[i]
                    chartData = filteredData
                } else {
                    chartData = (data[i].data || data[i]).map(x => ({
                        ...x,
                        [xkey]: orientation != 'y' && isNumeric(x[xkey]) ? parseFloat(x[xkey], 10) : x[xkey].toString(),
                        [ykey]: orientation == 'y' && isNumeric(x[ykey]) ? parseFloat(x[ykey], 10) : x[ykey].toString(),
                        [zkey]: isNumeric(x[zkey]) ? parseFloat(x[zkey], 10) : x[zkey] || null
                    }))

                    if (self.clickBehaviour == 'filter') {
                        const series = []
                        d3.select(`#${self.el}_legend`).selectAll('[data-filtered="true"]').each(function () {
                            series.push(d3.select(this).attr('data-series'))
                        })
                        if (series.length > 0) {
                            self.filteredData = chartData.filter(x => series.indexOf(x[zkey ? zkey : ['bary', 'doty', 'liney'].includes(chartType) == 'y' ? xkey : ykey]) == -1)
                            originalData = chartData
                            chartData = self.filteredData
                            self.chartData = chartData
                        }
                    }
                }
                if (filterNaN) chartData = chartData.filter(x => isNumeric(x[orientation == 'y' ? ykey : xkey]))

                if (sort) {
                    if (currentGroup) {
                        if (orientation == 'y') {
                            categories = sortDomain(chartData, sort, currentGroup, ykey)
                        } else {
                            range = sortDomain(chartData, sort, currentGroup, ykey, sortFacet)
                        }
                    } else {
                        if (orientation == 'y') {
                            domain = sortDomain(chartData, sort, xkey)
                        } else {
                            range = sortDomain(chartData, sort, ykey)
                            if (reversePolarity) range = range.reverse()
                        }
                    }
                }

                if (lci && uci) {
                    const allCis = [...chartData.map(x => isNumeric(x[lci])), ...chartData.map(x => isNumeric(x[uci]))]
                    if (allCis.indexOf(false) > -1) {
                        if (!showCi) {
                            lci = undefined
                            uci = undefined
                        }
                    }
                    hasCi = allCis.indexOf(true) > -1
                }
                if (lci && uci) {
                    chartData = chartData.map(x => ({
                        [xkey]: x[xkey],
                        [ykey]: x[ykey],
                        [zkey]: x[zkey] || null,
                        [group]: x[group],
                        [quantile]: x[quantile],
                        labelkey: x[labelKey] || null,
                        lci: isNumeric(x[lci]) ? parseFloat(x[lci], 10) : x[lci],
                        uci: isNumeric(x[uci]) ? parseFloat(x[uci], 10) : x[uci],
                        _ci: '|'
                    }))
                    let mlci = d3.min((data[i].data || data[i]), x => parseFloat(x[lci], 10))
                    if (mlci > min) mlci = min
                    let muci = d3.max((data[i].data || data[i]), x => parseFloat(x[uci], 10))
                    if (muci < max) mlci = max
                    if (orientation != 'y' && !options.domain) domain = [zero && mlci > 0 ? 0 : mlci, muci]
                    if (orientation == 'y' && !options.range) range = [zero && mlci > 0 ? 0 : mlci, muci]
                } else {
                    chartData = chartData.map(x => ({
                        [xkey]: x[xkey],
                        [x1key]: x[x1key] || null,
                        [x2key]: x[x2key] || null,
                        [ykey]: x[ykey],
                        [y1key]: x[y1key] || null,
                        [y2key]: x[y2key] || null,
                        [zkey]: x[zkey] || null,
                        [group]: x[group],
                        [quantile]: x[quantile],
                        labelkey: x[labelKey] || null
                    }))
                }

                if (limit > 0) chartData = chartData.slice(0 - limit)
                if (!filteredData) self.chartData = chartData
                self.originalData = originalData || chartData
                domain = domain.filter(function (value, index, array) { return array.indexOf(value) === index })
                if (orientation == 'y') domain = domain.map(x => x.toString())

                const chartOptions = {
                    x: xkey,
                    y: ykey,
                    z: zkey,
                    facet: currentGroup ? true : null,
                    fill: x => ['line', 'linex', 'liney'].includes(currentType) ? '' : getMarkColour(originalData || chartData, x),
                    stroke: x => ['line', 'linex', 'liney'].includes(currentType) ? getMarkColour(originalData || chartData, x) : '',
                    strokeWidth: x => ['line', 'linex', 'liney'].includes(currentType) ? 5 : 0,
                    title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}`
                }
                if (self.debug) console.log(`chartData ${self.el}`, xkey, ykey, orientation, chartData)
                if (self.debug) console.log('chartOptions', chartOptions)

                if (currentType == 'area') {
                    marks.push(Plot.areaY(chartData, chartOptions))
                }
                if (currentType == 'bar' || currentType == 'barx') {
                    marks.push(Plot.barX(chartData, chartOptions))
                }
                if (currentType == 'bary') {
                    marks.push(Plot.barY(chartData, chartOptions))
                }
                if (currentType == 'line' || currentType == 'linex') {
                    marks.push(Plot.lineX(chartData, { sort: zkey ? ykey : xkey, ...chartOptions }))
                    marks.push(Plot.dot(chartData, { r: 3, ...chartOptions, fill: x => getMarkColour(originalData || chartData, x) }))
                }
                if (currentType == 'liney') {
                    marks.push(Plot.lineY(chartData, { sort: zkey ? xkey : xkey, ...chartOptions }))
                    marks.push(Plot.dot(chartData, { r: showDots ? 3 : 0.001, ...chartOptions, fill: x => getMarkColour(originalData || chartData, x) }))
                }
                if (['quartile', 'quintile', 'decile'].includes(currentType)) {
                    xticks = getScaledTicks(currentType)
                    xgrid = false
                    ygrid = false
                    domain = getQuantileRanges(chartData.map(x => x[orientation == 'y' ? ykey : xkey]).sort(function (a, b) { return a - b }), currentType)
                    let d = chartData.filter(x => x[ykey] == yvalue)
                    if (d && d.length > 0) {
                        let q = getQuantile(domain, d[0][xkey])
                        marks.push(Plot.dot(d, { x: x => quantile && x[quantile] && isNumeric(x[quantile]) ? domain[parseInt(x[quantile], 10) - 1] : domain[q], y: ykey, dy: 9, r: 15, stroke: 'grey' }))
                        marks.push(Plot.cell(reversePolarity ? [...domain].reverse() : domain, { x: x => x, dy: 9, fill: x => x, stroke: 'grey' }))
                        marks.push(Plot.dot(d, { x: x => quantile && x[quantile] && isNumeric(x[quantile]) ? domain[parseInt(x[quantile], 10) - 1] : domain[q], y: ykey, dy: 9, r: 15, fill: x => getMarkColour(originalData || chartData, x), title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}` }))
                    }
                }
                if (lci && uci) {
                    if (orientation == 'y') {
                        marks.push(Plot.ruleX(chartData, { x: xkey, y1: 'lci', y2: 'uci', stroke: '#555', title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}|CI` }))
                        marks.push(Plot.text(chartData, { x: xkey, y: 'lci', text: '_ci', title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}|CI`, fill: '#555', rotate: 90 }))
                        marks.push(Plot.text(chartData, { x: xkey, y: 'uci', text: '_ci', title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}|CI`, fill: '#555', rotate: 90 }))
                    } else {
                        marks.push(Plot.ruleY(chartData, { y: ykey, x1: 'lci', x2: 'uci', stroke: '#555', title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}|CI` }))
                        marks.push(Plot.text(chartData, { x: 'lci', y: ykey, text: '_ci', fill: '#555', title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}|CI` }))
                        marks.push(Plot.text(chartData, { x: 'uci', y: ykey, text: '_ci', fill: '#555', title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}|CI` }))
                    }
                }
                if (currentType == 'dot' || currentType == 'doty') {
                    if (orientation == 'y' && y1key && y2key && chartData[0][y1key] && chartData[0][y2key]) {
                        marks.push(Plot.ruleX(chartData, { x: xkey, y1: y1key, y2: y2key, strokeWidth: 5, stroke: '#ccc' }))
                        marks.push(Plot.dot(chartData, { ...chartOptions, r: 5, stroke: colourScheme[0], fill: colourScheme[0], y: y1key }))
                        marks.push(Plot.dot(chartData, { ...chartOptions, r: 5, stroke: colourScheme[colourScheme.length - 1], fill: colourScheme[colourScheme.length - 1], y: y2key }))
                    } else if (x1key && x2key && chartData[0][x1key] && chartData[0][x2key]) {
                        marks.push(Plot.ruleY(chartData, { y: ykey, x1: x1key, x2: x2key, strokeWidth: 5, stroke: '#ccc' }))
                        marks.push(Plot.dot(chartData, { ...chartOptions, r: 5, stroke: colourScheme[0], fill: colourScheme[0], x: x1key }))
                        marks.push(Plot.dot(chartData, { ...chartOptions, r: 5, stroke: colourScheme[colourScheme.length - 1], fill: colourScheme[colourScheme.length - 1], x: x2key }))
                    } else {
                        marks.push(Plot.dot(chartData, { r: 5, stroke: '#1d70b8', ...chartOptions }))
                    }
                }

                if (textLabels != '' && ['bar', 'barx', 'bary'].includes(currentType) && !self.isSmallScreen) {
                    if (orientation == 'y') {
                        marks.push(Plot.text(chartData, {
                            x: xkey,
                            y: x => getLabelPos(x),
                            dy: getLabelShift(),
                            z: zkey,
                            facet: currentGroup ? true : null,
                            text: x => getLabelText(x['labelkey'] || x[ykey], 'label'),
                            title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}`,
                            fill: labelColour,
                            stroke: labelColour == '#000' ? '#fff' : '#000',
                            strokeWidth: 3
                        }))
                    } else {
                        marks.push(Plot.text(chartData, {
                            x: x => getLabelPos(x),
                            dx: getLabelShift(),
                            y: ykey,
                            z: zkey,
                            facet: currentGroup ? true : null,
                            text: x => getLabelText(x['labelkey'] || x[xkey], 'label'),
                            title: x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[currentGroup]}`,
                            fill: labelColour,
                            stroke: labelColour == '#000' ? '#fff' : '#000',
                            strokeWidth: 3
                        }))
                    }
                }
            }

            if (xrule) marks.push(Plot.ruleX(xrule, { strokeWidth: 3 }))
            if (yrule) marks.push(Plot.ruleY(yrule, { strokeWidth: 3 }))

            let xOptions = {
                grid: xgrid
            }
            if (group && orientation == 'y') xOptions['axis'] = null

            let yOptions = {
                grid: ygrid
            }
            if (group && orientation != 'y') yOptions['axis'] = null

            if (self.isSmallScreen) {
                xtitle = null
                ytitle = null
            }

            let addedXTitle = false;

            if ((!(group && orientation == 'y' || ['quartile', 'quintile', 'decile'].includes(chartType))) || (zkey && group)) {
                marks.push(Plot.axisX({
                    label: xtitle,
                    labelArrow: 'none',
                    labelAnchor: (div.offsetWidth < 600 ? 'right' : 'center'),
                    labelOffset: zkey && group ? 70 : 50,
                    lineWidth: rotateDomainLabels ? undefined : xticksLength ? xticksLength : 6,
                    ticks: xticks ? ticksId(xticks) : undefined,
                    tickRotate: rotateDomainLabels ? 90 : undefined,
                    tickFormat: (x, i, t) => {
                        if (Array.isArray(xticks)) {
                            if (t.includes(x)) return orientation != 'y' ? getLabelText(x, 'xaxis', chartData, i) : x.toString()
                            return null
                        } else if ([-1, 'none', 'hide'].includes(xticks)) {
                            return null
                        } else if ([-2, 'first-last'].includes(xticks)) {
                            if (i == 0 || i == (t.length - 1)) return orientation != 'y' ? getLabelText(x, 'xaxis', chartData, i) : x.toString()
                            return null
                        } else if ([-3, 'abreviate'].includes(xticks)) {
                            return abreviate(orientation != 'y' ? getLabelText(x, 'xaxis', chartData, i) : x.toString())
                        } else if (['2nd', '3rd', '4th', '5th'].includes(xticks)) {
                            if (i % parseInt(xticks.substr(0, 1), 10) == 0) return orientation != 'y' ? getLabelText(x, 'xaxis', chartData, i) : x.toString()
                            return null
                        } else {
                            return orientation != 'y' ? getLabelText(x, 'xaxis') : x.toString()
                        }
                    }
                }))
                addedXTitle = true;
            }
            if (group && orientation == 'y') {
                const xTitleToAdd = addedXTitle ? {} : {label: xtitle};
                marks.push(Plot.axisFx({
                    anchor: 'bottom',
                    ...xTitleToAdd,
                    lineWidth: rotateDomainLabels ? undefined : xticksLength ? xticksLength : 8,
                    ticks: xticks ? ticksId(xticks) : undefined,
                    tickRotate: rotateDomainLabels ? 90 : undefined,
                    tickFormat: (x, i, t) => {
                        if ([-1, 'none', 'hide'].includes(xticks)) {
                            return null
                        } else if ([-3, 'abreviate'].includes(xticks)) {
                            return abreviate(orientation != 'y' ? getLabelText(x, 'xaxis') : x.toString())
                        } else if (['2nd', '3rd', '4th', '5th'].includes(xticks)) {
                            if (i % parseInt(xticks.substr(0, 1), 10) == 0) return orientation != 'y' ? getLabelText(x, 'xaxis', chartData, i) : x.toString()
                            return null
                        } else {
                            return orientation != 'y' ? getLabelText(x, 'xaxis') : x.toString()
                        }
                    },
                    dy: zkey ? 20 : undefined
                }))
            }
            if (!(group && orientation != 'y' || ['quartile', 'quintile', 'decile'].includes(chartType))) {
                marks.push(Plot.axisY({
                    label: ytitle,
                    labelAnchor: 'center',
                    labelOffset: 50,
                    ticks: yticks ? ticksId(yticks) : undefined,
                    tickFormat: (x, i, t) => {
                        if (Array.isArray(yticks)) {
                            if (t.includes(x)) return orientation == 'y' ? getLabelText(x, 'yaxis', chartData, i) : x.toString()
                            return null
                        } else if ([-1, 'none', 'hide'].includes(yticks)) {
                            return null
                        } else if ([-2, 'first-last'].includes(yticks)) {
                            if (i == 0 || i == (t.length - 1)) return orientation == 'y' ? getLabelText(x, 'yaxis', chartData, i) : x.toString()
                            return null
                        } else if ([-3, 'abreviate'].includes(yticks) && !group) {
                            return abreviate(orientation == 'y' ? getLabelText(x, 'yaxis', chartData, i) : x.toString())
                        } else if (['2nd', '3rd', '4th', '5th'].includes(yticks)) {
                            if (i % parseInt(yticks.substr(0, 1), 10) == 0) return orientation != 'y' ? getLabelText(x, 'yaxis', chartData, i) : x.toString()
                            return null
                        } else {
                            return orientation == 'y' ? getLabelText(x, 'yaxis') : x.toString()
                        }
                    }
                }))
            }

            if (['quartile', 'quintile', 'decile'].includes(chartType)) {
                xOptions = { axis: null, domain: domain, ticks: getScaledTicks(chartType) }
                yOptions = { axis: null, domain: [yvalue], ticks: 1 }
            } else if (!group) {
                xOptions['domain'] = domain
                yOptions['domain'] = range
            } else {
                xOptions['domain'] = domain
                yOptions['group'] = group
            }
            if (orientation == 'y' && !yOptions['domain'] && range) {
                yOptions['domain'] = range
            }
            if (isNumeric(xticks) || Array.isArray(xticks)) {
                if (['line', 'linex', 'liney'].includes(chartType) && (xticks > 0 || Array.isArray(xticks))) {
                    xOptions['domain'] = [
                        isNumeric(domain[0]) && isNumeric(domain[domain.length - 1]) ? parseFloat(domain[0], 10) : domain[0],
                        isNumeric(domain[0]) && isNumeric(domain[domain.length - 1]) ? parseFloat(domain[domain.length - 1], 10) : domain[domain.length - 1]
                    ]
                } else if (['bar', 'barx', 'bary'].includes(chartType)) {
                }
            }
            if (orientation != 'y' && xscale) xOptions.type = xscale
            if (orientation == 'y' && yscale) yOptions.type = yscale
            if (self.debug) console.log('group', group, range, domain, categories)

            const plotOptions = {
                x: xOptions,
                y: yOptions,
                facet: group ? {
                    data: chartData,
                    x: orientation == 'y' ? group : null,
                    y: orientation != 'y' ? group : null,
                    label: null
                } : undefined,
                fx: orientation == 'y' && group ? {
                    domain: groups || categories,
                    label: null,
                    tickFormat: x => x.toString(),
                    tickRotate: rotateDomainLabels ? 90 : undefined
                } : undefined,
                fy: orientation != 'y' && group ? {
                    domain: range,
                } : undefined,
                marks: marks,
                color: {
                    range: colourScheme,
                    legend: false
                },
                width: self.width,
                height: self.height,
                marginTop: margin[0],
                marginRight: margin[1],
                marginBottom: rotateDomainLabels ? maxLabelLength(data, group && orientation != 'y' ? group : xkey, style) + margin[2] : margin[2] + (xtitle != null && xtitle != '' ? 40 : 0) + (zkey && group && xtitle ? 15 : 0) + 20,
                marginLeft: maxLabelLength(data, group && orientation != 'y' ? group : ykey, style) + margin[3] + (ytitle != null ? 10 : 0),
                style: style
            }
            let plot = Plot.plot(plotOptions)

            plot = tooltips(plot)
            plot.classList.add(chartType)
            let plotted = false
            if (div.getElementsByTagName('svg').length > 0) {
                plotted = true
                div.removeChild(div.getElementsByTagName('svg')[0])
            }
            div.insertBefore(plot, div.firstChild)
            d3.select(`#${self.el} svg`).attr('id', `${self.el}__chartSVG`).classed(chartType, true)
            if (self.rolloverBehaviour != '') d3.select(`#${self.el} svg`).classed(self.rolloverBehaviour, true)
            if (self.clickBehaviour == 'filter') plotted = false

            // Legend
            let legends
            if (['quartile', 'quintile', 'decile'].includes(dataFormat)) {
                legends = getQuantileTicks(dataFormat).map((x, i) => `${dataFormat.substr(0, 1).toUpperCase()}${dataFormat.substr(1).toLowerCase()} ${i + 1}`)
                if (reversePolarity) legends.reverse()
            } else if (zkey) {
                legends = [...new Set((originalData || chartData).flat().map(x => x[zkey]))]
            } else if (orientation == 'y') {
                if (group) {
                    legends = [...new Set((originalData || chartData).flat().map(x => x[xkey]))]
                } else {
                    legends = domain
                }
            } else {
                if (group) {
                    legends = [...new Set((originalData || chartData).flat().map(x => x[ykey]))]
                } else {
                    legends = [...new Set((originalData || chartData).flat().map(x => x[zkey]))]
                }
            }
            self.legends = legends

            if ((zkey || (ykey && group)) && legend && !plotted) {
                let legendDiv
                if (self.clickBehaviour == 'filter') {
                    self.hidden = []
                    d3.select(`#${self.el}`).selectAll(`${self.isInteractive ? self.legendCheckboxes ? 'input' : 'button' : 'span'}[data-filtered="true"]`).each(function () {
                        self.hidden.push(d3.select(this).attr('data-series'))
                    })
                    legendDiv = document.getElementById(`${self.el}_legend`)
                    if (legendDiv && legendDiv.getElementsByTagName(`${self.isInteractive ? self.legendCheckboxes ? 'input' : 'button' : 'span'}`).length > 0) {
                        legendDiv.parentNode.removeChild(legendDiv)
                    }
                }

                legendDiv = document.createElement('div')
                legendDiv.setAttribute('id', `${self.el}_legend`)
                legendDiv.classList.add('chart-legend')
                const legendStyle = { marginTop: `${group && [-3, 'abreviate'].includes(xticks) ? '15' : swatchSize * 1.75}px` }
                if (self.isSmallScreen) legendStyle.marginLeft = 0
                Object.assign(legendDiv.style, { ...legendStyle, ...style })
                const legendDomain = reverseLegend ? [...legends.reverse()] : legends
                const legendRange = reverseLegend ? [...colourScheme.slice(0, legends.length).reverse()] : colourScheme
                let css = ''
                for (let i = 0; i < legendDomain.length; i++) {
                    if (self.legendCheckboxes && self.isInteractive) {
                        const l = document.createElement('span')
                        l.classList.add('legend', 'legend-cb')
                        const cb = document.createElement('input')
                        cb.setAttribute('id', `${self.el}_cb_${legendDomain[i]}`)
                        cb.type = 'checkbox'
                        cb.checked = self.hidden && self.hidden.includes(legendDomain[i]) ? false : true
                        cb.classList.add(legendDomain[i].replace(/ /g, '_'))
                        css += `input[type="checkbox"].${legendDomain[i].replace(/ /g, '_')}:before, input[type="checkbox"].${legendDomain[i].replace(/ /g, '_')}:checked:before { background-color: var(--${legendDomain[i].replace(/ /g, '_')}, ${legendRange[i]}) !important; }`
                        cb.setAttribute('data-series', legendDomain[i])
                        cb.addEventListener('click', clicked)
                        l.appendChild(cb)
                        const cbLabel = document.createElement('label')
                        cbLabel.setAttribute('for', `${self.el}_cb_${legendDomain[i]}`)
                        cbLabel.innerText = legendDomain[i]
                        l.appendChild(cbLabel)
                        legendDiv.appendChild(l)
                    } else {
                        const l = document.createElement(`${self.isInteractive ? 'button' : 'span'}`)
                        if (self.isSmallScreen) {
                            l.style.marginLeft = 0
                            l.style.paddingLeft = 0
                        }
                        l.innerHTML = `<svg width="${swatchSize}" height="${swatchSize}" fill="${legendRange[i]}"><rect width="100%" height="100%"></rect></svg>${ticksId(orientation == 'y' ? xticks : yticks) == -3 && !((zkey && zkey != xkey) || group) ? '(' + abreviate(legendDomain[i]) + ') ' : ''}${legendDomain[i]}`
                        l.setAttribute('data-series', legendDomain[i])
                        l.addEventListener('click', clicked)
                        //l.addEventListener('pointerenter pointermove', highlight)
                        l.addEventListener('pointerout', resetHighlight)
                        legendDiv.appendChild(l)
                    }
                }

                if (css != '') {
                    let style = document.createElementNS('http://www.w3.org/2000/svg', 'style')
                    style.textContent = css
                    legendDiv.appendChild(style)
                }

                if (lci && uci ) {
                    if (showCi == 'visible') {
                        document.getElementById(self.el).getElementsByTagName('svg')[0].classList.add('highlight-ci')
                    } else {
                        const l = document.createElement('span')
                        l.classList.add('confidence-interval')
                        if (!hasCi) l.classList.add('no-intervals')
                        const cb = document.createElement('input')
                        cb.setAttribute('id', `${self.el}_cicb`)
                        cb.type = 'checkbox'
                        cb.onclick = function () {
                            document.getElementById(self.el).getElementsByTagName('svg')[0].classList.toggle('highlight-ci')
                        }
                        if (self.isSmallScreen) {
                            l.style.marginLeft = 0
                            l.style.paddingLeft = 0
                            cb.style.marginLeft = 0
                        }
                        l.appendChild(cb)
                        const cbLabel = document.createElement('label')
                        cbLabel.setAttribute('for', `${self.el}_cicb`)
                        cbLabel.innerText = 'Confidence Intervals'
                        l.appendChild(cbLabel)
                        legendDiv.appendChild(l)
                    }
                }

                if (((zkey && zkey != xkey) || group) && [-3, 'abreviate'].includes(xticks)) {
                    const explainDiv = document.createElement('div')
                    const explanations = zkey ? [...domain] : [...new Set(categories)]
                    explainDiv.classList.add('chart-explanation')
                    Object.assign(explainDiv.style, { marginTop: `${swatchSize * 1.75}px`, ...style })
                    for (const [i, item] of explanations.entries()) {
                        if (abreviate(item) != item && abreviate(item).substr(0, 1) != '’') {
                            const e = document.createElement('span')
                            e.innerHTML = `${abreviate(item)}: <em>${item}${i < explanations.length - 1 ? ',' : ''}</em>`
                            explainDiv.appendChild(e)
                        }
                    }
                    div.appendChild(explainDiv)
                }

                div.appendChild(legendDiv)

                if (self.hidden && self.hidden.length > 0) {
                    const selector = self.hidden.map(x => `[data-series="${x}"]`).join(', ')
                    d3.select(legendDiv).selectAll(selector).style('opacity', function () {
                        d3.select(this).attr('data-filtered', true)
                        return self.legendCheckboxes ? 0.3 : 0.1
                    })
                }
            } else {
                if ((zkey || (ykey && group)) && legend && plotted && !filteredData) {
                    const series = []
                    d3.select(`#${self.el}_legend`).selectAll('[data-faded="true"], [data-isolated="true"]').each(function () {
                        series.push(d3.select(this).attr('data-series'))
                    })
                    if (series.length > 0) clicked({ series: series }, true)
                }

                if (lci && uci) {
                    const ci = document.getElementById(`${self.el}_cicb`)
                    if (ci && ci.checked || showCi == 'visible') {
                        document.getElementById(self.el).getElementsByTagName('svg')[0].classList.add('highlight-ci')
                    }
                    if (ci && hasCi) ci.parentElement.classList.remove('no-intervals')
                    if (ci && !hasCi) ci.parentElement.classList.add('no-intervals')
                }
            }

            self.rendered = true
            if (options.download) self.download(options.filename)

            function getScaledTicks(type) {
                return type == 'decile' ? 10 : type == 'quintile' ? 5 : 4
            }

            function getScaledDomain(ticks) {
                return Array.from({ length: ticks }, (_, i) => i * (max - min) / (ticks - 1) + min)
            }

            function getScaledRanges(ticks) {
                return Array.from({ length: ticks + 1 }, (_, i) => i * (max - min) / ticks + min)
            }

            function getScaleValue(data, ticks) {
                let ranges = getScaledRanges(ticks)
                if (data) {
                    for (let i = 0; i < ranges.length - 1; i++) {
                        if (data[0][xkey] >= ranges[i] && data[0][xkey] <= ranges[i + 1]) {
                            return i
                        }
                    }
                }
                return -1
            }

            function getQuantileTicks(type) {
                let quantiles = []
                if (type == 'quartile') {
                    quantiles = [.25, .5, .75, 1]
                } else if (type == 'quintile') {
                    quantiles = [.2, .4, .6, .8, 1]
                } else if (type == 'decile') {
                    quantiles = [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                }
                return quantiles
            }

            function getQuantileRanges(data, type) {
                let ranges = [], quantiles = getQuantileTicks(type)
                for (const quantile of quantiles) {
                    ranges.push(d3.quantile(data, quantile))
                }
                if (reversePolarity) ranges = ranges.reverse()
                return ranges
            }

            function getQuantile(ranges, value) {
                const r = reversePolarity ? [...ranges].reverse() : ranges
                for (let i = 0; i < r.length; i++) {
                    if (value <= r[i]) {
                        return i
                    }
                }
                return -1
            }

            function getMarkColour(data, x) {
                const val = x[xkey]
                if (val == null) return 'grey'
                if (['quartile', 'quintile', 'decile'].includes(dataFormat)) {
                    let q = null
                    if (quantile && quantile != '') q = x[quantile]
                    const r = getQuantileRanges(data.map(x => x[xkey]).sort(function (a, b) { return a - b }), dataFormat)
                    if (q) {
                        q -= 1
                    } else {
                        q = getQuantile(r, val)
                    }
                    return colourScheme[reversePolarity ? r.length - (q + 1) : q] || 'grey'
                } else if (dataFormat == 'categorical') {
                    return colourScheme[val - 1]
                } else if (dataFormat == 'sequential') {
                    let color
                    if (dataFormat == 'sequential') {
                        const interpolator = Array.isArray(colourScheme) ? d3.interpolateRgbBasis(colourScheme) : d3[colourScheme]
                        color = d3.scaleSequential(interpolator)
                            .domain([min, max])
                    } else {
                        const scheme = Array.isArray(colourScheme) ? colourScheme : d3[colourScheme]
                        color = d3.scaleQuantize(scheme)
                            .domain(dataFormat == 'categorical' && domain.length > 0 ? domain : [min, max])
                    }
                    return isNaN(val) ? 'grey' : color(Math.floor(((val - min) / (max - min)) * 100))
                }

                let colours = []
                for (let i = 0; i < Math.ceil(data.length / colourScheme.length); i++) {
                    colours = colours.concat(colourScheme)
                }
                if (zkey && group) {
                    return colours[categories.indexOf(x[zkey])]
                } else if (zkey) {
                    return colours[categories.indexOf(x[zkey])]
                } else if (group) {
                    return orientation == 'x' ? colours[categories.indexOf(x[ykey])] : colours[domain.indexOf(x[xkey])]
                    //return orientation == 'x' ? x[ykey] : colours[domain.indexOf(x[xkey])]
                    //return x[orientation == 'y' ? xkey : ykey]
                    //return colours[domain.indexOf(x[orientation == 'y' ? xkey : group])] //x[orientation == 'y' ? xkey : ykey]
                }
                return orientation == 'y' ? xkey : ykey
                //return orientation == 'y' ? colours[[...new Set(data.flat().map(x => x[xkey]))].sort().indexOf(x[xkey])] : colours[[...new Set(data.flat().map(x => x[ykey]))].sort().indexOf(x[ykey])]
            }

            function getLabelPos(x) {
                const key = orientation == 'y' ? xkey : ykey
                const valKey = orientation == 'y' ? ykey : xkey
                let vals = chartData.flat().filter(y => y[key] == x[key])
                let stackedVals = new Array(vals.length).fill(0), val = 0
                if (zkey && group) {
                    vals = vals.filter(y => y[group] == x[group])
                }

                if (zkey) {
                    for (let j = 0; j < vals.length; j++) {
                        stackedVals[j] = parseFloat(vals[j][valKey], 10)
                        if (vals[j][valKey] == x[valKey] && vals[j][zkey] == x[zkey]) {
                            if (orientation == 'y') {
                                if (textLabels == 'bottom') {
                                    stackedVals[j] = j > 0 ? stackedVals[j - 1] : 0
                                } else {
                                    stackedVals[j] /= 2
                                }
                            } else {
                                if (textLabels == 'left') {
                                    stackedVals[j] += j > 0 ? stackedVals[j - 1] : 0
                                } else {
                                    stackedVals[j] /= 2
                                }
                            }
                            break
                        }
                    }
                    return stackedVals.reduce((a, b) => a + b, 0)
                } else {
                    val = parseFloat(x[valKey], 10)
                    if (orientation == 'y') {
                        if (textLabels == 'bottom') {
                            val = 0
                        } else if (textLabels == 'center') {
                            val /= 2
                        }
                    } else {
                        if (textLabels == 'left') {
                            val = 0
                        } else if (textLabels == 'center') {
                            val /= 2
                        }
                    }
                    return val
                }
            }

            function getLabelShift() {
                let val = 0
                if (orientation == 'y') {
                    if (textLabels == 'top') {
                        val = 15
                    } else if (textLabels == 'bottom') {
                        val = -15
                    } else if (textLabels == 'outside') {
                        val = -15
                    }
                } else {
                    if (textLabels == 'right') {
                        val = -30
                    } else if (textLabels == 'left') {
                        val = 3
                    } else if (textLabels == 'outside') {
                        val = 30
                    }
                }
                return val
            }

            function legendHeight(domain, width) {
                let total = 0, padding = 15
                for (const label of domain) {
                    total += (labelLength(label, style) + swatchSize + padding)
                }
                return (Math.ceil(total / width) * swatchSize) + (swatchSize * 1.75)
            }

            function ticksId(id) {
                if ([-1, 'none', 'hide'].includes(id)) {
                    return -1
                } else if ([-2, 'first-last'].includes(id)) {
                    return -2
                } else if ([-3, 'abreviate'].includes(id)) {
                    return -3
                } else if (['2nd', '3rd', '4th', '5th'].includes(id)) {
                    return 0
                }
                return id
            }

            function tooltips(chart, styles) {
                function idGenerator() {
                    function S4() {
                        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
                    }
                    return 'a' + S4() + S4()
                }

                function ordinal(num) {
                    if (num == 1) return '1st'
                    if (num == 2) return '2nd'
                    if (num == 3) return '3rd'
                    return `${num}th`
                }

                let wrapper = d3.select(chart).node().tagName === 'FIGURE' ? d3.select(chart).select('svg') : d3.select(chart)
                const svgs = d3.select(chart).selectAll('svg')
                if (svgs.size() > 1) wrapper = d3.select([...svgs].pop())
                wrapper.style('overflow', 'visible')

                if (maxBarSize > 0) {
                    wrapper.selectAll('rect').each(function () {
                        const item = d3.select(this)
                        if (chartType == 'bary') {
                            const w = parseFloat(item.attr('width'), 10)
                            if (w > maxBarSize) {
                                item.attr('width', maxBarSize)
                                item.attr('x', parseFloat(item.attr('x'), 10) + ((w - maxBarSize) / 2))
                            }
                        } else if (chartType == 'bar') {
                            const h = parseFloat(item.attr('height'), 10)
                            if (h > maxBarSize) {
                                item.attr('height', maxBarSize)
                                item.attr('y', parseFloat(item.attr('y'), 10) + ((h - maxBarSize) / 2))
                            }
                        }
                    })
                }

                wrapper.selectAll('path').each(function () {
                    const item = d3.select(this)
                    if (item.attr('fill') === null || item.attr('fill') === 'none') {
                        item.style('pointer-events', 'visibleStroke')
                    }
                })
                if (styles === undefined) styles = {}

                const tip = wrapper
                    .selectAll('.hover')
                    .data([1])
                    .join('g')
                    .attr('class', 'hover')
                    .style('pointer-events', 'none')
                    .style('text-anchor', 'start')

                const id = idGenerator()

                // Add the event listeners
                d3.select(chart).classed(id, true)
                wrapper.selectAll('title').each(function () {
                    const item = d3.select(this)
                    const text = item.text()
                    const parent = d3.select(this.parentNode)

                    if (text) {
                        const data = chartData.filter(x => `${x[xkey]}|${x[ykey]}|${x[zkey]}|${x[group]}` == (text.substr(text.length - 3) == '|CI' ? text.substr(0, text.length - 3) : text))[0]
                        if (data) {
                            const val = parseFloat(data[orientation == 'y' ? ykey : xkey], 10)
                            parent
                                .classed(`plot-item${text.substr(text.length - 3) == '|CI' ? ' confidence-interval' : ''}`, true)
                                .attr('data-title', text)
                                .attr('data-name', `${data[orientation == 'y' ? xkey : ykey]}`)
                                .attr('data-group', group ? data[group] : zkey ? data[zkey] : '')
                                .attr('data-series', `${zkey ? data[zkey] : data[orientation == 'y' ? xkey : ykey]}`)
                                .attr('data-value', val)
                                .attr('data-quantile', x => {
                                    if (['quartile', 'quintile', 'decile'].includes(dataFormat)) {
                                        if (quantile && quantile != '' && data[quantile] && isNumeric(data[quantile])) {
                                            return data[quantile]
                                        }
                                        const ranges = getQuantileRanges(chartData.map(x => x[orientation == 'y' ? ykey : xkey]).sort(function (a, b) { return a - b }), dataFormat)
                                        return isNaN(val) ? 0 : getQuantile(ranges, val) + 1
                                    }
                                    return -1
                                })
                                .attr('data-rank', x => {
                                    const ranges = chartData.map(x => x[orientation == 'y' ? ykey : xkey]).sort(function (a, b) { return a - b })
                                    return isNaN(val) ? 0 : `${ranges.indexOf(val) + 1}/${chartData.length}`
                                })
                                .attr('data-percentile', x => {
                                    return isNaN(val) ? 0 : ((val - min) / (max - min)) * 100
                                })
                            item.remove()
                        } else if (text.substr(text.length - 3) == '|CI') {
                            parent.classed('plot-item confidence-interval', true)
                        }
                    }

                    // Mouse events
                    parent
                        .on('click', clicked)
                        .on('pointerenter pointermove', function (event) {
                            let text = `${this.getAttribute('data-name')}${zkey && group ? ', ' + this.getAttribute('data-series') : ''}: ${getLabelText(this.getAttribute('data-value'), 'tooltip')}`
                            if (['quartile', 'quintile', 'decile'].includes(chartType)) {
                                text = `${this.getAttribute('data-name')}: ${ordinal(this.getAttribute('data-quantile'), 'tooltip')} ${chartType}`
                            }

                            if (!(['line', 'linex', 'liney'].includes(chartType) && parent.node().tagName != 'circle')) {
                                const pointer = d3.pointer(event, wrapper.node())
                                if (text && text != 'null: null') {
                                    tip.call(hover, pointer, (`${this.getAttribute('data-group') != '' ? `${this.getAttribute('data-group')}\n` : ''}${text}${self.tooltipTitle && self.tooltipTitle != '' ? `\n(${self.tooltipTitle})` : self.title ? `\n(${self.title})` : ''}`).split('\n'))
                                } else {
                                    tip.selectAll('*').remove()
                                }

                                //d3.select(`#${self.el}`).selectAll(`[data-series="${this.getAttribute('data-series')}"]`).raise()
                                const tipSize = tip.node().getBBox()
                                if (pointer[0] + tipSize.width > wrapper.attr('width')) {
                                    tip.attr('transform', `translate(${pointer[0] - (tipSize.width - (wrapper.attr('width') - pointer[0]))}, ${pointer[1] + 7})`)
                                }
                            }

                            highlight(event, this.getAttribute('data-series'))
                        })
                        .on('pointerout', function (event) {
                            tip.call(resetHighlight)
                            tip.selectAll('*').remove()
                            d3.select(this).lower()
                        })
                })
                wrapper.on('touchstart', _ => tip.selectAll('*').remove())

                wrapper.selectAll('g[aria-label]').each(function () {
                    d3.select(this).attr('aria-label', null)
                })

                document.head.insertAdjacentHTML('beforeend', `
                    <style>
                        .${id} .plot-item { cursor: pointer  pointer-events: all }
                        .${id} .plot-item:hover { ${Object.entries(styles).map(([key, value]) => `${key}: ${value}`).join(' ')} }
                    </style>`
                )

                return chart
            }
        }

        function getDims(el) {
            function getElDims(el, dim) {
                const cs = getComputedStyle(el)
                paddingX += (parseFloat(cs.paddingLeft, 10) + parseFloat(cs.paddingRight, 10))
                paddingY += (parseFloat(cs.paddingTop, 10) + parseFloat(cs.paddingBottom, 10))
                borderX += (parseFloat(cs.borderLeftWidth, 10) + parseFloat(cs.borderRightWidth, 10))
                borderY += (parseFloat(cs.borderTopWidth, 10) + parseFloat(cs.borderBottomWidth, 10))

                if (el.clientWidth) {
                    return dim == 'width' ? el.clientWidth - paddingX - borderX : el.clientHeight - paddingY - borderY
                }
                return getElDims(el.parentElement, dim)
            }

            let w = el.style.width || '100%'
            let h = el.style.height || '0px'
            let paddingX = 0, paddingY = 0, borderX = 0, borderY = 0

            if (w.substr(-1) == '%') {
                w = getElDims(el, 'width')
            } else {
                w = parseFloat(w, 10)
            }
            if (h.substr(-1) == '%') {
                h = getElDims(el, 'height')
            } else {
                h = parseFloat(h, 10)
            }

            return { width: w, height: h }
        }

        function isNumeric(x) {
            return !isNaN(parseFloat(x)) && isFinite(x)
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }

        function sortDomain(data, keys, xkey, ykey, facet) {
            function sortKeys(keys) {
                function sortKey(key) {
                    let sortOrder = 1
                    if (key[0] == '-') {
                        sortOrder = -1
                        key = key.substr(1)
                    }
                    return function (a, b) {
                        return ((a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0) * sortOrder
                    }
                }

                return function (a, b) {
                    let i = 0, result = 0
                    while (result == 0 && i < keys.length) {
                        result = sortKey(keys[i])(a, b)
                        i++
                    }
                    return result
                }
            }

            let unsorted = data.slice()
            if (ykey && facet) unsorted = unsorted.filter(x => x[ykey] == facet)
            return unsorted.sort(sortKeys(Array.isArray(keys) ? keys : [keys])).map(x => x[xkey])
        }

        function formatNumber(x, dp=2) {
            if (!x && x != 0) return ''
            if (isNumeric(x)) {
                if (parseInt(x, 10) != parseFloat(x, 10)) {
                    return parseFloat(x, 10).toFixed(dp).toString()
                } else {
                    return parseInt(x, 10).toString()
                }
            }
            return x.toString()
        }

        function getLabelText(key, pos) {
            function approximate(key, dp, pos) {
                let num = parseFloat(key, 10).toFixed(dp).toString(), aprox = ''

                if (!num.replace('.', '').match(/[^0]/g)) {
                    aprox = '~'
                    if (pos == 'label') return aprox + num
                    num = parseFloat(key, 10).toFixed(dp + 1).toString()
                }
                if (!num.replace('.', '').match(/[^0]/g)) {
                    num = parseFloat(key, 10).toFixed(dp + 2).toString()
                }

                return aprox + num
            }

            function fraction(key){
                const test = (String(key).split('.')[1] || []).length
                const num = key * (10**Number(test))
                const den = 10**Number(test)
                function reduce(numerator, denominator) {
                    let gcd = function gcd(a, b) {
                        return b ? gcd(b, a % b) : a
                    }
                    gcd = gcd(numerator, denominator)
                    return [numerator / gcd, denominator / gcd]
                }
                return `${reduce(num,den)[0]}/${reduce(num,den)[1]}`
            }

            if (!key && pos == 'tooltip') return null
            if (!isNumeric(key)) return key
            let text
            let dp = null
            if (!['axis', 'xaxis', 'yaxis'].includes(pos)) {
                if (isNumeric(rounding)) {
                    dp = rounding
                } else if (rounding && rounding.substr(-2) == 'dp' && isNumeric(rounding.substr(0, rounding.length - 2))) {
                    dp = parseInt(rounding.substr(0, rounding.length - 2), 10)
                }
            }

            if (['percent', '%'].includes(scale)) {
                return `${pos == 'tooltip' || pos == 'label' ? approximate(key, dp != null ? dp : 1, pos) : key}%`
            } else if (['£', '$', '€'].includes(scale)) {
                return `${scale == 'currency' ? '£' : scale}${numberWithCommas(parseFloat(key, 10).toFixed(dp != null ? dp : 2))}`
            } else if (['££', '$$', '€€'].includes(scale)) {
                return `${scale == 'currency' ? '£' : scale.substr(0, 1)}${numberWithCommas(parseFloat(key, 10).toFixed(dp != null ? dp : 0))}`
            } else if (['£m', '$m', '€m'].includes(scale)) {
                return `${scale.substr(0, 1)}${numberWithCommas((parseFloat(key)/1000000).toFixed(dp != null ? dp : 0))}m`
            } else if (['£bn', '$bn', '€bn'].includes(scale)) {
                return `${scale.substr(0, 1)}${numberWithCommas((parseFloat(key)/1000000000).toFixed(dp != null ? dp : 0))}bn`
            } else if (scale == 'number') {
                text = numberWithCommas(key)
            } else if (scale.toLowerCase() == 'ratio') {
                if ((xscale == 'log' || yscale == 'log') && key < 1) {
                    text = ''
                    if (pos == 'tooltip' || pos == 'label') {
                        text = `${parseFloat(key, 10).toFixed(1)}x` //`${fraction(key)}x`
                    } else {
                        for (let i = 1; i < 10; i++) {
                            if (parseFloat(key, 10).toFixed(1) == (1 / i).toFixed(1)) text = `1/${i}x`
                        }
                    }
                } else {
                    text = `${formatNumber(key, dp != null ? dp : 1)}x`
                }
            } else {
                text = formatNumber(key, dp != null ? dp : 1)
            }
            return pos == 'tooltip' && scale != '' ? `${text} (${scale})` : text.toString()
        }

        function abreviate(text) {
            if (!text && text != 0) return ''
            text = (text + ' ').trim()
            if (text.toLowerCase() == 'total') return 'TTL'
            if (text.toLowerCase() == 'average') return 'AVG'
            if (text.length == 4 && isNumeric(text) && (text.substr(0, 2) == '19' || text.substr(0, 2) == '20')) return `’${text.substr(2)}`
            return text.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('')
        }

        function maxLabelLength(data, key, style) {
            if (maximumLabelLength > 0) return maximumLabelLength
            if (['quartile', 'quintile', 'decile'].includes(chartType)) return 0
            let max = (Array.isArray(data[0]) ? data.flat() : data).map(x => { return { 'text': formatNumber(x[key]), 'length': (isNumeric(x[key]) ? parseInt(x[key], 10) : x[key] ? x[key] : '').toString().length }}).sort(function (a, b) { return b['length'] - a['length'] })
            if (max[0] && max[0].text) {
                return labelLength(getLabelText(max[0].text, 'axis'), style) * 1.1
            }
            return ''
        }

        function labelLength(text, style) {
            const ns = 'http://www.w3.org/2000/svg'
            const svg = document.createElementNS(ns, 'svg')
            svg.setAttribute('style', `font-size: ${style.fontSize}; font-family: ${style.fontFamily}; font-weight: ${style.fontWeight || 'normal'};`)
            const txt = document.createElementNS(ns, 'text')
            txt.textContent = text
            svg.appendChild(txt)
            document.body.appendChild(svg)
            const w = txt.getComputedTextLength()
            svg.remove()

            //const canvas = document.createElement('canvas'), context = canvas.getContext('2d')
            //context.font = `${style.fontSize} "${style.fontFamily}" ${style.fontWeight || 'normal'}`
            //const w = Math.ceil(context.measureText(text).width)

            return w
        }

        function hover(tip, pos, text) {
            const side_padding = 10
            const vertical_padding = 10
            const vertical_offset = 15
            tip.selectAll('*').remove()

            tip
                .style('text-anchor', 'start')
                .style('pointer-events', 'none')
                .attr('transform', `translate(${pos[0]}, ${pos[1] + 7})`)
                .selectAll('text')
                .data(text)
                .join('text')
                .style('dominant-baseline', 'ideographic')
                .text(x => x)
                .attr('y', (_, i) => { return (i - (text.length - 1)) * 20 - vertical_offset })
                .style('font-weight', (x, i) => { return (x.indexOf(':') > -1 ? 'bold' : 'normal') })
                .style('color', x => { return x.substr(0, 1) == '(' && x.substr(-1) == ')' ? '#999' : '' })

            const bbox = tip.node().getBBox()
            tip
                .append('rect')
                .attr('y', bbox.y - vertical_padding)
                .attr('x', bbox.x - side_padding)
                .attr('width', bbox.width + side_padding * 2)
                .attr('height', bbox.height + vertical_padding * 2)
                .style('fill', 'white')
                .style('stroke', '#d3d3d3')
                .lower()
        }

        function getStatus(item) {
            return {
                chart: self,
                name: item.getAttribute('data-name'),
                value: getLabelText(item.getAttribute('data-value'), 'tooltip'),
                min: self.min,
                max: self.max,
                mean: self.mean,
                median: self.median,
                scale: self.scale,
                quantile: isNumeric(item.getAttribute('data-quantile')) ? parseFloat(item.getAttribute('data-quantile'), 10) : item.getAttribute('data-quantile'),
                rank: isNumeric(item.getAttribute('data-rank')) ? parseFloat(item.getAttribute('data-rank'), 10) : item.getAttribute('data-rank'),
                percentile: isNumeric(item.getAttribute('data-percentile')) ? parseFloat(item.getAttribute('data-percentile'), 10) : item.getAttribute('data-percentile')
            }
        }

        function highlight(event, series) {
            if (self.onRollover) {
                try {
                    const status = getStatus(event.target || this)
                    if (status.name != null && status.value != null) window[self.onRollover](status)
                }
                catch (e) {}
            }

            if (series || this) {
                self.highlight(series || this.getAttribute('data-name') || this.innerText)
            }
        }

        function resetHighlight(event) {
            if (self.onRollover) {
                try {
                    window[self.onRollover]({ chart: self, name: '' })
                }
                catch (e) {}
            }

            self.resetHighlight()
        }

        function clicked(event, selected) {
            try {
                event.stopPropagation()
            }
            catch (e) {}

            if (self.onClick) {
                try {
                    const status = getStatus(this)
                    if (status.name != null && status.value != null) window[self.onClick](status)
                }
                catch (e) {}
            }

            let series = event['series'] || event.target.getAttribute('data-series')
            if (!series && event.target.nodeName == 'rect') {
                series = event.target.parentNode.parentNode.getAttribute('data-series')
            }

            if (self.clickBehaviour == 'outline') {
            } else if (self.clickBehaviour == 'fade') {
                const selector = (Array.isArray(series) ? series : [series]).map(x => `[data-series="${x}"]`).join(', ')
                d3.select(`#${self.el}`).selectAll(selector).style('opacity', function () {
                    const item = d3.select(this)
                    const parent = d3.select(this.parentNode)
                    if (!(item.node().nodeName == (self.isInteractive && !self.legendCheckboxes ? 'BUTTON' : 'SPAN') && selected === true)) {
                        if (item.attr('data-faded') == 'true') {
                            item.attr('data-faded', 'false')
                            return 1
                        } else {
                            item.attr('data-faded', 'true')
                            return 0.1
                        }
                    } else {
                        return 0.1
                    }
                })
            } else if (self.clickBehaviour == 'filter') {
                let hidden = self.hidden || [], filtered = true
                if (hidden.indexOf(series) > -1) {
                    filtered = false
                    hidden = hidden.filter(x => x != series)
                } else {
                    hidden.push(series)
                }

                d3.select(`#${self.el}`).selectAll(`${self.isInteractive ? self.legendCheckboxes ? 'input' : 'button' : 'span'}[data-series="${series}"]`).style('opacity', function () {
                    const item = d3.select(this)
                    item.attr('data-filtered', filtered)
                    item.classed('active', filtered)
                    return 0.1
                })

                self.filteredData = self.originalData.filter(x => hidden.indexOf(x[zkey ? zkey : ['bary', 'doty', 'liney'].includes(chartType) == 'y' ? xkey : ykey]) == -1)
                self.render(self.filteredData)
                self.hidden = hidden
            } else if (self.clickBehaviour == 'isolate') {
                d3.select(`#${self.el}`).selectAll(`[data-series]`).style('opacity', function () {
                    const item = d3.select(this)
                    const parent = d3.select(this.parentNode)
                    if (!(item.node().nodeName == (self.isInteractive && !self.legendCheckboxes ? 'BUTTON' : 'SPAN') && selected === true)) {
                        if ((Array.isArray(series) ? series : [series]).includes(item.attr('data-series'))) {
                            if (item.attr('data-isolated') == 'true') {
                                item.attr('data-isolated', 'false')
                                return 0.1
                            } else {
                                item.attr('data-isolated', 'true')
                                return 1
                            }
                        } else {
                            if (!item.attr('data-isolated')) item.attr('data-isolated', 'false')
                            return 0.1
                        }
                    } else if (item.node().nodeName == (self.isInteractive && !self.legendCheckboxes ? 'BUTTON' : 'SPAN')) {
                        return (Array.isArray(series) ? series : [series]).includes(item.attr('data-series')) ? 1 : 0.1
                    }
                })
                if (d3.select(`#${self.el}`).selectAll(`[data-isolated="true"]`).size() == 0) {
                    d3.select(`#${self.el}`).selectAll(`[data-isolated]`).style('opacity', 1).classed('active', true).classed('inactive', false)
                } else {
                    d3.select(`#${this.el}`).selectAll(`[data-isolated="false"]`).style('opacity', 0.1).classed('active', false).classed('inactive', true)
                }
            }
        }
    }

    highlight(item) {
        function rgbToHex(r, g, b) {
            function componentToHex(c) {
                const hex = c.toString(16)
                return hex.length == 1 ? '0' + hex : hex
            }
            return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
        }

        function hexToRgb(hex) {
            const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
            hex = hex.replace(regex, function (m, r, g, b) {
              return r + r + g + g + b + b
            })
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null
        }

        try {
            const type = Array.isArray(this.options.type) ? this.options.type[0].toLowerCase() : this.options.type.toLowerCase() || 'bar'

            if (type == 'dot') {
                d3.select(`#${this.el}`).selectAll('circle').style('stroke-width', 0)
                d3.select(`#${this.el}`).selectAll(`circle[data-name="${item}"]`).style('stroke-width', 10)
                const fill = hexToRgb(d3.select(`#${this.el}`).selectAll(`circle[data-name="${item}"]`).attr('fill'))
                d3.select(`#${this.el}`).selectAll(`circle[data-name="${item}"]`).style('stroke', `rgba(${fill.r}, ${fill.g}, ${fill.b}, 0.5)`)
            } else if (['bar', 'bary', 'line', 'liney'].includes(type)) {
                if (this.rolloverBehaviour == 'outline') {
                    d3.select(`#${this.el}`).selectAll(`rect[data-series]`).style('stroke-width', 0)
                    d3.select(`#${this.el}`).selectAll(`rect[data-series="${item}"]`).style('stroke-width', 5)
                    d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-series]`).style('opacity', 0.1)
                    d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-series="${item}"]`).style('opacity', 1)
                } else if (this.rolloverBehaviour == 'fade') {
                    d3.select(`#${this.el}`).selectAll(`[data-series]`).style('opacity', function () {
                        return d3.select(this).attr('data-series') == item ? 1 : 0.1
                    })
                }
            }

            //d3.select(`#${this.el}`).selectAll('svg').classed('highlight-ci', true)
            d3.select(`#${this.el}`).selectAll(`[data-series="${item}"]`).classed('highlight', true)
            d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-filtered="true"]`).style('opacity', 0.1)
            d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-filtered]`).style('text-decoration', 'none')
            d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-filtered="true"]`).style('text-decoration', 'line-through')
        }
        catch (e) {}
    }

    resetHighlight() {
        try {
            const type = Array.isArray(this.options.type) ? this.options.type[0].toLowerCase() : this.options.type.toLowerCase() || 'bar'

            if (type == 'dot') {
                d3.select(`#${this.el}`).selectAll('circle').style('stroke-width', 0)
                d3.select(`#${this.el}`).selectAll(`circle[data-name="${item}"]`).style('stroke', 'unset')
            } else if (['bar', 'bary', 'line', 'liney'].includes(type)) {
                if (this.rolloverBehaviour == 'outline') {
                    d3.select(`#${this.el}`).selectAll(`rect[data-series]`).style('stroke-width', 0)
                    d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-series]`).style('opacity', 1)
                } else if (this.rolloverBehaviour == 'fade') {
                    d3.select(`#${this.el}`).selectAll(`[data-series]`).style('opacity', 1)
                }
            }

            //d3.select(`#${this.el}`).selectAll('svg').classed('highlight-ci', false)
            d3.select(`#${this.el}`).selectAll(`[data-series]`).classed('highlight', false)
            if (this.clickBehaviour == 'fade') {
                d3.select(`#${this.el}`).selectAll(`[data-faded="false"]`).style('opacity', 1)
                d3.select(`#${this.el}`).selectAll(`[data-faded="true"]`).style('opacity', 0.1)
            } else if (this.clickBehaviour == 'isolate') {
                if (d3.select(`#${this.el}`).selectAll(`[data-isolated="true"]`).size() == 0) {
                    d3.select(`#${this.el}`).selectAll(`[data-isolated]`).style('opacity', 1).classed('active', true).classed('inactive', false)
                } else {
                    d3.select(`#${this.el}`).selectAll(`[data-isolated="false"]`).style('opacity', 0.1).classed('active', false).classed('inactive', true)
                    d3.select(`#${this.el}`).selectAll(`[data-isolated="true"]`).style('opacity', 1).classed('active', true).classed('inactive', false)
                }
            }
            d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-filtered="false"]`).style('opacity', 1)
            d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-filtered="true"]`).style('opacity', 0.1)
            d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-filtered]`).style('text-decoration', 'none')
            d3.select(`#${this.el}`).selectAll(`${this.isInteractive ? 'button' : 'span'}[data-filtered="true"]`).style('text-decoration', 'line-through')
        }
        catch (e) {}
    }

    status(item) {
        if (!item) item = this.options.yvalue
        if (!item) return

        function isNumeric(x) {
            return !isNaN(parseFloat(x)) && isFinite(x)
        }

        item = d3.select(`#${this.el}`).selectAll(`[data-name="${item}"]`).nodes()[0]

        return {
            chart: this,
            name: item.getAttribute('data-name'),
            value: item.getAttribute('data-value'),
            min: this.min,
            max: this.max,
            mean: this.mean,
            median: this.median,
            scale: this.scale,
            quantile: isNumeric(item.getAttribute('data-quantile')) ? parseFloat(item.getAttribute('data-quantile'), 10) : item.getAttribute('data-quantile'),
            rank: isNumeric(item.getAttribute('data-rank')) ? parseFloat(item.getAttribute('data-rank'), 10) : item.getAttribute('data-rank'),
            percentile: isNumeric(item.getAttribute('data-percentile')) ? parseFloat(item.getAttribute('data-percentile'), 10) : item.getAttribute('data-percentile')
        }
    }

    update(data) {
        this.render(data)
    }

    async downloadSize() {
        await this._until(_ => this.rendered == true)
        const svgs = document.getElementById(this.el).getElementsByTagName('svg')
        if (svgs) {
            let size = await this.download(null, 'size')
            if (isNaN(size)) {
                size = ''
            } else if (size > 1000000) {
                size = `${parseInt(size / 1000000, 10)}MB`
            } else if (size > 1000) {
                size = `${parseInt(size / 1000, 10)}KB`
            } else {
                size = `${parseInt(size, 10)}B`
            }
            return size
        }
        return 0
    }

    async download(filename, mode) {
        await this._until(_ => this.rendered == true)

        function isHidden(el) {
            el = document.getElementById(el)
            return el.offsetParent === null
            const style = window.getComputedStyle(el)
            return style.display === 'none'
        }

        return this.rasterize(this.el, mode).then(data => {
            if (mode == 'size') {
                return data && data.size || 0
            } else {
                if (!filename) filename = `${this.el}.png`
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveBlob(data, filename)
                } else {
                    const a = document.createElement('a')
                    a.href = URL.createObjectURL(data)
                    a.download = filename
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                }
            }
        })
    }

    rasterize(el, mode) {
        function serialize(svg) {
            const xmlns = 'http://www.w3.org/2000/xmlns/'
            const xlinkns = 'http://www.w3.org/1999/xlink'
            const svgns = 'http://www.w3.org/2000/svg'

            svg = svg.cloneNode(true)
            const fragment = window.location.href + '#'
            const walker = document.createTreeWalker(svg, NodeFilter.SHOW_ELEMENT)
            while (walker.nextNode()) {
                for (const attr of walker.currentNode.attributes) {
                    if (attr.value.includes(fragment)) {
                        attr.value = attr.value.replace(fragment, '#')
                    }
                }
            }
            svg.setAttributeNS(xmlns, 'xmlns', svgns)
            svg.setAttributeNS(xmlns, 'xmlns:xlink', xlinkns)
            const serializer = new window.XMLSerializer
            const string = serializer.serializeToString(svg)
            return new Blob([string], { type: 'image/svg+xml' })
        }

        function addfont(svg) {
            let style = document.createElementNS('http://www.w3.org/2000/svg', 'style')
            const css = '@font-face { font-family: "GDS Transport"; src: url("data:application/octet-stream;base64,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"); }'
            style.textContent = css
            svg.appendChild(style)
            return svg
        }

        function addTitle(context, title, maxWidth) {
            let height = 0, h = 30
            if (title != '') {
                context.font = '21px "GDS Transport"'
                context.textAlign = 'left'
                context.fillStyle = '#000'

                let words = title.split(' '), lines = [], currentLine = words[0]
                for (let i = 1; i < words.length; i++) {
                    const width = context.measureText(currentLine + ' ' + words[i]).width
                    if (width < maxWidth) {
                        currentLine += ' ' + words[i]
                    } else {
                        lines.push(currentLine)
                        currentLine = words[i]
                    }
                }
                lines.push(currentLine)

                for (let i = 0; i < lines.length; i++) {
                    height += h
                    context.fillText(lines[i], 5, height)
                }
            }
            return height == 0 ? 0 : height + h
        }

        function addLegend(context, legends, currentHeight, maxWidth, colourScheme) {
            let height = 0, h = 30, x = 5
            currentHeight += 10
            if (legends) {
                context.font = '16px "GDS Transport"'
                context.textAlign = 'left'
                height += h

                for (let i = 0; i < legends.length; i++) {
                    context.beginPath()
                    context.fillStyle = colourScheme[i]
                    context.fillRect(x, currentHeight + height - 17, 20, 20)

                    context.fillStyle = '#000'
                    context.fillText(legends[i], x + 30, currentHeight + height)
                    x += context.measureText(legends[i]).width + 50
                    const next = i < legends.length ? context.measureText(legends[i + 1]).width : 0
                    if (x + next + 50 > maxWidth) {
                        x = 5
                        height += h
                    }
                }
            }
            return height == 0 ? 0 : height + h
        }

        const svgs = document.getElementById(this.el).getElementsByTagName('svg')
        let svg = svgs[0]//[svgs.length - 1]
        svg = addfont(svg)
        const bg = svg.style.backgroundColor
        svg.style.backgroundColor = '#fff'
        let title = this.options.title !== 'undefined' && this.options.title != '' ? this.options.title : ''
        if (title != '') {
            title += this.options.label && this.options.label !== 'undefined' && this.options.label != '' ? ` (${this.options.label})` : ''
        }
        const colourScheme = this.options.colourScheme || ['#C6322A','#F2B06E', '#FFFEC6', '#B1D678', '#47934B']

        let resolve, reject
        const promise = new Promise((y, n) => (resolve = y, reject = n))
        const image = new Image
        image.onerror = reject
        image.onload = () => {
            const rect = svg.getBoundingClientRect()
            if (rect.width == 0) rect.width = svg.getAttribute('width')
            if (rect.height == 0) rect.height = svg.getAttribute('height')
            let canvas = document.createElement('canvas'), context = canvas.getContext('2d')
            let width = rect.width, height = rect.height, h = 0
            if (title != '') height += 30
            canvas.width = width
            canvas.height = 10000 //height

            context.fillStyle = '#fff'
            context.fillRect(0, 0, canvas.width, canvas.height)
            h += addTitle(context, title, width - 10)
            context.drawImage(image, 0, h, width, height)
            h += addLegend(context, this.legends, height + h, width - 10, this.options.reverseLegend ? [...colourScheme.slice(0, this.legends.length).reverse()] : colourScheme)

            if (width > 0 && h > 0) {
                const img = canvas
                canvas = document.createElement('canvas'), context = canvas.getContext('2d')
                canvas.width = width
                canvas.height = height + h
                context.drawImage(img, 0, 0)
            }

            context.canvas.toBlob(resolve)
        }
        image.src = URL.createObjectURL(serialize(svg))
        svg.style.backgroundColor = bg
        return promise
    }
}

//new Chart()
