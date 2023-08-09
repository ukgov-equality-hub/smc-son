## Code
IN42

## Title
Occupational progression

## Summary
Data on the patterns of upward career mobility into the professional classes for people aged 25 to 44 in the UK.

## Subtitle
Summary main findings

## Text
Data from 2014 to 2021 shows that men and women aged 25 to 44 years from professional socio-economic backgrounds (SEB) are more likely to work in professional occupations.

People’s chances of working in the professional classes increased between 25 to 35 years old, and then slowed in their late 30s and early 40s. The increase was greater for young people from professional backgrounds.

## Section
By sex

## Chart: Multi-line
{
    "code": "IN42",
    "title": "Probability of access to the professional classes by parental class controlling for age and survey year, by sex and SEB (UK, 2014 to 2021 combined)",
    "data": [
        { "label": "Women", "data": "/static/data/indicators/IN42_gender_female-20230713.csv" },
        { "label": "Men", "data": "/static/data/indicators/IN42_gender_male-20230713.csv" }
    ],
    "toggle": "radio",
    "height": 450,
    "type": "liney",
    "xkey": "Age",
    "ykey": "Value",
    "zkey": "SEB",
    "sort": "Age",
    "scale": "Predictive margins",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 5,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"],
    "range": [0, 0.75],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 30,
    "rolloverBehaviour": "fade",
    "clickBehaviour": "isolate",
    "dataTable": "/static/pre-processed-csvs/IN42-occupational-progression--by-age-and-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "dataTableNumberOfHeadingRows": 2,
    "title": "Percentage probability of access to the professional classes by parental class controlling for age and survey year, by sex and SEB (UK, 2014 to 2021 combined)"
}

## About the data
# Data source
Office for National Statistics (ONS), Labour Force Survey (LFS)

# Time period
2014 to 2021 (combined)

# Geographic area
UK

# What the data measures
The data shows the patterns of upward career mobility into the professional classes (known as intra-generational mobility) for people aged 25 to 44 years in the UK.

Data is shown for the following socio-economic backgrounds:
<ul class="govuk-list">
<li>higher professional class</li>
<li>lower professional class</li>
<li>intermediate class</li>
<li>higher working class</li>
<li>lower working classes</li>
</ul>

These are based on the National Statistics Socio-economic Classification (NS-SEC), set by the ONS.

# Things you need to know
The data used is weighted using the LFS population weights.

Estimates are the average marginal effects taken from a logistic regression model of access to the professional classes controlling for:
<ul class="govuk-list">
<li>age</li>
<li>age squared (to account for the changing importance of age as people get older)</li>
<li>survey year</li>
<li>SEB</li>
</ul>

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-07-13 IN42.csv){: target="_blank" class="download" }
