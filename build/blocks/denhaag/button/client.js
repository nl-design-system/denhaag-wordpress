document.addEventListener("DOMContentLoaded",(function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"denhaag-button",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"clicked",t=document.getElementsByClassName(n);if(t&&0!==t.length){var a="".concat(n,"--").concat(e);Array.from(t).forEach((function(n){n.addEventListener("click",(function(){return n.classList.add(a)})),n.addEventListener("mouseleave",(function(){return n.classList.remove(a)}))}))}}()}));
//# sourceMappingURL=client.js.map