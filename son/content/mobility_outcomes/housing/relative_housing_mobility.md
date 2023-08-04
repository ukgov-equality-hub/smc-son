## Code
MO42

## Title
Relative housing mobility

## Summary
Data on the link in home ownership between people in the UK and their parents.

## Subtitle
Summary main findings

## Text
Since 1991, relative housing mobility has gone down. This means the link in home ownership between people and their parents has got stronger.
<br>
In the period from 2016 to 2020, relative housing mobility was lower among women than men. It was also lower among disabled people than non-disabled people.
<br>
There were no significant differences in relative housing mobility between UK regions.

## Section
Overview

## Chart: Single-line
{
    "code": "MO42",
    "title": "Absolute housing mobility",
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
    "xticks": 7,
    "yticks": 3,
    "tooltipTitle": "",
    "colourScheme": ["#5694ca"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "columns": [{
        "column": "Area_name",
        "heading": "Country"
    }, {
        "column": "Time_period"
    }, {
        "column": "Value",
        "heading": "Percentage",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "LCI",
        "heading": "Lower confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "UCI",
        "heading": "Upper confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }]
}

## Section
By area

## Chart: Single-bar
{
    "code": "MO42",
    "title": "Absolute housing mobility",
    "data": "/static/data/indicators/MO42_area-20230602.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Area_name",
    "ykey": "Value",
    "zkey": "Area_type",
    "sort": "Area_name",
    "scale": "Odds ratio",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "colourScheme": ["#5694ca", "#d4351c"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "columns": [{
        "column": "Area_name"
    }, {
        "column": "Value",
        "heading": "Percentage",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "LCI",
        "heading": "Lower confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "UCI",
        "heading": "Upper confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }]
}

## Section
By age

## Chart: Single-bar
{
    "code": "MO42",
    "title": "Absolute housing mobility",
    "data": "/static/data/indicators/MO42_age-20230602.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Age",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Age",
    "scale": "Odds ratio",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "colourScheme": ["#5694ca"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "columns": [{
        "column": "Age"
    }, {
        "column": "Value",
        "heading": "Percentage",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "LCI",
        "heading": "Lower confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "UCI",
        "heading": "Upper confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }]
}

## Section
By sex

## Chart: Single-bar
{
    "code": "MO42",
    "title": "Absolute housing mobility",
    "data": "/static/data/indicators/MO42_gender-20230602.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "zkey": "Sex",
    "sort": "Area_name",
    "scale": "Odds ratio",
    "maxBarSize": 150,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "colourScheme": ["#5694ca"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "columns": [{
        "column": "Area_name"
    }, {
        "column": "Sex"
    }, {
        "column": "Value",
        "heading": "Percentage",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "LCI",
        "heading": "Lower confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "UCI",
        "heading": "Upper confidence interval (%)",
        "align": "right",
        "format": "1dp"
    }]
}

## Section
By disability

## Chart: Single-bar
{
    "code": "MO42",
    "title": "Absolute housing mobility",
    "data": "/static/data/indicators/MO42_disability-20230602.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Area_name",
    "scale": "Odds ratio",
    "maxBarSize": 150,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "tooltipTitle": "",
    "colourScheme": ["#5694ca"],
    "legend": true,
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "columns": [{
        "column": "Area_name"
    }, {
        "column": "Category",
        "heading": "Disabled"
    }, {
        "column": "Value",
        "heading": "Odds ratio",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "LCI",
        "heading": "Lower confidence interval",
        "align": "right",
        "format": "1dp"
    }, {
        "column": "UCI",
        "heading": "Upper confidence interval",
        "align": "right",
        "format": "1dp"
    }]
}

## About
# Data source(s)
Office for National Statistics (ONS), Wealth and Assets Survey (WAS)
<br>
Brian Bell and others, ‘Where is the land of hope and glory? The geography of intergenerational mobility in England and Wales’, 2018.

# Time period
1991, 2001, 2011, and 2016 to 2020 combined

# Geographic area
UK

# What the data measures
The data shows the link in home ownership between people in the UK and their parents.

# Things you need to know
Values are shown as odds ratios. A higher odds ratio means a stronger link in home ownership between people and their parents and lower housing mobility. A lower odds ratio means a weaker link and greater relative housing mobility.
<br>
Data is weighted using the WAS individual weights.
<br>
Logistic regression modelling confirms that there was:
<ul class="govuk-list">
<li>a statistically significant difference in the relative housing mobility of men and women</li>
<li>a statistically significant difference in the relative housing mobility of disabled men and women</li>
<li>no statistically significant difference in relative housing mobility within different regions</li>
</ul>

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-06-02 MO42.csv){: target="_blank" class="download" }
