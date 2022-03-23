
/* Smart UI v13.1.1 (2022-03-23) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-date-input",class extends Smart.Input{static get properties(){return{autoClose:{value:!1,type:"boolean"},autoCloseDelay:{value:0,type:"number"},dropDownButtonPosition:{allowedValues:["none","left","right"],value:"right",defaultReflectToAttribute:!0,type:"string"},dropDownHeight:{type:"any",value:"auto"},min:{type:"any",value:new Date(1900,0,1)},max:{type:"any",value:new Date(2100,0,1)},messages:{value:{en:{hours:"Hours",minutes:"Minutes",am:"am",pm:"pm"}},type:"object",extend:!0},placeholder:{value:"MM/dd/yyyy",type:"string"},dateTimeFormat:{type:"any",value:{year:"numeric",month:"numeric",day:"numeric"}},value:{type:"any",value:""}}}template(){return'<div id="inputContainer" role="presentation"><input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" /><span class="smart-hidden smart-hint" id="span">[[hint]]</span><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup"><div id="arrow" class="arrow" aria-hidden="true"></div></div></div>'}static get listeners(){return{"input.change":"_changeHandler","input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_keyDownHandler","input.keyup":"_keyUpHandler","input.keypress":"_keyPressHandler","dropDownButton.down":"_dropDownButtonDownHandler","inputContainer.down":"_downHandler","document.up":"_documentUpHandler"}}_calendarDropDownClickHandler(e){const t=this;t.autoClose&&e.target.closest(".smart-calendar-cell")&&(clearTimeout(t._autoCloseTimeout),t._autoCloseTimeout=setTimeout((function(){t.close()}),t.autoCloseDelay))}render(){super.render(),this.value&&this.value instanceof Date&&this._setInputValue(this.value)}focus(){this.$.input.focus()}select(){const e=this;e.readonly?e.$.input.focus():e.$.input.select()}_documentUpHandler(e){const t=this,o=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;t.contains(o)?requestAnimationFrame((()=>{})):t.$.scrollView.contains(o.shadowParent||o)?t._isPointerDown&&(t._isPointerDown=!1,t.opened&&(t._preventLookup=!0),t.$.input.focus()):(t.opened&&(t._preventLookup=!0),t._isPointerDown=!1,t.close())}_changeHandler(e){const t=this;e.stopPropagation(),t._performSelect();const o=t._getInputValue();t._oldValue||(t._oldValue=null),t.$.fireEvent("change",{value:o,oldValue:t._oldValue}),t._oldValue=o}_focusHandler(){const e=this;if(e.setAttribute("focus",""),e.readonly||0!==e.minLength||0!==e.$.input.value.length||e._preventLookup){if(e.$.fireEvent("focus"),e.value){const t=e._getInputValue();e._setInputValue(t)}delete e._preventLookup}}_blurHandler(){const e=this;if(e.opened||e.removeAttribute("focus"),e._popup&&e._popup.isCompleted&&e.opened)e._setInputValue(e._popup.value);else{const t=e._getInputValue();e._setInputValue(t)}e.$.fireEvent("blur"),delete e._preventLookup}_getInputValue(){const e=this,t=e.$.input.value;let o=null;const a=t=>{let o=new Date(Date.parse(t));if("Invalid Date"===o.toString()&&(o=null),!o||e.locale&&"en"!==e.locale){let e=(new Smart.Utilities.DateTime).tryparseDate(t,null);if(e)return e}return o};return e.dateTimeFormat.day&&e.dateTimeFormat.month&&e.dateTimeFormat.year?o=a(t):e.dateTimeFormat.day&&e.dateTimeFormat.month&&!e.dateTimeFormat.year?(o=a(t),e._popup.value||(e._popup.value=new Date),e._popup.isCompleted?o.setFullYear(e._popup.value.getFullYear(),o.getMonth(),o.getDate()):o.setFullYear((new Date).getFullYear(),o.getMonth(),o.getDate())):!e.dateTimeFormat.day&&e.dateTimeFormat.month&&e.dateTimeFormat.year&&(e._popup.value||(e._popup.value=new Date),o=a(t),e._popup.isCompleted?o.setFullYear(o.getFullYear(),o.getMonth(),e._popup.value.getDate()):o.setFullYear(o.getFullYear(),o.getMonth(),(new Date).getDate())),o<e.min&&(o=e.min),o>e.max&&(o=e.max),o}getDate(){return this._getInputValue()}getValue(){return this._getInputValue()}setValue(e){this._setInputValue(e)}_setInputValue(e){const t=this;if(!e)return t.$.input.value="",t.removeAttribute("data-value"),void(t.value=null);e<t.min&&(e=t.min),e>t.max&&(e=t.max);const o=t.dateTimeFormat;o&&o.timeZone&&delete o.timeZone;let a=new Intl.DateTimeFormat(t.locale,o).format(e);t.hasAttribute("focus")&&(a=new Intl.DateTimeFormat(t.locale,{year:"numeric",day:"numeric",month:"numeric"}).format(e)),t.$.input.value=t.value=a,t.setAttribute("data-value",e)}_performSelect(){}getFormattedValue(e,t){const o=this;return null===t?parseFloat(e):(e||(e=new Date),t||(t=o.dateTimeFormat).timeZone&&delete t.timeZone,new Intl.DateTimeFormat(o.locale,t).format(e))}_open(){const e=this,t=e.getBoundingClientRect(),o=window.scrollX,a=window.scrollY;let n=0,l=0;if(this.opened)return;if(e.timer&&clearTimeout(e.timer),document.body.appendChild(e.$.scrollView),e.setAttribute("aria-owns",e.$.scrollView.id),e.readonly||e.$.input.setAttribute("aria-controls",e.$.scrollView.id),e.$.scrollView.enableShadowDOM&&!e._importedStyle&&(e.$.scrollView.importStyle(e._getStyleUrl("smart.textbox.css")),e._importedStyle=!0),"static"!==getComputedStyle(document.body).position){const e=document.body.getBoundingClientRect();n=e.left,l=e.top}const r=document.body.getBoundingClientRect(),i=-3+t.left+o-n;e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",""),i+e.$.scrollView.offsetWidth<r.right?e.$.scrollView.style.left=i+"px":e.$.scrollView.style.left=i+e.offsetWidth-e.$.scrollView.offsetWidth+"px",e.$.scrollView.style.top=t.bottom+a-l+1+"px",e.$.scrollView.classList.remove("open"),e.$.scrollView.onpointerdown=function(){e._isPointerDown=!0},e._refreshPopup(),requestAnimationFrame((function(){e.$.scrollView.setAttribute("open",""),e.setAttribute("open",""),e.$.dropDownButton.setAttribute("open",""),e.$.input.setAttribute("open","")})),this.opened=!0}_refreshPopup(){const e=this,t=e._getInputValue();e._popup.isAttached&&e._popup.select(t)}close(){const e=this;return!!e.opened&&(e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){e.$.scrollView.parentNode&&!e.opened&&(document.body.removeChild(e.$.scrollView),e.removeAttribute("aria-owns"),e.readonly||e.$.input.removeAttribute("aria-controls"))}),1e3),e.$.scrollView.removeAttribute("open"),e.$.dropDownButton.removeAttribute("open"),e.$.input.removeAttribute("open"),e.removeAttribute("open"),e.opened=!1,!0)}_lookup(){}_downHandler(e){const t=this;t.readonly&&t._dropDownButtonDownHandler(e)}_dropDownButtonDownHandler(e){return this._toggle(),e.preventDefault(),e.stopPropagation(),e.originalEvent.preventDefault(),e.originalEvent.stopPropagation(),!1}_toggle(){const e=this;e.opened?e.close():e.open()}open(){const e=this;e._process(),e.$.input.focus(),setTimeout((function(){e.$.input.focus()}),25)}_process(){this._performSelect(void 0,!0),this._open()}_matcher(){}_sorter(){}_highlighter(){}_render(){}ensureVisible(){}_next(){}_prev(){}_move(e){e.stopPropagation()}_keyPressHandler(e){this._suppressKeyPressRepeat||e.shiftKey||e.altKey||e.ctrlKey}_insertKey(e,t=1){const o=this,a=o.$.input.selectionStart,n=o.$.input.value,l=n.substring(0,a),r=n.substring(a+t);o.$.input.value=l+e.key+r,o.$.input.selectionStart=o.$.input.selectionEnd=a+1}_keyDownHandler(e){const t=this;t._suppressKeyPressRepeat=![40,38,9,13,27,16,17,18].includes(e.keyCode);let o=!1;switch(e.keyCode>=48&&e.keyCode<=57&&(o=!0),e.keyCode>=96&&e.keyCode<=105&&(o=!0),e.key){case"/":case"-":case":":case"ArrowLeft":case"ArrowUp":case"ArrowDown":case"ArrowRight":case"Home":case"End":case"Delete":case"Backspace":case"Tab":o=!0}e.ctrlKey&&(o=!0),o||e.preventDefault(),"Tab"===e.key&&t.close(),e.shiftKey||e.altKey||e.ctrlKey}_getMask(){const e=this,t=e.getFormattedValue(new Date(2020,10,10),{year:"numeric",month:"numeric",day:"numeric"});let o="/";-1===t.indexOf(o)&&(o="-");const a=t.split(o);e._mask=[];let n=0;for(let t=0;t<a.length-1;t++)n+=a[t].length,e._mask[n]=o,n++}_appendPreOrPostMatch(e,t){for(var o=0,a=!1,n=0,l=e.length;n<l;n++){var r=e.charAt(n);switch(r){case"'":a?t.push("'"):o++,a=!1;break;case"\\":a&&t.push("\\"),a=!a;break;default:t.push(r),a=!1}}return o}_keyUpHandler(e){const t=this;let o=t.$.input.value.trim();const a=new Date(o);if(e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105){if(void 0!==t._mask[o.length]){let e=[...o],a=t._mask.flat().length,n=0;for(let a=0;a<e.length;a++)e[a]===t._mask[o.length]&&n++;n<a&&(o+=t._mask[o.length],t.$.input.value=o)}}else if(" "===e.key||"Enter"===e.key){const o=t._getInputValue();t._setInputValue(o),"Enter"===e.key&&t.opened&&t.close()}else if("/"===e.key||":"===e.key||"-"===e.key){const e=t.$.input.selectionStart,o=t._getInputValue();t._setInputValue(o),t.$.input.selectionStart=e,"/"===t.$.input.value[e]&&t.$.input.selectionStart++}if("Invalid Date"!==a.toString()?t.value=a:t.value=null,t._refreshPopup(),!e.shiftKey)switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:40===e.keyCode&&e.altKey&&(t.open(),setTimeout((()=>{t._popup.focus()}),50)),38===e.keyCode&&e.altKey&&(t.close(),t.focus());break;case 27:if(!t.opened)return;t.close(),e.stopPropagation(),e.preventDefault()}}propertyChangedHandler(e,t,o){const a=this;switch(e){case"value":"string"==typeof o?a.$.input.value=o:a._setInputValue(o);break;case"month":case"min":case"max":a.$.calendar[e]=o;break;case"theme":case"rightToLeft":case"animation":case"inverted":a.$.calendar&&(a.$.calendar[e]=o),a.$.scrollView&&(o?a.$.scrollView.setAttribute(Smart.Utilities.Core.toDash(e),"boolean"==typeof o?"":o):a.$.scrollView.removeAttribute(Smart.Utilities.Core.toDash(e)));break;case"locale":a._performSelect(),a.$.calendar&&(a.$.calendar.locale=o);break;default:super.propertyChangedHandler(e,t,o)}}_createElement(){const e=this,t=document.createElement("div");if(t.classList.add("smart-input-drop-down-menu","smart-date-input-drop-down-menu"),t.setAttribute("animation",e.animation),t.setAttribute("role","presentation"),e.rightToLeft?t.setAttribute("right-to-left",""):t.removeAttribute("right-to-left"),e.inverted?t.setAttribute("inverted",""):t.removeAttribute("inverted"),t.onclick=function(t){t.stopPropagation(),t.preventDefault();const o=t.target;t.altKey?e.$.input.focus():e._popup.focus(),o.closest("smart-done-button")&&e.close()},!t.id){const e=t.tagName.toLowerCase();t.id=e.slice(0,1).toLowerCase()+e.slice(1)+Math.floor(65536*(1+Math.random())).toString(16).substring(1)}e.$.scrollView=t,e.classList.add("smart-input");const o=document.createElement("smart-calendar");if(e._popup=o,e.$.calendar=o,o.locale=e.locale,o.$.listen("keyup",(t=>{if("Enter"===t.key){e._oldValue||(e._oldValue=null);const t=o.selectedDates[0];o.value=t,e._setInputValue(t),e.$.fireEvent("change",{value:t,oldValue:e._oldValue}),e._oldValue=t,e.close(),e.focus()}"Escape"===t.key&&(e.close(),e.focus()),"Tab"===t.key&&(e.close(),e.focus())})),o.onchange=t=>{e._oldValue||(e._oldValue=null);const o=t.detail.value[0];e._setInputValue(o),e.$.fireEvent("change",{value:o,oldValue:e._oldValue}),e._oldValue=o},o.onclick=t=>{const a=o.selectedDates[0];e._setInputValue(a),e._calendarDropDownClickHandler(t)},t.appendChild(o),e.$.input.value=e.value,e.value&&(""+e.value).length>0){const t=e._getInputValue();e._oldValue=t,e._setInputValue(t)}e._getMask()}_refreshMenu(){}_setAriaRelations(){const e=this,t=e.getAttribute("aria-label");e.readonly?(e.setAttribute("role","button"),!t&&e.placeholder&&e.setAttribute("aria-label",e.placeholder),e.removeAttribute("aria-readonly"),e.$.input.setAttribute("aria-hidden",!0),e.$.input.removeAttribute("aria-controls"),e.$.dropDownButton.setAttribute("aria-hidden",!0)):(e.setAttribute("role","presentation"),t&&t===e.placeholder&&e.removeAttribute("aria-label"),e.$.input.removeAttribute("aria-hidden"),e.$.dropDownButton.removeAttribute("aria-hidden")),e.setAttribute("aria-haspopup","dialog"),e.$.scrollView.setAttribute("role","dialog")}_setActiveDescendant(){}_setInputPurpose(){}});