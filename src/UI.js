// mucko-ui UI.js

function get_ui() {
    var KnobControl = require("./knob_control.js")
    var WaveformControl = require("./waveform_control.js")
    UI = {
        KnobControl: KnobControl,
        WaveformControl: WaveformControl,
    }
    return UI
}


module.exports = get_ui()
