
[SON State of the Nation data explorer](../README.md) >
[Developer documentation](README.md) >
Maps

# Maps

Maps use the **D3** along with files `map.js`, `map-labels.js`, `map.css` and `data-utils.js` to generate interactive maps. Maps are created by including the relevant javascript files in the page and placing a placeholder `div` element with a `map-container` css class on the page of the required map size, then initialising a `Choropleth` object.

### Required files

```
<script src="/path/to/map.js"></script>
```

The file map.js will attempt to load the required before building a map, pre-loading D3 and other associated files will enable maps to render quicker.

```
<script src="/path/to/map-labels.js"></script>
<script src="/path/to/data-utils.js"></script>
<link href="/path/to/map.css" rel="stylesheet"></link>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://d3js.org/d3-geo.v3.min.js"></script>
<script src="https://d3js.org/d3-geo-projection.v2.min.js"></script>
<script src="https://d3js.org/d3-scale.v4.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v0.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.19/topojson.min.js"></script>
```

### Example code

```
<div id="map_id" class="map-container"></table>

<script>
let my_map = new Choropleth(
    'map_id',
    /path/to/map/boundary/geojson_file.json,
    /path/to/map/data.csv,
    {
        nameField: 'Area_name',
        valueField: 'Value',
        areaField: 'ITL221NM',
        width: 300,
        height: 300,
        ...
    }
)
</script>
```

The `Choropleth` object initialises with 4 parameters:

1. the id of the div to place the map
2. the boundary file to generate the map
3. the data to be loaded into the map
4. a JSON object containing the options to build and configure the map

### Boundary files

In order to generate a map, a boundary file is required, this tells the map how to break down a map into geographic regions. The following boundary files are available:

* Counties_and_Unitary_Authorities_(December_2022)_UK_BUC.[geojson | json] (areaField: CTYUA22NM)
* Country_(December_2021)_UK_BUC.json (areaField: CTRY21NM)
* International_Territorial_Level_1_(January_2021)_UK_BUC.[geojson | json] (areaField: ITL121NM)
* International_Territorial_Level_2_(January_2021)_UK_BUC.[geojson | json] (areaField: ITL221NM)
* International_Territorial_Level_3_(January_2021)_UK_BUC.[geojson | json] (areaField: ITL321NM)
* Local_Authority_Districts_(May_2021)_UK_BUC.[geojson | json] (areaField: LAD21NM)

Files with a *geojson* file extension are encoded in GeoJSON format, files with a *json* file extension are encoded in TopoJSON format.

