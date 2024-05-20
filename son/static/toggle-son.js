const toggleData = {};

function buildToggle(id) {
    const toggleOptionsBase64 = document.getElementById('toggleOptions' + id).textContent.trim();
    const toggleOptionsText = (new TextDecoder()).decode(Uint8Array.from(atob(toggleOptionsBase64), (m) => m.codePointAt(0)));  // Decode the base 64 text
    toggleData[id] = JSON.parse(toggleOptionsText);

    if (document.getElementById('range' + id)) {
        document.getElementById('range' + id).addEventListener('input', function (e) {
            let target = e.target
            target.style.backgroundSize = (target.value - target.min) * 100 / (target.max - target.min) + '% 100%'
        })
    }
}

function selectRange(id, toggleValue) {
    const datafile = toggleData[id].filter(x => x.label === toggleValue)[0].data
    try {
        buildMap(id, datafile, false)
    }
    catch (e) {}
    try {
        buildChart(id, datafile, false)
    }
    catch (e) {}

    if (document.getElementById('map_tooltip' + id)) {
        document.getElementById('map_tooltip' + id).style.visibility = 'hidden'
    }
}

window.document.addEventListener('DOMContentLoaded', function () {
    const prefix = 'toggleOptions'
    const toggleOptionsElements = document.querySelectorAll('[id^="' + prefix + '"]');
    toggleOptionsElements.forEach(toggleOptionsElement => {
        const toggleOptionsId = toggleOptionsElement.id.substring(prefix.length);
        if (parseInt(toggleOptionsId).toString() === toggleOptionsId) {  // Is the element id in the form toggleOptions123 (rather than toggleOptionsFooBar)
            buildToggle(toggleOptionsId);
        }
    })
})
