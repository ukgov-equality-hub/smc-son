## Code
IN12

## Title
Attainment at age 11

## Summary
Placeholder summary text

## Subtitle
Summary main findings

## Text
Placeholder summary main findings

## Section
Overview

## Chart
{ "title": "Attaintment at age 11", "data": "/static/data/indicators/IN12_national-20230419.csv", "_width": 1575, "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Time_period", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Time_period" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "2dp" }] }

## Section
By disadvantaged

## Grid
# Map
{ "code": "IN12", "title": "Disadvantaged", "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json", "data": "/static/data/indicators/IN12_region_disadvantaged-20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTYUA22NM", "scale": "%", "height": "700", "dataFormat": "sequential", "dataFormat_was": "quintile", "domain": [20, 80], "_legend": "map_scale", "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": "interpolateViridis", "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onRollover": "mapSelect2" }

# Map
{ "code": "IN12", "title": "Not disadvantaged", "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json", "data": "/static/data/indicators/IN12_region_not_disadvantaged-20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTYUA22NM", "scale": "%", "height": "700", "dataFormat": "sequential", "dataFormat_was": "quintile", "domain": [20, 80], "_legend": "map_scale", "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": "interpolateViridis", "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onRollover": "mapSelect2" }

## Section
By FSM eligibility

## Grid
# Map
{ "code": "IN12", "title": "FSM eligible", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN12_region_fsm_eligible-20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "height": "700", "dataFormat": "sequential", "domain": [35, 80], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onRollover": "mapSelect2" }

# Map
{ "code": "IN12", "title": "Not FSM eligible", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN12_region_not_fsm_eligible-20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "height": "700", "dataFormat": "sequential", "domain": [35, 80], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onRollover": "mapSelect2" }

## Section
By disadvantaged (FSM)

## Chart
{ "code": "IN12", "title": "Attaintment at age 11", "data": "/static/data/indicators/IN12_region_fsm-20230419.csv", "_width": 1575, "height": 2000, "type": "bar", "ykey": "SEB", "xkey": "Value", "group": "Area_name", "sort": "Value", "scale": "%", "xgrid": true, "ygrid": false, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "outside", "labelColour": "#fff", "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Time_period" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "2dp" }] }

## Section
By year

## Chart
{ "title": "University research students", "data": "/static/data/indicators/IN12_year-20230419.csv", "_width": 1575, "height": 450, "title": "", "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "scale": "Gap index", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 5, "xtitle": "", "ytitle": "", "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "fontFamily": "GDS Transport", "fontSize": "15px", "backgroundColor": "transparent", "columns": [{ "column": "Time_period" }, { "column": "Value", "heading": "Disadvantage attainment gap index for England at key stage 2 (Gap index)", "align": "right", "format": "2dp" }] }

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
[Download full dataset (CSV)](/static/data/indicators/2023-04-19 IN12.csv){: target="_blank" class="download" }
