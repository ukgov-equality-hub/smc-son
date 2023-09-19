
[SON State of the Nation data explorer](../README.md) >
[Developer documentation](README.md) >
Charts

# Charts

Maps use the **D3**  and **D3 observable** libraries along with the files `chart.js`, `chart-son.js`, `chart.css` and `data-utils.js` to generate interactive chart. Charts are created by including the relevant javascript files in the page and placing a placeholder `div` element with a `chart-container` css class on the page of the required chart size, then initialising a `Chart` object.

### Required files

```
<script src="/path/to/chart.js"></script>
<script src="/path/to/chart-son.js"></script>
```

The file chart.js will attempt to load the required files before building a chart, pre-loading D3 and other associated files will enable charts to render quicker.

```
<script src="/path/to/data-utils.js"></script>
<link href="/path/to/chart.css" rel="stylesheet"></link>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6"></script>
```

### Example code

```
<div id="chart_id" class="chart-container"></table>

<script>
let my_chart = new Chart(
    'chart_id',
    /path/to/chart/data.csv,
    {
        width: '100%',
        height: 450,
        type: 'liney',
        xkey: 'Time_period',
        ykey: 'Value',
        ...
    }
)
</script>
```

The `Chart` object initialises with 3 parameters:

1. the id of the div to place the chart
2. the data to be loaded into the chart
3. a JSON object containing the options to build and configure the chart

### Options

The options include:

* `width` (default **elements offsetWidth**) - the width of the chart

* `height` (default **elements offsetHeight**) - the height of the chart

* `type` - one of:
    * `area`
    * `bar` or `barx` - generates a bar chart with bars rising along the x-axis
    * `bary` - generates a bar chart with bars rising up the y-axis
    * `line` or `linex` - generates a line chart with lines running up-and-down the y-axis
    * `liney` - generates a line chart with lines running left-to-right along the x-axis
    * `quartile` - generates a quantile chart with 4 segments
    * `quintile` - generates a quantile chart with 5 segments
    * `decile` - generates a quantile chart with 10 segments
    * `dot` or `dotx` - generates a dot chart with dots running up-and-down the y-axis
    * `doty` - generates a dot chart with dots running left-to-right along the x-axis

* `xkey` - the column in the chart data file that specifies values that run along the charts x-axis

* `x1key` & `x2key` (optional, generates "dumbbell" dot charts) - the column in the chart data file that specifies x1 and x2 values to generate a dumbbell chart

* `ykey` - the column in the chart data file that specifies values that run along the charts y-axis

* `y1key` & `y2key` (optional, generates "dumbbell" dot charts) - the column in the chart data file that specifies y1 and y2 values to generate a dumbbell chart

* `zkey` (optional, generates stacked bar charts), the column in the chart data file that specifies which parameter to stack data on

* `group` (optional, generates grouped bar charts), the column in the chart data file that specifies which parameter to group data on

* `sort` (optional) - the column in the chart data file to sort by

* `sortFacet` (optional) - the column in the chart data file to sort by, applicable to grouped datasets

* `lci` - the column in the chart data file that specifies lower confidence interval values

* `uci` - the column in the chart data file that specifies upper confidence interval values

* `showCi` (optional) - [true/false], if confidence intervals are included in the data, a check box is used to show/hide. Intervals can be shown by default

* `xvalue` (optional, quantile charts only) - filters a larger dataset to focus on a specific x value

* `yvalue` (optional, quantile charts only) - filters a larger dataset to focus on a specific y value

* `xrule` (optional) - adds a rule line at *x=xrule*

* `yrule` (optional) - adds a rule line at *y=yrule*

* `dataFormat` (default **linear**) - one of ['categorical', 'sequential', 'linear', 'quartile', 'quintile', 'decile'], used when building chart legends

* `quantile` (optional) - where data format is one of ['quartile', 'quintile', 'decile'], quantile specifies a field in the chart data that contains individual quantiles for a data row. If ommitted, quantile is automatically calculated

* `reversePolarity` - reverses the polarity of the legend / quantile of the chart, e.g. highr values will feature in lower quantiles instead of higher quantiles

* `scale` (optional) - the scale to be displayed in x/y axis, tooltips and other values on the chart. predefined options include:
    * `%` - percentage
    * `£`, `$`, `€` - currency - values to 2 dp
    * `££`, `$$`, `€€` - currency - whole numbers
    * `number` - number format, e.g. 1000 -> 1,000
    * `ratio` - adds 'x' to end of the value
    * `[any text]` - free text

* `rounding` (optional) - rounding to be applied to the contents of the chart data's *valueField*, e.g. 1 or "1dp" for 1 decimal place

* `limit` (optional) - limits the amount of data to process on the chart

