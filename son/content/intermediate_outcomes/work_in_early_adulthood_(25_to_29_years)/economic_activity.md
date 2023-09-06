## Code
IN31

## Title
Economic activity

## Summary
Data on the percentage of 25 to 29 year olds who are either in work or looking for work, by socio-economic background.

## Subtitle
Summary main findings

## Text
In 2021, 88% of all 25 to 29 year olds were economically active, meaning they were either in work or actively looking for work.

77% of 25 to 29 year olds from lower working class backgrounds were economically active – the lowest percentage out
of all socio-economic backgrounds. Percentages in all other socio-economic groups were between 88% and 93%.

Data for 2014 to 2021 combined shows that:

* young women were less likely to be economically active than young men from the same socio-economic background
  – the gap was largest in the lower working class group, where 71% of young women and 86% of young men were economically active
* young people from Pakistani, Bangladeshi, Chinese and Other ethnic backgrounds had lower levels of economic activity
* disabled young people were less likely to be economically active than non-disabled young people from the same
  socio-economic background – the ‘disability gap’ was relatively small among those from a higher professional background

## Section
By socio-economic background

## Chart: Single-bar
{
    "code": "IN31",
    "title": "Percentage of 25 to 29 year olds who were economically active, by socio-economic background (UK, 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN31_overview-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "SEB",
    "scale": "%",
    "rounding": "0dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"],
    "margin": [0, 0, 0, 0],
    "range": [0, 100],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/IN31-economic-activity--by-SEB--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By area

## Map
# Src
{
    "code": "IN31",
    "title": "Percentage point difference in the likelihood of being economically active at 25 to 29 years old, compared to the national average (UK, 2018 to 2021 combined)",
    "tooltipTitle": "Percentage point difference compared to the national average",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/IN31_area-20230327.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "%",
    "multiply": 100,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "confidenceIntervals": "visible",
    "height": 700,
    "dataFormat": "quintile",
    "zero": false,
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "rolloverBehaviour": "outline",
    "onClick": "mapSelect1",
    "type": "dot",
    "xkey": "Value",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "xtitle": "",
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/IN31-economic-activity--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the highest to lowest percentages.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (top) to 5 (bottom).

The regional estimates have a large margin of error – do not rank or compare specific regions.

The lines either side of the dots represent [confidence intervals](/about-our-analysis#confidence-intervals)
– the range of values that the 'true' value for each region is highly likely to be within.
In many cases the confidence intervals overlap.
This suggests differences between specific regions may not be statistically significant. 

See the [composite indices](/social_mobility_by_area#composite-measures-by-region) for more precise estimates and to
understand overall regional patterns.


## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN31",
    "title": "Percentage of 25 to 29 year olds who were economically active, by sex and socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN31_gender-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Sex",
    "scale": "%",
    "rounding": "0dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 100],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN31-economic-activity--by-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN31",
    "title": "Percentage of 25 to 29 year olds who were economically active, by ethnicity and socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN31_ethnicity-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category",
    "scale": "%",
    "rounding": "0dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xticksLength": 4,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 100],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN31-economic-activity--by-SEB-and-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By disability status

## Chart: Grouped-bar
{
    "code": "IN31",
    "title": "Percentage of 25 to 29 year olds who were economically active, by disability status and socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN31_disability-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Category",
    "scale": "%",
    "rounding": "0dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 100],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN31-economic-activity--by-SEB-and-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
About the data

## Text
### Data source
Office for National Statistics, Labour Force Survey (LFS), 2021

### Time period
2014 to 2021 (combined)

### Geographic area
UK

### What the data measures
The data shows the percentage of 25 to 29 year olds in the UK who were ‘economically active’, by socio-economic background.

Someone is ‘economically active’ if they are either in work, or available for and actively looking for work. 

People can be economically inactive if they are:

* in full-time education
* looking after family
* unable to work due to disability or ill health

### Things you need to know
Data is weighted using LFS probability weights.

For data by ethnicity, the estimated percentages are those for men. Percentages are shown only for people from lower
working class and higher professional class backgrounds. 

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or
more, and if that condition reduced their ability to carry out day-to-day activities.
This is consistent with the definition of disability in the Equality Act 2010.

The error bars show 95% confidence intervals. These intervals show where we expect the true value from a population to
be 95% of the time. For example, a confidence interval with the range of values from 5 to 10 implies that there is a
95% chance that the true population value is between 5 and 10, and a 5% chance that it is outside of this range.
The narrower the confidence interval or range, the more precise the estimate. Read more about
[confidence intervals](/about-our-analysis#confidence-intervals)

### Type of data
Survey data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN31-economic-activity--full-dataset.csv){: target="_blank" class="download" }
