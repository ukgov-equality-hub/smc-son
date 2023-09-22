## Code
MO12

## Title
Relative occupational mobility

## Summary
Data on relative occupational mobility – the link between people’s occupational class and their parents’ occupational class.

## Subtitle
Summary main findings

## Text
Between 2014 and 2022, the link between people’s occupational class and their parents’ occupational class got weaker.

In the 5 years from 2018 to 2022 combined:

* people from the Black, Pakistani, Bangladeshi and Chinese ethnic groups had higher levels of relative occupational
  mobility than White people
* disabled people had lower levels of relative occupational mobility than non-disabled people
* levels of relative occupational mobility were similar in most parts of the UK

## Section
By year

## Chart: Single-line
{
    "code": "MO12",
    "title": "Percentage point difference in relative occupational mobility compared to the odds ratio in 2014 (UK, 2014 to 2022)",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO12_overview-20230623.csv",
    "height": 450,
    "type": "liney",
    "xkey": "Time_period",
    "ykey": "Value",
    "zkey": "Area_name",
    "sort": "Time_period",
    "scale": "%",
    "multiply": 100,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticks": 7,
    "xticksSmallScreen": "2nd",
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "range": [-35, 5],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 45,
    "dataTable": "/static/data/pre-processed-csvs/MO12-relative-occupational-mobility--by-year--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

## Section
By area

## Map
# Src
{
    "code": "MO12",
    "title": "Percentage point difference in relative mobility between UK regions and Inner West London (UK, 2018 to 2022 combined)",
    "tooltipTitle": "Percentage point difference compared with Inner West London",
    "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
    "data": "/static/data/indicators/MO12_area-20230623.csv",
    "geoFormat": "",
    "nameField": "Area_name",
    "valueField": "Value",
    "areaField": "ITL221NM",
    "scale": "%",
    "multiply": 100,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "confidenceIntervals": "visible",
    "height": 700,
    "dataFormat": "quintile",
    "zero": false,
    "reversePolarity": true,
    "background": true,
    "colourScheme": ["#ca0020", "#f4a582", "#ffffbf", "#92c5de", "#0571b0"],
    "rolloverBehaviour": "outline",
    "onClick": "mapSelect1",
    "type": "dot",
    "xkey": "Value",
    "ykey": "Area_name",
    "sort": "-Value",
    "xgrid": true,
    "ygrid": true,
    "xtitle": "% difference from inner west London",
    "legend": false,
    "margin": [10, 20, 5, 5],
    "backgroundColor": "#fafafa",
    "dataTable": "/static/data/pre-processed-csvs/MO12-relative-occupational-mobility--by-ITL2-region--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"],
    "dataTableDecimalPlaces": [null, 1]
}

# Guidance

[41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest percentage point difference.
They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).

The regional estimates have a large margin of error – do not rank or compare specific regions.

The lines either side of the dots represent [confidence intervals](/about-our-analysis#confidence-intervals)
– the range of values that the 'true' value for each region is highly likely to be within.
In many cases the confidence intervals overlap.
This suggests differences between specific regions may not be statistically significant. 

See the [composite indices](/social_mobility_by_area#composite-measures-by-region) for more precise estimates and to
understand overall regional patterns.

## Section
By sex and ethnicity

## Chart: Grouped-bar
{
    "code": "MO12",
    "title": "Relative occupational mobility by ethnicity and sex in the UK, 2018 to 2022 (combined), uniform difference (UNIDIFF) parameter estimates compared with the White British group",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO12_ethnicity-20230623.csv",
    "height": 450,
    "type": "bary",
    "xkey": "Sex",
    "ykey": "Value",
    "group": "Category",
    "sort": "Category",
    "scale": "%",
    "multiply": 100,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "xgrid": false,
    "ygrid": true,
    "xticksSmallScreen": "abreviate",
    "yticks": 5,
    "xticksLength": 4,
    "legend": true,
    "colourScheme": ["#5694ca", "#d4351c", "#4c2c92", "#d53880", "#28a197", "#b58840", "#505a5f", "#f499be", "#85994b", "#6f72af"],
    "range": [-14, 3],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 45,
    "textLabels": "center",
    "labelColour": "#fff",
    "clickBehaviour": "fade",
    "dataTable": "/static/data/pre-processed-csvs/MO12-relative-occupational-mobility--by-ethnicity-and-sex--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right", "right"],
    "dataTableDecimalPlaces": [null, 1, 1]
}

## Section
By disability status

## Chart: Single-bar
{
    "code": "MO12",
    "title": "Relative occupational mobility by disability status in the UK, 2018 to 2022 (combined), uniform difference (UNIDIFF) parameter estimates for people with a disability compared with people without a disability",
    "tooltipTitle": "",
    "data": "/static/data/indicators/MO12_disability-20230623.csv",
    "height": 450,
    "type": "doty",
    "xkey": "Category",
    "ykey": "Value",
    "zkey": "Area_name",
    "scale": "%",
    "multiply": 100,
    "lowerConfidence": "LCI",
    "upperConfidence": "UCI",
    "confidenceIntervals": "visible",
    "xgrid": false,
    "ygrid": true,
    "yticks": 5,
    "legend": true,
    "colourScheme": ["#5694ca"],
    "range": [-1, 2],
    "margin": [10, 20, 5, 5],
    "maxLabelLength": 50,
    "dataTable": "/static/data/pre-processed-csvs/MO12-relative-occupational-mobility--by-disability--table-format.csv",
    "disableJavascriptAlterationOfDataTable": true,
    "dataTableAlignColumns": ["left", "right"]
}

## Section
About the data

## Text
### Data source
Office for National Statistics, Labour Force Survey 2014 to 2022

### Time period
2014 to 2022

### Geographic area
UK

### What the data measures
The data shows changes in relative occupational mobility – the extent to which your occupational class is related to
your parents’ occupational class.

High levels of relative occupational mobility can be due to both downward and upward mobility.

### Things you need to know
Survey respondents were 25 to 64 years old. Areas represent where respondents lived when they were aged 14 years.

The data uses the ‘UNIDIFF’ (uniform difference) model, which compares ‘odds ratios’ for all groups with a benchmark
group. Values are shown in log form.

Values close to 0 mean relative mobility is constant across all groups. Negative values mean relative mobility is
higher than in the benchmark group. The differences were statistically significant from 2019 onwards.

For data by disability status, respondents were asked if they had a health condition or illness lasting 12 months
or more, and if that condition reduced their ability to carry out day-to-day activities.
This is consistent with the definition of disability in the Equality Act 2010.

The error bars show 95% confidence intervals. These intervals show where we expect the true value from a population to
be 95% of the time. For example, a confidence interval with the range of values from 5 to 10 implies that there is a
95% chance that the true population value is between 5 and 10, and a 5% chance that it is outside of this range.
The narrower the confidence interval or range, the more precise the estimate. Read more about
[confidence intervals](/about-our-analysis#confidence-intervals)

### Type of data
Survey data

### Full report
Read more in [State of the Nation 2023 on GOV.UK](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places).

## Section
Download the data

## Text
[Download full dataset (CSV)](/static/data/full-datasets/MO12-relative-occupational-mobility--full-dataset.csv){: target="_blank" class="download" }
