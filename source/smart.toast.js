
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-toast-item",class extends Smart.ContentElement{static get properties(){return{showCloseButton:{value:!1,type:"boolean"},iconClass:{value:null,type:"string?"},itemClass:{value:null,type:"string?"},opened:{value:!1,type:"boolean"}}}static get styleUrls(){return["smart.toast.css"]}template(){return'<div id="container" role="presentation">\n                    <div class="smart-toast-item-header">\n                        <span class="smart-toast-item-close-button" role="button" aria-label="Close"></span>\n                    </div>\n                    <div class="smart-toast-item-container" id="itemContainer">\n                        <span class="smart-toast-item-icon" role="presentation"></span>\n                        <span class="smart-toast-item-content" id="itemContent" inner-h-t-m-l="[[innerHTML]]">\n                            <content></content>\n                        </span>\n                    </div>\n                </div>'}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n)}render(){const e=this,t=e.iconClass;e.setAttribute("role","alert"),e.itemClass&&(e.className+=" "+e.itemClass),e.$.itemContainer.firstElementChild.className+=" "+(t||"default"),super.render()}appendChild(e){const t=this;if(e){if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}t.$.itemContent.appendChild(e)}else t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"appendChild",node:"node"}))}refresh(){}insertBefore(e,t){const n=this;if(e){if(!n.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(n,e.concat(Array.prototype.slice.call(arguments)))}n.$.itemContent.insertBefore(e,t||null)}else n.error(n.localize("invalidNode",{elementType:n.nodeName.toLowerCase(),method:"insertBefore",node:"node"}))}removeChild(e){const t=this;if(e){if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}t.$.itemContent.removeChild(e)}else t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"removeChild",node:"node"}))}}),Smart("smart-toast",class extends Smart.ContentElement{static get properties(){return{appendTo:{value:null,type:"any"},autoClose:{value:!1,type:"boolean"},autoCloseDelay:{value:3e3,type:"number"},autoOpen:{value:!1,type:"boolean"},iconClass:{value:null,type:"string?"},itemClass:{value:null,type:"string?"},itemTemplate:{value:null,type:"string?"},modal:{value:!1,type:"boolean"},position:{allowedValues:["top-left","top-right","bottom-left","bottom-right"],value:"top-right",type:"string"},showCloseButton:{value:!1,type:"boolean"},type:{allowedValues:["info","warning","success","error","mail","time",null],value:"info",type:"string?"},value:{value:"",type:"any"}}}get enableShadowDOM(){return!1}template(){return""}propertyChangedHandler(e,t,n){const o=this;switch(e){case"value":{const e=o._instances[o._instances.length-1];e&&(n instanceof HTMLElement?e.appendChild(n):(e.shadowRoot?e.shadowRoot:e).querySelector(".smart-toast-item-content").innerHTML=n);break}case"appendTo":case"modal":case"position":o._handleContainers();break;case"rightToLeft":case"showCloseButton":case"type":o._instances&&o._instances.forEach((t=>{if(t[e]=n,"type"===e&&n){const e=t.querySelector(".smart-toast-item-icon");["info","warning","success","error","mail","time"].forEach((e=>{t.classList.remove(e)})),t.classList.add(n),e&&e.setAttribute("aria-label",n+" icon")}}));break;default:super.propertyChangedHandler(e,t,n)}}attached(){super.attached();const e=this,t=["TopLeft","TopRight","BottomLeft","BottomRight","Custom","Modal"];for(let n=0;n<t.length;n++){const o=e.$["toastContainer"+t[n]];o&&o.children.length&&("Custom"===t[n]?e._appendTo.appendChild(e._container):e.getShadowRootOrBody().appendChild(o))}}detached(){super.detached();const e=this,t=["TopLeft","TopRight","BottomLeft","BottomRight","Custom","Modal"];for(let n=0;n<t.length;n++){const o=e.$["toastContainer"+t[n]];o&&(e._removeContainerListeners(o),o.remove()),e.closeAll()}}ready(){super.ready()}render(){const e=this;if(!e.value||e.value instanceof HTMLElement){const t=e.querySelectorAll(".smart-element");if(t.length>0){for(let e=0;e<t.length;e++){const n=t[e],o=document.createElement(n.nodeName+"-clone");o.innerHTML=n.innerHTML,o.className=n.className,n.parentElement.insertBefore(o,n),n.remove()}const n=document.createElement("div");for(;e.childNodes.length;)n.appendChild(e.firstChild);e.value=n.innerHTML.replace(/-clone/gi,"")}else e.value=e.innerHTML}else e.innerHTML=e.value;e._instances=[],e.autoOpen&&e.open(),super.render()}closeAll(){const e=this,t=e._instances;if(t&&t.length)for(var n=e._instances.length-1;n>-1;n--)e._close(e._instances[n])}closeItem(e){const t=this;e&&0!==t._instances.length&&("string"==typeof e?e=document.getElementById(e):e instanceof HTMLElement&&(e=e.closest("smart-toast-item")),e&&-1!==t._instances.indexOf(e)&&t._close(e))}closeLast(){const e=this;e._instances.length>0&&e._close(e._instances[e._instances.length-1])}get items(){const e=this._instances;return this.isReady&&e&&e.length?e.slice():[]}toggle(){const e=this;void 0===e.opened&&(e.opened=!1,e.autoOpen&&(e.opened=!0)),e.opened=!e.opened,e.opened?e.open():e.closeAll()}open(e,t){const n=this;if(n.disabled)return;void 0===e&&(e=n.value),t||(t=n.type),n._handleContainers();let o=document.createElement("smart-toast-item");o.iconClass=n.iconClass,o.itemClass=n.itemClass,e instanceof HTMLElement?o.appendChild(e):o.innerHTML=n._handleItemTemplate(e)||e,o.rightToLeft=n.rightToLeft,o.theme=n.theme,o.animation=n.animation,o.showCloseButton=n.showCloseButton;for(let e=0;e<n.classList.length;e++)n.classList[e].indexOf("smart-")<0&&o.classList.add(n.classList[e]);if(n._container.appendChild(o),t){const e=o.querySelector(".smart-toast-item-icon");o.classList.add(t),e&&e.setAttribute("aria-label",t+" icon")}return o._parent=n._container,n._instances.push(o),n.hasAttribute("smart-blazor")?n.$.fireEvent("open",{instance:o.id||""}):n.$.fireEvent("open",{instance:o}),setTimeout((function(){o.opened=!0}),10),n.autoClose&&(o._autoCloseTimeout=setTimeout((function(){n._close(o)}),n.autoCloseDelay)),o}_containerClickHandler(e){const t=this,n=e.target.shadowRoot?e.composedPath()[0]:e.target,o=n.closest(".smart-toast-item-close-button"),s=(n.getRootNode().host||n).closest("smart-toast-item");n.closest('[data-dismiss="toast"]')&&(t.opened=!1,t._close(s)),o||s?(t.hasAttribute("smart-blazor")?t.$.fireEvent("itemClick",{instance:s.id||"",target:n.id||""}):t.$.fireEvent("itemClick",{instance:s,target:n}),o&&t._close(s)):t.modal&&t.closeAll()}_close(e){const t=this;function n(){clearTimeout(e._autoCloseTimeout),t.hasAttribute("smart-blazor")?t.$.fireEvent("close",{instance:e.id||""}):t.$.fireEvent("close",{instance:e}),e.parentNode&&e.parentNode.removeChild(e);const n=e._parent;n&&!n.children.length&&n.parentElement&&(t._removeContainerListeners(n),n.parentElement.removeChild(n))}if(t._instances.indexOf(e)>-1){const o=window.getComputedStyle(e,null).getPropertyValue("transition-duration");let s=o.indexOf("ms")>-1?parseInt(o):1e3*parseFloat(o);isNaN(s)&&(s=0),e.opened=!1,t._instances.splice(t._instances.indexOf(e),1),s?setTimeout(n,s):n()}}_handleContainers(){const e=this;let t;if("string"==typeof e.appendTo?t=document.getElementById(e.appendTo):e.appendTo instanceof HTMLElement&&(t=e.appendTo),e._container=e._getToastContainer(t),t)return e._appendTo=t,void(e._container.parentElement||(e._addContainerListeners(e._container),e._appendTo.appendChild(e._container)));t||!e.$.toastContainerCustom||e.$.toastContainerCustom.children.length||(e._removeContainerListeners(e.$.toastContainerCustom),e.$.toastContainerCustom.parentElement&&e.$.toastContainerCustom.parentElement.removeChild(e.$.toastContainerCustom)),e._container.parentElement||(e._addContainerListeners(e._container),e.getShadowRootOrBody().appendChild(e._container))}_addContainerListeners(e){const t=this;if(!e)return;const n=t["$"+e.getAttribute("smart-id")];n&&(n.listen("click",t._containerClickHandler.bind(t)),n.listen("swipeleft",t._swipeHandler.bind(t)),n.listen("swiperight",t._swipeHandler.bind(t)),n.listen("swipetop",t._swipeHandler.bind(t)),n.listen("swipebottom",t._swipeHandler.bind(t)))}_removeContainerListeners(e){if(!e)return;const t=this["$"+e.getAttribute("smart-id")];t&&(t.unlisten("click"),t.unlisten("swipeleft"),t.unlisten("swiperight"),t.unlisten("swipetop"),t.unlisten("swipebottom"))}_getToastContainer(e){const t=this;let n;e?n="Custom":t.modal?n="Modal":(n=Smart.Utilities.Core.toCamelCase(t.position),n=n.charAt(0).toUpperCase()+n.slice(1));const o="toastContainer"+n;if(!t.$[o]){let e=document.createElement("div");e.setAttribute("smart-id",o),e.classList.add("smart-toast-container"),e.classList.add("smart-toast-container-"+Smart.Utilities.Core.toDash(n)),t.$["toastContainer"+n]=e,t["$toastContainer"+n]=Smart.Utilities.Extend(e)}return t.$[o]}_handleItemTemplate(e){const t=this;let n=t.itemTemplate;if("content"in document.createElement("template")){if(e||(e=t.value),!n)return e;if(n=document.getElementById(n),null!==n&&"content"in n)return n.innerHTML.replace(/{{\w+}}/g,e);t.error(t.localize("invalidTemplate",{elementType:t.nodeName.toLowerCase(),property:"template"}))}else t.error(t.localize("htmlTemplateNotSuported",{elementType:t.nodeName.toLowerCase()}))}_swipeHandler(e){const t=this,n=e.originalEvent.target.closest("smart-toast-item");e.stopPropagation(),n&&(t.hasAttribute("smart-blazor")?t.$.fireEvent(e.type,{instance:n.id||""}):t.$.fireEvent(e.type,{instance:n}))}});