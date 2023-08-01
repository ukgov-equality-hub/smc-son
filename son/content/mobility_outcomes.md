## Summary
Mobility outcomes look at where people end up, typically in their 40s or 50s. They look at people’s socio-economic class, income, education and housing.

## Subtitle
Highlighted content

## Text
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Relative occupational mobility</h3>
        <div class="chart-container">
            <div id="chart1"></div>
        </div>
        <script>
            new Chart(
                'chart1',
                `${location.protocol}//${location.host}/static/data/indicators/MO12_overview-20230623.csv`,
                { "height": 200, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Area_name", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "xticks": 2, "yticks": 2, "legend": false, "colourScheme": ["#5694ca"], "range": [-0.035, 0.005], "margin": [0, 0, 0, 0], "maxLabelLength": 60 }
            )
        </script>
        <p class="govuk-body">Between 2014 and 2022, the link between people’s occupational class and their parents’ got weaker.</p>
        <a href="/mobility_outcomes/occupation/relative_occupational_mobility" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Relative educational mobility</h3>
        <div class="chart-container">
            <div id="chart2"></div>
        </div>
        <script>
            new Chart(
                'chart2',
                `${location.protocol}//${location.host}/static/data/indicators/MO32_gender-20230607.csv`,
                { "height": 200, "type": "bary", "xkey": "Sex", "ykey": "Value", "zkey": "Sex", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 2, "legend": false, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "maxLabelLength": 40, "labelColour": "#fff" }
            )
        </script>
        <p class="govuk-body">Between 1991 and 2020, relative educational mobility went up for people aged 28 to 37 years.</p>
        <a href="/mobility_outcomes/education/relative_educational_mobility" class="govuk-link">Read more...</a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">Absolute housing mobility&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        <div class="chart-container">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                `${location.protocol}//${location.host}/static/data/indicators/MO41_overview-20230503.csv`,
                { "height": 200, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "SEB", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 2, "legend": false, "colourScheme": ["#5694ca", "#d4351c"], "margin": [0, 0, 0, 0], "maxLabelLength": 40 }
            )
        </script>
        <p class="govuk-body">In the period from 2016 to 2020, 71% of people whose parents were homeowners also owned their own home.</p>
        <a href="/mobility_outcomes/housing/absolute_housing_mobility" class="govuk-link">Read more...</a>
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
