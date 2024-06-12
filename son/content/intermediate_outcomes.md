# Intermediate outcomes
Intermediate outcomes focus on the experiences of young people
as they move through education and into the labour market.

## Highlighted content
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Key stage 4 by ethnicity</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                `${location.protocol}//${location.host}/static/data/by-page/intermediate_outcomes/IN13_ethnicity_fsm-20230601.csv`,
                { "height": 200, "type": "bar", "xkey": "Value", "ykey": "Category", "sort": "Value", "scale": "%", "rounding": "0dp", "xgrid": true, "ygrid": false, "xticks": 2, "yticks": "none", "legend": false, "colourScheme": ["#0f265c"], "margin": [0, 0, 0, 0], "maxLabelLength": 20 }
            )
        </script>
        <p class="govuk-body">There is great variation across ethnicities in the attainment of pupils eligible for free school meals (FSM).</p>
        <a href="/intermediate_outcomes/compulsory_school_age_(5_to_16_years)/attainment_at_age_16" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Economic activity by sex</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart2"></div>
        </div>
        <script>
            new Chart(
                'chart2',
                `${location.protocol}//${location.host}/static/data/by-page/intermediate_outcomes/IN31_gender-20230327.csv`,
                { "height": 200, "type": "bary", "xkey": "Sex", "ykey": "Value", "group": "SEB", "sort": "Sex", "scale": "%", "rounding": "0dp", "xgrid": false, "ygrid": true, "xticks": "none", "yticks": 2, "legend": false, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "maxLabelLength": 40 }
            )
        </script>
        <p class="govuk-body">Young women are less likely to be economically active than young men from the same socio-economic background (SEB).</p>
        <a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/economic_activity" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Earnings by SEB and disability</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                `${location.protocol}//${location.host}/static/data/by-page/intermediate_outcomes/IN34_disability-20230327.csv`,
                { "height": 200, "type": "bary", "xkey": "Category", "ykey": "Value", "group": "SEB", "sort": "Category", "scale": "££", "rounding": "1dp", "xgrid": false, "ygrid": true, "xticks": "none", "yticks": 2, "legend": false, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "maxLabelLength": 40 }
            )
        </script>
        <p class="govuk-body">Young people with a disability tend to earn significantly less than those without a disability.</p>
        <a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/earnings_of_young_people_aged_25_to_29_years" class="govuk-link">Read more...</a>
    </div>
</div>

## Elsewhere in State of the Nation 2023
[Mobility outcomes](/mobility_outcomes)
look at where people end up, typically in their 40s or 50s.
They look at people’s socio-economic class, income, education and housing.

[Drivers of social mobility](/drivers_of_social_mobility)
are the background conditions that make social mobility easier.

## Read the full report
[State of the Nation 2023](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places)
on GOV.UK.
