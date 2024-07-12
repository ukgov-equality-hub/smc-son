const charts = {};
const chartsData = {};

function buildChart(chartId, datafile, download, overrideOptions) {
    const chartOptionsBase64 = document.getElementById('chartOptions' + chartId).textContent.trim();
    const chartOptionsText = (new TextDecoder()).decode(Uint8Array.from(atob(chartOptionsBase64), (m) => m.codePointAt(0)));  // Decode the base 64 text
    const options = JSON.parse(chartOptionsText);

    if (typeof options.data !== 'undefined' && Array.isArray(options.data)) options.data = options.data[options.data.length - 1]
    if (options.type != 'dot') {
        options.width = document.getElementById('maincontent').offsetWidth
    } else if (typeof options.map !== 'undefined') {
        options.height = 800
    }
    if (download) options.download = download

    chartsData[chartId] = datafile || options.data.data || options.data
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
    if (overrideOptions && typeof overrideOptions.xtitle !== 'undefined') {
        options['xtitle'] = overrideOptions.xtitle
    } else if (!overrideOptions && !datafile && options.data && typeof options.data.xtitle !== 'undefined') {
        options['xtitle'] = options.data.xtitle
    }
    if (overrideOptions && typeof overrideOptions.filename !== 'undefined') {
        options['filename'] = overrideOptions.filename
    }

    charts[chartId] = new Chart(
        'chart' + chartId,
        chartsData[chartId],
        options
    )

    const items = document.getElementsByClassName('chartSize' + chartId)
    for (let i = 0; i < items.length; i++) {
        charts[chartId].downloadSize().then(data => {
            items.item(i).innerText = ' ' + data
        })
    }
}

window.document.addEventListener('DOMContentLoaded', function () {
    const prefix = 'chart'
    const chartElements = document.querySelectorAll('[id^="' + prefix + '"]');
    chartElements.forEach(chartElement => {
        const chartId = chartElement.id.substring(prefix.length);
        if (parseInt(chartId).toString() === chartId) {  // Is the element id in the form chart123 (rather than chartFooBar)
            buildChart(chartId);
        }
    })
})

function downloadChart(chartId, datafile, label, filename) {
    if (datafile) {
        const data = chartsData[chartId]
        buildChart(chartId, datafile, true, { label, filename })
        setTimeout(function () {
            buildChart(chartId, data)
        }, 2000)
    } else {
        charts[chartId].download(filename)
    }
}
