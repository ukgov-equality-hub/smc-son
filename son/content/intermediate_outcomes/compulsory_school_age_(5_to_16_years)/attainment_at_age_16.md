## Code
IN13

## Title
Attainment at age 16

## Summary
Data on the percentage of pupils getting a pass (grade 5 or above) in GCSE English and Maths, by socio-economic background.

## Subtitle
Summary main findings

## Text
In the 2021 to 2022 school year:

* 50% of all pupils got a pass (grade 5 or above) in both GCSE English and maths
* 30% of disadvantaged pupils and 57% of all other pupils got a pass (grade 5 or above)
* the ‘disadvantage gap index’ – which measures the attainment gap between disadvantaged pupils and all other
  pupils – was at its widest since the 2011 to 2012 school year
* girls were more likely than boys to get a pass (grade 5 or above), regardless of their disadvantage status – for
  non-disadvantaged pupils, 60% of girls and 54% of boys got a pass (grade 5 or above), and for disadvantaged pupils,
  32% of girls and 27% for boys got a pass (grade 5 or above)
* there were large variations between pupils eligible for free school meals (FSM) in different ethnic groups
  – for example, 70% of FSM-eligible pupils from the Chinese ethnic group got a pass (grade 5 or above), compared with
  6% of Gypsy or Roma pupils
* disadvantaged pupils in London, the West Midlands, and Surrey and Sussex were the most likely to get a pass (grade 5
  or above) – pupils in rural areas of England, such as Cornwall and Cumbria, were less likely to

## Section
By disadvantage status over time

## Chart: Grouped-bar
{
    "code": "IN13",
    "title": "Percentage of pupils getting a pass (grade 5 or above) in GCSE English and maths, by disadvantage status over time (England, September 2018 to July 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN13_overview-20230601.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Time_period",
    "sort": "Time_period",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#eb652e", "#0f265c", "#808080"],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 40,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/data/pre-processed-csvs/IN13-attainment-at-age-16--by-year-and-disadvantage--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By year

## Chart: Single-line
{
    "code": "IN13",
    "title": "Disadvantage attainment gap index over time (England, September 2010 to July 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN13_year-20230601.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "Gap index",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#0f265c"],
    "range": [0, 5],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 20,
    "dataTable": "/static/data/pre-processed-csvs/IN13-attainment-at-age-16--gap-by-year--table-format.csv",
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By area

## Map
# Src
{
    "code": "IN13",
    "title": "Percentage of students achieving a pass (grade 5 or above) in both GCSE English and maths by the end of key stage 4, by region and eligibility for free school meals (FSM) (England, September 2012 to July 2022)",
    "tooltipTitle": "Percentage of 16 year olds getting a pass (grade 5 or above) in GCSE English and maths",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": [{
        "label": "FSM eligible",
        "data": "/static/data/indicators/IN13_area_fsm_eligible-20230601.csv"
    }, {
        "label": "Not FSM eligible",
        "data": "/static/data/indicators/IN13_area_not_fsm_eligible-20230601.csv"
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
    "xtitle": "Attainment at age 16 (%)",
    "legend": false,
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/IN13-attainment-at-age-16--by-ITL2-region-and-FMS--table-format.csv",
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
    "code": "IN13",
    "title": "Percentage of pupils getting a pass (grade 5 or above) in GCSE English and maths, by disadvantage status and sex (England, academic year 2021 to 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN13_gender-20230601.csv",
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
    "range": [0, 70],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 40,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/data/pre-processed-csvs/IN13-attainment-at-age-16--by-sex-and-disadvantage--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right"]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN13",
    "title": "Percentage of FSM-eligible pupils getting a pass (grade 5 or above) in GCSE English and maths, by ethnicity (England, academic year 2021 to 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN13_ethnicity_fsm-20230601.csv",
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
    "maxLabelLength": 180,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/data/pre-processed-csvs/IN13-attainment-at-age-16--by-ethnicity-and-FMS--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
About the data

## Text
### Data source
Department for Education, National curriculum assessments at key stage 4 in England, 2022

### Time period
September 2010 to July 2022

### Geographic area
England

### What the data measures
The data shows the percentage of children who got a pass (grade 5 or above) in both English and maths GCSEs by the end of
key stage 4, when pupils are usually 16 years old.

Disadvantaged pupils are those who:

* were registered as eligible for free school meals (FSM) at any point in the last 6 years
* are looked after by a local authority in England and Wales, or who left local authority care through adoption,
* a special guardianship order, a residence order or a child arrangements order

The ‘disadvantage gap index’ summarises the relative attainment gap between disadvantaged pupils and all other pupils.
It is based on the grades they got in GCSE English and maths. A disadvantage gap score of 0 means there was no
difference in achievement. A score of +10 means that every non-disadvantaged pupil did better than every disadvantaged pupil.

### Things you need to know
Figures for the school years ending in July 2020 and July 2022 are based on revised data. Figures for the school
year ending in July 2019 are based on final data.

Summer exams were cancelled in 2020 and 2021 due to the COVID-19 pandemic. During that time, pupils’ grades were
based on teacher assessments and centre assessments.

Eligibility for FSM is used as an indicator of deprivation by the Department for Education.
Children are eligible for FSM if their parents receive certain benefits.

### Type of data
Administrative data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN13-attainment-at-age-16--full-dataset.csv){: target="_blank" class="download" }
