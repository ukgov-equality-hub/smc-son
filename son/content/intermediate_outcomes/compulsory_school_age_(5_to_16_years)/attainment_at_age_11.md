## Code
IN12

## Title
Attainment at age 11

## Summary
Data on the percentage of pupils meeting the expected standard in reading, writing and maths by the age of 11 years.

## Subtitle
Summary main findings

## Text
In the 4 school years ending in July 2019, the percentage of pupils who met the expected standard in reading, writing and maths by 11 years old went up from 53% to 65%. It went down to 59% in the 2021 to 2022 school year.
<br>
In the 9 school years ending in July 2019, the gap between pupils from disadvantaged backgrounds and non-disadvantaged pupils (the ‘disadvantage gap’) went down. It then went up in the 2021 to 2022 school year to the highest level since 2012.
<br>
In the 2021 to 2022 school year:
<ul class="govuk-list">
<li>43% of disadvantaged pupils and 66% of non-disadvantaged pupils met the expected standard</li>
<li>47% of disadvantaged girls and 39% of disadvantaged boys met the expected standard, compared with 70% of non-disadvantaged girls and 61% of non-disadvantaged boys</li>
<li>there were large variations between pupils eligible for free school meals (FSM) in different ethnic groups – for example, 76% of FSM-eligible pupils from the Chinese ethnic group met the expected standard, compared with 12% of Gypsy or Roma pupils</li>
<li>disadvantaged pupils in London, the West Midlands, and Tees Valley and Durham were the most likely to meet the expected standard out of all regions – pupils in southern and eastern parts of England were the least likely to</li>
</ul>

## Section
Overview

## Chart: Grouped-bar
{
    "code": "IN12",
    "title": "Attaintment at age 11",
    "data": "/static/data/indicators/IN12_overview-20230531.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Time_period",
    "sort": "Time_period",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "clickBehaviour": "fade",
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "columns": [{
        "column": "Time_period"
    }, {
        "column": "SEB",
        "heading": "Socio-economic background"
    }, {
        "column": "Value",
        "heading": "Percentage",
        "align": "right",
        "format": "1dp"
    }]
}

## Section
By year

## Chart: Single-line
{
    "code": "IN12",
    "title": "Attaintment at age 11",
    "data": "/static/data/indicators/IN12_year-20230531.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "Gap index",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "colourScheme": ["#5694ca"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "columns": [{
        "column": "Time_period"
    }, {
        "column": "Value",
        "heading": "Disadvantage attainment gap index for England at key stage 2 (Gap index)",
        "align": "right",
        "format": "1dp"
    }]
}

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN12",
    "title": "Attainment at age 11",
    "data": [
        {"label": "Boys", "data": "/static/data/indicators/IN12_gender_male-20230531.csv"},
        {"label": "Girls", "data": "/static/data/indicators/IN12_gender_female-20230531.csv"}
    ],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Time_period",
    "sort": "Time_period",
    "scale": "%",
    "maxBarSize": 150,
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "clickBehaviour": "fade",
    "colourScheme": ["#5694ca", "#d4351c"],
    "legend": true,
    "range": [0, 80],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",

    "dataTable": "/static/pre-processed-csvs/IN12-attainment-at-age-11--by-year-and-sex-and-disadvantage--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 0, 0, 0, 0],
    "dataTableNumberOfHeadingRows": 2
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN12",
    "title": "Attainment at age 11",
    "data": [
        {"label": "2015-16", "data": "/static/data/indicators/IN12_ethnicity_201516-20230531.csv"},
        {"label": "2016-17", "data": "/static/data/indicators/IN12_ethnicity_201617-20230531.csv"},
        {"label": "2017-18", "data": "/static/data/indicators/IN12_ethnicity_201718-20230531.csv"},
        {"label": "2018-19", "data": "/static/data/indicators/IN12_ethnicity_201819-20230531.csv"},
        {"label": "2021-22", "data": "/static/data/indicators/IN12_ethnicity_202122-20230531.csv"}
    ],
    "toggle": "radio",
    "height": 1450,
    "type": "bar",
    "xkey": "Value",
    "ykey": "SEB",
    "group": "Category",
    "sort": "Category",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "clickBehaviour": "fade",
    "colourScheme": ["#5694ca", "#d4351c"],
    "legend": true,
    "domain": [0, 85],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/IN12-attainment-at-age-11--by-year-and-ethnicity-and-FSM--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 0, 0, 0, 0, 0, 0, 0],
    "dataTableNumberOfHeadingColumns": 2
}

## Section
Disadvantaged vs. Not disadvantaged

## Tabs
# Tab
Compare maps

# Map
{
    "code": "IN12",
    "title": "Disadvantaged",
    "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json",
    "data": "/static/data/indicators/IN12_local_authority_disadvantaged-20230531.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "CTYUA22NM",
    "scale": "%",
    "height": 700,
    "dataFormat": "sequential",
    "tooltipTitle": "",
    "domain": [20, 80],
    "rolloverBehaviour": "outline",
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "onClick": "mapSelect1"
}

