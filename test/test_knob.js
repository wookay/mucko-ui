// mucko.ui test_knob.js

var mucko = require("mucko")
var Test = mucko.Test
var Base = mucko.Base
mucko.UI = require("../index.js").UI


function inbrowser_knob() {
}


Test.test_knob = function () {
    assert_true(Base.Meta.isa(mucko.UI.Knob, Object)) 
    if (Base.Sys.isbrowser()) {
        inbrowser_knob()
    } else {
    }
}
