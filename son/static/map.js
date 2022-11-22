class Map {

    // GeoJSON data from https://geoportal.statistics.gov.uk/
    // https://mapshaper.org/ to convert GeoJSON to topoJSON

    constructor(el, geodata, data, options) {
        this.el = el
        this.geodata = geodata
        this.data = data
        this.options = options

        this.renderMap()
    }

    renderMap() {
        let self = this
        const div = document.getElementById(this.el)
        const options = this.options || {}
        this.width = options.width || div.offsetWidth
        this.height = options.height || div.offsetHeight
        const nameField = options.nameField || ''
        const valueField = options.valueField || ''
        const palette = options.palette || ['#C6322A','#F2B06E', '#FFFEC6', '#B1D678', '#47934B']
        const domains = options.domains || palette.map(x => '')
        const legendDiv = options.legend || ''
        const tooltipDiv = options.tooltip || ''

        // Set up map projection, and position it
        const projection = d3.geoAlbers()
            .center([1.5, 55.2])
            .rotate([4.4, 0])
            .parallels([50, 50])
            .scale(3300)
            .translate([this.width / 2, this.height / 2])
        const path = d3.geoPath(projection)

        // set up SVG, viewport and clipping mask for map
        const svg = d3.select('#' + this.el)
            .append('svg:svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('viewBox', '0 0 ' + this.width + ' ' + this.height)
            .attr('perserveAspectRatio', 'xMinYMid')
            .attr('id', 'sizer-map')
            .attr('class', 'sizer')
            .on('click', reset)
        const mapContainer = svg.append('g')
            .attr('id', this.el + '__map')

        this.zoom = d3.zoom()
            .extent([[0, 0], [this.width, this.height]])
            .scaleExtent([1, 8])
            .on('zoom', zoomed)
        svg.call(this.zoom)

        let tooltip
        if (tooltipDiv != '') {
            tooltip = d3.select('#' + tooltipDiv)
            tooltip.html(' ')
        }

        this.svg = svg
        const files = [this.geodata, this.data]
        d3.json(files[0])
            .then(function (geodata) {
                if (files[1].substr(files[1].length - 3).toLowerCase() == 'csv') {
                    d3.csv(files[1])
                        .then(function (data) {
                            ready('', geodata, data)
                        })
                } else {
                    d3.json(files[1])
                        .then(function (data) {
                            ready('', geodata, data)
                        })
                }
            })

        let mapFeatures, map, content

        function ready(error, geodata, data) {
            const subunits = geodata.objects[Object.keys(geodata.objects)[0]] // e.g. ['International_Territorial_Level_2_(January_2021)_UK_BUC_V2']
            const londonunits = JSON.parse(JSON.stringify(subunits))
            londonunits.geometries = londonunits.geometries.filter(obj => {
                return obj.properties.ITL221NM.indexOf('London') > -1
            })

            mapFeatures = topojson.feature(geodata, subunits).features
            map = mapContainer.append('g').attr('class', 'subunits').selectAll('path').data(mapFeatures)

            // '#0F265C', '#EB652E','#3C3C3B', '#D4006D', '#1A9E1C', '#009BDA'
            //const palette = ['#C6322A','#F2B06E', '#FFFEC6', '#B1D678', '#47934B']
            //const domains = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE']
            const labelLength = domains.map(x => x.length).sort(function (a, b) { return b - a })[0]

            // make legend
            if (legendDiv != '') {
                //const color = d3.scalePoint() //.domain(domains).range(palette) //d3.scaleOrdinal()//[domains, swatch]) .   ???????

                const legend = d3.select('#' + legendDiv)
                    .append('svg:svg')
                    .attr('width', (labelLength * 15))
                    .attr('height', (domains.length * 25))
                    .attr('viewBox', '0 0 ' + (labelLength * 15) + ' ' + (domains.length * 25))
                    .attr('perserveAspectRatio', 'xMinYMid')
                    .attr('id', 'sizer-legend')
                    .attr('class', 'legend')
                    .selectAll('g')
                    .data(domains)
                    .enter().append('g')
                    .attr('transform', function (d, i) {
                        return 'translate(0,' + i * 25 + ')'
                    })

                legend.append('rect')
                    .attr('width', 20)
                    .attr('height', 20)
                    .style('fill', function (d, i) {
                        return palette[i]
                    })

                legend.append('text')
                    .attr('x', 30)
                    .attr('y', 6)
                    .attr('dy', '.5em')
                    .text(function (d, i) {
                        return d
                    })
            }

            map.enter()
                .append('path')
                .attr('d', path)
                .style('fill', function (d, i) {
                    return palette[getValue(d, nameField, valueField, data) - 1]  // rnd(0, palette.length - 1)
                })
                .style('stroke', 'grey')
                .style('stroke-width', '0.2')
                .attr('data-name', function (d) {
                    return getProperty(d, nameField)
                })
                .attr('data-value', function (d) {
                    return domains[getValue(d, nameField, valueField, data) - 1]
                })
                .attr('data-active', 'N')
                .on('click', clicked)
                .on('mouseover', highlight)
                .on('mouseout', resetHighlight)
        }

        function getProperty(d, p) {
            if (d.properties[p]) {
                return d.properties[p]
            }
            return ''
        }

        function getValue(d, p, v, data) {
            if (getProperty(d, p) != '') {
                const val = (data.data || data).filter(x => x[nameField] == getProperty(d, p))
                if (val && val[0][v]) {
                    return val[0][v]
                }
            }
            return ''
        }

        function rnd(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function zoomed({transform}) {
            mapContainer.attr('transform', transform)
        }

        function reset() {
            resetMap()
            self.svg.transition().duration(750).call(
                self.zoom.transform,
                d3.zoomIdentity,
                d3.zoomTransform(self.svg.node()).invert([self.width / 2, self.height / 2])
            )

            if (tooltipDiv) {
                tooltip.style('visibility', 'hidden')
            }
        }

        function resetMap() {
            self.svg.selectAll('path').transition().style('opacity', 1)
            self.svg.selectAll('path').attr('data-active', 'N')
        }

        function highlight(event) {
            self.svg.selectAll('path[data-active="N"]').style('opacity', 0.6)
            d3.select(this).transition().style('opacity', 1)
        }

        function resetHighlight(event) {
            svg.selectAll('path').style('opacity', 1)
        }

        function clicked(event, d) {
            var [[x0, y0], [x1, y1]] = path.bounds(d)
            event.stopPropagation()
            self.svg.selectAll('path').transition().style('opacity', 0.6)
            d3.select(this).transition().style('opacity', 1)
            self.svg.selectAll('path').attr('data-active', 'N')
            d3.select(this).attr('data-active', 'Y')

            self.svg.transition().duration(750).call(
                self.zoom.transform,
                d3.zoomIdentity
                    .translate(self.width / 2, self.height / 2)
                    .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / self.width, (y1 - y0) / self.height)))
                    .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
                d3.pointer(event, self.svg.node())
            )

            if (tooltipDiv) {
                tooltip.html('<h2>' + d3.select(this).attr('data-name') + '</h2><h3>Value: ' + d3.select(this).attr('data-value') + '</h3>')
                tooltip.style('visibility', 'visible')

            }
        }

        function csvJSON(csv) {
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




        /*/ this code automatically resizes the content according to the viewport dimensions. It has been commented out for Codepen, but can be used elsewhere
        var resizeMap = $('#sizer-map'),
            aspectMap = resizeMap.width() / resizeMap.height(),
            containerResizeMap = resizeMap.parent(),
            resizeLegend = $('#sizer-legend'),
            aspectLegend = resizeLegend.width() / resizeLegend.height(),
            containerResizeLegend = $('#electionLegend')

        $(window).on('resize', function () {
            var targetContainerResizeMapWidth = containerResizeMap.width()
            resizeMap.attr('width', targetContainerResizeMapWidth)
            resizeMap.attr('height', Math.round(targetContainerResizeMapWidth / aspectMap))
            var targetContainerResizeLegendWidth = containerResizeLegend.width()
            resizeLegend.attr('width', targetContainerResizeLegendWidth)
            resizeLegend.attr('height', Math.round(targetContainerResizeLegendWidth / aspectLegend))
        }).trigger('resize')*/
    }

    zoomIn() {
        let mapContainer = d3.select('#' + this.el + '__map')
        let transform = mapContainer.attr('transform')
        let x, y, s
        if (transform == null) {
            x = this.width * -0.1
            y = this.height * -0.1
            s = 1.2
        } else {
            transform = transform.replace(/, /, ',').split(' ')
            let translate = transform[0].match(/\(([^)]+)\)/)[1].split(',').map(x => parseFloat(x, 10))
            let scale = parseFloat(transform[1].match(/\(([^)]+)\)/)[1], 10)
            x = translate[0] - (this.width * (scale * 1.2) * 0.1)
            y = translate[1] - (this.height * (scale * 1.2) * 0.1)
            s = scale * 1.2
        }
        this.svg.transition().duration(450).call(this.zoom.transform, d3.zoomIdentity.translate(x, y).scale(s))
    }

    zoomOut() {
        let mapContainer = d3.select('#' + this.el + '__map')
        let transform = mapContainer.attr('transform')
        let x, y, s
        if (transform == null) {
            x = this.width * 0.1
            y = this.height * 0.1
            s = 1 / 1.2
        } else {
            transform = transform.replace(/, /, ',').split(' ')
            let translate = transform[0].match(/\(([^)]+)\)/)[1].split(',').map(x => parseFloat(x, 10))
            let scale = parseFloat(transform[1].match(/\(([^)]+)\)/)[1], 10)
            x = translate[0] + (this.width * (scale / 1.2) * 0.1)
            y = translate[1] + (this.height * (scale / 1.2) * 0.1)
            s = scale / 1.2
        }
        this.svg.transition().duration(450).call(this.zoom.transform, d3.zoomIdentity.translate(x, y).scale(s))
    }
}
