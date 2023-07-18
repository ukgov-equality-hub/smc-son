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
{ "code": "IN12", "title": "Attaintment at age 11", "data": "/static/data/indicators/IN12_overview-20230531.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Time_period", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Time_period" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By year

## Chart
{ "code": "IN12", "title": "Attaintment at age 11", "data": "/static/data/indicators/IN12_year-20230531.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "scale": "Gap index", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 5, "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "backgroundColor": "transparent", "columns": [{ "column": "Time_period" }, { "column": "Value", "heading": "Disadvantage attainment gap index for England at key stage 2 (Gap index)", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart
{ "code": "IN12", "title": "Attainment at age 11", "data": [{ "label": "Boys", "data": "/static/data/indicators/IN12_gender_male-20230531.csv" }, { "label": "Girls", "data": "/static/data/indicators/IN12_gender_female-20230531.csv" }], "toggle": "radio", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Time_period", "sort": "Time_period", "scale": "%", "maxBarSize": 150, "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [0, 80], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart
{ "code": "IN12", "title": "Attainment at age 11", "data": [{ "label": "2015-16", "data": "/static/data/indicators/IN12_ethnicity_201516-20230531.csv" }, { "label": "2016-17", "data": "/static/data/indicators/IN12_ethnicity_201617-20230531.csv" }, { "label": "2017-18", "data": "/static/data/indicators/IN12_ethnicity_201718-20230531.csv" }, { "label": "2018-19", "data": "/static/data/indicators/IN12_ethnicity_201819-20230531.csv" }, { "label": "2021-22", "data": "/static/data/indicators/IN12_ethnicity_202122-20230531.csv" }], "toggle": "radio", "height": 1450, "type": "bar", "xkey": "Value", "ykey": "SEB", "group": "Category", "sort": "Category", "scale": "%", "xgrid": true, "ygrid": false, "xticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
Disadvantaged vs. Not disadvantaged

## Tabs
# Tab
Compare maps

# Map
{ "code": "IN12", "title": "Disadvantaged", "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_disadvantaged-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTYUA22NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "domain": [20, 80], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Map
{ "code": "IN12", "title": "Not disadvantaged", "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_not_disadvantaged-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTYUA22NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "domain": [20, 80], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Tab
Independent maps

# Map
{ "code": "IN12", "title": "Disadvantaged", "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_disadvantaged-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTYUA22NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "_domain": [20, 80], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Map
{ "code": "IN12", "title": "Not disadvantaged", "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_not_disadvantaged-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "CTYUA22NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "_domain": [20, 80], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Tab
Bar chart

# Chart
{ "code": "IN12", "title": "Attaintment at age 11", "data": "/static/data/indicators/IN12_area-20230531.csv", "height": 5000, "type": "bar", "ykey": "SEB", "xkey": "Value", "group": "Area_name", "sort": "Value", "scale": "%", "xgrid": true, "ygrid": false, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "outside", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade" }

# Tab
Data

# DataTable
{ "data": "/static/data/indicators/IN12_area-20230531.csv", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "%", "align": "right", "format": "1dp" }] }

# Tab
Download

# Download
{}

## Section
FSM eligable vs. Not FSM eligable

## Tabs
# Tab
Compare maps

# Map
{ "code": "IN12", "title": "Disadvantaged", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_fsm_eligible-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "domain": [35, 73], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Map
{ "code": "IN12", "title": "Not disadvantaged", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_not_fsm_eligible-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "domain": [35, 73], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Tab
Independent maps

# Map
{ "code": "IN12", "title": "Disadvantaged", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_fsm_eligible-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "_domain": [35, 73], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Map
{ "code": "IN12", "title": "Not disadvantaged", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN12_area_not_fsm_eligible-20230531.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "width": 537, "height": 700, "dataFormat": "sequential", "_domain": [35, 73], "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1" }

# Tab
Bar chart

# Chart
{ "code": "IN12", "title": "Attaintment at age 11", "data": "/static/data/indicators/IN12_area_fsm-20230531.csv", "height": 2000, "type": "bar", "ykey": "SEB", "xkey": "Value", "group": "Area_name", "sort": "Value", "scale": "%", "xgrid": true, "ygrid": false, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "outside", "labelColour": "#fff", "backgroundColor": "transparent", "clickBehaviour": "fade" }

# Tab
Data

# DataTable
{ "data": "/static/data/indicators/IN12_area_fsm-20230531.csv", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "%", "align": "right", "format": "1dp" }] }

# Tab
Download

# Download
{}

## Section
Yet another FSM test

## Map
{ "code": "IN12", "title": "Attaintment at age 11", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "FSM eligible", "data": "/static/data/indicators/IN12_area_fsm_eligible-20230531.csv" }, { "label": "Not FSM eligible", "data": "/static/data/indicators/IN12_area_not_fsm_eligible-20230531.csv" }, { "label": "Gap", "data": "/static/data/indicators/IN12_area_fsm_compare-20230531.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "height": 700, "dataFormat": "sequential", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#0571b0"], "colourScheme_was": ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "x1key": "FSM_eligible", "x2key": "Not_known_to_be_FSM_eligible", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

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
