# Drivers of social mobility
Drivers of social mobility are the background conditions that make social mobility easier.

## Highlighted data
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Distribution of parental occupation</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                `${location.protocol}//${location.host}/static/data/by-page/drivers_of_social_mobility/DR14_overview_no_average-20230417.csv`,
                { "height": 200, "type": "bary", "xkey": "Time_period", "ykey": "Value", "zkey": "Category", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "xticks": "first-last", "yticks": 2, "legend": false, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "maxLabelLength": 50 }
            )
        </script>
        <p class="govuk-body">There has been a continuing increase in the proportion of families in which the adults have professional and managerial occupations.</p>
        <a href="/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_occupation" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Labour market earnings of young people</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart2"></div>
        </div>
        <script>
            new Chart(
                'chart2',
                `${location.protocol}//${location.host}/static/data/by-page/drivers_of_social_mobility/DR34_overview-20230414.csv`,
                { "height": 200, "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "scale": "££", "xgrid": false, "ygrid": true, "xticks": "first-last", "yticks": 5, "legend": false, "showDots": false, "colourScheme": ["#5694ca"], "range": [8, 15], "margin": [0, 0, 0, 0], "maxLabelLength": 45 }
            )
        </script>
        <p class="govuk-body">Growth in real hourly pay for young people has been poor over the last 15 years, partly due to drops after 2008 and 2022.</p>
        <a href="/drivers_of_social_mobility/work_opportunities_for_young_people/labour_market_earnings_of_young_people" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Business research and development spending</h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                `${location.protocol}//${location.host}/static/data/by-page/drivers_of_social_mobility/DR52_overview-20230417.csv`,
                { "height": 200, "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "xgrid": false, "ygrid": true, "xticks": "first-last", "yticks": 2, "legend": false, "showDots": false, "colourScheme": ["#5694ca"], "range": [0, 2], "margin": [0, 0, 0, 0], "maxLabelLength": 35 }
            )
        </script>
        <p class="govuk-body">Business research and development (R and D) spending has been increasing since 2011, reaching its peak in 2017.</p>
        <a href="/drivers_of_social_mobility/research_and_development_environment/business_spending_on_research_and_development" class="govuk-link">Read more...</a>
    </div>
</div>

## Elsewhere in State of the Nation 2023
[Mobility outcomes](/mobility_outcomes)
look at where people end up, typically in their 40s or 50s.
They look at people’s socio-economic class, income, education and housing.

[Intermediate outcomes](/intermediate_outcomes)
focus on the experiences of young people as they move through education and into the labour market.

## Read the full report
[State of the Nation 2023](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places)
on GOV.UK.
