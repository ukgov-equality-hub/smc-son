
window.document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('social-mobility-by-area-map')) {

        function areaName(a) {
            document.getElementById('social-mobility-by-area-name').innerText = a.name;
            document.getElementById('social-mobility-by-area-name').style.display = a.name == '' ? 'none' : 'block';
        }

        function areaSelect(a) {
            location.href = `${map_element.getAttribute('data-area-page-url-prefix')}/${a.name.toLowerCase().replace(/ /g, '_').replace(/\//g, '_and_')}`;
        }

        function handleMouseMove(event) {
            document.getElementById('social-mobility-by-area-name').style.top = `${event.offsetY + 10}px`;
            document.getElementById('social-mobility-by-area-name').style.left = `${event.offsetX + 10}px`;
        }

        document.getElementById('social-mobility-by-area-map-container').onmousemove = handleMouseMove;

        const map_element = document.getElementById('social-mobility-by-area-map');

        const map = new Choropleth(
            'social-mobility-by-area-map',
            map_element.getAttribute('data-shapefile-url'),
            map_element.getAttribute('data-areas-csv-url'),
            {
                nameField: map_element.getAttribute('data-name-field'),
                valueField: map_element.getAttribute('data-value-field'),
                areaField: map_element.getAttribute('data-area-field'),
                width: 537,
                height: 704,
                labels: true,
                colourScheme: ['#e1e361', '#84b871'],
                allowZoom: map_element.getAttribute('data-allow-zoom') === 'true',
                background: map_element.getAttribute('data-show-background') === 'true',
                rolloverBehaviour: 'fade',
                onRollover: areaName,
                onClick: areaSelect
            }
        );

        const zoomInButton = document.getElementById('mapZoomIn');
        const zoomOutButton = document.getElementById('mapZoomOut');
        if (zoomInButton && zoomOutButton) {
            zoomInButton.addEventListener('click', () => map.zoomIn())
            zoomOutButton.addEventListener('click', () => map.zoomOut())
        }
    }
})
