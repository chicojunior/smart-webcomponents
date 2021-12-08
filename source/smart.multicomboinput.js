
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

(()=>{Smart("smart-multi-combo-input",class extends Smart.CheckInput{static get properties(){return{autoAddNewTags:{value:!0,type:"boolean"},colorItems:{value:!0,type:"boolean"},inputTagsMode:{allowedValues:["one","many"],value:"many",type:"string"},hideInputTagsCloseButton:{value:!1,type:"boolean"},messages:{value:{en:{tagLabel:" item(s) selected",selectAll:"Select All",unselectAll:"Unselect All"}},type:"object",extend:!0},pills:{value:!1,type:"boolean"},singleSelect:{value:!1,type:"boolean"},selectAll:{value:!1,type:"boolean"}}}template(){return'<div id="inputContainer" role="presentation"><div class="smart-action-button" role="presentation" id="actionButton"> <input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" /></div><span class="smart-hidden smart-hint" id="span">[[hint]]</span><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup"><div id="arrow" class="arrow" aria-hidden="true"></div></div></div>'}_downHandler(e){const t=this,l=e.originalEvent.target;(t._tokenCloseButtonClick=l.closest(".smart-drop-down-list-unselect-button"))||t.readonly&&t._dropDownButtonDownHandler(e)}focus(){const e=this;e.readonly?HTMLElement.prototype.focus.apply(e,[]):e.$.input.focus()}_setFocusable(){const e=this;if(e.readonly){if(e.disabled||e.unfocusable)return void e.removeAttribute("tabindex");e.tabIndex=e.tabIndex>0?e.tabIndex:0,e.$.listen("keydown",e._keyDownHandler),e.$.listen("keyup",e._keyUpHandler)}}_documentUpHandler(e){const t=this,l=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if(t._tokenCloseButtonClick&&t._tokenCloseButtonClick===l.closest(".smart-drop-down-list-unselect-button")){const e=l.closest(".smart-token"),[s,n]=[e.getAttribute("data-label"),e.getAttribute("value")],o=t._selectedItems.findIndex((e=>s===e.label&&n===e.value)),[a,i]=[t.value,t.$.input.dataValue];let r,c;return o>-1&&t._selectedItems.splice(o,1),t.set("value",c=t._selectedItems.map((e=>e.label)).join(t.separator)),t.$.input.dataValue=r=t._selectedItems.map((e=>e.value)).join(t.separator),t._updateValue(),t.$.actionButton.contains(e)&&t.$.actionButton.removeChild(e),t.close(),void(c===a&&r===i||t.$.fireEvent("change",{value:r,label:c,oldValue:i,oldLabel:a}))}t.contains(l)||(t.$.dropDownContainer.contains(l.shadowParent||l)?t._isPointerDown&&(t._isPointerDown=!1,t.opened&&(t._preventLookup=!0),t.focus()):(t.opened&&(t._preventLookup=!0),t._isPointerDown||t.close(),t._isPointerDown=!1))}get selectedItems(){return this._selectedItems?this._selectedItems:[]}set selectedItems(e){this._selectedItems=e,this._updateValue()}_performSelect(e,t){const l=this;if(!e)return void l.close();const s=e.target?e.target.closest("li"):e;if(!s)return;l._selectedItems||(l._selectedItems=[]),s.classList.toggle("selected"),l.singleSelect&&(l._selectedItems=[],s.classList.add("selected"));const n=s.classList.contains("selected"),o={label:s.getAttribute("data-label"),value:s.getAttribute("value"),color:s.getAttribute("color"),image:s.getAttribute("image")},a=l.$.menu.children;for(let e=0;e<a.length;e++)l.singleSelect&&a[e]!==s&&a[e].classList.remove("selected"),a[e].classList.remove("active"),a[e].setAttribute("aria-selected",!1);if(n){if(l._selectedItems.push(o),e.noActiveState||(l._setActiveDescendant(s),s.classList.add("active")),l.dataSource){const e=l.dataSource.findIndex((e=>e.label===o.label&&""+e.value===o.value));l.set("selectedIndex",e)}}else{const e=l.dataSource.findIndex((e=>e.label===o.label&&""+e.value===o.value));l.dataSource&&(e>-1?(l._selectedItems.splice(e,1),l.set("selectedIndex",-1)):l.set("selectedIndex",e)),s.classList.remove("active")}s.setAttribute("aria-selected",n),l._updateValue(t),l.singleSelect&&l.close()}_updateValue(e){const t=this;let l=t._selectedItems,s=t.value,n=t.$.input.dataValue,[o,a]=[[],[]];l||(l=[]);for(let e=0;e<l.length;e++){const t=l[e];o.push(t.label),a.push(t.value)}if(t._createTags(),t.set("selectedValues",l.map((e=>e.value))),o=o.join(t.separator),t.set("value",o),t.$.input.dataValue=a=a.join(t.separator),t.$.input.value="",t.setAttribute("value",t.value),e||o===s&&a===n||t.$.fireEvent("change",{value:a,label:o,oldValue:n,oldLabel:s}),t.selectAll&&t._setSelectAllItemState(),!t.opened)return;const i=t.getBoundingClientRect(),r=window.scrollX,c=window.scrollY;t.$.dropDownContainer.style.left=-3+i.left+r+"px",t.$.dropDownContainer.style.top=i.bottom+c+1+"px"}_createTags(){const e=this,t=e._selectedItems||[];let l,s=document.createDocumentFragment();for(;"SPAN"===e.$.actionButton.firstElementChild.nodeName;)e.$.actionButton.removeChild(e.$.actionButton.firstElementChild);for(let n=0;n<t.length;n++){const o=t[n];if("one"===e.inputTagsMode&&!l||"many"===e.inputTagsMode){const n="one"===e.inputTagsMode?t.length+e.localize("tagLabel"):o.label;l=document.createElement("span"),l.classList.add("smart-token");let a=null,i="";if(o.image&&"many"===e.inputTagsMode&&(a=document.createElement("span"),a.style.backgroundImage=`url('${o.image}')`,a.className="smart-drop-down-list-selection-image",i=a.outerHTML),l.innerHTML=i+"<span class='smart-drop-down-list-selection-label' role=\"presentation\">"+n+"</span>",e.singleSelect||(l.innerHTML+='<span class=\'smart-drop-down-list-unselect-button\' role="button" aria-label="Unselect"></span>'),"many"===e.inputTagsMode){l.setAttribute("data-label",o.label),l.setAttribute("value",o.value),l.setAttribute("separator",e.separator);const t=o.color;if(t&&e.colorItems){l.setAttribute("color",t),l.style.setProperty("--smart-primary",t);const e=new Smart.Color(t).getInvertedColor();l.style.setProperty("--smart-primary-color",e)}}if(""===n&&e.singleSelect)continue;s.appendChild(l)}}e.$.actionButton.insertBefore(s,e.$.input);const n=e.getBoundingClientRect(),o=window.scrollX,a=window.scrollY;e.$.scrollView.style.left=-3+n.left+o+"px",e.$.scrollView.style.top=n.bottom+a+1+"px"}_render(e){const t=this,l=e.map((function(e,l){let s=e,n=e,o=e,a=null;"object"==typeof e&&(s=e.label,n=void 0!==e.value?e.value:s,a=void 0!==e.color?e.color:"",o=void 0!==e.id?e.id:l);const i=document.createElement("li"),r=document.createElement("a");if(r.href="#",i.id=t.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),i.setAttribute("data-label",s),i.setAttribute("value",n),i.setAttribute("role","option"),i.setAttribute("aria-selected",!1),i.setAttribute("aria-label",s),void 0!==o&&(i.id=o),a){i.setAttribute("color",a),i.style.setProperty("--smart-primary",a);const e=new Smart.Color(a).getInvertedColor();i.style.setProperty("--smart-primary-color",e)}if(r.innerHTML=s,r.setAttribute("aria-hidden",!0),e.icon&&(r.classList.add("icon"),r.classList.add(e.icon)),e.image){const t=document.createElement("span");t.style.backgroundImage=`url('${e.image}')`,t.className="smart-drop-down-list-selection-image",i.setAttribute("image",e.image),r.innerHTML=t.outerHTML+r.innerHTML}return i.appendChild(r),t.singleSelect&&""===e&&(i.innerHTML=""),i}));t.$.menu.innerHTML="",t._selectedItems||(t._selectedItems=[]);let s=t._selectedItems.map((e=>e.value));s.length||(s=(t.$.input.dataValue||t.$.input.value).split(t.separator).map((e=>e.trim())));let n=Array.from(t.$.actionButton.getElementsByClassName("smart-token")).map((e=>e.textContent.trim()));for(let e=0;e<l.length;e++){const o=l[e],a=o.getAttribute("value"),i=o.getAttribute("data-label"),r=s.indexOf(a);if(r>-1&&("one"===t.inputTagsMode||n[r]===i)){o.classList.add("selected"),o.setAttribute("aria-selected",!0),t._setActiveDescendant(o);t._selectedItems.findIndex((e=>e.label===i&&e.value===a))<0&&t._selectedItems.push({label:o.getAttribute("data-label"),value:o.getAttribute("value")})}t._setSelectAllItemState(),t.$.menu.appendChild(o)}}_next(){const e=this;let t=e._selectedItems?e._selectedItems[e._selectedItems.length-1]:void 0;t&&(t=e.$.menu.querySelector(`.active[data-label="${t.label}"][value="${t.value}"]`));const l=t||e.$.menu.querySelector(".active");if(!l){const t=e.$.menu.firstElementChild;return t.classList.add("active","focused"),void e._setActiveDescendant(t)}const s=e.$.menu.children;for(let e=0;e<s.length;e++)s[e].classList.remove("active","focused");e._setActiveDescendant();let n=l.nextElementSibling;n||(n=e.$.menu.firstElementChild),n.classList.add("active","focused"),e._setActiveDescendant(n),e.ensureVisible()}_prev(){const e=this;let t=e._selectedItems?e._selectedItems[e._selectedItems.length-1]:void 0;t&&(t=e.$.menu.querySelector(`.active[data-label="${t.label}"][value="${t.value}"]`));const l=t||e.$.menu.querySelector(".active");if(!l){const t=e.$.menu.firstElementChild;return t.classList.add("active","focused"),void e._setActiveDescendant(t)}const s=e.$.menu.children;for(let e=0;e<s.length;e++)s[e].classList.remove("active","focused");e._setActiveDescendant();let n=l.previousElementSibling;n||(n=e.$.menu.lastElementChild),n.classList.add("active","focused"),e._setActiveDescendant(n),e.ensureVisible()}_keyDownHandler(e){const t=this;t._suppressKeyPressRepeat=![40,38,9,13,27,16,17,18].includes(e.keyCode),e.shiftKey||e.altKey||e.ctrlKey?delete t._inputValue:(t._move(e),t._inputValue=t.$.input.value)}_keyUpHandler(e){const t=this;let l=t.$.input.value;if(t._selectedItems&&(l=t._selectedItems.map((e=>e.label)),t.$.input.value&&l.push(t.$.input.value),l=l.join(t.separator)),t.set("value",l),!e.shiftKey&&"F2"!==e.key){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:40===e.keyCode&&e.altKey&&t.open(),38===e.keyCode&&e.altKey&&t.close();break;case 8:{if(t.readonly)break;if(t.opened&&t.close(),t._inputValue&&t._inputValue.length)break;if(!t._selectedItems){t.readonly||(t.$.input.dataValue=t.$.input.value);break}const e=t._selectedItems[t._selectedItems.length-1];if(!e)break;t.$.menu.querySelector(`li[data-label="${e.label}"][value="${e.value}"]`)&&(t._selectedItems.pop(),t._updateValue());break}case 9:case 13:if(!t.opened)return void(t.autoAddNewTags&&13===e.keyCode&&"many"===t.inputTagsMode&&t._autoCreateTags());t._performSelect(t.$.menu.querySelector(".active")),e.stopPropagation(),e.preventDefault();break;case 27:if(!t.opened)return;t.close(),e.stopPropagation(),e.preventDefault();break;default:t._lookup(e),!t.opened||e.ctrlKey||e.shiftKey||(e.stopPropagation(),e.preventDefault())}delete t._inputValue}}_blurHandler(){super._blurHandler(),this._autoCreateTags()}_autoCreateTags(){const e=this;if(!e.autoAddNewTags||"many"===!e.inputTagsMode)return;e.dataSource||(e.dataSource=[]);const t=e.$.input.value.trim();if(!e.dataSource.find((e=>"string"==typeof e?e===t:e.label===t))){e._tempItems||(e._tempItems=[]);let l=t.trim();if(t.indexOf(",")>=0){l=t.split(",");for(let t=0;t<l.length;t++){const s=l[t].trim();""!==s&&(e._tempItems.push(s),e._creteaTagsFromValue(s))}}else""!==l&&(e._tempItems.push(l),e._creteaTagsFromValue(l));e.query="",e._updateValue(!0)}}propertyChangedHandler(e,t,l){const s=this;if("disabled"===e&&s._setFocusable(),"value"===e){s.displayMember!==s.valueMember&&"string"!=typeof l?(s.value=l[s.displayMember],s.$.input.dataValue=l[s.valueMember]):s.$.input.dataValue="";const e=s.$.menu.children;for(let t=0;t<e.length;t++)e[t].classList.remove("selected"),e[t].setAttribute("aria-selected",!1);s._setActiveDescendant(s.$.menu.querySelector("active")),s._creteaTagsFromValue(l)}else if("separator"===e){const e=s.$.actionButton.children;for(let t=0;t<e.length;t++){const s=e[t];s.classList.contains("smart-token")&&s.setAttribute("separator",l)}}else if("inputTagsMode"===e)s._createTags();else if("theme"===e||"rightToLeft"===e)s.$.scrollView[e]=l,l?s.$.dropDownContainer.setAttribute(Smart.Utilities.Core.toDash(e),""):s.$.dropDownContainer.removeAttribute(Smart.Utilities.Core.toDash(e));else if("inverted"===e)l?s.$.dropDownContainer.setAttribute("inverted",""):s.$.dropDownContainer.removeAttribute("inverted");else if("selectAll"===e)s._handleSelectAllItem();else if("selectedIndex"===e){if(super.propertyChangedHandler(e,t,l),s._selectedItems=[],s.dataSource){const e=s.dataSource[l];e&&s._selectedItems.push(e),s._updateValue(!0)}}else super.propertyChangedHandler(e,t,l)}_createElement(){const e=this,t=document.createElement("ul"),l=document.createElement("smart-scroll-viewer"),s=document.createElement("div");l.rightToLeft=e.rightToLeft,l.theme=e.theme,l.horizontalScrollBarVisibility="hidden",l.classList.add("smart-multi-combo-input-scroll-viewer"),e.rightToLeft&&s.setAttribute("right-to-left",""),s.setAttribute("theme",e.theme),s.classList.add("smart-multi-combo-input-drop-down-menu","smart-input-drop-down-menu","smart-check-input-drop-down-menu"),e.pills&&s.setAttribute("pills",""),e.singleSelect&&s.setAttribute("single-select",""),e.inverted?s.setAttribute("inverted",""):s.removeAttribute("inverted"),e.classList.add("smart-input"),s.appendChild(l),t.setAttribute("aria-multiselectable",!0),e.$.scrollView=l,e.$.menu=t,e.$.dropDownContainer=s,e.$.menu.onclick=function(t){t.stopPropagation(),t.preventDefault(),e._performSelect(t),e.focus()},e.classList.add("smart-input"),e.$.input.value="";const n=e.value;n&&e._creteaTagsFromValue(n),e._handleSelectAllItem(),e._setFocusable()}_creteaTagsFromValue(e=""){const t=this;if(e){const e=t.value.split(",");for(t.$.input.value="",t._selectedItems=[];"SPAN"===t.$.actionButton.firstElementChild.nodeName;)t.$.actionButton.removeChild(t.$.actionButton.firstElementChild);for(let l=0,s=e.length;l<s;l+=1){const s=e[l].trim();s&&t._selectedItems.push({label:s,value:s})}t._createTags()}else t.$.input.value="",t._selectedItems=[],t._createTags()}_handleSelectAllItem(){const e=this;if(e.selectAll){if(!e.$.selectAll){const t=document.createElement("ul"),l=document.createElement("li"),s=document.createElement("a");s.href="#",s.innerHTML=e.localize("selectAll"),s.setAttribute("aria-hidden",!0),l.id=e.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),l.setAttribute("role","option"),l.setAttribute("value",e.localize("selectAll")),l.setAttribute("aria-label",e.localize("selectAll")),l.classList.add("smart-select-all"),l.appendChild(s),l.onclick=function(t){t.stopPropagation(),t.preventDefault(),Array.from(e.$.menu.children).find((e=>!e.classList.contains("selected")))?e._selectAll():e._clearSelection(),e._setSelectAllItemState(),l.classList.contains("selected")&&l.classList.add("active"),e.focus()},t.appendChild(l),e.$.selectAll=t}e._setSelectAllItemState(),e.$.dropDownContainer.insertBefore(e.$.selectAll,e.$.scrollView)}else e.$.selectAll&&e.$.selectAll.remove()}_setSelectAllItemState(){const e=this;if(!e.$.selectAll)return;const t=e.$.selectAll.firstElementChild,l=t.firstElementChild,s=!Array.from(e.$.menu.children).find((e=>!e.classList.contains("selected")));t.removeAttribute("indeterminate"),t.classList.remove("selected","active"),l.innerHTML=e.localize("selectAll"),e._selectedItems&&e._selectedItems.length>0&&(s?(t.classList.add("selected"),l.innerHTML=e.localize("unselectAll")):t.setAttribute("indeterminate",""))}_selectAll(){const e=this,t=e._selectedItems.length,l=e.$.input.dataValue,s=e.value;e._clearSelection(!0);const n=e.$.menu.children;for(let t=0;t<n.length;t++){n[t].classList.contains("selected")||e._performSelect({target:n[t],noActiveState:!0},!0)}t!==e._selectedItems.length&&e.$.fireEvent("change",{value:e.$.input.dataValue,label:e.value,oldValue:l,oldLabel:s})}_clearSelection(e){const t=this;if(!t._selectedItems.length)return;const l=t.$.input.dataValue,s=t.value;for(t.$.input.dataValue="",t.value=t.$.input.value,t._selectedItems=[];"SPAN"===t.$.actionButton.firstElementChild.nodeName;)t.$.actionButton.removeChild(t.$.actionButton.firstElementChild);const n=t.$.menu.children;for(let e=0;e<n.length;e++)n[e].classList.remove("selected"),n[e].classList.remove("active"),n[e].setAttribute("aria-selected",!1);t._setActiveDescendant(t.$.menu.querySelector("active")),e||t.$.fireEvent("change",{value:"",label:"",oldValue:l,oldLabel:s});const o=t.getBoundingClientRect(),a=window.scrollX,i=window.scrollY;t.$.dropDownContainer.style.left=-3+o.left+a+"px",t.$.dropDownContainer.style.top=o.bottom+i+1+"px"}_open(){const e=this,t=e.getBoundingClientRect(),l=window.scrollX,s=window.scrollY;let n=0,o=0;if(!this.opened){if(e.timer&&clearTimeout(e.timer),e.$.scrollView.classList.remove("smart-input-drop-down-menu"),e.$.dropDownContainer.id=e.id+"_"+e.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),document.body.appendChild(e.$.dropDownContainer),e.setAttribute("aria-owns",e.$.dropDownContainer.id),e.readonly||e.$.input.setAttribute("aria-controls",e.$.dropDownContainer.id),e.$.scrollView.enableShadowDOM&&!e._importedStyle&&(e.$.scrollView.importStyle(e._getStyleUrl("smart.textbox.css")),e._importedStyle=!0),"static"!==getComputedStyle(document.body).position){const e=document.body.getBoundingClientRect();n=e.left,o=e.top}e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",""),e.$.dropDownContainer.style.left=-3+t.left+l-n+"px",e.$.dropDownContainer.style.top=t.bottom+s-o+1+"px",e.$.dropDownContainer.classList.remove("open"),e.$.dropDownContainer.onpointerdown=function(){e._isPointerDown=!0},requestAnimationFrame((function(){const t=e.dropDownWidth;if(e.$.scrollView.refresh&&e.$.scrollView.refresh(),e._refreshMenu(),e.$.dropDownContainer.setAttribute("open",""),e.setAttribute("open",""),e.$.dropDownButton.setAttribute("open",""),e.$.input.setAttribute("open",""),t&&"string"==typeof t&&-1!==t.indexOf("%")){const l=parseFloat(t)/100;e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",e.offsetWidth*l+"px")}else if("auto"!==t&&t)e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",parseFloat(t)+"px");else if("auto"===t){if(e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",""),e.$.scrollView.$.scrollViewerContainer.classList.contains("vscroll")){const t=e.$.scrollView.offsetWidth+parseFloat(getComputedStyle(e.$.scrollView).getPropertyValue("--smart-scroll-bar-size"));e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",t+"px")}}else{e.$.menu.style.width="auto";let t=e.$.menu.offsetWidth;const l=e.$.menu.querySelectorAll("li");for(let t=0;t<l.length;t++)e._maxDropDownWidth=Math.max((l[t].firstElementChild||l[t]).offsetWidth,e._maxDropDownWidth);e.$.scrollView.computedVerticalScrollBarVisibility&&(t+=e.$.scrollView.$&&e.$.scrollView.$.verticalScrollBar?e.$.scrollView.$.verticalScrollBar.offsetWidth:30),e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",Math.max(t,e.offsetWidth-8)+"px"),e.$.menu.style.width=""}(e.shadowRoot||e.isInShadowDOM)&&e.$.scrollView._scrollView&&Smart.ScrollBar&&requestAnimationFrame((()=>e.$.scrollView._scrollView.vScrollBar.refresh()))})),e.$.scrollView.refresh&&e.$.scrollView.refresh(),e._refreshMenu(),this.opened=!0,e.setAttribute("aria-expanded",!0)}}close(){const e=this;return!!e.opened&&(e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){e.$.dropDownContainer.parentNode&&!e.opened&&(document.body.removeChild(e.$.dropDownContainer),e.removeAttribute("aria-owns"),e.readonly||e.$.input.removeAttribute("aria-controls"))}),1e3),e.$.dropDownContainer.removeAttribute("open"),e.$.dropDownButton.removeAttribute("open"),e.$.input.removeAttribute("open"),e.removeAttribute("open"),e.opened=!1,e.setAttribute("aria-expanded",!1),e.focus(),e.$.fireEvent("close"),!0)}});window.Smart.Color=class{constructor(e){this.r=this.g=this.b=0,this.hex="";const t=this.getStandardizedColor(e);t&&this.setHex(t.substring(1))}getStandardizedColor(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}getInvertedColor(){if(""===this.hex)return"transparent";return 255-(.299*this.r+.587*this.g+.114*this.b)<105?"Black":"White"}hexToRgb(e){let t="00",l="00",s="00";return 6===(e=this.validateHex(e)).length?(t=e.substring(0,2),l=e.substring(2,4),s=e.substring(4,6)):(e.length>4&&(t=e.substring(4,e.length),e=e.substring(0,4)),e.length>2&&(l=e.substring(2,e.length),e=e.substring(0,2)),e.length>0&&(s=e.substring(0,e.length))),{r:this.hexToInt(t),g:this.hexToInt(l),b:this.hexToInt(s)}}validateHex(e){return(e=(e=new String(e).toUpperCase()).replace(/[^A-F0-9]/g,"0")).length>6&&(e=e.substring(0,6)),e}webSafeDec(e){return e=Math.round(e/51),e*=51}hexToWebSafe(e){let t,l,s;return 3===e.length?(t=e.substring(0,1),l=e.substring(1,1),s=e.substring(2,1)):(t=e.substring(0,2),l=e.substring(2,4),s=e.substring(4,6)),this.intToHex(this.webSafeDec(this.hexToInt(t)))+this.intToHex(this.webSafeDec(this.hexToInt(l)))+this.intToHex(this.webSafeDec(this.hexToInt(s)))}rgbToWebSafe(e){return{r:this.webSafeDec(e.r),g:this.webSafeDec(e.g),b:this.webSafeDec(e.b)}}rgbToHex(e){return this.intToHex(e.r)+this.intToHex(e.g)+this.intToHex(e.b)}intToHex(e){let t=parseInt(e).toString(16);return 1===t.length&&(t="0"+t),t.toUpperCase()}hexToInt(e){return parseInt(e,16)}setRgb(e,t,l){let s=function(e){return e<0||e>255||isNaN(parseInt(e))?0:e};this.r=s(e),this.g=s(t),this.b=s(l),this.hex=this.rgbToHex(this)}setHex(e){this.hex=e;let t=this.hexToRgb(this.hex);this.r=t.r,this.g=t.g,this.b=t.b}}})();