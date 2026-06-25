This chart compares the university's actual student intake (blue line) against the pool of young people who met its entry requirements (red line). If the blue line sits above the red line, the university recruits a higher proportion of disadvantaged students than expected.

For example, 41% of students qualified for Anglia Ruskin University come from the less advantaged half of the population, and they make up 42% of its actual intake. This shows the university's student intake closely matches the available pool of qualified students.

::: tabs
    ::: tab section_name="By university" tab_name="Visualisation"
        #### Cumulative percentage of student meeting the academic entry requirements and enrolling in this university between 2018 and 2020 by socio-economic status

        The blue line (‘equal’) represents a hypothetical equal scenario where the university's student body exactly matches the socio-economic makeup of all young people in England. 

        The purple line (‘enrolment’) shows the actual socio-economic profile of the first-year, full-time students who successfully enrolled at the university. 

        The red line (‘required’) shows the socio-economic profile of the available pool of young people across the country who achieved the minimum grades needed to attend.


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
                "colourScheme": ["#5694ca", "#F46A25", "#d4351c"],
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

## Things you need to know {: .govuk-!-font-size-24}

Socio-economic status deciles are calculated by grouping students into ten equal groups, based on 3 factors: whether they received Free School Meals, if they attended a state or independent school, and the wealth of their local neighbourhood. Decile 1 represents the most socio-economically disadvantaged students, and decile 10 represents the most advantaged.

To estimate the meeting academic requirements, instead of using advertised entry guidelines, we estimated the true requirements by looking at the actual A-level and BTEC grades of the students who successfully enrolled. We excluded the lowest 10% of these grades to account for special cases, such as contextual offers, to provide a realistic standard.

The location adjustment  gives more importance to qualified students who live close to the university, reflecting the reality that many disadvantaged students prefer to study locally. You should use the location-adjusted view for universities that recruit locally, but look at the non-adjusted view for universities that recruit nationally.

## Data source {: .govuk-!-font-size-24}

This analysis tracks real students' educational journeys using official government records, following them from their GCSEs in 2015 to 2016 to their university enrolment at age 18 or 19 (usually enrolments in 2018 to 2020). We deliberately used this pre-pandemic data to provide a clear, fair, and stable reference point for university admissions before the disruptions caused by COVID-19.

The specific datasets used are: National Pupil Database (NPD) from DfE, Higher Education Statistics Agency (HESA) student record, Get Information About Schools (GIAS) service from DfE and National Statistics Postcode Lookup provided by the Office for National Statistics (ONS).

For more information about the data or methodology see [About the data](/universities/about-the-data) or read the [full report](#).