Additional boundary files can be downloaded from the [ONS website](https://geoportal.statistics.gov.uk/) in either GeoJSON or TopoJSON format. The [geoprocessing](https://geoprocessing.online/tool/simplify-polygons/) website can be used to convert boundary data from one format to another. The preferred format is **TopoJSON**, output coordinates system **WGS 84 (EPSG:4326)**.

Additionally, TopoJSON files containing outlines of Europe used to generate map backgrounds are also available:

* nuts0.topo.json
* nuts1.topo.json
* nuts2.topo.json

[NUTS](https://en.wikipedia.org/wiki/Nomenclature_of_Territorial_Units_for_Statistics) are boundaries for EU countries, provided at different resolutions.

### Options

The options include:

* `width` (default **elements offsetWidth**) - the width of the map

* `height` (default **elements offsetHeight**) - the height of the map

* `geoFormat` (default **topo**) - one of ['geojson', 'topo'], specifies the data format of the boundary file used

* `nameField` - the name of the column in the maps data file that will match the value in the maps boundary file, e.g. 'Area_name'

* `areaField` (default **nameField**) - the name of the column in the maps boundary file that will match the value in the maps data file, e.g. 'ITL221NM'

* `valueField` - the column in the map data file that specifies each area's value

* `dataFormat` (default **linear**) - one of ['categorical', 'sequential', 'linear', 'quartile', 'quintile', 'decile'], used when building map legends

* `quantile` (optional) - where data format is one of ['quartile', 'quintile', 'decile'], quantile specifies a field in the map data that contains individual quantiles for a data row. If ommitted, quantile is automatically calculated

* `reversePolarity` - reverses the polarity of the legend / quantile of the map, e.g. highr values will feature in lower quantiles instead of higher quantiles

* `scale` (optional) - the scale to be displayed in tooltips and other values on the map. predefined options include:
    * `%` - percentage
    * `£`, `$`, `€` - currency - values to 2 dp
    * `££`, `$$`, `€€` - currency - whole numbers
    * `number` - number format, e.g. 1000 -> 1,000
    * `ratio` - adds 'x' to end of the value
    * `[any text]` - free text

* `rounding` (optional) - rounding to be applied to the contents of the map data's *valueField*, e.g. 1 or "1dp" for 1 decimal place

* `domain` - when dataFormat = categorical, allows and array of categories, when dataFormat = sequential, allows a 2 element array specifying min and max values, works in tandem with legend options

* `multiply` (optional) - multiplication factor to be applied to the contents of the map data's *valueField*, e.g. 100

* `colourScheme` (default **['#C6322A','#F2B06E', '#FFFEC6', '#B1D678', '#47934B']**) - either an array of colours (hex) or a [D3 colour swatch name](https://observablehq.com/plot/features/scales#color-scales)

* `title` - a title that will appear above the map

* `background` (default **false**) - shows the Europe background in faded grey on the map

* `legend` - the id of a div element to place a map legend

* `legendSteps` (default **5**) - when dataFormat = sequential, allows the number of steps in a legend to be specified

* `tooltip` - the id of a div element to place a map tooltip

* `labels` (default **false**) - shows name places on the map

* `tooltipBehaviour` (optional) - one of ['rollover', 'click'], determines whether tooltips appear on mouse rollover or area click

* `rolloverBehaviour` (optional) - one of ['outline', 'fade'], determines the behaviour when an area of the map is rolled over, e.g. an outline is applied to the rolled area or all other areas of the map are faded out

* `clickBehaviour` (optional) - one of ['outline', 'fade', 'zoom'], determines the behaviour when an area of the map is clicked, e.g. an outline is applied to the clicked area, all other areas of the map are faded out or the area is zommed in on

* `onRollover` (optional) - the name of a JavaScript function to call when an area of the map is rolled over. A JSON object containing the map and area status is sent as a parameter to the function if the function is found

* `onClick` (optional) - the name of a JavaScript function to call when an area of the map is clicked. A JSON object containing the map and area status is sent as a parameter to the function if the function is found

* `zoomTo` (optional) - zooms in on a specific area of the map when the map loads. *Must* correspond to a valid *areaField* in the map's data

* `highlight` (optional) - highlights a specific area of the map when the map loads. *Must* correspond to a valid *areaField* in the map's data. The highlighted behaviour matches the specified *rolloverBehaviour*

* `allowZoom` (default **true**) - determines if users can zoom in on the map using manual controls or mouse wheel

* `backgroundColor` (default **transparent**) - applies a css background colour to the table, e.g. '#ffffff'

* `responsive` (experimental) - redraws the map when the browser window is resized

### Behaviours

Once a map has been created, it can be manipulated using JavaScript, e.g.

```
<script>
let my_map = new Choropleth(...)
my_map.download()
</script>
```

* `zoomIn()` - zooms in

* `zoomOut()` - zooms out

* `zoomTo(subunits, duration=0)` - zooms into a subunit (area) or array of area's, duration allows the transition to be animated

* `resetZoom()` - resets the zoom level of the map

* `highlight(item)` - applies the specified highlight behaviour (outline / fade) to the specified item (area)

* `resetHighlight()` - removes highlights

* `status(item)` - returns the status and data for the specified item (area)

* `downloadData(format)` - downloads the data used to generate the map in csv or json *format*

* `downloadSize()` - calculates the size of a generated png copy of the map

* `download()` - generates and downloads a png copy of the map
