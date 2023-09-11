## Code
DR51

## Title
Broadband speed

## Summary
Data on median broadband speeds in UK regions between 2014 and 2019.

## Subtitle
Summary main findings

## Text
In 2019, the median broadband speed in the UK was 3 times as fast as in 2014.

## Section
By year

## Chart: Single-line
{
    "code": "DR51",
    "title": "Ratio (relative to 2014) of the median broadband speed (UK, 2014 to 2019)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/DR51_overview-20230417.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "Megabits per second",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "range": [0, 3],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 30,
    "dataTable": "/static/pre-processed-csvs/DR51-broadband-speed--by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 2]
}

## Section
By area

## Map
# Src
{
    "code": "DR51",
    "title": "Median broadband speed in megabits per second, by area over time (UK, 2014 to 2019)",
    "tooltipTitle": "Median broadband speed",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": [{
        "label": "2014",
        "data": "/static/data/indicators/DR51_area_2014-20230417.csv"
    }, {
        "label": "2015",
        "data": "/static/data/indicators/DR51_area_2015-20230417.csv"
    }, {
        "label": "2016",
        "data": "/static/data/indicators/DR51_area_2016-20230417.csv"
    }, {
        "label": "2017",
        "data": "/static/data/indicators/DR51_area_2017-20230417.csv"
    }, {
        "label": "2018",
        "data": "/static/data/indicators/DR51_area_2018-20230417.csv"
    }, {
        "label": "2019",
        "data": "/static/data/indicators/DR51_area_2019-20230417.csv"
    }],
    "toggle": "radio",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "Megabits per second",
    "height": 700,
    "dataFormat": "quintile",
    "background": "full",
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "domain": [0, 85],
    "rolloverBehaviour": "outline",
    "onClick": "mapSelect1",
    "type": "dot",
    "xkey": "Value",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "xtitle": "Broadband speed (Mbps)",
    "legend": false,
    "margin": [0, 0, 0, 0],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/pre-processed-csvs/DR51-broadband-speed--by-ITL2-region-and-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1, 1]
}

# Guidance
[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest broadband speed.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).

The regional estimates have a large margin of error – do not rank or compare specific regions.

See the [composite indices](/social_mobility_by_area#composite-measures-by-region) for more precise estimates and to
understand overall regional patterns.

## Section
About the data

## Text
### Data source
Department for Business, Energy and Industrial Strategy and Nesta Research & Development spatial data tool, 2021.

### Time period
2014 to 2019

### Geographic area
UK

### What the data measures
The data shows changes in median broadband speed in the UK between 2014 and 2019.
It also shows the broadband speed for 41 regions of the UK.

### Things you need to know
Nesta data includes regional scores but not a national average figure.
To track changes over time, we use the broadband speed for the median UK area each year. 

The median is the middle point of a range of numbers which are arranged in order.
In this case, the median area is the area ranked 21st out of the 41 regions in the UK.

### Type of data
Administrative data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/DR51-broadband-speed--full-dataset.csv){: target="_blank" class="download" }
