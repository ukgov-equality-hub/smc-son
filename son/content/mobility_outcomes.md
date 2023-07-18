## Summary
Mobility outcomes look at where people end up, typically in their 40s or 50s. They look at people’s socio-economic class, income, education and housing.

## Subtitle
Highlighted content

## Text
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Distribution of earnings</h3>
        <div class="chart-container">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                `${location.protocol}//${location.host}/static/data/indicators/DR11_overview-20230413.csv`,
                { "height": 200, "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "scale": "Ratio", "xgrid": false, "ygrid": true, "xticks": 3, "yticks": 3, "legend": true, "colourScheme": ["#1d70b8"], "margin": [0, 0, 0, 0], "backgroundColor": "transparent" }
            )
        </script>
        <p class="govuk-body">Inequality in hourly pay between high and low earners got narrower between 2010 and 2022.</p>
        <a href="/mobility_outcomes" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Access to higher education</h3>
        <div class="chart-container">
            <div id="chart2"></div>
        </div>
        <script>
            new Chart(
                'chart2',
                `${location.protocol}//${location.host}/static/data/indicators/DR23a_overview-20230417.csv`,
                { "height": 200, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "xgrid": false, "ygrid": true, "xticks": 3, "yticks": 3, "legend": true, "rotateDomainLabels": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "backgroundColor": "transparent" }
            )
        </script>
        <p class="govuk-body">63% of 19 year olds in the UK entered higher education in 2020, compared with 48% in 2010.</p>
        <a href="/intermediate_outcomes" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Job vacancy rate</h3>
        <div class="chart-container">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                `${location.protocol}//${location.host}/static/data/indicators/DR31_overview-20230413.csv`,
                { "height": 200, "type": "liney", "xkey": "Time_period", "ykey": "Value", "sort": "Time_period", "scale": "Rate", "xgrid": false, "ygrid": true, "xticks": 3, "yticks": 3, "legend": true, "colourScheme": ["#5694ca"], "margin": [0, 0, 0, 0], "backgroundColor": "transparent" }
            )
        </script>
        <p class="govuk-body">There were more vacancies for every jobseeker in 2021 and 2022 than at any time in the previous 20 years.</p>
        <a href="/drivers_of_social_mobility" class="govuk-link">Read more...</a>
    </div>
</div>

## Subtitle
Elsewhere in State of the Nation 2023

## Text
<a href="/intermediate_outcomes" class="govuk-link">Intermediate outcomes</a> focus on the experiences of young people as they move through education and into the labour market.

## Text
<a href="/drivers_of_mobility" class="govuk-link">Drivers of social mobility</a> are the background conditions that make social mobility easier.

## Subtitle
Read the full report
 
## Text
<a href="#" class="govuk-link">State of the Nation 2023</a> on GOV.UK.
