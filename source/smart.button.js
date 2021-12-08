
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-button",class extends Smart.ContentElement{static get properties(){return{value:{type:"string"},name:{type:"string"},type:{value:"button",type:"string"},clickMode:{allowedValues:["hover","press","release","pressAndRelease"],type:"string",value:"release"}}}static get styleUrls(){return["smart.button.css"]}template(){return"<button class=\"smart-button smart-unselectable\" inner-h-t-m-l='[[innerHTML]]' id='button' type='[[type]]' name='[[name]]' value='[[value]]' disabled='[[disabled]]' role=\"presentation\"></button>"}refresh(){}static get listeners(){return{"button.down":"_downHandler","button.mouseenter":"_mouseEnterHandler","button.mouseleave":"_mouseLeaveHandler","button.touchend":"_touchEndHandler","button.click":"_clickHandler","button.up":"_upHandler",up:"_upHandler","button.focus":"_focusHandler","button.blur":"_blurHandler"}}focus(){const e=this;e.$.button?e.$.button.focus():HTMLElement.prototype.focus.call(e)}blur(){const e=this;e.$.button?e.$.button.blur():HTMLElement.prototype.blur.call(e)}_upHandler(e){const t=this;if(e.stopPropagation(),t.$.setAttributeValue("active",!1),t.dataset.target){const n=document.querySelector(t.dataset.target);let a=t.dataset.toggle;const r="smart-window".toLowerCase();if(n&&n.nodeName.toLowerCase()===r&&"modal"===a&&(a="openModal"),"tab"===a||"pill"===a||"list"===a){const e=this.closest(".nav, .list-group"),a='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',r=!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?e.children(".active"):e.querySelectorAll("li > .active");if(e){const n=e.querySelectorAll(a);for(let e=0;e<n.length;e++)n[e].classList.remove("primary");for(let e=0;e<r.length;e++)r[e].classList.remove("active");let i=t.parentNode;for(;i;){if("LI"===i.nodeName){i.classList.add("active");break}i=i.parentNode}t.classList.add("primary")}return n.parentNode.querySelectorAll(".active").forEach((e=>{e.classList.remove("active"),e.classList.add("smart-hidden")})),n.classList.add("active"),void n.classList.remove("smart-hidden")}a&&n&&!n[a]&&"collapse"===a&&(setTimeout((()=>{n.classList.contains("smart-hidden")?n.classList.remove("smart-hidden"):n.classList.add("smart-hidden")})),e.originalEvent.preventDefault()),a&&n&&!n[a]&&"dropdown"===a?(setTimeout((()=>{n.opened=!n.opened})),e.originalEvent.preventDefault()):a&&n&&n[a]&&(setTimeout((()=>{n[a]()}),50),e.originalEvent.preventDefault())}}_focusHandler(){this.$.setAttributeValue("focus",!0),this.$.fireEvent("focus")}_blurHandler(){this.$.setAttributeValue("focus",!1),this.$.fireEvent("blur")}_clickHandler(e){const t=this;("release"!==t.clickMode&&"pressAndRelease"!==t.clickMode||t.readonly)&&(e.preventDefault(),e.stopPropagation())}_downHandler(e){const t=this;if(!(t.disabled||(t.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(t,e.pageX,e.pageY),t.$.setAttributeValue("active",!0),"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||t.readonly))){if(t.hasAttribute("smart-blazor"))return void t.$.dispatchEvent(new Event("click"));const n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}}_mouseEnterHandler(e){const t=this;if(!t.readonly&&(t.$button.setAttributeValue("hover",!0),t.$.setAttributeValue("hover",!0),"hover"===t.clickMode)){const n="buttons"in e?e.buttons:e.which;if(t.hasAttribute("smart-blazor"))return void t.$.dispatchEvent(new Event("click"));t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}}_touchEndHandler(){const e=this;setTimeout((function(){e.$button.setAttributeValue("hover",!1),e.$.setAttributeValue("hover",!1)}),300)}_mouseLeaveHandler(){this.$button.setAttributeValue("hover",!1),this.$.setAttributeValue("hover",!1)}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const a=this;"disabled"===e?(a._setFocusable(),a.$button&&a.$button.setAttributeValue("hover",!1),a.$.setAttributeValue("hover",!1),a instanceof Smart.RepeatButton&&a._stopRepeat()):"unfocusable"===e&&a._setFocusable()}_setFocusable(){const e=this,t=e.$.button?e.$.button:e;if(e.disabled||e.unfocusable)return t.removeAttribute("tabindex"),void(t.tabIndex=-1);t.tabIndex=e.tabIndex>0?e.tabIndex:0}ready(){const e=this;super.ready(),e.setAttribute("role","button"),e._setFocusable(),e.enableShadowDOM&&e.$.hiddenInput&&e.appendChild(e.$.hiddenInput)}}),Smart("smart-repeat-button",class extends Smart.Button{static get properties(){return{delay:{value:50,type:"number"},initialDelay:{value:150,type:"number"}}}static get listeners(){return{"button.down":"_startRepeat","button.mouseenter":"_overriddenHandler","button.mouseleave":"_overriddenHandler","button.pointerenter":"_updateInBoundsFlag","button.pointerleave":"_updateInBoundsFlag","button.touchmove":"_touchmoveHandler","document.up":"_stopRepeat"}}_clickHandler(e){const t=this;("release"!==t.clickMode||t.preventDefaultClick||t.readonly||t.disabled)&&(e.preventDefault(),e.stopPropagation(),t.preventDefaultClick=!1)}_updateInBoundsFlag(e){const t=this;-1!==e.type.indexOf("leave")?(t._isPointerInBounds=!1,t.$button.setAttributeValue("hover",!1),t.$.setAttributeValue("hover",!1)):(t._isPointerInBounds=!0,t.$button.setAttributeValue("hover",!0),t.$.setAttributeValue("hover",!0)),1!==("buttons"in e?e.buttons:e.which)&&t._stopRepeat(e)}_startRepeat(e){const t=this;t.setAttribute("active",""),t._initialTimer||t.readonly||(t._initialTimer=setTimeout((function(){t._repeatTimer=setInterval((()=>{if(t._isPointerInBounds){if(t.hasAttribute("smart-blazor"))return t.$.dispatchEvent(new Event("click")),void(t.preventDefaultClick=!0);const n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY}),t.preventDefaultClick=!0}}),t.delay)}),t.initialDelay))}_stopRepeat(e){const t=this;t.readonly||e&&("pointercancel"===e.type||e.originalEvent&&"pointercancel"===e.originalEvent.type)||(t.$.setAttributeValue("active",!1),t._repeatTimer&&(clearInterval(t._repeatTimer),t._repeatTimer=null),t._initialTimer&&(clearTimeout(t._initialTimer),t._initialTimer=null))}_touchmoveHandler(e){this.preventDefaultClick&&e.cancelable&&(e.preventDefault(),e.stopPropagation())}_overriddenHandler(){}}),Smart("smart-toggle-button",class extends Smart.Button{static get properties(){return{checked:{value:!1,type:"boolean?"},falseContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminate:{value:!1,type:"boolean"},trueContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateTemplate:{value:null,type:"any"},trueTemplate:{value:null,type:"any"},falseTemplate:{value:null,type:"any"},type:{value:"toggle",type:"string",defaultReflectToAttribute:!0,readonly:!0}}}static get listeners(){return{keydown:"_keyHandler",keyup:"_keyHandler",dragstart:"_dragStartHandler","button.click":"_buttonClickHandler","button.mouseenter":"_buttonMouseEnterHandler","button.mouseleave":"_buttonMouseLeaveHandler","document.up":"_documentUpHandler"}}ready(){super.ready(),this._setAriaState()}_setAriaState(){const e=this,t=e.checked;null!==t?e.setAttribute("aria-pressed",t):e.setAttribute("aria-pressed","mixed")}_buttonClickHandler(){}_buttonMouseLeaveHandler(){this.removeAttribute("hover")}_buttonMouseEnterHandler(){const e=this;e.setAttribute("hover",""),e.disabled||e.readonly||"hover"!==e.clickMode||(e._changeCheckState("pointer"),e.focus(),e._updateHidenInputNameAndValue())}_documentUpHandler(e){const t=this;t._pressed&&(t._pressed=!1,t.disabled||t.readonly||"press"===t.clickMode||"pointercancel"===e.originalEvent.type||(t._changeCheckState("pointer"),t.focus(),t._updateHidenInputNameAndValue()))}_downHandler(e){const t=this;t.disabled||t.readonly||(t.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(t,e.pageX,e.pageY),t._pressed=!0,"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||(t._changeCheckState("pointer"),t.hasAttribute("smart-blazor")?t.$.dispatchEvent(new Event("click")):t.$.fireEvent("click"),t._updateHidenInputNameAndValue()),"press"===t.clickMode&&(e.preventDefault(),e.stopPropagation()))}_dragStartHandler(e){e.preventDefault()}_keyHandler(e){const t=this;if(!0!==t.disabled&&!t.readonly&&32===e.keyCode){if("keydown"===e.type)return void e.preventDefault();if("none"===t.switchMode)return;t._changeCheckState("keyboard"),t._updateHidenInputNameAndValue()}}_changeCheckState(e){const t=this;let n=null;null===t.checked?t.checked=!0:(n=t.checked,t.checked=!t.checked),t._handleTextSelection(),t.$.fireEvent("change",{value:t.checked,oldValue:n,changeType:e}),t.checked?t.$.fireEvent("checkValue",{changeType:e}):t.$.fireEvent("uncheckValue",{changeType:e}),t._setAriaState()}_handleTextSelection(){const e=this;e.$.addClass("smart-unselectable"),e.timer&&clearTimeout(e.timer),e.timer=setTimeout((()=>e.$.removeClass("smart-unselectable")),500)}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const a=this;if("checked"===e)return a.$.fireEvent("change",{value:n,oldValue:t,changeType:"api"}),void a._setAriaState();switch(e){case"trueTemplate":a._handleTemplate(!0);break;case"falseTemplate":a._handleTemplate(!1);break;case"indeterminateTemplate":a._handleTemplate()}}_htmlBindOnInitialization(){const e=this;e._bindContentProperty("trueContent","smart-true-content"),e._bindContentProperty("falseContent","smart-false-content"),e._bindContentProperty("indeterminateContent","smart-indeterminate-content")}_bindContentProperty(e,t){const n=this;if(!n.$[e+"Container"])return;let a=document.createElement("div");a.innerHTML=n.innerHTML;let r,i=a.getElementsByClassName(t);if(i.length>0)for(let e=0;e<i.length;e++)r=i[e];""===n[e]&&(n[e]=void 0===r?"":r.outerHTML),n.$[e+"Container"].innerHTML=n[e]}_updateContentProperties(){const e=this;function t(t){e.$[t+"Container"]&&(e[t]=e.$[t+"Container"].innerHTML)}t("trueContent"),t("falseContent"),t("indeterminateContent")}_updateHidenInputValue(){const e=this;if(!e.$.hiddenInput)return;let t;t=null===e.checked?"null":!1===e.checked?"off":e.value||"on",e.$.hiddenInput.setAttribute("value",t)}_updateHidenInputName(){const e=this;if(!e.$.hiddenInput)return;let t=!1===e.checked?"":e.name||"";e.$.hiddenInput.setAttribute("name",t)}_updateHidenInputNameAndValue(){this._updateHidenInputName(),this._updateHidenInputValue()}_handleTemplate(e,t){const n=this;let a,r,i;if(!0===e?(a=n.trueTemplate,r=n.$.trueContentContainer,i=n.trueContent):!1===e?(a=n.falseTemplate,r=n.$.falseContentContainer,i=n.falseContent):(a=n.indeterminateTemplate,r=n.$.indeterminateContentContainer,i=n.indeterminateContent),t&&(r.innerHTML=i||""),null===a||!a)return;if("function"==typeof a)return void a(r,{value:i});if(!("content"in document.createElement("template")))return void n.error(n.localize("htmlTemplateNotSuported",{elementType:n.nodeName.toLowerCase()}));if(a=document.getElementById(a),null===a||!("content"in a))return void n.error(n.localize("invalidTemplate",{elementType:n.nodeName.toLowerCase(),property:"template"}));const l=a.content,o=l.childNodes.length,s=/{{\w+}}/g;let u,d=[];for(let e=0;e<o;e++)for(u=s.exec(l.childNodes[e].innerHTML);u;)d.push({childNodeIndex:e,bindingString:u[0]}),u=s.exec(l.childNodes[e].innerHTML);const c=d.length;let p,h,m=document.importNode(a.content,!0);for(let e=0;e<c;e++){p=m.childNodes[d[e].childNodeIndex],h=d.length;for(let t=0;t<h;t++)p.innerHTML=p.innerHTML.replace(d[e].bindingString,i)}r.innerHTML="";for(let e=0;e<m.childNodes.length;e++)m.childNodes[e].outerHTML&&(r.innerHTML+=m.childNodes[e].outerHTML)}});