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

There were no significant differences in unemployment among 25 to 29 year olds from different socio-economic backgrounds (SEB).

There were no significant differences in unemployment rates between young men and women from the same socio-economic backgrounds. 

Young people from the Pakistani and Black ethnic groups were significantly more likely to be unemployed than
White British young people from the same socio-economic background.

Disabled young people were around 3 times more likely to be unemployed than those without a disability, across all
socio-economic backgrounds.

## Section
By socio-economic background

## Chart: Single-bar
{
    "code": "IN32",
    "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB (UK, 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN32_overview-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "SEB",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/IN32-unemployment--by-SEB--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By area

## Map
# Src
{
    "code": "IN32",
    "title": "Percentage of people aged 25 to 29 years who were unemployed, and quintile ranking (from best 20% to worst 20%), by region (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/IN32_area-20230327.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "Random effect",
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
    "dataTable": "/static/pre-processed-csvs/IN32-unemployment--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2],
    "dataTableTitle": "Variation in unemployment among 25 to 29 year olds by region compared with the average (UK, 2014 to 2021 combined)"
}

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN32",
    "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB and sex (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN32_gender-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Sex",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN32-unemployment--by-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN32",
    "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB and ethnicity (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN32_ethnicity-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN32-unemployment--by-SEB-and-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By disability status

## Chart: Grouped-bar
{
    "code": "IN32",
    "title": "Percentage of people aged 25 to 29 years who were unemployed, by SEB and disability status (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN32_disability-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Category",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN32-unemployment--by-SEB-and-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
About the data

## Text
### Data source
Office for National Statistics, Labour Force Survey (LFS)

### Time period
2014 to 2021 combined

### Geographic area
UK

### What the data measures
The data shows the percentage of 25 to 29 year olds in the UK who were unemployed, by socio-economic background.

### Things you need to know
Unemployed people are defined as not in work but available for and looking for work.
Economically inactive people (those not in work or looking for work) are excluded from the data.

The data used is weighted using LFS probability weights. The charts show 95% confidence intervals.

The estimated percentages and confidence intervals result from a logistic regression model, controlling for sex
and ethnic group. The model assumes that class effects are the same within each ethnic group.
A formal test confirms this assumption. 

For data by ethnicity, the estimated percentages are those for men. Percentages are shown only for those with
lower working-class and higher professional-class backgrounds for illustrative purposes.

The LFS uses the occupation of the main earner in the household when the respondent was aged 14 years when reporting
socio-economic background.

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or
more, and if that condition reduced their ability to carry out day-to-day activities.
This is consistent with the definition of disability in the Equality Act 2010.

### Type of data
Survey data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN32-unemployment--full-dataset.csv){: target="_blank" class="download" }
