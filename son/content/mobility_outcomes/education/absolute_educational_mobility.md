## Code
MO31

## Title
Absolute educational mobility

## Summary
Data on how the education level of people in the UK compares to their parents' education level.

## Subtitle
Summary main findings

## Text
For people whose parents had no qualifications, 70% had some qualifications themselves, and 18% had a university degree.

People whose parents had a university degree were more likely to have a degree themselves (64%) than people whose
parents had no qualifications (18%).

There were only small differences in educational mobility between men and women.
Among people whose parents had university degrees, 67% of women and 61% of men had degrees themselves.

For people whose parents did not have a university degree:

* those from Chinese (64%), White Other (44%), Indian (40%) and Pakistani (37%) ethnic backgrounds were the most
  likely to have a degree themselves out of all ethnic groups
* those living in London (39%) and the South East (32%) were the most likely out of all regions to get a degree
  themselves – those living in the East Midlands (22%), Wales (23%), Yorkshire and the Humber (24%), and the
  West Midlands (26%) were least likely

People with a long-term illness or disability were less likely to have a university degree than people without a
disability from the same education background. They were also more likely to have no qualifications.

## Section
By highest level of parental qualification

## Chart: Stacked-bar
{
    "code": "MO31",
    "title": "Highest level of qualification of 25 to 64 year olds, by highest level of parental qualification (UK, 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO31_overview_total-20230601.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "multiply": 100,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xtitle": "Parental educational qualifications",
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/MO31-absolute-educational-mobility--by-SEB--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1]
}

## Section
By area

## Chart: Single-bar
{
    "code": "MO31",
    "title": "Percentage of people whose parents did not have a university degree who got a degree themselves, by area of current residence (UK, 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO31_area-20230601.csv",
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
    "xticksLength": 4,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "range": [0, 50],
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/MO31-absolute-educational-mobility--by-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By sex

## Chart: Stacked-bar
{
    "code": "MO31",
    "title": "Highest level of qualification of 25 to 64 year olds, by highest level of parental qualification and sex (UK, 2020)",
    "tooltipTitle": "",
    "data": [{
        "label": "Women",
        "data": "/static/data/indicators/MO31_overview_female-20230601.csv"
    }, {
        "label": "Men",
        "data": "/static/data/indicators/MO31_overview_male-20230601.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "multiply": 100,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xtitle": "Parental educational qualifications",
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/MO31-absolute-educational-mobility--by-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2
}

## Section
By ethnicity

## Chart: Single-bar
{
    "code": "MO31",
    "title": "Percentage of people whose parents did not have a university degree who got a degree themselves, by ethnicity (UK, 2020)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO31_ethnicity-20230601.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xticksLength": 4,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 40,
    "textLabels": "center",
    "labelColour": "#fff",
    "dataTable": "/static/pre-processed-csvs/MO31-absolute-educational-mobility--by-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By disability status

## Chart: Grouped-bar
{
    "code": "MO31",
    "title": "Highest level of qualification of 25 to 64 year olds, by highest level of parental qualification and disability status (UK, 2020)",
    "tooltipTitle": "",
    "data": [{
        "label": "Disabled",
        "data": "/static/data/indicators/MO31_disability_disabled-20230601.csv"
    }, {
        "label": "Not disabled",
        "data": "/static/data/indicators/MO31_disability_not_disabled-20230601.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "multiply": 100,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "xtitle": "Parental educational qualifications",
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "range1": [0, 70],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/MO31-absolute-educational-mobility--by-SEB-and-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1, 1]
}

## Section
About the data

## Text
### Data source
The UK Household Longitudinal Survey (UKHLS)

### Time period
2020

### Geographic area
UK

### What the data measures
The data measures absolute educational mobility among 25 to 64 year olds in the UK. 

Upward absolute educational mobility is when someone has higher level qualifications than their parents.
Downward mobility is when they have lower qualifications.

### Things you need to know
If respondents have more than one parent, the data measures the parent with the highest level of qualification.

Qualifications for respondents and their parents are divided into 4 categories:

* university degrees
* post-school qualifications
* school qualifications
* no qualifications

Data analysed by ethnicity and by area only includes respondents whose parents did not have a degree.

For data by disability status, respondents were asked if they had a physical or mental impairment, illness or
disability for at least 12 months. This is different from Labour Force Survey data, which specifies that the condition
should be both long-term and limiting. We do not know how long respondents had the illness or disability, and it is
possible that they completed their education before the illness or disability occurred.
Because of this, the data is likely to underestimate the effects of disability.

For data by area, the region used is where respondents currently live, not where they grew up.
Because of this, the percentages may reflect graduates moving in from, or out to, other areas. 

The error bars show 95% confidence intervals. These intervals show where we expect the true value from a population to
be 95% of the time. For example, a confidence interval with the range of values from 5 to 10 implies that there is a
95% chance that the true population value is between 5 and 10, and a 5% chance that it is outside of this range.
The narrower the confidence interval or range, the more precise the estimate. Read more about
[confidence intervals](/about-our-analysis#confidence-intervals)

### Type of data
Survey data, weighted using UKHLS population weights.

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/MO31-absolute-educational-mobility--full-dataset.csv){: target="_blank" class="download" }
