
window.document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('social-mobility-by-area-map')) {

        function areaName(a) {
            document.getElementById('social-mobility-by-area-name').innerText = a.name;
            document.getElementById('social-mobility-by-area-name').style.display = a.name == '' ? 'none' : 'block';
        }

        function areaSelect(a) {
            location.href = `/social_mobility_by_area/${a.name.toLowerCase().replace(/ /g, '_').replace(/\//g, '_and_')}`;
        }

        function handleMouseMove(event) {
            let eventDoc, doc, body;

            event = event || window.event
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }

            document.getElementById('social-mobility-by-area-name').style.top = `${event.pageY - 10}px`;
            document.getElementById('social-mobility-by-area-name').style.left = `${event.pageX + 20}px`;
        }

        document.onmousemove = handleMouseMove;

        const map = new Choropleth(
            'social-mobility-by-area-map',
            `${location.protocol}//${location.host}/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json`,
            `${location.protocol}//${location.host}/static/data/by-page/social_mobility_by_area/areas.csv`,
            {
                nameField: 'Area_name',
                valueField: 'Value',
                areaField: 'ITL221NM',
                width: 537,
                height: 704,
                labels: true,
                colourScheme: ['#e1e361', '#84b871'],
                allowZoom: false,
                background: true,
                rolloverBehaviour: 'fade',
                onRollover: areaName,
                onClick: areaSelect
            }
        );

    }
})
