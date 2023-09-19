## Code
CI2

## Title
Precarious situations

## Summary
Data on the UK regions with the most difficult economic circumstances for 25 to 29 year olds – measured by levels
of unemployment, economic inactivity and lower working-class employment.

## Map
# Src
{
    "code": "CI2",
    "title": "Index of ‘precarious situations’, by region (UK, 2018 to 2021 combined)",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/CI2_20230817.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "quantile": "Quintile",
    "height": 700,
    "dataFormat": "quintile",
    "zero": false,
    "reversePolarity": true,
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "rolloverBehaviour": "outline",
    "onClick": "mapSelect1",
    "type": "dot",
    "xkey": "Value",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "xtitle": "",
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/CI2-precarious-situations--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 0]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest composite scores.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).
Areas with the highest scores have the most precarious situations for young people.

## Section
Summary main findings

## Text
Young people brought up in densely-populated urban areas – including London – tend to have more difficult economic
circumstances than young people in rural areas. This contrast shows the importance of looking within areas, as well as between areas.

London also has a high percentage of young people with
[promising prospects](/intermediate_outcomes/composite_indices/promising_prospects).
This contrast shows the importance of looking within areas, as well as between areas.

Some areas – for example, Eastern Scotland – do worse for young people's prospects in obtaining higher qualifications,
higher earnings and a professional job and for difficult economic circumstances.

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more reliable
picture of geographical mobility patterns:

* [Economic inactivity](/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/economic_activity)
  – data on young people not in education or in employment
* [Unemployment](/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/unemployment)
  – data on young people not in employment
* [Occupational level](/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/occupational_level_of_young_people_aged_25_to_29_years)
  – data on young people in lower working class occupations

The data is adjusted for socio-economic background, so it measures how precarious the situations are of young people
from similar social backgrounds.

Indicators are rescaled to make sure they use a common metric.
The best-performing area’s score is set to 0, and the least well-performing area’s score is set to 1.

See the <a href="https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places/technical-annex#composite-indices-methodology" target="_blank" class="govuk-link">technical annex</a> for more information on how each area was scored.

## Subtitle
Data source

## Text
Labour Force Survey pooled, from 2018 to 2021.

## Text
Areas are those where respondents lived when they were aged 14 years.
