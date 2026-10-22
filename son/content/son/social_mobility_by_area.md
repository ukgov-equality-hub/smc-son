# Social mobility by area

We have updated our 4 composite measures of social mobility by local authority. We have also:

* added analysis by ‘travel-to-work area’ to better understand local labour market opportunities for young people, and innovation and growth
* combined UK Census data for 2001 to 2021 (2022 for Scotland)  to examine changes in the occupational makeup of local authorities over time – this has allowed us to look at individual areas in Northern Ireland for the first time

## Highlighted content
<div class="grid grid3 grid-domain">
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Composite indices by local authority
        </h3>
        <img src="/static/data/by-page/social_mobility_by_area/map-of-local-authorities.png"
             alt="Map of local authorities in the UK"
             style="max-width: min(100%, 250px); max-height: 220px;">
        <p class="govuk-body">
            For each composite measure, 205 regions in the UK are put into 7 groups based on their composite scores.
        </p>
        <a href="/state-of-the-nation/social_mobility_by_area/by_local_authority/composite_indices/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about our social mobility by local authority analysis.</span>
        </a>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Travel-to-work areas
        </h3>
        <img src="/static/data/by-page/social_mobility_by_area/map-of-travel-to-work-areas.png"
             alt="Map of travel-to-work areas in the UK"
             style="max-width: min(100%, 250px); max-height: 220px;">
        <p class="govuk-body">
            228 travel-to-work areas (a geographical zone where a majority of people both live and work) in the UK are put into 7 groups based on their composite scores of:
        </p>
        <ul class="govuk-list govuk-list--bullet">
            <li>
                <a href="/state-of-the-nation/social_mobility_by_area/by_travel_to_work_area/labour_market_opportunities_for_young_people/latest"
                   class="govuk-link">
                    Labour Market Opportunities for young people
                </a>
            </li>
            <li>
                <a href="/state-of-the-nation/social_mobility_by_area/by_travel_to_work_area/innovation_and_growth/latest"
                   class="govuk-link">
                    Innovation and Growth
                </a>
            </li>
        </ul>
    </div>
    <div class="govuk-body">
        <h3 class="govuk-heading-s">
            Occupational class structure by local authority
        </h3>
        <div class="chart-container" aria-hidden="true">
            <div id="chart3"></div>
        </div>
        <script>
            new Chart(
                'chart3',
                '/state-of-the-nation/social_mobility_by_area/by_local_authority/occupational_structure/1.0/OS-1.0-occupational-structure--by-area--uk-only--chart-format.csv',
                {
                    "height": 200,
                    "type": "bary",
                    "xkey": "time_period",
                    "ykey": "value",
                    "zkey": "primary_split_value",
                    "sort": "primary_split_value",
                    "scale": "%",
                    "rounding": "0dp",
                    "xgrid": false,
                    "ygrid": true,
                    "legend": false,
                    "colourScheme": ["#28a197", "#d53880", "#4c2c92", "#d4351c", "#5694ca"],
                    "margin": [0, 0, 0, 0],
                    "maxLabelLength": 50,
                    "labelColour": "#fff"
                }
            )
        </script>
        <p class="govuk-body">
            See how the occupational class structure of local areas in the UK have changed between the 2001 and 2021 Censuses.
        </p>
        <a href="/state-of-the-nation/social_mobility_by_area/by_local_authority/occupational_structure/latest"
           class="govuk-link">
            Read more
            <span class="govuk-visually-hidden">about our occupational analysis</span>
        </a>
    </div>
</div>

## Elsewhere in State of the Nation 2026
[Mobility outcomes](/state-of-the-nation/mobility_outcomes)
look at people's occupations, educational levels and housing situations, typically in their 40s and 50s.

[Intermediate outcomes](/state-of-the-nation/intermediate_outcomes)
focus on the experiences of young people as they move through education and into work.

[Drivers of social mobility](/state-of-the-nation/drivers_of_social_mobility)
are the background conditions that make social mobility easier.

## Read the full report
[State of the Nation 2026 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2026-whos-getting-ahead)
