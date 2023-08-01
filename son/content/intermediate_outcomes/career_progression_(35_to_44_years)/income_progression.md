## Code
IN43

## Title
Income progression

## Summary
Data on changes in the annual incomes of men and women aged 25 to 44 years in the UK, by socio-economic background (SEB).

## Subtitle
Summary main findings

## Text
Data from 2014 to 2021 shows that annual incomes of men and women aged 25 to 44 years from professional backgrounds went up more than for those from intermediate or working class backgrounds.
<br>
Men from professional backgrounds earned around £25,000 at 25 years old, rising to nearly £50,000 at 44 years old. Those from lower working class backgrounds earned around £20,000 at 25 years old, and just over £30,000 at 44 years old.
<br>
Women’s average earnings were lower, and did not go up as quickly as men’s.

## Section
Overview

## Chart: Multi-line
{ "code": "IN43", "title": "Income progression", "data": [{ "label": "Women", "data": "/static/data/indicators/IN43_gender_female-20230713.csv" }, { "label": "Men", "data": "/static/data/indicators/IN43_gender_male-20230713.csv" }], "toggle": "radio", "height": 450, "type": "liney", "xkey": "Age", "ykey": "Value", "zkey": "SEB", "sort": "Age", "scale": "Predictive margins (£)", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "xticks": 5, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "range": [0, 50000], "margin": [0, 0, 0, 0], "maxLabelLength": 30, "rolloverBehaviour": "fade", "clickBehaviour": "isolate", "columns": [{ "column": "Age" }, { "column": "Value", "heading": "Controlling for SEB (£)", "align": "right", "format": "£" }, { "column": "LCI", "heading": "Lower confidence interval", "align": "right", "format": "£" }, { "column": "UCI", "heading": "Upper confidence interval", "align": "right", "format": "£" }] }

## About
# Data source(s)
Office for National Statistics (ONS), Labour Force Survey (LFS) 

# Time period
2014 to 2021 (combined)

# Geographic area
UK

# What the data measures
The data shows the levels of income progression for people aged 25 to 44 years in the UK, by sex and socio-economic background.
<br>
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
<br>
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
[Download full dataset (CSV)](/static/data/indicators/2023-07-13 IN43.csv){: target="_blank" class="download" }
