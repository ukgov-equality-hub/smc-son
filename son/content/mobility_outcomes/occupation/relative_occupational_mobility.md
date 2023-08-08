## Code
MO12

## Title
Relative occupational mobility

## Summary
Data on relative occupational mobility – the link between people’s occupational class and their parents’ occupational class.

## Subtitle
Summary main findings

## Text
Between 2014 and 2022, the link between people’s occupational class and their parents’ occupational class got weaker.

In the 5 years from 2018 to 2022 combined:
<ul class="govuk-list">
<li>people from the Black, Pakistani, Bangladeshi and Chinese ethnic groups had higher levels of relative occupational mobility than White people</li>
<li>disabled people had lower levels of relative occupational mobility than non-disabled people</li>
<li>levels of relative occupational mobility were similar in most parts of the UK</li>
</ul>

## Section
By year

## Chart: Single-line
{ "code": "MO12", "title": "Relative occupational mobility in the UK from 2014 to 2022, uniform difference (UNIDIFF) parameter estimates compared with 2014", "data": "/static/data/indicators/MO12_overview-20230623.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 3, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [-0.035, 0.005], "margin": [0, 0, 0, 0], "columns": [{ "column": "Area_name", "heading": "Country" }, { "column": "Time_period" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "MO12", "title": "Relative mobility by area in the UK, 2018 to 2022 (combined), uniform difference (UNIDIFF) parameter estimates compared with Inner London – West", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/MO12_area-20230623.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By sex – DELETE THIS BREAKDOWN

## Chart: Single-bar
{ "code": "MO12", "title": "Relative occupational mobility", "data": "/static/data/indicators/MO12_gender-20230623.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "zkey": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "range": [-0.015, 0], "margin": [0, 0, 0, 0], "maxLabelLength": 60, "textLabels": "center", "labelColour": "#fff", "columns": [{ "column": "Category" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By sex and ethnicity

## Chart: Grouped-bar
{ "code": "MO12", "title": "Relative occupational mobility by ethnicity and sex in the UK, 2018 to 2022 (combined), uniform difference (UNIDIFF) parameter estimates compared with the White British group", "data": "/static/data/indicators/MO12_ethnicity-20230623.csv", "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [-0.15, 0.035], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "Category", "heading": "Ethnicity" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By disability status

## Chart: Single-bar
{ "code": "MO12", "title": "Relative occupational mobility by disability status in the UK, 2018 to 2022 (combined), uniform difference (UNIDIFF) parameter estimates for people with a disability compared with people without a disability", "data": "/static/data/indicators/MO12_disability-20230623.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "zkey": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "range": [0, 0.02], "margin": [0, 0, 0, 0], "maxLabelLength": 60, "textLabels": "center", "labelColour": "#fff", "columns": [{ "column": "Category", "heading": "Disabled" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## About the data
# Data source
Office for National Statistics, Labour Force Survey 2014 to 2022

# Time period
2014 to 2022

# Geographic area
UK

# What the data measures
The data shows changes in relative occupational mobility – the extent to which your occupational class is related to your parents’ occupational class.

High levels of relative occupational mobility can be due to both downward and upward mobility.

# Things you need to know
Survey respondents were 25 to 64 years old. Areas represent where respondents lived when they were aged 14 years.

The data uses the ‘UNIDIFF’ (uniform difference) model, which compares ‘odds ratios’ for all groups with a benchmark group. Values are shown in log form.

Values close to 0 mean relative mobility is constant across all groups. Negative values mean relative mobility is higher than in the benchmark group. The differences were statistically significant from 2019 onwards.

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or more, and if that condition reduced their ability to carry out day-to-day activities. This is consistent with the definition of disability in the Equality Act 2010.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-06-23 MO12.csv){: target="_blank" class="download" }