* `domain` (optional, automatically calculated) - specifies the list of categorical values to use in the chart

* `range` (optional, automatically calculated) - specifies the range in numerical values to display in the chart, overrides automatically calculated values

* `zero` (default **true**) - specifies whether numerical range starts from zero

* `multiply` (optional) - multiplication factor to be applied to the contents of the charts data's *xkey / ykey*, e.g. 100

* `xtitle` (optional) - adds a title to the x-axis

* `ytitle` (optional) - adds a title to the y-axis

* `maxBarSize` (optional, bar charts only) - constrains the width of bars in a bar chart

* `colourScheme` (default **['#C6322A','#F2B06E', '#FFFEC6', '#B1D678', '#47934B']**) - either an array of colours (hex) or a [D3 colour swatch name](https://observablehq.com/plot/features/scales#color-scales)

* `textLabels` (default **none**, bar charts only) - one of ['top', 'right', 'bottom', 'left', 'center', 'outside'], specifies the position of text values to appear over bars

* `labelColour` (optional, default **#000**) - the text colour of text labels

* `labelKey` (optional, bar charts only) - the column in the chart data file that overrides the key to be used to create chart keys

* `maximumLabelLength` (optional) - specifies the maximum size of labels on the x-axis

* `rotateDomainLabels` (optional) - rotates labels on the x-axis by 90 degress

* `showDots` (optional, line charts only, default **true**) - show dots on line charts

* `grid` (optional) - add horizontal and vertical grid lines to the chart

* `xgrid` (optional) - add vertical grid lines to the chart

* `ygrid` (optional) - add horizontal grid lines to the chart

* `xscale` (optionsl) - one off ['sqrt', 'pow', 'log', 'symlog'], applies a log/square-root scale to the x-axis

* `yscale` (optionsl) - one off ['sqrt', 'pow', 'log', 'symlog'], applies a log/square-root scale to the y-axis

* `xticks` (optionsl) - one off ['hide', 'first-last', 'abreviate', '2nd', '3rd', '4th', '5th', `number`], the style of ticks for the x-axis:
    * `hide` - hide ticks
    * `first-last` - ticks on first and last data points
    * `abreviate` - abreviate ticks, e.g. "White British" -> "WB", "Total" -> "TTL"
    * `2nd`, `3rd`, `4th`, `5th` - show a tick every nth data point
    * `[number]` - show n ticks

* `xticksSmallScreen` (optional) - overrides tick style for smaller screens

* `yticks` (optionsl) - the style of ticks for the y-axis

* `yticksSmallScreen` (optional) - overrides tick style for smaller screens

* `xticksLength` (optional, grouped bar charts only) - constrains the width of the x-axis legends

* `filterNaN` (optional) - remove non-numeric data from the chart dataset

* `legend` (optional) - add a legend to the chart div

* `reverseLegend` (optional) - reverse the order of the chart legend

* `legendCheckboxes` (experimental) - add [clickBehaviour] checkboxes to the chart legend instead of simple colour boxes

* `margin` (optional) - add a margin around the chart
    * `marginTop`
    * `marginRight`
    * `marginBottom`
    * `marginLeft`

* `title` - a title that will appear above the chart

* `tooltipTitle` (optional) - a title that will appear on rollover tooltips

* `rolloverBehaviour` (optional) - one of ['outline', 'fade'], determines the behaviour when an area of the chart is rolled over, e.g. an outline is applied to the rolled area or all other areas of the chart are faded out

* `clickBehaviour` (optional) - one of ['outline', 'fade', 'zoom'], determines the behaviour when an area of the chart is clicked, e.g. an outline is applied to the clicked area, all other areas of the chart are faded out or the area is zommed in on

* `onRollover` (optional) - the name of a JavaScript function to call when an area of the chart is rolled over. A JSON object containing the chart and area status is sent as a parameter to the function if the function is found

* `onClick` (optional) - the name of a JavaScript function to call when an area of the chart is clicked. A JSON object containing the chart and area status is sent as a parameter to the function if the function is found

* `backgroundColor` (default **transparent**) - applies a css background colour to the table, e.g. '#ffffff'

* `responsive` (experimental) - redraws the chart when the browser window is resized

### Behaviours

Once a chart has been created, it can be manipulated using JavaScript, e.g.

```
<script>
let my_chart = new Chart(...)
my_chart.download()
</script>
```

* `highlight(item)` - applies the specified highlight behaviour (outline / fade) to the specified item

* `resetHighlight()` - removes highlights

* `status(item)` - returns the status and data for the specified item

* `downloadData(format)` - downloads the data used to generate the chart in csv or json *format*

* `downloadSize()` - calculates the size of a generated png copy of the chart

* `download()` - generates and downloads a png copy of the chart
