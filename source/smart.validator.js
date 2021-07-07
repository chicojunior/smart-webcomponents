
/* Smart UI v9.4.1 (2021-07-03) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Validator",class{constructor(t,e="",r=!1){const s=this;if(s.errors={},s.inputs={},t){if(s.rules=t,s.validationSummarySelector=e,s.validationSummarySelector)for(let t=0;t<s.rules.length;t++){const e=s.rules[t],r=document.createElement("span");r.setAttribute("input-selector",e.input),document.querySelector(s.validationSummarySelector).appendChild(r)}s.errorHintOnRight=r,s._configureInputs(),s._addEventListeners()}}attach(){this._removeEventListeners(),this._addEventListeners()}detach(){this.reset(),this._removeEventListeners()}reset(){const t=this;for(let e=0;e<t.rules.length;e++){let r=t.rules[e],s=document.querySelectorAll(r.input);for(let e=0;e<s.length;e++)t._resetAttributes(s[e],r);r.hint=""}}_resetAttributes(t,e){const r=this;t.hasAttribute("smart-validation-success")&&r._removeErrorOrSuccessAttr(t,0),t.hasAttribute("smart-validation-error")&&(r._removeErrorOrSuccessAttr(t,1),r.validationSummarySelector&&(document.querySelector("span[input-selector='"+e.input+"']").innerHTML=""))}validate(t,e){const r=this;let s,n,a=!0,i=[],o=0;for(let t=0;t<r.rules.length;t+=1){const s=r.rules[t];e&&s.input!==e||"function"==typeof r.rules[t].type&&o++}for(let l=0;l<r.rules.length;l+=1){const u=r.rules[l];if(!e||u.input===e){if("function"==typeof r.rules[l].type){const e=function(e,n){s=e;const l=document.querySelector(n.input);!1===s&&(a=!1,i.push(l)),o--,0===o&&"function"==typeof t&&t&&t(a),l.errors=r.errors[n.input]};r._validateRule(r.rules[l],e)}else s=r._validateRule(r.rules[l]);!1===s&&(a=!1,i.push(n)),n=document.querySelector(r.rules[l].input),n.errors=r.errors[u.input]}}for(let t in r.inputs){const e=r.errors["#"+t];let s=!0;for(let t in e)s=s&&!1===e[t];const n=document.querySelector("#"+t);n.classList.remove("smart-valid"),n.classList.remove("smart-invalid"),s?n.classList.add("smart-valid"):n.classList.add("smart-invalid")}return 0===o?a:void 0}_calculateErrorMsgTooltipPosition(t,e){const r=document.body.getBoundingClientRect(),s=t.getBoundingClientRect(),n=s.top-r.top;e.style.top=n+s.height+"px",e.style.left=s.left+"px",this.errorHintOnRight&&(e.style.top=n-5+"px",e.style.left=s.left+5+s.width+"px")}_addErrorAttr(t,e){const r=this;function s(e,r,s){let n=t;const a=t.querySelector(".smart-validation-error input.smart-input")||t.querySelector(".smart-validation-error textarea.smart-input");let i;a&&(n=a),i=s?()=>e.classList.remove("smart-hidden"):()=>e.classList.add("smart-hidden"),n.addEventListener(r,i),n[r+n.id]=i}if(t.setAttribute("smart-validation-error",e),t.classList.add("smart-validation-error"),("input"===t.tagName.toLowerCase()||"textarea"===t.tagName.toLowerCase())&&"button"!==t.type&&"radio"!==t.type){const e=t.nextSibling;if(e&&(void 0===e.tagName||e.tagName&&"label"!==e.tagName.toLowerCase()&&"smart-error-label-like-after-element"!==e.className)){let r=document.createElement("label");r.setAttribute("class","smart-error-label-like-after-element"),t.parentNode.insertBefore(r,e)}}const n=document.createElement("span");n.classList.add("smart-error-holder"),n.classList.add("smart-hidden"),n.classList.add(t.id),r.errorHintOnRight&&n.classList.add("smart-error-hint-position-right"),n.innerHTML=e,document.body.appendChild(n),r._calculateErrorMsgTooltipPosition(t,n),window.addEventListener("orientationchange",(function(){setTimeout((function(){r._calculateErrorMsgTooltipPosition(t,n)}),300)})),window.addEventListener("resize",(function(){r._calculateErrorMsgTooltipPosition(t,n)})),t.addEventListener("focus",(()=>{r._calculateErrorMsgTooltipPosition(t,n)}));const a=t.querySelector(".smart-validation-error input.smart-input");a?(s(n,"click",1),"radio"!==a.type&&"checkbox"!==a.type&&s(n,"focusin",1),s(n,"focusout",0)):(s(n,"click",1),"radio"!==t.type&&"checkbox"!==t.type&&s(n,"focusin",1),s(n,"focusout",0))}_addSuccessAttr(t){t.setAttribute("smart-validation-success",""),t.classList.add("smart-validation-success");const e=t.nextSibling;if(e){if(e.tagName&&"label"===e.tagName.toLowerCase()&&"smart-error-label-like-after-element"===e.className){const r=document.createElement("label");r.setAttribute("class","smart-success-label-like-after-element"),t.parentNode.insertBefore(r,e)}if("input"===t.tagName.toLowerCase()&&(e.tagName&&"label"===e.tagName.toLowerCase()&&"smart-error-label-like-after-element"===e.className&&e.remove(),void 0===e.tagName||e.tagName&&"label"!==e.tagName.toLowerCase()&&"smart-success-label-like-after-element"!==e.className)){const r=document.createElement("label");r.setAttribute("class","smart-success-label-like-after-element"),t.parentNode.insertBefore(r,e)}}}_removeErrorOrSuccessAttr(t,e){const r=t.nextSibling;if(1===e){t.removeAttribute("smart-validation-error"),t.classList.remove("smart-validation-error");const e=document.querySelector("span.smart-error-holder."+t.id);e&&e.remove(),r&&r.tagName&&"label"===r.tagName.toLowerCase()&&"smart-error-label-like-after-element"===r.className&&r.remove()}0===e&&(t.removeAttribute("smart-validation-success"),t.classList.remove("smart-validation-success"),r&&r.tagName&&"label"===r.tagName.toLowerCase()&&"smart-success-label-like-after-element"===r.className&&r.remove())}_validateRule(t,e){const r=this,s=document.querySelectorAll(t.input+":not(.smart-error-holder)");let n,a=!0;if(!s||null===s[0])return;let i=!1;if("function"==typeof t.type&&(i=t.type.call(r,s[0],t),!0===i&&e&&e(!0,t)),"function"==typeof t.type&&!1===i){if("function"==typeof t.hintRender&&!t.hint&&!r._higherPriorityActive(t)){n=t.hintRender.apply(this,[t.message,s[0]]),r._removeLowPriorityHints(t),t.hint=n;for(let e=0;e<s.length;e++)r._removeErrorOrSuccessAttr(s[e],0),r._addErrorAttr(s[e],t.message);r.validationSummarySelector&&(document.querySelector("span[input-selector='"+t.input+"']").innerHTML=t.message)}a=!1,e&&e(!1,t)}else r._hideHintByRule(t);if(s[0]&&!s[0].hasAttribute("smart-validation-error"))if(s.length>1)for(let t=0;t<s.length;t++)r._removeErrorOrSuccessAttr(s[t],1);else r._addSuccessAttr(s[0]);return r.errors[t.input]||(r.errors[t.input]={}),r.errors[t.input][t._type]=!a,a}_hideHintByRule(t){const e=this,r=document.querySelectorAll(t.input);let s;if(t){if(s=t.hint,s){for(let t=0;t<r.length;t++)r.length>1?e._removeErrorOrSuccessAttr(r[t],1):(e._removeErrorOrSuccessAttr(r[t],1),e._addSuccessAttr(r[t]));e.validationSummarySelector&&(document.querySelector("span[input-selector='"+t.input+"']").innerHTML=""),s.remove()}t.hint=null}}_removeLowPriorityHints(t){const e=this;let r,s=!1;for(let n=0;n<e.rules.length;n+=1)r=e.rules[n],s&&r.input===t.input&&e._hideHintByRule(r),r===t&&(s=!0)}_removeEventListeners(){const t=this;let e,r,s;for(let n=0;n<t.rules.length;n+=1){e=t.rules[n],s=e.action.split(","),r=document.querySelectorAll(e.input);for(let a=0;a<s.length;a+=1)for(let i=0;i<r.length;i++){let o=r[i];1===r.length&&(i="");let l=!1;t._isjQWidget(o)&&(l=!0),!l||"blur"!==s[a].trim()&&"focus"!==s[a].trim()||o&&"input"!==o.nodeName.toLowerCase()&&(o=o.querySelector("input")),o.removeEventListener(s[a].trim(),o[s[a].trim()+e.input+e.message.split(" ").join("_")+n+""+i]),delete o[s[a].trim()+e.input+e.message.split(" ").join("_")+n+""+i]}}}_addEventListeners(){const t=this;let e;for(let r=0;r<t.rules.length;r+=1){let s=t.rules[r];e=document.querySelectorAll(s.input);for(let n=0;n<e.length;n++){let a=e[n];1===e.length&&(n="");const i=s.action.split(",");let o=!1;t._isjQWidget(a)&&(o=!0);for(let e=0;e<i.length;e+=1){const l=i[e].trim();!o||"blur"!==l&&"focus"!==l||a&&"input"!==a.nodeName.toLowerCase()&&(a=a.querySelector("input"));const u=()=>t._validateRule(s);null!==a&&(a.addEventListener(l,u),a[l+s.input+s.message.split(" ").join("_")+r+""+n]=u)}}}const r={};for(let e=0;e<t.rules.length;e+=1){let s=t.rules[e],n=document.querySelector(s.input),a=Smart.Utilities.Extend(n);if(t.inputs[n.id]||(t.inputs[n.id]=[]),t.inputs[n.id].push(s),!n||r[s.input])continue;r[s.input]=!0,n.checkValidity=()=>t.validate(null,"#"+n.id);const i=e=>{if(t.errors[e]){const r={};let s=!0;for(let n in t.errors[e]){const a=!1===t.errors[e][n];s=s&&a,a||"required"!==n?a||"minLength"!==n?a||"maxLength"!==n?a||"min"!==n?a||"max"!==n?a||"pattern"!==n?a||(r[n]=!1):r.patternMismatch=!0:r.rangeOverflow=!0:r.rangeUnderflow=!0:r.tooLong=!0:r.tooShort=!0:r.valueMissing=!0}r.valid=s,n.errors=t.errors[e],n.classList.remove("smart-valid"),n.classList.remove("smart-invalid"),n.setAttribute("aria-invalid",!s),s?(n.classList.add("smart-valid"),a.fireEvent("valid")):(n.classList.add("smart-invalid"),a.fireEvent("invalid",{errors:t.errors[e],validityState:r}))}};n.addEventListener("change",(()=>{i(s.input)})),n.addEventListener("blur",(()=>{i(s.input)})),n.addEventListener("keyup",(()=>{i(s.input)}))}}_configureInputs(){const t=this;t.rules=t.rules||[];for(let e=0;e<t.rules.length;e+=1)t._handleInput(e)}_handleInput(t){const e=this,r=e.rules[t];r.message||(r.message="Validation Failed!"),r.action||(r.action="blur"),r.hintRender||(r.hintRender=()=>document.createElement("div")),r.type&&(r._type=r.type),r.type?e._handleRule(r):r.type=null}_handleRule(t){const e=this,r=t.type;let s,n=!1;if(s=e["_"+r],s?t.type=function(r){return s.apply(e,[r].concat(t))}:n=!0,n)throw new Error("Wrong parameter: "+t.type)}_required(t,e){if(t instanceof HTMLDivElement){let e=!1;const r=t.querySelectorAll("input"),s=t.querySelectorAll("smart-radio-button"),n=t.querySelectorAll("smart-check-box"),a=(t=>{let e=[];for(let r=0;r<t.length;r++){const s=t[r];""===s.value&&s.checked?e.push(!0):""===s.value&&!1===s.checked?e.push(!1):s.checked&&e.push(s.value)}return 1===e.length?e[0]:0===e.length?"":e})(s.length>0?s:n.length>0?n:r);return!1===a?e=!1:(!0===a||""!==a)&&(e=!0),e}switch(this._getType(t)){case"smart-input-inner":{let e=t.querySelector("input").value;if(e.length>0)return""!==e.trim();break}case"smart-combo-box":case"smart-drop-down-list":if(t.querySelector('input[smart-id="hiddenInput"]')){let e=t.querySelector('input[smart-id="hiddenInput"]').value;return!!e&&""!==e.trim()}return!!t.value;case"smart-masked-text-box":return t.maskFull;case"textarea":case"password":case"smart-input":case"smart-multi-input":case"smart-check-input":case"smart-numeric-text-box":case"smart-date-time-picker":case"smart-date-range-input":case"smart-multi-combo-input":case"smart-text-box-element":case"text":case"number":return!!t.value&&t.value.trim&&""!==t.value.trim();case"radio":case"smart-radio-button":{const t=document.querySelectorAll(e.input);let r=!1;if(null===t||t.length<=0)return;for(let e=0;e<t.length;e++)t[e].checked&&(r=!0);return r}case"smart-check-box":case"checkbox":return t.checked}return!1}_notNumber(t){return this._validateText(t,(function(t){return""===t||!/\d/.test(t)}))}_startWithLetter(t){return this._validateText(t,(function(t){return""===t||!/\d/.test(t.substring(0,1))}))}_numeric(t){return this._validateText(t,(function(t){if(""===t)return!0;const e=new Number(t);return!isNaN(e)&&isFinite(e)}))}_phone(t){return this._validateText(t,(function(t){return""===t||/^\(\d{3}\)(\d){3}-(\d){4}$/.test(t)}))}_stringLength(t,e){const r=this;let s=!0,n=!0;return e.min&&(s=r._minLength(t,e.min)),e.max&&(n=r._maxLength(t,e.max)),s&&n}_maxLength(t,e){return e=parseInt(e,10),this._validateText(t,(function(t){return t.length<=e}))}_minLength(t,e){return e=parseInt(e,10),this._validateText(t,(function(t){if(void 0!==t)return t.length>=e}))}_pattern(t,e){return this._validateText(t,(function(t){return""===t||e.pattern.test(t)}))}_compare(t,e){return this._validateText(t,(function(r){switch(e.comparisonType){case"!=":return r!=e.comparisonTarget(t,e);case"!==":return r!==e.comparisonTarget(t,e);case"<":return r<e.comparisonTarget(t,e);case"<=":return r<=e.comparisonTarget(t,e);case"==":return r==e.comparisonTarget(t,e);case"===":return r===e.comparisonTarget(t,e);case">":return r>e.comparisonTarget(t,e);case">=":return r>=e.comparisonTarget(t,e);default:return r==e.comparisonTarget(t,e)}}))}_custom(t,e){return e.validationCallback(t,e)}_range(t,e){return this._validateText(t,(function(t){if(""===t)return!0;let r=!0,s=!0;return"function"==typeof e.max.getMonth&&(t=new Date(t)),e.min&&(r=t>=e.min),e.max&&(s=t<=e.max),r&&s}))}_email(t){return this._validateText(t,(function(t){return""!==t&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}))}_zipCode(t){return this._validateText(t,(function(t){return""===t||/^(^\d{5}$)|(^\d{5}-\d{4}$)|(\d{3}-\d{2}-\d{4})$/.test(t)}))}_ssn(t){return this._validateText(t,(function(t){return""===t||/\d{3}-\d{2}-\d{4}/.test(t)}))}_validateText(t,e){const r=this;let s;if(r._isTextInput(t)){if(r._isjQWidget(t)){let e=t.querySelector("input");e&&(e=e.value,s=e.length>0?e:t.value)}else s=t.value;return e(s)}return!1}_isjQWidget(t){return t.tagName.toLowerCase().indexOf("smart")>=0||t.tagName.toLowerCase().indexOf("smart-input")>=0||t.tagName.toLowerCase().indexOf("smart-password-text-box")>=0||t.tagName.toLowerCase().indexOf("smart-complex-input")>=0||t.tagName.toLowerCase().indexOf("smart-formatted-input")>=0||t.tagName.toLowerCase().indexOf("smart-masked-text-box")>=0||t.tagName.toLowerCase().indexOf("smart-date-time-picker")>=0||t.tagName.toLowerCase().indexOf("smart-numeric-text-box")>=0||t.tagName.toLowerCase().indexOf("smart-check-box")>=0||t.tagName.toLowerCase().indexOf("smart-radio-button")>=0||t.tagName.toLowerCase().indexOf("smartcheckbox")>=0||t.tagName.toLowerCase().indexOf("angular")>=0}_isTextInput(t){if(!t)return;const e=this._getType(t);return"text"===e||"textarea"===e||"password"===e||"smart-input-inner"===e||"smart-numeric-text-box"===e||t.classList.contains("smart-input")||t.classList.contains("smart-date-time-range-input")||t.classList.contains("smart-multi-combo-input")||t.classList.contains("smart-multi-input")||t.classList.contains("smart-check-input")||t.classList.contains("smart-masked-text-box")||t.classList.contains("smart-text-box")||t.classList.contains("smart-date-time-picker")}_getType(t){if(!t)return;const e=t.tagName.toLowerCase();let r=e,s=t;const n=t.querySelector(".smart-input"),a=s.querySelector(".smart-input"),i=t.querySelector(".smart-text-box-element"),o=s.querySelector(".smart-text-box-element");if(e&&"input"!==e&&(s=t.querySelector("input"),s&&(r=s.tagName.toLowerCase())),"smart-password-text-box"===e||"smart-password-text-box"===r)return"password";if("smart-masked-text-box"===e||"smart-masked-text-box"===r)return"smart-masked-text-box";if("smart-check-box"===e||"smart-check-box"===r)return"smart-check-box";if("smart-radio-button"===e||"smart-radio-button"===r)return"smart-radio-button";if("smart-drop-down-list"===e||"smart-drop-down-list"===r)return"smart-drop-down-list";if("smart-numeric-text-box"===e||"smart-numeric-text-box"===r)return"smart-numeric-text-box";if("textarea"===e||"textarea"===r)return"textarea";if(n||a)return"smart-input";if(i||o)return"smart-text-box-element";if(n&&n.value&&n.value.length>0||a&&a.value&&a.value.length>0)return"smart-input-inner";if("input"===e||"input"===r){const e=s.type?s.type.toLowerCase():void 0;if(e)return e;const r=t.type?t.type.toLowerCase():void 0;return r||"text"}return e}_higherPriorityActive(t){const e=this;let r,s=!1;for(let n=e.rules.length-1;n>=0;n-=1){if(r=e.rules[n],s&&r.input===t.input&&r.hint)return!0;r===t&&(s=!0)}return!1}});