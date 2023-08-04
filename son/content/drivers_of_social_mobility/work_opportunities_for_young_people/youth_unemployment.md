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

In the 3 years from 2018 to 2021, unemployment rates for 16 to 24 year olds were higher in metropolitan areas, such as London, Greater Manchester and the West Midlands.

Rates were lower in more rural areas, such as the Highlands and Islands, Northern Ireland, and North Yorkshire.

## Section
By year

## Chart: Single-line
{ "code": "DR32", "title": "Percentage of 16 to 24 year olds who were unemployed (UK, 2014 to 2021)", "data": "/static/data/indicators/DR32_overview-20230417.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "columns": [{ "column": "Time_period" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "DR32", "title": "Percentage of 16 to 24 year olds who were unemployed, and ‘quintile’ ranking (from best 20% to worst 20%), by region (UK, 2018 to 2021 combined)", "tooltipTitle:" "Percentage of 16 to 24 year olds who were unemployed", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/DR32_area-20230417.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes. They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.

The figure for each region shows the percentage of 16 to 24 year olds who were unemployed.

The lines either side of the dots represent confidence intervals – the range of values that the 'true' value for the region is highly likely to be within. Read more about [confidence intervals].

## About the data
# Data source
Office for National Statistics, Labour Force Survey

# Time period
2014 to 2021

# Geographic area
UK

# What the data measures
The data shows unemployment rates for 16 to 24 year olds in the UK. 
<br>
Unemployment is measured as the percentage of economically active 16 to 24 year olds who are currently out of work but looking for a job. 
<br>
Rates are rounded to 1 decimal place.

# Things you need to know
The data does not include people who are economically inactive because they are either:

<ul class="govuk-list">
<li>in full-time education</li>
<li>looking after the home</li>
<li>permanently sick or disabled</li>
</ul>


# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 DR32.csv){: target="_blank" class="download" }
