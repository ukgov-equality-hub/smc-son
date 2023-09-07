## Code
CI3

## Title
Sociocultural advantage

## Summary
Data on ‘sociocultural advantage’ in UK regions – measured by parental education (university degree), parental 
occupation (higher professional), and professional work for 25 to 29 year olds.

## Map
# Src
{
    "code": "CI3",
    "title": "Index of sociocultural advantage, by region (UK, 2014 to 2021 combined)",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/CI3_20230817.csv",
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
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/CI3-socio-cultural-advantage--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 0]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest composite scores.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).
Areas with the highest scores have the highest levels of sociocultural advantage.

## Section
Summary main findings

## Text
The areas with the highest levels of sociocultural advantage in the UK include:

* parts of London 
* Surrey and Sussex
* Berkshire, Buckinghamshire and Oxfordshire 
* Bedfordshire and Hertfordshire 
* Cheshire

The least advantaged areas include:

* The Highlands
* West Wales and the Valleys
* Cornwall
* Lincolnshire
* South and East Yorkshire

Some areas have high levels of both advantage and disadvantage.
For example, most of London is in the top 20% of areas for sociocultural advantage, but also the worst 20% for
[childhood poverty and disadvantage](/drivers_of_social_mobility/composite_indices/childhood_poverty_and_disadvantage).

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more reliable
picture of geographical mobility patterns:

* [Distribution of parental education](/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_education)
  – data on parents with a university degree
* [Distribution of parental occupation](/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_occupation)
  – data on parents in higher professional occupations
* [Occupational level of 25 to 29 year olds](/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/occupational_level_of_young_people_aged_25_to_29_years)
  – data on young people in higher professional occupations

Indicators are rescaled to make sure they use a common metric.
The best-performing area’s score is set to 0, and the least well-performing area’s score is set to 1.

See the <a href="https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places/technical-annex#composite-indices-methodology" target="_blank" class="govuk-link">technical annex</a> for more information on how each area was scored.
