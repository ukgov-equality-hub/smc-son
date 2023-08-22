## Code
MO42

## Title
Relative housing mobility

## Summary
Data on the link in home ownership between people in the UK and their parents.

## Subtitle
Summary main findings

## Text
Since 1991, relative housing mobility has gone down. This means the link in home ownership between people and their
parents has got stronger.

In the period from 2016 to 2020, relative housing mobility was lower among women than men.
It was also lower among disabled people than non-disabled people.

There were no significant differences in relative housing mobility between UK regions.

## Section
By year

## Chart: Single-line
{
    "code": "MO42",
    "title": "Odds ratios of the relationship in home ownership between people and their parents (UK, 1991, 2001, 2011, and 2016 to 2020 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO42_overview-20230602.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "dataTable": "/static/pre-processed-csvs/MO42-relative-housing-mobility--by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By area

## Chart: Single-bar
{
    "code": "MO42",
    "title": "Odds ratios of the relationship in home ownership between people and their parents, by region (UK, 2016 to 2020 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO42_area-20230602.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Area_name",
    "ykey": "Value",
    "zkey": "Area_type",
    "sort": "-Value",
    "scale": "Odds ratio",
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
    "dataTable": "/static/pre-processed-csvs/MO42-relative-housing-mobility--by-ITL1-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By sex

## Chart: Single-bar
{
    "code": "MO42",
    "title": "Odds ratios of the relationship in home ownership between people and their parents, by sex (UK, 2016 to 2020 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO42_gender-20230602.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Area_name",
    "scale": "Odds ratio",
    "maxBarSize": 150,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/MO42-relative-housing-mobility--by-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By disability

## Chart: Single-bar
{
    "code": "MO42",
    "title": "Odds ratios of the relationship in home ownership between people and their parents, by disability status (UK, 2016 to 2020 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO42_disability-20230602.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Area_name",
    "scale": "Odds ratio",
    "maxBarSize": 150,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xticksLength": 12,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/MO42-relative-housing-mobility--by-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
About the data

## Text
### Data source
Office for National Statistics (ONS), Wealth and Assets Survey (WAS)

Brian Bell and others, *‘Where is the land of hope and glory? The geography of intergenerational mobility in England and Wales’*, 2018.

### Time period
1991, 2001, 2011, 2016 to 2017, and 2018 to 2020

### Geographic area
UK

### What the data measures
The data shows the link in home ownership between people in the UK and their parents.

### Things you need to know
Values are shown as odds ratios. A higher odds ratio means a stronger link in home ownership between people and
their parents and lower housing mobility. A lower odds ratio means a weaker link and greater relative housing mobility.

Data is weighted using the WAS individual weights.

Logistic regression modelling confirms that there was:

* a statistically significant difference between the relative housing mobility of men and women
* a statistically significant difference between the relative housing mobility of those with and without a disability
* no statistically significant difference between relative housing mobility between different regions

### Type of data
Survey data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/MO42-relative-housing-mobility--full-dataset.csv){: target="_blank" class="download" }
