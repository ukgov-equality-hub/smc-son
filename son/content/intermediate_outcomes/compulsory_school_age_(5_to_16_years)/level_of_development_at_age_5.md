## Code
IN11

## Title
Level of development at age 5

## Summary
Placeholder summary text

## Subtitle
Summary main findings

## Text
Placeholder summary main findings

## Section
Overview

## Chart
{ "code": "IN11", "title": "Level of development at age 5", "data": "/static/data/indicators/IN11_overview-20230714.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "SEB", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Time_period" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }


## Section
By area (ITL2)

## Map
{ "code": "IN11", "title": "Level of development at age 5", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "FSM eligible", "data": "/static/data/indicators/IN11_area_fsm_eligible-20230714.csv" }, { "label": "Not FSM eligible", "data": "/static/data/indicators/IN11_area_not_fsm_eligible-20230714.csv" }, { "label": "Gap", "data": "/static/data/indicators/IN11_area_fsm_compare-20230714.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Number of students", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "x1key": "FSM_eligible", "x2key": "Not_known_to_be_FSM_eligible", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Number of students", "align": "right" }] }

## Section
By sex

## Chart
{ "code": "IN11", "title": "Level of development at age 5", "data": "/static/data/indicators/IN11_gender-20230714.csv", "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "SEB", "sort": "SEB", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart
{ "code": "IN11", "title": "Level of development at age 5", "data": [{ "label": "Overall", "data": "/static/data/indicators/IN11_ethnicity-20230714.csv" }, { "label": "Girls", "data": "/static/data/indicators/IN11_ethnicity_female-20230714.csv" }, { "label": "Boys", "data": "/static/data/indicators/IN11_ethnicity_male-20230714.csv" }], "toggle": "radio", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [0, 80], "margin": [0, 0, 0, 0], "maxLabelLength": 30, "textLabels": "outside", "labelColour": "#000", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "filter", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

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
[Download full dataset (CSV)](/static/data/indicators/2023-07-14 IN11.csv){: target="_blank" class="download" }
