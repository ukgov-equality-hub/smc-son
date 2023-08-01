## Code
CI4

## Title
Childhood poverty and disadvantage

## Summary
Data for UK regions on factors that can reduce people’s social mobility chances – childhood poverty, youth unemployment, and lower working-class work among parents.

## Map
# Src
{ "code": "CI4", "title": "Quintile rankings for socio-cultural advantage, from top 20% to bottom 20%, by UK region", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": "/static/data/indicators/CI4_20230419.csv", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onRollover": "scrollTo", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "Quintile", "heading": "Quintile", "align": "right", "format": "0dp" }] }

## Section
Summary main findings

## Text
Some of the highest levels of childhood poverty and disadvantage are in:

<ul class="govuk-list">
  <li>London</li>
<li>Greater Manchester</li>
<li>West Midlands</li>
</ul>

## Text
This is mainly due to the high youth unemployment rates in those areas.

## Text
Some areas have high levels of both advantage and disadvantage. For example, most of London is in the top 20% of areas for <a href="/drivers_of_social_mobility/composite_indices/socio-cultural_advantage" class="govuk-link">sociocultural advantage</a>, but also the bottom 20% for childhood poverty and disadvantage.

## Section
About the data

## Text
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more reliable picture of geographical mobility patterns:

<ul class="govuk-list list-disc">
    <li><a href="/drivers_of_social_mobility/conditions_of_childhood/childhood_poverty" class="govuk-link">Childhood poverty</a> – data on children living in relative poverty</li>
    <li><a href="/drivers_of_social_mobility/work_opportunities_for_young_people/youth_unemployment" class="govuk-link">Youth unemployment</a> – data on 16 to 24 year olds in unemployment</li>
    <li><a href="/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_occupation" class="govuk-link">Parental occupation</a> – data on parents in lower working class occupations</li>
</ul>

## Text
Indicators are rescaled to make sure they use a common metric. The best-performing area’s score is set to 1, and the least well-performing area’s score is set to 0.<br> 

See the [technical annex] for more information on how each area was scored. 
