## Code
CI5

## Title
Research and development

## Summary
Data on conditions that favour research and development across UK regions – measured by broadband speed, numbers of university research students, and business spending on research.

## Map
# Src
{ "code": "CI5", "title": "Quintile rankings for research and development, from top 20% to bottom 20%, by UK region", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/CI5_20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onRollover": "scrollTo", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "Quintile", "heading": "Quintile", "align": "right", "format": "0dp" }] }

## Section
Summary main findings

## Text
Areas with the best environments for research and development include:

<ul class="govuk-list">
  <li>Bedfordshire and Hertfordshire</li>
  <li>Berkshire, Buckinghamshire and Oxfordshire</li>
  <li>Inner West London</li>
  <li>Gloucestershire, Wiltshire, and Bath and Bristol</li>
  <li>West Midlands</li>
  <li>Derby and Nottingham</li>
  <li>Central Scotland</li>
</ul>

## Text
Many of these areas are locations of major universities and high-tech and engineering firms.

## Text
This data has similar patterns to the data on areas with <a href="/drivers_of_social_mobility/composite_indices/socio-cultural_advantage" class="govuk-link">sociocultural advantage</a> – the best environments for upward mobility tend to be in and around London, and the worst are in more remote parts of the UK.

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more reliable picture of geographical mobility patterns:

<ul class="govuk-list list-disc">
    <li><a href="/drivers_of_social_mobility/research_and_development_environment/broadband_speed" class="govuk-link">Broadband speed</a></li>
    <li><a href="/drivers_of_social_mobility/research_and_development_environment/business_spending_on_research_and_development" class="govuk-link">Business expenditure on research and development</a></li>
    <li><a href="/drivers_of_social_mobility/research_and_development_environment/university_research_students" class="govuk-link">University research students</a></li>
</ul>

## Text
Indicators are rescaled to make sure they use a common metric. The best-performing area’s score is set to 1, and the least well-performing area’s score is set to 0.<br> 

See the [technical annex] for more information on how each area was scored.
