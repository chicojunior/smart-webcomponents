
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-chip",class extends Smart.ContentElement{static get properties(){return{avatar:{value:null,type:"string?"},closeButton:{value:!1,type:"boolean"},itemTemplate:{value:null,type:"any?",reflectToAttribute:!1},value:{value:"",type:"string"}}}static get listeners(){return{click:"_clickHandler",keydown:"_keyDownHandler"}}static get styleUrls(){return["smart.chip.css"]}template(){return'<div id="container" role="presentation">\n                    <span id="avatar" class="smart-avatar">[[avatar]]</span>\x3c!--\n                --\x3e<span id="value" class="smart-value" inner-h-t-m-l="[[innerHTML]]"><content></content></span>\x3c!--\n                --\x3e<span id="closeButton" class="smart-close-button" role="button" aria-label="Close"></span>\n            </div>'}propertyChangedHandler(e,t,a){super.propertyChangedHandler(e,t,a);const n=this;switch(e){case"disabled":case"unfocusable":n._setFocusable();break;case"avatar":n.itemTemplate?n._setAvatar(n._customAvatar):n._setAvatar(n.$.avatar);break;case"itemTemplate":n._applyTemplate();break;case"value":n.itemTemplate?n._applyTemplate():n.$.value.innerHTML=a||""}}render(){const e=this;e.value=e.value?e.value:e.innerHTML,e._applyTemplate(),e._setFocusable(),super.render()}close(){const e=this;e.$.fireEvent("close",{value:e.value}),e.parentElement.removeChild(e)}_applyTemplate(){const e=this;let t=e.itemTemplate;if(!t)return e.$.value.innerHTML=e.value,void e._setAvatar(e.$.avatar);if(!("content"in document.createElement("template")))return void e.error(e.localize("htmlTemplateNotSuported",{elementType:e.nodeName.toLowerCase()}));if(t instanceof HTMLTemplateElement||(t=document.getElementById(t)),null===t||!("content"in t))return void e.error(e.localize("invalidTemplate",{elementType:e.nodeName.toLowerCase()}));let a=t.innerHTML;e.$.container.innerHTML=a.replace(/{{\s*value\s*}}/g,e.value),e._customAvatar=e.$.container.querySelector(".smart-avatar"),e._setAvatar(e._customAvatar)}_clickHandler(e){const t=this;if(t.disabled)return;const a=t.enableShadowDOM?t.shadowRoot.elementFromPoint(e.pageX,e.pageY):e.target;a.closest&&a.closest(".smart-close-button")&&t.close()}_keyDownHandler(e){const t=this;let a=e.key;t.disabled||t.readonly||"Delete"!==a||t.close()}_setAvatar(e){if(!e)return;const t=this,a=/\.(gif|jpg|jpeg|tiff|png)$/i.test(t.avatar);e.innerHTML=a?`<img src="${t.avatar}" aria-label="${t.value?"Avatar of "+t.value:"Avatar"}" />`:t.avatar||""}_setFocusable(){const e=this;e.disabled||e.unfocusable?e.removeAttribute("tabindex"):e.tabIndex=e.tabIndex>0?e.tabIndex:0}});