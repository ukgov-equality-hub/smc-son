## Code
IN34

## Title
Earnings of young people aged 25 to 29 years

## Summary
Data on the average earnings of 25 to 29 year olds in the UK, by socio-economic background.

## Subtitle
Summary main findings

## Text
In 2021, young people aged 25 to 29 earned on average £14.40 an hour.

Socio-economic background was strongly related to the level of young people’s earnings. Young people from lower
working class backgrounds earned £12.40 an hour on average, compared with £16.70 for those from higher professional backgrounds.

Young men earned more than young women across all socio-economic backgrounds. 

25 to 29 year olds from Chinese and Indian ethnic backgrounds earned significantly more than White British young people. 

25 to 29 year olds with a disability earned significantly less than those without a disability.

## Section
By socio-economic background

## Chart: Single-bar
{
    "code": "IN34",
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by socio-economic backgrounds (UK, 2021)",
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
    "title": "Difference in weekly earnings in pounds (£) of 25 to 29 year olds, compared to the national average (UK, 2014 to 2021 combined)",
    "tooltipTitle": "Difference in weekly earnings compared to the national average",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/IN34_area-20230327.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "£",
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
    "xtitle": "Difference in £ compared to the national average",
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/IN34-earnings--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest difference in
earnings compared to the national average.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).

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
    "code": "IN34",
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by socio-economic backgrounds and sex (UK, 2014 to 2021 combined)",
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
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by socio-economic backgrounds and ethnicity (UK, 2014 to 2021 combined)",
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
    "xticksLength": 4,
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
    "title": "Mean (average) hourly earnings of people aged 25 to 29 years, by socio-economic backgrounds and disability (UK, 2014 to 2021 combined)",
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
which includes variables on socio-economic background, sex and ethnic group.

For data by ethnicity, the model assumes that class effects are the same within each ethnic group.
However, the assumption does not hold for the White Other group. The means shown are those for men.
Means are shown only for those with lower working-class and higher professional-class backgrounds, but other
socio-economic backgrounds are included in the analysis. 

Among people with a disability, those in work are a more selective group (since their inactivity rate is higher).
Because of the skewed distribution of earnings, we take the log of earnings when checking for interactions between
disability and socio-economic backgrounds. With this model specification we do not find a significant interaction.

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
[Download full dataset (CSV)](/static/data/full-datasets/IN34-earnings--full-dataset.csv){: target="_blank" class="download" }
