# Socio-cultural advantage

Data on ‘sociocultural advantage’ in UK regions – measured by parental education (university degree),
parental occupation (higher professional), and professional work for young people.

::: tabs
    ::: tab section_name="By area" tab_name="Visualisation"
        #### Index of sociocultural advantage, by region (UK, 2014 to 2021 combined)

        [41 regions in the UK](/social_mobility_by_area#the-41-regions) are ranked from the lowest to highest composite scores.
        They are then divided into 5 equally-sized groups (‘quintiles’), from 1 (lowest) to 5 (highest).
        Areas with the highest scores have the highest levels of sociocultural advantage.

        ::: visualisation vis_type="map" section_name="By area"
            {
                "code": "CI3",
                "map": "/static/data/maps/International_Territorial_Level_2_(January_2021)_UK_BUC.json",
                "data": "/static/data/indicators/CI3_20230817.csv",
                "geoFormat": "",
                "nameField": "Area_name",
                "valueField": "Value",
                "areaField": "ITL221NM",
                "quantile": "Quintile",
                "height": 700,
                "dataFormat": "quintile",
                "zero": false,
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
                "xtitle": "",
                "legend": false,
                "margin": [10, 20, 5, 5],
                "backgroundColor": "#fafafa"
            }
        :::
    :::

    ::: tab section_name="By area" tab_name="Data"
        ::: data_table
            {
                "title": "Index of sociocultural advantage, by region (UK, 2014 to 2021 combined)",
                "dataTable": "/static/data/pre-processed-csvs/CI3-socio-cultural-advantage--by-ITL2-region--table-format.csv",
                "dataTableAlignColumns": ["left", "right", "right"],
                "dataTableDecimalPlaces": [null, 2, 0]
            }
        :::
    :::

    ::: tab section_name="By area" tab_name="Download"
        ::: download_section :::
    :::
:::

---

## Summary main findings
The areas with the highest levels of sociocultural advantage in the UK include:

* parts of London 
* Surrey and Sussex
* Berkshire, Buckinghamshire and Oxfordshire 
* Bedfordshire and Hertfordshire 
* Cheshire

The least advantaged areas include:

* The Highlands
* West Wales and the Valleys
* Cornwall
* Lincolnshire
* South and East Yorkshire

Some areas have high levels of both advantage and disadvantage.
For example, most of London is in the top 20% of areas for sociocultural advantage, but also the worst 20% for
[childhood poverty and disadvantage](/drivers_of_social_mobility/composite_indices/childhood_poverty_and_disadvantage).

---

## About the data
This page combines data from the following 3 indicators into a single ‘composite’ score to give a more reliable
picture of geographical mobility patterns:

* [Distribution of parental education](/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_education)
  – data on parents with a university degree
* [Distribution of parental occupation](/drivers_of_social_mobility/conditions_of_childhood/distribution_of_parental_occupation)
  – data on parents in higher professional occupations
* [Type of employment opportunities for young people](/drivers_of_social_mobility/work_opportunities_for_young_people/type_of_employment_opportunities_for_young_people)
  – data on young people in higher professional occupations

Indicators are rescaled to make sure they use a common metric.
The best-performing area’s score is set to 0, and the least well-performing area’s score is set to 1.

See the [technical annex (opens in a new tab)](https://www.gov.uk/government/publications/state-of-the-nation-2023-people-and-places/technical-annex#composite-indices-methodology){: target="_blank" }
for more information on how each area was scored.

---

## Download the data

::: download_full_dataset_link data_file="/static/data/full-datasets/CI3-socio-cultural-advantage--full-dataset.csv" :::
