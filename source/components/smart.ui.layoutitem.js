/*!
 * 
 * /* Smart UI v8.0.0 (2020-Sep) 
 * Copyright (c) 2011-2020 jQWidgets. 
 * License: https://htmlelements.com/license/ * /
 * 
 * 
 */!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=97)}({97:function(t,e,i){"use strict";i.r(e),i.d(e,"UILayoutItem",(function(){return n}));class n extends HTMLElement{get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get disabled(){return this.nativeElement?this.nativeElement.disabled:void 0}set disabled(t){if(this.nativeElement){this.nativeElement.disabled=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("disabled");this.nativeElement.hasAttribute("disabled")?this.setAttribute("disabled",e):this.removeAttribute("disabled"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get modifiers(){return this.nativeElement?this.nativeElement.modifiers:void 0}set modifiers(t){if(this.nativeElement){this.nativeElement.modifiers=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("modifiers");this.nativeElement.hasAttribute("modifiers")?this.setAttribute("modifiers",e):this.removeAttribute("modifiers"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get min(){return this.nativeElement?this.nativeElement.min:void 0}set min(t){if(this.nativeElement){this.nativeElement.min=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("min");this.nativeElement.hasAttribute("min")?this.setAttribute("min",e):this.removeAttribute("min"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get label(){return this.nativeElement?this.nativeElement.label:void 0}set label(t){if(this.nativeElement){this.nativeElement.label=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("label");this.nativeElement.hasAttribute("label")?this.setAttribute("label",e):this.removeAttribute("label"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get size(){return this.nativeElement?this.nativeElement.size:void 0}set size(t){if(this.nativeElement){this.nativeElement.size=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("size");this.nativeElement.hasAttribute("size")?this.setAttribute("size",e):this.removeAttribute("size"),this._isUpdatingAttribute=!1}}get _isUpdating(){return this.nativeElement?this.nativeElement._isUpdating:void 0}set _isUpdating(t){this.nativeElement&&(this.nativeElement._isUpdating=t)}get unfocusable(){return this.nativeElement?this.nativeElement.unfocusable:void 0}set unfocusable(t){if(this.nativeElement){this.nativeElement.unfocusable=t,this._isUpdatingAttribute=!0;const e=this.nativeElement.getAttribute("unfocusable");this.nativeElement.hasAttribute("unfocusable")?this.setAttribute("unfocusable",e):this.removeAttribute("unfocusable"),this._isUpdatingAttribute=!1}}static get observedAttributes(){return["style","class","disabled","modifiers","min","label","size","unfocusable"]}get properties(){return["disabled","modifiers","min","label","size","unfocusable"]}constructor(){super()}get eventListeners(){return[]}componentDidRender(t){const e=this,i={},n={};let s=null;for(let t in e.props)"children"!==t&&("style"!==t?t.startsWith("on")&&-1===e.properties.indexOf(t)?n[t]=e.props[t]:i[t]=e.props[t]:s=e.props[t]);for(let t in e.attributes){const i=e.attributes[t].name;if(i)if("class"!==i)"style"===i&&e.nativeElement.setAttribute(i,e.getAttribute(i)),-1!==e.properties.indexOf(i.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))&&e.nativeElement.setAttribute(i,e.getAttribute(i));else{const t=e.getAttribute(i).trim().split(" ");for(let i in t)e.nativeElement.classList.contains(t[i])||""===t[i]||e.nativeElement.classList.add(t[i])}}for(let t in i)if("class"!==t){if(i[t]!==e.nativeElement[t]){const n=t=>t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}));"hover"!==t&&"active"!==t&&"focus"!==t&&"selected"!==t||e.nativeElement.setAttribute(t,"");const s=n(t);e.nativeElement[s]=i[t]}}else{const n=i[t].trim().split(" ");for(let t in n)e.nativeElement.classList.contains(n[t])||""===n[t]||e.nativeElement.classList.add(n[t])}for(let t in n)e[t]=n[t],e.nativeElement[t.toLowerCase()]=n[t];if(s)for(let t in s)e.nativeElement.style[t]=s[t]}componentDidMount(){this.componentDidRender(!0)}componentDidUpdate(){this.componentDidRender(!1)}componentWillUnmount(){const t=this;if(t.nativeElement){t.nativeElement.whenRenderedCallbacks=[];for(let e=0;e<t.eventListeners.length;e++){const i=t.eventListeners[e];t.nativeElement.removeEventListener(i.substring(2).toLowerCase(),t[i])}}}connectedCallback(){this.shadowRoot||this._render()}disconnectedCallback(){this.componentWillUnmount()}addStylesToElement(t,e){const i=document.createElement("style");i.type="text/css";for(let t=0;t<e.length;t++){let n=document.createTextNode(e[t]);n.textContent=n.textContent.replace(":root",":host"),i.appendChild(n)}if(document.adoptedStyleSheets){const e=new CSSStyleSheet;e.replaceSync(i.innerHTML),t.adoptedStyleSheets?t.adoptedStyleSheets=[e]:-1===document.adoptedStyleSheets.indexOf(e)&&(document.adoptedStyleSheets=[e])}else t.appendChild(i)}addStyle(t){const e=this.shadowRoot;if("string"==typeof t){const i=document.createElement("style");i.type="text/css";const n=document.createTextNode(t);i.appendChild(n),e.appendChild(i)}else e.appendChild(t)}attributeChangedCallback(t,e,i){const n=this;if(n.shadowRoot&&n.isReady&&!n._isUpdatingAttribute)if("class"!==t)n.nativeElement.setAttribute(t,i);else{const t=i.trim().split(" "),s=e.trim().split(" ");for(let t in s)""!==s[t]&&n.nativeElement.classList.remove(s[t]);for(let e in t)n.nativeElement.classList.contains(t[e])||""===t[e]||n.nativeElement.classList.add(t[e])}}_render(){const t=this;if(t.parentNode){const e=document.createElement("smart-layout-item");t.parentNode?t.parentNode.replaceChild(e,t):t.getRootNode().host.shadowRoot.replaceChild(e,t),t.nativeElement=e,t.componentDidMount(),t.isReady=!0,t.classList.add("smart-ui-component")}}}e.default=n,window.customElements.get("smart-ui-layout-item")||window.customElements.define("smart-ui-layout-item",n)}});