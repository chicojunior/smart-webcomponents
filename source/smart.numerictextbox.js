
/* Smart UI v9.3.53 (2021-05-10) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-numeric-text-box",class extends Smart.BaseElement{static get properties(){return{decimalSeparator:{value:".",type:"string"},dropDownAppendTo:{value:null,type:"any"},enableMouseWheelAction:{value:!1,type:"boolean"},inputFormat:{value:"integer",allowedValues:["integer","floatingPoint","complex"],type:"string"},hint:{value:"",type:"string"},label:{value:"",type:"string"},leadingZeros:{value:!1,type:"boolean"},max:{value:null,type:"any"},messages:{value:{en:{binary:"BIN",octal:"OCT",decimal:"DEC",hexadecimal:"HEX",integerOnly:"smartNumericTextBox: The property {{property}} can only be set when inputFormat is integer.",noInteger:"smartNumericTextBox: the property {{property}} cannot be set when inputFormat is integer.",significantPrecisionDigits:"smartNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time."}},type:"object",extend:!0},min:{value:null,type:"any"},name:{value:"",type:"string"},nullable:{value:!1,type:"boolean"},opened:{value:!1,type:"boolean"},outputFormatString:{value:null,type:"string?"},placeholder:{value:"",type:"string"},dropDownEnabled:{value:!1,type:"boolean"},precisionDigits:{value:null,type:"number?"},radix:{value:10,allowedValues:["2","8","10","16",2,8,10,16,"binary","octal","decimal","hexadecimal"],type:"any"},radixDisplay:{value:!1,type:"boolean"},radixDisplayPosition:{value:"left",allowedValues:["left","right"],type:"string"},scientificNotation:{value:!1,type:"boolean"},showDropDownValues:{value:!1,type:"boolean"},showUnit:{value:!1,type:"boolean"},significantDigits:{value:null,type:"number?"},spinButtons:{value:!1,type:"boolean"},spinButtonsDelay:{value:75,type:"number"},spinButtonsInitialDelay:{value:0,type:"number"},spinButtonsPosition:{value:"right",allowedValues:["left","right"],type:"string"},spinButtonsStep:{value:"1",type:"any"},type:{value:"numeric",type:"string",defaultReflectToAttribute:!0,readonly:!0},unit:{value:"kg",type:"string"},validation:{value:"strict",allowedValues:["strict","interaction"],type:"string"},value:{value:"0",type:"any?"},wordLength:{value:"int32",allowedValues:["int8","uint8","int16","uint16","int32","uint32","int64","uint64"],type:"string"}}}static get listeners(){return{mouseenter:"_mouseenterMouseleaveHandler",mouseleave:"_mouseenterMouseleaveHandler",resize:"_resizeHandler","downButton.click":"_downButtonClickHandler","downButton.mouseenter":"_mouseenterMouseleaveHandler","downButton.mouseleave":"_mouseenterMouseleaveHandler","dropDown.click":"_dropDownItemClickHandler","dropDown.mouseout":"_mouseenterMouseleaveHandler","dropDown.mouseover":"_mouseenterMouseleaveHandler","input.blur":"_inputBlurHandler","input.change":"_inputChangeHandler","input.focus":"_inputFocusHandler","input.keydown":"_inputKeydownHandler","input.keyup":"_inputKeyupHandler","input.paste":"_inputPasteHandler","input.wheel":"_inputWheelHandler","radixDisplayButton.click":"_radixDisplayButtonClickHandler","radixDisplayButton.mouseenter":"_mouseenterMouseleaveHandler","radixDisplayButton.mouseleave":"_mouseenterMouseleaveHandler","upButton.click":"_upButtonClickHandler","upButton.mouseenter":"_mouseenterMouseleaveHandler","upButton.mouseleave":"_mouseenterMouseleaveHandler","document.down":"_documentMousedownHandler","document.up":"_documentMouseupHandler"}}static get requires(){return window.NIComplex?{"Smart.Button":"smart.button.js","Smart.Utilities.BigNumber":"smart.math.js","Smart.Utilities.NumericProcessor":"smart.numeric.js"}:{"Smart.Button":"smart.button.js","Smart.Utilities.Complex":"smart.complex.js","Smart.Utilities.BigNumber":"smart.math.js","Smart.Utilities.NumericProcessor":"smart.numeric.js"}}static get styleUrls(){return["smart.button.css","smart.numerictextbox.css"]}template(){return'<div id="container" class="smart-container" role="presentation">\n                <span id="label" inner-h-t-m-l="[[label]]" class="smart-label"></span>\n                <div id="radixDisplayButton" class="smart-unselectable smart-input-addon smart-drop-down-button smart-numeric-text-box-component smart-numeric-text-box-radix-display" role="button" aria-haspopup="listbox"></div>\n                <input id="input" type="text" spellcheck="false" class="smart-input smart-numeric-text-box-component" placeholder="[[placeholder]]" readonly="[[readonly]]" disabled="[[disabled]]" name="[[name]]" aria-label="[[placeholder]]" />\n                <div id="unitDisplay" class="smart-unselectable smart-input-addon smart-drop-down-button smart-numeric-text-box-component smart-numeric-text-box-unit-display" role="presentation"></div>\n                <div id="spinButtonsContainer" class="smart-input-addon smart-numeric-text-box-component smart-spin-buttons-container" role="presentation">\n                    <smart-repeat-button initial-delay="[[spinButtonsInitialDelay]]" delay="[[spinButtonsDelay]]" animation="[[animation]]" unfocusable id="upButton" class="smart-spin-button" aria-label="Increment" right-to-left="[[rightToLeft]]">\n                        <div class="smart-arrow smart-arrow-up" role="presentation" aria-hidden="true"></div>\n                    </smart-repeat-button>\n                    <smart-repeat-button initial-delay="[[spinButtonsInitialDelay]]" delay="[[spinButtonsDelay]]" animation="[[animation]]" unfocusable id="downButton" class="smart-spin-button" aria-label="Decrement" right-to-left="[[rightToLeft]]">\n                        <div class="smart-arrow smart-arrow-down" role="presentation" aria-hidden="true"></div>\n                    </smart-repeat-button>\n                </div>\n                <ul id="dropDown" class="smart-visibility-hidden smart-drop-down smart-numeric-text-box-drop-down" role="listbox">\n                    <li id="dropDownItem2" class="smart-list-item" data-value="2" role="option"></li>\n                    <li id="dropDownItem8" class="smart-list-item" data-value="8" role="option"></li>\n                    <li id="dropDownItem10" class="smart-list-item" data-value="10" role="option"></li>\n                    <li id="dropDownItem16" class="smart-list-item" data-value="16" role="option"></li>\n                </ul>\n                <span id="hint" class="smart-hint smart-hidden" inner-h-t-m-l="[[hint]]"></span>\n            </div>'}attached(){const e=this;super.attached(),e.isCompleted&&(e._positionDetection.dropDownAttached(),e._positionDetection.checkBrowserBounds())}detached(){const e=this;super.detached(),e.opened&&e._closeRadix(!0),e._positionDetection&&e._positionDetection.dropDownDetached()}ready(){super.ready()}render(){const e=this;e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"inputFormat"),e._numberRenderer=new Smart.Utilities.NumberRenderer,e._numberRenderer.localizationObject.decimalseparator=e.decimalSeparator,e._positionDetection=new Smart.Utilities.PositionDetection(e,e.$.dropDown,e.$.container,"_closeRadix"),e._positionDetection.getDropDownParent(!0),e._dropDownListPosition="bottom",e.rightToLeft&&(e.spinButtonsPosition="right"===e.spinButtonsPosition?"left":"right"),e._setIds(),e.setAttribute("aria-describedby",e.$.unitDisplay.id+" "+e.$.hint.id),e.getAttribute("aria-labelledby")||e.setAttribute("aria-labelledby",e.$.label.id),e.$.radixDisplayButton.setAttribute("aria-owns",e.$.dropDown.id),e.rightToLeft&&null!==e.dropDownAppendTo&&e.$.dropDown.setAttribute("right-to-left",""),e._radixPrefixes={10:"d",2:"b",8:"o",16:"x"},e._regex={2:new RegExp(/^[0-1]+$/),8:new RegExp(/^[0-7]+$/),10:new RegExp(/^[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?$/),16:new RegExp(/^[0-9a-f]+$/i)},e._regexSpecial={nan:new RegExp(/^(nan)$/i),inf:new RegExp(/^((-?inf(inity)?)|([+\-]?∞))$/i),nonNumericValue:new RegExp(/^$|(^((nan)|((-?inf(inity)?)|([+\-]?∞))|(null))$)/i),exaValue:new RegExp(/^[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[E])([+\-]\d*)?i$/)},e._initialDropDownOptionsSet=!1,"left"===e.spinButtonsPosition&&e.$.container.insertBefore(e.$.spinButtonsContainer,e.$.label.nextElementSibling),"right"===e.radixDisplayPosition&&e.$.container.insertBefore(e.$.radixDisplayButton,e.$.unitDisplay.nextElementSibling),e._setInitialComponentDisplay(),e._initialAdjustments(),e._refreshShape(),e._initialized=!0,super.render()}_setIds(){const e=this;e.$.label.id||(e.$.label.id=e.id+"Label"),e.$.radixDisplayButton.id||(e.$.radixDisplayButton.id=e.id+"RadixDisplayButton"),e.$.unitDisplay.id||(e.$.unitDisplay.id=e.id+"UnitDisplay"),e.$.dropDown.id||(e.$.dropDown.id=e.id+"DropDown"),e.$.hint.id||(e.$.hint.id=e.id+"Hint")}_refreshShape(){const e=this.$.container.querySelectorAll(".smart-numeric-text-box-component:not(.smart-hidden)");Array.from(this.$.container.getElementsByClassName("smart-numeric-text-box-component")).forEach((e=>e.classList.remove("smart-numeric-text-box-component-border-left","smart-numeric-text-box-component-border-right"))),e.length>0&&(e[0].classList.add("smart-numeric-text-box-component-border-left"),e[e.length-1].classList.add("smart-numeric-text-box-component-border-right"))}val(e,t){const n=this,i=null!==e&&"object"==typeof e&&0===Object.keys(e).length;if(void 0===e||!1!==i)return n.value;{const i=n.value;if((""===e||null===e)&&null===i)return null;if(null===e)return n._triggerChangeEvent="strict"===n.validation,n._validate(!1,null),n._triggerChangeEvent=!1,void(n._programmaticValueIsSet=!0);if((e=e.toString()).toUpperCase()===i.toString().toUpperCase())return e;void 0===t?(n._triggerChangeEvent="strict"===n.validation,n._validate(!1,e),n._triggerChangeEvent=!1):n._setValue(e),n._programmaticValueIsSet=!0}}focus(){this.$.input.focus()}_updateSpinButtonsStepObject(){const e=this;e._spinButtonsStepObject=e._numericProcessor.createDescriptor(e.spinButtonsStep,!0)}_setInitialComponentDisplay(){const e=this;!1===e.spinButtons&&e.$spinButtonsContainer.addClass("smart-hidden"),!1===e.radixDisplay&&e.$radixDisplayButton.addClass("smart-hidden"),!1===e.showUnit&&e.$unitDisplay.addClass("smart-hidden")}_initialAdjustments(){const e=this;e._radixNumber=e._getRadix(e.radix),e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength),e._validatePropertyCompatibility(),e._numericProcessor.validateMinMax(!0,!0),e._updateSpinButtonsStepObject(),e._validate(!0),e._programmaticValueIsSet=!0,e._cachedInputValue=e.$.input.value,void 0===e._editableValue&&(e._editableValue=e._cachedInputValue),e.$.radixDisplayButton.innerHTML=e._radixPrefixes[e._radixNumber],e.$.unitDisplay.innerHTML=e.unit,e.disabled&&(e.$.upButton.disabled=!0,e.$.downButton.disabled=!0),e.opened&&(e.dropDownEnabled&&!e.disabled&&null!==e.value?e._openRadix():e.opened=!1),e.$.radixDisplayButton.setAttribute("aria-expanded",e.opened),e._setFocusable()}_validatePropertyCompatibility(){const e=this;"integer"!==e.inputFormat?(10!==e._radixNumber&&e.error(e.localize("integerOnly",{property:"radix"})),e.radixDisplay&&e.error(e.localize("integerOnly",{property:"radixDisplay"})),e.dropDownEnabled&&e.error(e.localize("integerOnly",{property:"dropDownEnabled"})),"int32"!==e.wordLength&&e.error(e.localize("integerOnly",{property:"wordLength"}))):null!==e.precisionDigits&&e.error(e.localize("noInteger",{property:"precisionDigits"})),null===e.significantDigits&&null===e.precisionDigits?e.significantDigits=8:null!==e.significantDigits&&null!==e.precisionDigits&&e.error(e.localize("significantPrecisionDigits"))}_validate(e,t){const n=this;let i;if(e)i=n.value,void 0===i&&(i=n.nullable?null:"0");else if(void 0===t||null===t&&!n.nullable){if(i=n.$.input.value,i===n.value&&!0!==n._programmaticValueIsSet)return void(n.$.input.value=n._cachedInputValue)}else i=t;if(n.nullable&&(null===i||""===i))return n.value=null,n._number=null,n.$.input.value="",n._cachedInputValue="",n._editableValue="",void n._disableComponents();const a=n._numericProcessor.prepareForValidation(e,t,i);if(void 0===a)return void n._disableComponents();const r=n._numericProcessor.createDescriptor(a.value,!0,!0,!e&&void 0===t||"strict"===n.validation,e||void 0!==t,a.enteredComplexNumber);if(e){n._number=r;let e=n._renderValue(r);n.value=r.toString(),n.$.input.value=e}else n._updateValue(r);n._programmaticValueIsSet=!1,n._disableComponents()}_handleNonNumericValue(e,t,n){const i=this;if("integer"!==i.inputFormat){if(i._regexSpecial.nan.test(n))return void i._handleNaN(e);if(i._regexSpecial.inf.test(n))return void i._handleInfinity(e,t,n)}if(e){let e=i._numericProcessor.createDescriptor(0);i._number=i._validateRange(e);const t=i._renderValue(i._number);i.value=i._number.toString(),i.$.input.value=t}else if(void 0===t)i.$.input.value=i._cachedInputValue;else{const e=i._number.toString();i.value!==e&&(i.value=e)}}_handleNaN(e){const t=this;if(t.$.input.value="NaN",e)t.value=NaN,t._number=NaN;else{const e=t.value;null!==e&&"NaN"===e.toString()||(t.value=NaN,t._number=NaN,t._cachedInputValue="NaN",t._editableValue="NaN",t._triggerChangeEvent&&t.$.fireEvent("change",{value:NaN,oldValue:e,radix:t._radixNumber}))}}_handleInfinity(e,t,n){const i=this;let a,r;if("-"===n.charAt(0)?(a="∞"===n.charAt(1)?"-∞":"-Inf",r=-1/0):(a=-1!==n.indexOf("∞")?"∞":"Inf",r=1/0),r===-1/0&&i.min===-1/0||r===1/0&&i.max===1/0||void 0!==t)if(e)i.value=r,i._number=r,i.$.input.value=a;else{const e=i.value;n!==a&&(i.$.input.value=a),e!==r&&(i.value=r,i._number=r,i._cachedInputValue=a,i._editableValue=a,i._triggerChangeEvent&&i.$.fireEvent("change",{value:r,oldValue:e,radix:i._radixNumber}))}else r===-1/0?i._validate(!1,i.min):i._validate(!1,i.max)}_validateRange(e){const t=this;return e=t._numericProcessor.validate(e,t._minObject,t._maxObject)}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const i=this,a=i.$.input;function r(){!0===i._initialDropDownOptionsSet&&i._setDropDownOptions(!0),2!==i._radixNumber&&16!==i._radixNumber||(i._cachedInputValue=i._number.toString(i._radixNumber,i._wordLengthNumber,i.leadingZeros),i._editableValue=i._cachedInputValue,i.$.input.value=i._cachedInputValue)}if(n!=t)switch(e){case"disabled":i._setFocusable(),!0===n?(i.$.upButton.disabled=!0,i.$.downButton.disabled=!0):i._disableComponents();break;case"dropDownAppendTo":i._positionDetection.dropDownAppendToChangedHandler(),i.$.dropDown.removeAttribute("right-to-left"),i.rightToLeft&&null!==n&&i.$.dropDown.setAttribute("right-to-left","");break;case"unfocusable":i._setFocusable();break;case"enableMouseWheelAction":case"placeholder":case"readonly":case"spinButtonsDelay":case"spinButtonsInitialDelay":break;case"value":{if(""===n&&null===t)return;if(null===n||""===n||null===t)return i.value=t,i._triggerChangeEvent="strict"===i.validation,i._validate(!1,n),i._triggerChangeEvent=!1,void(i._programmaticValueIsSet=!0);const e=n.toString(),a=t.toString();a!==e&&(a.toUpperCase()===e.toUpperCase()&&(i.value=t),i._triggerChangeEvent="strict"===i.validation,i._validate(!1,e),i._triggerChangeEvent=!1,i._programmaticValueIsSet=!0);break}case"radix":"integer"===i.inputFormat?i._changeRadix(n):i.error(i.localize("integerOnly",{property:"radix"}));break;case"rightToLeft":null!==i.dropDownAppendTo&&(n?i.$.dropDown.setAttribute("right-to-left",""):i.$.dropDown.removeAttribute("right-to-left")),i.spinButtonsPosition=i.rightToLeft?"left":"right","left"===i.spinButtonsPosition?i.$.container.insertBefore(i.$.spinButtonsContainer,i.$.label.nextElementSibling):i.$.container.insertBefore(i.$.spinButtonsContainer,i.$.dropDown),i._refreshShape();break;case"leadingZeros":"integer"===i.inputFormat&&null!==i._number&&r();break;case"min":case"max":if(null!==n&&(i[`_${e}IsNull`]=!1),i._numericProcessor.validateMinMax("min"===e,"max"===e),"strict"===i.validation)i._triggerChangeEvent=!0,i._validate(!1,i.value),i._triggerChangeEvent=!1;else if(!1===i._regexSpecial.nonNumericValue.test(i.value)){const e=i._numericProcessor.createDescriptor(i._number),t=i._validateRange(e);!0===i._numericProcessor.compare(i.value,t)&&(i._programmaticValueIsSet=!0)}break;case"opened":n?i.dropDownEnabled&&!i.disabled&&null!==i.value?i._openRadix():(i.opened=!1,i.$.radixDisplayButton.setAttribute("aria-expanded",!1)):i._closeRadix(!1,!0);break;case"outputFormatString":n?(i._cachedInputValue=i._numberRenderer.formatNumber(i._number,n),i.$.input.value=i._cachedInputValue):(i._cachedInputValue=i._editableValue,i.$.input.value=i._editableValue);break;case"dropDownEnabled":n?("integer"!==i.inputFormat&&i.error(i.localize("integerOnly",{property:"dropDownEnabled"})),!0===i._initialDropDownOptionsSet&&i._setDropDownOptions(!0)):i.opened&&i._closeRadix(!0);break;case"spinButtons":n?i.$spinButtonsContainer.removeClass("smart-hidden"):i.$spinButtonsContainer.addClass("smart-hidden"),i._refreshShape();break;case"spinButtonsStep":i._updateSpinButtonsStepObject();break;case"significantDigits":case"precisionDigits":if("precisionDigits"===e&&"integer"===i.inputFormat&&i.error(i.localize("noInteger",{property:e})),"significantDigits"===e&&null!==i.precisionDigits?i.precisionDigits=null:"precisionDigits"===e&&null!==i.significantDigits&&(i.significantDigits=null),!1===i._regexSpecial.nonNumericValue.test(i.value)){const e=i._renderValue(i._number);a.value=e}break;case"decimalSeparator":{i._numberRenderer.localizationObject.decimalseparator=i.decimalSeparator;const e=i._discardDecimalSeparator(a.value,t),n=i._applyDecimalSeparator(e),r=i._applyDecimalSeparator(i._discardDecimalSeparator(i._editableValue,t));a.value=n,i._editableValue=r;break}case"spinButtonsPosition":"left"===n?i.$.container.insertBefore(i.$.spinButtonsContainer,i.$.label.nextElementSibling):i.$.container.insertBefore(i.$.spinButtonsContainer,i.$.dropDown),i._refreshShape();break;case"wordLength":if(i._wordLengthNumber=i._numericProcessor.getWordLength(n),"integer"===i.inputFormat&&(i._numericProcessor.validateMinMax(!0,!0),null!==i._number)){let e=i._validateRange(new Smart.Utilities.BigNumber(i._number));i._updateValue(e),i.leadingZeros&&r()}break;case"radixDisplay":n?("integer"!==i.inputFormat&&i.error(i.localize("integerOnly",{property:"radixDisplay"})),i.$radixDisplayButton.removeClass("smart-hidden")):i.$radixDisplayButton.addClass("smart-hidden"),i._refreshShape();break;case"radixDisplayPosition":"left"===n?i.$.container.insertBefore(i.$.radixDisplayButton,i.$.input):i.$.container.insertBefore(i.$.radixDisplayButton,i.$.unitDisplay.nextElementSibling),i._refreshShape();break;case"inputFormat":i._changeInputFormat(t,n);break;case"showUnit":n?i.$unitDisplay.removeClass("smart-hidden"):i.$unitDisplay.addClass("smart-hidden"),i._refreshShape();break;case"unit":i.$.unitDisplay.innerHTML=n;break;case"scientificNotation":if(!1===i._regexSpecial.nonNumericValue.test(i.value)){const e=i._renderValue(i._number);a.value=e}break;case"locale":case"messages":case"showDropDownValues":i.opened?i._setDropDownOptions():i._initialDropDownOptionsSet=!1;break;case"nullable":!0===t&&null===i.value&&i._validate(!1,"0");break;case"validation":"strict"===n&&(i._triggerChangeEvent=!0,i._validate(!1,i.value),i._triggerChangeEvent=!1)}else"string"!=typeof n&&"string"==typeof t&&(i[e]=t);i._cachedInputValue=a.value}_changeInputFormat(e,t){const n=this;n._numericProcessor=new Smart.Utilities.NumericProcessor(n,"inputFormat"),"complex"!==e?("integer"===t&&"floatingPoint"===e&&n._changeFromFloatingPointToIntegerInputFormat(),"floatingPoint"===t&&"integer"===e&&n._changeFromIntegerToFloatingPointInputFormat(),"complex"===t&&n._changeToComplexInputFormat(e),n._updateSpinButtonsStepObject(),null!==n.value&&(n._inputFormatChangedFlag=!0,n._validate(void 0,n._number.toString()),n._inputFormatChangedFlag=!1)):n._changeFromComplexInputFormat(t)}_changeFromComplexInputFormat(e){const t=this;if(t.spinButtonsStep=t._spinButtonsStepObject.realPart,t._updateSpinButtonsStepObject(),"integer"===e?(t.min===-1/0?t.min=null:t.min=t._minObject.realPart,t.max===1/0?t.max=null:t.max=t._maxObject.realPart):(t.min!==-1/0&&(t.min=t._minObject.realPart),t.max!==1/0&&(t.max=t._maxObject.realPart)),t._numericProcessor.validateMinMax(!0,!0),null!==t.value){const e=t._number;t._inputFormatChangedFlag=!0,t._validate(void 0,(void 0!==e.realPart?e.realPart:e).toString()),t._inputFormatChangedFlag=!1}}_changeFromFloatingPointToIntegerInputFormat(){const e=this;e.min===-1/0&&(e.min=null),e.max===1/0&&(e.max=null),e._numericProcessor.validateMinMax(!0,!0)}_changeFromIntegerToFloatingPointInputFormat(){const e=this;e.radixDisplay&&(e.radixDisplay=!1,e.$radixDisplayButton.addClass("smart-hidden")),10!==e._radixNumber&&(e.radix=10,e._radixNumber=10),e._minIsNull?(e.min=-1/0,e._minObject=-1/0):e._minObject=parseFloat(e._minObject.toString()),e._maxIsNull?(e.max=1/0,e._maxObject=1/0):e._maxObject=parseFloat(e._maxObject.toString()),e.dropDownEnabled&&(e.dropDownEnabled=!1)}_changeToComplexInputFormat(e){const t=this;"integer"===e&&(t.radixDisplay&&(t.radixDisplay=!1,t.$radixDisplayButton.addClass("smart-hidden")),t._minIsNull&&(t.min=null),t._maxIsNull&&(t.max=null),t.dropDownEnabled&&(t.dropDownEnabled=!1)),t._numericProcessor.validateMinMax(t.min!==-1/0,t.max!==1/0)}_updateValue(e){const t=this,n=t.$.input.value,i=e.toString(t._radixNumber,t._wordLengthNumber,t.leadingZeros),a=t._renderValue(e),r=t.value,o=t._regexSpecial.nonNumericValue.test(i);if(n===i&&n===t._cachedInputValue||(t.$.input.value=a,t._cachedInputValue=a),t._inputFormatChangedFlag||o&&a!==r||!1===o&&t._numericProcessor.compare(e,t._number)){t._number=t._numericProcessor.createDescriptor(e);const n=t._number.toString();t.value=n,t._setDropDownOptions(!0),t._triggerChangeEvent&&t.$.fireEvent("change",{value:n,oldValue:r,radix:t._radixNumber})}else t.value=t._number.toString()}_setValue(e){const t=this;t.value=e,t.$.input.value=e,t._number=t._numericProcessor.createDescriptor(e,!0),t._setDropDownOptions(!0)}_changeRadix(e){const t=this,n=t._getRadix(e),i=t.radix;if(n===t._radixNumber)return;t.radix=e,t._radixNumber=n;const a=t.$.input,r=a.value;let o,l;null!==t.value?(o=t._number.toString(n,t._wordLengthNumber,t.leadingZeros),l=t._renderValue(o)):l="",a.value=l,t._cachedInputValue=l,t.$.radixDisplayButton.innerHTML=t._radixPrefixes[n],t.$.fireEvent("radixChange",{radix:e,oldRadix:i,displayedValue:l,oldDisplayedValue:r})}_openRadix(){const e=this;if(e.$.fireEvent("opening").defaultPrevented)return void(e.opened=!1);!1===e._initialDropDownOptionsSet&&(e._setDropDownOptions(),e._initialDropDownOptionsSet=!0),null!==e._dropDownParent&&(e.$.dropDown.style.width=e.offsetWidth+"px"),e.$radixDisplayButton.addClass("smart-numeric-text-box-pressed-component"),e.$dropDown.removeClass("smart-visibility-hidden"),e.$.dropDown.style.marginTop=null,e.opened=!0,e._positionDetection.positionDropDown();const t=(1===window.devicePixelRatio?document.documentElement.clientHeight:window.innerHeight)-e.$.dropDown.getBoundingClientRect().top-e.$.dropDown.offsetHeight-parseFloat(getComputedStyle(e.$.dropDown).marginBottom);t<0&&(e.$.dropDown.style.marginTop=t+"px"),e.$.fireEvent("open",{dropDown:e.$.dropDown}),e.$.radixDisplayButton.setAttribute("aria-expanded",!0)}_closeRadix(e,t){const n=this;(n.opened||t)&&(!n.$.fireEvent("closing").defaultPrevented||e?(n.$radixDisplayButton.removeClass("smart-numeric-text-box-pressed-component"),n.$dropDown.addClass("smart-visibility-hidden"),n.opened=!1,n.$.fireEvent("close",{dropDown:n.$.dropDown}),n.$.radixDisplayButton.setAttribute("aria-expanded",!1)):n.opened=!0)}_isLeftButtonPressed(e){const t=0===e.buttons||1===e.which;return 1===e.detail.buttons||t}_isIncrementOrDecrementAllowed(){const e=this;return!e.disabled&&!e.readonly&&!1===e._regexSpecial.nonNumericValue.test(e.$.input.value)}_upButtonClickHandler(e){const t=this;t._isLeftButtonPressed(e)&&t._isIncrementOrDecrementAllowed()&&(t._up||t.$upButton.addClass("smart-numeric-text-box-pressed-component"),t._incrementOrDecrement("add"))}_downButtonClickHandler(e){const t=this;t._isLeftButtonPressed(e)&&t._isIncrementOrDecrementAllowed()&&(t._up||t.$downButton.addClass("smart-numeric-text-box-pressed-component"),t._incrementOrDecrement("subtract"))}_documentMousedownHandler(e){const t=this;if(t._up=!1,!t.opened)return;let n=e.originalEvent.target;(t.shadowRoot||t.isInShadowDOM)&&(n=e.originalEvent.composedPath()[0]),(t.shadowRoot||t).contains(n)||t.$.dropDown.contains(n)||t._closeRadix()}_documentMouseupHandler(){const e=this;e._up=!0,e.$upButton.removeClass("smart-numeric-text-box-pressed-component"),e.$downButton.removeClass("smart-numeric-text-box-pressed-component")}_radixDisplayButtonClickHandler(){const e=this;e.dropDownEnabled&&!e.disabled&&null!==e.value&&(e.opened?e._closeRadix():e._openRadix())}_dropDownItemClickHandler(e){if(e.target.$.hasClass("smart-list-item")){const t=this;let n=e.target.getAttribute("data-value");t._changeRadix(parseInt(n,10)),t._closeRadix()}}_mouseenterMouseleaveHandler(e){const t=this;e.target===t.$.dropDown||t.disabled||t.readonly||("mouseenter"===e.type?e.target.setAttribute("hover",""):e.target.removeAttribute("hover"))}_inputKeydownHandler(e){const t=this,n=e.charCode?e.charCode:e.which;40===n&&t._isIncrementOrDecrementAllowed()?t._incrementOrDecrement("subtract"):38===n&&t._isIncrementOrDecrementAllowed()&&t._incrementOrDecrement("add"),t._keydownInfo={value:t.$.input.value,specialKey:e.altKey||e.ctrlKey||e.shiftKey}}_inputKeyupHandler(e){const t=this;if(13===e.keyCode)t._suppressBlurEvent=!0,t.$.input.value!==t._cachedInputValue&&(t._triggerChangeEvent=!0,t._validate(),t._triggerChangeEvent=!1,t.$.input.blur());else if(27===e.keyCode)t.$.input.value=t._editableValue;else{const n=t.$.input.value;""!==n&&t._regex[t._radixNumber].test(n)?(t.$.upButton.disabled=!1,t.$.downButton.disabled=!1):""===n&&(t.$.upButton.disabled=!0,t.$.downButton.disabled=!0),!t._keydownInfo||t._keydownInfo.value===n||t._keydownInfo.specialKey||e.altKey||e.ctrlKey||e.shiftKey||"Control"===e.key||t.$.fireEvent("changing",{currentValue:n,validValue:t.value,radix:t._radixNumber})}e.preventDefault()}_inputBlurHandler(){const e=this;!0===e._suppressBlurEvent?(e._suppressBlurEvent=!1,e._formattedValue&&(e._cachedInputValue=e._formattedValue,e.$.input.value=e._formattedValue,delete e._formattedValue)):e.$.input.value!==e._editableValue?(e._triggerChangeEvent=!0,e._validate(),e._triggerChangeEvent=!1):e.$.input.value=e._cachedInputValue,e.radixDisplay&&e.$.radixDisplayButton.removeAttribute("focus"),e.opened&&e._closeRadix(),e.spinButtons&&e.$.spinButtonsContainer.removeAttribute("focus"),e.showUnit&&e.$.unitDisplay.removeAttribute("focus"),e.removeAttribute("focus"),e.$.fireEvent("blur")}_inputFocusHandler(){const e=this;e.spinButtons&&e.$.spinButtonsContainer.setAttribute("focus",""),e.radixDisplay&&e.$.radixDisplayButton.setAttribute("focus",""),e.showUnit&&e.$.unitDisplay.setAttribute("focus",""),e.opened&&e._closeRadix(),e.setAttribute("focus",""),e.outputFormatString&&(e.$.input.value=e._editableValue),e.$.fireEvent("focus")}_inputChangeHandler(e){e.stopPropagation(),e.preventDefault()}_inputPasteHandler(){const e=this;requestAnimationFrame((()=>e.$.fireEvent("changing",{currentValue:e.$.input.value,validValue:e.value,radix:e._radixNumber})))}_inputWheelHandler(e){const t=this,n=t.shadowRoot&&t.shadowRoot.activeElement||document.activeElement;t.$.input===n&&t.enableMouseWheelAction&&t._isIncrementOrDecrementAllowed()&&(e.stopPropagation(),e.preventDefault(),e.wheelDelta>0?t._incrementOrDecrement("add"):t._incrementOrDecrement("subtract"))}_getRadix(e){switch(e.toString()){case"10":case"decimal":return 10;case"2":case"binary":return 2;case"8":case"octal":return 8;case"16":case"hexadecimal":return 16}}_setDropDownOptions(e){const t=this;if(!1===t.dropDownEnabled||null===t._number)return;if(!t.showDropDownValues){if(e)return;return t.$.dropDownItem2.innerHTML=t.localize("binary"),t.$.dropDownItem8.innerHTML=t.localize("octal"),t.$.dropDownItem10.innerHTML=t.localize("decimal"),void(t.$.dropDownItem16.innerHTML=t.localize("hexadecimal"))}const n=t._wordLengthNumber,i=t.leadingZeros;t.$.dropDownItem2.innerHTML=`${t._number.toString(2,n,i)} (${t.localize("binary")})`,t.$.dropDownItem8.innerHTML=`${t._number.toString(8,n)} (${t.localize("octal")})`,t.$.dropDownItem10.innerHTML=`${t._renderValue(t._number.toString(10,n),!0)} (${t.localize("decimal")})`,t.$.dropDownItem16.innerHTML=`${t._number.toString(16,n,i)} (${t.localize("hexadecimal")})`}_incrementOrDecrement(e){const t=this,n=t.shadowRoot&&t.shadowRoot.activeElement||document.activeElement;let i=t._cachedInputValue;if(t.$.input===n&&(i=t._editableValue,t._suppressBlurEvent=!0),(t.$.input.value!==i||t._programmaticValueIsSet&&"interaction"===t.validation)&&(t._triggerChangeEvent=!0,t._validate(),t._triggerChangeEvent=!1,!1===t._isIncrementOrDecrementAllowed()))return;const a=t._numericProcessor.incrementDecrement(t._number,e,t._spinButtonsStepObject),r=t._validateRange(a);t._triggerChangeEvent=!0,t._updateValue(r),t._triggerChangeEvent=!1}_toBigNumberDecimal(e,t){const n=this;let i;return 10===t?i=new Smart.Utilities.BigNumber(e):n._unsigned||!1===n._isNegative(e,t)?n._wordLengthNumber<64?(i=parseInt(e,t),i=new Smart.Utilities.BigNumber(i)):i=n._getBigNumberFrom64BitBinOctHex(e,t):(i=n._getNegativeDecimal(e,t),i=new Smart.Utilities.BigNumber(i)),i}_isNegative(e,t){const n=this,i=e.length,a=e.charAt(0).toLowerCase();if(2===t)return i===n._wordLengthNumber&&"1"===a;if(8!==t)return i===n._wordLengthNumber/4&&-1!==["8","9","a","b","c","d","e","f"].indexOf(a);switch(n._wordLengthNumber){case 8:return 3===i&&("2"===a||"3"===a);case 16:return 5===i&&"1"===a;case 32:return 11===i&&("2"===a||"3"===a);case 64:return 22===i&&"1"===a}}_getBigNumberFrom64BitBinOctHex(e,t){let n=new Smart.Utilities.BigNumber(0);for(let i=e.length-1;i>=0;i--){let a=new Smart.Utilities.BigNumber(parseInt(e.charAt(i),t));n=n.add(a.multiply(new Smart.Utilities.BigNumber(t).pow(e.length-1-i)))}return n}_getNegativeDecimal(e,t){const n=this;let i=e;if(8===t){let t=[];for(let n=0;n<e.length;n++){let i=parseInt(e.charAt(n),8).toString(2);for(;3!==i.length;)i=`0${i}`;t.push(i)}for(i=t.join("");"0"===i.charAt(0);)i=i.slice(1)}else if(16===t){let t=[];for(let n=0;n<e.length;n++){let i=parseInt(e.charAt(n),16).toString(2);for(;4!==i.length;)i=`0${i}`;t.push(i)}i=t.join("")}let a=i.replace(/0/g,"a");return a=a.replace(/1/g,"b"),a=a.replace(/a/g,"1"),a=a.replace(/b/g,"0"),this._wordLengthNumber<64?a=-1*(parseInt(a,2)+1):(a=n._getBigNumberFrom64BitBinOctHex(a,t),a=a.add(1).negate()),a}_discardDecimalSeparator(e,t){if(void 0===t&&(t=this.decimalSeparator),"."!==t&&e!==1/0&&e!==-1/0){let n=new RegExp(t,"g");return e.replace(n,".")}return e}_applyDecimalSeparator(e){const t=this;return"string"!=typeof e&&(e=e.toString()),"."!==t.decimalSeparator&&(e=e.replace(/\./g,t.decimalSeparator)),e}_renderValue(e,t){const n=this,i=e,a=10===n._radixNumber||!0===t;if(e=n._numericProcessor.render(e,a),"."!==n.decimalSeparator&&a&&(e=n._applyDecimalSeparator(e)),!0!==t&&(n._editableValue=e,n.outputFormatString&&10===n._radixNumber)){const e=(n.shadowRoot||n.getRootNode()).activeElement||document.activeElement,t=n._numberRenderer.formatNumber(i,n.outputFormatString);if(e!==n.$.input)return t;n._formattedValue=t}return e}_setFocusable(){const e=this;e.disabled||e.unfocusable?e.$.input.tabIndex=-1:e.$.input.removeAttribute("tabindex")}_disableComponents(){const e=this;if(e.disabled)return;const t=e.value;null===t||"NaN"===t.toString()||Math.abs(t)===1/0?(e.$.upButton.disabled=!0,e.$.downButton.disabled=!0):(e.$.upButton.disabled=!1,e.$.downButton.disabled=!1)}_resizeHandler(){this.refresh()}refresh(){const e=this;e.opened&&e._closeRadix(!0)}});