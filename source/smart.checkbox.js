
<<<<<<< HEAD
/* Smart HTML Elements v5.1.0 (2019-Dec) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-check-box",class extends Smart.ToggleButton{static get properties(){return{checkMode:{value:"both",allowedValues:["both","input","label"],type:"string"},type:{value:"checkbox",type:"string",defaultReflectToAttribute:!0,readonly:!0}}}template(){return`<div id='container' class='smart-container' role="presentation">
                    <div class='smart-overlay' role="presentation"></div>
                    <span id='checkBoxInput' class='smart-input' aria-hidden="true"></span>
                    <span id='checkBoxLabel' inner-h-t-m-l='[[innerHTML]]' class='smart-label'><content></content></span>
                    <input id='hiddenInput' class='smart-hidden-input' type='hidden'>
                </div>`}static get listeners(){return{down:"_downHandler","document.up":"_documentUpHandler","checkBoxInput.mouseenter":"_mouseEnterHandler","checkBoxInput.mouseleave":"_mouseLeaveHandler",focus:"_focusHandler",blur:"_blurHandler"}}static get styleUrls(){return["smart.toggle.css"]}_focusHandler(){const a=this;a.$.setAttributeValue("focus",!0)}_blurHandler(){const a=this;a.$.setAttributeValue("focus",!1)}_mouseEnterHandler(){const a=this;a.$.setAttributeValue("hover",!0)}_mouseLeaveHandler(){const a=this;a.$.setAttributeValue("hover",!1)}ready(){const a=this;super.ready(),a.setAttribute("role","checkbox"),a.indeterminate&&(a._valueCache=a.checked,a.checked=null,a._setAriaState()),a.classList.add("smart-toggle-box"),a._updateHidenInputNameAndValue()}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;d._updateContentProperties();"indeterminate"===a?(c?(d._valueCache=d.checked,d.checked=null):d.checked=d._valueCache,d._setAriaState(),d._updateHidenInputNameAndValue()):"value"===a?d._updateHidenInputNameAndValue():"checked"===a?d._updateHidenInputNameAndValue():"name"===a?d._updateHidenInputName():void 0}_documentUpHandler(a){const b=this,c=b.enableShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target;if(b._pressed)return b._pressed=!1,b.$.setAttributeValue("active",!1),b.disabled||b.readonly||"input"===b.checkMode&&c!==b.$.checkBoxInput||"label"===b.checkMode&&c!==b.$.checkBoxLabel?void 0:"press"===b.clickMode?(a.preventDefault(),void a.stopPropagation()):void(b._changeCheckState("pointer"),b.focus(),b._handleTextSelection(),b._updateHidenInputNameAndValue())}_downHandler(a){const b=this,c=b.enableShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target;if(!(b.disabled||b.readonly||"input"===b.checkMode&&c!==b.$.checkBoxInput||"label"===b.checkMode&&c!==b.$.checkBoxLabel)){if(b.$.setAttributeValue("active",!0),b.hasRippleAnimation){const a=b.$.checkBoxInput.getBoundingClientRect(),c=window.scrollX||window.pageXOffset,d=window.scrollY||window.pageYOffset;Smart.Utilities.Animation.Ripple.animate(b.$.checkBoxInput,a.left+a.width/2+c,a.top+a.height/2+d)}b._pressed=!0,("press"===b.clickMode||"pressAndRelease"===b.clickMode)&&(b._changeCheckState("pointer"),b.$.fireEvent("click"),b.focus(),b._updateHidenInputNameAndValue())}}_setAriaState(){const a=this,b=a.checked;return null===b?void a.setAttribute("aria-checked","mixed"):void a.setAttribute("aria-checked",b)}});
=======
/* Smart HTML Elements v4.6.0 (2019-Oct) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-check-box",class extends Smart.ToggleButton{static get properties(){return{checkMode:{value:"both",allowedValues:["both","input","label"],type:"string"},type:{value:"checkbox",type:"string",defaultReflectToAttribute:!0,readonly:!0}}}template(){return`<div id='container' class='smart-container'>
                 <div class ='smart-overlay'></div>
                 <span id='checkBoxInput' class ='smart-input'></span>
                 <span id='checkBoxLabel' inner-h-t-m-l='[[innerHTML]]' class ='smart-label'><content></content></span>
                 <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>
               </div>`}static get listeners(){return{down:"_downHandler","document.up":"_documentUpHandler","checkBoxInput.mouseenter":"_mouseEnterHandler","checkBoxInput.mouseleave":"_mouseLeaveHandler",focus:"_focusHandler",blur:"_blurHandler"}}static get styleUrls(){return["smart.checkbox.css"]}_focusHandler(){const a=this;a.$.setAttributeValue("focus",!0)}_blurHandler(){const a=this;a.$.setAttributeValue("focus",!1)}_mouseEnterHandler(){const a=this;a.$.setAttributeValue("hover",!0)}_mouseLeaveHandler(){const a=this;a.$.setAttributeValue("hover",!1)}ready(){const a=this;super.ready(),a.indeterminate&&(a._valueCache=a.checked,a.checked=null),a._updateHidenInputNameAndValue()}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;d._updateContentProperties();"indeterminate"===a?(c?(d._valueCache=d.checked,d.checked=null):d.checked=d._valueCache,d._updateHidenInputNameAndValue()):"value"===a?d._updateHidenInputNameAndValue():"checked"===a?d._updateHidenInputNameAndValue():"name"===a?d._updateHidenInputName():void 0}_documentUpHandler(a){const b=this,c=b.enableShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target;if(b._pressed)return b._pressed=!1,b.$.setAttributeValue("active",!1),b.disabled||b.readonly||"input"===b.checkMode&&c!==b.$.checkBoxInput||"label"===b.checkMode&&c!==b.$.checkBoxLabel?void 0:"press"===b.clickMode?(a.preventDefault(),void a.stopPropagation()):void(b._changeCheckState("pointer"),b.focus(),b._handleTextSelection(),b._updateHidenInputNameAndValue())}_downHandler(a){const b=this,c=b.enableShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target;if(!(b.disabled||b.readonly||"input"===b.checkMode&&c!==b.$.checkBoxInput||"label"===b.checkMode&&c!==b.$.checkBoxLabel)){if(b.$.setAttributeValue("active",!0),b.hasRippleAnimation){const a=b.$.checkBoxInput.getBoundingClientRect(),c=window.scrollX||window.pageXOffset,d=window.scrollY||window.pageYOffset;Smart.Utilities.Animation.Ripple.animate(b.$.checkBoxInput,a.left+a.width/2+c,a.top+a.height/2+d)}b._pressed=!0,("press"===b.clickMode||"pressAndRelease"===b.clickMode)&&(b._changeCheckState("pointer"),b.$.fireEvent("click"),b.focus(),b._updateHidenInputNameAndValue())}}});
>>>>>>> origin/master
