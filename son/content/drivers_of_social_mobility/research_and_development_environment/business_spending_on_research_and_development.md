## Code
DR52

## Title
Business spending on research and development

## Summary
Data on business spending on research and development in UK regions between 2007 and 2018.

## Subtitle
Summary main findings

## Text
UK median (average) business spending on research and enterprise went up by 32% between 2007 and 2018.

Spending went down by 22% between 2007 and 2011, but then went up every year until 2015. It reached its peak in 2017 and has stayed roughly the same since then.

## Section
By year

## Chart: Single-line
{ "code": "DR52", "title": "Ratio (relative to 2007) of business spending on research and development (UK, 2007 to 2018)", "data": "/static/data/indicators/DR52_overview-20230417.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "Euros", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 5, "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "columns": [{ "column": "Time_period" }, { "column": "Value", "heading": "Euros", "align": "right", "format": "€" }] }

## Section
By area

## Map
# Src
{ "code": "DR52", "title": "Business spending on research and development, by region over time (UK, 2007 to 2018)", "tooltipTitle:" "Business spending on research and development", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "2007", "data": "/static/data/indicators/DR52_area_2007-20230417.csv" }, { "label": "2008", "data": "/static/data/indicators/DR52_area_2008-20230417.csv" }, { "label": "2009", "data": "/static/data/indicators/DR52_area_2009-20230417.csv" }, { "label": "2010", "data": "/static/data/indicators/DR52_area_2010-20230417.csv" }, { "label": "2011", "data": "/static/data/indicators/DR52_area_2011-20230417.csv" }, { "label": "2012", "data": "/static/data/indicators/DR52_area_2012-20230417.csv" }, { "label": "2013", "data": "/static/data/indicators/DR52_area_2013-20230417.csv" }, { "label": "2014", "data": "/static/data/indicators/DR52_area_2014-20230417.csv" }, { "label": "2015", "data": "/static/data/indicators/DR52_area_2015-20230417.csv" }, { "label": "2016", "data": "/static/data/indicators/DR52_area_2016-20230417.csv" }, { "label": "2017", "data": "/static/data/indicators/DR52_area_2017-20230417.csv" }, { "label": "2018", "data": "/static/data/indicators/DR52_area_2018-20230417.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "€", "height": 700, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "xticks": 2, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Euros", "align": "right", "format": "€" }] }

# Guidance
[41 regions in the UK] are ranked from the highest to lowest business expenditure on research and development. They are then divided into 5 equally-sized groups (‘quintiles’), from the top 20% to the bottom 20%.

The figure for each region shows the business spending on research and development.

## About the data
# Data source
Department for Business, Energy and Industrial Strategy and Nesta Research & Development spatial data tool, 2021.

# Time period
2007 to 2018

# Geographic area
UK

# What the data measures
The data shows changes in business spending on research and development in the UK between 2007 and 2018. It also shows average spending for 41 regions of the UK.

# Things you need to know
Nesta data includes regional scores but not a national average figure. To track changes over time, we use the broadband speed for the median UK area each year. 
<br>
The median is the middle point of a range of numbers which are arranged in order. In this case, the median area is the area ranked 21st out of the 41 regions in the UK.

# Type of data
Administrative data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-04-05 DR52.csv){: target="_blank" class="download" }
