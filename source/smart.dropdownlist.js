
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-drop-down-list",class extends Smart.ContentElement{static get properties(){return{autoCloseDelay:{value:100,type:"number"},dataSource:{value:null,type:"any",reflectToAttribute:!1},displayLoadingIndicator:{value:!1,type:"boolean"},displayMember:{value:"",type:"string"},displayMode:{allowedValues:["outlined","filled","underlined"],value:"outlined",type:"string"},dropDownAppendTo:{value:null,type:"any"},dropDownButtonPosition:{allowedValues:["none","left","right","top","bottom"],value:"right",defaultReflectToAttribute:!0,type:"string"},dropDownMinHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownOpenMode:{allowedValues:["none","default","dropDownButton","auto"],value:"default",type:"string"},dropDownOverlay:{value:!1,type:"boolean"},dropDownPlaceholder:{value:"No Items",type:"string"},dropDownPosition:{allowedValues:["auto","top","bottom","overlay-top","overlay-center","overlay-bottom","center-bottom","center-top"],value:"auto",type:"string"},dropDownMinWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxWidth:{value:"",type:"any",validator:"_propertyValidator"},filterable:{value:!1,type:"boolean"},filterInputPlaceholder:{value:"",type:"string"},filterCallback:{value:null,type:"function?"},filterMode:{value:"startsWithIgnoreCase",allowedValues:["contains","containsIgnoreCase","doesNotContain","doesNotContainIgnoreCase","equals","equalsIgnoreCase","startsWith","startsWithIgnoreCase","endsWith","endsWithIgnoreCase","custom"],type:"string"},grouped:{value:!1,type:"boolean"},groupMember:{value:"",type:"string"},hint:{value:"",type:"string"},horizontalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]},incrementalSearchDelay:{value:700,type:"number?"},incrementalSearchMode:{value:"startsWithIgnoreCase",allowedValues:["contains","containsIgnoreCase","doesNotContain","doesNotContainIgnoreCase","equals","equalsIgnoreCase","startsWith","startsWithIgnoreCase","endsWith","endsWithIgnoreCase"],type:"string"},itemMeasureMode:{value:"auto",allowedValues:["auto","precise"],type:"string"},inputMember:{value:"label",type:"string"},itemTemplate:{value:null,type:"any"},itemHeight:{value:null,type:"number?"},label:{value:"",type:"string"},loadingIndicatorPlaceholder:{value:"Loading...",type:"string"},loadingIndicatorPosition:{value:"center",allowedValues:["bottom","center","top"],type:"string"},messages:{extend:!0,value:{en:{invalidNode:'{{elementType}}: Invalid parameter "{{node}}" when calling {{method}}.'}},type:"object"},name:{value:"",type:"string"},opened:{value:!1,type:"boolean"},placeholder:{value:"",type:"string"},resizeMode:{value:"none",allowedValues:["none","horizontal","vertical","both"],type:"string"},resizeIndicator:{value:!1,type:"boolean"},selectionDisplayMode:{value:"plain",allowedValues:["plain","placeholder","tokens"],type:"string"},selectionMode:{value:"zeroAndOne",allowedValues:["none","oneOrManyExtended","zeroOrMany","oneOrMany","zeroOrOne","zeroAndOne","one","checkBox","radioButton"],type:"string"},selectedIndexes:{value:[],type:"array"},selectedValues:{value:[],type:"array"},sorted:{value:!1,type:"boolean"},sortDirection:{value:"asc",type:"string"},tokenTemplate:{value:null,type:"any"},type:{value:"list",type:"string",defaultReflectToAttribute:!0,readonly:!0},valueMember:{value:"",type:"string"},virtualized:{value:!1,type:"boolean"},verticalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]}}}static get listeners(){return{"actionButton.down":"_buttonsDownHandler","actionButton.mouseenter":"_buttonsMouseEventsHandler","actionButton.mouseleave":"_buttonsMouseEventsHandler","actionButton.focus":"_buttonsFocusHandler","actionButton.blur":"_buttonsFocusHandler","document.selectstart":"_selectStartHandler","document.dragstart":"_dragStartHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","document.move":"_documentMoveHandler","dropDownButton.down":"_buttonsDownHandler","dropDownButton.mouseenter":"_buttonsMouseEventsHandler","dropDownButton.mouseleave":"_buttonsMouseEventsHandler",keydown:"_keyDownHandler",keyup:"_keyUpHandler",focus:"_focusEventHandler",blur:"_blurEventHandler","dropDownButton.focus":"_buttonsFocusHandler","dropDownButton.blur":"_buttonsFocusHandler","dropDownContainer.transitionend":"_dropDownTransitionendHandler","listBox.change":"_listBoxChangeHandler","listBox.itemClick":"_listBoxItemClickHandler","listBox.keydown":"_listBoxKeyDownHandler","listBox.bindingComplete":"_bindingCompleteHandler",mouseenter:"_mouseEnterHandler",mouseleave:"_mouseLeaveHandler",resize:"_resizeHandler","resizeBar.move":"_resizeBarMoveHandler",styleChanged:"_styleChangedHandler",wheel:"_mouseWheelHandler"}}template(){return'<div id="container" role="presentation">\n                    <span class="smart-label" id="label">[[label]]</span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <div class="smart-buttons-container" id="buttonsContainer" role="presentation">\n                            <span id="actionButton" class ="smart-action-button" role="presentation">[[placeholder]]</span>\n                            <span id="dropDownButton" class="smart-drop-down-button">\n                                <span class ="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>\n                            </span>\n                        </div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="presentation">\n                            <smart-list-box id="listBox" unfocusable\n                                    animation="[[animation]]"\n                                    data-source="[[dataSource]]"\n                                    disabled="[[disabled]]"\n                                    display-loading-indicator="[[displayLoadingIndicator]]"\n                                    display-member="[[displayMember]]"\n                                    filterable="[[filterable]]"\n                                    filter-callback="[[filterCallback]]"\n                                    filter-mode="[[filterMode]]"\n                                    filter-input-placeholder="[[filterInputPlaceholder]]"\n                                    grouped="[[grouped]]"\n                                    group-member="[[groupMember]]"\n                                    item-height="[[itemHeight]]"\n                                    item-measure-mode="[[itemMeasureMode]]"\n                                    item-template="[[itemTemplate]]"\n                                    incremental-search-delay="[[incrementalSearchDelay]]"\n                                    incremental-search-mode="[[incrementalSearchMode]]"\n                                    loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"\n                                    loading-indicator-position="[[loadingIndicatorPosition]]"\n                                    name="[[name]]"\n                                    placeholder="[[dropDownPlaceholder]]"\n                                    right-to-left="[[rightToLeft]]"\n                                    readonly="[[readonly]]"\n                                    selected-indexes="{{selectedIndexes}}"\n                                    selection-mode="[[selectionMode]]"\n                                    selected-values="{{selectedValues}}"\n                                    sorted="[[sorted]]"\n                                    sort-direction="[[sortDirection]]"\n                                    theme="[[theme]]"\n                                    value-member="[[valueMember]]"\n                                    horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"\n                                    vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]"\n                                    virtualized="[[virtualized]]">\n                                <content></content>\n                            </smart-list-box>\n                            <div id="resizeBar" class="smart-drop-down-resize-bar" aria-label="Resize">\n                                <div></div>\n                            </div>\n                         </div>\n                    </div>\n                    <span class="smart-hint smart-hidden" id="hint">[[hint]]</span>\n                </div>'}static get styleUrls(){return["smart.dropdownlist.css","smart.dropdown.css"]}propertyChangedHandler(e,t,o){super.propertyChangedHandler(e,t,o);const n=this;switch(e){case"animation":n.$.dropDownContainer.setAttribute("animation",n.animation);break;case"disabled":n._setFocusable(),n.close(),n._positionDetection.handleAutoPositioning();break;case"dataSource":case"displayMember":case"inputMember":n.$.actionButton&&(n.$.actionButton.innerHTML=n.placeholder),n._setDropDownSize(),n._positionDetection.checkBrowserBounds("vertically"),n._positionDetection.positionDropDown(),n._positionDetection.checkBrowserBounds("horizontally");break;case"dropDownAppendTo":n._positionDetection.dropDownAppendToChangedHandler();break;case"dropDownOpenMode":n._setFocusable(),n.$dropDownContainer.addClass("smart-visibility-hidden"),n.$.dropDownContainer.setAttribute("drop-down-open-mode",o),n.$.dropDownButton.removeAttribute("selected"),n.removeAttribute("drop-down-button-focus"),n.removeAttribute("action-button-focus"),n.opened=!1,n._ariaButton&&n._ariaButton.setAttribute("aria-expanded",!1),n._setAriaRelations();break;case"dropDownOverlay":o||n._positionDetection.removeOverlay();break;case"dropDownPosition":n._positionDetection.dropDownPositionChangedHandler();break;case"dropDownMinWidth":case"dropDownWidth":case"dropDownMaxWidth":case"dropDownHeight":case"dropDownMinHeight":case"dropDownMaxHeight":n._setDropDownSize();break;case"filterable":n.$.listBox.filterable=o,n._dropDownSize&&"auto"===n._dropDownSize.height&&n._setDropDownSize();break;case"label":if(!n._ariaButton)return;o?n._ariaButton.setAttribute("aria-labelledby",n.$.label.id):"DropDownList"===n.elementName&&n._ariaButton.setAttribute("aria-labelledby",n.$.actionButton.id);break;case"opened":if(n.disabled||n.readonly)return;o?n.open():n.close();break;case"placeholder":n._applySelection();break;case"readonly":n.close();break;case"resizeIndicator":o?n.$.dropDownContainer.setAttribute("resize-indicator",""):n.$.dropDownContainer.removeAttribute("resize-indicator");break;case"resizeMode":n.$.dropDownContainer.setAttribute("resize-mode",n.resizeMode);break;case"selectedValues":case"selectedIndexes":0===o.length?n.$.actionButton.innerHTML=n.placeholder:n._applySelection();break;case"selectionMode":n.$.listBox&&(n.$.listBox[e]=o,"checkBox"!==o&&"radioButton"!==o&&"checkBox"!==t&&"radioButton"!==t||n._setDropDownSize());break;case"selectionDisplayMode":n._applySelection();break;case"tokenTemplate":n._tokenTemplate=n._validateTemplate(n.tokenTemplate),n._applySelection();break;case"unfocusable":n._setFocusable()}}appendChild(e){const t=this;if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e?(t.$.listBox.appendChild(e),t._dropDownSize&&"auto"===t._dropDownSize.height&&t._setDropDownSize()):t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"appendChild",node:"node"}))}attached(){const e=this;super.attached(),e.isCompleted&&e.$.dropDownContainer&&(e._positionDetection.dropDownAttached("_setDropDownSize"),e._positionDetection.checkBrowserBounds(),e.selectedIndexes&&e._applySelection())}detached(){const e=this;super.detached(),e.$.dropDownContainer&&(e.close(),e._positionDetection&&e._positionDetection.dropDownDetached())}clearItems(){const e=this;e.$.listBox&&(e.$.listBox.clearItems(),e.$.actionButton.innerHTML=e.placeholder)}clearSelection(){const e=this;e.$.listBox&&(e.$.listBox.clearSelection(),e.$.actionButton.innerHTML=e.placeholder)}close(){const e=this;e.$dropDownContainer.hasClass("smart-visibility-hidden")||e.$.fireEvent("closing").defaultPrevented||(e.$dropDownContainer.addClass("smart-visibility-hidden"),e.$.fireEvent("close"),e.$.dropDownButton&&e.$.dropDownButton.removeAttribute("selected"),e.opened=!1,e._ariaButton&&e._ariaButton.setAttribute("aria-expanded",!1),e._preventDropDownClose=!1,e._positionDetection.removeOverlay(!0),e.$.listBox.removeAttribute("focus"),e._edgeMacFF&&!e.hasAnimation&&e.$.dropDownContainer&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view")))}cloneNode(){const e=this;if(!e.$.listBox)return;let t=HTMLElement.prototype.cloneNode.apply(e,Array.prototype.slice.call(arguments,0,1));return t.dataSource=e.dataSource,t}ensureVisible(e){this.$.listBox&&this.$.listBox.ensureVisible(e)}getItem(e){if(this.$.listBox)return this.$.listBox.getItem(e)}get items(){const e=this;return e.$&&e.$.listBox?e.$.listBox.items:[]}get _focusedItem(){const e=this;return e.$&&e.$.listBox?e.$.listBox._focusedItem:null}insert(e,t){const o=this;o.$.listBox&&(o.$.listBox.insert(e,t),o._applySelection(),o._dropDownSize&&"auto"===o._dropDownSize.height&&o._setDropDownSize())}insertBefore(e,t){const o=this;if(!o.isCompleted){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(o,e.concat(Array.prototype.slice.call(arguments)))}e&&t?o.$.listBox&&(o.$.listBox.insertBefore(e,t),o._dropDownSize&&"auto"===o._dropDownSize.height&&o._setDropDownSize()):o.error(o.localize("invalidNode",{elementType:o.nodeName.toLowerCase(),method:"insertBefore",node:"newNode/referenceNode"}))}toggle(){const e=this;e.opened?e.close():e.open()}open(){const e=this,t=function(){for(let t=0;t<e.items.length;t++)if(!e.items[t].disabled)return e.items[t]};if(!e.disabled&&e.offsetHeight&&e.$dropDownContainer.hasClass("smart-visibility-hidden")){if(e.$dropDownContainer.hasClass("not-in-view")&&e.$dropDownContainer.removeClass("not-in-view"),e.$.dropDownContainer.style.transition=null,e.dropDownAppendTo){const t=e.getBoundingClientRect();if(e.$.container.contains(e.$.dropDownContainer)){let t=0;const o=setInterval((function(){const n=e.getBoundingClientRect();t++,n.top===e._positionTop&&t<10||(e.open(),clearInterval(o),e._positionTop=n.top)}),100);return}t.top!==e._positionTop&&(e._positionTop=t.top)}e.$.fireEvent("opening").defaultPrevented||(e._shadowDOMStylesDelay&&(e._setDropDownSize(),delete e._shadowDOMStylesDelay),e.opened=!0,e._ariaButton&&e._ariaButton.setAttribute("aria-expanded",!0),e.$.listBox.setAttribute("focus",""),e._positionDetection.placeOverlay(),e._positionDetection.checkBrowserBounds("vertically"),e._positionDetection.positionDropDown(),e._positionDetection.checkBrowserBounds("horizontally"),e.$dropDownContainer.removeClass("smart-visibility-hidden"),e.$.fireEvent("open"),e.$.dropDownButton&&("dropDownButton"===e.dropDownOpenMode?e.$.dropDownButton.setAttribute("selected",""):e.$.dropDownButton.removeAttribute("selected")),(e.$.listBox&&!e._focusedItem||e._focusedItem&&!e._focusedItem._focused)&&(e.selectedIndexes.length>0?e._focus(e.items[e.selectedIndexes[0]]):e._focus(t)),e.$.input&&!Smart.Utilities.Core.isMobile&&e.$.input.focus())}}ready(){super.ready()}render(){const e=this;e.rightToLeft&&(e.dropDownButtonPosition="right"===e.dropDownButtonPosition?"left":"right"),e.classList.add("smart-drop-down-box"),e.$.dropDownContainer&&(e._positionDetection=new Smart.Utilities.PositionDetection(e,e.$.dropDownContainer,e.$.container,"close"),e._positionDetection.getDropDownParent(!0),e._positionDetection.setDropDownPosition(),e._calculateDropDownSize(),e.$.dropDownContainer.setAttribute("resize-mode",e.resizeMode),e.$.dropDownContainer.setAttribute("drop-down-open-mode",e.dropDownOpenMode),e.resizeIndicator&&e.$.dropDownContainer.setAttribute("resize-indicator",""),e._positionDetection.handleAutoPositioning()),e.opened&&e.open(),e._positionTop=e.getBoundingClientRect().top,e._edgeMacFF=Smart.Utilities.Core.Browser.Edge||Smart.Utilities.Core.Browser.Firefox&&-1!==navigator.platform.toLowerCase().indexOf("mac"),e._edgeMacFF&&e.hasAnimation&&e.$.dropDownContainer&&e.$dropDownContainer.addClass("not-in-view"),e.$.label&&!e.$.label.id&&(e.$.label.id=e.id+"Label"),e.$.actionButton&&!e.$.actionButton.id&&(e.$.actionButton.id=e.id+"ActionButton"),e.$.hint&&!e.$.hint.id&&(e.$.hint.id=e.id+"Hint"),e._createElement(),super.render()}removeAt(e){const t=this;t.$.listBox&&(t.$.listBox.removeAt(e),t._applySelection(),t._dropDownSize&&"auto"===t._dropDownSize.height&&t._setDropDownSize())}removeChild(e){const t=this;if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.removeChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e&&e instanceof Smart.ListItem?(t.$.listBox.removeChild(e),t._dropDownSize&&"auto"===t._dropDownSize.height&&t._setDropDownSize()):t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"removeChild",node:"node"}))}get value(){const e=this;return e.isRendered&&e.$.listBox?e.$.listBox.value:null}set value(e){const t=this;return t.isRendered&&t.$.listBox?void(t.$.listBox.value=e):null}select(e){this.$.listBox&&this.$.listBox.select(e)}_setFocusable(){const e=this;if(e.disabled||e.unfocusable)return e.removeAttribute("tabindex"),e.$.actionButton.removeAttribute("tabindex"),void e.$.dropDownButton.removeAttribute("tabindex");let t=e.tabIndex>0?e.tabIndex:0;e.tabIndex=t,"dropDownButton"===e.dropDownOpenMode?(e.removeAttribute("tabindex"),e.$.actionButton.setAttribute("tabindex",t),e.$.dropDownButton.setAttribute("tabindex",t)):(e.$.actionButton.removeAttribute("tabindex"),e.$.dropDownButton.removeAttribute("tabindex"))}static get requires(){return{"Smart.ListBox":"smart.listbox.js"}}unselect(e){this.$.listBox&&this.$.listBox.unselect(e)}update(e,t){const o=this;o.$.listBox&&(o.$.listBox.update(e,t),o._applySelection())}_resizeBarMoveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_createToken(){const e=this;let t,o=!1;const n=document.createDocumentFragment(),i=e.selectedIndexes[e.selectedIndexes.length-1];"plain"!==e.selectionDisplayMode||"one"!==e.selectionMode&&"zeroAndOne"!==e.selectionMode&&"zeroOrOne"!==e.selectionMode&&"radioButton"!==e.selectionMode?"tokens"===e.selectionDisplayMode?1===e.selectedIndexes.length&&["oneOrManyExtended","oneOrMany","zeroAndOne","one","radioButton"].indexOf(e.selectionMode)>-1?t="":(t="&#10006",o=!0):t=1===e.selectedIndexes.length?"":",":t="";const r=e.selectedIndexes,a=e.$.listBox._items;for(let s=0;s<r.length;s++){const l=r[s];a[l]&&n.appendChild(e._applyTokenTemplate(a[l][e.inputMember],"tokens"!==e.selectionDisplayMode&&l===i?"":t,o))}return n}_applySelection(){const e=this;if("placeholder"!==e.selectionDisplayMode&&0!==e.selectedIndexes.length){if(e.$.listBox._items&&0!==e.$.listBox._items.length)if("plain"!==e.selectionDisplayMode)e.$.actionButton.innerHTML="",e.$.actionButton.appendChild(e._createToken());else{const t=e.$.listBox.selectedIndexes,o=e.$.listBox._items;let n=[];for(let i=0;i<t.length;i++){const r=t[i];o[r]&&n.push(o[r][e.inputMember])}e.$.actionButton.innerHTML=n.length?`<span class="smart-token">${n.join(", ").trim()}</span>`:""}}else e.$.actionButton.innerHTML=e.placeholder}_applyTokenTemplate(e,t,o){const n=this,i=document.createElement("span"),r=function(){return"<span class='smart-drop-down-list-selection-label' role=\"presentation\">"+e+`</span><span class='smart-drop-down-list-unselect-button' role="button"${o?' aria-label="Unselect"':""}>${t}</span>`};if(i.classList.add("smart-token"),n._tokenTemplate){let e=document.importNode(n._tokenTemplate.content,!0);const t=e.childNodes.length,o=/{{\w+}}/g;let a;for(let n=0;n<t;n++)a=o.exec(e.childNodes[n].innerHTML),a&&(e.childNodes[n].innerHTML=e.childNodes[n].innerHTML.replace(a[0],r())),e.childNodes[n].outerHTML&&(i.innerHTML+=e.childNodes[n].outerHTML)}else"function"==typeof n.tokenTemplate?n.tokenTemplate(i,{label:e,iconSeparator:t}):i.innerHTML=r();return i}_bindingCompleteHandler(){const e=this;e.$.listBox&&requestAnimationFrame((()=>{e._setDropDownSize(),e._positionDetection.checkBrowserBounds()}))}_buttonsDownHandler(e){const t=this;if(!t.disabled){if(t.hasRippleAnimation)if(t.$.buttonsContainer&&"dropDownButton"!==t.dropDownOpenMode){const o=t.$.buttonsContainer;o.firstElementChild.noRipple=!0,Smart.Utilities.Animation.Ripple.animate(o,e.pageX,e.pageY),o.firstElementChild.noRipple=!1}else Smart.Utilities.Animation.Ripple.animate(e.target,e.pageX,e.pageY);t._preventsSelectStart=!0,t.tagName.toLowerCase().indexOf("smart-drop-down-")>-1&&"dropDownButton"===t.dropDownOpenMode&&e.target===t.$.actionButton&&t.$.actionButton.setAttribute("active",""),t.opened&&(t._preventDropDownClose=!0)}}_buttonsMouseEventsHandler(e){const t=this;t.disabled||("mouseenter"===e.type?(t.setAttribute("hover",""),e.target.setAttribute("hover",""),"dropDownButton"===t.dropDownOpenMode&&e.target===t.$.dropDownButton&&t.setAttribute("drop-down-button-hover","")):(t.removeAttribute("hover"),t.removeAttribute("drop-down-button-hover"),e.target.removeAttribute("hover")))}_calculateDropDownSize(){const e=this;e._dropDownSize={};const t=window.getComputedStyle(e.$.dropDownContainer),o=parseFloat(t.getPropertyValue("border-top-width").trim()),n=parseFloat(t.getPropertyValue("border-bottom-width").trim()),i=parseFloat(t.getPropertyValue("margin-top").trim()),r=parseFloat(t.getPropertyValue("margin-bottom").trim()),a=parseFloat(t.getPropertyValue("padding-top").trim()),s=parseFloat(t.getPropertyValue("padding-bottom").trim());Smart.Utilities.Core.CSSVariablesSupport()&&(e._dropDownSize.width=t.getPropertyValue("--smart-drop-down-list-drop-down-width").trim(),e._dropDownSize.height=t.getPropertyValue("--smart-drop-down-list-drop-down-height").trim()),(!e._dropDownSize.width||e._dropDownSize.width.indexOf("initial")>-1)&&(e._dropDownSize.width=e.offsetWidth),e._dropDownSize.height||(e._dropDownSize.height="auto"),e._dropDownSize.minHeight=parseFloat(t.getPropertyValue("min-height").trim()),e._dropDownSize.maxHeight=parseFloat(t.getPropertyValue("max-height").trim()),e._dropDownSize.borderWidth=(isNaN(o)?0:o)+(isNaN(n)?0:n),e._dropDownSize.paddingWidth=(isNaN(a)?0:a)+(isNaN(s)?0:s),e._dropDownSize.marginWidth=(isNaN(i)?0:i)+(isNaN(r)?0:r)}_createElement(){const e=this;e._tokenTemplate=e._validateTemplate(e.tokenTemplate),e._applySelection(),e._setDropDownSize(),e._setFocusable(),e.$.arrow.noRipple=!0,e._shadowDOMStylesDelay=e.shadowRoot,e._setAriaRelations(!0)}_documentDownHandler(e){const t=this;if(t.disabled||t.readonly)return;let o=e.originalEvent.target;if(o===t._overlay&&(t._overlayDown=!0),t.shadowRoot){o=e.originalEvent.composedPath()[0];let n=o.getRootNode().host;for(;n;)n.closest(".smart-drop-down-container")===t.$.dropDownContainer&&(t._isDropDownClicked=!0),n=n.getRootNode().host}else t.isInShadowDOM&&(o=e.originalEvent.composedPath()[0]),t._isDropDownClicked=o.closest(".smart-drop-down-container")===t.$.dropDownContainer;if(t._buttonClicked=o.closest(".smart-action-button")||o.closest(".smart-drop-down-button"),t.$.listBox){let n=o.closest("smart-list-item");t.$.listBox.contains(n)||(n=void 0),t.hasRippleAnimation&&n&&Smart.Utilities.Animation.Ripple.animate(n,e.pageX,e.pageY),(n||o===t.$.listBox.$.filterInput||o.closest(".smart-token"))&&(t._preventDropDownClose=!0)}if(t._isDropDownClicked&&(t._preventDropDownClose=!0),o!==t.$.resizeBar||"none"===t.resizeMode)return;t._resizeDetails||(t._resizeDetails={});const n=t.$.dropDownContainer.getBoundingClientRect();t._resizeDetails.started=!0,t._resizeDetails.x=e.pageX,t._resizeDetails.y=e.pageY,t._resizeDetails.width=t.$.dropDownContainer.offsetWidth,t._resizeDetails.height=t.$.dropDownContainer.offsetHeight,t._resizeDetails.offsetXL=e.clientX-n.left,t._resizeDetails.offsetXR=n.left+t.$.dropDownContainer.offsetWidth-e.clientX,t._resizeDetails.offsetY=n.top+t.$.dropDownContainer.offsetHeight-e.clientY,t._resizeDetails.offsetYtop=e.clientY-n.top,t._preventDropDownClose=!0}_documentMoveHandler(e){const t=this,o=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if("auto"===t.dropDownOpenMode&&null!==t.dropDownAppendTo&&(t.contains(o)||t.$.dropDownContainer.contains(o)?t._isElementHovered=!0:(t._isElementHovered=!1,t._autoClose())),!t._resizeDetails||t._resizeDetails&&!t._resizeDetails.started)return;t.setAttribute("resizing",""),t._resizeDetails.resizeEventFired||(t.$.fireEvent("resizeStart",{position:{left:e.pageX,top:e.pageY}}),t._resizeDetails.resizeEventFired=!0);const n=document.documentElement,i=t.$.dropDownContainer.getBoundingClientRect(),r=t.getBoundingClientRect(),a=t.$.dropDownContainer.hasAttribute("top")?"top":"bottom";let s;function l(){if(s=e.pageY-t._resizeDetails.y,"bottom"===a)t._resizeDetails.height=Math.min(n.clientHeight-i.top-6,Math.max(0,t._resizeDetails.height+s)),t._resizeDetails.y=Math.max(i.top+n.scrollTop-t._resizeDetails.offsetY,Math.min(n.clientHeight+n.scrollTop-1.5*t._resizeDetails.offsetY,e.pageY));else{if(t._resizeDetails.height=Math.min(t._dropDownSize.maxHeight,Math.max(0,Math.min(r.top,t._resizeDetails.height-s))),s=Math.max(0,i.top+(i.height-Math.max(t._dropDownSize.minHeight,t._resizeDetails.height))),t.dropDownAppendTo){const e=Math.abs(parseFloat(getComputedStyle(t.$.dropDownContainer).getPropertyValue("margin-bottom")))||0;t.$.dropDownContainer.style.top=t.dropDownAppendTo?e+s+"px":""}const o=r.top+n.scrollTop+t._resizeDetails.offsetYtop;t._resizeDetails.y=Math.max(t._resizeDetails.offsetYtop,Math.min(o,Math.max(o-t._dropDownSize.maxHeight,e.pageY)))}t.$.dropDownContainer.style.height=t._resizeDetails.height+"px"}function d(){s=e.pageX-t._resizeDetails.x,t._resizeDetails.width=Math.min(n.clientWidth-i.left-6,Math.max(0,t._resizeDetails.width+s)),t.$.dropDownContainer.style.width=t._resizeDetails.width+"px",t._resizeDetails.x=Math.max(i.left+n.scrollLeft-t._resizeDetails.offsetXR,Math.min(n.clientWidth+n.scrollLeft-1.5*t._resizeDetails.offsetXR,e.pageX))}switch(t.resizeMode){case"vertical":l();break;case"horizontal":d();break;case"both":d(),l()}}_documentUpHandler(e){const t=this;if(t.$.actionButton.removeAttribute("active"),t._resizeDetails&&t._resizeDetails.started)return t._resizeDetails.started=t._resizeDetails.resizeEventFired=!1,t.removeAttribute("resizing"),t._preventDropDownClose=!1,t.focus(),void t.$.fireEvent("resizeEnd",{position:{left:e.pageX,top:e.pageY}});if(t.disabled||t._isDropDownClicked||t.readonly)return void delete t._isDropDownClicked;if(t._overlayDown)return t.close(),void delete t._overlayDown;let o=e.originalEvent.target,n=o.closest?o.closest("smart-drop-down-list"):void 0;if((t.enableShadowDOM||t.isInShadowDOM)&&(o=e.originalEvent.composedPath()[0],n=o.getRootNode().host),t._preventsSelectStart=!1,void 0===o||o===t.$.resizeBar)return;if("tokens"===t.selectionDisplayMode&&o.classList.contains("smart-drop-down-list-selection-label")&&n===t){"none"!==t.dropDownOpenMode&&t.open();let e=t.$.listBox._items.filter((e=>e[t.inputMember].toString()===o.textContent))[0];return t.$.listBox._scrollView.scrollTop=e.offsetTop,void t._focus(e)}if("tokens"===t.selectionDisplayMode&&o.classList.contains("smart-drop-down-list-unselect-button")&&n===t){if(1===t.selectedIndexes.length&&["zeroOrMany","zeroOrOne","checkBox"].indexOf(t.selectionMode)<0)return;return void t.unselect(t.$.listBox._items.filter((e=>e[t.inputMember].toString()===o.previousElementSibling.textContent))[0])}const i=o.closest(".smart-action-button");let r;if(t._buttonClicked&&("dropDownButton"===t.dropDownOpenMode&&i&&t._buttonClicked===t.$.actionButton?t.$.fireEvent("actionButtonClick"):o.closest(".smart-drop-down-button")!==t._buttonClicked&&i!==t._buttonClicked||(r=!0,t.$.fireEvent("dropDownButtonClick"))),t._buttonClicked=void 0,i===t.$.actionButton||o.closest(".smart-drop-down-button")===t.$.dropDownButton)return"dropDownButton"===t.dropDownOpenMode&&i===t.$.actionButton?void t.close():void(t.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==t.dropDownOpenMode&&r&&"pointercancel"!==e.originalEvent.type?t.open():t.close());o=t._getUpEventTarget(o),void 0!==o&&("dropDownContainer"!==o&&"item"!==o||"item"===o&&"checkBox"!==t.selectionMode&&t.selectionMode.indexOf("Many")<0)&&t.close()}_dragStartHandler(e){this._resizeDetails&&this._resizeDetails.started&&e.preventDefault()}_dropDownTransitionendHandler(){const e=this;e._edgeMacFF&&!e.opened&&e.hasAnimation&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view"))}_focus(e){this.$.listBox._focus(e)}_blurEventHandler(){const e=this;e.$.dropDownButton&&(e.removeAttribute("focus"),e.$.dropDownButton.removeAttribute("focus")),e.$.actionButton&&(e.removeAttribute("focus"),e.$.actionButton.removeAttribute("focus")),e.nodeName&&"smart-drop-down-list"===e.nodeName.toLowerCase()&&!e._preventDropDownClose&&e.close()}_focusEventHandler(){const e=this;e.$.dropDownButton&&(e.setAttribute("focus",""),e.$.dropDownButton.setAttribute("focus","")),e.$.actionButton&&(e.setAttribute("focus",""),e.$.actionButton.setAttribute("focus","")),e.removeAttribute("drop-down-button-focus"),e.removeAttribute("action-button-focus")}_buttonsFocusHandler(e){const t=this;e.target===t.$.dropDownButton?"focus"===e.type?t.setAttribute("drop-down-button-focus",""):(t.removeAttribute("drop-down-button-focus"),t.nodeName&&"smart-drop-down-list"===t.nodeName.toLowerCase()&&!t._preventDropDownClose&&t.close()):"focus"===e.type?t.setAttribute("action-button-focus",""):t.removeAttribute("action-button-focus")}_getUpEventTarget(e){const t=this;let o=e;for(o=void 0===o.parentElement?o.getRootNode().host:o.parentElement;o;){if(o===t.$.dropDownContainer){o="dropDownContainer";break}o=void 0===o.parentElement?o.getRootNode().host:o.parentElement}return o}_keyDownHandler(e){const t=this,o=t.enableShadowDOM&&t.shadowRoot.activeElement||document.activeElement,n=t.enableShadowDOM?e.composedPath()[0]:e.target;if(!(t.$.listBox&&n===t.$.listBox.$.filterInput||o!==t&&o!==t.$.dropDownButton&&o!==t.$.actionButton))switch(e.key){case"Enter":case" ":e.preventDefault(),n!==t.$.actionButton&&(t._keyPressed=!0,t.opened?(t._focusedItem&&t.select(t._focusedItem),("Enter"===e.key&&["none"].indexOf(t.selectionMode)<0||" "===e.key&&["none","zeroAndOne","one","radioButton"].indexOf(t.selectionMode)>-1)&&t.close()):t.opened||t.readonly||"none"===t.dropDownOpenMode||t.open()),"dropDownButton"===t.dropDownOpenMode&&n.setAttribute("active","");break;case"End":case"Home":case"PageUp":case"PageDown":case"ArrowUp":case"ArrowDown":if(t.readonly)return;if(e.altKey)return t._keyPressed=!1,void(t.$dropDownContainer.hasClass("smart-visibility-hidden")?t.open():t.close());e.preventDefault(),t.$.listBox._handleKeyStrokes(e.key);break;case"Escape":e.preventDefault(),t.close();break;default:if(t.readonly)return;"oneOrManyExtended"===t.selectionMode&&(t.$.listBox._keysPressed[e.key]=!0),t.$.listBox._applyIncrementalSearch(e.key)}}_keyUpHandler(e){const t=this,o=t.enableShadowDOM?e.composedPath()[0]:e.target;t.$.listBox&&o===t.$.listBox.$.filterInput||("Enter"!==e.key&&" "!==e.key||(o.removeAttribute("active"),t.$dropDownContainer.hasClass("smart-visibility-hidden")||(t._keyPressed=!1)),t.$.listBox&&"oneOrManyExtended"===t.selectionMode&&(t.$.listBox._keysPressed[e.key]=!1))}_listBoxChangeHandler(e){const t=this;if(e.target===t.$.listBox){if((t.dropDownAppendTo||t.enableShadowDOM)&&t.$.fireEvent("change",e.detail),"list"===t.autoComplete&&e.detail){const o=t.$.listBox._items[e.detail.index];t._lastSelectedItem=o&&o.selected?o:void 0}t._applySelection(t.selectionMode,e.detail)}else e.stopPropagation()}_listBoxItemClickHandler(e){const t=this;(t.dropDownAppendTo||t.enableShadowDOM)&&t.$.fireEvent(e.type,e.detail),"checkBox"!==t.selectionMode&&t.selectionMode.indexOf("Many")<0&&t.close(),Smart.Utilities.Core.isMobile||t.focus(),delete t._isDropDownClicked}_listBoxKeyDownHandler(e){const t=this;if("Enter"===e.key)return t.close(),"dropDownButton"===t.dropDownOpenMode?t.$.dropDownButton.focus():t.focus(),void e.stopPropagation();"Escape"!==e.key||t.close()}_mouseEnterHandler(){const e=this;e._isElementHovered=!0,e.tagName.toLowerCase().indexOf("smart-drop-down-")>-1&&"auto"===e.dropDownOpenMode&&!e.disabled&&!e.readonly&&e.open()}_mouseLeaveHandler(){const e=this;e.removeAttribute("hover"),e._isElementHovered=!1,"auto"!==e.dropDownOpenMode||e.disabled||e.readonly||e._autoClose()}_mouseWheelHandler(e){const t=this;t.disabled||t.readonly||t.items&&0===t.items.length||t.$dropDownContainer&&!t.$dropDownContainer.hasClass("smart-visibility-hidden")||t.$.listBox&&(e.preventDefault(),t.$.listBox._handleKeyStrokes(e.deltaY>0?"ArrowDown":"ArrowUp"))}_autoClose(){const e=this;e._autoCloseTimeout=setTimeout(function(){e._isElementHovered||e.close(),clearTimeout(e._autoCloseTimeout)}.bind(e),e.autoCloseDelay)}_propertyValidator(e,t){return"number"!=typeof t&&"string"!=typeof t?e:t}_resizeHandler(){this.refresh()}refresh(){const e=this;"none"===e.resizeMode&&(e._calculateDropDownSize(),e._setDropDownSize())}_selectStartHandler(e){this._preventsSelectStart&&e.preventDefault()}_setAriaRelations(e){const t=this;let o,n;"dropDownButton"!==t.dropDownOpenMode?(o=t.$.dropDownButton,o.setAttribute("aria-hidden",!0),n=t,t.$.actionButton.removeAttribute("role")):(o=t,n=t.$.dropDownButton,n.removeAttribute("aria-hidden"),t.$.actionButton.setAttribute("role","button")),t._ariaButton=n,n.setAttribute("role","button"),n.setAttribute("aria-haspopup","listbox"),n.setAttribute("aria-owns",t.$.listBox.id),n.setAttribute("aria-describedby",t.$.hint.id),t.label?n.setAttribute("aria-labelledby",t.$.label.id):"DropDownList"===t.elementName&&n.setAttribute("aria-labelledby",t.$.actionButton.id),o.setAttribute("role","presentation"),o.removeAttribute("aria-owns"),e?n.setAttribute("aria-expanded",t.opened):(o.removeAttribute("aria-describedby"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-labelledby"))}_setDropDownSize(){const e=this,t=e.$.listBox;let o;if(e._dropDownSize||e._calculateDropDownSize(),["dropDownMinWidth","dropDownMaxWidth"].forEach((t=>{e.$.dropDownContainer.style[t.replace("dropDown","").replace(/^./,"m")]="initial"===e[t]?e.offsetWidth+"px":e[t]?parseFloat(e[t])+(e[t].toString().endsWith("%")?"%":"px"):null})),["dropDownMinHeight","dropDownMaxHeight"].forEach((t=>{e.$.dropDownContainer.style[t.replace("dropDown","").replace(/^./,"m")]=e[t]?parseFloat(e[t])+(e[t].toString().endsWith("%")?"%":"px"):null})),e.dropDownWidth?"auto"!==e.dropDownWidth?e.$.dropDownContainer.style.width=("initial"===e.dropDownWidth?e.offsetWidth:parseFloat(e.dropDownWidth))+"px":e.$.dropDownContainer.style.width="auto":e.$.dropDownContainer.style.width="auto"===e._dropDownSize.width?"auto":(parseFloat(e._dropDownSize.width)||0)+"px",e.dropDownHeight&&"auto"!==e.dropDownHeight)e.$.dropDownContainer.style.height=parseFloat(e.dropDownHeight)+((e.dropDownHeight+"").indexOf("%")>-1?"%":"px");else if(!e.$.listBox||"auto"!==e._dropDownSize.height&&"auto"!==e.dropDownHeight)e.$.dropDownContainer.style.height=e._dropDownSize.height;else{e.$.dropDownContainer.style.height="";let n=0;if(t.$.itemsContainer&&(n=2*parseInt(window.getComputedStyle(t.$.itemsContainer).getPropertyValue("--smart-list-item-vertical-offset"))),isNaN(n)&&(n=6),o=n,t.items.length>0?t.items.map((e=>o+=e.height||e.offsetHeight)):o=t.$.placeholder.offsetHeight,e.filterable){const e=t.$.filterInputContainer;o+=e.offsetHeight+e.offsetTop}o=o+e._dropDownSize.paddingWidth+e._dropDownSize.borderWidth,e.$.dropDownContainer.style.height=o+"px"}if(t){if(void 0===o||!t.$)return void t._refreshLayout();const n=Math.max(0,e._dropDownSize.minHeight-(o-t.$.horizontalScrollBar.offsetHeight));n&&(e.$.dropDownContainer.style.height=o+n+"px"),!e.opened&&e.virtualized&&t.refresh()}}_styleChangedHandler(e){const t=this;if(t.dropDownAppendTo){const o=e.detail.styleProperties,n=["font-size","font-family","font-style","font-weight"];for(let e=0;e<n.length;e++)o[n[e]]&&(t.$.dropDownContainer.style[n[e]]=o[n[e]].value)}"auto"===t._dropDownSize.height&&t._setDropDownSize()}_validateTemplate(e){const t=this;if(e&&"function"!=typeof e)if("content"in document.createElement("template")){if(e instanceof HTMLTemplateElement||(e=document.getElementById(e)),null!==e&&"content"in e)return e;t.error(t.localize("invalidTemplate",{elementType:t.nodeName.toLowerCase(),property:"tokenTemplate"}))}else t.error(t.localize("htmlTemplateNotSuported",{elementType:t.nodeName.toLowerCase()}))}});