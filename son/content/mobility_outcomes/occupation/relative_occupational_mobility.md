## Code
MO12

## Title
Relative occupational mobility

## Summary
Placeholder summary text

## Subtitle
Summary main findings

## Text
Placeholder summary main findings

## Section
Overview

## Chart
{ "code": "MO12", "title": "Relative occupational mobility", "data": "/static/data/indicators/MO12_overview-20230623.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "_confidenceIntervals": "visible", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 3, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [-0.035, 0.005], "margin": [0, 0, 0, 0], "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "isolate", "columns": [{ "column": "Area_name", "heading": "Country" }, { "column": "Time_period" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }


## Section
By area (ITL2)

## Map
{ "code": "MO12", "title": "Relative occupational mobility", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/MO12_area-20230623.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart
{ "code": "MO12", "title": "Relative occupational mobility", "data": "/static/data/indicators/MO12_gender-20230623.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "zkey": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "_confidenceIntervals": "visible", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "range": [-0.015, 0], "margin": [0, 0, 0, 0], "maxLabelLength": 60, "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Time_period" }, { "column": "Category" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart
{ "code": "MO12", "title": "Relative occupational mobility", "data": "/static/data/indicators/MO12_ethnicity-20230623.csv", "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [-0.15, 0.035], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "%", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }



## Section
By disability

## Chart
{ "code": "MO12", "title": "Relative occupational mobility", "data": "/static/data/indicators/MO12_disability-20230623.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "zkey": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "range": [0, 0.02], "margin": [0, 0, 0, 0], "maxLabelLength": 60, "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Time_period" }, { "column": "Category" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

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
[Download full dataset (CSV)](/static/data/indicators/2023-06-23 MO12.csv){: target="_blank" class="download" }
