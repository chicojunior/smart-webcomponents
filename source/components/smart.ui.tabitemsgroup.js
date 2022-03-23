/*!
 * 
 * /* Smart UI v9.4.1 (2021-July) 
 * Copyright (c) 2011-2021 jQWidgets. 
 * License: https://htmlelements.com/license/ * /
 * 
 * 
 */!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=111)}({111:function(e,t,n){"use strict";n.r(t),n.d(t,"UITabItemsGroup",(function(){return i}));class i extends HTMLElement{get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(e){this.nativeElement&&(this.nativeElement._isUpdating=e)}get label(){return this.nativeElement?this.nativeElement.label:void 0}set label(e){if(this.nativeElement){this.nativeElement.label=e,this._isUpdatingAttribute=!0;const t=this.nativeElement.getAttribute("label");this.nativeElement.hasAttribute("label")?this.setAttribute("label",t):this.removeAttribute("label"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(e){this.nativeElement&&(this.nativeElement._isUpdating=e)}get labelSize(){return this.nativeElement?this.nativeElement.labelSize:void 0}set labelSize(e){if(this.nativeElement){this.nativeElement.labelSize=e,this._isUpdatingAttribute=!0;const t=this.nativeElement.getAttribute("label-size");this.nativeElement.hasAttribute("label-size")?this.setAttribute("label-size",t):this.removeAttribute("label-size"),this._isUpdatingAttribute=!1}}static get observedAttributes(){return["style","class","label","label-size"]}get properties(){return["label","labelSize"]}constructor(){super()}get eventListeners(){return[]}componentDidRender(e){const t=this,n={},i={};let s=null;for(let e in t.props)"children"!==e&&("style"!==e?e.startsWith("on")&&-1===t.properties.indexOf(e)?i[e]=t.props[e]:n[e]=t.props[e]:s=t.props[e]);for(let e in t.attributes){const n=t.attributes[e].name;if(n)if("class"!==n)"style"===n&&t.nativeElement.setAttribute(n,t.getAttribute(n)),-1!==t.properties.indexOf(n.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()})))&&t.nativeElement.setAttribute(n,t.getAttribute(n));else{const e=t.getAttribute(n).trim().split(" ");for(let n in e)t.nativeElement.classList.contains(e[n])||""===e[n]||t.nativeElement.classList.add(e[n])}}for(let e in n)if("class"!==e){if(n[e]!==t.nativeElement[e]){const i=e=>e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}));"hover"!==e&&"active"!==e&&"focus"!==e&&"selected"!==e||t.nativeElement.setAttribute(e,"");const s=i(e);t.nativeElement[s]=n[e]}}else{const i=n[e].trim().split(" ");for(let e in i)t.nativeElement.classList.contains(i[e])||""===i[e]||t.nativeElement.classList.add(i[e])}for(let e in i)t[e]=i[e],t.nativeElement[e.toLowerCase()]=i[e];if(s)for(let e in s)t.nativeElement.style[e]=s[e]}componentDidMount(){this.componentDidRender(!0)}componentDidUpdate(){this.componentDidRender(!1)}componentWillUnmount(){const e=this;if(e.nativeElement){e.nativeElement.whenRenderedCallbacks=[];for(let t=0;t<e.eventListeners.length;t++){const n=e.eventListeners[t];e.nativeElement.removeEventListener(n.substring(2).toLowerCase(),e[n])}}}connectedCallback(){this.shadowRoot||this._render()}disconnectedCallback(){this.componentWillUnmount()}addStylesToElement(e,t){const n=document.createElement("style");n.type="text/css";for(let e=0;e<t.length;e++){let i=document.createTextNode(t[e]);i.textContent=i.textContent.replace(":root",":host"),n.appendChild(i)}if(document.adoptedStyleSheets){const t=new CSSStyleSheet;t.replaceSync(n.innerHTML),e.adoptedStyleSheets?e.adoptedStyleSheets=[t]:-1===document.adoptedStyleSheets.indexOf(t)&&(document.adoptedStyleSheets=[t])}else e.appendChild(n)}addStyle(e){const t=this.shadowRoot;if("string"==typeof e){const n=document.createElement("style");n.type="text/css";const i=document.createTextNode(e);n.appendChild(i),t.appendChild(n)}else t.appendChild(e)}attributeChangedCallback(e,t,n){const i=this;if(i.shadowRoot&&i.isReady&&!i._isUpdatingAttribute)if("class"!==e)i.nativeElement.setAttribute(e,n);else{const e=n.trim().split(" "),s=t.trim().split(" ");for(let e in s)""!==s[e]&&i.nativeElement.classList.remove(s[e]);for(let t in e)i.nativeElement.classList.contains(e[t])||""===e[t]||i.nativeElement.classList.add(e[t])}}_render(){const e=this;if(e.parentNode){const t=document.createElement("smart-tab-items-group");e.parentNode?e.parentNode.replaceChild(t,e):e.getRootNode().host.shadowRoot.replaceChild(t,e),e.nativeElement=t,e.componentDidMount(),e.isReady=!0,e.classList.add("smart-ui-component")}}}t.default=i,window.customElements.get("smart-ui-tab-items-group")||window.customElements.define("smart-ui-tab-items-group",i)}});