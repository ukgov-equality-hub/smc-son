## Code
MO11

## Title
Absolute occupational mobility

## Summary
Data on upward and downward occupational mobility – having a different occupational class from your parents.

## Subtitle
Summary main findings

## Text
There is more upward than downward occupational mobility for both men and women.

The chances of both men and women from working-class backgrounds getting a professional job improved greatly over the 20th century.

Data from 2022 shows that 70% of people from lower working class backgrounds experienced upward mobility, and 32% experienced long-range upward mobility to the professional classes. 18% of people from higher professional backgrounds experienced long-range downward mobility into the working classes.

People who grew up in the south-east had the best upward occupational mobility rates, and people who grew up in the north and the south-west had the worst.

People who grew up in Outer London or Surrey and Sussex had the greatest likelihood of long-range upward mobility from the working classes to the professional classes. People who grew up in Cornwall, East Yorkshire and North Lincolnshire, and the Highlands had lower rates of long-range upward mobility or higher rates of long-range downward mobility.

Women’s chances of being in the higher-professional class were poorer than the chances of men from the same socio-economic background. Women were also more likely to experience long-range downward mobility than men. For example, 12% of women and 9% of men from higher-professional backgrounds were in lower working class jobs.

People with Indian and Chinese ethnic backgrounds had a greater likelihood of long-range upward mobility than other ethnic groups. People from Bangladeshi and Pakistani ethnic backgrounds had the highest rates of long-range downward mobility.

People with a disability or long-term limiting condition have a much lower likelihood of long-range upward mobility and much higher chances of downward mobility than the population as a whole. Disabled people from all socio-economic backgrounds were also much less likely to enter the professional classes.

## Section
By decade of birth (upward and downward mobility)

