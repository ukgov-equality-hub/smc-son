## Code
DR11

## Title
Distribution of earnings

## Summary
Data on inequality in hourly pay between high earners and low earners.

## Subtitle
Summary main findings

## Text
Inequality in hourly pay between high and low earners got narrower between 2011 and 2021.<br>
From 1997 to 2011, ‘high earners’ (people in the 90th percentile for hourly pay) earned around 4 times as much as ‘low earners’ (people in the 10th percentile).<br>
Inequality in hourly pay then went down every year over the next 10 years. In 2021, higher earners earned around 3.2 times as much as low earners.<br>
Inequality in hourly pay was higher in England than Scotland, Wales and Northern Ireland. In England, wage inequality was highest in London.

## Section
Overview

## Chart
{ "title": "Distribution of earnings", "data": "/static/data/indicators/DR11_overview-20230417.csv", "_width": 1575, "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "scale": "Ratio", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#1d70b8"], "margin": [0, 0, 0, 0], "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "_datatable": { "dataFormat": "array", "allowColumnResize": true, "allowFilter": true, "allowSort": true, "pageSize": 10, "columns": ["Time_period", "Value"] } }

## Section
By country

## Chart
{ "title": "Distribution of earnings", "data": "/static/data/indicators/DR11_area-20230417.csv", "_width": 1575, "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "Ratio", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "fade" }

## Map1
<!--{ "title": "", "map": "/static/data/maps/Country_(December_2021)_UK_BUC.json", "data": "/static/data/indicators/DR11_area-20230417.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTRY21NM", "lowerConfidence": "LCI", "upperConfidence": "UCI", "height": "700", "dataFormat": "quintile", "_legend": "map-legend", "_tooltip": "map-tooltip", "_tooltipBehaviour": "click", "domains": ["Q1 - Bottom 20%", "Q2", "Q3", "Q4", "Q5 - Top 20%"], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onRollover": "mapselect", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "#fafafa" }
-->

## About
# Data source(s)
ONS, Annual Survey of Hours and Earnings (ASHE). Analysis by Nuffield College.

# Time period
1997 to 2021

# Geographic area
UK

# What the data measures
<p class="govuk-body">The data measures the gap in hourly earnings between people at the:</p>

<ul class="govuk-list">
  <li>90th percentile (‘high earners’) – they earn more than 90% of people</li>
  <li>10th percentile (‘low earners’) – they earn less than 90% of people</li>
</ul>

The ‘90:10 ratio’ is calculated as income at the 90th percentile divided by income at the 10th percentile. For example, a ratio of 2 means that people at the 90th percentile earn twice as much as people at the 10th percentile.

# Things you need to know
This data uses the ‘90:10 ratio’ rather than the Gini coefficient (a commonly-used measure of income inequality). This is for ease of understanding. It uses data from ASHE instead of other sources because ASHE includes data on regional differences.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download the data (CSV)](/static/data/indicators/2023-04-13 DR11.csv){: target="_blank" }