# Map
{
    "code": "IN12",
    "title": "Not disadvantaged",
    "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json",
    "data": "/static/data/indicators/IN12_local_authority_not_disadvantaged-20230531.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "CTYUA22NM",
    "scale": "%",
    "height": 700,
    "dataFormat": "sequential",
    "tooltipTitle": "",
    "domain": [20, 80],
    "rolloverBehaviour": "outline",
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "onClick": "mapSelect1"
}

# Tab
Independent maps

# Map
{
    "code": "IN12",
    "title": "Disadvantaged",
    "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json",
    "data": "/static/data/indicators/IN12_local_authority_disadvantaged-20230531.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "CTYUA22NM",
    "scale": "%",
    "height": 700,
    "dataFormat": "sequential",
    "tooltipTitle": "",
    "rolloverBehaviour": "outline",
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "onClick": "mapSelect1"
}

# Map
{
    "code": "IN12",
    "title": "Not disadvantaged",
    "map": "/static/data/maps/Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.json",
    "data": "/static/data/indicators/IN12_local_authority_not_disadvantaged-20230531.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "CTYUA22NM",
    "scale": "%",
    "height": 700,
    "dataFormat": "sequential",
    "tooltipTitle": "",
    "rolloverBehaviour": "outline",
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "onClick": "mapSelect1"
}

# Tab
Bar chart

# Chart
{
    "code": "IN12",
    "title": "Attaintment at age 11",
    "data": "/static/data/indicators/IN12_local_authority-20230531.csv",
    "height": 5000,
    "type": "bar",
    "ykey": "SEB",
    "xkey": "Value",
    "group": "Area_name",
    "sort": "Value",
    "scale": "%",
    "xgrid": true,
    "ygrid": false,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "clickBehaviour": "fade",
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "textLabels": "outside",
    "labelColour": "#fff"
}

# Tab
Data

# DataTable
{
    "data": "/static/data/indicators/IN12_area-20230531.csv",
    "columns": [{
        "column": "Area_name",
        "heading": "ITL2 region"
    }, {
        "column": "SEB",
        "heading": "Socio-economic background"
    }, {
        "column": "Value",
        "heading": "Percentage",
        "align": "right",
        "format": "1dp"
    }]
}

# Tab
Download

# Download
{}

## Section
FSM eligible vs. Not FSM eligible

## Map
# Src
{
    "code": "IN12",
    "title": "Attainment at age 11",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": [{
        "label": "FSM eligible",
        "data": "/static/data/indicators/IN12_area_fsm_eligible-20230531.csv"
    }, {
        "label": "Not FSM eligible",
        "data": "/static/data/indicators/IN12_area_not_fsm_eligible-20230531.csv"
    }, {
        "label": "Gap",
        "data": "/static/data/indicators/IN12_area_fsm_compare-20230531.csv"
    }],
    "toggle": "radio",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "confidenceIntervals": "visible",
    "height": 700,
    "dataFormat": "quintile",
    "zero": false,
    "tooltipTitle": "",
    "rolloverBehaviour": "outline",
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "onClick": "mapSelect1",
    "type": "dot",
    "xkey": "Value",
    "x1key": "FSM_eligible",
    "x2key": "Not_known_to_be_FSM_eligible",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "columns": [{
        "column": "Area_name",
        "heading": "ITL2 region"
    }, {
        "column": "Value",
        "heading": "Percentage",
        "align": "right"
    }, {
        "column": "LCI",
        "heading": "Lower confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "UCI",
        "heading": "Upper confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }]
}

## About
# Data source(s)
Department for Education. National curriculum assessments at key stage 2 in England, 2022

# Time period
September 2015 to July 2022

# Geographic area
England

# What the data measures
The data shows the percentage of pupils who met the expected standard in reading, writing and maths at the end of key stage 2, when pupils are usually 11 years old.
<br>
Disadvantaged pupils are those who:
<ul class="govuk-list">
<li>were registered as eligible for free school meals at any point in the last 6 years</li>
<li>are looked after by a local authority in England and Wales, or who left local authority care through adoption, a special guardianship order, a residence order or a child arrangements order</li>
</ul>
The ‘disadvantage gap index’ summarises the relative attainment gap between disadvantaged pupils and all other pupils.It is based on their scores in reading and maths at the end of key stage 2. A disadvantage gap score of 0 means there was no difference in achievement. A score of +10 means that every non-disadvantaged pupil did better than every disadvantaged pupil.

# Things you need to know
Data was not collected during the 2 school years ending in July 2021 due to the COVID-19 pandemic.
<br>
Eligibility for free school meals (FSM) is used as an indicator of deprivation by the Department for Education. Children are eligible for FSM if their parents receive certain benefits. FSM are provided to roughly 15% of students. 
<br>
Figures for the 2021 to 2022 school year are based on revised data. Figures for other years are based on final data.

# Type of data
Administrative data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-04-19 IN12.csv){: target="_blank" class="download" }
