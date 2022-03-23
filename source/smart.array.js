
/* Smart UI v13.1.1 (2022-03-23) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-array",class extends Smart.BaseElement{static get properties(){return{arrayIndexingMode:{value:"LabVIEW",allowedValues:["LabVIEW","JavaScript"],type:"string"},changeProperty:{value:null,type:"function?"},columns:{value:1,type:"number"},customWidgetDefaultValue:{value:null,type:"any?"},dimensions:{value:1,type:"number"},elementHeight:{value:25,type:"number"},elementTemplate:{value:null,type:"function?"},elementWidth:{value:75,type:"number"},getElementValue:{value:null,type:"function?"},indexerHeight:{value:25,type:"number"},indexerWidth:{value:50,type:"number"},messages:{value:{en:{callbackFunctionRequired:"smart-array: When \"type\" is 'custom', the {{callback}} callback function has to be implemented."}},type:"object",extend:!0},rows:{value:1,type:"number"},setElementValue:{value:null,type:"function?"},showHorizontalScrollbar:{value:!1,type:"boolean"},showIndexDisplay:{value:!1,type:"boolean"},showSelection:{value:!1,type:"boolean"},showVerticalScrollbar:{value:!1,type:"boolean"},type:{value:"none",allowedValues:["none","boolean","numeric","string","custom"],type:"string"},value:{value:null,type:"array?",reflectToAttribute:!1}}}static get listeners(){return{resize:"_resizeHandler","horizontalScrollbar.change":"_scrollbarChangeHandler","horizontalScrollbar.click":"_scrollbarClickHandler","verticalScrollbar.change":"_scrollbarChangeHandler","verticalScrollbar.click":"_scrollbarClickHandler"}}static get requires(){return{"Smart.NumericTextBox":"smart.numerictextbox.js","Smart.ScrollBar":"smart.scrollbar.js","Smart.SwitchButton":"smart.switchbutton.js","Smart.TextBox":"smart.textbox.js"}}template(){return'<div>\n                    <div id="indexerContainer" class="smart-indexer-container smart-hidden"></div>\n                    <div id="bigContainer" class="smart-big-container smart-array-background">\n                        <div id="centralContainer">\n                            <div id="mainContainer" class="smart-main-container"></div>\n                            <div id="horizontalScrollbarContainer" class="smart-scrollbar-container-horizontal smart-hidden">\n                                <smart-scroll-bar id="horizontalScrollbar" theme="[[theme]]" animation="[[animation]]" min="0" max="0" value="0" step="1"></smart-scroll-bar>\n                            </div>\n                        </div>\n                        <div id="verticalScrollbarContainer" class="smart-scrollbar-container-vertical smart-hidden">\n                            <smart-scroll-bar id="verticalScrollbar" theme="[[theme]]" animation="[[animation]]" orientation="vertical" min="0" max="0" value="0" step="1"></smart-scroll-bar>\n                        </div>\n                    </div>\n                </div>'}render(){const e=this;e._id=e.getAttribute("id")||Math.round(1e4*Math.random()),e._cachedWidth=e.offsetWidth,e._cachedHeight=e.offsetHeight,e._coordinates=[],e._getDefaultCellValue(),e._validateProperties(),e._addInitialDimensions(),"none"!==e.type&&(e._addElementStructure(),e._structureAdded=!0,e._initializeElements(!1)),e._getInitialFill(),e._updateWidgetWidth(),e._updateWidgetHeight(),e._cachedWidth=e.offsetWidth,e._cachedHeight=e.offsetHeight,super.render()}addDimension(e){const t=this;if(!0!==t._suppressDimensionChange&&32===t.dimensions)return;const n=document.createElement("smart-numeric-text-box");n.className="smart-array-indexer",n.style.height=t.indexerHeight+"px",n.inputFormat="integer",n.spinButtons=!0,n.min=0,n.max=4294967295,n.disabled=t.disabled,n.animation=t.animation,n.validation="interaction",n.wordLength="uint64",n.theme=t.theme,n.onReady=function(){n.$upButton.addClass("smart-array-indexer-increment"),n.$downButton.addClass("smart-array-indexer-decrement")},t.$.indexerContainer.insertBefore(n,t.$.indexerContainer.children?t.$.indexerContainer.children[0]:null),n.$.listen("change",t._indexerChangeHandler.bind(t)),t._dimensions.push({index:t._dimensions.length,indexer:n}),"LabVIEW"===t.arrayIndexingMode?(t._indexers.unshift(n),t._coordinates.unshift(0)):(t._indexers.push(n),t._coordinates.push(0)),n.dimension=t._indexers.length-1,!0!==t._suppressDimensionChange&&(t.dimensions+=1,t.$.fireEvent("dimensionChange",{type:"add"})),!0!==t._initialDimensions&&!1!==e&&(t._validateValueArrayDimensions(),"LabVIEW"===t.arrayIndexingMode?t._filledUpTo.unshift(0):t._filledUpTo.push(0),!0===t._oneDimensionSpecialCase&&(t._oneDimensionSpecialCase=!1,t.$.verticalScrollbar.value=0,t._scroll())),void 0!==t._absoluteSelectionStart&&("LabVIEW"===t.arrayIndexingMode?t._absoluteSelectionStart.unshift(0):t._absoluteSelectionStart.push(0)),void 0!==t._absoluteSelectionEnd&&("LabVIEW"===t.arrayIndexingMode?t._absoluteSelectionEnd.unshift(0):t._absoluteSelectionEnd.push(0)),t._initialDimensions||t._refreshSelection(),!1===t._suppressDimensionChange&&!0===t.showIndexDisplay&&t.dimensions*(t.indexerHeight+4)-2>t._cachedHeight&&t._updateWidgetHeight("dimensions")}clearSelection(){const e=this;e._absoluteSelectionStart=void 0,e._absoluteSelectionEnd=void 0,e.showSelection&&e._clearSelection()}copyElementValueToClipboard(e,t){const n=this,l=n._getValueInCell(e,t);if(void 0!==l)try{const e=document.createElement("input");e.type="text",e.style.position="absolute",e.value=l,n.appendChild(e),e.focus(),e.setSelectionRange(0,e.value.length),document.execCommand("copy"),n.removeChild(e)}catch(e){}}deleteColumn(e){const t=this,n="LabVIEW"===t.arrayIndexingMode;let l;if(e=Math.max(0,e),l=n?t._filledUpTo[t._filledUpTo.length-1]:t._filledUpTo[0],e>l)return;if(0===l||t._oneDimensionSpecialCase&&0===e)return void t.emptyArray();const i=JSON.stringify(t.value);let a,s;if(n){a=t.dimensions-1,s=e+t._coordinates[a];const n=function(e,t){if(a!==t)for(let l=0;l<e.length;l++)n(e[l],t+1);else e.splice(s,1)};n(t.value,0)}else a=0,s=e+t._coordinates[0],t.value.splice(s,1);JSON.stringify(t.value)!==i&&(t._filledUpTo[a]--,t._scroll(),t.$.fireEvent("change",{value:t.value,oldValue:JSON.parse(i)}),t._setMaxValuesOfScrollBars())}deleteRow(e){const t=this,n=JSON.stringify(t.value),l="LabVIEW"===t.arrayIndexingMode;let i,a,s;if(e=Math.max(0,e),s=l?t._filledUpTo[t._filledUpTo.length-2]:t._filledUpTo[1],!(e>s))if(0!==s){if(1===t.dimensions){if(!t._oneDimensionSpecialCase)return void(0===e&&t.emptyArray());t.value.splice(e+t._coordinates[0],1),t._filledUpTo[0]--}else{if(l){i=t.dimensions-2,a=e+t._coordinates[i];const n=function(e,t){if(i!==t)for(let l=0;l<e.length;l++)n(e[l],t+1);else e.splice(a,1)};n(t.value,0)}else{i=1,a=e+t._coordinates[1];for(let e=0;e<t.value.length;e++)t.value[e].splice(a,1)}t._filledUpTo[i]--}n!==JSON.stringify(t.value)&&(t._scroll(),t.$.fireEvent("change",{value:t.value,oldValue:JSON.parse(n)}),t._setMaxValuesOfScrollBars())}else t.emptyArray()}emptyArray(){const e=this;if("none"===e.type)return;const t=e._cells,n=e.value;if(e.value=e._returnEmptyArray(),JSON.stringify(n)!==JSON.stringify(e.value)){for(let n=0;n<t.length;n++)for(let l=0;l<t[n].length;l++){const i=t[n][l].widget,a={x:l,y:n},s=e._getDefaultValue();i.classList.add("smart-array-element-empty"),e._areDifferent(e._getElementValue(i,a),s)&&(i.supressChange=!0,e._setElementValue(s,i,a))}e._getInitialFill(),e.clearSelection(),e.$.fireEvent("change",{value:e.value,oldValue:n})}}endSelection(e,t){const n=this;if(void 0===n._absoluteSelectionStart)return;n._absoluteSelectionEnd=n._coordinates.slice(0);const l=n.dimensions;"LabVIEW"===n.arrayIndexingMode?(n._absoluteSelectionEnd[l-1]=Math.min(t,n._filledUpTo[l-1]),l>1&&(n._absoluteSelectionEnd[l-2]=Math.min(e,n._filledUpTo[l-2]))):(n._absoluteSelectionEnd[0]=Math.min(t,n._filledUpTo[0]),l>1&&(n._absoluteSelectionEnd[1]=Math.min(e,n._filledUpTo[1])));let i=!0;for(let e=0;e<l;e++)i=i&&n._absoluteSelectionStart[e]<=n._absoluteSelectionEnd[e];i?n._refreshSelection():(n._absoluteSelectionStart=void 0,n._absoluteSelectionEnd=void 0)}getElement(e,t){const n=this._cells;if(void 0!==n[e]&&void 0!==n[e][t])return n[e][t].widget}getElementSize(){return{width:this.elementWidth,height:this.elementHeight}}getIndexerValue(){const e=this._indexers,t=[];for(let n=0;n<e.length;n++)t.push(e[n].val());return t}hitTest(e,t){const n=this,l=document.elementFromPoint(e,t);if(!n.contains(l))return;const i=l.closest(".smart-array-element"),a=l.closest(".smart-array-indexer");if(null!==i)return{type:"element",htmlElement:i,row:i.row,column:i.col};if(null!==a){let e=a.dimension;return"LabVIEW"===n.arrayIndexingMode&&(e=n.dimensions-e-1),{type:"indexer",htmlElement:a,dimension:e}}return{type:"array",htmlElement:n}}insertColumnBefore(e,t){const n=this,l=JSON.stringify(n.value),i="LabVIEW"===n.arrayIndexingMode;let a;if(i&&!0!==t)n.insertRowBefore(e,!0);else{if(1===n.dimensions){if(i!==n._oneDimensionSpecialCase)return;n.value.splice(e+n._coordinates[0],0,n._getDefaultValue()),n._scroll(),n._filledUpTo[0]++}else{const t=n._filledUpTo.slice(0);if(i){a=e+n._coordinates[n.dimensions-2];const l=n.dimensions-2,i=function(e,t){if(l!==t)for(let n=0;n<e.length;n++)i(e[n],t+1);else e.splice(a,0,[])};i(n.value,0),t[l]++}else a=e+n._coordinates[0],n.value.splice(a,0,n._returnEmptyArray()[0]),t[0]++;n._fillValueArray(t,!0)}n.$.fireEvent("change",{value:n.value,oldValue:JSON.parse(l)}),n._setMaxValuesOfScrollBars()}}insertRowBefore(e,t){const n=this,l=JSON.stringify(n.value),i="LabVIEW"===n.arrayIndexingMode;if(i&&!0!==t)n.insertColumnBefore(e,!0);else{if(1===n.dimensions){if(!(i&&!n._oneDimensionSpecialCase||!i&&n._oneDimensionSpecialCase))return;n.value.splice(e+n._coordinates[0],0,n._getDefaultValue()),n._scroll(),n._filledUpTo[0]++}else{const t=n._filledUpTo.slice(0);let l;if(i){const i=n.dimensions-1;l=e+n._coordinates[i];const a=function(e,t){if(i!==t)for(let n=0;n<e.length;n++)a(e[n],t+1);else e.splice(l,0,n._getDefaultValue())};a(n.value,0),t[i]++}else{l=e+n._coordinates[1];for(let e=0;e<n.value.length;e++)n.value[e].splice(l,0,void 0);t[1]++}n._fillValueArray(t,!0)}n.$.fireEvent("change",{value:n.value,oldValue:JSON.parse(l)}),n._setMaxValuesOfScrollBars()}}reinitializeArray(){const e=this;if("none"===e.type)return;const t=e.dimensions,n=JSON.stringify(e.value);if(1===e.dimensions)e.value.fill(e._getDefaultValue());else{const n=function(l,i){for(let a=0;a<l.length;a++)i===t?l[a]=e._getDefaultValue():n(l[a],i+1)};n(e.value,1)}n!==JSON.stringify(e.value)&&(e._scroll(),e.$.fireEvent("change",{value:e.value,oldValue:JSON.parse(n)}))}removeDimension(e,t){const n=this,l=n._dimensions.length-1;if(n._dimensions.length<2)return;if(2===n._dimensions.length){const e=n.rows;n.rows=1,n._changeRowsColumns("rows",e,1,void 0,!0)}let i;n.$.indexerContainer.removeChild(n._dimensions[l].indexer),n._dimensions.pop(),"LabVIEW"===n.arrayIndexingMode?(i=n._coordinates[0],n._indexers.splice(0,1),n._coordinates.splice(0,1)):(i=n._coordinates[l],n._indexers.pop(),n._coordinates.pop()),!0!==n._suppressDimensionChange&&(n.dimensions-=1,n.$.fireEvent("dimensionChange",{type:"remove"})),!1!==t&&(n._removeDimensionFromJSArray(),"LabVIEW"===n.arrayIndexingMode?n._filledUpTo.splice(0,1):n._filledUpTo.pop()),void 0!==n._absoluteSelectionStart&&("LabVIEW"===n.arrayIndexingMode?n._absoluteSelectionStart.splice(0,1):n._absoluteSelectionStart.pop()),void 0!==n._absoluteSelectionEnd&&("LabVIEW"===n.arrayIndexingMode?n._absoluteSelectionEnd.splice(0,1):n._absoluteSelectionEnd.pop()),i>0&&n._scroll(),(n.dimensions>1&&!1===n._suppressDimensionChange&&!0===n.showIndexDisplay&&(n.dimensions+1)*(n.indexerHeight+4)-2>=n._cachedHeight||1===n.dimensions&&!0!==e)&&(n._updateWidgetHeight("dimensions"),1===n.dimensions&&n.showVerticalScrollbar&&n._showVerticalScrollbar(!1))}reset(e){const t=this;if("none"===t.type&&!0!==e)return;t.type="none";let n=t.rows;t.rows=1,t._changeRowsColumns("rows",n,1,!0),n=t.columns,t.columns=1,t._changeRowsColumns("columns",n,1);const l=t._cells[0][0];l.widget.$.unlisten("change"),l.widget.$.unlisten("click"),l.td.innerHTML="",t._table.classList.add("smart-hidden"),t._defaultValue=void 0;const i=t.value;t.value=null,t.$.fireEvent("change",{value:t.value,oldValue:i}),t.$.horizontalScrollbar.max=0,t.$.horizontalScrollbar.value=0,t.$.verticalScrollbar.max=0,t.$.verticalScrollbar.value=0}resizeElement(e,t){const n=this;if(e=parseInt(e,10),t=parseInt(t,10),e===n.elementWidth&&t===n.elementHeight)return;if(e===n.elementWidth)return void n.setRowHeight(t);if(t===n.elementHeight)return void n.setColumnWidth(e);const l=n.getElementsByClassName("smart-array-element-"+n._id);if(n.elementWidth=e,n.elementHeight=t,"none"!==n.type){if(n._updateWidgetWidth(),n._updateWidgetHeight(),"custom"!==n.type)for(let n=0;n<l.length;n++)l[n].style.width=e+"px",l[n].style.height=t+"px";else if(n.changeProperty)n.changeProperty("width",e,l),n.changeProperty("height",t,l);else try{n.warn(n.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}n.$.fireEvent("sizeChange",{width:e,height:t})}}selectAll(){const e=this;if("LabVIEW"===e.arrayIndexingMode&&-1===e._filledUpTo[0]||"JavaScript"===e.arrayIndexingMode&&-1===e._filledUpTo[e._filledUpTo.length-1])return;const t=new Array(e.dimensions);t.fill(0),e._absoluteSelectionStart=t,e._absoluteSelectionEnd=e._filledUpTo.slice(0),e._refreshSelection()}selectElement(e,t){this.startSelection(e,t),this.endSelection(e,t)}setColumnWidth(e,t){const n=this;if((e=parseInt(e,10))===n.elementWidth&&!0!==t)return;const l=n.getElementsByClassName("smart-array-element-"+n._id);if(n.elementWidth=e,"none"!==n.type){if("custom"!==n.type)for(let t=0;t<l.length;t++)l[t].style.width=e+"px";else if(n.changeProperty)n.changeProperty("width",e,l);else try{n.warn(n.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}n._updateWidgetWidth(),n.$.fireEvent("sizeChange",{width:e,height:n.elementHeight})}}setDefaultValue(e){const t=this;t._areDifferent(e,t._defaultValue)&&(t._defaultValue=e,t._scroll())}setIndexerValue(e){const t=this;let n=!1;for(let l=0;l<e.length;l++){const i=e[l].index,a="LabVIEW"===t.arrayIndexingMode?t.dimensions-i-1:i,s=e[l].value,o=t._indexers[i];void 0!==o&&s!==t._coordinates[i]&&(n=!0,o.val(s),t._coordinates[i]=s,"none"===t.type||0!==a&&1!==a||t._syncScrollbar(a,s))}!0===n&&t._scroll()}setRowHeight(e,t){const n=this;if((e=parseInt(e,10))===n.elementHeight&&!0!==t)return;const l=n.getElementsByClassName("smart-array-element-"+n._id);if(n.elementHeight=e,"none"!==n.type){if("custom"!==n.type)for(let t=0;t<l.length;t++)l[t].style.height=e+"px";else if(n.changeProperty)n.changeProperty("height",e,l);else try{n.warn(n.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}n._updateWidgetHeight(),n.$.fireEvent("sizeChange",{width:n.elementWidth,height:e})}}showLastElement(){const e=this,t=[];let n,l;if("none"!==e.type)if(1!==e.dimensions){"LabVIEW"===e.arrayIndexingMode?(n=e.dimensions-1,l=e.dimensions-2):(n=0,l=1);for(let i=0;i<e.dimensions;i++){let a=e._filledUpTo[i];if(i===n){const t=parseFloat(e._indexers[i].value);t+e.columns<a+1||t>a||(a=t)}else if(i===l){const t=parseFloat(e._indexers[i].value);t+e.rows<a+1||t>a||(a=t)}t.push({index:i,value:a})}e.setIndexerValue(t)}else{const t=parseFloat(e._indexers[0].value),n=e._oneDimensionSpecialCase?e.rows:e.columns,l=e._filledUpTo[0];(t+n<l+1||t>l)&&e.setIndexerValue([{index:0,value:l}])}}startSelection(e,t){const n=this;n._absoluteSelectionStart=n._coordinates.slice(0),1===n.dimensions?n._absoluteSelectionStart[0]=t:"LabVIEW"===n.arrayIndexingMode?(n._absoluteSelectionStart[n.dimensions-1]=t,n._absoluteSelectionStart[n.dimensions-2]=e):(n._absoluteSelectionStart[0]=t,n._absoluteSelectionStart[1]=e),n._absoluteSelectionEnd=void 0}toggleElementGap(){const e=this;if("none"===e.type)return;let t;void 0===e._elementGap&&(e._elementGap=!1),e._elementGap?(t="remove",e._elementGap=!1):(t="add",e._elementGap=!0);for(let n=0;n<e.rows;n++)for(let l=0;l<e.columns;l++)e._cells[n][l].td.classList[t]("smart-array-table-data-gap");e._updateWidgetWidth(),e._updateWidgetHeight()}transposeArray(){const e=this;if(2===e.dimensions){const t=e.value[0].map((function(t,n){return e.value.map((function(e){return e[n]}))})),n=JSON.stringify(e.value);e.value=t,e._scroll(),e.$.fireEvent("change",{value:t,oldValue:JSON.parse(n)}),e._filledUpTo.reverse()}}val(e,t){const n=this;let l;if(2===Array.from(arguments).filter((e=>void 0!==e)).length){if("none"===n.type)return;l=JSON.stringify(n.value);let i,a=n.value;for(i=0;i<n.dimensions-1;i++){let e=t[i];void 0===e&&(e=0,t[i]=0),void 0===a[e]&&(a[e]=[]),a=a[e]}let s=t[i];void 0===s&&(s=0,t[i]=0),n._areDifferent(a[s],e)&&(a[s]=e,n._fillValueArray(t.slice(0)),n.$.fireEvent("change",{value:n.value,oldValue:JSON.parse(l),dimensionIndexes:t}))}else{if(void 0===e||"object"==typeof e&&0===Object.keys(e).length)return n.value;{if("none"===n.type)return;const t=JSON.stringify(n.value);t!==JSON.stringify(e)&&(l=n.value,n.value=e,n._validateValue(),t!==JSON.stringify(n.value)&&(n._scroll(),n._getInitialFill(),n.$.fireEvent("change",{value:n.value,oldValue:l})))}}}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const l=this;if(n!==t)switch(e){case"arrayIndexingMode":l.arrayIndexingMode=t;break;case"columns":case"rows":l._changeRowsColumns(e,t,n);break;case"customWidgetDefaultValue":"custom"===l.type&&(l._defaultValue=n,l._scroll());break;case"dimensions":l._addRemoveMultipleDimensions(t,n);break;case"animation":case"disabled":for(let t=0;t<l._indexers.length;t++)l._indexers[t][e]=n;if("none"!==l.type){const t=l.getElementsByClassName("smart-array-element-"+l._id);if("custom"!==l.type)for(let l=0;l<t.length;l++)t[l][e]=n;else if(l.changeProperty)l.changeProperty(e,n,t);else try{l.warn(l.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}l._scroll()}break;case"elementHeight":l.setRowHeight(n,!0);break;case"elementTemplate":if("none"!==l.type){const e=l.getElementsByClassName("smart-array-element-"+l._id);for(let t=0;t<e.length;t++){let n=e[t];l.elementTemplate(n,{x:n.col,y:n.row})}}break;case"elementWidth":l.setColumnWidth(n,!0);break;case"indexerHeight":for(let e=0;e<l._indexers.length;e++)l._indexers[e].style.height=n+"px";l._updateWidgetHeight();break;case"indexerWidth":l.$.indexerContainer.style.width=n+"px",l._updateWidgetWidth();break;case"showHorizontalScrollbar":if(!0===l._oneDimensionSpecialCase)return void(l.showHorizontalScrollbar=!1);l._showHorizontalScrollbar(n);break;case"showIndexDisplay":n?l.$indexerContainer.removeClass("smart-hidden"):l.$indexerContainer.addClass("smart-hidden"),l._updateWidgetWidth(),l._updateWidgetHeight("showIndexDisplay");break;case"showSelection":n?l._refreshSelection():l._clearSelection();break;case"showVerticalScrollbar":if(1===l.dimensions&&!1===l._oneDimensionSpecialCase)return void(l.showVerticalScrollbar=!1);l._showVerticalScrollbar(n);break;case"type":l._getDefaultCellValue(),"none"!==t&&"none"!==n?(l._initializeElements(!0),l._updateWidgetWidth(),l._updateWidgetHeight()):"none"===t?(l.value=l._returnEmptyArray(),!0===l._structureAdded?(l._initializeElements(!1),l._table.classList.remove("smart-hidden")):(l._addElementStructure(),l._structureAdded=!0,l._initializeElements(!1)),l.$.centralContainer.style.width="",l.$.bigContainer.style.width="",l.$.mainContainer.style.height="",l.$.bigContainer.style.height="",l._updateWidgetWidth(),l._updateWidgetHeight(),l._getInitialFill()):"none"===n&&l.reset(!0);break;case"value":JSON.stringify(t)!==JSON.stringify(n)&&(l._validateValue(),JSON.stringify(t)!==JSON.stringify(l.value)&&(l._scroll(),l._getInitialFill(),l.$.fireEvent("change",{value:l.value,oldValue:t})))}}_addDimensionToJSArray(e){const t=this;if("LabVIEW"===t.arrayIndexingMode)t.value=[t.value];else{void 0===e&&(e=t.dimensions-1);const n=function(t,l){for(let i=0;i<t.length;i++)l!==e?n(t[i],l+1):t[i]=[t[i]]};n(t.value,1)}}_addElementHandlers(e){const t=this;e.$.listen("change",(function(n){if(!0!==e.supressChange||e instanceof Smart.NumericTextBox){e.$.removeClass("smart-array-element-empty");const n=e.col,l=e.row;t._updateValue(l,n,t._getElementValue(e,{x:n,y:l},!0))}else e.supressChange=!1;n.stopPropagation()})),e.$.listen("click",(function(){t.$.fireEvent("elementClick",{element:e})}))}_addElementStructure(){const e=this;e._cells=[],e._table=document.createElement("table"),e._table.className="smart-array-element-gap";const t=document.createElement("tbody"),n=document.createDocumentFragment();for(let t=0;t<e.rows;t++){const l=document.createElement("tr"),i=document.createDocumentFragment();l.classList.add("smart-array-table-row"),e._cells.push([]);for(let n=0;n<e.columns;n++){const n=document.createElement("td");n.classList.add("smart-array-table-data"),e._elementGap&&n.classList.add("smart-array-table-data-gap"),e._cells[t].push({td:n}),i.appendChild(n)}l.appendChild(i),n.appendChild(l)}t.appendChild(n),e._table.appendChild(t),e.$.mainContainer.appendChild(e._table),e._tableBody=t}_addInitialDimensions(){const e=this,t=e.dimensions;e._dimensions=[],e._indexers=[],e._suppressDimensionChange=!0,e._initialDimensions=!0;for(let n=0;n<t;n++)e.addDimension();e._suppressDimensionChange=!1,e._initialDimensions=!1}_addRemoveColumn(e){const t=this;if("add"===e){const e=t._tableBody.children;for(let n=0;n<t._cells.length;n++){const l=t._cells[n],i=document.createElement("td");i.classList.add("smart-array-table-data"),t._elementGap&&i.classList.add("smart-array-table-data-gap"),l.push({td:i}),e[n].appendChild(i),t._initializeWidget(n,l.length-1)}t.columns++,!0!==t._suppressScroll&&t._scroll()}else if("remove"===e&&t.columns>1){for(let e=0;e<t._cells.length;e++){const n=t._cells[e],l=n[n.length-1];l.widget.$.unlisten("change"),l.widget.$.unlisten("click"),l.td.parentElement.removeChild(l.td),n.pop()}t.columns--}}_addRemoveMultipleDimensions(e,t,n){const l=this;if((t<1||t>32)&&(l.dimensions=1,l.dimensions===e))return;let i=l.dimensions-e;if(l._suppressDimensionChange=!0,i>0){do{l.addDimension(n),i-=1}while(i>0);l.$.fireEvent("dimensionChange",{type:"add"})}else{if(!(i<0))return;if(1===t){const n=l.rows;l.rows=1,l.dimensions=e,l._changeRowsColumns("rows",n,1,void 0,!0),l.dimensions=t}do{l.removeDimension(!0,n),i+=1}while(i<0);l.$.fireEvent("dimensionChange",{type:"remove"}),1===t&&l.showVerticalScrollbar&&l._showVerticalScrollbar(!1)}l._suppressDimensionChange=!1,(!0!==l.showIndexDisplay||1!==t&&(t-e>0&&t*(l.indexerHeight+4)-2<l._cachedHeight||t-e<0&&e*(l.indexerHeight+4)-2<l._cachedHeight))&&1!==t||l._updateWidgetHeight("dimensions")}_addRemoveRow(e){const t=this;if("add"===e&&(t.dimensions>1||1===t.dimensions&&1===t.columns)){t._cells.push([]);const e=document.createElement("tr"),n=document.createDocumentFragment(),l=t._cells.length-1,i=[];e.classList.add("smart-array-table-row");for(let e=0;e<t.columns;e++){const e=document.createElement("td");e.classList.add("smart-array-table-data"),t._elementGap&&e.classList.add("smart-array-table-data-gap"),t._cells[l].push({td:e}),i.push(e),n.appendChild(e)}e.appendChild(n),t._tableBody.appendChild(e);for(let e=0;e<i.length;e++)t._initializeWidget(l,e);t.rows++,!0!==t._suppressScroll&&t._scroll()}else if("remove"===e&&t.rows>1){const e=t._tableBody.children[t._tableBody.children.length-1],n=t._cells[t._cells.length-1];for(let e=0;e<n.length;e++)n[e].widget.$.unlisten("change"),n[e].widget.$.unlisten("click");t._tableBody.removeChild(e),t._cells.pop(),t.rows--}}_addSelectionClass(e,t,n,l){const i=this;i.showSelection&&void 0!==i._absoluteSelectionStart&&void 0!==i._absoluteSelectionEnd&&(!1===l&&i._inSelection(e,t)?n.classList.add("smart-array-element-selected"):n.classList.remove("smart-array-element-selected"))}_areDifferent(e,t){if(e instanceof Date){if(t instanceof Date)return e.getTime()!==t.getTime();if("string"==typeof t)try{return e.getTime()!==new Date(t).getTime()}catch(e){}return!0}if(t instanceof Date){if("string"==typeof e)try{return t.getTime()!==new Date(e).getTime()}catch(e){}return!0}return"object"!=typeof e||typeof e!=typeof t?e!==t:JSON.stringify(e)!==JSON.stringify(t)}_changeRowsColumns(e,t,n,l,i){const a=this,s="_addRemove"+e.charAt(0).toUpperCase()+e.slice(1,e.length-1);if(n<1&&(a[e]=1,a[e]===t))return;if(1===a.dimensions)if(!0===a._oneDimensionSpecialCase){if("columns"===e&&a[e]>1){if(a.rows>1)return void(a.columns=1);a._oneDimensionSpecialCase=!1,a.showVerticalScrollbar&&(a._showVerticalScrollbar(!1),a._showHorizontalScrollbar(!0))}}else if("rows"===e){if(a.columns>1)return void(a.rows=1);a.rows>1&&(a._oneDimensionSpecialCase=!0,!0===a.showHorizontalScrollbar&&(a._showHorizontalScrollbar(!1),a._showVerticalScrollbar(!0)))}let o=a[e]-t;if(a[e]=t,o>0){a._suppressScroll=!0;do{a[s]("add"),o-=1}while(o>0);a._suppressScroll=!1,a._scroll()}else if(o<0)do{a[s]("remove"),o+=1}while(o<0);a.$.fireEvent("arraySizeChange",{type:e,number:a[e],oldNumber:t}),"columns"===e?(a._updateWidgetWidth(),a._setMaxValuesOfScrollBars("horizontal")):"rows"===e&&!0!==i&&(a._updateWidgetHeight(!0===l?"dimensions":void 0),a._setMaxValuesOfScrollBars("vertical"))}_clearSelection(){const e=this;for(let t=0;t<e.rows;t++)for(let n=0;n<e.columns;n++)e._cells[t][n].td.classList.remove("smart-array-element-selected")}_cloneValue(e){return"object"!=typeof e?e:e instanceof Date?new Date(e.getTime()):Array.isArray(e)||e instanceof Object?JSON.parse(JSON.stringify(e)):void 0}_fillValueArray(e,t){const n=this,l=n.dimensions;if(void 0!==n._filledUpTo&&!0!==t){let t=!0;for(let l=0;l<e.length;l++)t=t&&n._filledUpTo[l]>=e[l],e[l]=Math.max(e[l],n._filledUpTo[l]);if(!0===t)return void n._scroll()}n._filledUpTo=e.slice(0),function t(i,a){for(let s=0;s<=e[a];s++)a!==l-1?(void 0===i[s]&&(i[s]=[]),t(i[s],a+1)):void 0===i[s]&&(i[s]=n._getDefaultValue())}(n.value,0),n._scroll(),n._setMaxValuesOfScrollBars()}_getDefaultCellValue(){const e=this;switch(e.type){case"custom":e._defaultValue=null!==e.customWidgetDefaultValue?e.customWidgetDefaultValue:void 0;break;case"numeric":e._defaultValue=0;break;case"boolean":e._defaultValue=!1;break;case"string":e._defaultValue=""}}_getDefaultValue(){return this._cloneValue(this._defaultValue)}_getElementValue(e,t,n){const l=this;let i;return i=l.getElementValue?l.getElementValue(e,t):"boolean"===l.type?e.checked:e.value,!0!==n?i:l._cloneValue(i)}_getInitialFill(){const e=this;if(e._filledUpTo=[],"none"!==e.type){let t=e.value;for(let n=0;n<e.dimensions;n++){const l=t.length-1;e._filledUpTo[n]=l,t=t[l]}e._setMaxValuesOfScrollBars()}}_getMaxValuesOfScrollBars(e){const t=this,n=t._filledUpTo.length;let l,i,a,s=0;return"horizontal"===e?(a=t.$.horizontalScrollbar.value,l="LabVIEW"===t.arrayIndexingMode?t._filledUpTo[n-1]:t._filledUpTo[0],i=t.columns):(a=t.$.verticalScrollbar.value,l=t._oneDimensionSpecialCase?"LabVIEW"===t.arrayIndexingMode?t._filledUpTo[n-1]:t._filledUpTo[0]:"LabVIEW"===t.arrayIndexingMode?t._filledUpTo[n-2]:t._filledUpTo[1],i=t.rows),void 0===l?0:(s=l-i+2,Math.max(s,a))}_getValueInCell(e,t){const n=this,l=n.value,i=n._coordinates,a=i.length;let s;if(1===a)s=!1===n._oneDimensionSpecialCase?l[t+i[0]]:l[e+i[0]];else{const o=i.slice(0);"LabVIEW"===n.arrayIndexingMode?(o[a-1]+=t,o[a-2]+=e):(o[0]+=t,o[1]+=e);const r=l[o[0]];if(void 0!==r){const e=r[o[1]];if(void 0!==e&&(s=e,a>2))for(let e=2;e<a&&void 0!==s;e++)s=s[o[e]]}}return s}_indexerChangeHandler(e){const t=this,n=t.context;t.context=t;const l=e.target.dimension,i="LabVIEW"===t.arrayIndexingMode?t.dimensions-l-1:l,a=parseFloat(e.detail.value);t._coordinates[i]=a,t._scroll(),"none"===t.type||0!==l&&1!==l||t._syncScrollbar(l,a),e.stopPropagation(),t.context=n}_initializeElements(e){const t=this,n=t._cells;function l(e){t.elementTemplate&&t.elementTemplate(e,{x:e.col,y:e.row})}if(t._initializeElement=function(){},"custom"!==t.type)switch(t.type){case"numeric":t._initializeElement=function(e,n){e.style.width=t.elementWidth+"px",e.style.height=t.elementHeight+"px",e.disabled=t.disabled,e.animation=t.animation,e.inputFormat="floatingPoint",e.spinButtons=!0,e.value=n,l(e)};break;case"boolean":t._initializeElement=function(e,n){e.style.width=t.elementWidth+"px",e.style.height=t.elementHeight+"px",e.disabled=t.disabled,e.animation=t.animation,e.checked=n,l(e)};break;case"string":t._initializeElement=function(e,n){e.style.width=t.elementWidth+"px",e.style.height=t.elementHeight+"px",e.disabled=t.disabled,e.animation=t.animation,e.value=n,l(e)}}else t._initializeElement=function(e,n){if(t.elementTemplate){const l={x:e.col,y:e.row};t.elementTemplate(e,l),void 0!==n&&t._setElementValue(n,e,l)}else t.error(t.localize("callbackFunctionRequired",{callback:"elementTemplate"}))};for(let l=0;l<n.length;l++)for(let i=0;i<n[l].length;i++){if(!0===e){const e=n[l][i];e.widget.$.unlisten("change"),e.widget.$.unlisten("click"),e.td.innerHTML=""}t._initializeWidget(l,i)}}_initializeWidget(e,t){const n=this,l=n._cells[e][t],i=n._getValueInCell(e,t);let a;switch(n.type){case"boolean":a=document.createElement("smart-switch-button");break;case"numeric":a=document.createElement("smart-numeric-text-box"),a.validation="interaction";break;case"string":a=document.createElement("smart-text-box");break;case"custom":a=document.createElement("div"),a.$=Smart.Utilities.Extend(a)}a.row=e,a.col=t,a.theme=n.theme,l.widget=a,n._initializeElement(a,void 0===i?n._getDefaultValue():i,l),l.td.appendChild(a),a.classList.add("smart-array-element"),a.classList.add("smart-array-element-"+n._id),void 0===i&&a.classList.add("smart-array-element-empty"),n._addElementHandlers(a)}_inSelection(e,t){const n=this,l=n._coordinates;let i,a,s,o,r=!0;if("LabVIEW"===n.arrayIndexingMode?(i=n.dimensions-1,a=n.dimensions-2):(i=0,a=1),n._oneDimensionSpecialCase?s=t+l[i]:(s=e+l[i],o=t+l[a]),1===n.dimensions)return s>=n._absoluteSelectionStart[i]&&s<=n._absoluteSelectionEnd[i];if(r=s>=n._absoluteSelectionStart[i]&&s<=n._absoluteSelectionEnd[i]&&o>=n._absoluteSelectionStart[a]&&o<=n._absoluteSelectionEnd[a],"LabVIEW"===n.arrayIndexingMode)for(let e=0;e<a;e++)r=r&&l[e]>=n._absoluteSelectionStart[e]&&l[e]<=n._absoluteSelectionEnd[e];else for(let e=2;e<n.dimensions;e++)r=r&&l[e]>=n._absoluteSelectionStart[e]&&l[e]<=n._absoluteSelectionEnd[e];return r}_moveScrollbar(e,t,n,l){if(isNaN(l))return;const i=this,a=i._getMaxValuesOfScrollBars(t),s=e.max;let o;o="LabVIEW"===i.arrayIndexingMode?i.dimensions-n-1:n,i._indexers[o].val(l),i._coordinates[o]=l,l<=a?e.max=a:l<=s&&(e.max=l),i._scroll(),i.$.fireEvent("scroll",{direction:t})}_refreshSelection(){const e=this;if(e.showSelection)for(let t=0;t<e.rows;t++)for(let n=0;n<e.columns;n++){const l=void 0===e._getValueInCell(t,n);e._addSelectionClass(n,t,e._cells[t][n].td,l)}}_removeDimensionFromJSArray(){const e=this;if("LabVIEW"===e.arrayIndexingMode)e.value=e.value[0];else{const t=e.dimensions+1,n=function(l,i,a,s){for(let o=0;o<l.length;o++)i!==t&&l[o].length>0?n(l[o],i+1,l,o):void 0!==a?a[s]=l[0]:e.value=e.value[0]};n(e.value,1)}}_resizeHandler(){const e=this;if(e.offsetWidth!==e._cachedWidth)if("none"!==e.type){const t=e.offsetWidth-e._cachedWidth,n=e.elementWidth;if(Math.abs(t)<n)return void(e.style.width=e._cachedWidth+"px");const l=Math.round(t/n),i=e.columns,a=i+l;e.columns=a,e._changeRowsColumns("columns",i,a)}else e._updateWidgetWidth();if(e._cachedWidth=e.offsetWidth,e.offsetHeight!==e._cachedHeight){if("none"!==e.type)return void(e.style.height=e._cachedHeight+"px");e._updateWidgetHeight()}e._cachedHeight=e.offsetHeight}_returnEmptyArray(){const e=this,t=[];let n=t;if(e.dimensions>1)for(let t=1;t<e.dimensions;t++)n[0]=[],n=n[0];return t}_scroll(){const e=this;if("none"!==e.type)for(let t=0;t<e._cells.length;t++)for(let n=0;n<e._cells[t].length;n++){const l=e._getValueInCell(t,n),i=e._cells[t][n].widget,a={x:n,y:t},s=e._getElementValue(i,a);let o;void 0!==l?(i.classList.remove("smart-array-element-empty"),e._areDifferent(s,l)?(i.supressChange=!0,e._setElementValue(l,i,a)):i.supressChange=!1,o=!1):(i.classList.add("smart-array-element-empty"),e._areDifferent(s,e._defaultValue)?(i.supressChange=!0,e._setElementValue(e._getDefaultValue(),i,a)):i.supressChange=!1,o=!0),e._addSelectionClass(n,t,e._cells[t][n].td,o)}}_scrollbarChangeHandler(e){const t=this;let n,l;e.stopPropagation(),"none"!==t.type&&(e.target===t.$.horizontalScrollbar?(n="horizontal",l=0):(n="vertical",l=t._oneDimensionSpecialCase?0:1),!0!==t._suppressScrollbarEvent?t._moveScrollbar(e.target,n,l,Math.round(e.detail.value)):t._suppressScrollbarEvent=!1,t._clickTriggered||(t._changeTriggered=!0,setTimeout((function(){t._changeTriggered=!1}),50)))}_scrollbarClickHandler(e){const t=e.target.closest(".smart-scroll-button");if(null===t)return;const n=this,l=t.parentElement.parentElement;if(t===l.$.farButton){if(n._changeTriggered)return;n._clickTriggered=!0,setTimeout((function(){n._clickTriggered=!1}),50);const e=l.max;let t=l.value;!0===isNaN(t)&&(t=0),e===t&&(l.max=e+1,l.value=e+1)}}_setElementValue(e,t,n){const l=this;e=l._cloneValue(e),l.setElementValue?(l.setElementValue(e,t,n),!0===t.supressChange&&(t.supressChange=!1)):"boolean"===l.type?t.checked=e:t.value=e}_setMaxValuesOfScrollBars(e){const t=this;!t.showHorizontalScrollbar||void 0!==e&&"horizontal"!==e||(t.$.horizontalScrollbar.max=t._getMaxValuesOfScrollBars("horizontal")),!t.showVerticalScrollbar||void 0!==e&&"vertical"!==e||(t.$.verticalScrollbar.max=t._getMaxValuesOfScrollBars("vertical"))}_showHorizontalScrollbar(e){const t=this;if(t.showHorizontalScrollbar=e,t._updateWidgetHeight("showHorizontalScrollbar"),!0===e){if(t.$horizontalScrollbarContainer.removeClass("smart-hidden"),"none"!==t.type){let e;e="LabVIEW"===t.arrayIndexingMode?t.dimensions-1:0,t._syncScrollbar(0,t._coordinates[e])}}else t.$horizontalScrollbarContainer.addClass("smart-hidden")}_showVerticalScrollbar(e){const t=this;if(t.showVerticalScrollbar=e,t._updateWidgetWidth(!0),!0===e){if(t.$verticalScrollbarContainer.removeClass("smart-hidden"),"none"!==t.type){let e;e=t._oneDimensionSpecialCase?0:"LabVIEW"===t.arrayIndexingMode?t.dimensions-2:1,t._syncScrollbar(1,t._coordinates[e])}}else t.$verticalScrollbarContainer.addClass("smart-hidden")}_syncScrollbar(e,t){const n=this;let l,i;if(0===e&&!1===n._oneDimensionSpecialCase){if(!n.showHorizontalScrollbar)return;l=n._getMaxValuesOfScrollBars("horizontal"),i=n.$.horizontalScrollbar}else{if(!n.showVerticalScrollbar)return;l=n._getMaxValuesOfScrollBars("vertical"),i=n.$.verticalScrollbar}t>l&&(l=t);const a=i.max;a!==l&&(a>l&&(n._suppressScrollbarEvent=!0),i.max=l),i.value!==t&&(n._suppressScrollbarEvent=!0,i.value=t)}_updateValue(e,t,n){const l=this,i=l._getValueInCell(e,t);if(!l._areDifferent(n,i))return;const a=l._coordinates,s=a.slice(0),o=[];"LabVIEW"===l.arrayIndexingMode?(s[s.length-1]+=t,s[s.length-2]+=e):(s[0]+=t,s[1]+=e);for(let t=0;t<l.dimensions;t++)0===t?!1===l._oneDimensionSpecialCase?o.push(s[0]):o.push(e+a[0]):1===t?o.push(s[1]):o.push(s[t]);let r=l.value;for(let e=0;e<o.length;e++)void 0!==r[o[e]]&&r[o[e]]!==i||(e!==o.length-1?r[o[e]]=[]:r[o[e]]=n),r=r[o[e]];l._fillValueArray(o.slice(0)),l.$.fireEvent("change",{value:n,oldValue:i,dimensionIndexes:o})}_updateWidgetHeight(e){const t=this,n=t.showHorizontalScrollbar?20:0;let l,i;if(t.showIndexDisplay){const e=parseInt(window.getComputedStyle(t._indexers[0]).marginBottom,10);i=t.dimensions*(t.indexerHeight+e)-e}else i=0;if("none"!==t.type)l=t.$.mainContainer.offsetHeight+n;else{if("showHorizontalScrollbar"===e){const e=t.$.bigContainer.offsetHeight;l=!0===t.showHorizontalScrollbar?e+20:e-20}else l="showIndexDisplay"===e&&!1===t.showIndexDisplay||"dimensions"===e?t.$.bigContainer.offsetHeight:t.offsetHeight;const i=18+n;l<i&&(l=i),t.$.mainContainer.style.height=l-n+"px"}t.$.verticalScrollbarContainer.style.height=l-n+"px",t.$.bigContainer.style.height=l+"px";const a=window.getComputedStyle(t);t._cachedHeight=Math.max(i,l)+parseInt(a.borderTopWidth,10)+parseInt(a.borderBottomWidth,10),"none"!==t.type&&(t.style.minHeight=t._cachedHeight+"px",t.style.maxHeight=t._cachedHeight+"px"),t.style.height=t._cachedHeight+"px"}_updateWidgetWidth(e){const t=this,n=t.showVerticalScrollbar?20:0,l=t.showIndexDisplay?t.indexerWidth:0,i=parseInt(window.getComputedStyle(t.$.bigContainer).marginLeft,10);let a,s,o;if("none"!==t.type)a=t.$.centralContainer.offsetWidth,s=a+n,o=s+l+i;else{o=t.offsetWidth,!0===e&&(!0===t.showVerticalScrollbar?o+=20:o-=20);const r=l+18+n;o<r&&(o=r),s=o-l-i,a=s-n,t.$.centralContainer.style.width=a+"px"}t.$.bigContainer.style.width=s+"px";const r=window.getComputedStyle(t);o+=parseInt(r.borderLeftWidth,10)+parseInt(r.borderRightWidth,10),t.style.width=o+"px",t._cachedWidth=o}_validateProperties(){const e=this;e._oneDimensionSpecialCase=!1,"none"===e.type?(e.rows=1,e.columns=1):(e.rows<1&&(e.rows=1),e.columns<1&&(e.columns=1)),(e.dimensions<1||e.dimensions>32)&&(e.dimensions=1),1===e.dimensions&&(e.columns>1?(e.rows=1,!0===e.showVerticalScrollbar&&(e.showVerticalScrollbar=!1)):1!==e.rows?(e._oneDimensionSpecialCase=!0,!0===e.showHorizontalScrollbar&&(e.showHorizontalScrollbar=!1)):1===e.columns&&1===e.rows&&!0===e.showVerticalScrollbar&&(e.showVerticalScrollbar=!1)),e._validateValue(),e.showIndexDisplay&&e.$indexerContainer.removeClass("smart-hidden"),e.$.indexerContainer.style.width=e.indexerWidth+"px",e.showHorizontalScrollbar&&e.$horizontalScrollbarContainer.removeClass("smart-hidden"),e.showVerticalScrollbar&&e.$verticalScrollbarContainer.removeClass("smart-hidden")}_validateValue(){const e=this;"none"===e.type?e.value=null:null===e.value||void 0===e.value?e.value=e._returnEmptyArray():e._validateValueArrayDimensions()}_validateValueArrayDimensions(){const e=this;let t=0,n=e.value,l=!1;for(;n.constructor===Array;)if(t++,n=n[0],void 0===n){l=!0;break}if(e.dimensions>t){if(l)return void(e.value=e._returnEmptyArray());for(;e.dimensions>t;)e._addDimensionToJSArray(t),t++}}});