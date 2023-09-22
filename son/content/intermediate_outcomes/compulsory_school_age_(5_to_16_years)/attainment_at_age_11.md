## Code
IN12

## Title
Attainment at age 11

## Summary
Data on the percentage of pupils meeting the expected standard in reading, writing and maths by the age of 11 years, by socio-economic background.

## Subtitle
Summary main findings

## Text
In the 4 school years from September 2015 to July 2019, the percentage of pupils who met the expected standard in reading,
writing and maths by 11 years old went up from 53% to 65%. It went down to 59% in the 2021 to 2022 school year.

In the 9 school years from September 2010 to July 2019, the gap between pupils from disadvantaged backgrounds and non-disadvantaged
pupils (the ‘disadvantage gap’) went down. It then went up in the 2021 to 2022 school year to the highest level since 2012.

In the 2021 to 2022 school year:

* 43% of disadvantaged pupils and 66% of non-disadvantaged pupils met the expected standard
* 47% of disadvantaged girls and 39% of disadvantaged boys met the expected standard, compared with 70% of
  non-disadvantaged girls and 61% of non-disadvantaged boys
* there were large variations between pupils eligible for free school meals (FSM) in different ethnic groups
  – for example, 76% of FSM-eligible pupils from the Chinese ethnic group met the expected standard, compared with
  12% of Gypsy or Roma pupils
* disadvantaged pupils in London, the West Midlands, and Tees Valley and Durham were the most likely to meet the
  expected standard out of all regions – pupils in southern and eastern parts of England were the least likely to

## Section
By disadvantage status over time

## Chart: Grouped-bar
{
    "code": "IN12",
    "title": "Percentage of pupils meeting the expected standard in reading, writing and maths at key stage 2, by disadvantage status over time (England, September 2015 to July 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN12_overview-20230531.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Time_period",
    "sort": "Time_period",
    "scale": "%",
    "filterNaN": false,
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "2nd",
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#eb652e", "#0f265c", "#808080"],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 40,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/data/pre-processed-csvs/IN12-attainment-at-age-11--by-year-and-disadvantage--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right"]
}

## Section
By year

## Chart: Single-line
{
    "code": "IN12",
    "title": "Disadvantage attainment gap index over time (England, September 2010 to July 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN12_year-20230531.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "Gap index",
    "filterNaN": false,
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#0f265c"],
    "range": [0, 4],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 20,
    "dataTable": "/static/data/pre-processed-csvs/IN12-attainment-at-age-11--gap-by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By area

## Map
# Src
{
    "code": "IN12",
    "title": "Percentage of students meeting the expected standard in reading, writing and maths by the end of key stage 2, by region and eligibility for free school meals (FSM) (England, September 2012 to July 2022)",
    "tooltipTitle": "Percentage of 11 year olds meeting expected standard",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": [{
        "label": "FSM eligible",
        "data": "/static/data/indicators/IN12_area_fsm_eligible-20230531.csv"
    }, {
        "label": "Not FSM eligible",
        "data": "/static/data/indicators/IN12_area_not_fsm_eligible-20230531.csv"
    }],
    "toggle": "radio",
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
    "x1key": "FSM_eligible",
    "x2key": "Not_known_to_be_FSM_eligible",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "xtitle": "Attainment at age 11 (%)",
    "legend": false,
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/IN12-attainment-at-age-11--by-ITL2-region-and-FSM--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest percentages.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).

The regional estimates have a large margin of error – do not rank or compare specific regions.

The lines either side of the dots represent [confidence intervals](/about-our-analysis#confidence-intervals)
– the range of values that the 'true' value for each region is highly likely to be within.
In many cases the confidence intervals overlap.
This suggests differences between specific regions may not be statistically significant. 

See the [composite indices](/social_mobility_by_area#composite-measures-by-region) for more precise estimates and to
understand overall regional patterns.

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN12",
    "title": "Percentage of pupils meeting the expected standard in reading, writing and maths at key stage 2, by disadvantage status and sex (England, school year 2021 to 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN12_gender-20230419.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Sex",
    "sort": "Sex",
    "scale": "%",
    "rounding": "0dp",
    "maxBarSize": 150,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#0f265c", "#eb652e"],
    "range": [0, 80],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 40,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/data/pre-processed-csvs/IN12-attainment-at-age-11--by-sex-and-disadvantage--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"]
}

## Section
By ethnicity

## Chart: Single-bar
{
    "code": "IN12",
    "title": "Percentage of FSM-eligible pupils meeting the expected standard in reading, writing and maths at key stage 2, by ethnicity (England, school year 2021 to 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN12_ethnicity_fsm_202122-20230531.csv",
    "height": 600,
    "type": "bar",
    "xkey": "Value",
    "ykey": "Category",
    "sort": "Value",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": true,
    "ygrid": false,
    "xticks": 5,
    "legend": true,
    "colourScheme": ["#0f265c"],
    "domain": [0, 85],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 225,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/data/pre-processed-csvs/IN12-attainment-at-age-11--by-ethnicity-and-FSM--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"]
}

## Section
About the data

## Text
### Data source
Department for Education. National curriculum assessments at key stage 2 in England, 2022

### Time period
September 2010 to July 2022

### Geographic area
England

### What the data measures
The data shows the percentage of pupils who met the expected standard in reading, writing and maths at the end of key
stage 2, when pupils are usually 11 years old.

Disadvantaged pupils are those who:

* were registered as eligible for free school meals at any point in the last 6 years
* are looked after by a local authority in England and Wales, or who left local authority care through adoption,
* a special guardianship order, a residence order or a child arrangements order

The ‘disadvantage gap index’ summarises the relative attainment gap between disadvantaged pupils and all other pupils.
It is based on their scores in reading and maths at the end of key stage 2. A disadvantage gap score of 0 means there
was no difference in achievement. A score of +10 means that every non-disadvantaged pupil did better than every disadvantaged pupil.

### Things you need to know
Data was not collected during the 2 school years ending in July 2021 due to the COVID-19 pandemic.

Eligibility for free school meals (FSM) is used as an indicator of deprivation by the Department for Education.
Children are eligible for FSM if their parents receive certain benefits.

Figures for the 2021 to 2022 school year are based on revised data. Figures for other years are based on final data.

### Type of data
Administrative data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN12-attainment-at-age-11--full-dataset.csv){: target="_blank" class="download" }
