# Childhood poverty

Data on the percentage of children in the UK living in relative poverty after housing costs.

[TOC]

## Summary main findings

The percentage of children living in relative poverty has gone up since 2012, but is below the levels reached in the 1990s.

Between 2017 and 2022, the percentage of children living in relative poverty stayed roughly the same at around 30%.

---

## By year

::: tabs
    ::: tab section_name="By year" tab_name="Visualisation"
        #### Percentage of children living in relative poverty after housing costs, by country over time (UK, 1997 to 2022)

        ::: visualisation vis_type="chart" xtype="Chart: Multi-line"
            {
                "code": "DR12",
                "tooltipTitle": "",
                "data": "/static/data/indicators/DR12_overview-20230419.csv",
                "height": 450,
                "type": "liney",
                "xkey": "Time_period",
                "ykey": "Value",
                "zkey": "Area_name",
                "sort": "Time_period",
                "scale": "%",
                "xgrid": false,
                "ygrid": true,
                "xticks": 7,
                "yticks": 5,
                "legend": true,
                "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197"],
                "range": [0, 40],
                "margin": [0, 0, 0, 0],
                "rolloverBehaviour": "fade",
                "clickBehaviour": "isolate"
            }
        :::
    :::

    ::: tab section_name="By year" tab_name="Data"
        ::: data_table
            {
                "title": "Percentage of children living in relative poverty after housing costs, by country over time (UK, 1994 to 2022)",
                "dataTable": "/static/data/pre-processed-csvs/DR12-childhood-poverty--by-year-and-country--table-format.csv",
                "dataTableAlignColumns": ["left", "right", "right", "right", "right", "right"],
                "dataTableDecimalPlaces": [null, 1, 1, 1, 1, 1]
            }
        :::
    :::

    ::: tab section_name="By year" tab_name="Download"
        Some **download** content
    :::
:::

---

## By area

::: tabs
    ::: tab section_name="By area" tab_name="Visualisation"
        #### Percentage of children living in relative poverty after housing costs, and quintile ranking (from best 20% to worst 20%), by region (UK, 2018 to 2019) {: class="govuk-!-margin-bottom-4"}

        [41 regions in the UK] are ranked from the best outcomes to the worst outcomes.
        They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.
        
        The figure for each region shows the percentage of children living in households in relative poverty after housing costs.
        
        The lines either side of the dots represent confidence intervals – the range of values that the 'true' value
        for the region is highly likely to be within. Read more about [confidence intervals].
        
        ::: visualisation type="map"
            {
                "code": "DR12",
                "title": "",
                "tooltipTitle": "Percentage of children in relative poverty",
                "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
                "data": "/static/data/indicators/DR12_area-20230417.csv",
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
                "quantile": "",
                "zero": false,
                "reversePolarity": true,
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
                "backgroundColor": "#fafafa"
            }
        :::
    :::

    ::: tab section_name="By area" tab_name="Data"
        ::: data_table
            {
                "title": "Percentage of children living in relative poverty after housing costs, by region (UK, 2018 to 2019)",
                "dataTable": "/static/data/pre-processed-csvs/DR12-childhood-poverty--by-ILT2-region--table-format.csv",
                "dataTableAlignColumns": ["left", "right"],
                "dataTableDecimalPlaces": [null, 1]
            }
        :::
    :::

    ::: tab section_name="By area" tab_name="Download"
        Some **download** content
    :::
:::

---

## About the data

### Data source
Department for Work and Pensions, Households below average income (HBAI) statistics.

### Time period
1994 to 2022

### Geographic area
UK

### What the data measures
The data shows the percentage of children living in households in relative poverty after housing costs in the UK.

Data is calculated using 3-year averages. For example, the figure for 2019 represents the average of the financial
years starting in 2017, 2018 and 2019.

### Things you need to know
A household is in relative poverty if their equivalised income is below 60% of the median income for all households in the UK.
‘Equivalised’ means adjusted for the number and ages of the people living in the household.

### Type of data
Survey data

Read more in State of the Nation 2023 on GOV.UK.

---

## Download the data

::: download_full_dataset_link data_file="/static/data/full-datasets/DR12-childhood-poverty--full-dataset.csv" :::
