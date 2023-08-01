## Code
IN23

## Title
Highest qualification

## Summary
Data on the highest qualifications of 25 to 29 year olds by social class background.

## Subtitle
Summary main findings

## Text
Young people’s socio-economic background is strongly related to the highest qualification level they achieve.
<br>
In 2021, 71% of 25 to 29 year olds from higher professional backgrounds had a first or higher degree, compared with 27% of those from the lower working class.
<br>
Young women from every socio-economic background were more likely to have a first degree and less likely to have lower-level qualifications than young men from the same socio-economic background. 
<br>
Out of all combinations of sex and socio-economic background:
<ul class="govuk-list">
<li>young men from lower working-class backgrounds were the least qualified – 20% had a first or higher degree</li>
<li>young women from higher professional backgrounds were the most qualified – 71% had a first or higher degree</li>
</ul>
25 to 29 year olds from higher professional backgrounds in the Chinese, Indian, Black African, Mixed and Other ethnic groups were more likely to have degrees than White people from the same socio-economic background.
<br>
Disabled young people from every socio-economic background were less likely than non-disabled young people to have a university degree. They were also more likely to have lower-level qualifications.

## Section
Overview

## Chart: Stacked-bar
{ "code": "IN23", "title": "Highest level of qualification achieved by 25 to 29 year olds, by socio-economic background (UK, 2021)", "data": "/static/data/indicators/IN23_overview-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "Category", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "rolloverBehaviour": "fade", "clickBehaviour": "filter", "columns": [{ "column": "Category", "heading": "Qualification" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "IN23", "title": "Highest qualification of young people", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN23_area-20230327.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Random effect", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Random effect", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart: Stacked-bar
{ "code": "IN23", "title": "Destinations following the end of compulsory full-time education:NEET", "data": [{ "label": "Men", "data": "/static/data/indicators/IN23_gender_male-20230327.csv" }, { "label": "Women", "data": "/static/data/indicators/IN23_gender_female-20230327.csv" }], "toggle": "radio", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "Category", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "rolloverBehaviour": "fade", "clickBehaviour": "filter", "columns": [{ "column": "Category", "heading": "Qualification" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart: Grouped-bar
{ "code": "IN23", "title": "Percentage of 25 to 29 year olds with a university degree, by socio-economic background and ethnicity (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN23_ethnicity-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "outside", "labelColour": "#000", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## About
# Data source(s)
Office for National Statistics, Labour Force Survey (LFS), 2021

# Time period
2014 to 2021 (combined)

# Geographic area
UK

# What the data measures
The data shows the highest qualification achieved by people aged 25 to 29 years in the UK, by socio-economic background.

# Things you need to know
People’s socio-economic background is measured by the occupation of the main wage earner in their household when they were 14 years old.
<br>
For data by ethnicity, the data shows whether young people had a university degree or not. This is because the number of people surveyed was too small to measure some qualification levels reliably. The percentages shown are those for men. 
<br>
For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or more, and if that condition reduced their ability to carry out day-to-day activities. This is consistent with the definition of disability in the Equality Act 2010.
<br>
Data is weighted using LFS population weights.

# Type of data
e.g. Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 IN23.csv){: target="_blank" class="download" }