## Chart: Multi-line
{ "code": "MO11", "title": "Percentages of people experiencing occupational mobility (upward, downward, and total), by birth cohort (UK, 1910 to 1999)", "data": [{ "label": "Female", "data": "/static/data/indicators/MO11_overview_female-20230705.csv" }, { "label": "Male", "data": "/static/data/indicators/MO11_overview_male-20230705.csv" }], "toggle": "radio", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Value_note", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 3, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [0, 0.75], "margin": [0, 0, 0, 0], "maxLabelLength": 30, "rolloverBehaviour": "fade", "clickBehaviour": "isolate", "columns": [{ "column": "Area_name", "heading": "Country" }, { "column": "Time_period" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By decade of birth (long-range mobility)

## Chart: Multi-line
{ "code": "MO11", "title": "Percentages of people experiencing long-range occupational mobility (upward and downward), by birth cohort (UK, 1910 to 1999)", "data": [{ "label": "Female", "data": "/static/data/indicators/MO11_long_range_female-20230705.csv" }, { "label": "Male", "data": "/static/data/indicators/MO11_long_range_male-20230705.csv" }], "toggle": "radio", "height": 450, "type": "liney", "xkey": "Time_period", "ykey": "Value", "zkey": "Value_note", "sort": "Time_period", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 3, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "range": [0, 0.5], "margin": [0, 0, 0, 0], "maxLabelLength": 30, "rolloverBehaviour": "fade", "clickBehaviour": "isolate", "columns": [{ "column": "Area_name", "heading": "Country" }, { "column": "Time_period" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By area

## Map
# Src
{ "code": "MO11", "title": "Percentage of 25 to 64 year olds who experienced long-range upward mobility from the higher and lower working classes, long-range downward mobility from the higher and lower professional classes, and quintile ranking (from the best 20% to the worst 20%), by region (UK, 2018 to 2022 combined)", "tooltipTitle": "Percentage of people who experienced long-range mobility", "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json", "data": [{ "label": "Higher and lower working", "data": "/static/data/indicators/MO11_area_higher_and_lower_working-20230705.csv" }, { "label": "Higher and lower professional", "data": "/static/data/indicators/MO11_area_higher_and_lower_professional-20230705.csv" }], "toggle": "radio", "geoFormat": "", "nameField": "Area_name", "valueField": "Value", "areaField": "ITL221NM", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "confidenceIntervals": "visible", "height": 700, "dataFormat": "quintile", "zero": false, "rolloverBehaviour": "outline", "background": true, "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"], "onClick": "mapSelect1", "type": "dot", "xkey": "Value", "ykey": "Area_name", "sort": "-Value", "xgrid": true, "ygrid": true, "legend": false, "margin": [0, 0, 0, 0], "backgroundColor": "#fafafa", "columns": [{ "column": "Area_name", "heading": "ITL2 region" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

# Guidance
[41 regions in the UK] are ranked from the best outcomes to the worst outcomes. They are then divided into 5 equally-sized groups (‘quintiles’), from the best 20% to the worst 20%.

The percentage for each region shows the percentage of people who experienced long-range upward or downward mobility for that region.

The lines either side of the dots represent confidence intervals – the range of values that the 'true' value for the region is highly likely to be within. Read more about [confidence intervals].


## Section
By occupational class and sex

## Chart: Stacked-bar
{ "code": "MO11", "title": "Percentages of people aged 25 to 64 years in each occupational class, by parental occupational class and sex (UK, 2022)", "data": [{ "label": "Female", "data": "/static/data/indicators/MO11_occupation_female-20230705.csv"}, { "label": "Male", "data": "/static/data/indicators/MO11_occupation_male-20230705.csv"}, { "label": "Total", "data": "/static/data/indicators/MO11_occupation_total-20230705.csv"}], "toggle": "radio", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "Category", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "maxLabelLength": 30, "textLabels": "center", "labelColour": "#fff", "rolloverBehaviour": "fade", "clickBehaviour": "filter", "columns": [{ "column": "SEB", "heading": "Socio-economic background" }, { "column": "Category" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## Section
By ethnicity

## Chart: Grouped-bar
{ "code": "MO11", "title": "Percentage of people aged 25 to 64 years experiencing upward and downward mobility, by ethnic group (UK, 2014 to 2022 combined)", "data": "/static/data/indicators/MO11_ethnicity-20230705.csv", "height": 450, "type": "bary", "xkey": "Value_note", "ykey": "Value", "group": "Category", "sort": "Category", "scale": "%", "lowerConfidence": "LCI", "upperConfidence": "UCI", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"], "margin": [0, 0, 0, 0], "textLabels": "center", "labelColour": "#fff", "clickBehaviour": "fade", "columns": [{ "column": "Category", "heading": "Ethnicity" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }, { "column": "LCI", "heading": "Lower confidence interval (%)", "align": "right", "format": "1dp" }, { "column": "UCI", "heading": "Upper confidence interval (%)", "align": "right", "format": "1dp" }] }

## Section
By disability status

## Chart: Stacked-bar
{ "code": "MO11", "title": "Percentage of people aged 25 to 64 years experiencing upward and downward mobility, by disability status (UK, 2014 to 2022 combined)", "data": [{ "label": "Disabled", "data": "/static/data/indicators/MO11_disability_disabled-20230705.csv"}, { "label": "Not disabled", "data": "/static/data/indicators/MO11_disability_not_disabled-20230705.csv"}], "toggle": "radio", "height": 450, "type": "bary", "xkey": "SEB", "ykey": "Value", "zkey": "Category", "scale": "%", "xgrid": false, "ygrid": true, "yticks": 5, "legend": true, "colourScheme": ["#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080"], "margin": [0, 0, 0, 0], "maxLabelLength": 30, "textLabels": "center", "labelColour": "#fff", "rolloverBehaviour": "fade", "clickBehaviour": "filter", "columns": [{ "column": "SEB", "heading": "Occupation level" }, { "column": "Category2", "heading": "Disabled" }, { "column": "Value", "heading": "Percentage", "align": "right", "format": "1dp" }] }

## About the data
# Data sources
The General Household Survey (1972 to 2005)<br>
British Household Panel Survey (1991 to 2009)<br>
Taking Part Survey (2005 to 2006)<br>
Understanding Society (2010 to 2019)<br>
Labour Force Survey (2014 to 2022)

# Time period
1972 to 2022

# Geographic area
UK

# What the data measures
The data shows changes in absolute occupational mobility – the extent to which your occupational class is related to your parents’ occupational class.

People’s socio-economic background in this data is based on the occupation of the main earner in their household when they were 14 years old. We use 5 categories:
<ul class="govuk-list">
    <li>higher professional and managerial</li>
    <li>lower professional and managerial</li>
    <li>intermediate</li>
    <li>higher working class</li>
    <li>lower working class</li>
</ul>

These categories are based on the National Statistics Socio-economic Classification (‘NS-SEC’), set by the Office for National Statistics (ONS).

‘Short range’ occupational mobility means moving between the intermediate category and either professional or working class occupations.

‘Long range’ occupational mobility means moving between working class and professional occupations.

# Things you need to know
High levels of absolute occupational mobility can be due to both downward and upward mobility.

The figures for total mobility are the sum of the percentages of upward and downward mobility. This represents the percentage of the sample as a whole who were in a different social class position from the one in which they were brought up.

For data on mobility by year of birth (‘birth cohort studies’), the most recent cohorts are still early in their working lives as they were born between 1990 and 1999. The chances of people moving into the professional classes increases from 25 to 35 years old, and slows in their late 30s and early 40s.

The data used is weighted using the LFS population weights. 

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or more, and if that condition reduced their ability to carry out day-to-day activities. This is consistent with the definition of disability in the Equality Act 2010.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-07-05 MO11.csv){: target="_blank" class="download" }
