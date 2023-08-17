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
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 40,
    "dataTable": "/static/data/pre-processed-csvs/DR32-youth-unemployment--by-year--table-format.csv",
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By area

## Map
# Src
{
    "code": "DR32",
    "title": "Percentage of 16 to 24 year olds who were unemployed, by region (UK, 2018 to 2021 combined)",
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
    "xtitle": "Youth unemployment (%)",
    "legend": false,
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/DR32-youth-unemployment--by-ITL2-region--table-format.csv",
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
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
Office for National Statistics, Labour Force Survey (LFS)

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

Data is weighted using LFS probability weights.

The error bars show 95% confidence intervals. These intervals show where we expect the true value from a population to
be 95% of the time. For example, a confidence interval with the range of values from 5 to 10 implies that there is a
95% chance that the true population value is between 5 and 10, and a 5% chance that it is outside of this range.
The narrower the confidence interval or range, the more precise the estimate. Read more about
[confidence intervals](/about-our-analysis#confidence-intervals)

### Type of data
Survey data, weighted

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/DR32-youth-unemployment--full-dataset.csv){: target="_blank" class="download" }
