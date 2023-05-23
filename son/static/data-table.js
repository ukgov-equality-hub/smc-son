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

    constructor(el, data, options) {
        this.el = el
        this.data = data
        this.options = options || {}
        this.scriptSrc = ''
        this.dataTables = []
        this.loaded = false
        this.debug = false

        this._init()
    }

    _init() {
        const scripts = [`${this._scriptSrc()}data-utils.js`]
        const styles = [`${this._scriptSrc()}data-table.css`]
        this._loadResources(scripts.concat(styles), this)
    }

    _scriptSrc() {
        if (this.scriptSrc != '') return this.scriptSrc
        const script = document.querySelector('script[src*="data-table.js"]')
        if (script.src) {
            this.scriptSrc = script.src.substr(0, script.src.lastIndexOf('/') + 1)
            return this.scriptSrc
        }
        return ''
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
                        style.setAttribute('data-loaded', 'false')
                        style.onload = function () {
                            loaded(resource, 'css', false)
                        }
                        document.head.appendChild(style)
                    } else {
                        loaded(resource, 'css', true)
                    }
                } else {
                    if (document.querySelector(`[src$="${resource.substr(resource.lastIndexOf('/'))}"]`) == null) {
                        let script = document.createElement('script')
                        script.type = 'text/javascript'
                        script.src = resource
                        script.setAttribute('data-loaded', 'false')
                        script.onload = function () {
                            loaded(resource, 'js', false)
                        }
                        document.head.appendChild(script)
                    } else {
                        loaded(resource, 'js', true)
                    }
                }
            }
        }

        function loaded(resource, type, preloaded) {
            let el = null
            if (type == 'css' && document.querySelector(`[href$="${resource.substr(resource.lastIndexOf('/'))}"]`) != null) {
                el = document.querySelector(`[href$="${resource.substr(resource.lastIndexOf('/'))}"]`)
            } else if (type == 'js' && document.querySelector(`[src$="${resource.substr(resource.lastIndexOf('/'))}"]`) != null) {
                el = document.querySelector(`[src$="${resource.substr(resource.lastIndexOf('/'))}"]`)
            }
            if (!el) return

            if (preloaded) {
                if (!el.hasAttribute('data-loaded') || el.getAttribute('data-loaded') == 'true') {
                    downloaded[resources.indexOf(resource)] = true
                } else {
                    setTimeout(function () {
                        loaded(resource, type, preloaded)
                    }, 100)
                }
            } else {
                downloaded[resources.indexOf(resource)] = true
                el.setAttribute('data-loaded', 'true')
            }

            for (let i = 0; i < downloaded.length; i++) {
                if (!downloaded[i]) {
                    return
                }
            }
            console.info('Data table resources loaded')
            if (self.el) self.render()
        }

        for (let i = 0; i < resources.length; i++) {
            load(resources[i])
        }
    }

    render(pageNum) {
        let self = this
        const options = this.options
        const dataFormat = options.dataFormat || 'json'
        const allowColumnResize = options.allowColumnResize || false
        const allowFilter = options.allowFilter || false
        const allowSort = options.allowSort || false
        const pageSize = options.pageSize || -1
        const showColumns = options.columns || null

        if (allowColumnResize || allowFilter || allowSort) {
            if (self.dataTables[`data-table-${self.el}`]) {
                if (pageNum && isNumeric(pageNum)) {
                    self.dataTables[`data-table-${self.el}`]['page'] = pageNum
                }

                createDataTable()
            } else {
                this.dataUtils = new DataUtils(dataFormat)
                this.dataUtils.loadData(this.el).then((data) => {
                    self.loaded = true
                    const numeric = []
                    const headers = data['headers']
                    const type = data['type']
                    for (let i = 0; i < headers.length; i++) {
                        let allNumeric = true
                        for (let j = 0; j < data['data'].length; j++) {
                            if (!isNumeric(data['data'][j][type == 'array' ? i : headers[i]])) {
                                allNumeric = false
                                break
                            }
                        }
                        numeric.push(allNumeric)
                    }
                    data['numeric'] = numeric
                    self.dataTables[`data-table-${self.el}`] = data
                    if (self.debug) console.log('data', data)

                    self.dataTables[`data-table-${self.el}`]['page'] = 1
                    self.dataTables[`data-table-${self.el}`]['pageSize'] = pageSize

                    fixTable()
                    if (allowColumnResize) resizeTable()
                    if (allowFilter) filterTable()
                    if (allowSort) sortTable()
                    createDataTable()
                })
            }
        }

        function fixTable() {
            const table = document.getElementById(self.el)
            const headers = self.dataTables[`data-table-${self.el}`]['headers']
            const rows = table.tagName == 'TABLE' ? table.rows : table.children
            let columns = Array.isArray(showColumns) ? showColumns.length : rows[0].children.length
            const widths = []
            if (table.tagName == 'TABLE') table.classList.add('govuk-table')

            for (let i = 0; i < rows.length; i++) {
                rows[i].classList.add('table-row', `table_row_${i}`)
                if (i == 0) {
                    rows[i].style.position = 'sticky'
                    rows[i].style.top = '0px'
                    rows[i].style.zIndex = '2'

                    for (let j = 0; j < rows[i].children.length; j++) {
                        widths.push(`${100 / columns}%`)
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
                                th.innerHTML = rows[i].children[j].innerHTML.replace(/_/g, ' ')
                                rows[i].children[j].parentNode.replaceChild(th, rows[i].children[j])
                            }
                            rows[i].children[j].setAttribute('title', rows[i].children[j].innerText)
                            rows[i].children[j].setAttribute('scope', 'col')
                            rows[i].children[j].classList.add('table-column')
                            rows[i].children[j].classList.add('govuk-table__header')
                            rows[i].children[j].setAttribute('data-column', `${j}`)
                            rows[i].children[j].style.width = `${100 / columns}%`
                        }
                        table.getElementsByTagName('thead')[0].appendChild(rows[i])
                        rows[i].parentElement.classList.add('govuk-table__head')
                        rows[i].classList.add('govuk-table__row')
                    } else {
                        if (rows[i].parentElement.tagName != 'TBODY') {
                            if (!table.getElementsByTagName('tbody')[0]) {
                                let tbody = document.createElement('tbody')
                                table.insertAfter(tbody, table.firstChild)
                            }
                        }

                        for (let j = 0; j < rows[i].children.length; j++) {
                            rows[i].children[j].setAttribute('title', rows[i].children[j].innerText)
                            rows[i].children[j].classList.add('table-column', 'govuk-table__cell')
                            rows[i].children[j].setAttribute('data-column', `${j}`)
                            rows[i].children[j].style.width = `${100 / columns}%`
                        }
                        rows[i].parentElement.classList.add('govuk-table__body')
                        rows[i].classList.add('govuk-table__row')
                    }
                } else {
                    for (let j = 0; j < rows[i].children.length; j++) {
                        rows[i].children[j].setAttribute('title', rows[i].children[j].innerText)
                        rows[i].children[j].classList.add('table-column')
                        rows[i].children[j].setAttribute('data-column', `${j}`)
                        rows[i].children[j].style.width = `${100 / columns}%`
                    }
                }

                for (let j = headers.length - 1; j >= 0; j--) {
                    if (!allowColumn(headers[j]) && rows[i].children[j]) {
                        rows[i].removeChild(rows[i].children[j])
                    }
                }

                if (i == 0) {
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
            }

            table.style.width = '100%' //`${table.clientWidth}px`
            self.dataTables[`data-table-${self.el}`]['widths'] = widths
        }

        function allowColumn(columnName) {
            if (Array.isArray(showColumns)) {
                if (showColumns.includes(columnName)) {
                    return true
                }
                return false
            } else {
                return true
            }
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

        function createDataTable() {
            if (!(`data-table-${self.el}` in self.dataTables)) return
            const table = document.getElementById(self.el)
            const headers = self.dataTables[`data-table-${self.el}`]['headers']
            const numeric = self.dataTables[`data-table-${self.el}`]['numeric']
            const type = self.dataTables[`data-table-${self.el}`]['type']
            let data = self.dataTables[`data-table-${self.el}`]['data']
            const filters = self.dataTables[`data-table-${self.el}`]['filters']
            const sort = self.dataTables[`data-table-${self.el}`]['sort']
            const sortOrder = self.dataTables[`data-table-${self.el}`]['sortOrder']
            const widths = self.dataTables[`data-table-${self.el}`]['widths']

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

            function createElementFromHTML(html) {
                const div = document.createElement('div')
                div.innerHTML = html.trim()
                return div.firstChild
            }

            function page(data, pageSize, currentPage) {
                const start = (currentPage - 1) * pageSize
                const end = start + pageSize
                return data.slice(start, end)
            }

            data = self.dataUtils.filterData(data, filters)
            if (document.getElementsByClassName(`filter-icon_${self.el}_0`).length > 0) {
                for (let i = 0; i < headers.length; i++) {
                    if (allowColumn(headers[i]) && document.getElementsByClassName(`filter-icon_${self.el}_${i}`)[0]) {
                        document.getElementsByClassName(`filter-icon_${self.el}_${i}`)[0].classList.remove('active')
                        if (filters.find(item => item['column'] == headers[i])) {
                            document.getElementsByClassName(`filter-icon_${self.el}_${i}`)[0].classList.add('active')
                        }
                    }
                }
            }

            if (numeric[sort]) {
                data = self.dataUtils.sortDataNumeric(data, sort, sortOrder)
            } else {
                data = self.dataUtils.sortData(data, sort, sortOrder)
            }
            if (document.getElementsByClassName(`sort-icon_${self.el}_0`).length > 0) {
                for (let i = 0; i < headers.length; i++) {
                    if (allowColumn(headers[i]) && document.getElementsByClassName(`sort-icon_${self.el}_${i}`)[0]) {
                        document.getElementsByClassName(`sort-icon_${self.el}_${i}`)[0].classList.remove('activeasc')
                        document.getElementsByClassName(`sort-icon_${self.el}_${i}`)[0].classList.remove('activedesc')
                        if (sort == i) {
                            document.getElementsByClassName(`sort-icon_${self.el}_${i}`)[0].classList.add(`active${sortOrder}`)
                        }
                    }
                }
            }

            let numPages = 1
            let currentPage = 1
            if (pageSize > 0) {
                numPages = Math.ceil(data.length / pageSize)
                currentPage = self.dataTables[`data-table-${self.el}`]['page']
                data = page(data, pageSize, currentPage)
            }

            clearDataTable()

            for (let i = 0; i < data.length; i++) {
                const row = document.createElement(self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE' ? 'tr' : 'div')
                row.classList.add('table-row', 'govuk-table__row')
                applyAttributes(row, data[i]['_attributes'][0])

                for (let j = 0; j < headers.length; j++) {
                    if (allowColumn(headers[j])) {
                        let cell = document.createElement(self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE' ? 'td' : 'div')
                        cell.classList.add('table-column', 'govuk-table__cell')
                        if (numeric[j]) cell.classList.add('numeric')
                        if (widths[j]) cell.style.width = widths[j]
                        cell.setAttribute('data-column', `${j}`)
                        applyAttributes(cell, data[i]['_attributes'][j + 1])
                        cell.innerHTML = data[i][type == 'array' ? j : headers[j]]
                        if (allowColumn(headers[j])) {
                            row.appendChild(cell)
                        }
                    }
                }

                if (self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE') {
                    table.getElementsByTagName('tbody')[0].appendChild(row)
                } else {
                    table.appendChild(row)
                }
            }

            if (pageSize > 0 && numPages > 1) {
                const row = document.createElement(self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE' ? 'tr' : 'div')
                row.classList.add('table-row')
                const nav = document.createElement('nav')
                nav.classList.add('govuk-pagination')
                nav.setAttribute('role', 'navigation')
                nav.setAttribute('aria-label', 'results')

                let div
                if (currentPage != 1) {
                    div = document.createElement('div')
                    div.classList.add('govuk-pagination__prev')
                    const prev = createElementFromHTML(`
                        <a class="govuk-link govuk-pagination__link" href="javascript:;" rel="prev">
                            <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                                <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
                            </svg>
                            <span class="govuk-pagination__link-title">Previous</span>
                        </a>
                    `)
                    prev.onclick = function (e) {
                        self.page('-')
                    }
                    div.appendChild(prev)
                    nav.appendChild(div)
                }

                const ul = document.createElement('ul')
                ul.classList.add('govuk-pagination__list')

                let pages = []
                if (numPages > 7) {
                    if (currentPage < 4) {
                        pages = [1, 2, 3, '...', numPages]
                    } else if (currentPage > (numPages - 3)) {
                        pages = [1, '...', numPages - 2, numPages - 1, numPages]
                    } else {
                        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', numPages]
                    }
                } else {
                    pages = Array.from(Array(numPages), (_, i) => i + 1)
                }

                for (let i = 0; i < pages.length; i++) {
                    const li = document.createElement('li')
                    li.classList.add('govuk-pagination__item')
                    if (pages[i] == currentPage) li.classList.add('govuk-pagination__item--current')

                    if (pages[i] == '...') {
                        li.classList.add('govuk-pagination__item--ellipses')
                        li.innerHTML = '&ctdot;'
                    } else {
                        const link = document.createElement('a')
                        link.innerText = pages[i]
                        link.setAttribute('href', 'javascript:;')
                        link.setAttribute('aria-label', `Page ${pages[i]}`)
                        if (i == currentPage) link.setAttribute('aria-current', 'page')
                        link.classList.add('table-link', 'govuk-link', 'govuk-pagination__link')
                        link.onclick = function (e) {
                            self.page(pages[i])
                        }
                        li.appendChild(link)
                    }
                    ul.appendChild(li)
                }
                nav.appendChild(ul)

                if (currentPage != numPages) {
                    div = document.createElement('div')
                    div.classList.add('govuk-pagination__next')
                    const next = createElementFromHTML(`
                        <a class="govuk-link govuk-pagination__link" href="javascript:;" rel="next">
                            <span class="govuk-pagination__link-title">Next</span>
                            <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                                <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
                            </svg>
                        </a>
                    `)
                    next.onclick = function (e) {
                        self.page('+')
                    }
                    div.appendChild(next)
                    nav.appendChild(div)
                }
                row.appendChild(nav)

                if (self.dataTables[`data-table-${self.el}`]['tag'] == 'TABLE') {
                    table.getElementsByTagName('tbody')[0].appendChild(row)
                } else {
                    table.appendChild(row)
                }
            }
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
                    resize.classList.add('table-drag', `table-drag_${self.el}`)

                    resize.addEventListener('mousedown', function () {
                        const allResize = document.getElementsByClassName(`table-drag_${self.el}`)
                        const widths = self.dataTables[`data-table-${self.el}`]['widths']
                        for (let i = 0; i < allResize.length; i++) {
                            const resize = allResize[i]
                            const leftCol = resize.parentElement
                            const columnNumber = parseInt(resize.parentElement.getAttribute('data-column'), 10)
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
                                function relativeWidth(width) {
                                    return (width / tableWidth) * 100
                                }
                                const dx = e.clientX - x
                                const dy = e.clientY - y
                                const resizeDistance = relativeWidth(leftWidth) - (((leftWidth + dx) * 100) / tableWidth)
                                let leftCols = document.querySelectorAll(`#${self.el} [data-column="${columnNumber}"]`)
                                for (let i = 0; i < leftCols.length; i++) {
                                    widths[columnNumber] = `${relativeWidth(leftWidth) - resizeDistance}%`
                                    widths[columnNumber + 1] = `${relativeWidth(rightWidth) + resizeDistance}%`
                                    leftCols[i].style.width = widths[columnNumber]
                                    leftCols[i].nextElementSibling.style.width = widths[columnNumber + 1]
                                }

                                resize.style.cursor = 'col-resize'
                                document.body.style.cursor = 'col-resize'

                                leftCol.style.userSelect = 'none'
                                leftCol.style.pointerEvents = 'none'

                                rightCol.style.userSelect = 'none'
                                rightCol.style.pointerEvents = 'none'
                            }

                            const mouseUpHandler = function () {
                                self.dataTables[`data-table-${self.el}`]['widths'] = widths

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
        }

        function filterTable() {
            const table = document.getElementById(self.el)
            const rows = table.tagName == 'TABLE' ? table.rows : table.children
            if (!rows[0]) return
            const rowHeight = rows[0].getBoundingClientRect().height
            for (let i = 0; i < rows[0].children.length; i++) {
                let icons = tableIcons(rows[0], i)
                let icon = document.createElement('span')
                const column = rows[0].children[i].getAttribute('data-column')
                icon.classList.add('filter-icon', `filter-icon_${self.el}_${column}`)
                icon.innerHTML = `<svg height="${rowHeight - 6}" width="${rowHeight - 6}" viewBox="0 0 20 20"><polygon points="0,1 8,12 8,20 12,16 12,12 20,1" fill="#fff" stroke="#555" stroke-width="1" /></svg>`


                icon.onclick = function (e) {
                    if (document.getElementsByClassName(`filter_${self.el}_${column}`)[0].style.display == 'block') {
                        document.getElementsByClassName(`filter_${self.el}_${column}`)[0].style.display = 'none'
                        document.getElementsByClassName(`filter_${self.el}_${column}`)[0].parentElement.style.overflow = 'hidden'
                    } else {
                        //self.closeAllFilters(`filter_${self.el}_${column}`)
                        populateFilterValues(`${self.el}_${column}`)
                        document.getElementsByClassName(`filter_${self.el}_${column}`)[0].style.display = 'block'
                        document.getElementsByClassName(`filter_${self.el}_${column}`)[0].parentElement.style.overflow = 'visible'
                    }
                }
                icons.appendChild(icon)

                let filter = document.createElement('div')
                filter.classList.add('filter', `filter_${self.el}_${column}`)
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
            const column = cells.split('_')[1]
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
            const column = cells.split('_')[1]
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
            //const table = cells.split('_')[0]
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
                const column = rows[0].children[i].getAttribute('data-column')
                icon.classList.add('sort-icon', `sort-icon_${self.el}_${column}`)
                icon.innerHTML = `<svg height="${rowHeight - 6}" width="${rowHeight - 12}" viewBox="0 0 14 20"><polygon points="0,8 7,1 14,8" fill="#fff" stroke="#555" stroke-width="1" class="desc" /><polygon points="0,12 7,19 14,12" fill="#fff" stroke="#555" stroke-width="1" class="asc" /></svg>`
                icon.onclick = function (e) {
                    if (self.dataTables[`data-table-${self.el}`]['sort'] == column) {
                        self.dataTables[`data-table-${self.el}`]['sortOrder'] = self.dataTables[`data-table-${self.el}`]['sortOrder'] != 'desc' ? 'asc' : 'desc'
                    } else {
                        self.dataTables[`data-table-${self.el}`]['sort'] = column
                        self.dataTables[`data-table-${self.el}`]['sortOrder'] = 'asc'
                    }
                    createDataTable()
                }
                icons.appendChild(icon)
            }
        }

        function tableSummary() {
            // TODO
        }

        function removeHTML(html) {
            let doc = new DOMParser().parseFromString(html, 'text/html')
            return doc.body.textContent || ''
        }

        function isNumeric(x) {
            return !isNaN(parseFloat(x)) && isFinite(x)
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }

    page(pageNum) {
        let currentPage = this.dataTables[`data-table-${this.el}`]['page']
        if (pageNum == '+') {
            currentPage += 1
            const data = this.dataTables[`data-table-${this.el}`]['data']
            const pageSize = this.dataTables[`data-table-${this.el}`]['pageSize']
            const numPages = Math.ceil(data.length / pageSize)
            if (currentPage > numPages) currentPage = numPages
            pageNum = currentPage
        } else if (pageNum == '-') {
            currentPage -= 1
            if (currentPage < 1) currentPage = 1
            pageNum = currentPage
        }
        this.render(pageNum)
    }

    getData(format) {
        let self = this
        return new Promise((resolve, reject) => {
            const loop = () => this.loaded ? resolve(self.dataTables[`data-table-${self.el}`].data) : setTimeout(loop)
            loop()
        })
    }

    downloadData(format) {
        const data = this.dataTables[`data-table-${this.el}`]['data']
        return this.dataUtils.downloadData(data, `download.${format}`, format)
    }
}

new DataTable()
