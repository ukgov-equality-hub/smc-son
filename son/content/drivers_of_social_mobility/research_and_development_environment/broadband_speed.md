## Code
DR51

## Title
Broadband speed

## Summary
Data on median (average) broadband speeds in UK regions between 2014 and 2019.

## Subtitle
Summary main findings

## Text
In 2019, the median (average) broadband speed in the UK was 3 times as fast as in 2014.

Areas with the highest broadband speeds in 2019 were:
<ul class="govuk-list">
<li>parts of London</li>
<li>the West Midlands</li>
<li>Merseyside</li>
<li>Eastern Yorkshire and Northern Lincolnshire</li>
</ul>

Areas with the lowest broadband speeds were:
<ul class="govuk-list">
<li>parts of Scotland</li>
<li>Cornwall</li>
<li>West Wales and the Valleys</li>
<li>Cumbria</li>
</ul>

## Section
By year

## Chart: Single-line
{ "code": "DR51", "title": "Ratio (relative to 2014) of the median (average) broadband speed (UK, 2014 to 2019)", "data": "/static/data/indicators/DR51_overview-20230417.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "Megabits per second", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 5, "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "columns": [{ "column": "Time_period" }, { "column": "Value", "heading": "Megabits per second", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "DR51", "title": "Median (average) broadband speed, by area over time (UK, 2014 to 2019)", "tooltipTitle:" "Median (average) broadband speed", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "2014", "data": "/static/data/indicators/DR51_area_2014-20230417.csv" }, { "label": "2015", "data": "/static/data/indicators/DR51_area_2015-20230417.csv" }, { "label": "2016", "data": "/static/data/indicators/DR51_area_2016-20230417.csv" }, { "label": "2017", "data": "/static/data/indicators/DR51_area_2017-20230417.csv" }, { "label": "2018", "data": "/static/data/indicators/DR51_area_2018-20230417.csv" }, { "label": "2019", "data": "/static/data/indicators/DR51_area_2019-20230417.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Megabits per second", "height": 700, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Megabits per second", "align": "right", "format": "1dp" }] }

# Guidance
[41 regions in the UK] are ranked from the highest to lowest average broadband speed. They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.

The figure for each region shows the median (average) broadband speed for that region.

## About the data
# Data source
Department for Business, Energy and Industrial Strategy and Nesta Research & Development spatial data tool, 2021.

# Time period
2014 to 2019

# Geographic area
UK

# What the data measures
The data shows changes in median (average) broadband speed in the UK between 2014 and 2019. It also shows the broadband speed for 41 regions of the UK.

# Things you need to know
Nesta data includes regional scores but not a national average figure. To track changes over time, we use the broadband speed for the median UK area each year. 

The median is the middle point of a range of numbers which are arranged in order. In this case, the median area is the area ranked 21st out of the 41 regions in the UK.

# Type of data
Administrative data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-04-05 DR51.csv){: target="_blank" class="download" }
