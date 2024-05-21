const maps = {};
const mapsData = {};

function buildMap(mapId, datafile, download, overrideOptions) {
    function mapSelect1(a) {
        let map = undefined, chart = undefined

        try {
            const el = (a.map || a.chart).el.replace('map', '').replace('chart', '')
            if (typeof window[`map${el}`] !== 'undefined') map = eval(`map${el}`)
            if (typeof window[`chart${el}`] !== 'undefined') chart = eval(`chart${el}`)

            if (typeof a !== 'undefined' && typeof a.name !== 'undefined' && a.name != '') {
                let performance = ''
                if (a.quantile == 1) performance = '1 (lowest)'
                if (a.quantile == 2) performance = '2 (second lowest)'
                if (a.quantile == 3) performance = '3 (middle)'
                if (a.quantile == 4) performance = '4 (second highest)'
                if (a.quantile == 5) performance = '5 (highest)'

                document.getElementById(`map_tooltip${el}`).style.visibility = 'visible'
                document.getElementById(`map_tooltip${el}_area`).innerText = a.name
                document.getElementById(`map_tooltip${el}_title`).innerText = (a.map || a.chart).tooltipTitle || (a.map || a.chart).title
                if (typeof (a.map || a.chart).options.label !== 'undefined') {
                    document.getElementById(`map_tooltip${el}_title`).innerText += ` (${(a.map || a.chart).options.label })`
                }
                document.getElementById(`map_tooltip${el}_value`).innerText = a.value
                if (performance != '') {
                    document.getElementById(`map_tooltip${el}_quintile`).innerText = 'Quintile'
                    document.getElementById(`map_tooltip${el}_performance`).innerText = performance
                }

                if (map) {
                    map.resetHighlight()
                    map.highlight(a.name)
                }
                if (chart) {
                    chart.resetHighlight()
                    chart.highlight(a.name)
                }
            } else {
                document.getElementById(`map_tooltip${el}`).style.visibility = 'hidden'
                if (map) map.resetHighlight()
                if (chart) chart.resetHighlight()
            }
        }
        catch (e) {}
    }

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
    if (overrideOptions && typeof overrideOptions.filename !== 'undefined') {
        options['filename'] = overrideOptions.filename
    }

    const reversePolarity = typeof options.reversePolarity !== 'undefined' && options.reversePolarity;
    if (reversePolarity) {
        document.getElementById('scaleQunitile' + mapId).classList.add('reversePolarity');
    }
    else {
        document.getElementById('scaleQunitile' + mapId).classList.remove('reversePolarity');
    }

    if (options['onClick'] === 'mapSelect1') {
        options.onClick = mapSelect1;
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

function downloadMap(mapId, datafile, label, filename) {
    if (datafile) {
        const data = mapsData[mapId]
        buildMap(mapId, datafile, true, { label, filename })
        setTimeout(function () {
            buildMap(mapId, data, filename)
        }, 2000)
    } else {
        maps[mapId].download(filename)
    }
}
