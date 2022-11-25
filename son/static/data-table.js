class DataTable {
    constructor(el, options) {
        this.el = el
        this.options = options || {}
        this.dataTables = []

        this._init()
    }

    // TOTO
    // DATA-SORT numeric
    // Add row with msg when filter returns nothing
    // Build table from CSV, data etc
    // filter - choose between AND and OR

    _init() {
        function scriptSrc() {
            const script =  document.querySelector('script[src*="data-table.js"]')
            if (script.src) {
                return script.src.substr(0, script.src.lastIndexOf('/') + 1)
            }
            return ''
        }

        const scripts = []
        const styles = [`${scriptSrc()}data-table.css`]
        this._loadResources(scripts.concat(styles), this)
    }

    _loadResources(resources, self) {
        const downloaded = resources.map(x => false)

        function load(resource) {
            if (resource.indexOf('.') > -1) {
                if (resource.substr(resource.lastIndexOf('.') + 1).toLowerCase() == 'css') {
                    if (document.querySelector('[href="' + resource + '"]') == null) {
                        let style = document.createElement('link')
                        style.rel = 'stylesheet'
                        style.href = resource
                        style.type = 'text/css'
                        style.onload = function () {
                            loaded(resource)
                        }
                        document.head.appendChild(style)
                    } else {
                        loaded(resource)
                    }
                } else if (resource.substr(resource.lastIndexOf('.') + 1).toLowerCase() == 'js') {
                    if (document.querySelector('[src="' + resource + '"]') == null) {
                        let script = document.createElement('script')
                        script.type = 'text/javascript'
                        script.src = resource
                        script.onload = function () {
                            loaded(resource)
                        }
                        document.head.appendChild(script)

                    } else {
                        loaded(resource)
                    }
                }
            }
        }

        function loaded(resource) {
            downloaded[resources.indexOf(resource)] = true
            for (let i = 0; i < downloaded.length; i++) {
                if (!downloaded[i]) {
                    return
                }
            }
            self.render()
        }

        for (let i = 0; i < resources.length; i++) {
            load(resources[i])
        }
    }

    render() {
        const dataFormat = this.options.dataFormat || 'json'
        const allowColumnResize = this.options.allowColumnResize || false
        const allowFilter = this.options.allowFilter || false
        const allowSort = this.options.allowSort || false
        const allowPagination = this.options.allowPagination || false

        if (allowColumnResize || allowFilter || allowSort | allowPagination) {
            this.buildDataTable(dataFormat, true)
            if (allowColumnResize) this.resizeTable()
            if (allowFilter) this.filterTable()
            if (allowSort) this.sortTable()
            if (allowPagination) this.paginateTable()
        }
    }

    csvJSON(csv) {
        function replaceCommas(str) {
            return str.replace(/"[^"]+"/g, function(s) { 
                return s.replace(/,/g, '###')
            })
        }

        const lines = csv.split('\n')
        const result = []
        const header = replaceCommas(lines[0])
        const headers = header.split(',')
        for (let i = 1; i < lines.length; i++) {
            const obj = {}
            const currentline = replaceCommas(lines[i]).split(",")
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j].replace(/###/g, ',')] = currentline[j].replace(/###/g, ',')
            }          
            result.push(obj)
        }
        return JSON.stringify(result)
    }

    tableFromData(data, container, tag) {
        // TODO - take a JSON/CSV and create a table
    }

    clearDataTable() {
        const table = document.getElementById(this.el)
        const rows = table.tagName == 'TABLE' ? table.rows : table.children

        for (let i = rows.length - 1; i > 0; i--) {
            if (table.tagName == 'TABLE') {
                table.deleteRow(i)
            } else {
                table.removeChild(rows[i])
            }
        }
    }

    createTableHeader() {
        // TODO
    }

    createDataTable() {
        if (!(`data-table-${this.el}` in this.dataTables)) return
        const table = document.getElementById(this.el)
        const headers = this.dataTables[`data-table-${this.el}`]['headers']
        const type = this.dataTables[`data-table-${this.el}`]['type']
        let data = this.dataTables[`data-table-${this.el}`]['data']
        const filters = this.dataTables[`data-table-${this.el}`]['filters']
        const sort = this.dataTables[`data-table-${this.el}`]['sort']
        const sortOrder = this.dataTables[`data-table-${this.el}`]['sortOrder']

        let widths = []
        const rows = table.tagName == 'TABLE' ? table.rows : table.children
        for (let i = 0; i < rows[0].children.length; i++) {
            widths.push(rows[0].children[i].style.width)
        }

        let filteredColumns = []
        if (filters.length > 0) {
            let filtered = []
            for (let i = 0; i < data.length; i++) {
                let ok = ''
                for (let filter of filters) {
                    const columnNumber = headers.indexOf(filter['column'])
                    const column = type == 'array' ? columnNumber : filter['column']

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
        if (document.getElementsByClassName(`filter-icon_${this.el}_0`).length > 0) {
            for (let i = 0; i < headers.length; i++) {
                document.getElementsByClassName(`filter-icon_${this.el}_${i}`)[0].classList.remove('active')
                if (filters.find(item => item['column'] == headers[i])) {
                    document.getElementsByClassName(`filter-icon_${this.el}_${i}`)[0].classList.add('active')
                }
            }
        }

        if (sort > -1) {
            if (type == 'array') {
                if (sortOrder == 'asc') {
                    data.sort((a, b) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0))
                } else {
                    data.sort((a, b) => (b[sort] > a[sort]) ? 1 : ((a[sort] > b[sort]) ? -1 : 0))
                }
            } else {
                if (sortOrder == 'asc') {
                    data.sort((a, b) => (a[headers[sort]] > b[headers[sort]]) ? 1 : ((b[headers[sort]] > a[headers[sort]]) ? -1 : 0))
                } else {
                    data.sort((a, b) => (b[headers[sort]] > a[headers[sort]]) ? 1 : ((a[headers[sort]] > b[headers[sort]]) ? -1 : 0))
                }
            }
        }
        if (document.getElementsByClassName(`sort-icon_${this.el}_0`).length > 0) {
            for (let i = 0; i < headers.length; i++) {
                document.getElementsByClassName(`sort-icon_${this.el}_${i}`)[0].classList.remove('activeasc')
                document.getElementsByClassName(`sort-icon_${this.el}_${i}`)[0].classList.remove('activedesc')
                if (sort == i) {
                    document.getElementsByClassName(`sort-icon_${this.el}_${i}`)[0].classList.add(`active${sortOrder}`)
                }
            }
        }

        this.clearDataTable()

        function applyAttributes(node, attributes) {
            for (const attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    if (attribute.toLowerCase() == 'class') {
                        const classes = attributes[attribute].split(' ')
                        for (let i = 0; i < classes.length; i++) {
                            node.classList.add(classes[i])
                        }
                    } else if (attribute.toLowerCase() == 'style') {
                        const styles = attributes[attribute].split(';')
                        for (let i = 0; i < styles.length; i++) {
                            if (styles[i].indexOf(':') > -1) {
                                if (styles[i].substr(0, styles[i].indexOf(':')).toLowerCase() != 'width') {
                                    node.style[styles[i].substr(0, styles[i].indexOf(':'))] = styles[i].substr(styles[i].indexOf(':') + 1)
                                }
                            }
                        }
                    } else {
                        node.setAttribute(attribute, attributes[attribute])
                    }
                }
            }
        }

        for (let i = 0; i < data.length; i++) {
            let row = document.createElement(this.dataTables[`data-table-${this.el}`]['tag'] == 'TABLE' ? 'tr' : 'div')
            row.classList.add('table-row')
            applyAttributes(row, data[i]['_attributes'][0])

            for (let j = 0; j < headers.length; j++) {
                let cell = document.createElement(this.dataTables[`data-table-${this.el}`]['tag'] == 'TABLE' ? 'td' : 'div')
                cell.classList.add('table-column')
                cell.style.width = widths[j]
                cell.setAttribute('data-column', `${j}`)
                applyAttributes(cell, data[i]['_attributes'][j + 1])
                cell.innerHTML = data[i][type == 'array' ? j : headers[j]]
                row.appendChild(cell)
            }

            if (this.dataTables[`data-table-${this.el}`]['tag'] == 'TABLE') {
                table.getElementsByTagName('tbody')[0].appendChild(row)
            } else {
                table.appendChild(row)
            }
        }
    }

    buildDataTable(type, hasHeader) {
        const table = document.getElementById(this.el)
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
                let row = type == 'array' ? [] : {}
                const attributes = []
                attributes.push(getAttributes(rows[i]))
                for (let j = 0; j < rows[i].children.length; j++) {
                    if (type == 'array') {
                        row.push(rows[i].children[j].innerHTML)
                    } else {
                        row[headers[j]] = rows[i].children[j].innerHTML
                    }
                    attributes.push(getAttributes(rows[i].children[j]))
                }
                row['_attributes'] = attributes
                data.push(row)
            }
        }

        this.dataTables[`data-table-${this.el}`] = { 'headers': headers, 'data': data, 'type': type, 'tag': table.tagName, 'sort': -1, 'sortOrder': 'asc', 'filters': [], 'page': -1, 'pageSize': -1 }
        this.fixTable()
    }

    fixTable() {
        const table = document.getElementById(this.el)
        const rows = table.tagName == 'TABLE' ? table.rows : table.children
        let columns = 0

        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.add('table-row')
            rows[i].classList.add(`table_row_${i}`)
            if (i == 0) {
                columns = rows[i].children.length
                rows[i].style.position = 'sticky'
                rows[i].style.top = '0px'
                rows[i].style.zIndex = '2'

                for (let j = 0; j < rows[i].children.length; j++) {
                    rows[i].children[j].onmouseover = function (e) {
                        if (this.getElementsByClassName('icons')[0]) {
                            this.getElementsByClassName('icons')[0].style.visibility = 'visible'
                        }
                        e.stopPropagation()
                    }
                    rows[i].children[j].onmouseout = function (e) {
                        if (this.getElementsByClassName('icons')[0]) {
                            this.getElementsByClassName('icons')[0].style.visibility = 'hidden'
                        }
                    }
                }
            }

            if (table.tagName == 'TABLE') {
                if (i == 0) {
                    if (rows[i].parentElement.tagName != 'THEAD') {
                        if (!table.getElementsByTagName('thead')[0]) {
                            let thead = document.createElement('thead')
                            table.insertBefore(thead, table.firstChild)
                        }
                    }

                    for (let j = 0; j < rows[i].children.length; j++) {
                        if (rows[i].children[j].tagName == 'TD') {
                            let th = document.createElement('th')
                            th.innerHTML = rows[i].children[j].innerHTML
                            rows[i].children[j].parentNode.replaceChild(th, rows[i].children[j])
                        }
                        rows[i].children[j].setAttribute('title', rows[i].children[j].innerText)
                        rows[i].children[j].classList.add('table-column')
                        rows[i].children[j].setAttribute('data-column', `${j}`)
                        rows[i].children[j].style.width = `${100 / columns}%`
                    }
                    table.getElementsByTagName('thead')[0].appendChild(rows[i])
                } else {
                    if (rows[i].parentElement.tagName != 'TBODY') {
                        if (!table.getElementsByTagName('tbody')[0]) {
                            let tbody = document.createElement('tbody')
                            table.insertAfter(tbody, table.firstChild)
                        }
                    }

                    for (let j = 0; j < rows[i].children.length; j++) {
                        rows[i].children[j].setAttribute('title', rows[i].children[j].innerText)
                        rows[i].children[j].classList.add('table-column')
                        rows[i].children[j].setAttribute('data-column', `${j}`)
                        rows[i].children[j].style.width = `${100 / columns}%`
                    }
                }
            } else {
                for (let j = 0; j < rows[i].children.length; j++) {
                    rows[i].children[j].setAttribute('title', rows[i].children[j].innerText)
                    rows[i].children[j].classList.add('table-column')
                    rows[i].children[j].setAttribute('data-column', `${j}`)
                    rows[i].children[j].style.width = `${100 / columns}%`
                }
            }
        }
        table.style.width = `${table.clientWidth}px`
    }

    tableIcons(row, column) {
        let icons = row.children[column].getElementsByClassName('icons')
        if (icons.length == 0) {
            icons = document.createElement('div')
            icons.classList.add('icons')
            row.children[column].appendChild(icons)
        } else {
            icons = icons[0]
        }
        return icons
    }

    resizeTable() {
        const table = document.getElementById(this.el)
        const rows = table.tagName == 'TABLE' ? table.rows : table.children
        if (rows[0]) {
            for (let i = 0; i < rows[0].children.length - 1; i++) {
                let resize = document.createElement('span')
                resize.classList.add('table-drag')

                resize.addEventListener('mousedown', function () {console.log('!')
                    const allResize = document.getElementsByClassName('table-drag')
                    for (let i = 0; i < allResize.length; i++) {
                        const resize = allResize[i]
                        const leftCol = resize.parentElement
                        const columnNumber = resize.parentElement.getAttribute('data-column')
                        const rightCol = resize.parentElement.nextElementSibling
                        let x = 0, y = 0, tableWidth = 0, leftWidth = 0, rightWidth = 0

                        const mouseDownHandler = function (e) {
                            x = e.clientX
                            y = e.clientY
                            tableWidth = resize.parentElement.parentNode.getBoundingClientRect().width
                            leftWidth = leftCol.getBoundingClientRect().width
                            rightWidth = rightCol.getBoundingClientRect().width

                            document.addEventListener('mousemove', mouseMoveHandler)
                            document.addEventListener('mouseup', mouseUpHandler)
                        }

                        const mouseMoveHandler = function (e) {
                            const relativeWidth = (width) => {
                                return (width / tableWidth) * 100
                            }
                            const dx = e.clientX - x
                            const dy = e.clientY - y
                            const resizeDistance = relativeWidth(leftWidth) - (((leftWidth + dx) * 100) / tableWidth)
                            let leftCols = document.querySelectorAll(`[data-column="${columnNumber}"]`)
                            for (let i = 0; i < leftCols.length; i++) {
                                leftCols[i].style.width = `${relativeWidth(leftWidth) - resizeDistance}%`
                                leftCols[i].nextElementSibling.style.width = `${relativeWidth(rightWidth) + resizeDistance}%`
                            }

                            resize.style.cursor = 'col-resize'
                            document.body.style.cursor = 'col-resize'

                            leftCol.style.userSelect = 'none'
                            leftCol.style.pointerEvents = 'none'

                            rightCol.style.userSelect = 'none'
                            rightCol.style.pointerEvents = 'none'
                        }

                        const mouseUpHandler = function () {
                            resize.style.removeProperty('cursor')
                            document.body.style.removeProperty('cursor')

                            leftCol.style.removeProperty('user-select')
                            leftCol.style.removeProperty('pointer-events')

                            rightCol.style.removeProperty('user-select')
                            rightCol.style.removeProperty('pointer-events')

                            document.removeEventListener('mousemove', mouseMoveHandler)
                            document.removeEventListener('mouseup', mouseUpHandler)
                        }

                        resize.addEventListener('mousedown', mouseDownHandler)
                    }
                }, false)

                rows[0].children[i].appendChild(resize)
            }
        }

        /*document.addEventListener('DOMContentLoaded', function () {
            const allResize = ...
        })*/
    }

    filterTable() {
        const table = document.getElementById(this.el)
        const rows = table.tagName == 'TABLE' ? table.rows : table.children
        if (!rows[0]) return
        const rowHeight = rows[0].getBoundingClientRect().height
        for (let i = 0; i < rows[0].children.length; i++) {
            let icons = this.tableIcons(rows[0], i)
            let icon = document.createElement('span')
            icon.classList.add('filter-icon')
            icon.classList.add(`filter-icon_${this.el}_${i}`)
            icon.innerHTML = `<svg height="${rowHeight - 6}" width="${rowHeight - 6}" viewBox="0 0 20 20"><polygon points="0,1 8,12 8,20 12,16 12,12 20,1" fill="#fff" stroke="#555" stroke-width="1" /></svg>`
            let self = this
            icon.onclick = function (e) {
                if (document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].style.display == 'block') {
                    document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].style.display = 'none'
                    document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].parentElement.style.overflow = 'hidden'
                } else {
                    //self.closeAllFilters(`filter_${rows[0].children[i].getAttribute('data-column')}`)
                    self.populateFilterValues(`${rows[0].children[i].getAttribute('data-column')}`)
                    document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].style.display = 'block'
                    document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].parentElement.style.overflow = 'visible'
                }
            }
            icons.appendChild(icon)

            let filter = document.createElement('div')
            filter.classList.add('filter')
            filter.classList.add(`filter_${rows[0].children[i].getAttribute('data-column')}`)
            filter.style.top = `${rowHeight - 2}px`
            filter.onmouseover = function (e) {
                this.style.display = 'block'
                e.stopPropagation()
            }
            filter.onmouseout = function (e) {
                if (['INPUT', 'P', 'UL', 'LI', 'LABEL', 'SPAN'].includes(e.toElement.tagName)) return
                this.style.display = 'none'
                this.parentElement.style.overflow = 'hidden'
            }
            rows[0].children[i].appendChild(filter)
        }
    }

    closeAllFilters(exclude) {
        let filters = document.getElementsByClassName('filter')
        for (let i = 0; i < filters.length; i++) {
            if (!filters[i].classList.contains(exclude)) filters[i].style.visibility = 'hidden'
        }
    }

    populateFilterValues(cells) {
        if (document.getElementsByClassName(`filter_${cells}`)[0].innerHTML != '') return
        let values = []
        //const table = cells.split('_')[0]
        const column = cells //.split('_')[1]
        const headers = this.dataTables[`data-table-${this.el}`]['headers']
        const type = this.dataTables[`data-table-${this.el}`]['type']
        const data = this.dataTables[`data-table-${this.el}`]['data']

        for (let i = 0; i < data.length; i++) {
            if (type == 'array') {
                if (!values.includes(data[i][column])) {
                    values.push(this.removeHTML(data[i][column]))
                }
            } else {
                if (!values.includes(data[i][headers[column]])) {
                    values.push(this.removeHTML(data[i][headers[column]]))
                }
            }
        }
        values = values.sort()

        let self = this
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.oninput = function (e) {
            self.applyFilterValue(cells, this.value)
        }
        document.getElementsByClassName(`filter_${cells}`)[0].appendChild(input)
        let ul = document.createElement('ul')

        if (values.length > 30) {
            let li = document.createElement('li')
            let p = document.createElement('p')
            p.innerHTML = 'Too many options to list<br>use search above to filter'
            li.appendChild(p)
            ul.appendChild(li)
        } else {
            for (let i = 0; i < values.length; i++) {
                let li = document.createElement('li')
                let label = document.createElement('label')
                let input = document.createElement('input')
                input.setAttribute('type', 'checkbox')
                input.classList.add(`filtervalue_${this.el}_${cells}__"]`)
                input.onclick = function (e) {
                    self.applyFilterValues(cells)
                }
                label.appendChild(input)
                let span = document.createElement('span')
                span.innerText = ` ${values[i]}`
                label.appendChild(span)
                li.appendChild(label)
                ul.appendChild(li)
            }
        }

        document.getElementsByClassName(`filter_${cells}`)[0].appendChild(ul)
    }

    applyFilterValue(cells, text) {
        //const table = cells.split('_')[0]
        const column = cells //.split('_')[1]
        const columnName = this.dataTables[`data-table-${this.el}`]['headers'][parseInt(column, 10)]
        let filters = this.dataTables[`data-table-${this.el}`]['filters']

        const found = filters.reduce(function (current, item, index) {
            if (item['column'] == columnName && item['type'] == 'search' && current === -1) {
                return index
            }
            return current
        }, -1)

        if (found > -1) {
            filters[found]['value'] = text
        } else {
            filters.push({ 'column': columnName, 'value': text, 'type': 'search' })
        }
        this.dataTables[`data-table-${this.el}`]['filters'] = filters
        this.createDataTable()
    }

    applyFilterValues(cells) {
        const table = cells.split('_')[0]
        const column = cells.split('_')[1]
        const columnName = this.dataTables[`data-table-${this.el}`]['headers'][parseInt(column, 10)]
        let filters = this.dataTables[`data-table-${this.el}`]['filters']
        const values = document.querySelectorAll(`[class^="filtervalue_${this.el}_${cells}__"]`)
        for (let i = 0; i < values.length; i++) {
            if (values[i].checked) {
                if (!(filters.some(item => item['column'] == columnName && item['value'] == values[i].parentElement.innerText))) {
                    filters.push({ 'column': columnName, 'value': values[i].parentElement.innerText.trim(), 'type': 'match' })
                }
            } else {
                filters = filters.filter(item => {
                    return item['column'] == columnName && item['value'] == values[i].parentElement.innerText.trim() ? false : true
                })
            }
        }
        this.dataTables[`data-table-${this.el}`]['filters'] = filters
        this.createDataTable()
    }

    sortTable() {
        const table = document.getElementById(this.el)
        const rows = table.tagName == 'TABLE' ? table.rows : table.children
        if (!rows[0]) return
        const rowHeight = rows[0].getBoundingClientRect().height
        for (let i = 0; i < rows[0].children.length; i++) {
            let icons = this.tableIcons(rows[0], i)
            let icon = document.createElement('span')
            icon.classList.add('sort-icon')
            icon.classList.add(`sort-icon_${this.el}_${i}`)
            icon.innerHTML = `<svg height="${rowHeight - 6}" width="${rowHeight - 12}" viewBox="0 0 14 20"><polygon points="0,8 7,1 14,8" fill="#fff" stroke="#555" stroke-width="1" class="desc" /><polygon points="0,12 7,19 14,12" fill="#fff" stroke="#555" stroke-width="1" class="asc" /></svg>`

            let self = this
            icon.onclick = function (e) {
                if (self.dataTables[`data-table-${self.el}`]['sort'] == i) {
                    self.dataTables[`data-table-${self.el}`]['sortOrder'] = self.dataTables[`data-table-${self.el}`]['sortOrder'] == 'asc' ? 'desc' : 'asc'
                } else {
                    self.dataTables[`data-table-${self.el}`]['sort'] = i
                    self.dataTables[`data-table-${self.el}`]['sortOrder'] = 'asc'
                }
                self.createDataTable()
            }
            icons.appendChild(icon)
        }
    }

    paginateTable() {
        // TODO
    }

    tableSummary() {
        // TODO
    }

    removeHTML(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.body.textContent || ''
    }
}
