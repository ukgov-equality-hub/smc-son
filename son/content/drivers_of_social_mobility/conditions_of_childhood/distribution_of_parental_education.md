## Code
DR13

## Title
Distribution of parental education

## Summary
Data on the highest qualification levels of parents in families with dependent children.

## Subtitle
Summary main findings

## Text
41% of adults in families with dependent children had a degree or above in 2021, up from 30% in 2014.

26% had GCSEs or below in 2021, down from 33% in 2014.

## Section
By year

## Chart: Stacked-bar
{
    "code": "DR13",
    "title": "Percentage of adults in families with dependent children in different education levels, over time (UK, 2014 to 2021)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/DR13_overview-20230419.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Time_period",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme":  ["#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/pre-processed-csvs/DR13-distribution-of-parental-education--by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1]
}

## Section
By area

## Map
# Src
{
    "code": "DR13",
    "title": "Percentage of adults in families with dependent children with a higher education qualification, and quintile ranking (from best 20% to worst 20%), by region (UK, 2014 to 2021 combined)",
    "tooltipTitle": "Percentage of adults with a higher education qualification",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/DR13_area-20230419.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "%",
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "confidenceIntervals": "visible",
    "height": 700,
    "dataFormat": "quintile",
    "zero": false,
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "rolloverBehaviour": "outline",
    "onClick": "mapSelect1",
    "type": "dot",
    "xkey": "Value",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "xtitle": "",
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/DR13-distribution-of-parental-education--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1],
    "dataTableTitle": "Percentage of adults in families with dependent children with a higher education qualification, by region (UK, 2014 to 2021 combined)"
}

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes.
They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.

The figure for each region shows the percentage of adults in families with dependent children who had a higher
education qualification (such as a degree).

The lines either side of the dots represent confidence intervals – the range of values that the 'true' value for
the region is highly likely to be within. Read more about [confidence intervals].

## Section
About the data

## Text
### Data source
Labour Force Survey, Office for National Statistics.

### Time period
2014 to 2021

### Geographic area
UK

### What the data measures
The data shows the education levels of adults in families with dependent children.
Dependent children are classed as all 0 to 15 year olds, and 16 to 18 year olds who are in full-time education.

The education levels are:

* lower level (below CSE grade 1)
* O level, GCSE and equivalent
* A level and equivalent
* further education (below degree level)
* higher education (degree level and above)

### Things you need to know
The average age of survey respondents was 40 years old. The majority of respondents are likely to be the parents
or carers of dependent children, but some could be adults living in homes with parents who have dependent children.

Respondents aged less than 21 years old were not included. 

### Type of data
Survey data, weighted

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/DR13-distribution-of-parental-education--full-dataset.csv){: target="_blank" class="download" }
