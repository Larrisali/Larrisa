(function(window){var svgSprite='<svg><symbol id="icon-iconset0196" viewBox="0 0 1024 1024"><path d="M878.592 222.208 503.808 222.208c-84.992 0-84.992-84.992-166.912-84.992L128 137.216c-47.104 0-84.992 38.912-84.992 84.992l0 166.912 0 417.792c0 47.104 37.888 84.992 84.992 84.992l750.592 0c47.104 0 84.992-38.912 84.992-84.992L963.584 303.104C960.512 256 925.696 222.208 878.592 222.208zM921.6 801.792c0 21.504-17.408 43.008-43.008 43.008L128 844.8c-21.504 0-43.008-17.408-43.008-43.008L84.992 388.096l831.488 0 0 413.696L921.6 801.792zM921.6 346.112 84.992 346.112 84.992 222.208c0-21.504 17.408-43.008 43.008-43.008l208.896 0c64.512 0 64.512 84.992 166.912 84.992l375.808 0c21.504 0 43.008 17.408 43.008 43.008L922.624 346.112z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)