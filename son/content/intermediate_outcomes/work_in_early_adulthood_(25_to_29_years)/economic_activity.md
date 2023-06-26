## Code
IN31

## Title
Economic activity

## Summary
Placeholder summary text

## Subtitle
Summary main findings

## Text
Placeholder summary main findings

## Section
Overview

## Chart1
{ "comment": "this uses simulated data, actual chart below", "title": "Economic activity of young people", "data": "/static/data/simulated/2023-05-22 IN31_ethn_sim.csv", "_width": 1575, "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "_textLabels": "center", "labelColour": "#fff", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "2dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "2dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "2dp" }] }
Overview

## Chart
{ "title": "Economic activity of young people", "data": "/static/data/indicators/IN31_overview-20230327.csv", "_width": 1575, "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "SEB", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "fade", "columns": [{ "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "2dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "2dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "2dp" }] }

## Section
By area (ITL2)

## Map
{ "title": "Economic activity of young people", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN31_region-20230327.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Random effect", "lowerConfidence": "LCI", "upperConfidence": "UCI", "height": "700", "dataFormat": "quintile", "_legend": "map-legend", "_tooltip": "map-tooltip", "_tooltipBehaviour": "click", "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onRollover": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Random effect", "align": "right", "format": "2dp" }, { "column": "LCI", "heading": "Lower confidence interval", "align": "right", "format": "2dp" }, { "column": "UCI", "heading": "Upper confidence interval", "align": "right", "format": "2dp" }] }

## Section
By sex

## Chart
{ "title": "Economic activity of young people", "data": "/static/data/indicators/IN31_gender-20230327.csv", "_width": 1575, "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "SEB", "sort": "SEB", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "2dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "2dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "2dp" }] }

## Section
By ethnicity

## Chart
{ "title": "Economic activity of young people", "data": "/static/data/indicators/IN31_ethnicity-20230327.csv", "_width": 1575, "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "2dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "2dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "2dp" }] }

## Section
By disability

## Chart1
{ "title": "Economic activity of young people", "data": "/static/data/indicators/IN31_disability-20230327.csv", "_width": 1575, "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "group": "SEB", "sort": "SEB", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "rolloverBehaviour": "fade", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Disabled" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "2dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "2dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "2dp" }] }

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
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 IN31.csv){: target="_blank" class="download" }
