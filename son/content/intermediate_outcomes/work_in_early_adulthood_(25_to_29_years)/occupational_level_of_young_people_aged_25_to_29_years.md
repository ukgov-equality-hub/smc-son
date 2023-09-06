## Code
IN33

## Title
Occupational level of young people aged 25 to 29 years

## Summary
Data on the occupational class people are in at 25 to 29 years old, by socio-economic background.

## Subtitle
Summary main findings

## Text
In 2021, 27% of 25 to 29 year olds from a higher professional-class background were in a higher professional occupation.
This was nearly 3 times the percentage for people from a lower working class background in a higher professional occupation (10%).

Data for 2014 to 2021 combined shows that:

* young women were less likely to be in higher professional occupations than young men from the same socio-economic
  background – for example, 20% of young women and 28% of young men from higher professional backgrounds were in
  higher professional occupations
* young people with Indian and Chinese ethnic backgrounds had higher chances of being in a professional occupation than
  young people from similar socio-economic backgrounds – the chances of young people with Pakistani ethnic backgrounds were lower
* disabled young people were more likely to be in a lower working class occupation than non-disabled young people from
  the same socio-economic background

## Section
By socio-economic background

## Chart: Stacked-bar
{
    "code": "IN33",
    "title": "Percentage of 25 to 29 year olds in different occupational levels, by socio-economic background (UK, 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN33_overview-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/IN33-occupational-level--by-SEB--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1],
    "dataTableHelpText": "Young people’s socio-economic background is shown in rows, occupational level is in columns"
}

## Section
By area

## Map
# Src
{
    "code": "IN33",
    "title": "Percentage point difference in the likelihood of being in a higher professional occupation at 25 to 29 years old, compared to the national average (UK, 2014 to 2021 combined)",
    "tooltipTitle": "Percentage point difference compared to the national average",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/IN33_area-20230327.csv",
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
    "xtitle": "% point difference compared to the national average",
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/IN33-occupational-level--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest
percentage point difference compared to the national average.
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

## Chart: Stacked-bar
{
    "code": "IN33",
    "title": "Percentage of 25 to 29 year olds in different occupational levels, by socio-economic background and sex (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Women",
        "data": "/static/data/indicators/IN33_gender_female-20230327.csv"
    }, {
        "label": "Men",
        "data": "/static/data/indicators/IN33_gender_male-20230327.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Category",
    "scale": "%",
    "rounding": "0dp",
    "maxBarSize": 150,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/IN33-occupational-level--by-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2,
    "dataTableHelpText": "Young people’s socio-economic background is shown in rows, occupational level is in columns"
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN33",
    "title": "Percentage of 25 to 29 year olds in a professional occupation, by ethnicity and socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN33_ethnicity-20230327.csv",
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
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN33-occupational-level--by-SEB-and-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By disability status

## Chart: Stacked-bar
{
    "code": "IN33",
    "title": "Percentage of 25 to 29 year olds in different occupational levels, by socio-economic background and disability status (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Disabled",
        "data": "/static/data/indicators/IN33_disability_disabled-20230327.csv"
    }, {
        "label": "Not disabled",
        "data": "/static/data/indicators/IN33_disability_not_disabled-20230327.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/IN33-occupational-level--by-SEB-and-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2,
    "dataTableHelpText": "Young people’s socio-economic background is shown in rows, occupational level is in columns"
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
The data shows the occupation level of 25 to 29 year olds in the UK, by socio-economic background.

We use the following 5 categories of socio-economic background and occupational level:

* higher professional and managerial
* lower professional and managerial
* intermediate
* higher working class
* lower working class

These are based on the National Statistics Socio-economic Classification (‘NS-SEC’), set by the Office for National Statistics (ONS).

### Things you need to know
Data is weighted using LFS probability weights.

For data by ethnicity, the data shows whether young people are in a professional occupation (either higher or lower
professional), and percentages are shown only for people from lower working class and higher professional class backgrounds.
This is because the number of people surveyed was too small to measure all socio-economic backgrounds and occupation levels reliably.
The estimated percentages are those for men. 

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
[Download full dataset (CSV)](/static/data/full-datasets/IN33-occupational-level--full-dataset.csv){: target="_blank" class="download" }