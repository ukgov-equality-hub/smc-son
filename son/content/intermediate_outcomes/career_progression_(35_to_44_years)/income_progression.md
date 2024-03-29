## Code
IN43

## Title
Income progression

## Summary
Data on changes in the annual incomes of men and women aged 25 to 44 years in the UK, by socio-economic background.

## Subtitle
Summary main findings

## Text
Data from 2014 to 2021 shows that annual incomes of men and women aged 25 to 44 years from professional backgrounds
went up more than for those from intermediate or working class backgrounds.
  
Average incomes increased steadily from the age of 25 to 35 years, and tended to flatten out after. The average increase
was greater for young people from professional backgrounds than for those from intermediate or working-class backgrounds.

Women’s average earnings were lower, and did not go up as quickly as men’s.

## Section
By sex

## Chart: Multi-line
{
    "code": "IN43",
    "title": "Income progression of men and women aged 25 to 44, by socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Women",
        "data": "/static/data/indicators/IN43_gender_female-20230713.csv"
    }, {
        "label": "Men",
        "data": "/static/data/indicators/IN43_gender_male-20230713.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "liney",
    "xkey": "Age",
    "ykey": "Value",
    "zkey": "SEB",
    "sort": "Age",
    "scale": "£",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"],
    "range": [10000, 60000],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 80,
    "rolloverBehaviour": "fade",
    "clickBehaviour": "isolate",
    "dataTable": "/static/data/pre-processed-csvs/IN43-income-progression--by-age-and-SEB-and-sex--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
The data shows the levels of income progression for people aged 25 to 44 years in the UK, by sex and socio-economic background.

Data is shown for the following socio-economic backgrounds:

* higher professional class
* lower professional class
* intermediate class
* higher working class
* lower working classes

These are based on the National Statistics Socio-economic Classification (NS-SEC), set by the ONS.

### Things you need to know
The data used is weighted using the LFS probability weights.

Estimates are derived from a logistic regression of annual income by socio-economic background and age, controlling for
survey year and number of dependent children.

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
[Download full dataset (CSV)](/static/data/full-datasets/IN43-income-progression--full-dataset.csv){: target="_blank" class="download" }
