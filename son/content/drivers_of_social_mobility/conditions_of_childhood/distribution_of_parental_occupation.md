## Code
DR14

## Title
Distribution of parental occupation

## Summary
Data on the occupation level of adults in families with dependent children.

## Subtitle
Summary main findings

## Text
20% of adults in families with dependent children were in ‘higher professional’ occupations in 2021, up from 14% in 2014.

46% were in professional occupations (higher or lower) in 2021, up from 39% in 2014.

13% were in higher working class occupations in 2021, down from 19% in 2014.

32% were in working class occupations (higher or lower) in 2021, down from 40% in 2014.

## Section
By year

## Chart: Stacked-bar
{ "code": "DR14", "title": "Percentage of adults in families with dependent children in different occupation levels, over time (UK, 2014 to 2021)", "data": "/static/data/indicators/DR14_overview-20230417.csv", "height": 450, "type": "bary", "xkey": "Time_period", "ykey": "Value", "zkey": "Category", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "rolloverBehaviour": "fade", "clickBehaviour": "filter", "columns": [{ "column": "Time_period" }, { "column": "Category" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "DR14", "title": "Percentage of adults in families with dependent children in a higher professional or lower working class occupation, and quintile ranking (from best 20% to worst 20%), by region (UK, 2014 to 2021 combined)", "tooltipTitle:" "Percentage of adults in a higher professional or lower working class occupation" , "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "Higher professional", "data": "/static/data/indicators/DR14_area_higher_professional-20230419.csv" }, { "label": "Lower working", "data": "/static/data/indicators/DR14_area_lower_working-20230419.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "dataFormat": "quintile", "zero": false, "xgrid": false, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes. They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.

The figure for each region shows the percentage of adults in families with dependent children who were in either a higher professional or lower working class occupation.

The lines either side of the dots represent confidence intervals – the range of values that the 'true' value for the region is highly likely to be within. Read more about [confidence intervals].


## About the data
# Data source
Labour Force Survey, Office for National Statistics

# Time period
2014 to 2021

# Geographic area
UK

# What the data measures
The data shows the occupation levels of adults in families with dependent children. Dependent children are classed as all 0 to 15 year olds, and 16 to 18 year olds who are in full-time education.<br>

The occupation levels are:

<ul class="govuk-list list-disc">
    <li>higher professional</li>
    <li>lower professional</li>
    <li>intermediate</li>
    <li>higher working</li>
    <li>lower working</li>
</ul>

# Things you need to know
The average age of survey respondents was 40 years old. The majority of respondents are likely to be the parents or carers of dependent children, but some could be adults living in homes with parents who have dependent children.
<br>
Respondents aged less than 21 years old were not included.

# Type of data
Survey data, weighted

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-04-19 DR14.csv){: target="_blank" class="download" }
