class DataTable {

    // TOTO
    // DATA-SORT numeric
    // Add row with msg when filter returns nothing
    // Build table from CSV, JSON
    // Data from URL
    // Data from data object
    // filter - choose between AND and OR
    // Paginate table
    // Table summary
    // Fix sticky header on TABLE tag
    // Show/hide columns
    // Group / sum / aggregate data

    constructor(el, data=undefined, options={}) {
        this.el = el
        this.options = options || {}
        this.data = data
        this.dataTables = []
        this.loaded = false

        this._init()

        function tableFromData(data, container, tag) {
            // TODO - take a JSON/CSV and create a table
        }
    }

    _init() {
        function scriptSrc() {
            const script =  document.querySelector('script[src*="data-table.js"]')
            if (script.src) {
                return script.src.substr(0, script.src.lastIndexOf('/') + 1)
            }
            return ''
        }

        const scripts = [`${scriptSrc()}data-utils.js`]
        const styles = [`${scriptSrc()}data-table.css`]
        this._loadResources(scripts.concat(styles), this)
    }

    _loadResources(resources, self) {
        const downloaded = resources.map(x => false)

        function load(resource) {
            if (resource.indexOf('.') > -1) {
                if (resource.substr(resource.lastIndexOf('.') + 1).toLowerCase() == 'css') {
                    if (document.querySelector(`[href$="${resource.substr(resource.lastIndexOf('/'))}"]`) == null) {
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
                } else {
                    if (document.querySelector(`[src$="${resource.substr(resource.lastIndexOf('/'))}"]`) == null) {
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
        let self = this
        const options = this.options
        const dataFormat = options.dataFormat || 'json'
        const allowColumnResize = options.allowColumnResize || false
        const allowFilter = options.allowFilter || false
        const allowSort = options.allowSort || false
        const allowPagination = options.allowPagination || false
        const showColumns = options.columns || null

        if (allowColumnResize || allowFilter || allowSort | allowPagination) {
            this.dataUtils = new DataUtils(dataFormat)
            this.dataUtils.loadData(this.el).then((data) => {
                self.loaded = true
                self.dataTables[`data-table-${self.el}`] = data
                fixTable()
                if (allowColumnResize) resizeTable()
                if (allowFilter) filterTable()
                if (allowSort) sortTable()
                if (allowPagination) paginateTable()
            })
        }

        function clearDataTable() {
            const table = document.getElementById(self.el)
            const rows = table.tagName == 'TABLE' ? table.rows : table.children

            for (let i = rows.length - 1; i > 0; i--) {
                if (table.tagName == 'TABLE') {
                    table.deleteRow(i)
                } else {
                    table.removeChild(rows[i])
                }
            }
        }

        function createDataTable() {console.log('!!!!!')
            if (!(`data-table-${self.el}` in self.dataTables)) return
            const table = document.getElementById(self.el)
            const headers = self.dataTables[`data-table-${self.el}`]['headers']
            const type = self.dataTables[`data-table-${self.el}`]['type']
            let data = self.dataTables[`data-table-${self.el}`]['data']
            const filters = self.dataTables[`data-table-${self.el}`]['filters']
            const sort = self.dataTables[`data-table-${self.el}`]['sort']
            const sortOrder = self.dataTables[`data-table-${self.el}`]['sortOrder']

            let widths = []
            const rows = table.tagName == 'TABLE' ? table.rows : table.children
            for (let i = 0; i < rows[0].children.length; i++) {
                widths.push(rows[0].children[i].style.width)
            }

            data = self.dataUtils.filterData(data, filters)
            if (document.getElementsByClassName(`filter-icon_${self.el}_0`).length > 0) {
                for (let i = 0; i < headers.length; i++) {
                    document.getElementsByClassName(`filter-icon_${self.el}_${i}`)[0].classList.remove('active')
                    if (filters.find(item => item['column'] == headers[i])) {
                        document.getElementsByClassName(`filter-icon_${self.el}_${i}`)[0].classList.add('active')
                    }
                }
            }

            data = self.dataUtils.sortData(data, sort, sortOrder)
            if (document.getElementsByClassName(`sort-icon_${self.el}_0`).length > 0) {
                for (let i = 0; i < headers.length; i++) {
                    document.getElementsByClassName(`sort-icon_${self.el}_${i}`)[0].classList.remove('activeasc')
                    document.getElementsByClassName(`sort-icon_${self.el}_${i}`)[0].classList.remove('activedesc')
                    if (sort == i) {
                        document.getElementsByClassName(`sort-icon_${self.el}_${i}`)[0].classList.add(`active${sortOrder}`)
                    }
                }
            }

            clearDataTable()

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
                let row = document.createElement(self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE' ? 'tr' : 'div')
                row.classList.add('table-row')
                applyAttributes(row, data[i]['_attributes'][0])

                for (let j = 0; j < headers.length; j++) {
                    let cell = document.createElement(self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE' ? 'td' : 'div')
                    cell.classList.add('table-column')
                    cell.style.width = widths[j]
                    cell.setAttribute('data-column', `${j}`)
                    applyAttributes(cell, data[i]['_attributes'][j + 1])
                    cell.innerHTML = data[i][type == 'array' ? j : headers[j]]
                    //console.log('showColumns', showColumns)
                    //if (Array.isArray(showColumns)) {
                    //    if (showColumns.includes(headers[j])) {
                    //        row.appendChild(cell)
                    //    }
                    //} else {
                        row.appendChild(cell)
                    //}
                }

                if (self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE') {
                    table.getElementsByTagName('tbody')[0].appendChild(row)
                } else {
                    table.appendChild(row)
                }
            }
        }

        function fixTable() {
            const table = document.getElementById(self.el)
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

        function tableIcons(row, column) {
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

        function resizeTable() {
            const table = document.getElementById(self.el)
            const rows = table.tagName == 'TABLE' ? table.rows : table.children
            if (rows[0]) {
                for (let i = 0; i < rows[0].children.length - 1; i++) {
                    let resize = document.createElement('span')
                    resize.classList.add('table-drag')

                    resize.addEventListener('mousedown', function () {
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

        function filterTable() {
            const table = document.getElementById(self.el)
            const rows = table.tagName == 'TABLE' ? table.rows : table.children
            if (!rows[0]) return
            const rowHeight = rows[0].getBoundingClientRect().height
            for (let i = 0; i < rows[0].children.length; i++) {
                let icons = tableIcons(rows[0], i)
                let icon = document.createElement('span')
                icon.classList.add('filter-icon')
                icon.classList.add(`filter-icon_${self.el}_${i}`)
                icon.innerHTML = `<svg height="${rowHeight - 6}" width="${rowHeight - 6}" viewBox="0 0 20 20"><polygon points="0,1 8,12 8,20 12,16 12,12 20,1" fill="#fff" stroke="#555" stroke-width="1" /></svg>`
                icon.onclick = function (e) {
                    if (document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].style.display == 'block') {
                        document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].style.display = 'none'
                        document.getElementsByClassName(`filter_${rows[0].children[i].getAttribute('data-column')}`)[0].parentElement.style.overflow = 'hidden'
                    } else {
                        //self.closeAllFilters(`filter_${rows[0].children[i].getAttribute('data-column')}`)
                        populateFilterValues(`${rows[0].children[i].getAttribute('data-column')}`)
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

        function closeAllFilters(exclude) {
            let filters = document.getElementsByClassName('filter')
            for (let i = 0; i < filters.length; i++) {
                if (!filters[i].classList.contains(exclude)) filters[i].style.visibility = 'hidden'
            }
        }

        function populateFilterValues(cells) {
            if (document.getElementsByClassName(`filter_${cells}`)[0].innerHTML != '') return
            let values = []
            //const table = cells.split('_')[0]
            const column = cells //.split('_')[1]
            const headers = self.dataTables[`data-table-${self.el}`]['headers']
            const type = self.dataTables[`data-table-${self.el}`]['type']
            const data = self.dataTables[`data-table-${self.el}`]['data']

            for (let i = 0; i < data.length; i++) {
                if (type == 'array') {
                    if (!values.includes(data[i][column])) {
                        values.push(removeHTML(data[i][column]))
                    }
                } else {
                    if (!values.includes(data[i][headers[column]])) {
                        values.push(removeHTML(data[i][headers[column]]))
                    }
                }
            }
            values = values.sort()

            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.oninput = function (e) {
                applyFilterValue(cells, this.value)
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
                    input.classList.add(`filtervalue_${self.el}_${cells}__"]`)
                    input.onclick = function (e) {
                        applyFilterValues(cells)
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

        function applyFilterValue(cells, text) {
            //const table = cells.split('_')[0]
            const column = cells //.split('_')[1]
            const columnName = self.dataTables[`data-table-${self.el}`]['headers'][parseInt(column, 10)]
            let filters = self.dataTables[`data-table-${self.el}`]['filters']

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
            self.dataTables[`data-table-${self.el}`]['filters'] = filters
            createDataTable()
        }

        function applyFilterValues(cells) {
            const table = cells.split('_')[0]
            const column = cells.split('_')[1]
            const columnName = self.dataTables[`data-table-${self.el}`]['headers'][parseInt(column, 10)]
            let filters = self.dataTables[`data-table-${self.el}`]['filters']
            const values = document.querySelectorAll(`[class^="filtervalue_${self.el}_${cells}__"]`)
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
            self.dataTables[`data-table-${self.el}`]['filters'] = filters
            createDataTable()
        }

        function sortTable() {
            const table = document.getElementById(self.el)
            const rows = table.tagName == 'TABLE' ? table.rows : table.children
            if (!rows[0]) return
            const rowHeight = rows[0].getBoundingClientRect().height
            for (let i = 0; i < rows[0].children.length; i++) {
                let icons = tableIcons(rows[0], i)
                let icon = document.createElement('span')
                icon.classList.add('sort-icon')
                icon.classList.add(`sort-icon_${self.el}_${i}`)
                icon.innerHTML = `<svg height="${rowHeight - 6}" width="${rowHeight - 12}" viewBox="0 0 14 20"><polygon points="0,8 7,1 14,8" fill="#fff" stroke="#555" stroke-width="1" class="desc" /><polygon points="0,12 7,19 14,12" fill="#fff" stroke="#555" stroke-width="1" class="asc" /></svg>`
                icon.onclick = function (e) {
                    if (self.dataTables[`data-table-${self.el}`]['sort'] == i) {
                        self.dataTables[`data-table-${self.el}`]['sortOrder'] = self.dataTables[`data-table-${self.el}`]['sortOrder'] != 'desc' ? 'asc' : 'desc'
                    } else {
                        self.dataTables[`data-table-${self.el}`]['sort'] = i
                        self.dataTables[`data-table-${self.el}`]['sortOrder'] = 'asc'
                    }
                    createDataTable()
                }
                icons.appendChild(icon)
            }
        }

        function paginateTable() {
            // TODO
        }

        function tableSummary() {
            // TODO
        }

        function removeHTML(html) {
            let doc = new DOMParser().parseFromString(html, 'text/html')
            return doc.body.textContent || ''
        }
    }

    getData(format) {
        let self = this
        return new Promise((resolve, reject) => {
            const loop = () => this.loaded ? resolve(self.dataTables[`data-table-${self.el}`].data) : setTimeout(loop)
            loop()
        })
    }

    downloadData(format) {
        return this.dataUtils.downloadData(this.data, `download.${format}`, format)
    }
}
