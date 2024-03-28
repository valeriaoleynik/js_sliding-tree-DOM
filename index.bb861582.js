var e=document.querySelector(".tree");e.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");e.prepend(t),t.append(t.nextSibling)}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.parentNode.querySelector("ul");t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.bb861582.js.map
