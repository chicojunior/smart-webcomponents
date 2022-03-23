
/* Smart UI v13.1.1 (2022-03-23) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-carousel",class extends Smart.ContentElement{static get properties(){return{adaptiveHeight:{value:!1,type:"boolean"},adaptiveAutoHeight:{value:!1,type:"boolean"},autoPlay:{value:!1,type:"any"},dataSource:{value:[],type:"array",reflectToAttribute:!1},delay:{value:200,type:"number"},displayMode:{allowedValues:["default","multiple","3d"],value:"default",type:"string"},disableItemClick:{value:!1,type:"boolean"},hideArrows:{value:!1,type:"boolean"},hideIndicators:{value:!1,type:"boolean"},indicatorTemplate:{value:null,type:"any"},interval:{value:5e3,type:"number"},itemTemplate:{value:null,type:"any"},keyboard:{value:!1,type:"boolean"},loop:{value:!1,type:"boolean"},messages:{value:{en:{htmlTemplateNotSuported:"{{elementType}}:  Browser doesn't support HTMLTemplate elements."}},type:"object",extend:!0},slideShow:{value:!1,type:"boolean"},swipe:{value:!1,type:"boolean"},wheel:{value:!1,type:"boolean"}}}static get listeners(){return{"arrowLeft.click":"_handleArrowClick","arrowRight.click":"_handleArrowClick","indicatorsContainer.click":"_handleIndicatorsContainerClick",keydown:"_handleKeyDown",swipeleft:"_handleSwipe",swiperight:"_handleSwipe",wheel:"_handleMouseWheel","itemsContainer.click":"_handleItemClick","itemsContainer.transitionend":"_handleTransitionEnd"}}static get requires(){return{"Smart.RepeatButton":"smart.button.js"}}static get styleUrls(){return["smart.button.css","smart.carousel.css"]}get enableShadowDOM(){const e=this,t=Smart.EnableShadowDOM;return e._isInShadowDOM?!e._isInShadowDOM:e.isCompleted?null!==e.shadowRoot:t}template(){return'<div id="container" role="presentation">\n                    <div id="itemsContainer" inner-h-t-m-l="[[innerHTML]]" class="smart-items-container" role="presentation"><content></content></div>\n                    <smart-repeat-button initial-delay="0" right-to-left="[[rightToLeft]]" delay="[[delay]]" id="arrowLeft" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-left" aria-label="Previous slide"></smart-repeat-button>\n                    <smart-repeat-button initial-delay="0" right-to-left="[[rightToLeft]]" delay="[[delay]]" id="arrowRight" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-right" aria-label="Next slide"></smart-repeat-button>\n                    <div id="indicatorsContainer" class="smart-indicators-container" role="tablist"></div>\n                </div>'}propertyChangedHandler(e,t,a){const n=this;switch(super.propertyChangedHandler(e,t,a),e){case"disabled":n._setFocusable();break;case"dataSource":if(n._currentIndex=0,n._generateIndicators(),n._generateItems(),n._handleIndicatorsState(0,0),n._handleItemsState(0,0),n._handle3dMode(0),!1!==n.autoPlay){const e=parseInt(n.autoPlay);e?setTimeout((function(){n.play()}),e):n.play()}n._animationTrigger(n._currentIndex),(n.adaptiveHeight||n.adaptiveAutoHeight)&&n._setAdaptiveHeight();break;case"itemTemplate":n._generateItems(),n._handleItemsState(n._currentIndex,n._currentIndex+1),(n.adaptiveHeight||n.adaptiveAutoHeight)&&n._setAdaptiveHeight();break;case"indicatorTemplate":n._generateIndicators(),n._handleIndicatorsState(n._currentIndex,n._currentIndex+1);break;case"interval":n.pause(),n.play();break;case"loop":n._handleArrowsActiveState(n._currentIndex,n._currentIndex);break;case"hideArrows":a||n._handleArrowsActiveState(n._currentIndex,n._currentIndex);break;case"displayMode":"multiple"===t&&n.$.itemsContainer.removeAttribute("style")}}render(){const e=this;if(e.setAttribute("role","region"),e.setAttribute("aria-roledescription","carousel"),e._setInitialState(),e._generateIndicators(),e._generateItems(),e._handleIndicatorsState(0,0),e._handleItemsState(0,0),e._handle3dMode(0),!1!==e.autoPlay){const t=parseInt(e.autoPlay);t?setTimeout((function(){e.play()}),t):e.play()}e._setFocusable(),e._animationTrigger(e._currentIndex),e._handleArrowsActiveState(0,e._currentIndex),(e.adaptiveHeight||e.adaptiveAutoHeight)&&(window.addEventListener("resize",(()=>{e._setAdaptiveHeight()})),e._setAdaptiveHeight()),super.render()}_setAdaptiveHeight(){const e=this;let t=10;(e.adaptiveHeight||e.adaptiveAutoHeight)&&(e._items.forEach((a=>{const n=a.querySelector("img");n&&(n.onload=()=>{e.classList.remove("smart-calculated-height"),e.offsetHeight<a.children[0].offsetHeight&&(e.style.height=a.children[0].offsetHeight+"px"),e.classList.add("smart-calculated-height")}),a.children[0].offsetHeight>t&&(t=a.children[0].offsetHeight)})),e.style.height=t+"px",e.classList.add("smart-calculated-height"))}_setAdaptiveAutoHeight(){const e=this;let t=10;e._items.forEach((e=>{e.classList.contains("smart-active")&&(t=e.children[0].offsetHeight)})),e.style.height=t+"px",e.classList.add("smart-calculated-height")}next(){const e=this,t=e.dataSource.length;if(e.disabled||0===t)return;let a=e._currentIndex;a=e.loop?a>=t-1?0:a+1:a>=t-1?a:a+1,e._goToItem(a)}pause(){this._handleRotation(),this._rotate=!1}slideTo(e){const t=this;e=e?parseInt(e):0,t.disabled||e<0||e>t._items.length||t._goToItem(e)}prev(){const e=this,t=e.dataSource.length;if(e.disabled||0===t)return;let a=e._currentIndex;a=e.loop?a<=0?t-1:a-1:a<=0?0:a-1,e._goToItem(a)}play(){const e=this;!e.disabled&&e.slideShow&&(e._rotationInterval&&clearInterval(e._rotationInterval),e._handleRotation(!0),e._rotate=!0)}_animationTrigger(e){const t=this;for(let a=0;a<t._items.length;a++)a!==e&&t._items[a].classList.add("smart-animate-trigger")}_handle3dMode(e){const t=this,a=t.dataSource.length;if(!t.disabled&&a&&"3d"===t.displayMode){e=e||0;for(let n=0;n<a;n++){const a=(n-e)*(t.rightToLeft?-1:1);a?t._items[n].setAttribute("position",a):t._items[n].removeAttribute("position")}}}_handleArrowsActiveState(e){const t=this,a=t.dataSource.length;t.loop?t.$.arrowLeft.disabled=t.$.arrowRight.disabled=!1:t.rightToLeft?(t.$.arrowRight.disabled=0===e,t.$.arrowLeft.disabled=e===a-1):(t.$.arrowLeft.disabled=0===e,t.$.arrowRight.disabled=e===a-1)}_handleArrowClick(e){const t=this,a=t._currentIndex;t.disabled||(t.rightToLeft?t.$.arrowLeft.contains(e.target)?t.next():t.prev():t.$.arrowLeft.contains(e.target)?t.prev():t.next(),t._changeEvent(a,t._currentIndex))}_handleDefaultInnerHTML(){const e=this;if(!(e.dataSource&&e.dataSource.length>0)&&e.$.itemsContainer.innerHTML.indexOf("<ul")>=0){const t=e.$.itemsContainer.getElementsByTagName("ul")[0].getElementsByTagName("li");for(let a=0;a<t.length;a++){const n={HTMLcontent:t[a].innerHTML};e.dataSource.push(n)}}}_handleIndicatorsState(e,t){const a=this;a.disabled||0===a._indicators.length||!e&&0!==e||!t&&0!==t||(e!==t&&(a._indicators[e].classList.remove("smart-active"),a._indicators[e].setAttribute("aria-selected",!1)),a._indicators[t].classList.add("smart-active"),a._indicators[t].setAttribute("aria-selected",!0))}_handleItemClick(e){const t=this,a=e.target.closest(".smart-carousel-item");if(t.disabled||!a||"3d"!==t.displayMode||t.disableItemClick)return;const n=parseInt(a.getAttribute("item-id")),i=parseInt(a.getAttribute("position"));Math.abs(i)>3||t._goToItem(n)}_handleItemsState(e,t){const a=this;a.disabled||0===a._items.length||!e&&0!==e||!t&&0!==t||(e!==t&&(a._items[e].classList.remove("smart-active"),a._items[e].classList.add("smart-out")),a._items[t].classList.add("smart-active"))}_handleIndicatorsContainerClick(e){const t=this,a=e.target.closest(".smart-indicator"),n=t._currentIndex;if(t.disabled||!a)return;const i=parseInt(a.getAttribute("indicator-id"));n!==i&&(t._goToItem(i),t._changeEvent(n,t._currentIndex))}_handleMultipleMode(e){const t=this;if("multiple"!==t.displayMode)return;const a=t._items[e].offsetWidth,n=t.$.container.offsetWidth,i=t.$.itemsContainer.offsetWidth;let r=0;if(0!==e)if(e!==t._items.length-1){for(let a=0;a<e;a++)r+=t._items[e].offsetWidth;r+a/2>=n/2&&r+a<i&&(t.$.itemsContainer.style.marginLeft="-"+(r+a/2-n/2)+"px")}else t.$.itemsContainer.style.marginLeft="-"+(i-n)+"px";else t.$.itemsContainer.style.marginLeft="0px"}_changeEvent(e,t){if(e===t)return;const a=this;a.onIndexChange?a.onIndexChange(t):(a.$.fireEvent("changing",{index:t,previousIndex:e}),a.hasAnimation&&"default"!==a.displayMode||a.$.fireEvent("change",{index:t,previousIndex:e}))}_handleKeyDown(e){const t=this,a=e.key,n=t._currentIndex;if(!t.disabled&&t.keyboard&&-1!==["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","Home","End"," ","Enter"].indexOf(a)){switch(a){case"ArrowLeft":case"ArrowDown":t.rightToLeft?t.next():t.prev();break;case"ArrowUp":case"ArrowRight":t.rightToLeft?t.prev():t.next();break;case"Home":t._goToItem(0);break;case"End":t._goToItem(t.dataSource.length-1);break;case" ":t._rotate?t.pause():t.play();break;case"Enter":t.play()}t._changeEvent(n,t._currentIndex)}}_handleMouseWheel(e){const t=this,a=t._currentIndex;!t.disabled&&t.wheel&&document.activeElement===t&&(e.stopPropagation(),e.preventDefault(),e.deltaY>0?t.next():t.prev(),t._changeEvent(a,t._currentIndex))}_handleRotation(e){const t=this;e?t._rotationInterval=setInterval((function(){t.slideShow&&t.next()}),t.interval):clearInterval(t._rotationInterval)}_handleSwipe(e){const t=this;!t.disabled&&t.swipe&&(e.stopPropagation(),e.preventDefault(),"swipeleft"===e.type?t.prev():t.next())}_generateIndicator(e){const t=this,a=document.createElement("span"),n=e||0;if(t.indicatorTemplate){const e=t._validateTemplate(t.indicatorTemplate);a.innerHTML=t._processItemTemplate(e.content,t.dataSource[n])}return a.setAttribute("role","tab"),a.setAttribute("aria-selected",!1),a.classList.add("smart-indicator"),a.setAttribute("indicator-id",n),a}_generateIndicators(){const e=this,t=e.dataSource.length;let a=[],n=document.createDocumentFragment();for(let i=0;i<t;i++){const t=e._generateIndicator(i);a.push(t),n.appendChild(t)}e._indicators=a;const i=e.$.indicatorsContainer;for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(n)}_generateItem(e){const t=this,a=e||0,n=t.dataSource[a],i=document.createElement("div");if(i.id=t.id+"Slide"+e,t.itemTemplate){const e=t._validateTemplate(t.itemTemplate);i.innerHTML=t._processItemTemplate(e.content,t.dataSource[a])}else"string"==typeof n?i.style.backgroundImage='url("'+n+'")':i.innerHTML=`<div class="smart-carousel-item-container" style="background-image:url('${n.image||""}')" role="presentation">\n                        <h2 id="${i.id+"Label"}" class="smart-carousel-item-label">${n.label||""}</h2 >\n                        <p class="smart-carousel-item-content">${n.content||""}</p>\n                    </div>\n                    <div class="smart-carousel-html-content">${n.HTMLcontent||""}</div>\n                </div>`;return n.label?(i.setAttribute("aria-labelledby",i.id+"Label"),t._indicators[e].setAttribute("aria-labelledby",i.id+"Label")):(i.setAttribute("aria-label","Slide "+e),t._indicators[e].setAttribute("aria-label","Slide "+e)),t._indicators[e].setAttribute("aria-controls",i.id),i.setAttribute("role","tabpanel"),i.classList.add("smart-carousel-item"),i.setAttribute("item-id",a),i}_processItemTemplate(e,t){const a=e.match(/{{\w+}}/g);let n=e;return a&&0!==a.length?(a.forEach((function(e){const a=e.replace("{{","").replace("}}","");n=n.replace(e,t[a]||"")})),n):n}_generateItems(){const e=this,t=e.dataSource.length;let a=[],n=document.createDocumentFragment();for(let i=0;i<t;i++){const t=e._generateItem(i);a.push(t),n.appendChild(t)}e._items=a;const i=e.$.itemsContainer;for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(n)}_goToItem(e,t){const a=this,n=a.dataSource.length,i=a._currentIndex;let r=e;e<0?r=0:e>n-1&&(r=n-1),a._removeFadeOut(),a._animationTrigger(),a._handleIndicatorsState(i,r),a._handleItemsState(i,r),a._currentIndex=r,t&&a._changeEvent(i,r),a._handle3dMode(r),a._handleMultipleMode(r),a._handleArrowsActiveState(r,i),a.adaptiveAutoHeight&&a._setAdaptiveAutoHeight()}_setFocusable(){const e=this;if(e.disabled||e.unfocusable)return e.removeAttribute("tabindex"),void(e.tabIndex=-1);let t=e.tabIndex>0?e.tabIndex:0;e.setAttribute("tabindex",t),e.tabIndex=t}_setInitialState(){const e=this;e._currentIndex=0,e._indicators=[],e._items=[],e._rotate=!1,e._handleDefaultInnerHTML()}_validateTemplate(e){const t=this;let a="",n=!1;return"function"==typeof e&&(a=e()),"content"in document.createElement("template")?(a=e instanceof HTMLElement||(e=document.getElementById(e))?e.innerHTML:"",/{{\w+}}/g.exec(a)&&(n=!0),{content:a,hasBindings:n}):(t.error(t.localize("htmlTemplateNotSuported",{elementType:t.nodeName.toLowerCase()})),void(t.itemTemplate=null))}_handleTransitionEnd(e){if(!e.target.classList.contains("smart-carousel-item")||e.target.getAttribute("position"))return;const t=this,a=e.target.getAttribute("item-id");t._lastTransitionEndId!==a&&(t._removeFadeOut(),this.$.fireEvent("change",{index:a,previousIndex:t._lastTransitionEndId}),t._lastTransitionEndId=a)}_removeFadeOut(){const e=this.$.itemsContainer.getElementsByClassName("smart-out");if(e.length)for(let t=0;t<e.length;t++)e[t].classList.remove("smart-out")}});