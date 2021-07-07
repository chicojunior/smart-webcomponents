
/* Smart UI v9.4.1 (2021-07-03) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("DragDrop",class{constructor(e){const t=this;t.ownerElement=e,t._dragDetails=null,t._items=null,t._showFeedback=!0}capture(e,t){this._dragDetails={element:e.element||e,item:e,x:t.pageX,y:t.pageY}}get isDragging(){return null!==this.feedback}get items(){return this._items}set items(e){this._items=e}get showFeedback(){return this._showFeedback}set showFeedback(e){this._showFeedback=e}findTarget(e){const t=this,i=t.ownerElement.rightToLeft;let a=null;if(!t._itemCoordinates)return null;for(let n=0;n<t._itemCoordinates.coordinates.length;n++)for(let r=0;r<t._itemCoordinates.coordinates[n].length;r++){const s=t._itemCoordinates.coordinates[n][r];if(t._items[r]&&(t._items[r].classList.contains("smart-visibility-hidden")||t._items[r].classList.contains("smart-hidden")))continue;if(t._items[s.index]&&(t._items[s.index].classList.contains("smart-visibility-hidden")||t._items[s.index].classList.contains("smart-hidden")))continue;const o=s.rect;if(o.top<=e.clientY&&o.left<=e.clientX&&(a=t._items[s.index],i))break}return a}createFeedback(e){const t=this,i=t.dragDetails;let a;if(t.showFeedback)return i?i.feedback?i.feedback:Math.abs(i.x-e.pageX)>5||Math.abs(i.y-e.pageY)>5?(a=document.createElement("div"),a.className="smart-breadcrumb-feedback",a.style.height=t.dragDetails.element.offsetHeight+"px",a.innerHTML=t.dragDetails.element.innerHTML,document.body.appendChild(a),i.feedback=a,i.element.classList.add("dragged"),t.getItemCoordinates(t.items),t.ownerElement.$.fireEvent("dragStart",{item:i.item,element:i.element,target:i.item,originalEvent:e.originalEvent}),t.ownerElement.rightToLeft?a.setAttribute("right-to-left",!0):a.removeAttribute("right-to-left"),a):null:null}get feedback(){const e=this;return e.dragDetails&&e.dragDetails.feedback?e.dragDetails.feedback:null}removeFeedback(e){const t=this,i=t.dragDetails;if(t.showFeedback){if(i)if(i.feedback&&document.body.removeChild(i.feedback),t.ownerElement.allowDrop){if("Escape"===e.key)return t.ownerElement.$.fireEvent("dragCancel",{item:i.item,element:i.element,originalEvent:e.originalEvent}),void t.removeCapture();t.ownerElement.$.fireEvent("dragEnd",{item:i.item,element:i.element,target:i.target,droppedBeforeTarget:i.before,originalEvent:e.originalEvent}),t.removeCapture()}else t.removeCapture()}else t.removeCapture()}removeCapture(){const e=this,t=e.dragDetails;t&&(e.clearItemDragClass(),t.element.classList.remove("dragged"),e._dragDetails=null)}moveFeedback(e,t){const i=this,a=i.dragDetails;if(!i.showFeedback)return;if(!a)return;const n=i.dragDetails.feedback;n&&(n.style.left=e+"px",n.style.top=t+"px"),delete a.target}drag(e){const t=this;if(!t.dragDetails)return;t.createFeedback(e),t.moveFeedback(e.pageX+5,e.pageY+5);const i=t.findTarget(e);if(i){let a=i.element?i.element:i;if(a)return void t.applyItemDragClass(a,a.getBoundingClientRect(),e)}else t.ownerElement.$.fireEvent("dragging",{item:t.dragDetails.item,element:t.dragDetails.element,target:null,originalEvent:e.pageX?e:e.originalEvent}),t.clearItemDragClass()}error(){const e=this;e.dragDetails&&e.dragDetails.feedback&&e.dragDetails.feedback.classList.add("error")}data(){const e=this;e.dragDetails&&e.dragDetails.feedback&&e.dragDetails.feedback.classList.add("data")}success(){const e=this;e.dragDetails&&e.dragDetails.feedback&&(e.dragDetails.feedback.classList.remove("error"),e.dragDetails.feedback.classList.remove("data"))}applyItemDragClass(e,t,i){const a=this,n=a._dragDetails;let r,s,o;a.clearItemDragClass(),n.target=e,n&&a.showFeedback&&n.feedback&&(n.feedback.classList.remove("error"),n.before=!1),a._minimized?(r=i.clientY,s="top",o="height"):(r=i.clientX,s="left",o="width");const l=e[(a.ownerElement.rightToLeft?"previous":"next")+"ElementSibling"];r<=t[s]+t[o]/2?(e.classList.add("target"),n&&(n.before=!0)):l?l.classList.add("target"):e.classList.add("afterTarget"),n&&(a.ownerElement.rightToLeft&&(n.before=!n.before),a.ownerElement.$.fireEvent("dragging",{item:n.item,element:n.element,target:e,originalEvent:i.originalEvent}))}clearItemDragClass(){const e=this;e.items&&e.items.forEach((e=>{const t=e instanceof HTMLElement?e:e.element;t.classList.remove("target"),t.classList.remove("afterTarget")})),e.ownerElement._addNewItemButton&&e.ownerElement._addNewItemButton.classList.remove("target")}getItemCoordinates(e){if(!e)return{coordinate:[],rows:[]};const t=e.map((e=>e.nodeName?e:e.element)),i=[[]],a=[];let n=t[0].offsetTop,r=0;i[0].push({index:0,rect:t[0].getBoundingClientRect()}),a[0]={top:i[0][0].rect.top,bottom:i[0][0].rect.bottom};for(let e=1;e<t.length;e++){const s=t[e].getBoundingClientRect(),o=t[e].offsetTop;o>n&&(n=o,r++,i[r]=[],a[r]={top:s.top,bottom:s.bottom}),i[r].push({index:e,rect:s})}this._itemCoordinates={coordinates:i,rows:a}}get dragDetails(){return this._dragDetails}}),Smart("smart-breadcrumb",class extends Smart.BaseElement{static get properties(){return{addNewItem:{value:!1,type:"boolean"},allowDrag:{value:!1,type:"boolean"},allowDrop:{value:!1,type:"boolean"},closeButtons:{value:!1,type:"boolean"},dataSource:{value:[],type:"array",reflectToAttribute:!1},itemTemplate:{value:null,type:"any"},minimizeWidth:{value:150,type:"number?"},placeholder:{value:"",type:"string"}}}static get listeners(){return{move:"_moveHandler",resize:"_resizeHandler","container.click":"_containerClickHandler","container.down":"_containerDownHandler","container.transitionend":"_containerTransitionendHandler","hamburgerIcon.click":"_hamburgerIconClickHandler","document.move":"_documentMoveHandler","document.keyup":"_documentKeyUpHandler","document.up":"_documentUpHandler"}}static get styleUrls(){return["smart.breadcrumb.css"]}template(){return'<div id="container" role="presentation">\n                    <div id="minimizedHeader" class="smart-header smart-minimized-header smart-hidden" role="presentation">\n                        <div id="hamburgerIcon" class="smart-hamburger-icon" role="button" aria-label="Toggle" aria-haspopup="dialog" aria-expanded="false">\n                            <div id="hamburgerIconLineTop" class="smart-hamburger-icon-line smart-hamburger-icon-line-top" role="presentation"></div>\n                            <div id="hamburgerIconLineCenter" class="smart-hamburger-icon-line smart-hamburger-icon-line-center" role="presentation"></div>\n                            <div id="hamburgerIconLineBottom" class="smart-hamburger-icon-line smart-hamburger-icon-line-bottom" role="presentation"></div>\n                        </div>\n                    </div>\n                    <template>\n                        <div class="smart-breadcrumb-items" *items={{dataSource}} role="list">\n                            <div class="smart-breadcrumb-item" role="listitem" aria-label={{item.label}}>\n                                <div class="smart-breadcrumb-item-label" inner-H-T-M-L={{item.label}} role="presentation"></div>\n                                <div class="smart-close-button" role="button" aria-label="Close"></div>\n                            </div>\n                        </div>\n                    </template>\n                    <div id="placeholder" class="smart-breadcrumb-placeholder smart-hidden" inner-H-T-M-L={{placeholder}}></div>\n                </div>'}propertyChangedHandler(e,t,i){super.propertyChangedHandler(e,t,i);const a=this;switch(e){case"addNewItem":i?a._appendNewItemButton():(a.$.templateContainer.firstElementChild.removeChild(a._addNewItemButton),delete a._addNewItemButton),a._setIndentation();break;case"animation":case"disabled":case"unfocusable":a.addNewItem&&(a._addNewItemButton[e]=i),"disabled"===e&&a._minimizedDropDownOpened&&a._hamburgerIconClickHandler();break;case"itemTemplate":for(let e=0;e<a._items.length;e++)a._items[e].firstElementChild.innerHTML=a.dataSource[e].label;i&&a._applyTemplate();break;case"minimizeWidth":null!==i&&a.offsetWidth<=i?a.minimize():a.maximize();break;case"closeButtons":a._minimized||a._setIndentation()}}ready(){super.ready();const e=this;e.setAttribute("role","navigation"),e.$.container.children[1].setAttribute("id",e.id+"TemplateContainer"),e.$.container.children[1].setAttribute("role","presentation"),e.$.hamburgerIcon.setAttribute("aria-controls",e.id+"TemplateContainer"),e._edgeMacFF=Smart.Utilities.Core.Browser.Edge||Smart.Utilities.Core.Browser.Firefox&&-1!==navigator.platform.toLowerCase().indexOf("mac"),e.templateContainer=e.$.container.children[1],e._dragDrop=new Smart.Utilities.DragDrop(e),null!==e.minimizeWidth&&e.offsetWidth<=e.minimizeWidth&&e.minimize()}templateAttached(){this._handleDataSourceRefresh()}addItem(e){const t=this.dataSource.slice(0);!e||"object"!=typeof e||isNaN(e.index)||e.index<0||(t.splice(e.index,0,{label:e.label,value:e.value}),this.dataSource=t)}maximize(){const e=this;e._minimized&&(e.$minimizedHeader.addClass("smart-hidden"),e.templateContainer.classList.remove("smart-visibility-hidden"),e._edgeMacFF&&e.templateContainer.classList.remove("not-in-view"),e.$hamburgerIcon.removeClass("smart-close-button"),e.removeAttribute("minimized"),e.$.container.children[1].setAttribute("role","presentation"),e._minimizedDropDownOpened=!1,e._minimized=!1,e.$.fireEvent("maximize"),e._setIndentation())}minimize(){const e=this;if(e._minimized||0===e.offsetWidth||0===e.offsetHeight)return;const t=e.animation,i=e.hasAnimation;i&&(e.animation="none"),e.$minimizedHeader.removeClass("smart-hidden"),e.templateContainer.classList.add("smart-visibility-hidden"),e._edgeMacFF&&e.templateContainer.classList.add("not-in-view"),i&&setTimeout((function(){e.animation=t}),0),e.setAttribute("minimized",""),e.$.container.children[1].setAttribute("role","dialog"),e._minimized=!0,e.$.fireEvent("minimize"),e._setIndentation()}removeItem(e){const t=this,i=t._items.indexOf(e),a=t.dataSource.slice(0);-1!==i&&(a.splice(i,1),t.dataSource=a)}_moveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_resizeHandler(){this.refresh()}refresh(){const e=this;null!==e.minimizeWidth&&e.offsetWidth<=e.minimizeWidth?e.minimize():e._minimized?e.maximize():e._setIndentation()}_containerClickHandler(e){const t=this;if(t.disabled||!t.templateContainer.contains(e.target))return;const i=e.target.closest(".smart-close-button");if(!i){const i=e.target.closest(".smart-breadcrumb-item"),a=t.dataSource[t._items.indexOf(i)];return void t.$.fireEvent("itemClick",{item:a,element:i})}const a=i.closest(".smart-breadcrumb-item"),n=t.dataSource[t._items.indexOf(a)];if(!t.$.fireEvent("closing",{item:n,element:a}).defaultPrevented){const e=t.dataSource.slice(0);e.splice(t._items.indexOf(a),1),t.dataSource=e,t.$.fireEvent("close",{item:n,element:a})}}_containerDownHandler(e){const t=this,i=e.originalEvent.target;if(!t.allowDrag||t.disabled||i.classList.contains("smart-close-button"))return;const a=i.closest(".smart-breadcrumb-item");a&&(t._dragDrop.items=t._items,t._dragDrop.capture(a,e))}_containerTransitionendHandler(e){const t=this;t._edgeMacFF&&e.target===t.templateContainer&&!t._minimizedDropDownOpened&&t.hasAnimation&&t.templateContainer.classList.add("not-in-view")}_hamburgerIconClickHandler(){const e=this;e._minimizedDropDownOpened?(e.$hamburgerIcon.removeClass("smart-close-button"),e.templateContainer.classList.add("smart-visibility-hidden"),e.$.hamburgerIcon.setAttribute("aria-expanded",!1),e._minimizedDropDownOpened=!1):(e.$hamburgerIcon.addClass("smart-close-button"),e._edgeMacFF&&e.templateContainer.classList.remove("not-in-view"),e.templateContainer.classList.remove("smart-visibility-hidden"),e.$.hamburgerIcon.setAttribute("aria-expanded",!0),e._minimizedDropDownOpened=!0)}_documentKeyUpHandler(e){const t=this;t.contains(t.getRootNode().activeElement)&&"Escape"===e.key&&t.dragDrop.removeFeedback(e)}_documentMoveHandler(e){this._dragDrop.dragDetails&&(e.originalEvent.preventDefault(),this._dragDrop.drag(e))}_documentUpHandler(e){const t=this,i=t._dragDrop.dragDetails;if(i)if(i.feedback){if(i.item===i.target)return void t._dragDrop.removeFeedback(e);const a=t._items.slice(0),n=a.indexOf(i.item),r=t.dataSource.slice(0),s=r.splice(n,1);a.splice(n,1);const o=a.indexOf(i.target)+(i.before?0:1);n!==o&&n>=0&&(r.splice(o,0,s[0]),t.dataSource=r),t._dragDrop.removeFeedback(e)}else t._dragDrop.removeCapture()}_handleDataSourceRefresh(){const e=this;e._items=Array.from(e.$.templateContainer.firstElementChild.children),e._items.forEach(((t,i)=>{t.data=e.dataSource[i]})),e.addNewItem&&e._appendNewItemButton(),e._applyTemplate(),e._setIndentation(),0===e._items.length?e.$.placeholder.classList.remove("smart-hidden"):e.$.placeholder.classList.add("smart-hidden")}_appendNewItemButton(){const e=this,t=document.createElement("smart-button");t.innerHTML="+",t.animation=e.animation,t.disabled=e.disabled,t.unfocusable=e.unfocusable,t.setAttribute("aria-label","Add"),t.addEventListener("click",(function(){e.$.fireEvent("addNewItem")})),e.$.templateContainer.firstElementChild.appendChild(t),e._addNewItemButton=t}_setIndentation(){const e=this,t=e._items.slice(0);if(e._addNewItemButton&&t.push(e._addNewItemButton),0===t.length)return;let i=t[0].offsetTop,a=0;if(t.forEach((function(e){e.style.marginLeft=e.style.marginRight=null})),!e._minimized)for(let n=1;n<t.length;n++){const r=t[n],s=t[n].offsetTop;s>i&&(i=s,a++,r.style["margin"+(e.rightToLeft?"Right":"Left")]=10*a+"px")}}_applyTemplate(){const e=this,t=e.itemTemplate;if(null===t)return;let i;if(i=t instanceof HTMLTemplateElement?t:document.getElementById(t),null!==i&&i instanceof HTMLTemplateElement){const t=document.importNode(i.content,!0),a=document.createElement("div");a.appendChild(t);const n=a.innerHTML;for(let t=0;t<e._items.length;t++){const i=e.dataSource,a=i[t].label,r=i[t].value;e._items[t].firstElementChild.innerHTML=n.replace(/{{label}}/g,a).replace(/{{value}}/g,r)}}}});