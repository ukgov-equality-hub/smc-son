# Drivers of social mobility
Drivers of social mobility are the background conditions that make social mobility easier.

## Highlighted data
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Childhood poverty
        </h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                '/static/data/by-page/drivers_of_social_mobility/DR12-2.0-childhood-poverty--by-year-and-country--uk-only--chart-format.csv',
                {
                    "height": 200,
                    "type": "liney",
                    "xkey": "time_period",
                    "ykey": "value",
                    "zkey": "area_name",
                    "sort": "time_period",
                    "scale": "%",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": [1997, 2012, 2023],
                    "yticks": 2,
                    "legend": false,
                    "showDots": false,
                    "colourScheme": ["#5694ca"],
                    "range": [0, 40],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 50
                }
            )
        </script>
        <p class="govuk-body">
            The percentage of children living in relative poverty in the UK (after housing costs) has gone up to around 30% since 2012,
            below the levels reached in the 1990s, but higher than in the 1960s and 1970s.
        </p>
        <a href="/drivers_of_social_mobility/conditions_of_childhood/childhood_poverty/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about childhood poverty</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Youth unemployment
        </h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart2"></div>
        </div>
        <script>
            new Chart(
                'chart2',
                '/drivers_of_social_mobility/work_opportunities_for_young_people/youth_unemployment/2.0/DR32-2.0-youth-unemployment--by-year--chart-format.csv',
                {
                    "type": "bary",
                    "xkey": "time_period",
                    "ykey": "value",
                    "zkey": "area_name",
                    "sort": "time_period",
                    "scale": "%",
                    "rounding": "0dp",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "first-last",
                    "yticks": 5,
                    "legend": false,
                    "showDots": false,
                    "colourScheme": ["#5694ca"],
                    "range": [0, 20],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 45
                }
            )
        </script>
        <p class="govuk-body">
            Unemployment among young people is the lowest it has been since 2014, at 11% in 2022.
        </p>
        <a href="/drivers_of_social_mobility/work_opportunities_for_young_people/youth_unemployment/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about youth unemployment</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Broadband speed
        </h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                '/static/data/by-page/drivers_of_social_mobility/DR51-2.0-broadband-speed--by-year-and-country--uk-only--chart-format.csv',
                {
                    "height": 200,
                    "type": "liney",
                    "xkey": "time_period",
                    "ykey": "value",
                    "zkey": "area_name",
                    "sort": "time_period",
                    "scale": "%",
                    "rounding": "0dp",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "first-last",
                    "yticks": 2,
                    "legend": false,
                    "showDots": true,
                    "colourScheme": ["#5694ca"],
                    "range": [0, 100],
                    "margin": [0, 0, 0, 15],
                    "maxLabelLength": 35
                }
            )
        </script>
        <p class="govuk-body">
            The percentage of homes and businesses with ‘gigabit’ internet availability has gone up across the UK since 2020, reaching 76% in 2023.
        </p>
        <a href="/drivers_of_social_mobility/research_and_development_environment/broadband_speed/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about broadband speed</span>
        </a>
    </div>
</div>

## Elsewhere in State of the Nation 2024
[Mobility outcomes](/mobility_outcomes)
look at people's occupations, educational levels and housing situations, typically in their 40s and 50s.

[Intermediate outcomes](/intermediate_outcomes)
focus on the experiences of young people as they move through education and into work.

## Read the full report
[State of the Nation 2023](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places)
on GOV.UK.
