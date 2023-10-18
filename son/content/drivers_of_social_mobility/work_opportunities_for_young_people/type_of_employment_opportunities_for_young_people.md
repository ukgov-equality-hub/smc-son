## Code
DR33

## Title
Type of employment opportunities for young people

## Summary
Data on the occupational level of 22 to 29 year olds in the UK, from 2014 to 2021.

## Subtitle
Summary main findings

## Text
From 2014 to 2021, the percentage of 22 to 29 year olds in professional and managerial jobs went up from 38% to 44%.

The percentage in working class jobs went down from 41% to 33%.
This was mainly due to the percentage in skilled manual work (‘higher working class’) going down from 25% to 17%.

## Section
By year

## Chart: Stacked-bar
{
    "code": "DR33",
    "title": "Percentage of 22 to 29 year olds in each of the 5 occupational classes, over time (UK, 2014 to 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/DR33_overview-20230417.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Time_period",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/data/pre-processed-csvs/DR33-type-of-employment-opportunities-for-young-people--by-year--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1]
}

## Section
By area

## Map
# Src
{
    "code": "DR33",
    "title": "Percentage of 22 to 29 year olds in the higher professional and lower working occupations, by area (UK, 2018 to 2021 combined)",
    "tooltipTitle": "Percentage of 22 to 29 year olds in occupations:",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": [{
        "label": "Lower working",
        "data": "/static/data/indicators/DR33_area_lower_working-20230417.csv",
        "reversePolarity": true
    }, {
        "label": "Higher professional",
        "data": "/static/data/indicators/DR33_area_higher_professional-20230417.csv"
    }],
    "toggle": "radio",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "confidenceIntervals": "visible",
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
    "xtitle": "Types of opportunities for young people (%)",
    "legend": false,
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/DR33-type-of-employment-opportunities-for-young-people--by-ITL2-region--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest percentages.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).

The regional estimates have a large margin of error – do not rank or compare specific regions.

The lines either side of the dots represent [confidence intervals](/about-our-analysis#confidence-intervals)
– the range of values that the 'true' value for each region is highly likely to be within.
In many cases the confidence intervals overlap.
This suggests differences between specific regions may not be statistically significant. 

See the [composite indices](/social_mobility_by_area#composite-measures-by-region) for more precise estimates and to
understand overall regional patterns.

## Section
About the data

## Text
### Data source
Office for National Statistics, Labour Force Survey

### Time period
2014 to 2021

### Geographic area
UK

### What the data measures
The data shows the occupation level of 22 to 29 year olds in the UK between 2014 and 2021. It also shows data by region.

Regions are based on where the people surveyed lived when they were growing up.

Rates are rounded to 1 decimal place.

### Things you need to know
The 5 social classes shown here are based on the National Statistics Socio-economic Classification (NS-SEC) as follows:

* NS-SEC level 1: higher professional
* NS-SEC level 2: lower professional
* NS-SEC levels 3 and 4: intermediate
* NS-SEC levels 5 and 6: higher working class
* NS-SEC levels 7 and 8: lower working class

Data is weighted using LFS probability weights.

A formal statistical test shows that, compared with 2014, access to the higher professional class has become significantly different since 2018.


### Type of data
Survey data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/DR33-type-of-employment-opportunities-for-young-people--full-dataset.csv){: target="_blank" class="download" }
