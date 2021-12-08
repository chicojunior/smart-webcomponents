
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-accordion-item",class extends Smart.ContentElement{static get properties(){return{dragged:{value:!1,type:"boolean"},expanded:{value:!1,type:"boolean"},focused:{value:!1,type:"boolean"},index:{value:null,type:"number?"},label:{value:"",type:"string"}}}get enableShadowDOM(){return!1}static get listeners(){return{"accordionItemHeader.mouseenter":"_headerMouseEnterHandler","accordionItemHeader.mouseleave":"_headerMouseLeaveHandler","accordionItemHeader.down":"_ripple"}}template(){return'<div id="container" role="presentation">\n                    <div id="accordionItemHeader" class="smart-accordion-item-header smart-unselectable" role="heading" aria-level="1">\n                        <span id="arrow" class="smart-arrow" role="presentation" aria-hidden="true"></span>\n                        <span id="label" class="smart-label" inner-h-t-m-l=\'[[label]]\' role="button"></span>\n                    </div>\n                    <div id="accordionItemContent" class="smart-accordion-item-content">\n                        <div id="contentContainer" class="smart-content-container" role="presentation"><content></content></div>\n                    </div>\n                </div>'}render(){const e=this;let t;t=e.id?e.id+"Content":e.parentElement&&e.parentElement.parentElement&&e.parentElement.parentElement.id?e.parentElement.parentElement.id+Math.floor(1e4*Math.random())+"Content":"accordion"+Math.floor(1e4*Math.random())+"Content",e.$.accordionItemContent.id=t,e.$.label.setAttribute("aria-controls",t),super.render()}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const a=this;if("expanded"===e){a.$.label.setAttribute("aria-expanded",n);const e=a.parentElement&&a.parentElement.parentElement?a.parentElement.parentElement.expandMode:a.shadowParent.expandMode;if("multiple"===e||"toggle"===e)return;return void(n?a.$.label.setAttribute("aria-disabled",!0):a.$.label.removeAttribute("aria-disabled"))}if(t=parseInt(t),n=parseInt(n),"index"!==e||isNaN(t)||isNaN(n))return;const i=a.parentElement.parentElement._items.length;n<0?n=0:n>=i&&(n=i-1),n!==t&&a.$.fireEvent("indexChange",{newIndex:n,oldIndex:t}),a.index=n}_headerMouseEnterHandler(){this.disabled||this.setAttribute("hover","")}_headerMouseLeaveHandler(){this.disabled||this.removeAttribute("hover")}_ripple(e){const t=this;t.disabled||t.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(t.$.container,e.pageX,e.pageY)}_setIndex(e){const t=this,n=t.context;t.context=t,t.index=e,t.context=n}focus(){super.focus(),this.setAttribute("focus","")}blur(){super.blur(),this.removeAttribute("focus")}}),Smart("smart-accordion",class extends Smart.BaseElement{static get properties(){return{dataSource:{value:null,type:"array?",reflectToAttribute:!1},expandedIndexes:{value:[],type:"array"},expandMode:{allowedValues:["single","singleFitHeight","multiple","toggle","none"],value:"singleFitHeight",type:"string"},messages:{extend:!0,value:{en:{accordionItemRequired:'{{elementType}}: "{{method}}" requires an item from type "smart-accordion-item".',indexOutOfBound:'{{elementType}}: Out of bound index/indexes in "{{method}}" method.',invalidSettings:'{{elementType}}: "{{method}}" method accepts a string or an object as it\'s second parameter.',missingReference:"{{elementType}}: Missing reference to {{files}}.",noItems:"{{elementType}}: No child elements found.",overridingProperties:'{{elementType}}: Overriding properties {{property1}} and {{property2}} applied. The "{{property1}}" property is used by default.'}},type:"object"},reorder:{value:!1,type:"boolean"}}}static get listeners(){return{down:"_downHandler",focus:"_focusHandler",indexChange:"_indexChangeHandler",keydown:"_keyDownHandler",move:"_moveHandler",resize:"_resizeHandler",styleChanged:"_resizeHandler","document.up":"_upHandler","container.move":"_containerMoveHandler"}}template(){return'<div id="container" role="presentation">\n                    <content></content>\n                </div>'}static get styleUrls(){return["smart.accordion.css"]}ready(){super.ready()}render(){this._createElement(),super.render()}propertyChangedHandler(e,t,n){const a=this;if("expandedIndexes"===e){if(t.toString()===n.toString())return;let i=[];if(a._items.length>0)for(let e=0;e<n.length;e++){let t=parseInt(n[e]);if(!isNaN(t)){if(a._expandModeIs(["single","singleFitHeight","toggle"])){i.length<1&&t>=0&&t<a._items.length&&i.push(t);break}t>=0&&t<=a._items.length&&-1===i.indexOf(t)&&i.push(t)}}if(0===i.length&&a._expandModeIs(["single","singleFitHeight"]))return n=t.slice(),a.expandedIndexes=n,void super.propertyChangedHandler(e,t,n);n=i;const o=a._compareExpandedIndexes(t,n);return a._toggleItems("collapse",o.collapse),a._toggleItems("expand",o.expand),a.expandedIndexes=n,void super.propertyChangedHandler(e,t,n)}switch(super.propertyChangedHandler(e,t,n),e){case"dataSource":a.render();break;case"disabled":a._setFocusable(),a._enableDisableHandler();break;case"expandMode":{if(0===a._items.length)break;if("multiple"===t&&"none"!==n||"none"===t&&"multiple"!==n){const e=a.expandedIndexes.slice(1);a._toggleItems("collapse",e),0===a.expandedIndexes.length&&a._expandModeIs(["single","singleFitHeight"])&&i()}else"toggle"===t&&a._expandModeIs(["single","singleFitHeight"])&&0===a.expandedIndexes.length&&i();const e=a.expandedIndexes[0];if(void 0===e)return;a._supportCSSVariables&&a._usedCSSVariables||("singleFitHeight"===t?a._items[e].$.accordionItemContent.style.height="":"singleFitHeight"===n&&(a._items[e].$.accordionItemContent.style.height=a._expandedItemsContainerHeight-1+"px")),"multiple"===n||"toggle"===n?a._items[e].$.label.removeAttribute("aria-disabled"):a._items[e].$.label.setAttribute("aria-disabled",!0);break}case"unfocusable":a._setFocusable()}function i(){a._toggleItems("expand",[0]),a.expandedIndexes=[0]}}appendChild(e){const t=this;if(!t.isCompleted||e instanceof HTMLElement&&(e.classList.contains("smart-resize-trigger-container")||e.classList.contains("smart-measure-element"))){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e instanceof Smart.AccordionItem||t.error(t.localize("accordionItemRequired",{method:"appendChild"})),t.insert(t._items.length,e)}collapse(e,t){const n=this;e=n._validateItemsIndex(e,"collapse"),isNaN(e)||!n._items[e].expanded||n._expandModeIs(["single","singleFitHeight"])&&n.expandedIndexes.indexOf(e)>-1||n._collapseItem(e,t)}expand(e,t){const n=this;e=n._validateItemsIndex(e,"expand"),isNaN(e)||n._items[e].expanded||(n._expandModeIs(["single","singleFitHeight","toggle"])&&n._toggleItems("collapse",n.expandedIndexes),n._expandItem(e,t))}insert(e,t){const n=this,a=0===n._items.length;let i,o;if(t||("number"==typeof e?t=[{label:"",content:""}]:(t=[{label:e?e.toString():"",content:e?e.toString():""}],e=0)),t instanceof HTMLElement)t instanceof Smart.AccordionItem?i=t:n.error(n.localize("accordionItemRequired",{method:"insert"}));else if(Array.isArray(t)){o=document.createDocumentFragment();for(let e=0;e<t.length;e++){const a=n._createItem(t[e]);o.appendChild(a)}}else i=t instanceof Object?n._createItem(t):"string"==typeof t||"number"==typeof t?n._createItem({label:t.toString(),content:t.toString()}):n._createItem({label:"",content:""});e>n._items.length?i?n.$.container.appendChild(i):n.$.container.appendChild(o):i?n.$.container.insertBefore(i,n._items[e]):n.$.container.insertBefore(o,n._items[e]),i&&(i.tabIndex=n._tabIndex),n._storeItems(),a&&n._expandModeIs(["single","singleFitHeight"])?n._expandItem(0):n.expandedIndexes=n._getExpandedIndexes(),n._updateExpanedContentHeight(),n._updateInlineHeight(),n._storeItemsCoordinates(),n._updateItemsIndexProperty()}insertBefore(e,t){const n=this;if(!n.isCompleted){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(n,e.concat(Array.prototype.slice.call(arguments)))}void 0!==e&&void 0!==t&&e instanceof Smart.AccordionItem&&t instanceof Smart.AccordionItem||n.error(n.localize("accordionItemRequired",{method:"insertBefore"})),null!=t?(n.contains(t)||n.error(n.localize("referenceNodeNotChild",{argument:"referenceNode"})),n.insert(n._items.indexOf(t),e)):n.insert(n._items.indexOf(t),e)}removeAt(e){const t=this;let n;if(e instanceof HTMLElement)e instanceof Smart.AccordionItem?t.contains(e)||t.error(t.localize("referenceNodeNotChild",{argument:"node"})):t.error(t.localize("accordionItemRequired",{method:"remove"})),n=e,e=n.index;else{if(e=t._validateItemsIndex(e,"remove"),isNaN(e))return;n=t._items[e]}n&&(n.parentNode.removeChild(n),t._storeItems(),t._expandModeIs(["singleFitHeight"])&&(t._preventAnimation=!0),t._expandModeIs(["single","singleFitHeight"])&&e===t.expandedIndexes[0]&&t._items.length>0&&(t._expandItem(0),t._selectedItem=t._items[0],t._selectedItemIndex=0,t._itemIsFocussed=!0),t.expandedIndexes=t._getExpandedIndexes(),t._updateExpanedContentHeight(),t._updateInlineHeight(),t._storeItemsCoordinates(),t._updateItemsIndexProperty())}removeChild(e){const t=this;if(!t.isCompleted){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.removeChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e instanceof HTMLElement||t.error(t.localize("accordionItemRequired",{method:"removeChild"})),"smart-resize-trigger-container"!==e.className?(e instanceof Smart.AccordionItem||t.error(t.localize("accordionItemRequired",{method:"removeChild"})),t.contains(e)||t.error(t.localize("referenceNodeNotChild",{argument:"node"})),t.removeAt(e)):super.removeChild(e)}_setFocusable(){const e=this;if(e.disabled||e.unfocusable){e.removeAttribute("tabindex");for(let t=0;t<e._items.length;t++)e._items[t].removeAttribute("tabindex")}else{e.tabIndex=e._tabIndex;for(let t=0;t<e._items.length;t++)e._items[t].tabIndex=e._tabIndex}}update(e,t){const n=this;if(e=n._validateItemsIndex(e,"update"),isNaN(e))return;let a=n._items[e];if(t||n.error(n.localize("invalidSettings",{elementType:n.nodeName.toLowerCase(),method:"update"})),a)if(Array.isArray(t)&&(t=0===t.length?{label:"",content:""}:t[0]),"string"==typeof t)a.content=t;else for(let e in t)a[e]=t[e];const i=n._getItemsHeights(e);n._updateExpanedContentLocalHeight(n._items[e],i),n._updateInlineHeight(),n._storeItemsCoordinates()}_adjustHeightValue(e){const t=this,n=t._items.length;let a,i;for(let e=0;e<n&&(t._items[e].expanded?a=t._items[e]:i=t._items[e],!a||!i);e++);if(a||(a=t._items[0]),!a&&!i)return;const o=a.expanded;a.expanded=!0;const r=window.getComputedStyle(a,null),s=!!i&&window.getComputedStyle(i,null),d=parseInt(r.getPropertyValue("margin-top"))+parseInt(r.getPropertyValue("margin-bottom")),l=s?parseInt(s.getPropertyValue("margin-top"))+parseInt(s.getPropertyValue("margin-bottom")):0;return a.expanded=o,e-((n-1)*l+d)}_collapseItem(e,t){const n=this;let a=n._items[e];if(a.expanded&&("none"!==n.expandMode||!t)){if(a.expanded=!1,n.$.fireEvent("collapsing",{index:e,label:a.label,content:a.content.innerHTML}),n.expandedIndexes.indexOf(e)>-1){let t=n.expandedIndexes.indexOf(e),a=n.expandedIndexes.slice();a.splice(t,1),n.expandedIndexes=a}a.$.accordionItemContent.style.height="",n._handleAnimationsDuration(a,e,"collapse")}}_compareExpandedIndexes(e,t){let n=[],a=[],i=[],o=e.length,r=t.length;for(let i=0;i<o;i++)-1===t.indexOf(e[i])?-1===n.indexOf(e[i])&&n.push(e[i]):-1===a.indexOf(e[i])&&a.push(e[i]);for(let e=0;e<r;e++)-1===a.indexOf(t[e])&&i.push(t[e]);return{collapse:n,expand:i}}_processDataSource(){const e=this.dataSource;if(null===e||!e)return;let t="";for(let a=0;a<e.length;a++){const i=e[a];t+=`<smart-accordion-item label="${(n=i).label}">${n.content}</smart-accordion-item>`}var n;this.$.container.innerHTML=t}_createElement(){const e=this;null!==e.dataSource&&e._processDataSource(),e._reorderItemsByIndex(),e._usedCSSVariables=Boolean(window.getComputedStyle(e.$.container).getPropertyValue("--smart-accordion-animation-duration")),e._supportCSSVariables=Smart.Utilities.Core.CSSVariablesSupport(),e._storeItems(),e._enableDisableHandler(),e._expandedIndexesHandler(),e._updateExpanedContentHeight(),e._tabIndex=e.tabIndex<=0?0:e.tabIndex,e._setFocusable(),e._updateItemsIndexProperty(),e._updateInlineHeight();for(let t=0;t<e._items.length;t++)e._items[t].setAttribute("part","smart-accordion-item"),e._items[t].$.arrow.classList.add("smart-animate-trigger")}_createItem(e){const t=this,n=document.createElement("smart-accordion-item");if(e)return n.disabled=t.disabled,t._tabIndex>-1&&(n.tabIndex=t._tabIndex),"string"==typeof e||"number"==typeof e?(n.label=e+"",n.content=e+"",n):(n.label=e.label||"",n.content=e.content||"",n)}_downHandler(e){const t=this;if(t.disabled||t.readonly||"none"===t.expandMode||t._toggled)return;const n=t.enableShadowDOM&&t.shadowRoot?t.shadowRoot.elementFromPoint(e.pageX-window.pageXOffset,e.pageY-window.pageYOffset):e.originalEvent.target,a=n.closest(".smart-accordion-item-header"),i=n.closest("smart-accordion-item");a?(t._pointerPosition=e.pageY-window.pageYOffset,t._selectedItem=i,t._itemIsPressed=t._itemIsFocussed=!0,t._reorderedIndex=t._selectedItemIndex=t._items.indexOf(i),t._storeItemsCoordinates()):i&&(i.focused=!0)}_enableDisableHandler(){const e=this;if(e.disabled)for(let t=0;t<e._items.length;t++)e._items[t].disabled=!0;else for(let t=0;t<e._items.length;t++)e._items[t].disabled=!1}_expandedIndexesHandler(){const e=this;let t=e._getExpandedIndexes("initial"),n=t.length,a=e.expandedIndexes.length;if(0!==e._items.length){if(0===a&&n>0&&(e.expandedIndexes=t,a=n),e._expandModeIs(["multiple","none"])||1===a)return e._toggleItems("expand",e.expandedIndexes),void(e._animationAfterInitialization=!0);switch(e.expandMode){case"single":case"singleFitHeight":0===a?e._toggleItems("expand",[0]):a>1&&(e._toggleItems("collapse",e.expandedIndexes.splice(0,1)),e._toggleItems("expand",e.expandedIndexes));break;case"toggle":a>1&&(e._toggleItems("collapse",e.expandedIndexes.splice(0,1)),e._toggleItems("expand",e.expandedIndexes))}e._animationAfterInitialization=!0}else e._animationAfterInitialization=!0}_expandItem(e,t){const n=this;let a=n._items[e];if(!(a.expanded||"none"===n.expandMode&&t)){if(a.$.container.style.getPropertyValue("--smart-accordion-expanded-content-local-height")||(a.expanded=!0,a.$.container.style.setProperty("--smart-accordion-expanded-content-local-height",a.$.accordionItemContent.scrollHeight+"px"),a.expanded=!1),a.expanded=!0,n.$.fireEvent("expanding",{index:e,label:a.label,content:a.content.innerHTML}),-1===n.expandedIndexes.indexOf(e)){let t=n.expandedIndexes.slice();t.push(e),n.expandedIndexes=t}n._supportCSSVariables&&n._usedCSSVariables||"singleFitHeight"!==n.expandMode||(a.$.accordionItemContent.style.height=n._expandedItemsContainerHeight-1+"px"),n._handleAnimationsDuration(a,e,"expand")}}_expandModeIs(e){return e.indexOf(this.expandMode)>-1}_focusHandler(){const e=this;e.disabled||0===e._items.length||(e._itemIsFocussed?e._selectedItem.focused=!1:e._items[0].focused=!1)}_getExpandedIndexes(e){const t=this,n=[];for(let a=0;a<t._items.length;a++)"initial"===e?t._items[a].hasAttribute("expanded")&&(n.push(a),t._items[a].removeAttribute("expanded")):t._items[a].expanded&&n.push(a);return n.slice()}_getItemsHeights(e){const t=this._items,n=t.length;let a=[];if(0!==n){if(!isNaN(e)&&e>=0&&e<n){const n=t[e];let a=0;return n.expanded?a=n.$.accordionItemContent.scrollHeight:(n.expanded=!0,a=n.$.accordionItemContent.scrollHeight,n.expanded=!1),a+"px"}for(let e=0;e<n;e++){const n=t[e];let i=0;n.expanded?i=n.$.accordionItemContent.scrollHeight:(n.expanded=!0,i=n.$.accordionItemContent.scrollHeight,n.expanded=!1),a.push(i+"px")}return this._heightCalcAfterInitialization=!0,a}}_handleAnimationsDuration(e,t,n){const a=this;if(!a._animationAfterInitialization)return;if(1===a._items.length&&"singleFitHeight"===a.expandMode)return void a.$.fireEvent(n,{index:t,label:e.label,content:e.content.innerHTML});if(!1===a.hasAnimation||!a._supportCSSVariables)return void a.$.fireEvent(n,{index:t,label:e.label,content:e.content.innerHTML});if(a._preventAnimation)return a.$.fireEvent(n,{index:t,label:e.label,content:e.content.innerHTML}),void(a._preventAnimation=!1);a._toggled=!0;let i,o=window.getComputedStyle(a).animationDuration;if(o.indexOf("ms")>-1)o=parseFloat(o.substring(0,o.length-2)),i=isNaN(o)||o<0?0:o-50;else{if(!(o.indexOf("s")>-1))return void a.$.fireEvent(n,{index:t,label:e.label,content:e.content.innerHTML});o=parseFloat(o.substring(0,o.length-1)),i=isNaN(o)||o<0?0:1e3*o-50}e&&(e.$.addClass("smart-toggled-item"),a.$container.addClass("smart-toggling"),setTimeout((function(){e.$.removeClass("smart-toggled-item"),a.$container.removeClass("smart-toggling"),a.$.fireEvent(n,{index:t,label:e.label,content:e.content.innerHTML}),a._toggled=!1}),i))}_indexChangeHandler(e){const t=this,n=t._items,a=n.length,i=e.detail;i.newIndex>=a?t.$.container.appendChild(n[i.oldIndex]):i.newIndex>i.oldIndex?t.$.container.insertBefore(n[i.oldIndex],n[i.newIndex+1]):t.$.container.insertBefore(n[i.oldIndex],n[i.newIndex]);let o=t.enableShadowDOM&&t.shadowRoot?t.shadowRoot.querySelectorAll("smart-accordion-item"):t.getElementsByTagName("smart-accordion-item");t._items=Array.from(o),t._updateItemsIndexProperty()}_keyDownHandler(e){const t=this,n=e.key;if("none"===t.expandMode||t.disabled||t.readonly||t._toggled)return;const a=(t.shadowRoot?t.shadowRoot.activeElement:document.activeElement)||document.activeElement;if(-1===["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","End","Home"," ","Enter","Tab"].indexOf(n)||!(a instanceof Smart.AccordionItem))return;"Tab"!==n&&e.preventDefault();let i,o,r=t._items.length,s=r-1;for(let e=0;e<r;e++){let n=t._items[e];n.focused&&(i=n,o=e)}switch(void 0===o&&t._items[0]&&(o=0,t._items[0].focused=!0),n){case"Tab":e.shiftKey?l("up"):l("down");break;case"ArrowLeft":t.collapse(o);break;case"ArrowDown":l("down");break;case"ArrowRight":t.expand(o);break;case"ArrowUp":l("up");break;case"End":d(s);break;case"Home":d(0);break;case" ":case"Enter":if(i&&i.expanded)return void t.collapse(o);t.expand(o);break;default:return}function d(e){e===o||isNaN(e)||(i&&(i.focused=!1),o=e,i=t._items[o],i&&(i.focused=!0))}function l(e){d("up"!==e?o+1>s?s:o+1:o-1<0?0:o-1)}}_containerMoveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_moveHandler(e){const t=this;if(e.stopPropagation(),!(!t._itemIsPressed||!t.reorder||t.readonly||t._items.length<2||!t.$container.hasClass("smart-reordering")&&Math.abs(e.pageY-t._pointerPosition)<5))if(t._dragStart){if(t.$container.hasClass("smart-reordering")||t.$container.addClass("smart-reordering"),!t._dragging){const n=t._selectedItem;t.$.fireEvent("dragStart",{position:{left:e.pageX,top:e.pageY},target:e.originalEvent.target,index:t._selectedItemIndex,label:n.label,content:n.content.innerHTML}),t._selectedItem.dragged=t._dragging=!0}if(t.hasAnimation){const e=t._selectedItem.querySelector(".smart-ripple");e&&(e.style.height=0)}const n=e.clientY;let a=!1;for(let e=0;e<t._itemsCoordinates.length;e++){const i=t._itemsCoordinates[e];if(n>=i.fromY&&n<=i.toY){a=e;break}}const i=t._items[a];if(!1!==a&&i!==t._selectedItem){if(t._lastReorderedItem&&i===t._lastReorderedItem)return;if(t._lastReorderedItem=i,Math.abs(t._reorderedIndex-a)>1){const e=t._reorderedIndex-a<0?-1:1;t._swapItems(t._reorderedIndex,a+e)}return t._swapItems(t._reorderedIndex,a),t._reorderedIndex=a,void t._storeItemsCoordinates()}t._lastReorderedItem=void 0}else t._dragStart=!0}_reorderItemsByIndex(){const e=this;let t=e.enableShadowDOM&&e.shadowRoot?e.shadowRoot.querySelectorAll("smart-accordion-item"):e.$.container.children,n=Array.from(t),a=!1,i=n.map((function(e){return null!==e.index?a=!0:e.index=0,e.index}));if(!a)return;const o=n.length;if(o<2)return;let r=i.slice();if(r.sort((function(e,t){return parseInt(e)-parseInt(t)})),i.toString()!==r.toString())for(let n=0;n<o;n++){let a;for(let e=0;e<o;e++)t[e].index===r[n]&&(a=t[e]);e.$.container.insertBefore(a,t[n])}}_resizeHandler(){this.refresh()}refresh(){const e=this;e._updateExpanedContentHeight(),e._updateInlineHeight(),e._storeItemsCoordinates()}_storeItems(){const e=this,t=e.enableShadowDOM&&e.shadowRoot?e.shadowRoot.querySelectorAll("smart-accordion-item"):e.getElementsByTagName("smart-accordion-item");if(e._items=Array.from(t),0===e._items.length)return void e.$container.addClass("smart-empty");e.$container.removeClass("smart-empty");const n=e._getItemsHeights();for(let t=0;t<e._items.length;t++)e._updateExpanedContentLocalHeight(e._items[t],n[t])}_storeItemsCoordinates(){const e=this;if(e.disabled||!e.reorder)return;const t=[];for(let n=0;n<e._items.length;n++){const a=e._items[n].getBoundingClientRect();t.push({fromY:a.top+(window.scrollY||window.pageYOffset),toY:a.bottom+(window.scrollY||window.pageYOffset)})}e._itemsCoordinates=t}_swapItems(e,t){const n=this,a=Math.min(e,t),i=Math.max(e,t),o=n._items;let r=n.expandedIndexes.slice();if(n._items[e].expanded&&!n._items[t].expanded){const a=r.indexOf(e);r[a]=t,n.expandedIndexes=r.slice()}else if(n._items[t].expanded&&!n._items[e].expanded){const a=r.indexOf(t);r[a]=e,n.expandedIndexes=r.slice()}n.selectedIndex=n.selectedIndex===e?t:e,n.$.container.insertBefore(o[i],o[a]),function(e,t,n){const a=e[n];e[n]=e[t],e[t]=a}(o,e,t),n._items[e].$.removeClass("hovered"),n._reorderedIndex=t}_toggleItems(e,t){const n=this,a=t.length;if(a>0)for(let i=0;i<a;i++)n["_"+e+"Item"](t[i])}_updateExpanedContentHeight(){const e=this;e.$.container.style.setProperty("--smart-accordion-item-header-height","");const t=e._items.length,n=e.$.container.offsetHeight,a=e._items[e.expandedIndexes[0]];let i=0,o=0,r=0,s=0;if(1===t){let t=e._items[0],n=t.expanded;t.expanded=!1,i=t.offsetHeight,o=t.$.accordionItemHeader.offsetHeight,t.expanded=n}else for(;0===i&&s<t;){const t=e._items[s];t instanceof Smart.AccordionItem&&!t.expanded&&(i=t.offsetHeight),o=t.$.accordionItemHeader.offsetHeight,s++}t>1&&a instanceof Smart.AccordionItem&&(r=a.$.accordionItemHeader.offsetHeight-o);const d=getComputedStyle(e.$.root);let l=n-i*t-r-parseFloat(d.paddingBottom)-parseFloat(d.paddingTop);"singleFitHeight"===e.expandMode&&(l=e._adjustHeightValue(l)),l=l>=0?l:0,e.$.container.style.setProperty("--smart-accordion-expanded-content-height",l+"px"),e.$.container.style.setProperty("--smart-accordion-item-header-height",o+"px"),e._expandedItemsContainerHeight=l}_updateExpanedContentLocalHeight(e,t){this._supportCSSVariables&&this._usedCSSVariables&&e.$.container.style.setProperty("--smart-accordion-expanded-content-local-height",t)}_updateInlineHeight(){const e=this;e._supportCSSVariables&&e._usedCSSVariables||"singleFitHeight"!==e.expandMode||0===e._items.length||(e._items[e.expandedIndexes[0]].$.accordionItemContent.style.height=e._expandedItemsContainerHeight-1+"px")}_updateItemsIndexProperty(){const e=this;let t=[];for(let n=0;n<e._items.length;n++)e._items[n]._setIndex(n),e._items[n].expanded&&t.push(n);e.expandedIndexes=t.slice()}_upHandler(e){const t=this;if(t._itemIsPressed&&!t.disabled&&!t.readonly){for(let e=0;e<t._items.length;e++)e!==t._selectedItemIndex&&(t._items[e].focused=!1);if(t._selectedItem.focused=!0,t._dragging){const n=t._selectedItem;t.$container.removeClass("smart-reordering"),t.$.fireEvent("dragEnd",{position:{left:e.pageX,top:e.pageY},target:e.originalEvent.target,index:t._selectedItemIndex,label:n.label,content:n.content.innerHTML})}else t._selectedItem.expanded?t.collapse(t._selectedItemIndex,!0):t.expand(t._selectedItemIndex,!0);t._reorderedIndex=void 0,t._dragStart=!1,t._dragging=!1,t._itemIsPressed=!1,t._selectedItem.dragged=!1,t._updateItemsIndexProperty()}}_validateItemsIndex(e,t){const n=this;if(!(isNaN(parseInt(e))||e<0||e>n._items.length-1))return parseInt(e);n.log(n.localize("indexOutOfBound",{elementType:n.nodeName.toLowerCase(),method:t}))}});