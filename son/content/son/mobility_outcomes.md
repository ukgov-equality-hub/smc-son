# Mobility outcomes

State of the Nation 2023 tracked national mobility trends across occupation, income, education, and housing.
This year for 2026, we have updated this analysis with the latest data from the ONS Longitudinal Study (ONS-LS). 

On each mobility page, we feature our ONS-LS analysis alongside breakdowns by protected characteristics such as ethnicity and sex.

## Highlighted content
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Absolute educational mobility</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart2"></div>
        </div>
        <script>
            new Chart(
                'chart2',
                '/static/data/by-page/mobility_outcomes/MO31_overview_total-20230601.csv',
                {
                    "height": 200,
                    "type": "bary",
                    "xkey": "SEB",
                    "ykey": "Value",
                    "zkey": "Category",
                    "scale": "%",
                    "multiply": 100,
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "none",
                    "yticks": 2,
                    "legend": false,
                    "colourScheme": ["#d53880", "#4c2c92", "#d4351c", "#5694ca"],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 50,
                    "labelColour": "#fff"
                }
            )
        </script>
        <p class="govuk-body">Upward educational mobility has gone up substantially over the last 30 years, with more young people from non-graduate backgrounds getting degrees than their parents.</p>
        <a href="/state-of-the-nation/mobility_outcomes/education/absolute_educational_mobility/latest" class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about absolute educational mobility</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Relative occupational mobility trend</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                '/state-of-the-nation/mobility_outcomes/occupation/relative_occupational_mobility/2.0/MO12-2.0-relative-occupational-mobility--by-year--chart-format.csv',
                {
                    "height": 200,
                    "type": "liney",
                    "xkey": "Time_period",
                    "ykey": "Value",
                    "zkey": "split_value",
                    "sort": "Time_period",
                    "scale": "%",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "first-last",
                    "yticks": 4,
                    "legend": false,
                    "colourScheme": ["#5694ca", "#5694ca", "#d4351c", "#d4351c"],
                    "strokeDasharrayScheme": [null, "5,10", null, "5,10"],
                    "range": [0, 6],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 60
                }
            )
        </script>
        <p class="govuk-body">The strength of the link in occupational class between children and their parents has stayed fairly steady.</p>
        <a href="/state-of-the-nation/mobility_outcomes/occupation/relative_occupational_mobility/latest" class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about relative occupational mobility</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Absolute housing mobility</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                '/static/data/by-page/mobility_outcomes/MO41_gender-20230503.csv',
                {
                    "height": 200,
                    "type": "bary",
                    "xkey": "SEB",
                    "ykey": "Value",
                    "group": "Sex",
                    "sort": "SEB",
                    "scale": "%",
                    "xgrid": false,
                    "ygrid": true,
                    "yticks": 2,
                    "legend": false,
                    "colourScheme": ["#5694ca", "#d4351c"],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 40
                }
            )
        </script>
        <p class="govuk-body">Upward housing mobility (moving from rented to owned accommodation) has gone down significantly, with twice as much downward mobility as upward mobility.</p>
        <a href="/state-of-the-nation/mobility_outcomes/housing/absolute_housing_mobility/latest" class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about absolute housing mobility</span>
        </a>
    </div>
</div>

## Elsewhere in State of the Nation 2026
[Intermediate outcomes](/state-of-the-nation/intermediate_outcomes)
focus on the experiences of young people as they move through education and into work.

[Drivers of social mobility](/state-of-the-nation/drivers_of_social_mobility)
are the background conditions that make social mobility easier.

## Read the full report
[State of the Nation 2026 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2026-whos-getting-ahead)
