/**
 * Generic script for displaying a "Browser outdated" message to users
 * Displays an overlay and a message including the Chrome Frame
 *
 * @see http://www.browser-update.org/fr/
 */
var $buoop = {
        vs: {i: 9, f: 40, o: 30, s: 7, c: 40},
        api: 4,
	reminder: 0,
	newwindow: true, 
	text:
		"Bonjour. " +
		"Votre navigateur web n\'est pas à jour  (%s). " +
		"Mettez votre navigateur à jour pour plus de sécurité, de confort et une expérience optimale sur ce site.</b>",
        url:"https://www.browser-update.org/fr/update.html?force_outdated=true",
	onshow: function(infos){
		var e = document.createElement("div");
		e.setAttribute("id", "buorgoverlay");
		e.style.width = document.body.clientWidth + 'px';
		e.style.height = document.body.clientHeight + 'px';
		document.body.appendChild(e);
		document.body.style.marginTop = '0';
		$buoop.addOverlayCss();
//		var chromeFrame = document.getElementById("buorgchromeframe");
//		if (typeof(chromeFrame) !== 'undefined' && chromeFrame !== null) {
//			chromeFrame.onclick = function(e) {
//				$buoop.stopPropagation(e);
//				return true;
//			};
//		}
//		document.getElementById("buorgclose").onclick = $buoop.closeHandler;
//		document.getElementById("buorgoverlay").onclick = $buoop.closeHandler;
	},
	closeHandler: function(e) {
		$buoop.stopPropagation(e);
		document.getElementById("buorg").style.display = "none";
		document.getElementById("buorgoverlay").style.display = "none";
		return true; 
	},
	stopPropagation: function(e) {
		var e = e || window.event;
		if (e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	},
	addOverlayCss: function(e) {
		var style = "body .buorg {" +
				"position:absolute;" +
				"top: 45%;" +
				"width: 70%;" +
				"left:15%;" +
				"border-bottom:1px solid #A29330;" +
				"background:#ff7900 no-repeat 12px 25px;" +
				"z-index: 999999999;" +
                                "font-size: 16px;"+
                                "font-weight: 700;"+
			"}" +
			"body .buorg div, body .buorg li { font-size: 20px; line-height: 24px }" +
			"body .buorg li { list-style: inside; }" +
			"body .buorg div {" +
				"padding:20px 36px 20px 40px;" +
			"}" +
                        "#buorgclose{display:none;}"+
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
		$buoop.addInlineStyle(style);
	},
	addInlineStyle: function(style) {
		var sheet = document.createElement("style");
		document.getElementsByTagName("head")[0].appendChild(sheet);
		try {
			sheet.innerText=style;
			sheet.innerHTML=style;
		} catch(e) {
			try {
				sheet.styleSheet.cssText=style;
			}
			catch(e) {
				return;
			}
		}
	}
};
$buoop.ol = window.onload;
window.onload = function(){
	try {if ($buoop.ol) $buoop.ol();}catch (e) {}
	var e = document.createElement("script");
	e.setAttribute("type", "text/javascript");
	e.setAttribute("src", "/js/update.min.js");
	document.body.appendChild(e);
};