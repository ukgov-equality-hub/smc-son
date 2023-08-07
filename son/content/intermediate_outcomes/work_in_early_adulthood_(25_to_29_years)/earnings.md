## Code
IN34

## Title
Earnings

## Summary
Data on the average earnings of 25 to 29 year olds in the UK, by socio-economic background.

## Subtitle
Summary main findings

## Text
In 2021, young people aged 25 to 29 earned on average £14.40 an hour.
<br>
Socio-economic background (SEB) was strongly related to the level of young people’s earnings. Young people from lower working class backgrounds earned £12.40 an hour on average, compared with £16.70 for those from higher professional backgrounds.
<br>
Young men earned more than young women across all socio-economic backgrounds. 
<br>
25 to 29 year olds from Chinese and Indian ethnic backgrounds earned significantly more than White British young people. 
<br>
25 to 29 year olds with a disability earned significantly less than those without a disability.

## Section
Overview

## Chart: Single-bar
{ "code": "IN34", "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB (UK, 2021)", "data": "/static/data/indicators/IN34_overview-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "SEB", "lowerConfidence": "LCI", "upperConfidence": "UCI", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "columns": [{ "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "IN34", "title": "(Not clear what this is showing and why)", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/IN34_area-20230327.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "Random effect", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Random effect", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart: Grouped-bar
{ "code": "IN34", "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB and sex (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN34_gender-20230327.csv", "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "SEB", "sort": "Sex", "scale": "£", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (£)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (£)", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart: Grouped-bar
{ "code": "IN34", "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB and ethnicity (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN34_ethnicity-20230327.csv", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "£", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "£", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By disability

## Chart: Grouped-bar
{ "code": "IN34", "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB and disability (UK, 2014 to 2021 combined)", "data": "/static/data/indicators/IN34_disability-20230327.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "group": "SEB", "sort": "Category", "scale": "£", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Disabled" }, { "column": "SEB", "heading": "Socio-economic background" }, { "column": "Value", "heading": "£", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (£)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (£)", "align": "right", "format": "1dp" }] }

## About
# Data source(s)
Office for National Statistics, Labour Force Survey (LFS)

# Time period
2014 to 2021 combined

# Geographic area
UK

# What the data measures
The data show the mean (average) earnings of people aged 25 to 29 in the UK, by socio-economic background.

# Things you need to know
Self-employed respondents and those without earnings are excluded. 
<br>
The data used is weighted using the LFS population weights. The charts show 95% confidence intervals.
<br>
The estimated means and confidence intervals are derived from a linear regression model of log hourly earnings, controlling for SEB, gender and ethnic group. 
<br>
For data by ethnicity, the model assumes that class effects are the same within each ethnic group. However, the assumption does not hold for the White Other group. The means shown are those for men. Means are shown only for those with lower working-class and higher professional-class backgrounds, but other SEBs are included in the analysis. 
<br>
Among people with a disability, those in work are a more selective group (since their inactivity rate is higher). Because of the skewed distribution of earnings, we take the log of earnings when checking for interactions between disability and SEB. With this model specification we do not find a significant interaction.
<br>
For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or more, and if that condition reduced their ability to carry out day-to-day activities. This is consistent with the definition of disability in the Equality Act 2010.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 IN34.csv){: target="_blank" class="download" }
