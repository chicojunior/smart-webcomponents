
<<<<<<< HEAD
/* Smart HTML Elements v5.1.0 (2019-Dec) 
=======
/* Smart HTML Elements v4.6.0 (2019-Oct) 
>>>>>>> origin/master
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-tooltip",class extends Smart.ContentElement{static get properties(){return{arrow:{value:!1,type:"boolean"},arrowDirection:{allowedValues:["bottom","top","left","right"],value:"bottom",type:"string"},delay:{value:0,type:"number"},messages:{extend:!0,value:{en:{invalidSelector:"{{elementType}}: \"{{property}}\" must be a String, an HTMLElement or null.",htmlTemplateNotSuported:"{{elementType}}: Browser doesn't support HTMLTemplate elements.",invalidTemplate:"{{elementType}}: \"{{property}}\" property accepts a string that must match the id of an HTMLTemplate element from the DOM.",invalidNode:"{{elementType}}: Invalid parameter \"{{node}}\" when calling {{method}}."}},type:"object"},offset:{value:[],type:"array"},openMode:{allowedValues:["click","focus","hover","manual"],value:"hover",type:"string"},position:{allowedValues:["bottom","top","left","right","absolute","auto"],value:"top",type:"string"},selector:{value:null,type:"any?"},tooltipTemplate:{value:null,type:"any"},value:{value:"",type:"string",reflectToAttribute:!1},visible:{value:!1,type:"boolean"}}}static get styleUrls(){return["smart.tooltip.css"]}template(){return`<div id="container" role="presentation">
                    <div id="content" class="smart-tooltip-content" inner-h-t-m-l="[[innerHTML]]" role="presentation">
                        <content></content>
                    </div>
<<<<<<< HEAD
                </div>`}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;let e;"openMode"===a?(d.close(),d._handleEventListeners(b),d._handleResize()):"selector"===a?(d._oldOwnerElement=d._ownerElement,d._handleSelector(c),d._handleEventListeners()):"tooltipTemplate"===a?d._handleTemplate(b):"value"===a?d.tooltipTemplate?d._handleTemplate():d.$.content.innerHTML=d.value:"visible"===a?(e=c?"open":"close",d.$.fireEvent(e,{owner:d._ownerElement},d.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0)):void 0;d._applyPosition()}ready(){const a=this;super.ready(),a.setAttribute("role","tooltip"),a._isParentPositionStatic="static"===window.getComputedStyle(a.parentElement||document.querySelector("body")).position,a._handleSelector(a.selector),a.visible&&a._applyPosition(),a._handleEventListeners(),a._handleResize(),a.value=a.$.content.innerHTML=a.value?a.value:a.innerHTML,a._handleTemplate()}appendChild(a){const b=this;if(!b.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(b,a.concat(Array.prototype.slice.call(arguments)))}return a?void(b.$.content.appendChild(a),b._applyPosition()):void b.error(b.localize("invalidNode",{elementType:b.nodeName.toLowerCase(),method:"appendChild",node:"node"}))}close(){const a=this;a._isOpening&&clearTimeout(a._isOpening);a.visible&&(a.$.fireEvent("close",{owner:a._ownerElement},a.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0),a.visible=!1)}insertBefore(a,b){const c=this;if(!c.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(c,a.concat(Array.prototype.slice.call(arguments)))}return a&&b?void(c.$.content.insertBefore(a,b),c._applyPosition()):void c.error(c.localize("invalidNode",{elementType:c.nodeName.toLowerCase(),method:"insertBefore",node:"newNode/referenceNode"}))}open(){const a=this;a.disabled||a.readonly||a.visible||(a._isOpening=setTimeout(function(){a._applyPosition(),a.$.fireEvent("open",{owner:a._ownerElement},a.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0);const b=a.context;a.context=a,a.visible=!0,a.context=b},a.delay))}removeChild(a){const b=this;if(!b.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(b,a.concat(Array.prototype.slice.call(arguments)))}return a?void(b.$.content.removeChild(a),b._applyPosition()):void b.error(b.localize("invalidNode",{elementType:b.nodeName.toLowerCase(),method:"removeChild",node:"node"}))}toggle(){const a=this;a.visible?a.close():a.open()}_getDomElementPosition(a){let b=[],c=a.parentElement;for(;c&&"BODY"!==c.nodeName;){if(b.push(c),this.enableShadowDOM&&!c.parentElement){c=c.getRootNode().host;continue}c=c.parentElement}return b}_getElementAndOwnerRelation(a){const b=this._getDomElementPosition(a||this),c=b.length;let d=null;for(let e,f=0;f<c;f++)if(e=window.getComputedStyle(b[f]),"static"!==e.getPropertyValue("position")){d=b[f];break}return d}_applyPosition(){const a=this;if(!a._ownerElement)return;if(!a.parentElement)return;a._isParentPositionStatic="static"===window.getComputedStyle(a.parentElement).position;const b=a._ownerElement.getBoundingClientRect(),c=a.parentElement?a.parentElement.getBoundingClientRect():{top:0,left:0};let d,e;a.parentElement&&"BODY"===a.parentElement.nodeName.toUpperCase()?(d=b.top+window.scrollY,e=b.left+window.scrollX):(d=b.top-c.top,e=b.left-c.left);const f={top:b.top,left:b.left,nonStaticParent:a._getElementAndOwnerRelation()},g=a.position;let h;switch(g){case"auto":case"bottom":case"top":case"left":case"right":{const b=a["_position"+g.charAt(0).toUpperCase()+g.slice(1)](e,d,f);d=b.top,e=b.left,h=b.translate;break}case"absolute":a.style.top=a.style.left="",d=e=0;}h?a.$.container.style.setProperty("--smart-tooltip-arrow-translate",h+"px"):a.$.container.style.removeProperty("--smart-tooltip-arrow-translate"),d===void 0||isNaN(d)||(d+=parseInt(a.offset[1])||0,a.style.top=d+"px"),e===void 0||isNaN(e)||(e+=parseInt(a.offset[0])||0,a.style.left=e+"px")}_positionAuto(a,b,c){var d=Math.max,e=Math.min;const f=this;let g,h=f.parentElement;for(;h;){if("hidden"===getComputedStyle(h).getPropertyValue("overflow")){g=h;break}h=h.parentElement}g||(g=document.body);const i=g.getBoundingClientRect(),j=parseFloat(window.getComputedStyle(f).getPropertyValue("--smart-tooltip-arrow-width"))||0;let k=f._positionTop(a,b,c),l=c.nonStaticParent,m=f.offsetWidth/2-j,n=0,o=0;if(l){const a=l.getBoundingClientRect();n=a.top,o=a.left}return k.top+n>=i.top?(b=k.top,a=d(i.left-o,k.left+e(0,i.right-(k.left+o+f.offsetWidth))),{left:a,top:b,translate:d(-m,e(m,k.left-a))}):(k=f._positionBottom(a,b,c),k.top+f.offsetHeight+n<=i.bottom)?(b=k.top,a=d(i.left-o,k.left+e(0,i.right-(k.left+o+f.offsetWidth))),{left:a,top:b,translate:d(-m,e(m,k.left-a))}):(k=f._positionLeft(a,b,c),b=k.top,m=f.offsetHeight/2-j,b=d(i.top-n,k.top+e(0,i.bottom-(k.top+n+f.offsetHeight))),k.left+o>=i.left?a=k.left:(k=f._positionRight(a,b,c),a=k.left),{left:a,top:b,translate:d(-m,e(m,k.top-b))})}_getRelativeParentOffset(a){const b=this,c=b._ownerElement;let d=b._getElementAndOwnerRelation(c),e=0,f=0;if(!a)return{left:f,top:e};for(;a!==d;)e+=d.offsetTop,f+=d.offsetLeft,d=b._getElementAndOwnerRelation(d);return{left:f,top:e}}_positionTop(a,b,c){const d=this,e=d._getRelativeParentOffset(c.nonStaticParent);if(d.set("arrowDirection","bottom"),null===c.nonStaticParent)return b=c.top+window.scrollY-d.offsetHeight,a=c.left+window.scrollX-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a+e.left,top:b+e.top};if(d._isParentPositionStatic){if(b=d._ownerElement.offsetTop-d.offsetHeight,a=d._ownerElement.offsetLeft-d.offsetWidth/2+d._ownerElement.offsetWidth/2,d._ownerElement instanceof SVGElement){const c=d._ownerElement.getBoundingClientRect(),e=d._ownerElement.parentNode.getBoundingClientRect();b=c.top-e.top-d.offsetHeight/2,a=c.left-d.offsetWidth/2+e.left/2}return{left:a+e.left,top:b+e.top}}if(d._ownerElement instanceof SVGElement&&d._ownerElement.parentElement){const c=d._ownerElement.getBoundingClientRect(),f=d._ownerElement.parentNode.getBoundingClientRect();return b=c.top-f.top-d.offsetHeight,a=c.left-f.left-d.offsetWidth/2+c.width/2,{left:a+e.left,top:b+e.top}}return b-=d.offsetHeight,a=a-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a+e.left,top:b+e.top}}_positionBottom(a,b,c){const d=this,e=d._getRelativeParentOffset(c.nonStaticParent);return(d.set("arrowDirection","top"),null===c.nonStaticParent)?(b=c.top+window.scrollY+d._ownerElement.offsetHeight,a=c.left+window.scrollX-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a+e.left,top:b+e.top}):d._isParentPositionStatic?(b=d._ownerElement.offsetTop+d._ownerElement.offsetHeight,a=d._ownerElement.offsetLeft-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a+e.left,top:b+e.top}):(b+=d._ownerElement.offsetHeight,a=a-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a+e.left,top:b+e.top})}_positionLeft(a,b,c){const d=this,e=d._getRelativeParentOffset(c.nonStaticParent);return(d.set("arrowDirection","right"),null===c.nonStaticParent)?(b=c.top+window.scrollY+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=c.left+window.scrollX-d.offsetWidth,{left:a+e.left,top:b+e.top}):d._isParentPositionStatic?(b=d._ownerElement.offsetTop+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=d._ownerElement.offsetLeft-d.offsetWidth,{left:a+e.left,top:b+e.top}):(b=b+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a-=d.offsetWidth,{left:a+e.left,top:b+e.top})}_positionRight(a,b,c){const d=this,e=d._getRelativeParentOffset(c.nonStaticParent);return(d.set("arrowDirection","left"),null===c.nonStaticParent)?(b=c.top+window.scrollY+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=c.left+window.scrollX+d._ownerElement.offsetWidth,{left:a+e.left,top:b+e.top}):d._isParentPositionStatic?(b=d._ownerElement.offsetTop+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=d._ownerElement.offsetLeft+d._ownerElement.offsetWidth,{left:a+e.left,top:b+e.top}):(b=b+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a+=d._ownerElement.offsetWidth,{left:a+e.left,top:b+e.top})}_eventsHandler(a){const b=this;return b.disabled||b.readonly?void 0:"click"===a.type?void(b.visible?this.close():this.open()):void("mouseenter"===a.type||"focus"===a.type?this.open():this.close())}_handleEventListeners(a){const b=this;if(b._oldOwnerElement&&"manual"!==b.openMode){let a=b._oldOwnerElement.getAttribute("aria-describedby");a&&(a===b.id?b._oldOwnerElement.removeAttribute("aria-describedby"):(a=a.replace(" "+b.id,""),a=a.replace(b.id+" ",""),b._oldOwnerElement.setAttribute("aria-describedby",a))),b._oldOwnerElement.$.unlisten("mouseenter.tooltip"),b._oldOwnerElement.$.unlisten("mouseleave.tooltip"),b._oldOwnerElement.$.unlisten("focus.tooltip"),b._oldOwnerElement.$.unlisten("blur.tooltip"),b._oldOwnerElement.$.unlisten("click.tooltip"),b._oldOwnerElement=null}if(b._ownerElement&&(a&&("hover"===a?(b._ownerElement.$.unlisten("mouseenter.tooltip"),b._ownerElement.$.unlisten("mouseleave.tooltip")):"focus"===a?(b._ownerElement.$.unlisten("focus.tooltip"),b._ownerElement.$.unlisten("blur.tooltip")):"click"===a?b._ownerElement.$.unlisten("click.tooltip"):void 0),"manual"!==b.openMode))switch(b._ownerElement instanceof Smart.BaseElement||(b._ownerElement.$=Smart.Utilities.Extend(b._ownerElement)),b.openMode){case"hover":b._ownerElement.$.listen("mouseenter.tooltip",b._eventsHandler.bind(b)),b._ownerElement.$.listen("mouseleave.tooltip",b._eventsHandler.bind(b));break;case"focus":b._ownerElement.$.listen("focus.tooltip",b._eventsHandler.bind(b)),b._ownerElement.$.listen("blur.tooltip",b._eventsHandler.bind(b));break;case"click":b._ownerElement.$.listen("click.tooltip",b._eventsHandler.bind(b));break;default:}}_handleResize(){function a(){b._applyPosition()}const b=this;"click"===b.openMode?window.addEventListener("resize",a):window.removeEventListener("resize",a)}_handleSelector(a){const b=this;if("string"==typeof a)b._ownerElement=0<a.length?document.getElementById(a):void 0;else if(a instanceof HTMLElement||a instanceof SVGElement)b._ownerElement=a;else{if(null===a)return void(b._ownerElement=void 0);b.error(b.localize("invalidSelector",{elementType:b.nodeName.toLowerCase(),property:"selector"}))}const c=b._ownerElement?b._ownerElement.getAttribute("aria-describedby"):null;b._ownerElement&&(c?b._ownerElement.setAttribute("aria-describedby",c+" "+b.id):b._ownerElement.setAttribute("aria-describedby",b.id))}_handleTemplate(a){const c=this;let b=c.tooltipTemplate;if(a&&(c.$.content.innerHTML=c.value?c.value:""),null===b||!b)return;if("function"==typeof c.tooltipTemplate)return void c.tooltipTemplate(c.$.content,{value:c.value});if(!("content"in document.createElement("template")))return void c.error(c.localize("htmlTemplateNotSuported",{elementType:c.nodeName.toLowerCase()}));if(b=document.getElementById(b),null===b||!("content"in b))return void c.error(c.localize("invalidTemplate",{elementType:c.nodeName.toLowerCase(),property:"template"}));const d=b.content,e=d.childNodes.length,f=/{{\w+}}/g;let g,h=[];for(let b=0;b<e;b++)for(g=f.exec(d.childNodes[b].innerHTML);g;)h.push({childNodeIndex:b,bindingString:g[0]}),g=f.exec(d.childNodes[b].innerHTML);const i=h.length;let j,k,l=document.importNode(b.content,!0);for(let d=0;d<i;d++){j=l.childNodes[h[d].childNodeIndex],k=h.length;for(let a=0;a<k;a++)j.innerHTML=j.innerHTML.replace(h[d].bindingString,c.value)}c.$.content.innerHTML="";for(let b=0;b<l.childNodes.length;b++)l.childNodes[b].outerHTML&&(c.$.content.innerHTML+=l.childNodes[b].outerHTML)}});
=======
                </div>`}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;let e;"openMode"===a?(d.close(),d._handleEventListeners(b),d._handleResize()):"selector"===a?(d._oldOwnerElement=d._ownerElement,d._handleSelector(c),d._handleEventListeners()):"tooltipTemplate"===a?d._handleTemplate(b):"value"===a?d.tooltipTemplate?d._handleTemplate():d.$.content.innerHTML=d.value:"visible"===a?(e=c?"open":"close",d.$.fireEvent(e,{owner:d._ownerElement},d.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0)):void 0;d._applyPosition()}ready(){const a=this;super.ready(),a._isParentPositionStatic="static"===window.getComputedStyle(a.parentElement||document.querySelector("body")).position,a._handleSelector(a.selector),a.visible&&a._applyPosition(),a._handleEventListeners(),a._handleResize(),a.value=a.$.content.innerHTML=a.value?a.value:a.innerHTML,a._handleTemplate()}appendChild(a){const b=this;if(!b.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(b,a.concat(Array.prototype.slice.call(arguments)))}return a?void(b.$.content.appendChild(a),b._applyPosition()):void b.error(b.localize("invalidNode",{elementType:b.nodeName.toLowerCase(),method:"appendChild",node:"node"}))}close(){const a=this;a._isOpening&&clearTimeout(a._isOpening);a.visible&&(a.$.fireEvent("close",{owner:a._ownerElement},a.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0),a.visible=!1)}insertBefore(a,b){const c=this;if(!c.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(c,a.concat(Array.prototype.slice.call(arguments)))}return a&&b?void(c.$.content.insertBefore(a,b),c._applyPosition()):void c.error(c.localize("invalidNode",{elementType:c.nodeName.toLowerCase(),method:"insertBefore",node:"newNode/referenceNode"}))}open(){const a=this;a.disabled||a.readonly||a.visible||(a._isOpening=setTimeout(function(){a._applyPosition(),a.$.fireEvent("open",{owner:a._ownerElement},a.isInShadowDOM?{composed:!0,bubbles:!0,cancelable:!0}:void 0);const b=a.context;a.context=a,a.visible=!0,a.context=b},a.delay))}removeChild(a){const b=this;if(!b.isCompleted){const a=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(b,a.concat(Array.prototype.slice.call(arguments)))}return a?void(b.$.content.removeChild(a),b._applyPosition()):void b.error(b.localize("invalidNode",{elementType:b.nodeName.toLowerCase(),method:"removeChild",node:"node"}))}toggle(){const a=this;a.visible?a.close():a.open()}_applyPosition(){function a(a){let c=[],d=a.parentElement;for(;d&&"BODY"!==d.nodeName;){if(c.push(d),b.enableShadowDOM&&!d.parentElement){d=d.getRootNode().host;continue}d=d.parentElement}return c}const b=this;if(!b._ownerElement)return;if(!b.parentElement)return;b._isParentPositionStatic="static"===window.getComputedStyle(b.parentElement).position;const c=b._ownerElement.getBoundingClientRect(),d=b.parentElement?b.parentElement.getBoundingClientRect():{top:0,left:0};let e,f;b.parentElement&&"BODY"===b.parentElement.nodeName.toUpperCase()?(e=c.top+window.scrollY+parseInt(b.offset[1]),f=c.left+window.scrollX+parseInt(b.offset[0])):(e=c.top-d.top+parseInt(b.offset[1]),f=c.left-d.left+parseInt(b.offset[0]));const g=function(){const c=a(b),d=c.length;let e=null,f=b._ownerElement.getBoundingClientRect();for(let a,b=0;b<d;b++)if(a=window.getComputedStyle(c[b]),"static"!==a.getPropertyValue("position")){e=c[b];break}return{top:f.top,left:f.left,nonStaticParent:e}}(),h=b.position;let i;switch(h){case"auto":case"bottom":case"top":case"left":case"right":{const a=b["_position"+h.charAt(0).toUpperCase()+h.slice(1)](f,e,g);e=a.top,f=a.left,i=a.translate;break}case"absolute":e=parseInt(b.offset[1])||0,f=parseInt(b.offset[0])||0;}i?b.$.container.style.setProperty("--smart-tooltip-arrow-translate",i+"px"):b.$.container.style.removeProperty("--smart-tooltip-arrow-translate"),b.style.top=e+"px",b.style.left=f+"px"}_positionAuto(a,b,c){var d=Math.max,e=Math.min;const f=this;let g,h=f._ownerElement.parentElement;for(;h;){if("hidden"===getComputedStyle(h).getPropertyValue("overflow")){g=h;break}h=h.parentElement}g||(g=document.body);const i=g.getBoundingClientRect(),j=parseFloat(window.getComputedStyle(f).getPropertyValue("--smart-tooltip-arrow-width"))||0;let k=f._positionTop(a,b,c),l=c.nonStaticParent,m=f.offsetWidth/2-j,n=0,o=0;if(l){const a=l.getBoundingClientRect();n=a.top,o=a.left}return k.top+n>=i.top?(b=k.top,a=d(i.left-o,k.left+e(0,i.right-(k.left+o+f.offsetWidth))),{left:a,top:b,translate:d(-m,e(m,k.left-a))}):(k=f._positionBottom(a,b,c),k.top+f.offsetHeight+n<=i.bottom)?(b=k.top,a=d(i.left-o,k.left+e(0,i.right-(k.left+o+f.offsetWidth))),{left:a,top:b,translate:d(-m,e(m,k.left-a))}):(k=f._positionLeft(a,b,c),b=k.top,m=f.offsetHeight/2-j,b=d(i.top-n,k.top+e(0,i.bottom-(k.top+n+f.offsetHeight))),k.left+o>=i.left?a=k.left:(k=f._positionRight(a,b,c),a=k.left),{left:a,top:b,translate:d(-m,e(m,k.top-b))})}_positionTop(a,b,c){const d=this;if(d.set("arrowDirection","bottom"),null===c.nonStaticParent)return b=c.top+window.scrollY-d.offsetHeight,a=c.left+window.scrollX-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a,top:b};if(d._isParentPositionStatic){if(b=d._ownerElement.offsetTop-d.offsetHeight,a=d._ownerElement.offsetLeft-d.offsetWidth/2+d._ownerElement.offsetWidth/2,d._ownerElement instanceof SVGElement){const c=d._ownerElement.getBoundingClientRect(),e=d._ownerElement.parentNode.getBoundingClientRect();b=c.top-e.top-d.offsetHeight/2,a=c.left-d.offsetWidth/2+e.left/2}return{left:a,top:b}}if(d._ownerElement instanceof SVGElement&&d._ownerElement.parentElement){const c=d._ownerElement.getBoundingClientRect(),e=d._ownerElement.parentNode.getBoundingClientRect();return b=c.top-e.top-d.offsetHeight,a=c.left-e.left-d.offsetWidth/2+c.width/2,{left:a,top:b}}return b-=d.offsetHeight,a=a-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a,top:b}}_positionBottom(a,b,c){const d=this;return(d.set("arrowDirection","top"),null===c.nonStaticParent)?(b=c.top+window.scrollY+d._ownerElement.offsetHeight,a=c.left+window.scrollX-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a,top:b}):d._isParentPositionStatic?(b=d._ownerElement.offsetTop+d._ownerElement.offsetHeight,a=d._ownerElement.offsetLeft-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a,top:b}):(b+=d._ownerElement.offsetHeight,a=a-d.offsetWidth/2+d._ownerElement.offsetWidth/2,{left:a,top:b})}_positionLeft(a,b,c){const d=this;return(d.set("arrowDirection","right"),null===c.nonStaticParent)?(b=c.top+window.scrollY+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=c.left+window.scrollX-d.offsetWidth,{left:a,top:b}):d._isParentPositionStatic?(b=d._ownerElement.offsetTop+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=d._ownerElement.offsetLeft-d.offsetWidth,{left:a,top:b}):(b=b+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a-=d.offsetWidth,{left:a,top:b})}_positionRight(a,b,c){const d=this;return(d.set("arrowDirection","left"),null===c.nonStaticParent)?(b=c.top+window.scrollY+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=c.left+window.scrollX+d._ownerElement.offsetWidth,{left:a,top:b}):d._isParentPositionStatic?(b=d._ownerElement.offsetTop+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a=d._ownerElement.offsetLeft+d._ownerElement.offsetWidth,{left:a,top:b}):(b=b+d._ownerElement.offsetHeight/2-d.$.content.offsetHeight/2,a+=d._ownerElement.offsetWidth,{left:a,top:b})}_eventsHandler(a){const b=this;return b.disabled||b.readonly?void 0:"click"===a.type?void(b.visible?this.close():this.open()):void("mouseenter"===a.type||"focus"===a.type?this.open():this.close())}_handleEventListeners(a){const b=this;if((b._oldOwnerElement&&"manual"!==b.openMode&&(b._oldOwnerElement.$.unlisten("mouseenter.tooltip"),b._oldOwnerElement.$.unlisten("mouseleave.tooltip"),b._oldOwnerElement.$.unlisten("focus.tooltip"),b._oldOwnerElement.$.unlisten("blur.tooltip"),b._oldOwnerElement.$.unlisten("click.tooltip"),b._oldOwnerElement=null),!!b._ownerElement)&&(a&&("hover"===a?(b._ownerElement.$.unlisten("mouseenter.tooltip"),b._ownerElement.$.unlisten("mouseleave.tooltip")):"focus"===a?(b._ownerElement.$.unlisten("focus.tooltip"),b._ownerElement.$.unlisten("blur.tooltip")):"click"===a?b._ownerElement.$.unlisten("click.tooltip"):void 0),"manual"!==b.openMode))switch(b._ownerElement instanceof Smart.BaseElement||(b._ownerElement.$=Smart.Utilities.Extend(b._ownerElement)),b.openMode){case"hover":b._ownerElement.$.listen("mouseenter.tooltip",b._eventsHandler.bind(b)),b._ownerElement.$.listen("mouseleave.tooltip",b._eventsHandler.bind(b));break;case"focus":b._ownerElement.$.listen("focus.tooltip",b._eventsHandler.bind(b)),b._ownerElement.$.listen("blur.tooltip",b._eventsHandler.bind(b));break;case"click":b._ownerElement.$.listen("click.tooltip",b._eventsHandler.bind(b));break;default:}}_handleResize(){function a(){b._applyPosition()}const b=this;"click"===b.openMode?window.addEventListener("resize",a):window.removeEventListener("resize",a)}_handleSelector(a){const b=this;return"string"==typeof a?void(b._ownerElement=0<a.length?document.getElementById(a):void 0):a instanceof HTMLElement||a instanceof SVGElement?void(b._ownerElement=a):null===a?void(b._ownerElement=void 0):void b.error(b.localize("invalidSelector",{elementType:b.nodeName.toLowerCase(),property:"selector"}))}_handleTemplate(a){const c=this;let b=c.tooltipTemplate;if(a&&(c.$.content.innerHTML=c.value?c.value:""),null===b||!b)return;if("function"==typeof c.tooltipTemplate)return void c.tooltipTemplate(c.$.content,{value:c.value});if(!("content"in document.createElement("template")))return void c.error(c.localize("htmlTemplateNotSuported",{elementType:c.nodeName.toLowerCase()}));if(b=document.getElementById(b),null===b||!("content"in b))return void c.error(c.localize("invalidTemplate",{elementType:c.nodeName.toLowerCase(),property:"template"}));const d=b.content,e=d.childNodes.length,f=/{{\w+}}/g;let g,h=[];for(let b=0;b<e;b++)for(g=f.exec(d.childNodes[b].innerHTML);g;)h.push({childNodeIndex:b,bindingString:g[0]}),g=f.exec(d.childNodes[b].innerHTML);const i=h.length;let j,k,l=document.importNode(b.content,!0);for(let d=0;d<i;d++){j=l.childNodes[h[d].childNodeIndex],k=h.length;for(let a=0;a<k;a++)j.innerHTML=j.innerHTML.replace(h[d].bindingString,c.value)}c.$.content.innerHTML="";for(let b=0;b<l.childNodes.length;b++)l.childNodes[b].outerHTML&&(c.$.content.innerHTML+=l.childNodes[b].outerHTML)}});
>>>>>>> origin/master
