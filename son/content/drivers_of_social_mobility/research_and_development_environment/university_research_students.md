## Code
DR53

## Title
University research students

## Summary
Data on the median number of full-time research students enrolled in universities in the UK, from 2015 to 2018.

## Subtitle
Summary main findings

## Text
The median number of research students in the UK went up by 4% from 2015 to 2018.

## Section
By year

## Chart: Single-line
{
    "code": "DR53",
    "title": "Ratio (relative to 2015) of the median number of full-time equivalent research students enrolled in universities (UK, 2015 to 2018)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/DR53_overview-20230417.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "Number of students",
    "rounding": "2dp",
    "xgrid": false,
    "ygrid": true,
    "xticks": 3,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "range": [0.8, 1.2],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 30,
    "dataTable": "/static/data/pre-processed-csvs/DR53-university-research-students--by-year--table-format.csv",
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 3]
}

## Section
By area

## Map
# Src
{
    "code": "DR53",
    "title": "Number of research students, by region over time (UK, 2015 to 2018)",
    "tooltipTitle": "Number of research students",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": [{
        "label": "2015",
        "data": "/static/data/indicators/DR53_area_2015-20230417.csv"
    }, {
        "label": "2016",
        "data": "/static/data/indicators/DR53_area_2016-20230417.csv"
    }, {
        "label": "2017",
        "data": "/static/data/indicators/DR53_area_2017-20230417.csv"
    }, {
        "label": "2018",
        "data": "/static/data/indicators/DR53_area_2018-20230417.csv"
    }],
    "toggle": "radio",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "Number of students",
    "height": 700,
    "dataFormat": "quintile",
    "background": "full",
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "domain": [0, 13000],
    "rolloverBehaviour": "outline",
    "onClick": "mapSelect1",
    "type": "dot",
    "xkey": "Value",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "xticks": 2,
    "xtitle": "University research students (# of students)",
    "legend": false,
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/DR53-university-research-students--by-ITL2-region-and-year--table-format.csv",
    "dataTableAlignColumns": ["left", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 0, 0, 0, 0]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest number of research students.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).

The regional estimates have a large margin of error – do not rank or compare specific regions.

See the [composite indices](/social_mobility_by_area#composite-measures-by-region) for more precise estimates and to
understand overall regional patterns.

## Section
About the data

## Text
### Data source
Department for Business, Energy and Industrial Strategy, and Nesta Research and Development spatial data tool, 2021

### Time period
2015 to 2018

### Geographic area
UK

### What the data measures
The data shows the relative increase in the number of research students in the UK between 2015 and 2018.
It also shows the number of students in each region of the UK.

### Things you need to know
Nesta data includes regional scores but not a national average figure.
To track changes over time, we use the area with the median number of university students each year. 

The median is the middle point of a range of numbers which are arranged in order.
In this case, the median area is the area ranked 21st out of the 41 regions in the UK.

### Type of data
Administrative data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/DR53-university-research-students--full-dataset.csv){: target="_blank" class="download" }
