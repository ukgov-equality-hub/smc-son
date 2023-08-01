## Code
IN32

## Title
Unemployment

## Summary
Data on the percentage of 25 to 29 year olds who were unemployed, by socio-economic background.

## Subtitle
Summary main findings

## Text
In 2021, 5% of all 25 to 29 year olds in the UK were unemployed.
<br>
There were no significant differences in unemployment among 25 to 29 year olds from different socio-economic backgrounds (SEB).
<br>
There were no significant differences in unemployment rates between young men and women from the same socio-economic backgrounds. 
<br>
Young people from the Pakistani and Black ethnic groups were significantly more likely to be unemployed than White British young people from the same socio-economic background.
<br>
Disabled young people were around 3 times more likely to be unemployed than those without a disability, across all socio-economic backgrounds.

## Section
Overview

## Chart: Single-bar
{ "code": "IN32", "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB (UK, 2021)", "data": "/static/data/indicators/IN32_overview-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "SEB", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "columns": [{ "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "IN32", "title": "Percentage of people aged 25 to 29 years who were unemployed, and quintile ranking (from best 20% to worst 20%), by region (UK, 2014 to 2021 combined)", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN32_area-20230327.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Random effect", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart: Grouped-bar
{ "code": "IN32", "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB and sex (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN32_gender-20230327.csv", "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "SEB", "sort": "Sex", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart: Grouped-bar
{ "code": "IN32", "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB and ethnicity (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN32_ethnicity-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By disability status

## Chart: Grouped-bar
{ "code": "IN32", "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB and disability status (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN32_disability-20230327.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "group": "SEB", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Disabled" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## About
# Data source(s)
Office for National Statistics, Labour Force Survey (LFS)

# Time period
2014 to 2021 combined

# Geographic area
UK

# What the data measures
The data shows the percentage of 25 to 29 year olds in the UK who were unemployed, by socio-economic background.

# Things you need to know
Unemployed people are defined as not in work but available for and looking for work. Economically inactive people (those not in work or looking for work) are excluded from the data.
<br>
The data used is weighted using LFS population weights. The charts show 95% confidence intervals.
<br>
The estimated percentages and confidence intervals result from a logistic regression model, controlling for gender and ethnic group. The model assumes that class effects are the same within each ethnic group. A formal test confirms this assumption. 
<br>
For data by ethnicity, the estimated percentages are those for men. Percentages are shown only for those with lower working-class and higher professional-class backgrounds for illustrative purposes.
<br>
The LFS uses the occupation of the main earner in the household when the respondent was aged 14 years when reporting socio-economic background.
<br>
For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or more, and if that condition reduced their ability to carry out day-to-day activities. This is consistent with the definition of disability in the Equality Act 2010.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 IN32.csv){: target="_blank" class="download" }
