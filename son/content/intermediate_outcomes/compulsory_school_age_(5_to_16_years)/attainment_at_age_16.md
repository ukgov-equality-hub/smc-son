## Code
IN13

## Title
Attainment at age 16

## Summary
Data on the percentage of pupils getting a grade 5 or above in GCSE English and Maths.

## Subtitle
Summary main findings

## Text
In the 2021 to 2022 school year:

* 50% of all pupils got a grade 5 or above in both GCSE English and maths
* 30% of disadvantaged pupils and 57% of all other pupils got a grade 5 or above
* the ‘disadvantage gap index’ – which measures the attainment gap between disadvantaged pupils and all other
  pupils – was at its widest since the 2011 to 2012 school year
* girls were more likely than boys to get a grade 5 or above, regardless of their disadvantage status – for
  non-disadvantaged pupils, 60% of girls and 54% of boys got a grade 5 or above, and for disadvantaged pupils,
  32% of girls and 27% for boys got a grade 5 or above
* there were large variations between pupils eligible for free school meals (FSM) in different ethnic groups
  – for example, 70% of FSM-eligible pupils from the Chinese ethnic group got a grade 5 or above, compared with
  6% of Gypsy or Roma pupils
* disadvantaged pupils in London, the West Midlands, and Surrey and Sussex were the most likely to get a grade 5 or
  above – pupils in rural areas of England such as Cornwall and Cumbria were the least likely to

## Section
By disadvantage status over time

## Chart: Grouped-bar
{
    "code": "IN13",
    "title": "Percentage of pupils getting a grade 5 or above in GCSE English and maths, by disadvantage status over time (England, September 2018 to July 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN13_overview-20230601.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Time_period",
    "sort": "Time_period",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN13-attainment-at-age-16--by-year-and-disadvantage--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
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
    "colourScheme": ["#5694ca"],
    "margin": [0, 0, 0, 0],
    "dataTable": "/static/pre-processed-csvs/IN13-attainment-at-age-16--gap-by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By area

## Map
# Src
{
    "code": "IN13",
    "title": "Percentage of students achieving a grade 5 or above in both GCSE English and maths by the end of key stage 4, and ‘quintile’ ranking (from best 20% to worst 20%), by region and eligibility for free school meals (FSM) (England, September 2012 to July 2022)",
    "tooltipTitle": "Percentage of 16 year olds getting a grade 5 or above in GCSE English and maths",
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
    "scale": "Number of students",
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
    "xtitle": "",
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/IN13-attainment-at-age-16--by-ITL2-region-and-FMS--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1],
    "dataTableTitle": "Percentage of pupils getting a grade 5 or above in GCSE English and maths, by region"
}

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes.
They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.<br>

The figure for each region shows the percentage of pupils who got a grade 5 or above in both GCSE English and maths.
Figures are shown separately for FSM-eligible pupils and non-eligible pupils.
The gap between these 2 groups is also shown for each region.<br>

The lines either side of the dots represent confidence intervals – the range of values that the 'true' value for
the region is highly likely to be within. Read more about [confidence intervals].

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN13",
    "title": "Percentage of pupils getting a grade 5 or above in GCSE English and maths, by disadvantage status and sex (England, academic year 2021 to 2022)",
    "tooltipTitle": "",
    "data": [{
        "label": "Boys",
        "data": "/static/data/indicators/IN13_gender_male-20230601.csv"
    }, {
        "label": "Girls",
        "data": "/static/data/indicators/IN13_gender_female-20230601.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Time_period",
    "sort": "Time_period",
    "scale": "%",
    "maxBarSize": 150,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "range": [0, 70],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN13-attainment-at-age-16--by-year-and-sex-and-disadvantage--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right"],
    "dataTableNumberOfHeadingRows": 2
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN13",
    "title": "Percentage of FSM-eligible pupils getting a grade 5 or above in GCSE English and maths, by ethnicity (England, academic year 2021 to 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN13_ethnicity-20230601.csv",
    "height": 1450,
    "type": "bar",
    "xkey": "Value",
    "ykey": "SEB",
    "group": "Category",
    "sort": "Category",
    "scale": "%",
    "xgrid": true,
    "ygrid": false,
    "xticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN13-attainment-at-age-16--by-ethnicity-and-FMS--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
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
The data shows the percentage of children who got a grade 5 or above in both English and maths GCSEs by the end of
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
FSM are provided to roughly 15% of students. 

### Type of data
Administrative data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN13-attainment-at-age-16--full-dataset.csv){: target="_blank" class="download" }
