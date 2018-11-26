// mucko-ui waveform_control.js

var mucko = require("mucko")
var Base = mucko.Base


function get_waveform_control() {
    var d3 = require("d3")
    var waveformdata = require("waveform-data")

    function Waveform(elem_id, data) {
        waveform = waveformdata.create(data)
        // Base.println("waveform ", waveform)
        svg = d3.select(elem_id)
        width = 180
        height = 80
        n = data.length
        var x = d3.scaleLinear()
                  .domain([0, n - 1])
                  .range([0, width])
        var y = d3.scaleLinear()
                  .domain([-12, 12])
                  .range([height, 0])
        datum = waveform.max
        margin = {top: 0, right: 5, bottom: 0, left: 5}
        g = svg
            .attr("id", "eq")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        var line = d3.line()
            .curve(d3.curveCatmullRom)
            .x(function(d, i) { return x(i) })
            .y(function(d, i) { return y(d) })
        g.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height)
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + y(0) + ")")
            .call(d3.axisBottom(x))
        path = g.append("g")
            .attr("clip-path", "url(#clip)")
            .append("path")
            .datum(datum)
            .attr("class", "line")
            .attr("d", line)
    }

    var WaveformControl = {
        Waveform: Waveform,
    }
    return WaveformControl
}


module.exports = get_waveform_control()
