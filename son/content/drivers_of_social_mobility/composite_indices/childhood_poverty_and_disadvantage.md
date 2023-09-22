## Code
CI4

## Title
Childhood poverty and disadvantage

## Summary
Data for UK regions on factors that can reduce people’s social mobility chances – childhood poverty,
youth unemployment, and lower working-class work among parents.

## Map
# Src
{
    "code": "CI4",
    "title": "Index of childhood poverty and disadvantage, by region (UK, 2014 to 2021 combined)",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/CI4_20230817.csv",
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
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/CI4-childhood-poverty-and-disadvantage--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 0]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest composite scores.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).
Areas with the highest scores have the highest levels of childhood poverty and disadvantage.

## Section
Summary main findings

## Text
Some of the highest levels of childhood poverty and disadvantage are in:

* London
* Greater Manchester
* West Midlands

This is mainly due to the high youth unemployment rates in those areas.

Some areas have high levels of both advantage and disadvantage.
For example, most of London is in the top 20% of areas for
[sociocultural advantage](/drivers_of_social_mobility/composite_indices/socio-cultural_advantage), but also
the bottom 20% for childhood poverty and disadvantage.

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more
reliable picture of geographical mobility patterns:

* [Childhood poverty](/drivers_of_social_mobility/conditions_of_childhood/childhood_poverty)
  – data on children living in relative poverty
* [Youth unemployment](/drivers_of_social_mobility/work_opportunities_for_young_people/youth_unemployment)
  – data on 16 to 24 year olds in unemployment
* [Parental occupation](/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_occupation)
  – data on parents in lower working class occupations

Indicators are rescaled to make sure they use a common metric.
The best-performing area’s score is set to 0, and the least well-performing area’s score is set to 1.

See the <a href="https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places/technical-annex#composite-indices-methodology" target="_blank" class="govuk-link">technical annex</a> for more information on how each area was scored. 
