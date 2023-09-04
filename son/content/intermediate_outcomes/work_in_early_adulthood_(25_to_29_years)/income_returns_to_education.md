## Code
IN351

## Title
Income returns to education

## Summary
Data on the effect of different levels of education on the earnings of young people aged 25 to 29 years, by socio-economic background.

## Subtitle
Summary main findings

## Text
Data for the period from 2019 to 2021 shows that higher levels of education among 25 to 29 year olds are associated with higher earnings.
Young people with a higher degree – such as a master’s degree – earned 63% more than those from the same socio-economic
background with no GCSEs. Young people with an undergraduate degree earned 54% more.

The earnings gaps between levels of qualifications have remained roughly constant between 2014 to 2016, and 2019 to 2021.

Young women’s hourly earnings were significantly lower than those of young men with the same level of qualification
and from the same socio-economic background.

Young people from ethnic minorities earned around the same as White British young people with the same level of qualification.

Disabled young people earned significantly less than those without a disability with the same level of qualification.
For people with an undergraduate degree (but not a higher degree), disabled young people earned 84% of the hourly
earnings of those without a disability.

## Section
Relative differences

## Chart: Single-bar
{
    "code": "IN351",
    "title": "Percentage differences in hourly earnings of 25 to 29 year olds, relative to those with lower level (below GCSE grade 1 or equivalent), controlling for socio-economic background, sex and age (UK, 2019 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN351_difference-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xticksLength": 10,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197"],
    "margin": [0, 0, 0, 0],
    "range": [0, 80],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/IN351-income-returns-to-education--by-qualification--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By year

## Chart: Multi-line
{
    "code": "IN351",
    "title": "Hourly earnings in pounds (£) of 25 to 29 year olds, by highest qualification controlling for socio-economic background, sex and age (UK, 2014 to 2021, 3-year rolling averages)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN351_overview-20230713.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Time_period",
    "scale": "£",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": [7.5, 10, 12.5, 15, 17.5],
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840"],
    "margin": [0, 0, 0, 0],
    "range": [7.5, 17.5],
    "maxLabelLength": 55,
    "rolloverBehaviour": "fade",
    "clickBehaviour": "isolate",
    "dataTable": "/static/pre-processed-csvs/IN351-income-returns-to-education--by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2, 2, 2, 2, 2]
}

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN351",
    "title": "Mean (average) hourly earnings of 25 to 29 year olds in the UK, by educational level and sex, controlling for socio-economic background and age (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN351_gender-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "Category",
    "sort": "-Value",
    "scale": "£",
    "rounding": "1dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 20],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN351-income-returns-to-education--by-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN351",
    "title": "Mean (average) hourly earnings of 25 to 29 year olds in the UK, by educational level and ethnicity, controlling for socio-economic background and age (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN351_ethnicity-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "Category2",
    "sort": "Category2",
    "scale": "£",
    "rounding": "1dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xticksLength": 4,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 20],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN351-income-returns-to-education--by-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 2, 2]
}

## Section
By disability status

## Chart: Grouped-bar
{
    "code": "IN351",
    "title": "Mean (average) hourly earnings of 25 to 29 year olds in the UK, by educational level and disability status, controlling for socio-economic background and age (UK, 2014 to 2021 combined)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN351_disability-20230713.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category2",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category2",
    "scale": "£",
    "rounding": "1dp",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "range": [0, 20],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN351-income-returns-to-education--by-disability--table-format.csv",
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
The data shows the effect of different levels of education on the earnings of young people aged 25 to 29 years in the UK.

### Things you need to know
Data is weighted using LFS probability weights. Earnings are adjusted for inflation.

Data is combined for 3 years (for example, 2019 to 2021) to give more accurate estimates.
  
Percentage differences were estimated from a linear regression model of log hourly earnings, by educational level
controlling for socio-economic background, sex and age. 

For data by year, the estimates refer to the hourly earnings of men from a lower working-class background. 

For data by sex, ethnicity and disability status, estimates are shown for people aged 27 years from lower working-class backgrounds. 

For data by ethnicity, a simplified measure of educational level is used, (degree-level and non-degree level qualifications)
so that sample sizes are large enough to analyse.

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
[Download full dataset (CSV)](/static/data/full-datasets/IN351-income-returns-to-education--full-dataset.csv){: target="_blank" class="download" }
