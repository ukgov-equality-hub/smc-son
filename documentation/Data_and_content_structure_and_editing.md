
[SON State of the Nation data explorer](../README.md) >
[Developer documentation](README.md) >
Data and content structure and editing

# Data and content structure and editing

All content and data for the site is stored locally, no external databases are used.

## Menu

The file `/son/utils/menu.py` stores a JSON object containing the structure of the pages on the site. This data is used to build all menus for the site.

## Content

Content is stored in `.md` (markdown) files in the `/son/content/` folder. The folder contains individual markdown files for each domain homepage (e.g. mobility_outcomes.md). Individual indicator markdown files are stored within subfolders.

Whilst the markdown files contain mostly markdown, certain tags have been used to control the content on the site:

* `## Code` is used to store the indicator code
* `## Title` is used to store the title for the indicator page
* `## Summary` is used to store the summary for the indicator page
* `## Section` denotes the start of a new section on the page; the proceeding line will contain the name or title of the section. Each section will marked on the indicator page with a horizontal line, and appear in the table of contents at the top of the page.
* `## Text` is used to place a block of text / markdown / html on the page
* `## Map` is used place a map on the page. A map is placed by inserting a JSON object containing the parameters of the map
    * `# Src` additionally, Src can be used to insert the map JSON object
    * `# Guidance` inserts text guidance notes above the generated map
* `## Chart` is used to place a chart on the page. A map is placed by inserting a JSON object containing the parameters of the chart

Outside of these tags, standard markdown or HTML can be used, for example both `## H2 header` and `<h2>H2 header</h2>`

## Data

Data is stored in `.csv` files in the `/static/data/` folder:

* **full-datasets** contains all of the datasets used for the "Download full dataset" links on each individual indicator page
* **indicators** contains the data used to build individual maps and charts on the site, files are save in the format [indicator]_[chart]_[file date].csv, e.g. IN32_ethnicity_20230327.csv
* **maps** contains json and geojson shape files used to build maps on the site
* **pre-processed-csvs** contains csv files used for pivoted data tables
* **simulated** contains files created for demo purposes
