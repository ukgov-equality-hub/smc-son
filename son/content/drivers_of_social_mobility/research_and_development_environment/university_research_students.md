## Code
DR53

## Title
University research students

## Summary
Data on the median (average) number of full-time research students enrolled in universities in the UK, from 2015 to 2018.

## Subtitle
Summary main findings

## Text
The median (average) number of research students in the UK went up by 4% from 2015 to 2018.

## Section
By year

## Chart: Single-line
{ "code": "DR53", "title": "Ratio (relative to 2015) of the median (average) number of full-time equivalent research students enrolled in universities (UK, 2015 to 2018)", "data": "/static/data/indicators/DR53_overview-20230417.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "Number of students", "xgrid": false, "ygrid": true, "xticks": 3, "yticks": 5, "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "columns": [{ "column": "Time_period" }, { "column": "Value", "heading": "Number of students", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "DR53", "title": "Number of research students, and ‘quintile’ ranking (from best 20% to worst 20%), by region over time (UK, 2015 to 2018)", "tooltipTitle:" "Number of research students", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "2015", "data": "/static/data/indicators/DR53_area_2015-20230417.csv" }, { "label": "2016", "data": "/static/data/indicators/DR53_area_2016-20230417.csv" }, { "label": "2017", "data": "/static/data/indicators/DR53_area_2017-20230417.csv" }, { "label": "2018", "data": "/static/data/indicators/DR53_area_2018-20230417.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Number of students", "height": 700, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Number of students", "align": "right" }] }

# Guidance
[41 regions in the UK] are ranked from the highest to lowest number of research students. They are then divided into 5 equally-sized groups (‘quintiles’), from the top 20% to the bottom 20%.

The figure for each region shows the number of research students in that region.


## About the data
# Data source
Department for Business, Energy and Industrial Strategy, and Nesta Research and Development spatial data tool, 2021

# Time period
2015 to 2018

# Geographic area
UK

# What the data measures
The data shows the relative increase in the number of research students in the UK between 2015 and 2018. It also shows the number of students in each region of the UK.

# Things you need to know
Nesta data includes regional scores but not a national average figure. To track changes over time, we use the area with the median number of university students each year. 
<br>
The median is the middle point of a range of numbers which are arranged in order. In this case, the median area is the area ranked 21st out of the 41 regions in the UK.

# Type of data
Administrative data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-04-05 DR53.csv){: target="_blank" class="download" }
