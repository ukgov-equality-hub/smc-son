## Code
IN21

## Title
Destinations following the end of compulsory full-time education

## Summary
Data on young people aged 16 to 24 years in the UK who were in education and training, employment or NEET
(not in employment, education or training), by socio-economic background.

## Subtitle
Summary main findings

## Text
In 2022, young people aged 16 to 24 years from higher professional backgrounds were the most likely to be in
education and training out of all socio-economic backgrounds.
People from lower working-class backgrounds were the most likely to be ‘NEET’ (not in employment, education or training).

Social class differences in the percentages of young people in education and training, employment or NEET were similar
among young men and women.

Overall, the percentage of people from lower working-class backgrounds who were NEET was highest among the White and
Black Caribbean ethnic groups (both 22%), and lowest among the Chinese and Indian ethnic groups (both 10%).

For young people from higher professional backgrounds, those in the Bangladeshi (66%) and Chinese (62%) ethnic groups
were most likely to be in education and training out of all ethnic groups. White young people (34%) were least likely
to be in education or training, but more likely to be in employment (57%).

Young people with a disability were much less likely to be in employment and much more likely to be NEET than those
without a disability, across all socio-economic backgrounds.

## Section
By socio-economic background

## Chart: Stacked-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 years who were in education and training, employment or NEET, by socio-economic background (UK, 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/IN21_overview-20230424.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/data/pre-processed-csvs/IN21-destinations-after-age-16--by-SEB--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1, 1]
}

## Section
By sex

## Chart: Stacked-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 years in education and training, employment and NEET, by socio-economic background and sex (UK, 2014 to 2022 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Women",
        "data": "/static/data/indicators/IN21_gender_female-20230424.csv"
    }, {
        "label": "Men",
        "data": "/static/data/indicators/IN21_gender_male-20230424.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/data/pre-processed-csvs/IN21-destinations-after-age-16--by-SEB-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2
}

## Section
By ethnicity

## Chart: Stacked-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 from lower working-class and higher professional backgrounds in education and training, employment and NEET, by ethnic group (UK, 2014 to 2022 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Lower working",
        "data": "/static/data/indicators/IN21_ethnicity_lower_working-20230424.csv"
    }, {
        "label": "Higher professional",
        "data": "/static/data/indicators/IN21_ethnicity_higher_professional-20230424.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "Category2",
    "ykey": "Value",
    "zkey": "Category",
    "sort": "Category2",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/data/pre-processed-csvs/IN21-destinations-after-age-16--by-SEB-and-ethnicity--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2
}

## Section
By disability status

## Chart: Stacked-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 years in education and training, employment, and NEET, by socio-economic background and disability (UK, 2014 to 2022 combined)",
    "tooltipTitle": "",
    "data": [{
        "label": "Disabled",
        "data": "/static/data/indicators/IN21_disability_disabled-20230424.csv"
    }, {
        "label": "Not disabled",
        "data": "/static/data/indicators/IN21_disability_not_disabled-20230424.csv"
    }],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "rounding": "0dp",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 5,
    "legend": true,
    "reverseLegend": true,
    "colourScheme": ["#4c2c92", "#d4351c", "#5694ca"],
    "margin": [0, 0, 0, 0],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "filter",
    "dataTable": "/static/data/pre-processed-csvs/IN21-destinations-after-age-16--by-SEB-and-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "left", "right", "right", "right"],
    "dataTableDecimalPlaces": [null, null, 1, 1, 1],
    "dataTableNumberOfHeadingColumns": 2
}

## Section
About the data

## Text
### Data source
Office for National Statistics, Labour Force Survey (LFS), 2021

### Time period
2014 to 2022 combined

### Geographic area
UK

### What the data measures
The data shows the percentage of young people aged 16 to 24 years in the UK who were in education and training,
employment or ‘NEET’ (not in employment, education or training).

NEET is defined as not in employment, education or training in the week before the survey. 

Socio-economic background is based on the main earner’s occupation when the respondent was aged 14 years.
Where there was no earner in the family, SEB is included in the lower working class. 

### Things you need to know
The data used is weighted using the LFS probability weights. 

Estimated percentages come from a logistic regression model, controlling for gender and ethnic group.
The model assumes that class effects are the same for each ethnic group. 

For data by ethnicity, the estimated percentages shown are those for men. We show percentages only for those with
lower working-class and higher professional backgrounds for illustrative purposes.

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or
more, and if that condition reduced their ability to carry out day-to-day activities.
This is consistent with the definition of disability in the Equality Act 2010.

### Type of data
Survey data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/IN21-destinations-after-age-16--full-dataset.csv){: target="_blank" class="download" }
