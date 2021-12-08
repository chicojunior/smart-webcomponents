
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-list-menu",class extends Smart.Menu{static get properties(){return{displayLoadingIndicator:{value:!1,type:"boolean"},dropDownPosition:{value:"auto",allowedValues:["top-left","top-right","bottom-left","bottom-right","auto"],type:"string"},enableMouseWheelAction:{value:!0,type:"boolean"},filterable:{value:!1,type:"boolean"},filterInputPlaceholder:{value:"",type:"string"},filterMember:{value:"label",type:"string"},filterMode:{value:"containsIgnoreCase",allowedValues:["contains","containsIgnoreCase","doesNotContain","doesNotContainIgnoreCase","equals","equalsIgnoreCase","startsWith","startsWithIgnoreCase","endsWith","endsWithIgnoreCase"],type:"string"},grouped:{value:!1,type:"boolean"},loadingIndicatorPlaceholder:{value:"Loading...",type:"string"},loadingIndicatorPosition:{value:"center",allowedValues:["bottom","center","top"],type:"string"},scrollMode:{value:"scrollButtons",allowedValues:["scrollbar","scrollButtons"],type:"string"}}}static get listeners(){return{resize:"_resizeHandler","backButton.click":"_backButtonClickHandler","filterInput.keyup":"_filterInputKeyupHandler","mainContainer.down":"_mainContainerDownHandler","mainContainer.move":"_mainContainerMoveHandler","mainContainer.swipeleft":"_mainContainerSwipeHandler","mainContainer.swiperight":"_mainContainerSwipeHandler","mainContainer.touchmove":"_mainContainerTouchmoveHandler","mainContainer.touchstart":"_mainContainerTouchstartHandler","view.click":"_viewHandler","view.mouseout":"_viewHandler","view.mouseover":"_viewHandler","view.transitionend":"_viewHandler"}}static get styleUrls(){return["smart.listmenu.css"]}template(){return`<div id="container" role="presentation">\n                    <div id="hamburgerIcon" class="smart-hamburger-icon smart-hidden" role="button" aria-label="Toggle minimized menu" aria-haspopup="true">\n                        <div id="hamburgerIconLineTop" class="smart-hamburger-icon-line smart-hamburger-icon-line-top" role="presentation"></div>\n                        <div id="hamburgerIconLineCenter" class="smart-hamburger-icon-line smart-hamburger-icon-line-center" role="presentation"></div>\n                        <div id="hamburgerIconLineBottom" class="smart-hamburger-icon-line smart-hamburger-icon-line-bottom" role="presentation"></div>\n                        <div id="customIconContainer" class="smart-hamburger-icon-custom-container smart-hidden" role="presentation"></div>\n                    </div>\n                    <div id="view" class="smart-list-menu-view" role="presentation">\n                        <div id="header" class="smart-header smart-hidden" role="heading" aria-level="1">\n                            <smart-button id="backButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable right-to-left="[[rightToLeft]]" aria-label="Back">\n                                <div id="backButtonArrow" class="smart-arrow ${this.rightToLeft?"smart-arrow-right":"smart-arrow-left"}" aria-hidden="true"></div>\n                            </smart-button>\n                            <div id="title" class="smart-title"></div>\n                        </div>\n                        <div class="smart-list-menu-filter-input-container smart-hidden" id="filterInputContainer" role="presentation"><input id="filterInput" class="smart-filter-input" disabled="[[disabled]]" placeholder="[[filterInputPlaceholder]]" type="text" role="searchbox" aria-label="[[filterInputPlaceholder]]" /></div>\n                        <smart-repeat-button id="scrollButtonNear" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-near smart-hidden" animation="[[animation]]" unfocusable aria-label="Scroll up">\n                            <div id="arrowNear" class="smart-arrow smart-arrow-up" right-to-left="[[rightToLeft]]"></div>\n                        </smart-repeat-button>\n                        <smart-scroll-viewer id="mainContainer" class="smart-menu-main-container" horizontal-scroll-bar-visibility="hidden" right-to-left="[[rightToLeft]]" role="presentation">\n                            <content></content>\n                        </smart-scroll-viewer>\n                        <smart-repeat-button id="scrollButtonFar" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-far smart-hidden" animation="[[animation]]" unfocusable right-to-left="[[rightToLeft]]" aria-label="Scroll down">\n                            <div id="arrowFar" class="smart-arrow smart-arrow-down"></div>\n                        </smart-repeat-button>\n                        <div id="loadingIndicatorContainer" class="smart-loader-container smart-hidden" role="presentation">\n                            <span id="loadingIndicator" class="smart-loader" role="img" aria-label="[[loadingIndicatorPlaceholder]]"></span>\n                            <span id="loadingIndicatorPlaceHolder" class="smart-loader-label smart-hidden">[[loadingIndicatorPlaceholder]]</span>\n                        </div>\n                    </div>\n                </div>`}attached(){const e=this;super.attached(),e.isCompleted&&null!==e.dropDownAppendTo&&e._minimized&&e._dropDownParent.appendChild(e.$.view)}detached(){const e=this;super.detached(),e._close(),null!==e.dropDownAppendTo&&e._minimized&&e._dropDownParent.removeChild(e.$.view)}addItem(e,t){const i=this;if(!(e instanceof Smart.MenuItem||e instanceof Smart.MenuItemsGroup))return;let r,n,o,a;if(void 0===t)r=void 0,n=1,o=t=i.$.mainContainer,a=i._topLevelFilter;else{if("string"==typeof t&&(t=i.getItem(t)),void 0===t||!(t instanceof Smart.MenuItemsGroup)||!i.contains(t)&&t.closest(".smart-list-menu-view")!==i.$.view)return;r=t,n=t.level+1,o=t.itemContainer,a=t.filter}if(i._createItemHTMLStructure(e,n,t,i._getCurrentViewItems(r).length,0),e instanceof Smart.MenuItemsGroup&&i._processHTML(e,n+1),i._view!==t&&!t.$.hasClass("smart-hidden")&&t.offsetHeight>0&&t.offsetWidth>0&&(!i._view&&!i.$.mainContainer.contains(t)||i._view&&!i._view.contains(t))&&e.$.addClass("smart-hidden"),i.grouped){let e;e=o instanceof Smart.ScrollViewer&&o.isRendered?Array.from(o.$.scrollViewerContentContainer.children):Array.from(o.children);for(let t=e.length-1;t>=0;t--)e[t].$.hasClass("smart-list-menu-group-label")&&o.removeChild(e[t]);i._unsortItems(t,!0)}if(o.appendChild(e),i.grouped){const e=i._view;i._applyGrouping(t,!0),i._home(),e&&i.changePage(e.path)}i.filterable&&void 0!==a&&""!==a&&null===i._findItem(e,a)&&(e.$.addClass("smart-hidden"),e.hidden=!0),i._toggleFilterInputGroupLabelVisibility(),i._checkOverflow()}back(e){const t=this,i=t.animation,r=!1===e&&"none"!==i;r&&(t.animation="none"),t._backButtonClickHandler(),r&&(t.animation=i)}changePage(e){const t=this,i=t.getItem(e);if(void 0===i||i instanceof Smart.MenuItem||i.hidden)return;const r=[i];let n=i.parentItem,o=0;for(t._discardKeyboardHover();n;)r.unshift(n),n=n.parentItem;if(t._view){const e=r.indexOf(t._view);-1===e?t._home():o=e+1}for(let e=o;e<r.length&&!r[e].disabled&&!r[e].hidden;e++)t._menuItemsGroupSelectionHandler(r[e],{type:"expand"},!0)}maximize(){const e=this;if(e._minimized){if(e._positionDetection.removeOverlay(),e._minimized=!1,e._minimizedDropDownOpened&&(e.$hamburgerIcon.removeClass("smart-close-button"),e._minimizedDropDownOpened=!1),null!==e.dropDownAppendTo&&e._appendMinimizedContainerToMenu(e.$.view,null),e.$view.removeClass("smart-visibility-hidden"),e.$view.removeClass("smart-list-menu-view-minimized"),e.$hamburgerIcon.addClass("smart-hidden"),e.removeAttribute("minimized"),e.enableShadowDOM){e.$.view.id=e.$.view.getAttribute("smart-id");const t=e.$.view.querySelectorAll("[smart-id]");for(let e=0;e<t.length;e++)t[e].id=t[e].getAttribute("smart-id")}e.$.mainContainer.scrollTop=0,e._checkOverflow(),e.$.hamburgerIcon.removeAttribute("aria-expanded"),e.$.hamburgerIcon.removeAttribute("aria-owns"),e.$.view.setAttribute("role","presentation"),e.$.view.removeAttribute("aria-orientation"),e.setAttribute("role","menu")}}minimize(){const e=this;if(!e._minimized){if(e.$view.addClass("smart-visibility-hidden"),e.enableShadowDOM){e.$.view.removeAttribute("id");const t=e.$.view.querySelectorAll("[smart-id]");for(let e=0;e<t.length;e++)t[e].removeAttribute("id")}e._edgeMacFF&&e.$view.addClass("not-in-view"),e.$hamburgerIcon.removeClass("smart-hidden"),setTimeout((function(){null!==e.dropDownAppendTo&&e._appendMinimizedContainerToExternalElement(e.$.view),e.$view.addClass("smart-list-menu-view-minimized"),e.$.mainContainer.scrollTop=0,e._checkOverflow()}),0),e._minimized=!0,e.setAttribute("minimized",""),e.setAttribute("role","presentation"),e.removeAttribute("aria-orientation"),e.$.hamburgerIcon.setAttribute("aria-expanded",!1),e.$.hamburgerIcon.setAttribute("aria-owns",e.$.view.id),e.$.view.setAttribute("role","menu"),e.$.view.setAttribute("aria-orientation","vertical")}}removeItem(e){const t=this;if("string"==typeof e&&(e=t.getItem(e)),void 0===e||!(e instanceof Smart.MenuItem||e instanceof Smart.MenuItemsGroup)||!t.contains(e)&&e.closest(".smart-list-menu-view")!==t.$.view)return;const i=e.parentElement;for(;e.contains(t._view);)t._backButtonClickHandler(void 0,!0);const r=t._view;t.grouped&&(t._home(),t._discardGrouping()),i.removeChild(e),t._menuItems={},t._refreshItemPaths(t.$.mainContainer,!0,(function(e){return t._getCurrentViewItems(e===t.$.mainContainer?void 0:e)})),t.grouped&&(t._applyGrouping(t.$.mainContainer),r&&t.changePage(r.path)),t._toggleFilterInputGroupLabelVisibility(),t._checkOverflow()}propertyChangedHandler(e,t,i){if("disabled"===e||"dropDownOverlay"===e||"minimizeIconTemplate"===e||"minimizeWidth"===e||"unfocusable"===e)return void super.propertyChangedHandler(e,t,i);const r=this;switch(e){case"animation":r.$.view.setAttribute("animation",i);break;case"checkable":case"checkboxes":r._minimized&&null!==r.dropDownAppendTo&&(i?r.$.view.setAttribute(e,""):r.$.view.removeAttribute(e));break;case"checkMode":{const e=r.$.mainContainer;r._changeToRadioButtonMode(i,e.isRendered?e.$.scrollViewerContentContainer:e),r._minimized&&null!==r.dropDownAppendTo&&r.$.view.setAttribute("check-mode",i);break}case"dataSource":{r.$header.addClass("smart-hidden"),r.$mainContainer.removeClass("header-shown"),r._view=void 0;const e=r.querySelectorAll("smart-menu-items-group");e.length>0&&e.forEach((e=>{e.remove()})),r._menuItems={},r._topLevelFilter="",r._processDataSource(),r._toggleFilterInputGroupLabelVisibility(),r._checkOverflow();break}case"displayLoadingIndicator":if(i){const e=r.$.mainContainer.querySelector("[hover]");e&&e.removeAttribute("hover"),r._discardKeyboardHover(),r.$loadingIndicatorContainer.removeClass("smart-hidden")}else r.$loadingIndicatorContainer.addClass("smart-hidden");break;case"dropDownAppendTo":{const e=r._dropDownParent;if(r._positionDetection.getDropDownParent(),r._dropDownParent===e||!r._minimized)return;r._close(),null===i?r._appendMinimizedContainerToMenu(r.$.view,null):r._appendMinimizedContainerToExternalElement(r.$.view),r.$.mainContainer.scrollTop=0,r._checkOverflow();break}case"dropDownPosition":r._close(),r._minimized&&null!==r.dropDownAppendTo&&r.$.view.setAttribute("drop-down-position",i);break;case"filterable":if(r._toggleFilterInputGroupLabelVisibility(!0),!1===i){""!==r._topLevelFilter&&r._applyFilter("");for(let e=r._filteredLowerLevelGroups.length-1;e>=0;e--)r._applyFilter("",r._filteredLowerLevelGroups[e])}r._checkOverflow();break;case"filterMode":if(!r.filterable)return;""!==r._topLevelFilter&&r._applyFilter(r._topLevelFilter);for(let e=r._filteredLowerLevelGroups.length-1;e>=0;e--)r._applyFilter(r._filteredLowerLevelGroups[e].filter,r._filteredLowerLevelGroups[e]);break;case"grouped":r._home(),i?r._applyGrouping(r.$.mainContainer):r._discardGrouping(),r._toggleFilterInputGroupLabelVisibility(!1,!0),r._checkOverflow();break;case"loadingIndicatorPosition":null!==r.dropDownAppendTo&&r._minimized&&r.$.view.setAttribute("loading-indicator-position",i),"center"===i?r.$loadingIndicatorPlaceHolder.addClass("smart-hidden"):r.$loadingIndicatorPlaceHolder.removeClass("smart-hidden");break;case"overflow":r.$.mainContainer.verticalScrollBarVisibility="scroll"===i?"visible":i,r._handleOverflowChange();break;case"rightToLeft":i?(r.$backButtonArrow.removeClass("smart-arrow-left"),r.$backButtonArrow.addClass("smart-arrow-right")):(r.$backButtonArrow.removeClass("smart-arrow-right"),r.$backButtonArrow.addClass("smart-arrow-left")),i?r.$.view.setAttribute("right-to-left",""):r.$.view.removeAttribute("right-to-left"),Array.prototype.forEach.call(r.$.mainContainer.querySelectorAll(".smart-menu-items-group-arrow"),(e=>e.className="smart-menu-items-group-arrow "+(r.rightToLeft?"smart-arrow-left left":"smart-arrow-right right")));break;case"scrollMode":r.$.mainContainer.verticalScrollBarVisibility="scrollButtons"===i?"hidden":"scroll"===r.overflow?"visible":r.overflow,r._checkOverflow();break;case"theme":super.propertyChangedHandler(e,t,i),null!==r.dropDownAppendTo&&r._minimized&&(""!==t&&r.$view.removeClass(t),i&&r.$view.addClass(i))}}_appendGroupLabels(e,t){for(let i=0;i<e.length;i++){const r=document.createElement("div");r.$=Smart.Utilities.Extend(r),r.className="smart-list-menu-group-label",r.setAttribute("role","heading"),r.setAttribute("aria-level",1),r.innerHTML=e[i],r.groupChildren=t[i],t[i][0].parentElement.insertBefore(r,t[i][0]);for(let e=0;e<t[i].length;e++)t[i][e].groupLabel=r}}_applyFilter(e,t){const i=this,r=i._getCurrentViewItems(t);for(let n=0;n<r.length;n++){const o=i._findItem(r[n],e);o&&o.hidden?(o.hidden=!1,(t===i._view||void 0!==i._view&&void 0!==t&&!t.contains(i._view)||void 0===i._view)&&o.$.removeClass("smart-hidden")):o||(r[n].hidden=!0,r[n].$.addClass("smart-hidden"))}if(t){t.filter=e;const r=i._filteredLowerLevelGroups.indexOf(t);""===e?-1!==r&&i._filteredLowerLevelGroups.splice(r,1):-1===r&&i._filteredLowerLevelGroups.push(t)}else i._topLevelFilter=e}_backButtonClickHandler(e,t){const i=this,r=i._view;if(e&&e.stopPropagation(),!r||i.disabled&&e||i.displayLoadingIndicator||i._inTransition)return;let n=i.hasAnimation,o=i.animation,a=!1;n&&t&&(n=!1,a=!0,i.animation="none"),i._discardKeyboardHover(),i.$scrollButtonNear.addClass("smart-hidden"),i.$scrollButtonFar.addClass("smart-hidden"),i.$mainContainer.removeClass("scroll-buttons-shown"),r.firstElementChild.classList.remove("smart-hidden"),n?(i._inTransition=!0,r.container.$.addClass("no-transition"),r.container.$.addClass("smart-hidden"),r.$.addClass("right"),r.$.removeClass("right"),r.container.$.removeClass("no-transition")):(r.$.removeClass("smart-menu-items-group-opened"),r.container.$.addClass("smart-hidden")),i._showHideMenuItemsGroupSiblings(r,"removeClass",n),n?setTimeout((function(){r.container.style.top=r.parentElement.getBoundingClientRect().top-r.getBoundingClientRect().top+"px"}),0):a&&(i.animation=o),1===r.level?(i.$header.addClass("smart-hidden"),i.$mainContainer.removeClass("header-shown"),i._view=void 0):(i.$.title.innerHTML=r.parentItem.titleLabel,i._view=r.parentItem),i._toggleFilterInputGroupLabelVisibility(),i.$.mainContainer.scrollTop=0,n||i._checkOverflow(),e&&i.focus()}_bounceBottom(e){const t=this,i=t.$.mainContainer;function r(){i.scrollTop-=5,i.scrollTop>e?window.requestAnimationFrame(r):t.$mainContainer.removeClass("bounce-bottom")}t.$mainContainer.addClass("bounce-bottom"),window.requestAnimationFrame((function e(){i.scrollTop+=5,i.scrollTop!==i.scrollHeight-i.offsetHeight?window.requestAnimationFrame(e):window.requestAnimationFrame(r)}))}_bounceTop(){const e=this,t=e.$.mainContainer;function i(){t.scrollTop+=5,50!==t.scrollTop?window.requestAnimationFrame(i):(t.scrollTop=0,e.$mainContainer.removeClass("bounce-top"))}e.$mainContainer.addClass("bounce-top"),window.requestAnimationFrame((function e(){t.scrollTop-=5,t.scrollTop>0?window.requestAnimationFrame(e):window.requestAnimationFrame(i)}))}_checkOverflow(){const e=this,t=e.overflow,i=e.$.mainContainer,r=i instanceof Smart.ScrollViewer?i.$.content:i;if(r){if("hidden"!==t&&"scrollButtons"===e.scrollMode){const n=Math.round(r.scrollHeight)>Math.round(i.offsetHeight),o=Math.round(i.scrollTop)>0,a=Math.round(i.offsetHeight+i.scrollTop)<Math.round(r.scrollHeight);e.$.mainContainer.verticalScrollBarVisibility="hidden",n?"auto"===t?(e.$mainContainer.hasClass("scroll-buttons-shown")||e.$mainContainer.addClass("scroll-buttons-shown"),o?e.$scrollButtonNear.removeClass("smart-hidden"):e.$scrollButtonNear.addClass("smart-hidden"),a?e.$scrollButtonFar.removeClass("smart-hidden"):e.$scrollButtonFar.addClass("smart-hidden"),!1===(o&&a)?e.$mainContainer.addClass("one-button-shown"):e.$mainContainer.removeClass("one-button-shown"),e.disabled||(e.$.scrollButtonNear.disabled=!1,e.$.scrollButtonFar.disabled=!1)):(e.$scrollButtonNear.removeClass("smart-hidden"),e.$scrollButtonFar.removeClass("smart-hidden"),e.disabled?(e.$.scrollButtonNear.disabled=!0,e.$.scrollButtonFar.disabled=!0):(e.$.scrollButtonNear.disabled=!o,e.$.scrollButtonFar.disabled=!a)):!n&&"auto"===t&&e.$mainContainer.hasClass("scroll-buttons-shown")?(e.$mainContainer.removeClass("scroll-buttons-shown"),e.$mainContainer.removeClass("one-button-shown"),e.$scrollButtonNear.addClass("smart-hidden"),e.$scrollButtonFar.addClass("smart-hidden")):n||"scroll"!==t||(e.$.scrollButtonNear.disabled=!0,e.$.scrollButtonFar.disabled=!0)}else"scrollbar"===e.scrollMode&&(e.$mainContainer.removeClass("scroll-buttons-shown"),e.$mainContainer.removeClass("one-button-shown"),e.$scrollButtonNear.addClass("smart-hidden"),e.$scrollButtonFar.addClass("smart-hidden"));i.refresh()}}_updateScrollButtonVisibility(e,t,i){const r=this,n=r.overflow,o=r.$.mainContainer,a=e===r.$.mainContainer,s=a?o.$.content:e;if(a&&"hidden"===n)return void o.refresh();let l,d,c,m=!0,u=!0;if(t?(l="scrollLeft",d="offsetWidth",c="scrollWidth"):(l="scrollTop",d="offsetHeight",c="scrollHeight"),0===Math.round(e[l])&&(m=!1),Math.round(e[d]+e[l])>=Math.round(s[c])&&(u=!1),a&&"auto"!==n)"scroll"!==n||r.disabled||(i[0].disabled=!m,i[1].disabled=!u);else{if(m&&u)return i[0].$.removeClass("smart-hidden"),i[1].$.removeClass("smart-hidden"),e.classList.remove("one-button-shown"),void o.refresh();m?i[0].$.removeClass("smart-hidden"):i[0].$.addClass("smart-hidden"),u?i[1].$.removeClass("smart-hidden"):i[1].$.addClass("smart-hidden"),e.classList.add("one-button-shown")}o.refresh()}_close(){const e=this;e._discardKeyboardHover(!0),e._minimized&&e._minimizedDropDownOpened&&(e._positionDetection.removeOverlay(),e.$view.addClass("smart-visibility-hidden"),e._edgeMacFF&&(e.$.view.style.left="",e.$.view.style.top="",e.$view.addClass("not-in-view")),e.$hamburgerIcon.removeClass("smart-close-button"),e._minimizedDropDownOpened=!1,e.$.hamburgerIcon.setAttribute("aria-expanded",!1))}_createElement(){const e=this,t=e.$.mainContainer;e.$.title.id||(e.$.title.id=e.id+"Title"),e.$.view.id||(e.$.view.id=e.id+"View"),e.setAttribute("role","menu"),e.setAttribute("aria-labelledby",e.$.title.id),e.setAttribute("aria-orientation","vertical"),e.$.header.setAttribute("aria-labelledby",e.$.title.id),e.mode="vertical",t.verticalScrollBarVisibility="scroll"===e.overflow?"visible":e.overflow,t.refresh=e._scrollViewerRefresh,t._mouseWheelHandler=e._mouseWheelHandler.bind(e),t.onVerticalChange=()=>{"scrollButtons"===e.scrollMode&&e._updateScrollButtonVisibility(t,!1,[e.$.scrollButtonNear,e.$.scrollButtonFar]),t.scrollTop===t.scrollHeight&&e.$.fireEvent("scrollBottomReached")},e._positionDetection=new Smart.Utilities.PositionDetection(e),e._positionDetection.getDropDownParent(),null===e.dataSource&&e.$.mainContainer.firstElementChild instanceof HTMLUListElement&&e._processUList();const i=e.getElementsByTagName("smart-menu-item"),r=function(){e._setFocusable(),e._menuItems={},e._topLevelFilter="",e._filteredLowerLevelGroups=[],e.$.view.setAttribute("animation",e.animation),null===e.dataSource?e._processHTML(void 0,1):e._processDataSource(),e._toggleFilterInputGroupLabelVisibility(),"scroll"===e.overflow&&(e.$mainContainer.addClass("scroll-buttons-shown"),e.$scrollButtonNear.removeClass("smart-hidden"),e.$scrollButtonFar.removeClass("smart-hidden"),e._updateScrollButtonVisibility(e.$.mainContainer,!1,[e.$.scrollButtonNear,e.$.scrollButtonFar])),e._applyMinimizeIconTemplate(e.minimizeIconTemplate,null),null!==e.minimizeWidth&&e.offsetWidth<=e.minimizeWidth?e.minimize():e._checkOverflow(),e.displayLoadingIndicator&&e.$loadingIndicatorContainer.removeClass("smart-hidden"),"center"!==e.loadingIndicatorPosition&&e.$loadingIndicatorPlaceHolder.removeClass("smart-hidden"),e.__onCompleted&&(e._onCompleted=e.__onCompleted,e.__onCompleted=null,e._onCompleted())};0===i.length?r():(e._onCompleted&&(e.__onCompleted=e._onCompleted,e._onCompleted=null),e._ensureItemsReady(i,r))}_createMenuItemsGroupContainer(e,t){const i=document.createElement("div"),r=document.createElement("div");return i.className="smart-menu-drop-down smart-hidden",i.$=Smart.Utilities.Extend(i),i.level=t,i.setAttribute("level",t),i.setAttribute("role","menu"),i.menuItemsGroup=e,r.className="smart-menu-item-container",r.$=Smart.Utilities.Extend(r),r.container=i,r.menuItemsGroup=e,e.checkable&&r.setAttribute("checkable",""),r.setAttribute("check-mode",e.checkMode),i.itemContainer=r,i.appendChild(r),i}_discardGrouping(){const e=this,t=Array.from(e.$.view.getElementsByClassName("smart-list-menu-group-label"));for(let e=0;e<t.length;e++){let i=t[e];i.parentElement.removeChild(i)}e._unsortItems(e.$.mainContainer)}_discardKeyboardHover(){const e=this;e._focusedViaKeyboard&&(e._focusedViaKeyboard===e.$.backButton?(e.$.backButton.removeAttribute("hover"),e.$.backButton.$.button.removeAttribute("hover")):(e._focusedViaKeyboard.removeAttribute("focus"),e._focusedViaKeyboard.removeAttribute("hover")),e._focusedViaKeyboard=void 0)}_documentUpHandler(e){const t=this,i=e.originalEvent.target,r=e=>{"right"===e&&!t.rightToLeft||"left"===e&&t.rightToLeft?t._backButtonClickHandler():t._swipeDetails.target&&t._selectionHandler({target:t._swipeDetails.target},t._swipeDetails.target,!0)};if(delete t._dragStartDetails,t._swipeDetails){const i="pointercancel"===e.originalEvent.type;return"left"===t._swipeDetails.direction?(i||t._swipeDetails.start>e.pageX&&t._swipeDetails.start-e.pageX>t.offsetWidth/4)&&r(t._swipeDetails.direction):(i||t._swipeDetails.start<e.pageX&&e.pageX-t._swipeDetails.start>t.offsetWidth/4)&&r(t._swipeDetails.direction),void delete t._swipeDetails}i===t.$.filterInput||t.disabled||t.displayLoadingIndicator||!i.closest||(t.contains(i)||i.closest(".smart-list-menu-view")===t.$.view?!t.contains(i)&&i.closest(".smart-list-menu-view")!==t.$.view||t===document.activeElement||t.focus():t._close())}_ensureVisible(e){const t=this,i=t.$.mainContainer;if(!i.$.hasClass("scroll-buttons-shown")&&"hidden"!==t.overflow)return;const r=i.getBoundingClientRect(),n=e.getBoundingClientRect(),o=[t.$.scrollButtonNear,t.$.scrollButtonFar],a=i.scrollTop;(r.top>n.top||r.bottom<n.bottom)&&(i.scrollTop=e.offsetTop,t._updateScrollButtonVisibility(i,!1,o)),t._fireScrollBottomReachedEvent(a)}_fireScrollBottomReachedEvent(e){const t=this.$.mainContainer,i=t.scrollTop;e!==i&&i===t.scrollHeight-t.offsetHeight&&this.$.fireEvent("scrollBottomReached")}_getCurrentViewItems(e){const t=this;let i;if(void 0===e&&(i=t.$.mainContainer,i instanceof Smart.ScrollViewer&&(i=i.isRendered?i.$.scrollViewerContentContainer:i)),t.grouped){if(void 0===e)return Array.from(i.children).filter((e=>e instanceof Smart.MenuItem||e instanceof Smart.MenuItemsGroup));{const t=e.container.firstElementChild.children,i=[];for(let e=0;e<t.length;e++){let r=t[e];(r instanceof Smart.MenuItem||r instanceof Smart.MenuItemsGroup)&&i.push(r)}return i}}return void 0===e?i.children:e.container.firstElementChild.children}_sortItems(e){const t=this;if(!t.grouped)return;const i=[],r=t.$.mainContainer,n=[];let o;e instanceof Smart.MenuItemsGroup?o=e.container.firstElementChild:e===t.$.mainContainer&&(o=r instanceof Smart.ScrollViewer?r.$.content:r);const a=Array.from(o.children);a.sort((function(e,t){return e.label.localeCompare(t.label)}));for(let e=a.length-1;e>=0;e--)o.insertBefore(a[e],o.firstElementChild);for(let e=0;e<a.length;e++){const t=a[e],r=t.label.charAt(0),o=i.indexOf(r.toUpperCase());-1===o?(i.push(r.toUpperCase()),n.push([t])):n[o].push(t)}t._appendGroupLabels(i,n)}_home(){const e=this;for(;e._view;)e._backButtonClickHandler(void 0,!0)}_keydownHandler(e){const t=this,i=e.key;if(((t.shadowRoot||t.getRootNode()).activeElement||document.activeElement)!==t||-1===["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Enter","Escape","Home"," "].indexOf(i)||t.disabled||t.displayLoadingIndicator)return;e.preventDefault();const r=t._view,n=t.$.mainContainer;let o;o=r?r.itemContainer:n.isRendered?n.$.scrollViewerContentContainer:n;const a=t.$.backButton.hasAttribute("hover")?t.$.backButton:o.querySelector("[focus]");switch(i){case"ArrowDown":t._navigate("_getNextEnabledChild",a,o);break;case"ArrowLeft":case"ArrowRight":if("ArrowLeft"===i&&!t.rightToLeft||"ArrowRight"===i&&t.rightToLeft){t._backButtonClickHandler();break}("ArrowRight"===i&&!t.rightToLeft||"ArrowLeft"===i&&t.rightToLeft)&&a&&a instanceof Smart.MenuItemsGroup&&t._menuItemsGroupSelectionHandler(a,{type:"keydown"});break;case"ArrowUp":t._navigate("_getPreviousEnabledChild",a,o);break;case"End":case"Home":{if(r&&"Home"===i)return t.$.mainContainer.scrollTop=0,t._checkOverflow(),t.$.backButton.setAttribute("hover",""),t.$.backButton.$.button.setAttribute("hover",""),t._focusedViaKeyboard=t.$.backButton,void(a&&a.removeAttribute("focus"));const e="End"===i?t._getLastEnabledChild(o):t._getFirstEnabledChild(o);if(!e||a===e)return;a&&(a===t.$.backButton?(t.$.backButton.removeAttribute("hover"),t.$.backButton.$.button.removeAttribute("hover")):a.removeAttribute("focus")),t._hoverViaKeyboard(e);break}case"Enter":t._minimized&&!t._minimizedDropDownOpened?t._hamburgerIconClickHandler(void 0,t.$.view):a&&(a===t.$.backButton?t._backButtonClickHandler():t._selectionHandler({target:a}));break;case"Escape":t._minimized&&t._minimizedDropDownOpened&&!t._view?t._close():t._backButtonClickHandler();break;case" ":a&&(a===t.$.backButton?t._backButtonClickHandler():t._toggleItem(a))}}_mainContainerDownHandler(e){const t=this;!Smart.Utilities.Core.isMobile||t.disabled||t.displayLoadingIndicator||(t._dragStartDetails={startY:e.pageY,x:e.pageX,y:e.pageY,startTime:Date.now(),target:e.originalEvent.target})}_mainContainerHandler(){}_mainContainerMoveHandler(){}_mainContainerSwipeHandler(e){const t=this;if(!Smart.Utilities.Core.isMobile||t.disabled||t.displayLoadingIndicator||Math.abs(t._dragStartDetails.startY-e.pageY)>2)return;const i=e.originalEvent.target,r=i.closest("smart-menu-item"),n=i.closest("smart-menu-items-group");if("swiperight"===e.type&&!t.rightToLeft||"swipeleft"===e.type&&t.rightToLeft){const i=r||n;i&&(delete t._dragStartDetails,t._swipeDetails={direction:e.type.replace("swipe",""),start:e.pageX,target:i})}else("swipeleft"===e.type&&!t.rightToLeft||"swiperight"===e.type&&t.rightToLeft&&n&&null===r)&&(delete t._dragStartDetails,t._swipeDetails={direction:e.type.replace("swipe",""),start:e.pageX,target:n})}_mainContainerTouchmoveHandler(){}_mainContainerTouchstartHandler(){}_getRootDetails(e,t){const i=this;if(!e)return;if(!i.enableShadowDOM)return{activeElement:e.activeElement,isInsideElement:i.contains(t.target)};let r,n;for(;e&&(!r&&e.activeElement&&(r=e.activeElement),e.host===i&&(n=!0),e!==document);)e=e.host?e.host.getRootNode():e.getRootNode();return{activeElement:r,isInsideElement:n}}_menuItemsGroupSelectionHandler(e,t,i){const r=this,n=e.container,o=n.level,a=r._getRootDetails(t.target?t.target.getRootNode():null,t);if(r._view===e)return;if(r._discardKeyboardHover(),a&&a.activeElement!==r&&null!==r.dropDownAppendTo&&"click"===t.type&&!a.isInsideElement&&r.focus(),r._inTransition)return;if("click"===t.type&&!t.target.classList.contains("smart-menu-items-group-arrow")&&r._toggleItem(e))return void r._ripple(e,t);let s=r.hasAnimation,l=r.animation,d=!1;s&&i&&(s=!1,d=!0,r.animation="none"),2===o&&(r.$header.removeClass("smart-hidden"),r.$mainContainer.addClass("header-shown")),r.$.title.innerHTML=e.titleLabel,r._view=e,r._toggleFilterInputGroupLabelVisibility(),e.removeAttribute("hover"),e.removeAttribute("focus"),e.$.addClass("smart-menu-items-group-opened"),r._showHideMenuItemsGroupSiblings(e,"addClass",s),s?(r._inTransition=!0,e.firstElementChild.classList.add("animate"),setTimeout((function(){n.style.top=e.parentElement.getBoundingClientRect().top-e.getBoundingClientRect().top+"px"}),0)):e.firstElementChild.classList.add("smart-hidden"),n.$.removeClass("smart-hidden"),d&&(r.animation=l),r.$.mainContainer.scrollTop=0,s||r._checkOverflow(),r.$.fireEvent("expand",{item:e,label:e.label,path:e.path,value:e.value})}_mouseoutMouseoverHandler(e){const t=this;if(t.disabled||t.displayLoadingIndicator)return;const i=e.target.closest("smart-menu-item")||e.target.closest("smart-menu-items-group");null===i||t._view&&i.level<=t._view.level||i.disabled||i.templateApplied||(t._discardKeyboardHover(),"mouseover"===e.type?(i.setAttribute("hover",""),t._discardKeyboardHover(!0)):i.removeAttribute("hover"))}_navigate(e,t,i){const r=this;if(!t)return void("_getNextEnabledChild"===e?r._view?(r.$.backButton.setAttribute("hover",""),r.$.backButton.$.button.setAttribute("hover",""),r._focusedViaKeyboard=r.$.backButton):r._hoverViaKeyboard(r._getFirstEnabledChild(i)):r._hoverViaKeyboard(r._getLastEnabledChild(i)));let n;if("_getNextEnabledChild"===e&&t===r.$.backButton){if(n=r._getFirstEnabledChild(i),!n)return;r.$.backButton.removeAttribute("hover"),r.$.backButton.$.button.removeAttribute("hover")}else{if("_getPreviousEnabledChild"===e&&r._view&&t===r._getFirstEnabledChild(i))return r.$.backButton.setAttribute("hover",""),r.$.backButton.$.button.setAttribute("hover",""),r._focusedViaKeyboard=r.$.backButton,void t.removeAttribute("focus");n=r[e](t)}n&&(t.removeAttribute("focus"),r._hoverViaKeyboard(n))}_processHTML(e,t){const i=this,r=i.$.mainContainer;let n,o,a;void 0===e&&(e=i.$.mainContainer),t>1&&(n=i._createMenuItemsGroupContainer(e,t),o=n.itemContainer),a=e===r?Array.from((r instanceof Smart.ScrollViewer?r.$.content:r).children):Array.from(e.children);const s=[];let l=0;for(let r=0;r<a.length;r++){if(t>1&&0===r){l++;continue}const n=a[r];n instanceof Smart.MenuItem||n instanceof Smart.MenuItemsGroup?(i._createItemHTMLStructure(n,t,e,r-l),n.checked&&(n.disabled||n.templateApplied?n.checked=!1:s.push(n)),t>1&&o.appendChild(n),n instanceof Smart.MenuItemsGroup&&i._processHTML(n,t+1)):(n.parentElement.removeChild(n),l++)}if(t>1){if(e.container=n,e.itemContainer=o,e instanceof Smart.MenuItemsGroup){const t=document.createElement("div");t.className="smart-menu-items-group-arrow "+(i.rightToLeft?"smart-arrow-left left":"smart-arrow-right right"),e.children[0].appendChild(t)}e.appendChild(n)}i._validateRadioButtonSelection(e,t,s),i._sortItems(e)}_resizeHandler(){this.refresh()}refresh(){const e=this,t=e.minimizeWidth;if(null!==t){if(!e._minimized&&e.offsetWidth<=t)return void e.minimize();if(e._minimized&&e.offsetWidth>t)return void e.maximize()}e._checkOverflow()}_scroll(e){const t=this,i=t.$.mainContainer,r=e.classList.contains("smart-scroll-button-near")?-1:1,n=i.scrollTop;i.scrollTop=i.scrollTop+10*r,"scrollbar"!==t.scrollMode&&n!==i.scrollTop&&(t._updateScrollButtonVisibility(i,!1,[t.$.scrollButtonNear,t.$.scrollButtonFar]),t._fireScrollBottomReachedEvent(n))}_selectionHandler(e,t,i){const r=this,n=e.target;if(!r.disabled&&!r.displayLoadingIndicator){if(r._swipeDetails&&!i)return delete r._dragStartDetails,void delete r._swipeDetails;if(void 0===t){if("click"===e.type){const t=n.closest("smart-repeat-button");if(t)return void r._scroll(t,e)}const i=n.closest("smart-menu-item");if(i)return i.disabled||i.templateApplied||(r._toggleItem(i)||r.$.fireEvent("itemClick",{item:i,label:i.label,value:i.value}),r._ensureVisible(i),r._ripple(i,e)),void o();if((t=n.closest("smart-menu-items-group"))&&(n===t.container||n===t.container.firstElementChild))return}t&&!t.disabled&&r._menuItemsGroupSelectionHandler(t,e)}function o(){const t=r._getRootDetails(n.getRootNode(),e);t&&t.activeElement!==r&&null!==r.dropDownAppendTo&&"click"===e.type&&!t.isInsideElement&&r.focus()}}_showHideMenuItemsGroupSiblings(e,t,i){const r=e.parentElement.children;for(let n=0;n<r.length;n++){const o=r[n];o!==e&&(o.hidden||(i?"addClass"===t?o.$.addClass("animate"):(o.$.removeClass("smart-hidden"),o.$.addClass("right"),setTimeout((function(){o.$.removeClass("right")}),0)):o.$[t]("smart-hidden")))}}_toggleFilterInputGroupLabelVisibility(e,t){const i=this,r=i._getCurrentViewItems(i._view).length;if(!0!==t){const e=!i.$filterInputContainer.hasClass("smart-hidden");i.filterable&&r>1?(e||(i.$mainContainer.addClass("filter-input-shown"),i.$filterInputContainer.removeClass("smart-hidden")),i._view?i.$.filterInput.value=i._view.filter||"":i.$.filterInput.value=i._topLevelFilter):e&&(i.$mainContainer.removeClass("filter-input-shown"),i.$filterInputContainer.addClass("smart-hidden"))}if(!e&&i.grouped&&r>0){const e=i._view?i._view.container.firstElementChild.firstElementChild.$:i.$.mainContainer.$.content.firstElementChild.$;1===r?e.addClass("smart-hidden"):e.removeClass("smart-hidden")}}_viewHandler(e){const t=this;if("transitionend"===e.type){const i=e.target;if(i===t.$.view||t.$.backButton.contains(i))return;return i.classList.contains("animate")&&(i.classList.remove("animate"),i.classList.add("smart-hidden")),i.classList.contains("smart-menu-drop-down")&&(i.style.top=""),i.classList.contains("smart-menu-items-group-opened")&&i.classList.remove("smart-menu-items-group-opened"),cancelAnimationFrame(t._refreshScroll),t._refreshScroll=requestAnimationFrame((()=>{t._checkOverflow(),cancelAnimationFrame(t._refreshScroll),delete t._refreshScroll})),void(t._inTransition=!1)}if(t._minimized&&null!==t.dropDownAppendTo)switch(e.type){case"click":t._selectionHandler(e);break;case"mouseout":case"mouseover":t._mouseoutMouseoverHandler(e)}}_mouseWheelHandler(e){let t=this;if(t.enableMouseWheelAction&&!t.disabled&&!t.displayLoadingIndicator&&(t=t.$.mainContainer,t.scrollHeight>0)){const i=t.scrollTop;if(0===i&&e.deltaY<0||i===t.scrollHeight&&e.deltaY>0)return;e.stopPropagation(),e.preventDefault(),t.scrollTo(t.scrollTop+t._getScrollCoefficient(e,t.offsetHeight))}}_scrollViewerRefresh(){const e=this;e.$.scrollViewerContentContainer&&(e.scrollWidth=0,e.scrollHeight=function(){let t;const i=e.$.scrollViewerContainer.classList.contains("hscroll");if(e.$.scrollViewerContainer.classList.remove("hscroll"),Smart.Utilities.Core.Browser.Safari){const i=e.$.scrollViewerContentContainer.getBoundingClientRect().height,r=e.$.scrollViewerContainer.getBoundingClientRect().height;t=i&&r?parseInt(i)-parseInt(r):e.$.scrollViewerContentContainer.scrollHeight-e.$.scrollViewerContainer.offsetHeight}else t=e.$.scrollViewerContentContainer.scrollHeight-e.$.scrollViewerContainer.offsetHeight;return t>0&&"hidden"!==e.verticalScrollBarVisibility||"visible"===e.verticalScrollBarVisibility?e.$.scrollViewerContainer.classList.add("vscroll"):e.$.scrollViewerContainer.classList.remove("vscroll"),i&&e.$.scrollViewerContainer.classList.add("hscroll"),t}(),e.computedVerticalScrollBarVisibility&&(e.scrollHeight+=e._scrollView.hScrollBar.offsetHeight))}});