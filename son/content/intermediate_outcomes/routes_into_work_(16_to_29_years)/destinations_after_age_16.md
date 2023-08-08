## Code
IN21

## Title
Destinations after age 16

## Summary
Data on young people aged 16 to 24 years in the UK who were in education and training, employment or NEET (not in employment, education or training).

## Subtitle
Summary main findings

## Text
In 2022, young people aged 16 to 24 years from higher professional backgrounds were the most likely to be in education and training out of all socio-economic backgrounds. People from lower working-class backgrounds were the most likely to be ‘NEET’ (not in employment, education or training).

Social class differences in the percentages of young people in education and training, employment or NEET were similar among young men and women.

For young people from lower working class backgrounds, those in the Chinese (62%) and Black African (58%) ethnic groups were most likely to be in education and training out of all ethnic groups. White young people (26%) were least likely to be.

For young people from higher professional backgrounds, those in the Bangladeshi (66%) and Chinese (62%) ethnic groups were most likely to be in education and training out of all ethnic groups. White young people (34%) were least likely to be.

Young people with a disability were much less likely to be in employment and much more likely to be NEET than those without a disability, across all socio-economic backgrounds.

## Section
By socio-economic background

## Chart: Stacked-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 years who were in education and training, employment or NEET, by socio-economic background (UK, 2022)",
    "data": "/static/data/indicators/IN21_overview-20230424.csv",
    "height": 450,
    "type": "bary",
    "xkey": "SEB",
    "ykey": "Value",
    "zkey": "Category",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": [ "#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080" ],
    "margin": [ 0, 0, 0, 0 ],
    "textLabels": "center",
    "labelColour": "#fff",
    "rolloverBehaviour": "fade",
    "clickBehaviour": "filter",
    "columns": [
        {
            "column": "Category"
        },
        {
            "column": "SEB",
            "heading": "Socio-economic background"
        },
        {
            "column": "Value",
            "heading": "Percentage",
            "align": "right",
            "format": "1dp"
        }
    ]
}

## Section
By sex

## Chart: Grouped-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 years in education and training, employment and NEET, by socio-economic background and sex (UK, 2014 to 2022 combined)",
    "data": [
        { "label": "Female", "data": "/static/data/indicators/IN21_gender_female-20230424.csv" },
        { "label": "Male", "data": "/static/data/indicators/IN21_gender_male-20230424.csv" }
    ],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Category",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": [ "#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080" ],
    "range": [ 0, 65 ],
    "margin": [ 0, 0, 0, 0 ],
    "maxLabelLength": 30,
    "textLabels": "outside",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "columns": [
        {
            "column": "Category"
        },
        {
            "column": "SEB",
            "heading": "Socio-economic background"
        },
        {
            "column": "Value",
            "heading": "Percentage (%)",
            "align": "right",
            "format": "1dp"
        }
    ]
}

## Section
By ethnicity

## Chart: Grouped-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 from lower working-class and higher professional backgrounds in education and training, employment and NEET, by ethnic group (UK, 2014 to 2022 combined)",
    "data": [
        { "label": "Lower working", "data": "/static/data/indicators/IN21_ethnicity_lower_working-20230424.csv" },
        { "label": "Higher professional", "data": "/static/data/indicators/IN21_ethnicity_higher_professional-20230424.csv" },
        { "label": "Overview", "data": "/static/data/indicators/IN21_ethnicity_overview-20230424.csv" }
    ],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "Category2",
    "sort": "Category",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": [ "#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080" ],
    "range": [ 0, 70 ],
    "margin": [ 0, 0, 0, 0 ],
    "maxLabelLength": 30,
    "textLabels": "outside",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "columns": [
        {
            "column": "Category2",
            "heading": "Ethnicity"
        },
        {
            "column": "Category",
            "heading": "Socio-economic background"
        },
        {
            "column": "Value",
            "heading": "Percentage (%)",
            "align": "right",
            "format": "1dp"
        }
    ]
}

## Section
By disability status

## Chart: Grouped-bar
{
    "code": "IN21",
    "title": "Percentage of young people aged 16 to 24 years in education and training, employment, and NEET, by SEB and disability (UK, 2014 to 2022 combined)",
    "data": [
        { "label": "Disabled", "data": "/static/data/indicators/IN21_disability_disabled-20230424.csv" },
        { "label": "Not disabled", "data": "/static/data/indicators/IN21_disability_not_disabled-20230424.csv" }
    ],
    "toggle": "radio",
    "height": 450,
    "type": "bary",
    "xkey": "Category",
    "ykey": "Value",
    "group": "SEB",
    "sort": "Category",
    "scale": "%",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": [ "#1a9e1c", "#00703c", "#eb652e", "#0096ff", "#0f265c", "#808080" ],
    "range": [ 0, 70 ],
    "margin": [ 0, 0, 0, 0 ],
    "maxLabelLength": 30,
    "textLabels": "outside",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "columns": [
        {
            "column": "Category"
        },
        {
            "column": "SEB",
            "heading": "Socio-economic background"
        },
        {
            "column": "Value",
            "heading": "Percentage (%)",
            "align": "right",
            "format": "1dp"
        }
    ]
}

## About the data
# Data source
Office for National Statistics, Labour Force Survey (LFS), 2021

# Time period
2014 to 2022 combined

# Geographic area
UK

# What the data measures
The data shows the percentage of young people aged 16 to 24 years in the UK who were in education and training, employment or ‘NEET’ (not in employment, education or training).

NEET is defined as not in employment, education or training in the week before the survey. 

Socio-economic background (SEB) is based on the main earner’s occupation when the respondent was aged 14 years. Where there was no earner in the family, SEB is included in the lower working class. 

# Things you need to know
The data used is weighted using the LFS population weights. 

Estimated percentages come from a logistic regression model, controlling for gender and ethnic group. The model assumes that class effects are the same for each ethnic group. 

For data by ethnicity, the estimated percentages shown are those for men. We show percentages only for those with lower working-class and higher professional backgrounds for illustrative purposes.

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months or more, and if that condition reduced their ability to carry out day-to-day activities. This is consistent with the definition of disability in the Equality Act 2010.

# Type of data
Survey data

## Text
Read more in State of the Nation 2023 on GOV.UK.

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/indicators/2023-04-24 IN21.csv){: target="_blank" class="download" }
