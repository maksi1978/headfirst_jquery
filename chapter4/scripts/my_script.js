$(document).ready(function() {
    var v = false;
    $("button#vegOn").click(function() {
        if (v == false) {
            v = true;
        }
    });
    $("button#restoreMe").click(function() {
        if (v == true) {
            v = false;
        }
    });
});