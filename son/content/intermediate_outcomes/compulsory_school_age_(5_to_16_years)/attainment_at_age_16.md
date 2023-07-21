## Code
IN13

## Title
Attainment at age 16

## Summary
Placeholder summary text

## Subtitle
Summary main findings

## Text
Placeholder summary main findings

## Section
Overview

## Chart
{ "code": "IN13", "title": "Attainment at age 16", "data": "/static/data/indicators/IN13_overview-20230601.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Time_period", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Time_period" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By year

## Chart
{ "code": "IN13", "title": "Attainment at age 16", "data": "/static/data/indicators/IN13_year-20230601.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "scale": "Gap index", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 3, "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "isolate", "columns": [{ "column": "Time_period" }, { "column": "Value", "heading": "Gap index", "align": "right", "format": "1dp" }] }

## Section
By area (ITL2)

## Map
{ "code": "IN13", "title": "Attainment at age 16", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "FSM eligible", "data": "/static/data/indicators/IN13_area_fsm_eligible-20230601.csv" }, { "label": "Not FSM eligible", "data": "/static/data/indicators/IN13_area_not_fsm_eligible-20230601.csv" }, { "label": "Gap", "data": "/static/data/indicators/IN13_area_fsm_compare-20230601.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Number of students", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "x1key": "FSM_eligible", "x2key": "Not_known_to_be_FSM_eligible", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Number of students", "align": "right" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart
{ "code": "IN13", "title": "Attainment at age 16", "data": [{ "label": "Boys", "data": "/static/data/indicators/IN13_gender_male-20230601.csv" }, { "label": "Girls", "data": "/static/data/indicators/IN13_gender_female-20230601.csv" }], "toggle": "radio", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Time_period", "sort": "Time_period", "scale": "%", "maxBarSize": 150, "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [0, 70], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart
{ "code": "IN13", "title": "Attainment at age 16", "data": "/static/data/indicators/IN13_ethnicity-20230601.csv", "height": 1450, "type": "bar", "xkey": "Value", "ykey": "SEB", "group": "Category", "sort": "Category", "scale": "%", "xgrid": true, "ygrid": false, "xticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Category" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## About
# Data source(s)
We would list the data sources here. e.g.<br>
XYZ Survey, Office for National Statistics

# Time period
e.g. 20XX to 20YY

# Geographic area
e.g. UK

# What the data measures
A paragraph or two of text explaining what has been measured.<br>
We might use this space to define specific terms.

# Things you need to know
Here is a space to discuss the source and limitations of the data.<br>
For example, who has been surveyed and how, whether anyone has been excluded from the data.

# Type of data
e.g. Survey data, weighted

## Text
Read more in State of the Nation 2023 on GOV.UK.
## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-06-01 IN13.csv){: target="_blank" class="download" }
