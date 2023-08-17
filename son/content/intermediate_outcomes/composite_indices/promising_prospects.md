## Code
CI1

## Title
Promising prospects

## Summary
Data on the UK regions with the most 'promising prospects' for 25 to 29 year olds – measured by levels of university
education, professional work, and earnings.

## Map
# Src
{
    "code": "CI1",
    "title": "Index of 'promising prospects', by region (UK, 2018 to 2021 combined)",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/CI1_20230817.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "quantile": "Quintile",
    "height": 700,
    "dataFormat": "quintile",
    "zero": false,
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
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/CI1-promising-prospects--by-ITL2-region--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 0]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest composite scores.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).
Areas with the highest scores have the most promising prospects for young people.

## Subtitle
Summary main findings

## Text
Young people brought up in London, Surrey and Sussex, Bedfordshire and Hertfordshire, and North Yorkshire tend to
have the best prospects in terms of attaining higher qualifications, higher earnings and a professional job.

Young people brought up in more rural or remote areas, and in some former industrial areas, tend to have worse
prospects.

Prospects for young people may be different within these broad areas – particularly in regions like North Yorkshire,
which contains both remote rural and urban areas.

## Subtitle
About the data

## Text
This page combines data from the following 3 indicators into a single 'composite' score to give a more reliable
picture of geographical mobility patterns:

* [Highest qualification](/intermediate_outcomes/routes_into_work_(16_to_29_years)/highest_qualification)
  – data on young people with university degrees
* [Occupation level](/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/occupational_level_of_young_people_aged_25_to_29_years)
  – data on young people in professional occupations
* [Hourly earnings](/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/earnings_of_young_people_aged_25_to_29_years)
  – data on young people's earnings at work

The data is adjusted for socio-economic background, so it measures how promising the prospects are of young people
from similar social backgrounds.

Indicators are rescaled to make sure they use a common metric.
The best-performing area’s score is set to 1, and the least well-performing area’s score is set to 0. 

See the <a href="https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places/technical-annex#composite-indices-methodology" target="_blank" class="govuk-link">technical annex</a> for more information on how each area was scored.

## Subtitle
Data source

## Text
Labour Force Survey pooled, from 2018 to 2021.

## Text
Areas are those where respondents lived when they were 14 years old.
