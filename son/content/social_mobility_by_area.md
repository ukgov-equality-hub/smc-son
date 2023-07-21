## Summary
This section shows how different areas in the UK are ranked for 5 different measures of social mobility.

## HTML
<div class="area-map">
    <div>
        <div id="map" class="map"></div>
    </div>
    <div id="areaName" class="govuk-body"></div>
</div>
<script>
    function areaName(a) {
        document.getElementById('areaName').innerText = a.name
        document.getElementById('areaName').style.display = a.name == '' ? 'none' : 'block'
    }

    function areaSelect(a) {
        location.href = `/social_mobility_by_area/${a.name.toLowerCase().replace(/ /g, '_')}`
    }

    (async function () {
        document.onmousemove = handleMouseMove
        function handleMouseMove(event) {
            let eventDoc, doc, body

            event = event || window.event
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document
                doc = eventDoc.documentElement
                body = eventDoc.body

                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0)
                event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0 )
            }

            document.getElementById('areaName').style.top = `${event.pageY - 10}px`
            document.getElementById('areaName').style.left = `${event.pageX + 20}px`
        }

        const map = new Choropleth(
            'map',
            `${location.protocol}//${location.host}/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json`,
            `${location.protocol}//${location.host}/static/data/indicators/areas.csv`,
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
                onRollover: 'areaName',
                onClick: 'areaSelect'
            }
        )
    })()
</script>

### Measures by region
The 5 measures of social mobility broken down by region are:

* precarious situations – young people in difficult economic circumstances
* promising prospects – young people in good economic circumstances
* socio-cultural advantage – factors that can help people’s chances of social mobility
* childhood poverty and disadvantage – factors that can reduce people’s chances of social mobility
* research and development – economic opportunity, innovation and business location, and their effect on social mobility

Each of these measures combines data from 3 indicators into a single ‘composite’ score to give a more reliable picture of geographical mobility patterns.

For each measure, 41 regions in the UK are ordered from best to worst, and then divided into 5 equally-sized groups (‘quintiles’).

### The 41 regions
We use the ‘international territorial levels’ (ITLs) system developed by the Office for National Statistics. This divides the UK into:

* 12 regions (‘ITL1’)
* 41 regions made up of counties and groups of counties (‘ITL2’)
* 179 smaller regions (‘ITL3’)

The data by geography uses the 41 ‘ITL2’ regions. Each region has between 800,000 and 3 million residents.

The data is based on survey data, mainly from the Labour Force Survey (LFS). In future, we hope to combine more years of LFS data to provide breakdowns by the 179 ‘ITL3’ regions.
 
The 41 ITL2 regions are as follows.

North East (England):

* [Tees Valley and Durham](/social_mobility_by_area/tees_valley_and_durham)
* [Northumberland and Tyne and Wear](/social_mobility_by_area/northumberland_and_tyne_and_wear)

North West (England):

* [Cumbria](/social_mobility_by_area/cumbria)
* [Cheshire](/social_mobility_by_area/cheshire)
* [Greater Manchester](/social_mobility_by_area/greater_manchester)
* [Lancashire](/social_mobility_by_area/lancashire)
* [Merseyside](/social_mobility_by_area/merseyside)

Yorkshire and The Humber:

* [East Yorkshire and Northern Lincolnshire](/social_mobility_by_area/east_yorkshire_and_northern_lincolnshire)
* [North Yorkshire](/social_mobility_by_area/north_yorkshire)
* [South Yorkshire](/social_mobility_by_area/south_yorkshire)
* [West Yorkshire](/social_mobility_by_area/west_yorkshire)

East Midlands (England):

* [Derbyshire and Nottinghamshire](/social_mobility_by_area/derbyshire_and_nottinghamshire)
* [Leicestershire, Rutland and Northamptonshire](/social_mobility_by_area/leicestershire,_rutland_and_northamptonshire)
* [Lincolnshire](/social_mobility_by_area/lincolnshire)

West Midlands (England):

* [Herefordshire, Worcestershire and Warwickshire](/social_mobility_by_area/herefordshire,_worcestershire_and_warwickshire)
* [Shropshire and Staffordshire](/social_mobility_by_area/shropshire_and_staffordshire)
* [West Midlands](/social_mobility_by_area/west_midlands)

East of England:

* [East Anglia](/social_mobility_by_area/east_anglia)
* [Bedfordshire and Hertfordshire](/social_mobility_by_area/bedfordshire_and_hertfordshire)
* [Essex](/social_mobility_by_area/essex)

London:

* [Inner London - West](/social_mobility_by_area/inner_london_-_west)
* [Inner London - East](/social_mobility_by_area/inner_london_-_east)
* [Outer London - East and North East](/social_mobility_by_area/outer_london_-_east_and_north_east)
* [Outer London - South](/social_mobility_by_area/outer_london_-_south)
* [Outer London - West and North West](/social_mobility_by_area/outer_london_-_west_and_north_west)

South East (England):

* [Berkshire, Buckinghamshire and Oxfordshire](/social_mobility_by_area/berkshire,_buckinghamshire_and_oxfordshire)
* [Surrey, East and West Sussex](/social_mobility_by_area/surrey,_east_and_west_sussex)
* [Hampshire and Isle of Wight](/social_mobility_by_area/hampshire_and_isle_of_wight)
* [Kent](/social_mobility_by_area/kent)

South West (England):

* [Gloucestershire, Wiltshire and Bristol and Bath](/social_mobility_by_area/gloucestershire,_wiltshire_and_bath/bristol_area)
* [Dorset and Somerset](/social_mobility_by_area/dorset_and_somerset)
* [Cornwall and Isles of Scilly](/social_mobility_by_area/cornwall_and_isles_of_scilly)
* [Devon](/social_mobility_by_area/devon)

Scotland:

* [Eastern Scotland](/social_mobility_by_area/eastern_scotland)
* [Highlands and Islands](/social_mobility_by_area/highlands_and_islands)
* [North Eastern Scotland](/social_mobility_by_area/north_eastern_scotland)
* [South Western Scotland](/social_mobility_by_area/west_central_scotland)
* [Southern Scotland](/social_mobility_by_area/southern_scotland)

Wales:

* [East Wales](/social_mobility_by_area/east_wales)
* [West Wales and The Valleys](/social_mobility_by_area/west_wales_and_the_valleys)

[Northern Ireland](/social_mobility_by_area/northern_ireland)
