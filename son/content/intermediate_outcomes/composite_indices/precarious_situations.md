## Code
CI2

## Title
Precarious situations

## Summary
Data on the UK regions with the most difficult economic circumstances for 25 to 29 year olds – measured by levels of unemployment, economic inactivity and lower working-class employment.

## Map
# Src
{
    "code": "CI2",
    "title": "Index of ‘precarious situations’, and quintile ranking from best 20% to worst 20%, by region (UK, 2018 to 2022 combined)",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/CI2_20230419.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "height": 700,
    "zero": false,
    "rolloverBehaviour": "outline",
    "background": true,
    "colourScheme": [ "#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0" ],
    "onRollover": "scrollTo",
    "type": "dot",
    "xkey": "Value",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "legend": false,
    "margin": [ 0, 0, 0, 0 ],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/CI2-precarious-situations--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 0]
}

## Section
Summary main findings

## Text
Young people brought up in densely-populated urban areas – including London – tend to have more difficult economic circumstances than young people in rural areas.

London also has a high percentage of young people with <a href="/intermediate_outcomes/composite_indices/promising_prospects" class="govuk-link">promising prospects</a>.

Some areas – for example, Eastern Scotland – do worse for both young people's good prospects and difficult economic circumstances.

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more reliable picture of geographical mobility patterns:

<ul class="govuk-list list-disc">
    <li><a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/economic_activity" class="govuk-link">Economic inactivity</a> – data on young people not in education or in employment</li>
    <li><a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/unemployment" class="govuk-link">Unemployment</a> – data on young people not in employment</li>
    <li><a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/occupational_level" class="govuk-link">Occupational level</a> – data on young people in lower working class occupations</li>
</ul>

The data is adjusted for socio-economic background, so it measures how precarious the situations are of young people from similar social backgrounds.

Indicators are rescaled to make sure they use a common metric. The best-performing area’s score is set to 1, and the least well-performing area’s score is set to 0.

See the [technical annex] for more information on how each area was scored.

## Subtitle
Data source

## Text
Labour Force Survey pooled, from 2018 to 2022.

## Text
Areas are those where respondents lived when they were aged 14 years.
