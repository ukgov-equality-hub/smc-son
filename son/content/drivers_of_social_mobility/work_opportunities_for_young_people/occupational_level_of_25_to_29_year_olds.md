## Code
DR33

## Title
Occupational level of 25 to 29 year olds

## Summary
Data on the occupational level of 25 to 29 year olds in the UK, from 2014 to 2021.

## Subtitle
Summary main findings

## Text
From 2014 to 2021, the percentage of 25 to 29 year olds in professional and managerial jobs went up from 38% to 44%.

The percentage in working class jobs went down from 41% to 33%. This was mainly due to the percentage in skilled manual work (‘higher working class’) going down from 25% to 17%.

In the 3 years to 2021, parts of the south-east had the highest percentages of 25 to 29 year olds in higher professional jobs out of all regions. Scotland and parts of the north and north-east had the lowest percentages. 

The highest percentages of 25 to 29 year olds in lower working class jobs were in Northern Ireland, parts of Scotland and Wales, and some metropolitan areas. Most regions in the south-east had the lowest percentages.

In parts of London, the percentages of 25 to 29 year olds in both higher professional and lower working class occupations were higher than the national average.

## Section
By year

## Chart: Stacked-bar
{ "code": "DR33", "title": "Percentage of 25 to 29 year olds in each of the 5 occupational classes, over time (UK, 2014 to 2021)", "data": "/static/data/indicators/DR33_overview-20230417.csv", "height": 450, "type": "bary", "xkey": "Time_period", "ykey": "Value", "zkey": "Category", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "rolloverBehaviour": "fade", "clickBehaviour": "filter", "columns": [{ "column": "Time_period" }, { "column": "Category" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By area – DELETE THIS BREAKDOWN? (repeated below)

## Map
# Src
{ "code": "DR33", "title": "Percentage of 25 to 29 year olds in the higher professional class, and ‘quintile’ ranking (from best 20% to worst 20%), by area", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/DR33_area_higher_professional-20230417.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By occupational class and area

## Grid
# Map
{ "code": "DR33", "title": "Percentage of 25 to 29 year olds in the higher professional occupations, and ‘quintile’ ranking (from best 20% to worst 20%), by area (UK, 2018 to 2021 combined)", "tooltipTitle:" "Percentage of 25 to 29 year olds in higher professional occupations",  "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/DR33_area_higher_professional-20230417.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "height": 700, "dataFormat": "quintile", "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Map
{ "code": "DR33", "title": "Percentage of 25 to 29 year olds in the lower working occupations, and ‘quintile’ ranking (from best 20% to worst 20%), by area (UK, 2018 to 2021 combined)", "tooltipTitle:" "Percentage of 25 to 29 year olds in lower working class occupations", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/DR33_area_lower_working-20230417.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "height": 700, "dataFormat": "quintile", "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes. They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.

The figure for each region shows the percentage of 25 to 29 year olds in lower working class and higher professional occupations.

## About the data
# Data source
Office for National Statistics, Labour Force Survey

# Time period
2014 to 2021

# Geographic area
UK

# What the data measures
The data shows the occupation level of 25 to 29 year olds in the UK between 2014 and 2021. It also shows data by region.

Regions are based on where the people surveyed lived when they were growing up.

Rates are rounded to 1 decimal place.

# Things you need to know
The 5 social classes shown here are based on the National Statistics Socio-economic Classification (NS-SEC) as follows:

<ul class="govuk-list">
  <li>NS-SEC level 1: higher professional</li>
  <li>NS-SEC level 2: lower professional</li>
  <li>NS-SEC levels 3 and 4: intermediate</li>
  <li>NS-SEC levels 5 and 6: higher working class</li>
  <li>NS-SEC levels 7 and 8: lower working class</li>
</ul>

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 DR33.csv){: target="_blank" class="download" }
