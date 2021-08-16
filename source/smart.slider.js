
/* Smart UI v10.0.1 (2021-08-16) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-slider",class extends Smart.Tank{static get properties(){return{enableMouseWheelAction:{value:!1,type:"boolean"},hint:{value:"",type:"string"},orientation:{value:"horizontal",allowedValues:["horizontal","vertical"],type:"string",defaultReflectToAttribute:!0},rangeSlider:{value:!1,type:"boolean"},showButtons:{value:!1,type:"boolean"},values:{value:["0","100"],type:"array"}}}static get listeners(){return{"track.down":"_trackDownHandler","thumb.down":"_thumbDownHandler","secondThumb.down":"_thumbDownHandler","thumb.mouseleave":"_thumbMoveMouseleaveHandler","secondThumb.mouseleave":"_thumbMoveMouseleaveHandler","thumb.move":"_thumbMoveMouseleaveHandler","secondThumb.move":"_thumbMoveMouseleaveHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler","leftButton.click":"_spinButtonClickHandler","rightButton.click":"_spinButtonClickHandler",keydown:"_keydownHandlerSlider",keyup:"_keyupHandlerSlider",resize:"_resizeAndStyleChangedHandler",styleChanged:"_resizeAndStyleChangedHandler","document.selectstart":"_selectStartHandler",wheel:"_wheelHandler"}}static get requires(){return{"Smart.RepeatButton":"smart.button.js"}}static get styleUrls(){return["smart.slider.css","smart.button.css"]}template(){return'<div id="container" class="smart-container" role="presentation">\n                <div id="scaleNear" class="smart-scale smart-scale-near" aria-hidden="true"></div>\n                <div id="trackContainer" class="smart-track-container" role="presentation">\n                    <smart-repeat-button id="leftButton" class="smart-spin-button" animation="[[animation]]" unfocusable>\n                        <div id="leftArrow" class="smart-arrow" aria-hidden="true"></div>\n                    </smart-repeat-button>\n                    <div id="track" class="smart-track" role="presentation">\n                        <div id="fill" class="smart-value" role="presentation"></div>\n                        <div id="trackTicksContainer" class="smart-track-ticks-container smart-hidden" role="presentation"></div>\n                        <div id="thumb" class="smart-thumb" role="slider">\n                            <span id="thumbLabel" class="smart-thumb-label" role="presentation"></span>\n                            <div id="tooltip" class="smart-tooltip" role="tooltip">\n                                <div id="tooltipContent" class="smart-tooltip-content smart-unselectable" role="presentation"></div>\n                            </div>\n                        </div>\n                        <div id="secondThumb" class="smart-thumb" role="slider">\n                            <span id="secondThumbLabel" class="smart-thumb-label" role="presentation"></span>\n                            <div id="secondTooltip" class="smart-tooltip" role="tooltip">\n                                <div id="secondTooltipContent" class="smart-tooltip-content smart-unselectable" role="presentation"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <smart-repeat-button id="rightButton" class="smart-spin-button" animation="[[animation]]" unfocusable>\n                        <div id="rightArrow" class="smart-arrow" aria-hidden="true"></div>\n                    </smart-repeat-button>\n                </div>\n                <div id="scaleFar" class="smart-scale smart-scale-far" aria-hidden="true"></div>\n                <input id="hiddenInput" type="hidden" name="[[name]]">\n                <span class="smart-hint" id="span">[[hint]]</span>\n            </div>'}_createElement(){const e=this,t="numeric"===e.mode;if(e.$.tooltip.id||(e.$.tooltip.id=e.id+"Tooltip",e.$.secondTooltip.id=e.id+"SecondTooltip"),e.setAttribute("role","presentation"),e.setAttribute("aria-describedby",e.$.tooltip.id+" "+e.$.secondTooltip.id),e._renderingSuspended||(t?e._redefineProperty("values"):t||e._handleDateScale()),e._setSettingsObject(),e._setDrawVariables(),e._getLayoutType(),e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._numberRenderer=new Smart.Utilities.NumberRenderer,!e._isVisible())return void(e._renderingSuspended=!0);e._renderingSuspended=!1,e._setInitialComponentDisplay(),e._measurements={},e._getMeasurements(),e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength);const a=e._valuesHandler=e.rangeSlider?new Smart.Utilities.SliderMultipleValueHandler(e):new Smart.Utilities.SliderSingleValueHandler(e);t&&(e._getEventValue=function(){return e._valuesHandler.getValue()}),e._validateInitialPropertyValues(),e._setTicksAndInterval(),a.validate(!0),a.updateTooltipValue(),window.requestAnimationFrame((function(){e.$thumb.addClass("enable-animation"),e.$secondThumb.addClass("enable-animation"),e.$fill.addClass("enable-animation")})),e._setFocusable(),e._makeThumbAccessible(),e.$.hiddenInput.value=e._getEventValue(),e.$.thumb.setAttribute("aria-orientation",e.orientation),e.$.secondThumb.setAttribute("aria-orientation",e.orientation),e._setAriaValue("valuenow")}val(e){const t=this,a=t._valuesHandler;if(void 0===e)return t._getEventValue();"date"===t.mode&&(t.rangeSlider?(e[0]=Smart.Utilities.DateTime.validateDate(e[0]),e[1]=Smart.Utilities.DateTime.validateDate(e[1]),e[0]=e[0].getTimeStamp(),e[1]=e[1].getTimeStamp()):e=(e=Smart.Utilities.DateTime.validateDate(e)).getTimeStamp()),a.areDifferent(e)&&a.validate(!1,e,!0)}getOptimalSize(){const e=this;if(e._renderingSuspended)return{width:0,height:0};const t=window.getComputedStyle(e),a=window.getComputedStyle(e.$.trackContainer);let i,r,n,o,s,l,d,u,m=0;return i="all"===e.labelsVisibility?e._numericProcessor._longestLabelSize:"endPoints"===e.labelsVisibility?Math.max(e._tickIntervalHandler.labelsSize.minLabelOtherSize,e._tickIntervalHandler.labelsSize.maxLabelOtherSize):0,"horizontal"===e.orientation?(m+=parseFloat(a.marginTop)+parseFloat(a.marginBottom)+e.$.track.offsetHeight,"near"!==e.scalePosition&&"both"!==e.scalePosition||(m+=i,n=e.$.scaleNear.getElementsByClassName("smart-label"),o=n[0],s=n[n.length-1],m+=parseFloat(window.getComputedStyle(o).bottom)),"far"!==e.scalePosition&&"both"!==e.scalePosition||(m+=i,n=e.$.scaleFar.getElementsByClassName("smart-label"),o=n[0],s=n[n.length-1],m+=parseFloat(window.getComputedStyle(o).top)),m+=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),r=e.offsetWidth,"none"!==e.scalePosition&&(l=o.getBoundingClientRect(),d=s.getBoundingClientRect(),u=l.left+o.offsetWidth-d.left,u>0&&(r=o.offsetWidth+s.offsetWidth+Math.max(10,e.$.thumb.offsetWidth))),{width:r,height:m}):(m+=parseFloat(a.marginLeft)+parseFloat(a.marginRight)+e.$.track.offsetWidth,"near"!==e.scalePosition&&"both"!==e.scalePosition||(m+=i,n=e.$.scaleNear.getElementsByClassName("smart-label"),o=n[0],s=n[n.length-1],m+=parseFloat(window.getComputedStyle(o).right)),"far"!==e.scalePosition&&"both"!==e.scalePosition||(m+=i,n=e.$.scaleFar.getElementsByClassName("smart-label"),o=n[0],s=n[n.length-1],m+=parseFloat(window.getComputedStyle(o).left)),m+=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),r=e.offsetHeight,"none"!==e.scalePosition&&(l=o.getBoundingClientRect(),d=s.getBoundingClientRect(),u=l.top+o.offsetHeight-d.top,u>0&&(r=o.offsetHeight+s.offsetHeight+Math.max(10,e.$.thumb.offsetHeight))),{width:m,height:r})}propertyChangedHandler(e,t,a){const i=this;if(!i._isVisible()||i._renderingSuspended)return void(i._renderingSuspended=!0);if(-1!==["disabled","mode","readonly","showThumbLabel","tooltipPosition","unfocusable","validation"].indexOf(e))return void super.propertyChangedHandler(e,t,a);let r=i._valuesHandler;function n(){i._setTicksAndInterval(),r.validate(!1,r.getValue(),!0)}if("values"!==e&&a!=t||"values"===e&&(a[0]!=t[0]||a[1]!==t[1]))switch(e){case"coerce":if(a){const e=r.getValue();r.validate(!1,e.slice(0),!0),i._valueBeforeCoercion=e}else void 0!==i._valueBeforeCoercion&&r.validate(!1,i._valueBeforeCoercion.slice(0),!0);break;case"customInterval":case"customTicks":super.propertyChangedHandler(e,t,a),i.customInterval&&r.validate(!1,r.getValue(),!0);break;case"dateLabelFormatString":"date"===i.mode&&n();break;case"decimalSeparator":case"scientificNotation":if("date"===i.mode)return;n();break;case"interval":i._numericProcessor.validateInterval(a),r.validate(!1,r.getValue(),!0);break;case"inverted":case"rightToLeft":i._getLayoutType(),i._normalLayout&&(i.$.fill.style[i._settings.margin]="0px"),n();break;case"labelFormatFunction":case"showUnit":case"unit":n();break;case"labelsVisibility":case"ticksVisibility":return;case"logarithmicScale":if("date"===i.mode)return void(i.logarithmicScale=!1);i._validateMinMax("both"),n();break;case"min":case"max":"date"===i.mode&&(delete i._dateInterval,i[e]=Smart.Utilities.DateTime.validateDate(a).getTimeStamp()),i._validateMinMax(e,!1,t),n();break;case"orientation":i.$.container.removeAttribute("style"),i.$.trackContainer.removeAttribute("style"),i.$.fill.removeAttribute("style"),i.$.thumb.removeAttribute("style"),i.$.secondThumb.removeAttribute("style"),i._setSettingsObject(),i._getLayoutType(),i._getMeasurements(),n(),"horizontal"===a?(i.$leftArrow.removeClass("smart-arrow-up"),i.$rightArrow.removeClass("smart-arrow-down"),i.$leftArrow.addClass("smart-arrow-left"),i.$rightArrow.addClass("smart-arrow-right")):(i.$leftArrow.removeClass("smart-arrow-left"),i.$rightArrow.removeClass("smart-arrow-right"),i.$leftArrow.addClass("smart-arrow-up"),i.$rightArrow.addClass("smart-arrow-down")),i.$.thumb.setAttribute("aria-orientation",a),i.$.secondThumb.setAttribute("aria-orientation",a);break;case"precisionDigits":case"significantDigits":if("date"===i.mode)return;"precisionDigits"===e&&"integer"===i.scaleType&&i.error(i.localize("noInteger",{elementType:i.nodeName.toLowerCase(),property:e})),"significantDigits"===e&&null!==i.precisionDigits?i.precisionDigits=null:"precisionDigits"===e&&null!==i.significantDigits&&(i.significantDigits=null),n();break;case"rangeSlider":a?(i.values=[i.min,i.value],i._drawValues=[i._drawMin,i._drawValue],"date"===i.mode&&(i._valueDate=[i._minDate.clone(),i._valueDate]),void 0!==i._valueBeforeCoercion&&(i._valueBeforeCoercion=[i.min,i._valueBeforeCoercion]),r=i._valuesHandler=new Smart.Utilities.SliderMultipleValueHandler(i)):(i.value=i.values[1],i._drawValue=i._drawValues[1],"date"===i.mode&&(i._valueDate=i._valueDate[1]),void 0!==i._valueBeforeCoercion&&(i._valueBeforeCoercion=i._valueBeforeCoercion[1]),r=i._valuesHandler=new Smart.Utilities.SliderSingleValueHandler(i),i.$.fill.style.marginTop=0,i.$.fill.style.marginLeft=0),r.validate(!1,r.getValue(),!0);break;case"scalePosition":i._setInitialComponentDisplay(),n();break;case"scaleType":if("date"===i.mode)return void(i.scaleType="integer");i._numericProcessor=new Smart.Utilities.NumericProcessor(i,"scaleType"),i._validateMinMax("both"),i._setTicksAndInterval(),r.validate(!0);break;case"showButtons":a?(i.$leftButton.removeClass("smart-hidden"),i.$rightButton.removeClass("smart-hidden")):(i.$leftButton.addClass("smart-hidden"),i.$rightButton.addClass("smart-hidden")),i._setTicksAndInterval(),r.moveThumbBasedOnValue(r.getDrawValue(),void 0,!0);break;case"showTooltip":super.propertyChangedHandler(e,t,a),a||(i.$tooltip.addClass("smart-hidden"),i.$secondTooltip.addClass("smart-hidden"));break;case"theme":super.propertyChangedHandler(e,t,a),n();break;case"ticksPosition":"scale"===a?(i.$trackTicksContainer.addClass("smart-hidden"),i.$.trackTicksContainer.innerHTML=""):i.$trackTicksContainer.removeClass("smart-hidden"),i._setTicksAndInterval();break;case"value":case"values":if("value"===e&&i.rangeSlider||"values"===e&&!i.rangeSlider)return;if(i[e]=t,"date"===i.mode)if("value"===e){if(a=(a=Smart.Utilities.DateTime.validateDate(a)).getTimeStamp(),i.value=a,0===a.compare(t))return}else if(a[0]=Smart.Utilities.DateTime.validateDate(a[0]),a[1]=Smart.Utilities.DateTime.validateDate(a[1]),a[0]=a[0].getTimeStamp(),a[1]=a[1].getTimeStamp(),i.values=a,0===a[0].compare(t[0])&&0===a[1].compare(t[1]))return;r.validate(!1,a,!0);break;case"wordLength":if("date"===i.mode)return void(i.wordLength="uint64");i._wordLengthNumber=i._numericProcessor.getWordLength(a),i._validateMinMax("both"),n()}else"string"!=typeof a&&"string"==typeof t&&(i[e]=t)}_addMovedThumbClass(){const e=this;e.rangeSlider&&(e._movedThumb.$.addClass("smart-moved-thumb"),e._movedThumb===e.$.thumb?e.$secondThumb.removeClass("smart-moved-thumb"):e.$thumb.removeClass("smart-moved-thumb"))}_setInitialComponentDisplay(){super._setInitialComponentDisplay();const e=this;e.$secondTooltip.addClass("smart-hidden"),e.showButtons||(e.$leftButton.addClass("smart-hidden"),e.$rightButton.addClass("smart-hidden"))}_getMeasurements(){const e=this,t=e._measurements,a=e.$.track,i=e.$.thumb;e._isVisible()&&!e._renderingSuspended?("horizontal"===e.orientation?(t.trackWidth=a.offsetHeight,t.thumbSize=i.offsetWidth,t.borderWidth=parseFloat(window.getComputedStyle(e.$.track).borderLeftWidth)):(t.trackWidth=a.offsetWidth,t.thumbSize=i.offsetHeight,t.borderWidth=parseFloat(window.getComputedStyle(e.$.track).borderTopWidth)),t.halfThumbSize=t.thumbSize/2):e._renderingSuspended=!0}_layout(){const e=this,t=e._measurements,a=e.$.container.style,i=t.halfThumbSize,r=e._tickIntervalHandler.labelsSize;let n,o,s,l;if("none"!==e.scalePosition?(n=r.minLabelSize/2,o=r.maxLabelSize/2):(n=0,o=0),e.showButtons){const t=e.$.leftButton[e._settings.size]+i;s=Math.max(n-t,0)+"px",l=Math.max(o-t,0)+"px"}else s=Math.max(i,n)+"px",l=Math.max(i,o)+"px";"horizontal"===e.orientation?(!e.inverted&&!e.rightToLeft||e.rightToLeft&&e.inverted?(a.paddingLeft=s,a.paddingRight=l):(a.paddingLeft=l,a.paddingRight=s),t.trackLength=e.$.track.clientWidth,e.$leftArrow.addClass("smart-arrow-left"),e.$rightArrow.addClass("smart-arrow-right")):(e.inverted?(a.paddingBottom=l,a.paddingTop=s):(a.paddingBottom=s,a.paddingTop=l),t.trackLength=e.$.track.clientHeight,e.$leftArrow.addClass("smart-arrow-up"),e.$rightArrow.addClass("smart-arrow-down"))}_trackDownHandler(e){const t=this,a=t.mechanicalAction;t.disabled||t.readonly||!t.rangeSlider&&e.target===t.$.thumb||(t._stopTrackDownHandler?t._stopTrackDownHandler=!1:("switchWhileDragging"!==a&&(t._valueAtDragStart=t._valuesHandler.getValue()),t._getTrackStartAndEnd(),t._valuesHandler.setActiveThumbOnTrackClick(e),t._moveThumbBasedOnCoordinates(e,!0,"switchWhenReleased"!==a),t._thumbDragged=!0,t.setAttribute("dragged",""),t.showTooltip&&t._movedTooltip.removeClass("smart-hidden")))}_trackMoveHandler(){}_thumbDownHandler(e){const t=this;t.disabled||t.readonly||(t._getTrackStartAndEnd(),(e[t._settings.page]<t._trackStart||e[t._settings.page]>t._trackEnd)&&(t._stopTrackDownHandler=!0),"switchWhileDragging"!==t.mechanicalAction&&(t._valueAtDragStart=t._valuesHandler.getValue()),window.getSelection().removeAllRanges(),t._thumbDragged=!0,t.setAttribute("dragged",""),t.$track.addClass("smart-dragged"),t._movedThumb=e.target,t._addMovedThumbClass(),t._movedTooltip=t.$tooltip,t.rangeSlider&&(t._movedThumb===t.$.thumb?(t._staticThumb=t.$.secondThumb,t.$secondTooltip.addClass("smart-hidden")):(t._staticThumb=t.$.thumb,t._movedTooltip=t.$secondTooltip,t.$tooltip.addClass("smart-hidden"))),t.showTooltip&&t._movedTooltip.removeClass("smart-hidden"),e.stopPropagation())}_thumbMoveMouseleaveHandler(e){if(this.disabled||this.readonly)return;const t=e.target;if("move"===e.type){const a=t.getBoundingClientRect(),i=window.scrollX||window.pageXOffset,r=window.scrollY||window.pageYOffset,n=(a.left+a.right)/2+i,o=(a.top+a.bottom)/2+r,s=Math.pow(a.width/2,2);if(Math.pow(e.pageX-n,2)+Math.pow(e.pageY-o,2)>s)return;t.setAttribute("hover","")}else t.removeAttribute("hover")}_documentMoveHandler(e){const t=this;t._thumbDragged&&(t.$thumb.removeClass("enable-animation"),t.$secondThumb.removeClass("enable-animation"),t.$fill.removeClass("enable-animation"),t._moveThumbBasedOnCoordinates(e,!0,"switchWhenReleased"!==t.mechanicalAction))}_documentUpHandler(e,t){const a=this;a._thumbDragged&&(a.$thumb.addClass("enable-animation"),a.$secondThumb.addClass("enable-animation"),a.$fill.addClass("enable-animation"),t||("switchUntilReleased"===a.mechanicalAction?a._valuesHandler.validate(!1,a._valueAtDragStart):"switchWhenReleased"===a.mechanicalAction&&a._moveThumbBasedOnCoordinates(e,!0,!0)),a.showTooltip&&a._movedTooltip.addClass("smart-hidden"),a._thumbDragged=!1,a.removeAttribute("dragged"),a._makeThumbAccessible(),a._movedThumb=void 0,a.$track.removeClass("smart-dragged"))}_spinButtonClickHandler(e){const t=this;if(t.disabled||t.readonly)return;let a;a=t.$.leftButton.contains(e.target)===t._normalLayout?"subtract":"add",t._valuesHandler.incrementOrDecrement(a)}_keydownHandlerSlider(e){const t=this,a=e.key;if("Escape"===a&&t._thumbDragged&&"switchWhenReleased"===t.mechanicalAction)return t._documentUpHandler(void 0,!0),void t._valuesHandler.validate(!1,t._valueAtDragStart);-1===["ArrowDown","ArrowLeft","ArrowRight","ArrowUp"].indexOf(a)||t.coerce||(t.$thumb.removeClass("enable-animation"),t.$secondThumb.removeClass("enable-animation"),t.$fill.removeClass("enable-animation"),t._restoreAnimationClass=!0),this._valuesHandler.keydownHandler(e)}_keyupHandlerSlider(){const e=this;e._restoreAnimationClass&&(e.$thumb.addClass("enable-animation"),e.$secondThumb.addClass("enable-animation"),e.$fill.addClass("enable-animation"))}refresh(){this._resizeAndStyleChangedHandler()}_resizeAndStyleChangedHandler(e){const t=this,a=t._valuesHandler;if(t._isVisible()){if(t._renderingSuspended)t._createElement();else if(!t._renderingSuspended&&(t._getMeasurements(),t._setTicksAndInterval(),a.validate(!1,a.getValue(),!0),e&&"styleChanged"===e.type)){const a=e.detail.styleProperties;if(a["font-size"]||a["font-family"]||a["font-style"]||a["font-weight"]){const e=t.getOptimalSize();t.style.width=e.width+"px",t.style.height=e.height+"px"}}}else t._renderingSuspended=!0}_moveThumbBasedOnCoordinates(e,t,a){const i=this,r=i._numericProcessor,n=i._trackStart,o=i._settings.margin;let s=e[i._settings.page];t&&(s=i._valuesHandler.restrictThumbCoordinates(s,n,i._trackEnd));let l=r.pxToValue(s);i.rangeSlider&&i._movedThumb===i.$.thumb&&1===r.compare(l,i.values[1],!0)&&(l=r.createDescriptor(i.values[1]));let d=l;i.logarithmicScale?(l=r.getCoercedValue(Math.log10(l)),d=parseFloat(Math.pow(10,l).toFixed(11))):(l=r.getCoercedValue(l),d=l),s=r.valueToPx(l)+n;const u=s-n;i._movedThumb.style[o]=u-i._measurements.halfThumbSize+"px",i._valuesHandler.updateFillSizeAndPosition(u,o,d,!0,a),Smart.Utilities.Core.isMobile&&e.originalEvent&&(e.originalEvent.stopPropagation(),e.originalEvent.preventDefault())}_moveThumbBasedOnValue(e,t,a,i){const r=this,n=r._numericProcessor.valueToPx(t),o=r._settings.margin;e.style[o]=n-r._measurements.halfThumbSize+"px";const s=r._getSingleActualValue(t);i?r.rangeSlider&&(r._firstPassSize=n):r._valuesHandler.updateFillSizeAndPosition(n,o,s,a,a)}_validate(e,t,a,i){this._valuesHandler.validate(e,t,i)}_updateValue(e){const t=this._valuesHandler;t.updateValue(t.getActualValue(e))}_makeThumbAccessible(){const e=this;e.rangeSlider&&(e.$.thumb[e._settings.offset]===e.$.secondThumb[e._settings.offset]&&!1===e._numericProcessor.compare(e.values[1],e.max)?e.$thumb.addClass("accessible"):e.$thumb.removeClass("accessible"))}_getSingleActualValue(e){return this.logarithmicScale?parseFloat(Math.pow(10,e).toFixed(11)):e.toString()}_coerceCustomInterval(){const e=this;if(e.coerce){const t=e._valueBeforeCoercion;e._valuesHandler.validate(!1,e._valuesHandler.getValue()),e._valueBeforeCoercion=t}}_wheelHandler(e){const t=this;document.activeElement===t&&t.enableMouseWheelAction&&(e.stopPropagation(),e.preventDefault(),e.wheelDelta>0?t._keydownHandlerSlider({key:"ArrowRight",which:39,preventDefault:function(){}}):t._keydownHandlerSlider({key:"ArrowLeft",which:37,preventDefault:function(){}}))}_handleDateScale(){const e=this,t=Smart.Utilities.DateTime;super._handleDateScale(),Object.defineProperty(e,"values",{get:function(){return e.context===e?e.properties.values.value:e._valueDate},set(t){function a(e,t){return t instanceof Smart.Utilities.BigNumber?t.toString():t}const i=e.properties.values.value;if(JSON.stringify(i,a)!==JSON.stringify(t,a)&&(e.properties.values.value=t,e.isReady&&(!e.ownerElement||e.ownerElement&&e.ownerElement.isReady)&&e.context!==e)){const a=e.context;e.context=e,e.propertyChangedHandler("values",i,t),e.context=a}}}),e.rangeSlider&&(e._valueDate=[t.validateDate(e.values[0]),t.validateDate(e.values[1])],e.values=[e._valueDate[0].getTimeStamp(),e._valueDate[1].getTimeStamp()]),e._properties.values.serialize="_serializeValue"}_setTicksAndInterval(){const e=this;e._skipTrackReset?delete e._skipTrackReset:e.$.track.style[e._settings.dimension]=null,super._setTicksAndInterval(),e.$.track[e._settings.size]<10&&(e._skipTrackReset=!0,e.$.track.style[e._settings.dimension]=e.getOptimalSize()[e._settings.dimension]+"px",e._getMeasurements(),e._setTicksAndInterval(),e._valuesHandler.validate(!1,e._valuesHandler.getValue()))}_getLayoutType(){const e=this;super._getLayoutType(),e._normalLayout?(e.$.leftButton.setAttribute("aria-label","Decrement"),e.$.rightButton.setAttribute("aria-label","Increment")):(e.$.leftButton.setAttribute("aria-label","Increment"),e.$.rightButton.setAttribute("aria-label","Decrement"))}_setAriaValue(e){this._valuesHandler.setAriaValue(e)}}),Smart.Utilities.Assign("SliderSingleValueHandler",class{constructor(e){this.context=e,"date"===e.mode&&(e._getEventValue=function(t,a){let i;return i=void 0!==a?Smart.Utilities.DateTime.fromFullTimeStamp(a):e._valueDate.clone(),t?(e.$.thumb.setAttribute("aria-valuetext",i.toString("f")),e.value.toString()):i})}applyFunctionToValue(e,t){const a=this.context;return void 0===t&&(t=a.value),e.apply(a,[t])}areDifferent(e){return this.context.value!==e}incrementOrDecrement(e){const t=this.context._keyIncrementDecrement(e);this.validate(!1,t)}setActiveThumbOnTrackClick(){const e=this.context;e._movedThumb=e.$.thumb,e._addMovedThumbClass(),e._movedTooltip=e.$tooltip}getActualValue(e){return this.context._getSingleActualValue(e)}getCoercedLogarithmicValue(e){const t=this.context;if(t.logarithmicScale){const a=t._numericProcessor.getCoercedValue(Math.log10(e));return this.getActualValue(a)}return e}getDrawValue(){return this.context._drawValue}getValue(){return this.context.value}keydownHandler(e){this.context._keydownHandler(e)}moveThumbBasedOnValue(e,t,a){const i=this.context;if(void 0===e&&(e=i.value),i._moveThumbBasedOnValue(i.$.thumb,e,t),!0!==a){i._drawValue=e;const t=this.getActualValue(e);let a;a=void 0!==i._valueNoRangeValidation?i._valueNoRangeValidation.toString():t.toString(),"date"===i.mode&&(i._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a)),i.value=a,delete i._valueBeforeCoercion,this.updateTooltipValue(t)}}restrictThumbCoordinates(e,t,a){return e=Math.max(e,t),e=Math.min(e,a)}updateFillSizeAndPosition(e,t,a,i,r){const n=this.context,o=n.$.fill.style,s=n._settings.dimension;if(n._normalLayout?o[s]=e+"px":(o[s]=n._measurements.trackLength-e+"px",o[t]=e+"px"),i){const e=n.value,t=n._getEventValue(!1,e),i=n._numericProcessor;if(i.compare(i.createDescriptor(a),i.createDescriptor(e))&&(this.updateTooltipValue(a),r)){let e;if(n._drawValue=n.logarithmicScale?Math.log10(a):a,e=void 0!==n._valueNoRangeValidation?n._valueNoRangeValidation.toString():a.toString(),"date"===n.mode&&(n._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(e)),n.value=e,delete n._valueBeforeCoercion,!0!==n._programmaticValueIsSet){const e=n._getEventValue();n.$.hiddenInput.value=e,n.$.fireEvent("change",{value:e,oldValue:t}),this.setAriaValue("valuenow")}}}}updateTooltipValue(e){const t=this.context;void 0===e&&(e=t.value);const a=t._formatLabel(e);t.$.tooltipContent.innerHTML!==a&&(t.$.tooltipContent.innerHTML=a,t.$.thumbLabel.innerHTML=a)}updateValue(e){const t=this.context,a=t._numericProcessor.createDescriptor(e,!0,!1);t._drawValue=t.logarithmicScale?Math.log10(a):a,this.moveThumbBasedOnValue(t._drawValue,!0)}validate(e,t,a){const i=this.context,r=i._numericProcessor;let n,o;i._programmaticValueIsSet=a&&"interaction"===i.validation,n=e?i.value:t,i.coerce&&(n=i._numericProcessor.createDescriptor(n,!0,!0,!0)),n=i.logarithmicScale?this.getCoercedLogarithmicValue(n):r.getCoercedValue(n),"strict"===i.validation?(i._valueNoRangeValidation=r.createDescriptor(n,!0,!0,!0),o=i._valueNoRangeValidation):(i._valueNoRangeValidation=r.createDescriptor(n,!0,!0,!1),o=r.validate(i._valueNoRangeValidation,i._minObject,i._maxObject)),e?(i._drawValue=i.logarithmicScale?Math.log10(o):o,n=i._valueNoRangeValidation.toString(),"date"===i.mode&&(i._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(n)),i.value=n,this.moveThumbBasedOnValue(i._drawValue,void 0,!0)):this.updateValue(o),delete i._valueNoRangeValidation,i._programmaticValueIsSet=!1}setAriaValue(e){const t=this.context,a=t.$.thumb;"valuenow"===e?a.setAttribute("aria-valuenow",t._getEventValue(!0)):(a.setAttribute("aria-valuemin",t.min.toString()),a.setAttribute("aria-valuemax",t.max.toString()))}}),Smart.Utilities.Assign("SliderMultipleValueHandler",class{constructor(e){this.context=e,"date"===e.mode&&(e._getEventValue=function(t,a,i){const r=[e._valueDate[0].clone(),e._valueDate[1].clone()];return void 0!==a&&(r[i]=Smart.Utilities.DateTime.fromFullTimeStamp(a)),t?(e.$.thumb.setAttribute("aria-valuetext",r[0].toString("f")),e.$.secondThumb.setAttribute("aria-valuetext",r[1].toString("f")),e.values.slice(0)):r})}applyFunctionToValue(e,t){const a=this.context,i=[];return void 0===t&&(t=a.values),i[0]=e.apply(a,[t[0]]),i[1]=e.apply(a,[t[1]]),i}areDifferent(e){const t=this.context.values;return t[0]!==e[0]||t[1]!==e[1]}incrementOrDecrement(e){const t=this.context.values.slice(0);let a;a="add"===e?1:0,t[a]=this.keyIncrementDecrement(e,a),this.validate(!1,t)}keydownHandler(e){const t=this.context;if(t.disabled||t.readonly)return;const a=e.charCode?e.charCode:e.which;if(-1!==[35,36,37,38,39,40].indexOf(a)){e.preventDefault();const i=t.values.slice(0);let r;switch(a){case 40:case 37:r=this.keyIncrementDecrement("subtract",0),i[0]=r,t._movedThumb=t.$.thumb;break;case 38:case 39:r=this.keyIncrementDecrement("add",1),i[1]=r,t._movedThumb=t.$.secondThumb;break;case 36:t._drawValues[0]=t._drawMin,i[0]=t.min,t._movedThumb=t.$.thumb;break;case 35:t._drawValues[1]=t._drawMax,i[1]=t.max,t._movedThumb=t.$.secondThumb}return this.validate(!1,i),!1}}keyIncrementDecrement(e,t){const a=this.context;let i,r;if(a.customInterval&&a.coerce)return i=this.getValue()[t],a._keyIncrementDecrement(e,i.toString());if("date"===a.mode)return i=a._valueDate[t],r=i[a._dateIncrementMethod](("add"===e?1:-1)*parseFloat(a.interval),!0),r=r.getTimeStamp(),-1===r.compare(a._drawMin)?new Smart.Utilities.BigNumber(a._drawMin):1===r.compare(a._drawMax)?new Smart.Utilities.BigNumber(a._drawMax):r;const n=a._drawValues[t];return i=a._numericProcessor.createDescriptor(n),r=a._numericProcessor.incrementDecrement(i,e,a._validInterval),a.logarithmicScale&&(a._drawValues[t]=r,r=parseFloat(Math.pow(10,Math.round(r)).toFixed(11))),r}setActiveThumbOnTrackClick(e){const t=this.context,a=t._trackStart+t._measurements.halfThumbSize,i=t._settings.offset,r=t.$.thumb,n=t.$.secondThumb,o=r[i],s=n[i],l=e[t._settings.page];let d=t._normalLayout?a+o+(s-o)/2:a+s+(o-s)/2;t._normalLayout&&l<=d||!t._normalLayout&&l>d?(t._movedThumb=r,t._staticThumb=n,t._movedTooltip=t.$tooltip,t.$secondTooltip.addClass("smart-hidden")):(t._movedThumb=n,t._staticThumb=r,t._movedTooltip=t.$secondTooltip,t.$tooltip.addClass("smart-hidden")),t._addMovedThumbClass()}getActualValue(e){return this.context.logarithmicScale?[parseFloat(Math.pow(10,e[0].toString()).toFixed(11)),parseFloat(Math.pow(10,e[1].toString()).toFixed(11))]:[e[0].toString(),e[1].toString()]}getCoercedLogarithmicValue(e){const t=this.context;if(t.logarithmicScale){const a=[];return a[0]=t._numericProcessor.getCoercedValue(Math.log10(e[0])),a[1]=t._numericProcessor.getCoercedValue(Math.log10(e[1])),this.getActualValue(a)}return e}getDrawValue(){return this.context._drawValues}getValue(){return this.context.values.slice(0)}moveThumbBasedOnValue(e,t,a){const i=this.context,r=void 0===t;if(void 0===e&&(e=i.values),i._numericProcessor.restrictValue(e),(r||1===t)&&(i._movedThumb=i.$.secondThumb,i._moveThumbBasedOnValue(i.$.secondThumb,e[1],!0,r)),(r||0===t)&&(i._movedThumb=i.$.thumb,i._moveThumbBasedOnValue(i.$.thumb,e[0],!0)),delete i._firstPassSize,!0!==a){i._drawValues=e;const t=this.getActualValue(e);let a;a=i._valuesNoRangeValidation?[i._valuesNoRangeValidation[0].toString(),i._valuesNoRangeValidation[1].toString()]:t,"date"===i.mode&&(i._valueDate=[Smart.Utilities.DateTime.fromFullTimeStamp(t[0]),Smart.Utilities.DateTime.fromFullTimeStamp(t[1])]),i.values=a,delete i._valueBeforeCoercion,this.updateTooltipValue()}}restrictThumbCoordinates(e,t,a){const i=this.context,r=t+i._staticThumb[i._settings.offset]+i._measurements.halfThumbSize;return i._movedThumb===i.$.thumb&&i._normalLayout||i._movedThumb===i.$.secondThumb&&!i._normalLayout?(e=Math.max(e,t),e=Math.min(e,a,r)):(e=Math.max(e,t,r),e=Math.min(e,a)),e}updateFillSizeAndPosition(e,t,a,i,r){const n=this.context,o=n.$.fill.style,s=n._settings.dimension,l=n._settings.offset,d=n._measurements.halfThumbSize;let u,m;if(n._movedThumb===n.$.thumb?(u=e-d,m=void 0!==n._firstPassSize?n._firstPassSize-d:n.$.secondThumb[l]):(u=void 0!==n._firstPassSize?n._firstPassSize-d:n.$.thumb[l],m=e-d),n._normalLayout?(o[s]=Math.max(0,m-u)+"px",o[t]=u+d+"px"):(o[s]=Math.max(0,u-m)+"px",o[t]=m+d+"px"),i){const e=n._numericProcessor,t=n._movedThumb===n.$.thumb?0:1,i=n.values[t],o=n._getEventValue(!1,i,t);if(e.compare(e.createDescriptor(a),e.createDescriptor(i))){const e=n.values.slice(0);if(e[t]=a.toString(),this.updateTooltipValue(a,t),r){let t;if(this.updateDrawValues(e),t=n._valuesNoRangeValidation?[n._valuesNoRangeValidation[0].toString(),n._valuesNoRangeValidation[1].toString()]:e,"date"===n.mode&&(n._valueDate=[Smart.Utilities.DateTime.fromFullTimeStamp(e[0]),Smart.Utilities.DateTime.fromFullTimeStamp(e[1])]),n.values=t,delete n._valueBeforeCoercion,!0!==n._programmaticValueIsSet){const e=n._getEventValue();n.$.hiddenInput.value=e,n.$.fireEvent("change",{value:e,oldValue:o}),this.setAriaValue("valuenow")}}}}}updateDrawValues(e){const t=this.context;t.logarithmicScale?(t._drawValues[0]=Math.log10(e[0]),t._drawValues[1]=Math.log10(e[1])):t._drawValues=e.slice(0)}updateTooltipValue(e,t){const a=this.context;if(void 0===e){const e=a.values,t=a._formatLabel(e[0]),i=a._formatLabel(e[1]);a.$.tooltipContent.innerHTML!==t&&(a.$.tooltipContent.innerHTML=t,a.$.thumbLabel.innerHTML=t),a.$.secondTooltipContent.innerHTML!==i&&(a.$.secondTooltipContent.innerHTML=i)}else{const i=a._formatLabel(e);(0===t&&a.$.tooltipContent.innerHTML!==i||void 0===t)&&(a.$.tooltipContent.innerHTML=i,a.$.thumbLabel.innerHTML=i),(1===t&&a.$.secondTooltipContent.innerHTML!==i||void 0===t)&&(a.$.secondTooltipContent.innerHTML=i,a.$.secondThumbLabel.innerHTML=i)}}updateValue(e){const t=this.context,a=[];let i;a[0]=t._numericProcessor.createDescriptor(e[0],!0,!1),a[1]=t._numericProcessor.createDescriptor(e[1],!0,!1),this.updateDrawValues(a),t._movedThumb===t.$.secondThumb&&(i=1),this.moveThumbBasedOnValue(t._drawValues.slice(0),i)}validate(e,t,a){const i=this.context,r=i._numericProcessor;let n,o=[];i._programmaticValueIsSet=a&&"interaction"===i.validation,n=e?i.values.slice(0):t,i.coerce&&(n[0]=r.createDescriptor(n[0],!0,!0,!0),n[1]=r.createDescriptor(n[1],!0,!0,!0)),i.logarithmicScale?n=this.getCoercedLogarithmicValue(n):(n[0]=r.getCoercedValue(n[0]),n[1]=r.getCoercedValue(n[1])),i._valuesNoRangeValidation=[],i._valuesNoRangeValidation[0]=r.createDescriptor(n[0],!0,!0,!1),i._valuesNoRangeValidation[1]=r.createDescriptor(n[1],!0,!0,!1),i._numericProcessor.restrictValue(i._valuesNoRangeValidation),o[0]=r.validate(i._valuesNoRangeValidation[0],i._minObject,i._maxObject),o[1]=r.validate(i._valuesNoRangeValidation[1],i._minObject,i._maxObject),e?(i._drawValues=[],this.updateDrawValues(o),n=[i._valuesNoRangeValidation[0].toString(),i._valuesNoRangeValidation[1].toString()],"date"===i.mode&&(i._valueDate=[Smart.Utilities.DateTime.fromFullTimeStamp(o[0]),Smart.Utilities.DateTime.fromFullTimeStamp(o[1])]),i.values=n,this.moveThumbBasedOnValue(i._drawValues,void 0,!0)):this.updateValue(o),delete i._valuesNoRangeValidation,i._programmaticValueIsSet=!1}setAriaValue(e){const t=this.context,a=t.$.thumb,i=t.$.secondThumb;if("valuenow"===e){const e=t._getEventValue(!0),r=e[0].toString(),n=e[1].toString();a.setAttribute("aria-valuenow",r),a.setAttribute("aria-valuemax",n),i.setAttribute("aria-valuenow",n),i.setAttribute("aria-valuemin",r)}else a.setAttribute("aria-valuemin",t.min.toString()),i.setAttribute("aria-valuemax",t.max.toString())}});