### Code
DR32

## Title
Youth unemployment

## Summary
Data on the number of 16 to 24 year olds who were unemployed in the UK from 2014 to 2021.

## AllUK
# chart-src
/static/data/DR32_alluk.csv

# chart-options
{ type: 'line', xkey: 'Time_period', ykey: 'Value', zkey: 'Ind_code', xgrid: false, ygrid: true, legend: false, domain: [2014, 2021], range: [11, 19], colourScheme: ['#0f0', '#f00'], margin: [0, 0, 0, 0], ticks: 5, rotateDomainLabels: true, fontFamily: 'GDS Transport', fontSize: '15px', backgroundColor: 'transparent', legend: true }

## Region
# map-src
/static/data/International_Territorial_Level_2_(January_2021)_UK_BUC_V2.json

# map-data-src
/static/data/DR32_region.csv

# map-options
{ geoFormat: '', nameField: 'Area_name', valueField: 'Value', areaField: 'ITL221NM', dataFormat: 'quintile', _legend: 'map-legend', tooltip: 'map-tooltip', domains: ['Q1 - Bottom 20%', 'Q2', 'Q3', 'Q4', 'Q5 - Top 20%'], colourScheme: ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'], rolloverBehaviour: 'outline', tooltipBehaviour: 'click', background: true }

# chart-src
/static/data/DR32_region.csv

# chart-options
{ type: 'dot', xkey: 'Value', ykey: 'Area_name', sort: '-Value', dataFormat: 'quintile', xgrid: false, ygrid: true, legend: false, colourScheme: ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'], colourScheme1: ['#1d70b8'], margin: [0, 0, 0, 0], fontFamily: 'GDS Transport', fontSize: '15px', backgroundColor: 'transparent', lowerConfidence: 'LCI', upperConfidence: 'UCI' }

# _chart-options
{ type: 'quintile', xkey: 'Value', ykey: 'Area_name', yvalue: 'Highlands and Islands', colourScheme: ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'], margin: [0, 0, 0, 0], backgroundColor: 'transparent' }

## Data Table
# data-src
/static/data/DR32.csv

## About
# Data sources
Labour Force Survey, ONS

# Time period
2014 to 2021

# Geographic area
UK

# What the data measures
The data shows unemployment rates for 16 to 24 year olds in the UK.</p>

<p class="govuk-body">The rate is based on the number of unemployed people aged 16 to 24 (Labour Force Survey estimates).</p>

<p class="govuk-body">Rates are rounded to 1 decimal place.

# Things you need to know
Regions are ranked in order and then divided into 5 groups, with each group having an equal number of regions.

# Type of data
Survey data.

## Subtitle
Summary main findings

## Text
The youth unemployment rate was 17% in 2014, the highest rate at any time between 2014 and 2021.

## Text
In the 3 years from 2018 to 2021, unemployment rates for 16 to 24 year olds were higher in metropolitan areas, such as London, Greater Manchester and the West Midlands.

## Text
Rates were lower in more rural areas, such as the Highlands and Islands, Northern Ireland and North Yorkshire.
