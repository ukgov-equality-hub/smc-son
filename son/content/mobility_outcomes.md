# Mobility outcomes
Mobility outcomes look at people's occupations, educational levels and housing situations, typically in their 40s and 50s.

<strong>We have not updated our mobility outcomes for State of the Nation 2025.</strong> This is because much of the source data is not frequently updated. In addition, we do not expect mobility outcomes to change significantly year on year, because they measure longer-term outcomes that take a while to change. 

## Highlighted content
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Relative occupational mobility trend</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                '/static/data/by-page/mobility_outcomes/MO12_overview-20230623.csv',
                {
                    "height": 200,
                    "type": "liney",
                    "xkey": "Time_period",
                    "ykey": "Value",
                    "zkey": "Area_name",
                    "sort": "Time_period",
                    "scale": "%",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "first-last",
                    "yticks": 2,
                    "legend": false,
                    "colourScheme": ["#5694ca"],
                    "range": [-0.035, 0.005],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 60
                }
            )
        </script>
        <p class="govuk-body">Relative occupational mobility has been improving since 2014, with significant differences between 2019 to 2022.</p>
        <a href="/mobility_outcomes/occupation/relative_occupational_mobility" class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about relative occupational mobility</span>
        </a>
    </div>
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
        <p class="govuk-body">Upwards educational mobility rates are high, reflecting the expansion of school and higher education qualifications since the 1960s.</p>
        <a href="/mobility_outcomes/education/absolute_educational_mobility" class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about absolute educational mobility</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Absolute housing mobility by sex</h3>
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
        <p class="govuk-body">Women are significantly less likely than men to own their homes.</p>
        <a href="/mobility_outcomes/housing/absolute_housing_mobility" class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about absolute housing mobility</span>
        </a>
    </div>
</div>

## Elsewhere in State of the Nation 2025
[Intermediate outcomes](/intermediate_outcomes)
focus on the experiences of young people as they move through education and into work.

[Drivers of social mobility](/drivers_of_social_mobility)
are the background conditions that make social mobility easier.

## Read the full report
[State of the Nation 2025 on GOV.UK]()
