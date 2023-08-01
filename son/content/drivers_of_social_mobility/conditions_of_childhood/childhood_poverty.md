## Code
DR12

## Title
Childhood poverty

## Summary
Data on the percentage of children in the UK living in relative poverty after housing costs.

## Subtitle
Summary main findings

## Text
The percentage of children living in relative poverty has gone up since 2012, but is below the levels reached in the 1990s.<br>
Between 2017 and 2022, the percentage of children living in relative poverty stayed roughly the same at around 30%.<br>
Out of all UK regions, Greater London, Greater Manchester, and the West Midlands had some of the highest levels of childhood poverty in 2022.

## Section
By year

## Chart: Multi-line
# Src
{ "code": "DR12", "title": "Percentage of children living in relative poverty after housing costs, by country over time (UK, 1994 to 2022)", "data": "/static/data/indicators/DR12_overview-20230417.csv", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "xticks": 7, "yticks": 3, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "rolloverBehaviour": "fade", "clickBehaviour": "isolate", "columns": [{ "column": "Area_name", "heading": "Country" }, { "column": "Time_period" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

# Guidance
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum sapien augue, eget condimentum purus blandit et. Nunc sed varius nulla. Proin nec magna aliquam, tristique leo at, volutpat quam. Maecenas ac ipsum suscipit, tincidunt dui sit amet, viverra ipsum. Donec rhoncus lacinia lorem vel vulputate. In ac varius metus. Ut sed nisi ut libero lobortis rutrum. Vivamus vel ipsum quis diam feugiat mattis fermentum ut ex. Etiam ultricies, mi in tempus vestibulum, augue nunc ullamcorper lectus, sed ultricies risus lectus ac libero. In sed odio ut diam commodo iaculis. Nunc vitae tempor turpis, quis aliquet tellus. Phasellus eget nunc pellentesque, tincidunt velit sed, varius arcu. Cras convallis, urna et varius suscipit, elit lacus consequat nunc, non feugiat libero ligula vel dui. Aliquam id laoreet lacus, quis consequat mi. Aliquam eget mauris vel ipsum congue maximus condimentum quis ligula. Mauris feugiat mi eget venenatis auctor.

## Section
By area

## Map
# Src
{ "code": "DR12", "title": "Percentage of children living in relative poverty after housing costs, and quintile ranking (from best 20% to worst 20%), by region (UK, 2022)", "tooltipTitle": "test title", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/DR12_area-20230417.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

# Guidance
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum sapien augue, eget condimentum purus blandit et. Nunc sed varius nulla. Proin nec magna aliquam, tristique leo at, volutpat quam. Maecenas ac ipsum suscipit, tincidunt dui sit amet, viverra ipsum. Donec rhoncus lacinia lorem vel vulputate. In ac varius metus. Ut sed nisi ut libero lobortis rutrum. Vivamus vel ipsum quis diam feugiat mattis fermentum ut ex. Etiam ultricies, mi in tempus vestibulum, augue nunc ullamcorper lectus, sed ultricies risus lectus ac libero. In sed odio ut diam commodo iaculis. Nunc vitae tempor turpis, quis aliquet tellus. Phasellus eget nunc pellentesque, tincidunt velit sed, varius arcu. Cras convallis, urna et varius suscipit, elit lacus consequat nunc, non feugiat libero ligula vel dui. Aliquam id laoreet lacus, quis consequat mi. Aliquam eget mauris vel ipsum congue maximus condimentum quis ligula. Mauris feugiat mi eget venenatis auctor.

## About the data
# Data source
Department for Work and Pensions, Households below average income (HBAI) statistics.

# Time period
1994 to 2022

# Geographic area
UK

# What the data measures
The data shows the percentage of children living in households in relative poverty after housing costs in the UK.<br>
Data is calculated using 3-year averages. For example, the figure for 2019 represents the average of the financial years starting in 2017, 2018 and 2019.

# Things you need to know
A household is in relative poverty if their equivalised income is below 60% of the median income for all households in the UK. ‘Equivalised’ means adjusted for the number and ages of the people living in the household.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-03-27 DR12.csv){: target="_blank" class="download" }
