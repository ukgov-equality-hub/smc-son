class DataUtils {
    constructor(type) {
        this.type = type || 'json'
        this.data = {
            'headers': [],
            'data': [],
            'url': '',
            'type': this.type,
            'tag': '',
            'sort': -1,
            'sortOrder': 'asc',
            'filters': [],
            'page': -1,
            'pageSize': -1
        }
    }

    _init() {
        //
    }

    async loadData(data) {
        if (Array.isArray(data)) {
            this.data.headers = this.headersFromJSON(data)
            this.data.data = data
            return this.data.data
        } else if (typeof data === 'object' && data !== null) {
            this.data.headers = this.headersFromJSON(data.data || data)
            this.data.data = data.data || data
            return this.data.data
        } else if (this.isCSV(data)) {
            return this.loadDataFromString(data)
        } else if (this.isJSON(data)) {
            return this.loadDataFromString(data)
        } else if (this.isURL(data)) {
            this.data.url = data
            return this.loadDataFromURL(data)
        } else if (this.isHTMLNode(data)) {
            return this.loadDataFromElement(data, true)
        }
    }

    /*async*/ loadDataFromElement(el, hasHeader=true) {
        const table = document.getElementById(el)
        let headers = []
        let data = []

        function getAttributes(node) {
            let attributes = {}
            if (node.nodeName.toLowerCase() == 'td') attributes['title'] = node.innerText
            for (let i = 0; i < node.attributes.length; i++) {
                attributes[node.attributes[i].nodeName] = node.attributes[i].nodeValue
            }
            return attributes
        }

        const rows = table.tagName == 'TABLE' ? table.rows : table.children
        for (let i = 0; i < rows.length; i++) {
            if (i == 0) {
                for (let j = 0; j < rows[i].children.length; j++) {
                    headers.push(rows[i].children[j].innerText)
                }
            }

            if (!(i >= hasHeader ? 0 : -1)) {
                let row = this.type == 'json' ? {} : []
                const attributes = []
                attributes.push(getAttributes(rows[i]))
                for (let j = 0; j < rows[i].children.length; j++) {
                    if (this.type == 'json') {
                        row[headers[j]] = rows[i].children[j].innerHTML
                    } else {
                        row.push(rows[i].children[j].innerHTML)
                    }
                    attributes.push(getAttributes(rows[i].children[j]))
                }
                row['_attributes'] = attributes
                data.push(row)
            }
        }

        this.data.headers = headers
        this.data.data = data
        this.data.tag = table.tagName
        return this.data
    }

    /*async*/ loadDataFromString(str) {
        let headers = []
        let data = []
        const csvFormat = this.isCSV(str)

        if (csvFormat) {
            if (this.type == 'json') {
                const result = this.csv2json(str)
                headers = this.cleanCSV(result.headers)
                data = result.data
            } else {
                headers = this.cleanCSV(this.headersFromCSV(str))
                data = str

                if (!Array.isArray(str)) {
                    data = []
                    const rows = str.split('\n')
            
                    for (let i = 1; i < rows.length; i++) {
                        const row = []
                        if ((`${rows[i]} `).trim() != '') {
                            let items = rows[i]
                            items = items.replace(/,""/g, ',##EMPTY##')
                            items = items.replace(/"",/g, '##EMPTY##,')
                            items = this.substituteCommas(items).split(csvFormat.delimiter)
                            for (let j = 0; j < items.length; j++) {
                                let item = this.stripQuote(items[j] ? items[j].replace(/###/g, csvFormat.delimiter) : '')
                                row.push(this.isNumeric(item) ? parseFloat(item, 10) : item.indexOf('##EMPTY##') > -1 ? '' : item.trim())
                            }
                        }
                        if (row.length > 0) data.push(row)
                    }
                }
            }
        } else if (this.isJSON(str)) {
            if (this.type == 'json') {
                headers = this.headersFromJSON(str)
                data = JSON.parse(str)
            } else {
                const result = this.json2csv(str)
                headers = result.headers
                data = result.data
            }
        }

        this.data.headers = headers
        this.data.data = data
        return this.data
    }

    async loadDataFromURL(url) {
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                return this.loadDataFromString(data)
            })
    }

    isCSV(data) {
        function determineMost(data, items) {
            let ignoreString = false
            let itemCount = {}
            let maxValue = 0
            let maxChar
            let currValue
            items.forEach(function (item) {
                itemCount[item] = 0
            })
            for (let i = 0; i < data.length; i++) {
                if (data[i] === '"') ignoreString = !ignoreString
                else if (!ignoreString && data[i] in itemCount) {
                    currValue = ++itemCount[data[i]]
                    if (currValue > maxValue) {
                        maxValue = currValue
                        maxChar = data[i]
                    }
                }
            }
            return maxChar
        }

        //if (Buffer.isBuffer(data)) data = data + ''
        const delimiters = [',', ';', '\t', '|']
        const newlines = ['\n', '\r']
        const lines = data.split(/[\n\r]+/g)
        const delimiter = determineMost(lines[0], delimiters)
        const newline = determineMost(data, newlines)

        if (delimiter) {
            return {
                delimiter: delimiter,
                newline: newline
            }
        }
        return false
    }

    isJSON(data) {
        try {
            JSON.parse(data)
        } catch (e) {
            return false
        }
        return true
    }

    isURL(data) {
        if (typeof data !== 'string') return false
        const pattern = new RegExp('^(https?:\\/\\/)?' +             // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +     // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' +                          // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +                      // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' +                             // query string
            '(\\#[-a-z\\d_]*)?$','i')                                // fragment locator
        return !!pattern.test(data.replace(/\/localhost/, '/127.0.0.1').replace(/ /g, ''))
    }

    isHTML(data) {
        const html = new DOMParser().parseFromString(data, 'text/html')
        return Array.from(html.body.childNodes).some(node => node.nodeType === 1)
    }

    isHTMLNode(data) {
        return !!document.getElementById(data)
    }

    cleanCSV(data) {
        return data.map(x => this.stripQuote(x))  
    }

    stripQuote(str) {
        return str.substr(0, 1) == '"' && str.substr(-1) == '"' ? str.substr(1, str.length - 2) : str
    }

    csv2json(data) {
        const csvFormat = this.isCSV(data)
        if (!csvFormat) return data

        const rows = data.split(csvFormat.newline)
        const result = []
        const headers = this.substituteCommas(rows[0]).split(csvFormat.delimiter)
        for (let i = 1; i < rows.length; i++) {
            const row = {}
            if ((`${rows[i]} `).trim() != '') {
                let items = rows[i]
                items = items.replace(/,""/g, ',##EMPTY##')
                items = items.replace(/"",/g, '##EMPTY##,')
                items = this.substituteCommas(items).split(csvFormat.delimiter)
                for (let j = 0; j < headers.length; j++) {
                    let item = this.stripQuote(items[j] ? items[j].replace(/###/g, csvFormat.delimiter) : '')
                    row[this.stripQuote(headers[j].replace(/###/g, csvFormat.delimiter))] = this.isNumeric(item) ? parseFloat(item, 10) : item.indexOf('##EMPTY##') > -1 ? '' : item.trim()
                }
                result.push(row)
            }
        }

        return {
            'headers': headers,
            'data': result
        }
    }

    json2csv(data) {
        if (!this.isJSON(data)) return data

        const rows = JSON.parse(data)
        if (!Array.isArray(rows)) rows = [rows]
        const result = ''
        const headers = this.headersFromJSON(data)
                            .map(x => x.indexOf(',') > -1 && x.substr(0, 1) != '"' ? `"${x}"` : x)
                            .join(',')

        for (let i = 1; i < rows.length; i++) {
            let row = ''
            for (let j = 0; j < headers.length; j++) {
                str = rows[i][headers[j]]
                row += (row == '' ? '' : ',') + this.quoteCommas(str)
            }
            result += `\n${row}`
        }

        return {
            'headers': headers,
            'data': result
        }
    }

    headersFromCSV(data) {
        const csvFormat = this.isCSV(data)
        if (!csvFormat) return []

        const rows = data.split(csvFormat.newline)
        const headers = this.substituteCommas(rows[0]).split(csvFormat.delimiter)
                            .map(x => x.replace(/###/g, csvFormat.delimiter))
                            .map(x => x.substr(0, 1) == '"' && x.substr(-1) == '"' ? x.substr(1, x.length - 2) : x)

        return headers
    }

    headersFromJSON(data) {
        if (!this.isJSON(data)) return []

        data = JSON.parse(data)
        let rows = data.data || data
        if (!Array.isArray(rows)) rows = [rows]
        const headers = []
        for (const key in rows[0]) {
            if (rows[0].hasOwnProperty(key)) {
                headers.push(key)
            }
        }

        return headers
    }

    columnAttributes(tableColumns, headers) {
        const columns = {}
        //const headers = self.dataTable['headers']

        for (let i = 0; i < headers.length; i++) {
            let heading = headers[i], include = true, align = '', width = '', format = '', replace = '', replaceWith = ''

            if (Array.isArray(tableColumns) && tableColumns.length > 0) {
                include = false
                if (typeof tableColumns[0] === 'object' && tableColumns[0] !== null) {
                    for (let j = 0; j < tableColumns.length; j++) {
                        const tableColumn = tableColumns[j]
                        if (tableColumn['column'] && tableColumn['column'] == heading) {
                            heading = 'heading' in tableColumn ? tableColumn['heading'] : heading.replace(/_/g, ' ')
                            include = true//'include' in tableColumn ? tableColumn['include'] : false
                            align = 'align' in tableColumn ? tableColumn['align'] : ''
                            width = 'width' in tableColumn ? tableColumn['width'] : `${(1 / tableColumns.length) * 100}%`
                            format = 'format' in tableColumn ? tableColumn['format'] : ''
                            replace = 'replace' in tableColumn ? tableColumn['replace'] : ''
                            replaceWith = 'replaceWith' in tableColumn ? tableColumn['replaceWith'] : ''
                        }
                    }
                } else {
                    if (tableColumns.includes(heading)) {
                        include = true
                        heading = heading.replace(/_/g, ' ')
                    }
                }
            } else if (typeof tableColumns === 'object' && tableColumns !== null && !Array.isArray(tableColumns)) {
                include = false
                if (heading in tableColumns) {
                    const tableColumn = tableColumns[heading]
                    heading = 'heading' in tableColumn ? tableColumn['heading'] : heading.replace(/_/g, ' ')
                    include = true//'include' in tableColumn ? tableColumn['include'] : false
                    align = 'align' in tableColumn ? tableColumn['align'] : ''
                    width = `${(1 / tableColumns.length) * 100}%`
                    format = 'format' in tableColumn ? tableColumn['format'] : ''
                    replace = 'replace' in tableColumn ? tableColumn['replace'] : ''
                    replaceWith = 'replaceWith' in tableColumn ? tableColumn['replaceWith'] : ''
                }
            } else {
                heading = heading.replace(/_/g, ' ')
                width = `${(1 / headers.length) * 100}%`
            }

            const column = {
                heading: heading,
                include: include,
                align: align,
                width: width,
                format: format,
                replace: replace,
                replaceWith: replaceWith
            }
            columns[headers[i]] = column
        }

        return columns
    }

    sortData(data, sort, sortOrder) {
        const headers = this.data['headers']

        if (sort > -1) {
            if (this.type == 'json') {
                if (sortOrder == 'asc') {
                    data.sort((a, b) => (a[headers[sort]] > b[headers[sort]]) ? 1 : ((b[headers[sort]] > a[headers[sort]]) ? -1 : 0))
                } else {
                    data.sort((a, b) => (b[headers[sort]] > a[headers[sort]]) ? 1 : ((a[headers[sort]] > b[headers[sort]]) ? -1 : 0))
                }
            } else {
                if (sortOrder == 'asc') {
                    data.sort((a, b) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0))
                } else {
                    data.sort((a, b) => (b[sort] > a[sort]) ? 1 : ((a[sort] > b[sort]) ? -1 : 0))
                }
            }
        }

        this.data['sort'] = sort
        this.data['sortOrder'] = sortOrder == 'asc' ? 'desc' : 'asc'
        return data
    }

    sortDataNumeric(data, sort, sortOrder) {
        const headers = this.data['headers']

        if (sort > -1) {
            if (this.type == 'json') {
                if (sortOrder == 'asc') {
                    data.sort((a, b) => a[headers[sort]] - b[headers[sort]])
                } else {
                    data.sort((a, b) => b[headers[sort]] - a[headers[sort]])
                }
            } else {
                if (sortOrder == 'asc') {
                    data.sort((a, b) => a[sort] - b[sort])
                } else {
                    data.sort((a, b) => b[sort] - a[sort])
                }
            }
        }

        this.data['sort'] = sort
        this.data['sortOrder'] = sortOrder == 'asc' ? 'desc' : 'asc'
        return data
    }

    filterData(data, filters) {
        const headers = this.data['headers']

        let filteredColumns = []
        if (filters.length > 0) {
            let filtered = []
            for (let i = 0; i < data.length; i++) {
                let ok = ''
                for (const filter of filters) {
                    const columnNumber = headers.indexOf(filter['column'])
                    const column = this.type == 'json' ? filter['column'] : columnNumber

                    let include = false
                    if (filter['type'] == 'match') {
                        include = this.removeHTML(data[i][column]) == filter['value']
                    } else {
                        include = this.removeHTML(data[i][column]).toUpperCase().indexOf(filter['value'].toUpperCase()) > -1
                    }
                    if (include) {
                        filtered.push(data[i])
                        if (!filteredColumns.includes(columnNumber)) filteredColumns.push(columnNumber)
                        break
                    }
                }
            }
            data = filtered
        }

        this.data['filters'] = filters
        return data
    }

    groupData(data, group) {
        //
    }

    groupBy(arr, groups, key) {
        var map = new Map;
        groups = [].concat(groups);
        return arr.reduce((r, o) => {
            groups.reduce((m, k, i, { length }) => {
                var child
                if (m.has(o[k])) return m.get(o[k])
                if (i + 1 === length) {
                    child = Object
                        .assign(...groups.map(k => ({ [k]: o[k] })), { [key]: 0 })
                    r.push(child)
                } else {
                    child = new Map
                }
                m.set(o[k], child)
                return child
            }, map)[key] += +o[key]
            return r
        }, [])
    }

    merge(arr1, arr2, key) {
        return arr1.map((x) => {
            const y = arr2.find(item => x[key] === item[key])
            if (y) {
                return Object.assign({}, x, y);
            } else {
                return x
            }
        }).concat(arr2.filter(item => arr1.every( x => x[key] !== item[key])))
    }

    async downloadData(data, filename, format, mode, columns) {
        function allowColumn(columns, columnName) {
            return !!columns[columnName].include
        }

        let headers = []
        if (this.isURL(data)) {
            this.type = format
            data = await this.loadDataFromURL(data)
            headers = data.headers
            data = data.data || data
            data.unshift(headers)
        }

        if (columns) {
            columns = this.columnAttributes(columns, headers)
            const userData = []

            for (let i = 1; i < data.length; i++) {
                const userRow = []

                for (let j = 0; j < headers.length; j++) {
                    if (allowColumn(columns, headers[j])) {
                        let content = data[i][j]

                        if (columns[headers[j]].format != '') {
                            if (['percent', '%', '£', '$', '€', 'currency', 'number'].includes(columns[headers[j]].format) && this.isNumeric(content)) {
                                if (['percent', '%'].includes(columns[headers[j]].format)) {
                                    content = `${parseFloat(content, 10).toFixed(2)}%`
                                } else if (['£', '$', '€'].includes(columns[headers[j]].format)) {
                                    content = `${columns[headers[j]].format == 'currency' ? '£' : columns[headers[j]].format}${this.numberWithCommas(parseFloat(content, 10).toFixed(2))}`
                                } else if (columns[headers[j]].format == 'number') {
                                    content = this.numberWithCommas(content)
                                }
                            } else if (columns[headers[j]].format.substr(-2) == 'dp' && this.isNumeric(columns[headers[j]].format.substr(0, columns[headers[j]].format.length - 2)) && this.isNumeric(content)) {
                                content = this.numberWithCommas(parseFloat(content, 10).toFixed(parseInt(columns[headers[j]].format.substr(0, columns[headers[j]].format.length - 2), 10)))
                            }
                        }

                        if (columns[headers[j]].replace != '' && columns[headers[j]].replaceWith != '' ) {
                            content = content.replace(new RegExp(columns[headers[j]].replace, 'g'), columns[headers[j]].replaceWith)
                        }

                        userRow.push(content.toString().indexOf(',') > -1 ? `"${content}"` : content)
                    }
                }

                userData.push(userRow)
            }

            data = userData
            headers = []
            for (const key in columns) {
                if (columns.hasOwnProperty(key)) {
                    if (columns[key].include) headers.push(columns[key].heading)
                }
            }
            data.unshift(headers)
        }

        let blob
        if (format == 'csv') {
            if (this.type == 'json') {
                blob = new Blob([this.json2csv(data).join('\n')], { 'type': 'text/csv', endings: 'native' })
            } else {
                blob = new Blob([data.join('\n')], { 'type': 'text/csv', endings: 'native' })
            }
        } else {
            if (this.type == 'json') {
                blob = new Blob(data, { 'type': 'text/json' })
            } else {
                blob = new Blob(this.csv2json(data), { 'type': 'text/json' })
            }
        }

        if (mode == 'size') {
            return blob.size || 0
        } else {
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, filename)
            } else {
                const a = document.createElement('a')
                a.href = URL.createObjectURL(blob)
                a.download = filename
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
            }
        }
    }

    removeHTML(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.body.textContent || ''
    }

    quoteCommas(str) {
        if (str.indexOf(',') > -1 && str.substr(0, 1) != '"') str = `"${str}"`
        return str
    }

    isNumeric(x) {
        return !isNaN(parseFloat(x)) && isFinite(x)
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    substituteCommas(str) {
        return str.replace(/"[^"]+"/g, function (s) {
            return s.replace(/,/g, '###')
        })
    }
}
