## Summary
Intermediate outcomes focus on the experiences of young people as they move through education and into the labour market.

They include outcomes in school, employment and career progression.

## Subtitle
Highlighted content

## Text
<div style="display: flex; align-content: flex-start; justify-content: center; width: 775px; padding: 20px; background-color: #f3f2f1;">
    <div style="width: calc(50% - 10px); margin-right: 20px; padding: 10px; background-color: #fff; border: 1px solid #ccc;">
        <p class="govuk-body">Highest qualification by age 25</p>
        <a href="/intermediate_outcomes/16_to_24_years/highest_qualification_by_age_25">
            <div style="width: 175px; height: 315px;">
                <div id="map1" class="map-container" style="position: absolute; margin-top: -170px; width: 348px; height: 629px; transform: scale(.5);"></div>
            </div>
        </a>
    </div>
    <div style="width: calc(50% - 10px); padding: 10px; background-color: #fff; border: 1px solid #ccc;">
        <p class="govuk-body">Occupational level</p>
        <a href="/intermediate_outcomes/25_to_29_years/occupational_level">
            <div style="width: 175px; height: 315px;">
                <div id="map2" class="map-container" style="position: absolute; margin-top: -170px; width: 348px; height: 629px; transform: scale(.5);"></div>
            </div>
        </a>

    </div>
</div>
<script>
    (function() {
        let map1 = new Choropleth(
            'map1',
            `${location.protocol}//${location.host}/static/data/International_Territorial_Level_2_(January_2021)_UK_BUC_V2.json`,
            `${location.protocol}//${location.host}/static/data/IN23.csv`,
            { 'nameField': 'Area_name', 'valueField': 'Value', 'areaField': 'ITL221NM', 'allowRollover': false, 'allowZoom': false, 'allowZoomOnClick': false }
        )

        let map2 = new Choropleth(
            'map2',
            `${location.protocol}//${location.host}/static/data/International_Territorial_Level_2_(January_2021)_UK_BUC_V2.json`,
            `${location.protocol}//${location.host}/static/data/IN33.csv`,
            { 'nameField': 'Area_name', 'valueField': 'Value', 'areaField': 'ITL221NM', 'allowRollover': false, 'allowZoom': false, 'allowZoomOnClick': false }
        )
    })()
</script>

## Subtitle
Elsewhere in State of the Nation 2023

## Text
Mobility outcomes look at where people end up, typically in their 40s or 50s.

## Text
Drivers of social mobility are the background conditions that make social mobility easier.

## Subtitle
Read more 

## Text
<u>Intermediate outcomes in State of the Nation 2023</u> on GOV.UK.
