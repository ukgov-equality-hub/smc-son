## Code
IN31

## Title
Economic activity

## Summary
Data on the percentage of 25 to 29 year olds who are either in work or looking for work, by socio-economic background (SEB).

## Subtitle
Summary main findings

## Text
In 2021, 88% of all 25 to 29 year olds were economically active, meaning they were either in work or actively looking for work.
<br>
77% of 25 to 29 year olds from lower working class backgrounds were economically active – the lowest percentage out of all socio-economic backgrounds. Percentages in all other socio-economic groups were between 88% and 93%.
<br>
Data for 2014 to 2021 combined shows that:
<ul class="govuk-list">
<li>young women were less likely to be economically active than young men from the same socio-economic background – the gap was largest in the lower working class group, where 71% of young women and 86% of young men were economically active</li>
<li>young people from Pakistani, Bangladeshi, Chinese and Other ethnic backgrounds had lower levels of economic activity – this could be partly due to higher rates of [entry to higher education]</li>
<li>disabled young people were less likely to be economically active than non-disabled young people from the same socio-economic background – the ‘disability gap’ was largest for young people from lower working class backgrounds, where 52% of disabled people and 85% of non-disabled people were economically active</li>
</ul>

## Section
Overview

## Chart: Single-bar
{ "code": "IN31", "title": "Percentage of 25 to 29 year olds who were economically active, by SEB (UK, 2021)", "data": "/static/data/indicators/IN31_overview-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "SEB", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "columns": [{ "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "IN31", "title": "Percentage of 25 to 29 year olds who were economically active, and quintile ranking (from best 20% to worst 20%), by region (UK, 2014 to 2021 combined)", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN31_area-20230327.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Random effect", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Random effect", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart: Grouped-bar
{ "code": "IN31", "title": "Percentage of 25 to 29 year olds who were economically active, by sex and SEB (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN31_gender-20230327.csv", "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "SEB", "sort": "Sex", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart: Grouped-bar
{ "code": "IN31", "title": "Percentage of 25 to 29 year olds who were economically active, by ethnicity and SEB (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN31_ethnicity-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By disability

## Chart: Grouped-bar
{ "code": "IN31", "title": "Percentage of 25 to 29 year olds who were economically active, by disability status and SEB (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN31_disability-20230327.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "group": "SEB", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Disabled" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## About
# Data source(s)
Office for National Statistics, Labour Force Survey (LFS), 2021

# Time period
2014 to 2021 (combined)

# Geographic area
UK

# What the data measures
The data shows the percentage of 25 to 29 year olds in the UK who were ‘economically active’, by socio-economic background.
<br>
Someone is ‘economically active’ if they are either in work, or available for and actively looking for work. 
<br>
People can be economically inactive if they are:
<ul class="govuk-list">
<li>in full-time education</li>
<li>looking after family</li>
<li>unable to work due to disability or ill health</li>
</ul>

# Things you need to know
Data is weighted using LFS population weights.
<br>
For data by ethnicity, the estimated percentages are those for men. Percentages are shown only for people from lower working class and higher professional class backgrounds. 
<br>
For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or more, and if that condition reduced their ability to carry out day-to-day activities. This is consistent with the definition of disability in the Equality Act 2010.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 IN31.csv){: target="_blank" class="download" }
