/**
 * Browser class
 */
Orange.Browser = { 
    init: function () {    
        var $version = $.browser.version,
            $vIe = 10.0,
            $testbrowser = $.browser.msie,
            $text = 'Bonjour.<br/> Votre navigateur web n\'est pas à jour (Internet Explorer ' + $version + ').Mettez votre navigateur à jour pour plus de sécurité, de confort et une expérience optimale sur ce site.</b>';
        if ($testbrowser && $version < $vIe) {
            $('body').append('<div class="buorg" id="buorg"><div>' + $text + '</div></div>'); 
            this.onshow();
            this.addOverlayCss();
        }
    },
    onshow: function () {
        var e = document.createElement("div");
        e.setAttribute("id", "buorgoverlay");
        e.style.width = document.body.clientWidth + 'px';
        e.style.height = document.body.clientHeight + 'px'; 

        document.body.appendChild(e);
        document.body.style.marginTop = '0';
    },
    addOverlayCss: function (e) {
        var style = "body .buorg {" +
                "position:absolute;" +
                "top: 45%;" +
                "width: 70%;" + 
                "left:15%;" +
                "border-bottom:1px solid #A29330;" +
                "background:#ff7900 no-repeat 12px 25px;" +
                "z-index: 999999999;" +
                "font-size: 16px;" +
                "font-weight: 700;" +
                "}" +
                "body .buorg div, body .buorg li { font-size: 20px; line-height: 24px }" +
                "body .buorg li { list-style: inside; }" +
                "body .buorg div {" +
                "padding:20px 36px 20px 40px;" +
                "}" +
                "#buorgclose{display:none;}" +
                "#buorgoverlay {" +
                "position: absolute;" +
                "top: 0;" +
                "left: 0;" +
                "z-index: 99999999;" +
                "width: 100%;" +
                "height: 100%;" +
                "background: #000;" +
                "opacity: 1;" +
                
                "}";
        this.addInlineStyle(style);
    },
    addInlineStyle: function (style) {
        var sheet = document.createElement("style");
        document.getElementsByTagName("head")[0].appendChild(sheet);
        try {
            sheet.innerText = style;
            sheet.innerHTML = style;
        } catch (e) {
            try {
                sheet.styleSheet.cssText = style;
            }
            catch (e) {
                return;
            }
        }
    }

}; 