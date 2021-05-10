
/* Smart UI v9.3.53 (2021-05-10) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-radio-button",class extends Smart.ToggleButton{static get properties(){return{checkMode:{value:"both",allowedValues:["both","input","label"],type:"string"},type:{value:"radio",type:"string",defaultReflectToAttribute:!0,readonly:!0},groupName:{value:"",type:"string"}}}template(){return"<div  id='container' class='smart-container'>\n                 <div class ='smart-overlay'></div>\n                 <span id='radioButtonInput' class ='smart-input'></span>\n                 <span id='radioButtonLabel' inner-h-t-m-l='[[innerHTML]]' class ='smart-label'><content></content></span>\n                 <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>\n               </div>"}static get listeners(){return{down:"_downHandler","document.up":"_documentUpHandler",mouseenter:"_elementMouseEnterHandler","radioButtonInput.mouseenter":"_radioMouseEnterHandler","radioButtonInput.mouseleave":"_radioMouseLeaveHandler",focus:"_focusHandler",blur:"_blurHandler"}}static get styleUrls(){return["smart.toggle.css"]}_radioMouseEnterHandler(){this.$.setAttributeValue("hover",!0)}_radioMouseLeaveHandler(){this.$.setAttributeValue("hover",!1)}_focusHandler(){this.$.setAttributeValue("focus",!0)}_blurHandler(){this.$.setAttributeValue("focus",!1)}_mouseEnterHandler(){this.$.setAttributeValue("hover",!0)}_mouseLeaveHandler(){this.$.setAttributeValue("hover",!1)}ready(){const e=this;super.ready(),e.classList.add("smart-toggle-box"),e._handleMultipleCheckedInstances(),e._updateHidenInputNameAndValue()}_downHandler(e){const t=this,n=t.enableShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if(!(t.disabled||t.readonly||"input"===t.checkMode&&n!==t.$.radioButtonInput||"label"===t.checkMode&&n!==t.$.radioButtonLabel)){if(t.$.setAttributeValue("active",!0),t.hasRippleAnimation){const e=t.$.radioButtonInput.getBoundingClientRect(),n=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset;Smart.Utilities.Animation.Ripple.animate(t.$.radioButtonInput,e.left+e.width/2+n,e.top+e.height/2+a)}t._preventAction?t._preventAction=!1:("release"!==t.clickMode&&"pressAndRelease"!==t.clickMode||(t._pressed=!0),"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||("pressAndRelease"===t.clickMode&&(""===t.groupName?t._checkedBeforeChange=t.parentNode.querySelector("smart-radio-button[checked]"):t._checkedBeforeChange=document.querySelector('smart-radio-button[group-name="'+t.groupName+'"][checked]')),t._handleMouseInteraction()))}}_elementMouseEnterHandler(){const e=this;"hover"!==e.clickMode||e.disabled||e.readonly||e._handleMouseInteraction()}_documentUpHandler(e){const t=this,n=t.enableShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;!t._pressed||t.disabled||t.readonly||"input"===t.checkMode&&n!==t.$.radioButtonInput||"label"===t.checkMode&&n!==t.$.radioButtonLabel||"pointercancel"===e.originalEvent.type||("release"===t.clickMode?t._handleMouseInteraction():(null===t._checkedBeforeChange?(t.$.fireEvent("change",{value:!1,oldValue:!0,changeType:"pointer"}),t.$.fireEvent("uncheckValue",{changeType:"pointer"}),t.checked=!1):t._checkedBeforeChange._changeCheckState("pointer"),t.focus(),t._updateHidenInputNameAndValue()),t.$.setAttributeValue("active",!1),t._pressed=!1)}_handleMouseInteraction(){const e=this;e._handleTextSelection(),e._changeCheckState("pointer"),e.focus(),e._updateHidenInputNameAndValue()}_handleMultipleCheckedInstances(){const e=Array.from(document.querySelectorAll('smart-radio-button[group-name="'+this.groupName+'"][checked]')),t=Array.from(document.querySelectorAll('smart-ui-radio-button[group-name="'+this.groupName+'"][checked]')),n=e.length+t.length;n<2||e.concat(...t).forEach(((e,t)=>t<n-1&&(e.checked=!1)))}_changeCheckState(e){const t=this;let n=document.querySelectorAll('smart-radio-button[group-name="'+t.groupName+'"]'),a=document.querySelectorAll('smart-ui-radio-button[group-name="'+t.groupName+'"]'),o=Array.from(n).concat(...a);if(!0===t.checked&&"api"===e||!1===t.checked)if(o.length>0)t._changeCheckStateInGroup(o,e);else{let r=t.parentNode;t.getRootNode().host?(r=t.getRootNode().host.parentNode,n=r.querySelectorAll("smart-radio-button:not([group-name])"),a=r.querySelectorAll("smart-ui-radio-button:not([group-name])"),o=Array.from(n).concat(...a)):o=r.querySelectorAll("smart-radio-button:not([group-name])"),t._changeCheckStateInGroup(o,e)}}_changeCheckStateInGroup(e,t){const n=this,a=n.getRootNode().host?n.getRootNode().host:n;for(let t=0;t<e.length;t++)e[t]._isUpdating=!0,e[t]===a?a.checked=!0:e[t].checked&&(e[t].checked=!1),e[t]._isUpdating=!1;a.nativeElement?(a.nativeElement.$.fireEvent("change",{value:!0,oldValue:!1,changeType:t}),a.nativeElement.$.fireEvent("checkValue",{changeType:t})):(a.$.fireEvent("change",{value:!0,oldValue:!1,changeType:t}),a.$.fireEvent("checkValue",{changeType:t}))}propertyChangedHandler(e,t,n){const a=this;switch(e){case"value":a._updateHidenInputNameAndValue();break;case"checked":a._isUpdating||a._changeCheckState("api"),a._updateHidenInputNameAndValue();break;case"name":a._updateHidenInputName();break;default:super.propertyChangedHandler(e,t,n)}}});