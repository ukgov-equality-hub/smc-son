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

Socio-economic background (SEB) was strongly related to the level of young people’s earnings. Young people from lower
working class backgrounds earned £12.40 an hour on average, compared with £16.70 for those from higher professional backgrounds.

Young men earned more than young women across all socio-economic backgrounds. 

25 to 29 year olds from Chinese and Indian ethnic backgrounds earned significantly more than White British young people. 

25 to 29 year olds with a disability earned significantly less than those without a disability.

## Section
By socio-economic background

## Chart: Single-bar
{
    "code": "IN34",
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB (UK, 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN34_overview-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "SEB",
    "scale": "£",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"],
    "margin": [0, 0, 0, 0],
    "range": [0, 20],
    "maxLabelLength": 55,
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/IN34-earnings--by-SEB--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By area

## Map
# Src
{
    "code": "IN34",
    "title": "Variation in mean (average) hourly earnings among 25 to 29 year olds by region compared with the average, and quintile ranking (from best 20% to worst 20%) (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/IN34_area-20230327.csv",
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
    "dataTable": "/static/pre-processed-csvs/IN34-earnings--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1],
    "dataTableTitle": "Variation in mean (average) hourly earnings among 25 to 29 year olds by region compared with the average (UK, 2014 to 2021 combined)"
}

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN34",
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB and sex (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN34_gender-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Sex",
    "scale": "£",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 20],
    "maxLabelLength": 55,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN34-earnings--by-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN34",
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB and ethnicity (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN34_ethnicity-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category",
    "scale": "£",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 25],
    "maxLabelLength": 55,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN34-earnings--by-SEB-and-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2]
}

## Section
By disability status

## Chart: Grouped-bar
{
    "code": "IN34",
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by SEB and disability (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN34_disability-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Category",
    "scale": "£",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 20],
    "maxLabelLength": 55,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN34-earnings--by-SEB-and-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2]
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
The data show the mean (average) earnings of people aged 25 to 29 in the UK, by socio-economic background.

### Things you need to know
Self-employed respondents and those without earnings are excluded. 

The data used is weighted using the LFS probability weights. The charts show 95% confidence intervals.

The estimated means and confidence intervals are derived from a linear regression model of log hourly earnings,
controlling for SEB, sex and ethnic group. 

For data by ethnicity, the model assumes that class effects are the same within each ethnic group.
However, the assumption does not hold for the White Other group. The means shown are those for men.
Means are shown only for those with lower working-class and higher professional-class backgrounds, but other SEBs
are included in the analysis. 

Among people with a disability, those in work are a more selective group (since their inactivity rate is higher).
Because of the skewed distribution of earnings, we take the log of earnings when checking for interactions between
disability and SEB. With this model specification we do not find a significant interaction.

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or
more, and if that condition reduced their ability to carry out day-to-day activities.
This is consistent with the definition of disability in the Equality Act 2010.

### Type of data
Survey data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN34-earnings--full-dataset.csv){: target="_blank" class="download" }
