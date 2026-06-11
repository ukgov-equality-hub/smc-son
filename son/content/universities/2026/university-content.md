
::: tabs
    ::: tab section_name="By university" tab_name="Visualisation"
        #### TODO CHART HEADING

        ::: visualisation vis_type="chart" section_name="By university"
            {
                "code": "UNIV",
                "title": "TODO CHART TITLE",
                "tooltipTitle": "",
                "data": [{
                    "label": "Without location weighting",
                    "data": "PATH_TO_CSV__WITHOUT_LOCATION_WEIGHTING"
                }, {
                    "label": "With location weighting",
                    "data": "PATH_TO_CSV__WITH_LOCATION_WEIGHTING"
                }],
                "toggle": "radio",
                "height": 450,
                "type": "liney",
                "xkey": "decile",
                "ykey": "cumulative_percentage",
                "zkey": "group",
                "xgrid": false,
                "ygrid": true,
                "xticks": 11,
                "yticks": 5,
                "xtitle": "Deciles",
                "ytitle": "Cumulative percentage of students",
                "legend": true,
                "colourScheme": ["#4c2c92", "#5694ca", "#d4351c", "#d53880", "#28a197"],
                "range": [0, 100],
                "margin": [10, 20, 5, 5],
                "maxLabelLength": 40,
                "rolloverBehaviour": "fade",
                "clickBehaviour": "isolate"
            }
        :::
    :::

    ::: tab section_name="By university" tab_name="Data"
        ::: data_table
            {
                "title": "TODO DATA TABLE HEADING",
                "dataTable": "PATH_TO_CSV__TABLE_FORMAT",
                "dataTableAlignColumns": ["left", "right", "right", "right", "right"],
                "dataTableDecimalPlaces": [null, 0, 0, 0, 0]
            }
        :::
    :::

    ::: tab section_name="By university" tab_name="Download"
        ::: download_section :::
    :::
:::
