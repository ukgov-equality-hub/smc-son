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
                '/drivers_of_social_mobility/conditions_of_childhood/childhood_poverty/3.0/DR12-3.0-childhood-poverty--by-year-UKonly--chart-format.csv',
                {
                    "height": 200,
                    "type": "liney",
                    "xkey": "secondary_split_value",
                    "ykey": "value",
                    "zkey": "primary_split_value",
                    "sort": "secondary_split_value",
                    "scale": "%",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "first-last",
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
            below the levels reached in the 1990s.
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
                '/drivers_of_social_mobility/work_opportunities_for_young_people/youth_unemployment/3.0/DR32-3.0-youth-unemployment--by-year--chart-format.csv',
                {
                    "type": "bary",
                    "xkey": "secondary_split_value",
                    "ykey": "value",
                    "zkey": "area_name",
                    "sort": "secondary_split_value",
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
            Unemployment among young people is the highest it has been since 2020, at 16% in 2024.
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
                '/drivers_of_social_mobility/research_and_development_environment/broadband_speed/3.0/DR51-3.0-broadband-speed--by-year-UKonly--chart-format.csv',
                {
                    "height": 200,
                    "type": "liney",
                    "xkey": "secondary_split_value",
                    "ykey": "value",
                    "zkey": "primary_split_value",
                    "sort": "secondary_split_value",
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
            The percentage of homes and businesses with access to a gigabit-capable broadband connection has gone up across the UK since 2020, reaching 82% in 2024.
        </p>
        <a href="/drivers_of_social_mobility/research_and_development_environment/broadband_speed/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about broadband speed</span>
        </a>
    </div>
</div>

## Elsewhere in State of the Nation 2025
[Mobility outcomes](/mobility_outcomes)
look at people's occupations, educational levels and housing situations, typically in their 40s and 50s.

[Intermediate outcomes](/intermediate_outcomes)
focus on the experiences of young people as they move through education and into work.

## Read the full report
[State of the Nation 2025 on GOV.UK]()
