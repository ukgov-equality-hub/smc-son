## Code
DR11

## Title
Distribution of earnings

## Summary
Data on inequality in hourly pay between high earners and low earners.

## Subtitle
Summary main findings

## Text
Inequality in hourly pay between high and low earners got narrower between 2011 and 2021.
## Text
From 1997 to 2011, ‘high earners’ (people in the 90th percentile for hourly pay) earned around 4 times as much as ‘low earners’ (people in the 10th percentile). 
## Text
Inequality in hourly pay then went down every year over the next 10 years. In 2021, higher earners earned around 3.2 times as much as low earners.
## Text
Inequality in hourly pay was higher in England than Scotland, Wales and Northern Ireland. In England, wage inequality was highest in London.

## Section
Overview

## Chart
{ "title": "Distribution of earnings", "data": "/static/data/prototypes/DR11_overview-20230417.csv", "_width": 1575, "height": 450, "type": "bary", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "xgrid": false, "ygrid": true, "xtitle": "Year", "legend": true, "colourScheme": ["#1d70b8"], "margin": [0, 0, 0, 0], "textLabels": "_top", "labelColour": "#1d70b8", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "outline", "_datatable": { "dataFormat": "array", "allowColumnResize": true, "allowFilter": true, "allowSort": true, "pageSize": 10, "columns": ["Time_period", "Value"] } }

## Section
Breakdown by Country

## Chart
{ "title": "Distribution of earnings", "data": "/static/data/prototypes/DR11_area-20230417.csv", "_width": 1575, "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "xgrid": false, "ygrid": true, "xtitle": "Year", "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c"], "margin": [0, 0, 0, 0], "textLabels": "_top", "labelColour": "#1d70b8", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "fade" }


## Map1
<!--{ "title": "", "map": "/static/data/Country_(December_2021)_UK_BUC.json", "data": "/static/data/prototypes/DR11_area-20230417.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTRY21NM", "height": "700", "dataFormat": "quintile", "_legend": "map-legend", "_tooltip": "map-tooltip", "_tooltipBehaviour": "click", "domains": ["Q1 - Bottom 20%", "Q2", "Q3", "Q4", "Q5 - Top 20%"], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onRollover": "mapselect", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "#fafafa", "lowerConfidence": "LCI", "upperConfidence": "UCI" }
-->

## Section
Download the data

## Text
<p class="govuk-body govuk-!-font-weight-bold govuk-!-margin-bottom-2" style="color: #f47738;">
    Note: This is an example CSV file download with fictitious values
</p>

<p class="govuk-body">
    <a href="#" class="govuk-link">Download the data (CSV, 1KB)</a>
</p>

## About
# Data source(s)
ONS, Annual Survey of Hours and Earnings (ASHE). Analysis by Nuffield College.

# Time period
1997 to 2021

# Geographic area
UK

# What the data measures
The data measures the gap in hourly earnings between people at the:<br>
<br>
90th percentile (‘high earners’) – they earn more than 90% of people<br>
10th percentile (‘low earners’) – they earn less than 90% of people<br>
<br>
The ‘90:10 ratio’ is calculated as income at the 90th percentile divided by income at the 10th percentile. For example, a ratio of 2 means that people at the 90th percentile earn twice as much as people at the 10th percentile.

# Things you need to know
This data uses the ‘90:10 ratio’ rather than the Gini coefficient (a commonly-used measure of income inequality). This is for ease of understanding. It uses data from ASHE instead of other sources because ASHE includes data on regional differences.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.
