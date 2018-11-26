// mucko.ui UI.js

function get_ui() {
    var KnobControl = require("./knob_control.js")
    UI = {
        KnobControl: KnobControl,
    }
    return UI
}


module.exports = get_ui()
