// mucko.ui test_ui.js

var mucko = require("mucko")
var Test = mucko.Test
var Base = mucko.Base
mucko.UI = require("../index.js").UI


function inbrowser_UI() {
}


Test.test_ui = function () {
    assert_true(Base.Meta.isa(mucko.UI, Object))
    if (Base.Sys.isbrowser()) {
        inbrowser_UI()
    } else {
    }
}
