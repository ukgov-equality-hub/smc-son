## Code
MO32

## Title
Relative educational mobility

## Summary
Data on how the education level of people in the UK compares to their parents’ education level.

## Subtitle
Summary main findings

## Text
Between 1991 and 2020, relative educational mobility went up for people aged 28 to 37 years.
This means that people’s chances of getting a degree became less related to whether their parents had a degree or not.

There was a higher level of relative educational mobility among men than women.

Relative educational mobility was similar:

* across all ethnic groups in the UK
* for people with or without a long-term illness or disability

Relative educational mobility was greater in Scotland, but did not vary significantly across other parts of the UK.

## Section
By year

## Chart: Single-line
{
    "code": "MO32",
    "title": "Parent-child odds ratios relating to university degrees, respondents aged 28 to 37 years (UK, 1991 to 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO32_overview-20230607.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "Ratio",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "dataTable": "/static/pre-processed-csvs/MO32-relative-educational-mobility--by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By area

## Chart: Single-bar
{
    "code": "MO32",
    "title": "Parent-child odds ratios relating to university degrees, respondents aged 25 to 64 years, by area (UK, 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO32_area-20230607.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Area_name",
    "ykey": "Value",
    "zkey": "Area_type",
    "sort": "-Value",
    "scale": "%",
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
    "dataTable": "/static/pre-processed-csvs/MO32-relative-educational-mobility--by-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By sex

## Chart: Single-bar
{
    "code": "MO32",
    "title": "Parent-child odds ratios relating to university degrees, respondents aged 25 to 64 years, by sex (UK, 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO32_gender-20230607.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "zkey": "Area_name",
    "scale": "%",
    "maxBarSize": 150,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/MO32-relative-educational-mobility--by-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"]
}

## Section
By ethnicity

## Chart: Single-bar
{
    "code": "MO32",
    "title": "Parent-child odds ratios relating to university degrees, respondents aged 25 to 64 years, by ethnicity (UK, 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO32_ethnicity-20230607.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Category",
    "scale": "%",
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
    "dataTable": "/static/pre-processed-csvs/MO32-relative-educational-mobility--by-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By disability status

## Chart: Single-bar
{
    "code": "MO32",
    "title": "Parent-child odds ratios relating to university degrees, respondents aged 25 to 64 years, by disability status (UK, 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO32_disability-20230607.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "zkey": "Area_name",
    "scale": "%",
    "maxBarSize": 150,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92"],
    "margin": [0, 0, 0, 0],
    "xticksLength": 12,
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/MO32-relative-educational-mobility--by-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
About the data

## Text
### Data source
UK Household Longitudinal Survey (UKHLS)

### Time period
1991 to 2020

### Geographic area
UK

### What the data measures
The data measures relative educational mobility among 25 to 64 year olds in the UK.

It shows the link between parents’ and children’s education level by sex, ethnicity, disability status and area.

For this data, education is used as a binary measure of attainment of an undergraduate degree qualification versus not.

A higher odds ratio means a greater link between parents’ and children’s education levels
(‘intergenerational persistence’), while a lower odds ratio means greater relative mobility.

### Things you need to know
Formal modelling of the data with logistic regression shows that:

* the odds ratios for men and women are significantly different from each other
* the odds ratios for the different ethnic groups are not significantly different from each other
* the odds ratio for Scotland is significantly lower

Odds ratios for the Chinese ethnic group could not be calculated due to the small sample size.

For data by disability status, respondents were asked if they had a physical or mental impairment, illness or
disability for at least 12 months. This is different from Labour Force Survey data, which specifies that the
condition should be both long-term and limiting. We do not know how long respondents had the illness or disability,
and it is possible that they completed their education before the illness or disability occurred.
Because of this, the data is likely to underestimate the effects of disability.

### Type of data
Survey data, weighted using the UKHLS population weights

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/MO32-relative-educational-mobility--full-dataset.csv){: target="_blank" class="download" }
