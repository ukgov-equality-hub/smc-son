## Code
IN351

## Title
Income returns to education

## Summary
Data on the effect of different levels of education on the earnings of young people aged 25 to 29 years.

## Subtitle
Summary main findings

## Text
Data for the period from 2019 to 2021 shows that higher levels of education among 25 to 29 year olds led to higher earnings. Young people with a higher degree – such as a master’s degree – earned 63% more than those from the same socio-economic background (SEB) with no GCSEs. Young people with an undergraduate degree earned 54% more.
<br>
The ‘earnings gaps’ between young people with different levels of education remained similar in the 6 years before the 2019 to 2021 period. 
<br>
Young women’s hourly earnings were significantly lower than those of young men with the same level of qualification and from the same socio-economic background.
<br>
Young people from ethnic minorities earned around the same as White British young people with the same level of qualification.
<br>
Disabled young people earned significantly less than those without a disability with the same level of qualification. For people with an undergraduate degree (but not a higher degree), disabled young people earned 84% of the hourly earnings of those without a disability.

## Section
By year

## Chart: Multi-line
{ "code": "IN351", "title": "Hourly earnings in pounds (£) of 25 to 29 year olds, by highest qualification controlling for SEB, sex and age (UK, 2014 to 2021, 3-year rolling averages)", "data": "/static/data/indicators/IN351_overview-20230713.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Category", "sort": "Time_period", "scale": "£", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 3, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "rolloverBehaviour": "fade", "clickBehaviour": "isolate", "columns": [{ "column": "Time_period" }, { "column": "Category", "heading": "Qualification" }, { "column": "Value", "heading": "Controlling for SEB (£)", "align": "right", "format": "£" }, { "column": "LCI", "heading": "Lower confidence interval", "align": "right", "format": "£" }, { "column": "UCI", "heading": "Upper confidence interval", "align": "right", "format": "£" }] }

## Section
Relative differences

## Chart: Single-bar
{ "code": "IN351", "title": "Percentage differences in hourly earnings of 25 to 29 year olds, relative to those with lower level (below GCSE grade 1 or equivalent), controlling for SEB, sex and age (UK, 2019 to 2021 combined)", "data": "/static/data/indicators/IN351_difference-20230713.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "zkey": "Category", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "columns": [{ "column": "Time_period" }, { "column": "Category", "heading": "Qualification" }, { "column": "Value", "heading": "Percentage difference (%)", "align": "right", "format": "1dp" }] }

## Section
By sex

## Chart: Grouped-bar
{ "code": "IN351", "title": "Income returns to education", "data": "/static/data/indicators/IN351_gender-20230713.csv", "height": 450, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "Category", "sort": "Sex", "scale": "£", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Sex" }, { "column": "Category" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart: Grouped-bar
{ "code": "IN351", "title": "Income returns to education", "data": "/static/data/indicators/IN351_ethnicity-20230713.csv", "height": 450, "type": "bary", "xkey": "Category", "ykey": "Value", "group": "Category2", "sort": "Category2", "scale": "£", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Highest qualification" }, { "column": "Category2", "heading": "Ethnicity" }, { "column": "Value", "heading": "£", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By disability

## Chart: Grouped-bar
{ "code": "IN351", "title": "Income returns to education", "data": "/static/data/indicators/IN351_disability-20230713.csv", "height": 450, "type": "bary", "xkey": "Category2", "ykey": "Value", "group": "Category", "sort": "Category2", "scale": "£", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Disabled" }, { "column": "Category2", "heading": "Highest qualification" }, { "column": "Value", "heading": "£", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## About
# Data source(s)
Office for National Statistics, Labour Force Survey (LFS)

# Time period
2014 to 2021 (3-year rolling averages)

# Geographic area
UK

# What the data measures
The data shows the effect of different levels of education on the earnings of young people aged 25 to 29 years in the UK.

# Things you need to know
Data is weighted using LFS population weights. Earnings are adjusted for inflation.
<br>
Data is combined for 3 years (for example, 2019 to 2021) to give more accurate estimates.
<br>
Percentage differences were estimated from a linear regression model of log hourly earnings, controlling for educational level, SEB, gender and age. 
<br>
For data by year, the estimates refer to the hourly earnings of men from a lower working-class background. 
<br>
For data by sex, ethnicity and disability status, estimates are shown for people aged 27 years from lower working-class backgrounds. 
<br>
For data by ethnicity, a simplified measure of educational level is used, (degree-level and non-degree level qualifications) so that sample sizes are large enough to analyse.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-07-13 IN351.csv){: target="_blank" class="download" }
