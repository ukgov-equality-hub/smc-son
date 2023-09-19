
[SON State of the Nation data explorer](../README.md) >
[Developer documentation](README.md) >
Data tables

# Data tables

Data tables uses the files `data-table.js`, `data-table.css` and `data-utils.js` to add interactivity to data tables, such as dynamic sorting, pagination and filtering. Data tables can either be created from existing HTML tables or from data loaded from an external source. Data tables are created by including the relevant javascript files in the page, and initialising a `DataTable` object.

### Required files

```
<script src="/path/to/data-table.js"></script>
```

The file data-table.js will attempt to load the required before building a table, pre-loading associated files will enable tables to render quicker.

```
<script src="/path/to/data-utils.js"></script>
<link href="/path/to/data-table.css" rel="stylesheet"></link>
```

### Example code

```
<table id="table_id">
    <thead>
        <tr>
            <td>Col 1</td>
            <td>Col 2</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Col 1</td>
            <td>Col 2</td>
        </tr>
        [etc...]
    </tbody>
</table>

<script>
let my_table = new DataTable(
    'table_id',
    null,
    {
        allowColumnResize: false,
        allowFilter: true,
        allowSort: true,
        ...
    }
)
</script>
```

The `DataTable` object initialises with 3 parameters:

1. the id of the table to process
2. the data to be loaded into the table, this can be either:
    * `null` if the HTML table already contains the data (rows) it requires
    * a url to a CSV file
    * an object containing CSV or JSON data
3. a JSON object containing the options to build and configure the table

### Options

The options include:

* `dataFormat` - the data format used to store that tables data, either **array** or JSON
* `allowColumnResize` - determines whether the columns on the table can be resized
* `allowFilter` - determines whether the rows on the table can be filtered. Scans the data in the table and produces a tick box list of options and a search function to filter data
* `allowSort` - determines whether rows on the table can be sorted
* `limit` - limits the number of rows of data to show
* `pageSize` - initialises pagination. If a number is entered, a page size will be generated and links to page 2, 3 etc will be created
* `tableColumns` - 
* `filterBehaviour` - specifies how filters are applied, if the table is filtered on more than 1 column, the filters can be applied as either **and** in which case all filters must match in order for data to show, or **or** for any filter value to match in order for data to show
* `backgroundColor` - applies a css background colour to the table, e.g. '#ffffff'
