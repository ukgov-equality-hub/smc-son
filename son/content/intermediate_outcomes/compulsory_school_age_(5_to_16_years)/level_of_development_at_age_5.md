## Code
IN11

## Title
Level of development at age 5

## Summary
Data on the percentage of 5 year olds who achieve a ‘good level of development’.

## Subtitle
Summary main findings

## Text
In the 7 school years ending in July 2019, the percentage of 5 year olds who achieved a good level of development
(meeting at least the expected standard in the early years foundation stage) went up from 52% to 72%.
It went down to 65% in the 2021 to 2022 school year.

In the 2021 to 2022 school year:

* 49% of pupils eligible for free school meals (FSM) and 69% of non-eligible pupils achieved a good level of development
* 75% of girls and 62% of boys achieved a good level of development – for students eligible for FSM, 57% of girls
  and 42% of boys achieved the level
* FSM-eligible children from Black, Asian and Mixed ethnic backgrounds were more likely to achieve a good level of
  development than FSM-eligible White children
* FSM-eligible pupils in London, East Yorkshire and North Lincolnshire, and the West Midlands were the most likely
  out of all areas to to achieve a good level of development – pupils in Cumbria were the least likely to

## Section
By year

## Chart: Multi-line
{
    "code": "IN11",
    "title": "Percentage of students achieving a 'good level of development' at age 5 years, by eligibility for free school meals over time (England, September 2012 to July 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN11_overview-20230714.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "SEB",
    "sort": "Time_period",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92"],
    "margin": [0, 0, 0, 0],
    "rolloverBehaviour": "fade",
    "clickBehaviour": "isolate",
    "dataTable": "/static/pre-processed-csvs/IN11-level-of-development-at-age-5--by-FSM-and-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right"]
}

## Section
By area

## Map
# Src
{
    "code": "IN11",
    "title": "Percentage of students achieving a ‘good level of development’ at age 5 years, and ‘quintile’ ranking (from best 20% to worst 20%), by region and eligibility for free school meals (FSM) (England, September 2012 to July 2022)",
    "tooltipTitle": "Percentage of children reaching a ‘good level of development’",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": [{
        "label": "FSM eligible",
        "data": "/static/data/indicators/IN11_area_fsm_eligible-20230714.csv"
    }, {
        "label": "Not FSM eligible",
        "data": "/static/data/indicators/IN11_area_not_fsm_eligible-20230714.csv"
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
    "dataTable": "/static/pre-processed-csvs/IN11-level-of-development-at-age-5--by-ITL2-region-and-FMS--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1]
}

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes.
They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.<br>

The figure for each region shows the percentage of pupils who achieved a ‘good level of development’ at 5 years old.
Figures are shown separately for FSM-eligible pupils and non-eligible pupils.
The gap between these 2 groups is also shown for each region.<br>

The lines either side of the dots represent confidence intervals – the range of values that the 'true' value for
the region is highly likely to be within. Read more about [confidence intervals].

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN11",
    "title": "Percentage of students achieving a ‘good level of development’ at age 5 years, by sex and eligibility for free school meals (England, academic year 2021 to 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN11_gender-20230714.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "SEB",
    "sort": "SEB",
    "scale": "%",
    "maxBarSize": 150,
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "margin": [0, 0, 0, 0],
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN11-level-of-development-at-age-5--by-FSM-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN11",
    "title": "Percentage of students achieving a ‘good level of development’ at age 5 years, by ethnicity and eligibility for free school meals (England, academic year 2021 to 2022)",
    "tooltipTitle": "",
    "data": [{
        "label": "Girls",
        "data": "/static/data/indicators/IN11_ethnicity_female-20230714.csv"
    }, {
        "label": "Boys",
        "data": "/static/data/indicators/IN11_ethnicity_male-20230714.csv"
    }, {
        "label": "Overall",
        "data": "/static/data/indicators/IN11_ethnicity-20230714.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c"],
    "range": [0, 80],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 30,
    "textLabels": "outside",
    "labelColour": "#000",
    "clickBehaviour": "fade",
    "dataTable": "/static/pre-processed-csvs/IN11-level-of-development-at-age-5--by-FSM-and-ethnicity-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1],
    "dataTableNumberOfHeadingRows": 2
}

## Section
About the data

## Text
### Data source
Department for Education. Early years foundation stage (EYFS) profile results from the 2021 to 2022 academic year, 2022.

### Time period
September 2012 to July 2022

### Geographic area
England

### What the data measures
The data shows the percentage of pupils who achieved a ‘good level of development’ at 5 years old.

A child is classed as having a good level of development if they meet at least the expected standard in the early
years foundation stage (EYFS).

### Things you need to know
The EYFS was updated in September 2021. This means data for the 2021 to 2022 school year is not directly comparable
with data for earlier years.

Data was not collected during the 2 school years ending in July 2021 due to the COVID-19 pandemic.

Eligibility for free school meals (FSM) is used as an indicator of deprivation by the Department for Education.
Children are eligible for FSM if their parents receive certain benefits.
FSM are provided to roughly 15% of students. 

### Type of data
Administrative data

Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN11-level-of-development-at-age-5--full-dataset.csv){: target="_blank" class="download" }
