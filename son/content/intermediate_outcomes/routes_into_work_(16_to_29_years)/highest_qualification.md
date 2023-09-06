## Code
IN23

## Title
Highest qualification

## Summary
Data on the highest qualifications of 25 to 29 year olds, by socio-economic background.

## Subtitle
Summary main findings

## Text
Young people’s socio-economic background is strongly related to the highest qualification level they achieve by
their mid to late 20s.

In 2021, 71% of 25 to 29 year olds from higher professional backgrounds had a first or higher degree,
compared with 27% of those from the lower working class.

Young women from every socio-economic background were more likely to have a first degree and less likely to have
lower-level qualifications than young men from the same socio-economic background. 

Out of all combinations of sex and socio-economic background:

* young men from lower working-class backgrounds were the least qualified – 20% had a first or higher degree
* young women from higher professional backgrounds were the most qualified – 71% had a first or higher degree

25 to 29 year olds from higher professional backgrounds in the Chinese, Indian, Black African, Mixed and Other
ethnic groups were more likely to have degrees than White people from the same socio-economic background.

Disabled young people from every socio-economic background were less likely than non-disabled young people to have
a university degree. They were also more likely to have lower-level qualifications.

## Section
By socio-economic background

## Chart: Stacked-bar
{
    "code": "IN23",
    "title": "Highest level of qualification achieved by 25 to 29 year olds, by socio-economic background (UK, 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN23_overview-20230327.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#b58840", "#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/IN23-highest-qualification--by-SEB--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1, 1]
}

## Section
By area

## Map
# Src
{
    "code": "IN23",
    "title": "Percentage point difference in the likelihood of having achieved a degree by the age of 25 to 29, compared to the national average (UK, 2018 to 2021 combined)",
    "tooltipTitle": "Percentage point difference compared to the national average",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/IN23_area-20230327.csv",
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
    "dataTable": "/static/pre-processed-csvs/IN23-highest-qualification--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 4]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the highest to lowest
percentage point difference to the national average.
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

## Chart: Stacked-bar
{
    "code": "IN23",
    "title": "Highest level of qualification achieved by 25 to 29 year olds, by socio-economic background and sex (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Women",
        "data": "/static/data/indicators/IN23_gender_female-20230327.csv"
    }, {
        "label": "Men",
        "data": "/static/data/indicators/IN23_gender_male-20230327.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#b58840", "#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "range": [0, 100],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/IN23-highest-qualification--by-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN23",
    "title": "Percentage of 25 to 29 year olds with a university degree, by socio-economic background and ethnicity (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN23_ethnicity-20230327.csv",
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
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN23-highest-qualification--by-SEB-and-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By disability status

## Chart: stacked-bar
{
    "code": "IN23",
    "title": "Highest level of qualification achieved by 25 to 29 year olds, by socio-economic background and disability status (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Disabled",
        "data": "/static/data/indicators/IN23_disability_disabled-20230327.csv"
    }, {
        "label": "Not disabled",
        "data": "/static/data/indicators/IN23_disability_not_disabled-20230327.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#b58840", "#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "range": [0, 100],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/IN23-highest-qualification--by-SEB-and-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2
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
The data shows the highest qualification achieved by people aged 25 to 29 years in the UK, by socio-economic background.

### Things you need to know
People’s socio-economic background is measured by the occupation of the main wage earner in their household when they
were 14 years old.

For data by ethnicity, the data shows whether young people had a university degree or not.
This is because the number of people surveyed was too small to measure some qualification levels reliably.
The percentages shown are those for men. 

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months
or more, and if that condition reduced their ability to carry out day-to-day activities.
This is consistent with the definition of disability in the Equality Act 2010.

Data is weighted using LFS probability weights.

### Type of data
Survey data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN23-highest-qualification--full-dataset.csv){: target="_blank" class="download" }
