var SANDBOX_SCRIPTS = [
    "deps/jquery/jquery-1.5.1.min.js",
    "deps/d3/d3.min.js",
    "deps/d3/d3.behavior.min.js",
    "deps/d3/d3.csv.min.js",
    "deps/d3/d3.geo.min.js",
    "deps/d3/d3.geom.min.js",
    "deps/d3/d3.layout.min.js",
    "deps/d3/d3.time.min.js"
];

function load_scripts() {
    for (i in SANDBOX_SCRIPTS) {
        var script = SANDBOX_SCRIPTS[i];
        document.write("<script src=\"" + script + "\"></script>");
    };
    document.write("<script>$(document).ready(sandbox_init);</script>");
};

load_scripts();

function sandbox_init() {
    parent.sandbox_ready();
};

function sandbox_render(js, css) {
    var s = document.createElement('style');
    s.innerHTML = css;
    $("head style").replaceWith(s);
    
    $("body").empty();
    window.eval(js);
};
