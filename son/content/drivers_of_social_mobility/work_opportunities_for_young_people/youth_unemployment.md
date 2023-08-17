## Code
DR32

## Title
Youth unemployment

## Summary
Data on the percentage of 16 to 24 year olds who were unemployed in the UK from 2014 to 2021.

## Subtitle
Summary main findings

## Text
The youth unemployment rate was 13% in 2021, having gone up to nearly 16% in 2020.

In the 3 years from 2018 to 2021, unemployment rates for 16 to 24 year olds were higher in metropolitan areas,
such as London, Greater Manchester and the West Midlands.

Rates were lower in more rural areas, such as the Highlands and Islands, Northern Ireland, and North Yorkshire.

## Section
By year

## Chart: Single-line
{
    "code": "DR32",
    "title": "Percentage of 16 to 24 year olds who were unemployed (UK, 2014 to 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/DR32_overview-20230417.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "dataTable": "/static/pre-processed-csvs/DR32-youth-unemployment--by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By area

## Map
# Src
{
    "code": "DR32",
    "title": "Percentage of 16 to 24 year olds who were unemployed, and ‘quintile’ ranking (from best 20% to worst 20%), by region (UK, 2018 to 2021 combined)",
    "tooltipTitle": "Percentage of 16 to 24 year olds who were unemployed",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/DR32_area-20230417.csv",
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
    "dataTable": "/static/pre-processed-csvs/DR32-youth-unemployment--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1],
    "dataTableTitle": "Percentage of 16 to 24 year olds who were unemployed, by area"
}

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes.
They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.

The figure for each region shows the percentage of 16 to 24 year olds who were unemployed.

The lines either side of the dots represent confidence intervals – the range of values that the 'true' value for
the region is highly likely to be within. Read more about [confidence intervals].

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
The data shows unemployment rates for 16 to 24 year olds in the UK. 

Unemployment is measured as the percentage of economically active 16 to 24 year olds who are currently out of work but looking for a job. 

Rates are rounded to 1 decimal place.

### Things you need to know
The data does not include people who are economically inactive because they are either:

* in full-time education
* looking after the home
* permanently sick or disabled

### Type of data
Survey data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/DR32-youth-unemployment--full-dataset.csv){: target="_blank" class="download" }
