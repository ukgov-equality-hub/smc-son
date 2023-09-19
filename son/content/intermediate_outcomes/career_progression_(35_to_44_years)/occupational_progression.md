## Code
IN42

## Title
Occupational progression

## Summary
Data on the patterns of upward career mobility into the professional classes for people aged 25 to 44 in the UK, by socio-economic background.

## Subtitle
Summary main findings

## Text
Data from 2014 to 2021 shows that men and women aged 25 to 44 years from professional socio-economic backgrounds
are more likely to work in professional occupations.

People’s chances of working in the professional classes increased between 25 to 35 years old, and then slowed in their
late 30s and early 40s. The increase was greater for young people from professional backgrounds.

## Section
By sex

## Chart: Multi-line
{
    "code": "IN42",
    "title": "Probability of access to the professional classes by socio-economic background, sex and age, controlling for survey year (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Women",
        "data": "/static/data/indicators/IN42_gender_female-20230713.csv"
    }, {
        "label": "Men",
        "data": "/static/data/indicators/IN42_gender_male-20230713.csv"
    }],
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
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"],
    "range": [0.2, 0.8],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 30,
    "rolloverBehaviour": "fade",
    "clickBehaviour": "isolate",
    "dataTable": "/static/data/pre-processed-csvs/IN42-occupational-progression--by-age-and-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "dataTableNumberOfHeadingRows": 2
}

## Section
About the data

## Text
### Data source
Office for National Statistics (ONS), Labour Force Survey (LFS)

### Time period
2014 to 2021 (combined)

### Geographic area
UK

### What the data measures
The data shows the patterns of upward career mobility into the professional classes (known as intra-generational mobility)
for people aged 25 to 44 years in the UK.

Data is shown for the following socio-economic backgrounds:

* higher professional class
* lower professional class
* intermediate class
* higher working class
* lower working classes

These are based on the National Statistics Socio-economic Classification (NS-SEC), set by the ONS.

### Things you need to know
The data used is weighted using the LFS probability weights.

Estimates are the average marginal effects derived from a logistic regression model of access to the professional
classes by socio-economic background and age, controlling for survey year.

The error bars show 95% confidence intervals. These intervals show where we expect the true value from a population to
be 95% of the time. For example, a confidence interval with the range of values from 5 to 10 implies that there is a
95% chance that the true population value is between 5 and 10, and a 5% chance that it is outside of this range.
The narrower the confidence interval or range, the more precise the estimate. Read more about
[confidence intervals](/about-our-analysis#confidence-intervals)

### Type of data
Survey data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN42-occupational-progression--full-dataset.csv){: target="_blank" class="download" }
