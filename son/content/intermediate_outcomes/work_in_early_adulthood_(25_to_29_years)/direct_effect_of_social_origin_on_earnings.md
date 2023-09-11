## Code
IN352

## Title
Direct effect of social origin on earnings

## Summary
Data on how young people’s socio-economic background affects their earnings.

## Subtitle
Summary main findings

## Text
Data for the period from 2019 to 2021 shows that young people aged 25 to 29 years from professional backgrounds earned
significantly more than those from other backgrounds but with the same level of education.
For example, young people from higher professional backgrounds earned 18% more than those from a lower working class
background with the same qualification level.

Young women’s hourly earnings were significantly lower than those of young men with the same level of qualification and
from the same socio-economic background.

Young people from most ethnic minority groups earned around the same as White British young people from the same
socio-economic background. Earnings were lower for young people from the Pakistani and Bangladeshi ethnic groups.

Disabled young people earned significantly less than those without a disability from the same socio-economic background.

## Section
By socio-economic background

## Chart: Single-bar
{
    "code": "IN352",
    "title": "Percentage differences in hourly earnings of 25 to 29 year olds, relative to those from lower working-class backgrounds, controlling for highest educational level, sex and age (UK, 2019 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN352_difference-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "SEB",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197"],
    "range": [0, 20],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 40,
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/IN352-direct-effect-of-social-origin-on-earnings--by-sex--controlling-for-educational-level--relative-difference--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN352",
    "title": "Mean (average) hourly earnings of 25 to 29 year olds controlling for educational level and age, by sex and socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN352_gender-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Sex",
    "scale": "££",
    "rounding": "1dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 3,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "range": [0, 15],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 35,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN352-direct-effect-of-social-origin-on-earnings--by-sex--controlling-for-educational-level--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN352",
    "title": "Mean (average) hourly earnings of 25 to 29 year olds controlling for educational level and age, by ethnicity and socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN352_ethnicity-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category",
    "scale": "££",
    "rounding": "1dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 3,
    "xticksLength": 4,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "range": [0, 15],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 35,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN352-direct-effect-of-social-origin-on-earnings--by-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2]
}

## Section
By disability status

## Chart: Grouped-bar
{
    "code": "IN352",
    "title": "Mean (average) hourly earnings of 25 to 29 year olds controlling for educational level and age, by disability and socio-economic background (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN352_disability-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Category",
    "scale": "££",
    "rounding": "1dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 3,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "range": [0, 15],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 35,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN352-direct-effect-of-social-origin-on-earnings--by-disability--table-format.csv",
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
2014 to 2021 (3-year rolling averages)

### Geographic area
UK

### What the data measures
The data shows the effect of young people’s socio-economic background on their earnings. ‘Young people’ in the data
are 25 to 29 years old.

### Things you need to know
Data is weighted using LFS probability weights. Earnings are adjusted for inflation.

Data is combined for 3 years (for example, 2019 to 2021) to give more accurate estimates.

Percentage differences were estimated from a linear regression model of log hourly earnings by socio-economic background,
controlling for educational level and age. 

For data by sex, ethnicity and disability status, estimates are shown for people aged 27 years with the lowest levels
of education. For data by ethnicity, a simplified measure of socio-economic background is used (professional and
non-professional) so that sample sizes are large enough to analyse.

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
[Download full dataset (CSV)](/static/data/full-datasets/IN352-direct-effect-of-social-origin-on-earnings--full-dataset.csv){: target="_blank" class="download" }
