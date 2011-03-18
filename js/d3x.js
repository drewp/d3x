function render(ace_js, ace_css, ace_html) {
    $("iframe").contents()[0].defaultView.sandbox_render(
        ace_js.getSession().getValue(),
        ace_css.getSession().getValue());
};

function d3x_init() {
    var timeout;

    var ace_js = ace.edit('js');
    var JavascriptMode = require("ace/mode/javascript").Mode;
    ace_js.setTheme("ace/theme/twilight");
    ace_js.getSession().setMode(new JavascriptMode);    

    var ace_css = ace.edit('css');
    var CSSMode = require("ace/mode/css").Mode;
    ace_css.setTheme("ace/theme/twilight");
    ace_css.getSession().setMode(new CSSMode);
    
    var do_render = function() {
        if(timeout) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(
            function() { render(ace_js, ace_css); },
            500);
    };

    ace_js.getSession().on('change', do_render);
    ace_css.getSession().on('change', do_render);

    $("#tabs").tabs({select: function(e, ui) {
                         ace_js.getSession();
                         ace_css.getSession();
                     }});

    window.sandbox_ready = do_render;
};

$(document).ready(d3x_init);
