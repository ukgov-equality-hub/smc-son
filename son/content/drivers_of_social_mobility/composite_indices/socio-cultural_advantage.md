## Code
CI3

## Title
Socio-cultural advantage

## Summary
Data on ‘sociocultural advantage’ in UK regions – measured by levels of university education and professional work among parents, and professional work for 25 to 29 year olds.

## Map
# Src
{ "code": "CI3", "title": "Quintile rankings for socio-cultural advantage, from top 20% to bottom 20%, by UK region", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/CI3_20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onRollover": "scrollTo", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "Quintile", "heading": "Quintile", "align": "right", "format": "0dp" }] }

## Section
Summary main findings

## Text
The areas with the highest levels of sociocultural advantage in the UK include:

<ul class="govuk-list">
  <li>parts of London</li>
<li>Surrey and Sussex</li>
<li>Berkshire, Buckinghamshire and Oxfordshire</li>
<li>Bedfordshire and Hertfordshire</li>
<li>Cheshire</li>
</ul>

## Text
The least advantaged areas include:

<ul class="govuk-list">
  <li>The Highlands</li>
 <li>West Wales and the Valleys</li>
 <li>Cornwall</li>
 <li>Lincolnshire</li>
 <li>South and East Yorkshire</li>
</ul>

## Text
Some areas have high levels of both advantage and disadvantage. For example, most of London is in the top 20% of areas for sociocultural advantage, but also the worst 20% for <a href="/drivers_of_social_mobility/composite_indices/childhood_poverty_and_disadvantage" class="govuk-link">childhood poverty and disadvantage</a>.

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more reliable picture of geographical mobility patterns:

<ul class="govuk-list list-disc">
    <li><a href="/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_education" class="govuk-link">Distribution of parental education</a> – data on parents with a university degree</li>
    <li><a href="/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_occupation" class="govuk-link">Distribution of parental occupation</a> – data on parents in higher professional occupations</li>
    <li><a href="/intermediate_outcomes/work_in_early_adulthood_(25_to_29_years)/occupational_level" class="govuk-link">Occupational level of 25 to 29 year olds</a> – data on young people in higher professional occupations</li>
</ul>

## Text
Indicators are rescaled to make sure they use a common metric. The best-performing area’s score is set to 1, and the least well-performing area’s score is set to 0.<br> 

See the [technical annex] for more information on how each area was scored.
