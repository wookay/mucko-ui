// mucko-ui knob_control.js

var mucko = require("mucko")
var Base = mucko.Base


function get_knob_control() {
    if (typeof window == "undefined") {
        var svgknob = require("../deps/svg-knob.js")
    } else {
        var svgknob = require("svg-knob")
    }
    Knob = function (knob_el, value, options) {
        cursor_color = '#1e969a'
        opt = {
        value_min: 0,
        value_max: 100,
        value_resolution: 1,
        mouse_wheel_acceleration: 1,
        bg_radius: 40,
        bg_border_width: 1.5,
        track_bg_radius: 0,
        track_bg_width: 0,
        track_radius: 0,
        track_width: 0,
        cursor_radius: 26,
        cursor_length: 6,
        cursor_width: 10,
        cursor_color: cursor_color,
        cursor_color_init: cursor_color,
        linecap: "round",
        font_size: 18,
        bg: true,
        track_bg: false,
        track: true,
        cursor: true,
        value_text: true,
        value_position: 50,
        initial_value: 0,
        onchange: undefined,
        }
        Base.mergeI(opt, options || {})
        knob = svgknob.Knob(knob_el, opt)
        knob.value = value
        if (!Base.Meta.isundef(opt.onchange)) {
            opt.onchange(value)
        }
        return knob
    }
    var KnobControl = {
        Knob: Knob,
    }
    return KnobControl
}


module.exports = get_knob_control()
