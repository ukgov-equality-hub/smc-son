## Code
CI5

## Title
Research and development

## Summary
Data on conditions that favour research and development across UK regions – measured by broadband speed,
numbers of university research students, and business spending on research.

## Map
# Src
{
    "code": "CI5",
    "title": "Index of research and development, and quintile ranking from best 20% to worst 20%, by region (UK)",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/CI5_20230419.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
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
    "dataTable": "/static/pre-processed-csvs/CI5-research-and-development--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 0]
}

## Section
Summary main findings

## Text
Areas with the best environments for research and development include:

* Bedfordshire and Hertfordshire
* Berkshire, Buckinghamshire and Oxfordshire
* Inner West London
* Gloucestershire, Wiltshire, and Bath and Bristol
* West Midlands
* Derby and Nottingham
* Central Scotland

Many of these areas are locations of major universities and high-tech and engineering firms.

This data has similar patterns to the data on areas with
[sociocultural advantage](/drivers_of_social_mobility/composite_indices/socio-cultural_advantage)
– the best environments for upward mobility tend to be in and around London, and the worst are in more remote parts of the UK.

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more
reliable picture of geographical mobility patterns:

* [Broadband speed](/drivers_of_social_mobility/research_and_development_environment/broadband_speed)
* [Business expenditure on research and development](/drivers_of_social_mobility/research_and_development_environment/business_spending_on_research_and_development)
* [University research students](/drivers_of_social_mobility/research_and_development_environment/university_research_students)

Indicators are rescaled to make sure they use a common metric.
The best-performing area’s score is set to 1, and the least well-performing area’s score is set to 0.

See the [technical annex] for more information on how each area was scored.
