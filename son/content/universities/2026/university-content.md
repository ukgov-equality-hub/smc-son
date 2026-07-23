::: tabs
    ::: tab section_name="By university" tab_name="Visualisation"
        #### Cumulative percentage of students who met the academic entry requirements for this university, and who enrolled, by socio-economic status (2018 to 2020)

        This chart compares the university's actual student intake (blue line) against the pool of 18 to 19 year olds who met its entry requirements (red line). 
        
        If the blue line sits above the red line, the university recruits a higher proportion of disadvantaged students than expected.
        
        The yellow line (‘equal’) represents a hypothetical equal scenario where the university's student body exactly matches the socio-economic makeup of all 18 to 19 year olds in England. 
        
        The blue line (‘enrolment’) shows the actual socio-economic profile of the first-year, full-time students who successfully enrolled at the university. 
        
        The red line (‘required’) shows the socio-economic profile of the available pool of 18 to 19 year olds across the country who achieved the minimum grades needed to attend.


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
                "scale": "%",
                "rounding": "0",
                "xgrid": false,
                "ygrid": true,
                "xticks": 11,
                "yticks": 5,
                "xtitle": "Deciles",
                "ytitle": "Cumulative percentage of students",
                "legend": true,
                "colourScheme": ["#5694ca", "#ba8e23", "#d4351c"],
                "range": [0, 100],
                "margin": [10, 20, 5, 5],
                "maxLabelLength": 40,
                "rolloverBehaviour": "fade",
                "clickBehaviour": "isolate",
                "tooltipDataTitle": "Decile: {x}, {z}: {y}"
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
