## Code
CI1

## Title
Promising prospects

## Summary
Data on the UK regions with the most 'promising prospects' for 25 to 29 year olds – measured by levels of university education, professional work, and earnings.

## Map
# Src
{ "code": "CI1", "title": "Promising prospects", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/CI1_20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onRollover": "scrollTo", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "Quintile", "heading": "Quintile", "align": "right", "format": "0dp" }] }

## Subtitle
Summary main findings

## Text
Young people brought up in London, Surrey and Sussex, Bedfordshire and Hertfordshire, and North Yorkshire tend to have the best prospects.
<br>
Young people brought up in more rural or remote areas, and in some former industrial areas, tend to have worse prospects. 
<br>
Prospects for young people may be different within these broad areas – particularly in regions like North Yorkshire, which contains both remote rural and urban areas.

## Subtitle
About the data

## Text
This page combines data from the following 3 indicators into a single 'composite' score to give a more reliable picture of geographical mobility patterns:

<ul class="govuk-list list-disc">
    <li><a href="/intermediate_outcomes/routes_into_work_(16_to_29_years)/highest_qualification" class="govuk-link">Highest qualification</a> – data on young people with university degrees</li>
    <li><a href="/intermediate_outcomes/composite_indices/promising_prospects" class="govuk-link">Occupation level</a> – data on young people in professional occupations</li>
    <li><a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/earnings" class="govuk-link">Hourly earnings</a> – data on young people's earnings at work</li>
</ul>

The data is adjusted for socio-economic background, so it measures how promising the prospects are of young people from similar social backgrounds.

Indicators are rescaled to make sure they use a common metric. The best-performing area’s score is set to 1, and the least well-performing area’s score is set to 0. 

See the [technical annex] for more information on how each area was scored.

## Subtitle
Data source

## Text
Labour Force Survey pooled, from 2018 to 2022.

## Text
Areas are those where respondents lived when they were 14 years old.
