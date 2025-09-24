# Intermediate outcomes
Intermediate outcomes focus on the experiences of young people
as they move through education and into work.

## Highlighted content
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Key stage 4 by ethnicity
        </h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                '/intermediate_outcomes/compulsory_school_age_(5_to_16_years)/attainment_at_age_11/2.0/IN12-2.0-attainment-at-age-11--by-ethnicity--chart-format.csv',
                {
                    "height": 200,
                    "type": "bar",
                    "xkey": "value",
                    "ykey": "category",
                    "sort": "value",
                    "scale": "%",
                    "rounding": "0dp",
                    "xgrid": true,
                    "ygrid": false,
                    "xticks": 4,
                    "yticks": "none",
                    "legend": false,
                    "colourScheme": ["#0f265c"],
                    "domain": [0, 80],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 20
                }
            )
        </script>
        <p class="govuk-body">
            The attainment of pupils eligible for free school meals varies greatly across ethnicities.
        </p>
        <a href="/intermediate_outcomes/compulsory_school_age_(5_to_16_years)/attainment_at_age_16/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about attainment at age 16</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Economic activity by sex
        </h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart2"></div>
        </div>
        <script>
            new Chart(
                'chart2',
                '/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/economic_activity/2.0/IN31-2.0-economic-activity--by-SEB-and-sex--chart-format.csv',
                {
                    "height": 200,
                    "type": "bary",
                    "xkey": "sex",
                    "ykey": "value",
                    "group": "seb",
                    "sort": "sex",
                    "scale": "%",
                    "rounding": "0dp",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "none",
                    "yticks": 6,
                    "legend": false,
                    "colourScheme": ["#5694ca", "#d4351c"],
                    "range": [0, 100],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 40
                }
            )
        </script>
        <p class="govuk-body">
            Young women are less likely to be economically active than young men from the same socio-economic background.
        </p>
        <a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/economic_activity/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about economic activity</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s" style="height: unset;">
            Earnings by socio-economic background and disability
        </h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                '/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/earnings_of_young_people_aged_25_to_29_years/2.0/IN34-2.0-earnings--by-SEB-and-disability--chart-format.csv',
                {
                    "height": 200,
                    "type": "bary",
                    "xkey": "category",
                    "ykey": "value",
                    "group": "seb",
                    "sort": "category",
                    "scale": "££",
                    "rounding": "1dp",
                    "xgrid": false,
                    "ygrid": true,
                    "xticks": "none",
                    "yticks": 4,
                    "legend": false,
                    "colourScheme": ["#5694ca", "#d4351c"],
                    "range": [0, 20],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 40
                }
            )
        </script>
        <p class="govuk-body">
            Young people with a disability tend to earn significantly less than those without a disability.
        </p>
        <a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/earnings_of_young_people_aged_25_to_29_years/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about earnings of young people aged 25 to 29 years</span>
        </a>
    </div>
</div>

## Elsewhere in State of the Nation 2025
[Mobility outcomes](/mobility_outcomes)
look at people's occupations, educational levels and housing situations, typically in their 40s and 50s.

[Drivers of social mobility](/drivers_of_social_mobility)
are the background conditions that make social mobility easier.

## Read the full report
[State of the Nation 2025 on GOV.UK]()
