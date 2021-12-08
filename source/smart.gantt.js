
/* Smart UI v10.0.10 (2021-08-19) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-gantt",class extends Smart.Table{static get properties(){return{animation:{value:"none",type:"string"},messages:{value:{en:{add:"Add condition",all:"All columns",apply:"Apply",between:"Between",cancel:"Cancel",clearFilter:"Clear filter",close:"Close",column:"Column:",condition:"Condition:",conditionalFormatting:"Conditional Formatting",CONTAINS:"contains",CONTAINS_CASE_SENSITIVE:"contains (case sensitive)",DOES_NOT_CONTAIN:"does not contain",DOES_NOT_CONTAIN_CASE_SENSITIVE:"does not contain (case sensitive)",EMPTY:"empty",ENDS_WITH:"ends with",ENDS_WITH_CASE_SENSITIVE:"ends with (case sensitive)",EQUAL:"equal",equal:"Equal To",EQUAL_CASE_SENSITIVE:"equal (case sensitive)",filterCondition:"Filter condition",filterPlaceholder:"Filter",firstButton:"First",fontFamily:"Font family:",fontSize:"Font size:",format:"Format:",formatColumn:"Format Column",GREATER_THAN:"greater than",GREATER_THAN_OR_EQUAL:"greater than or equal",greaterThan:"Greater Than",highlight:"Highlight",invalidValue:"Invalid value",itemsPerPage:"Items per page:",lastButton:"Last",LESS_THAN:"less than",LESS_THAN_OR_EQUAL:"less than or equal",lessThan:"Less Than",nextButton:"Next",NOT_EMPTY:"not empty",NOT_EQUAL:"not equal",NOT_NULL:"not null",notEqual:"Not Equal To",NULL:"null",ok:"OK",previousButton:"Previous",remove:"Remove condition",secondValue:"Second value:",STARTS_WITH:"starts with",STARTS_WITH_CASE_SENSITIVE:"starts with (case sensitive)",summaryPrefix:"of",text:"Text",value:"Value:",with:"with",grouping:"Group field name is not found in the dataFields collection!",invalidTicketTemplate:'The "{{property}}" property of the tickets is not an HTMLTemplate element.',unassign:"Unassign"}},type:"object",extend:!0},rowDetailTemplate:{value:'<smart-table class="smart-gantt-row-detail-table" virtualization wait></smart-table>',type:"string?"},virtualization:{readOnly:!0,value:!0,type:"boolean"}}}static get listeners(){return{"tableContainer.click":"_tableContainerClickHandler"}}template(){return'<div id="container" class="smart-container" role="presentation">\n                        <div id="header" class="smart-table-header" role="toolbar">\n                            <smart-input id="filterInput" class="underlined" animation="[[animation]]" locale="[[locale]]" right-to-left="[[rightToLeft]]" theme="[[theme]]"></smart-input>\n                            <div id="filterTemplateContainer" class="smart-table-filter-template-container smart-hidden"></div>\n                            <smart-button id="conditionalFormattingButton" class="smart-table-toolbar-button conditional-formatting" animation="[[animation]]" right-to-left="[[rightToLeft]]" theme="[[theme]]" aria-label="Conditional Formatting"></smart-button>\n                        </div>\n                        <smart-scroll-viewer style="opacity: 0.99" id="virtualizationContainer" class="smart-table-virtualization-container" right-to-left="[[rightToLeft]]" theme="[[theme]]">\n                            <table id="tableContainer" inner-h-t-m-l=\'[[innerHTML]]\' class="smart-table-container">\n                                <content></content>\n                            </table>\n                        </smart-scroll-viewer>\n                        <smart-pager id="pager" animation="[[animation]]" locale="[[locale]]" page-index="[[pageIndex]]" page-size="[[pageSize]]" pages-count="null" show-first-last-navigation-buttons show-page-size-selector show-prev-next-navigation-buttons show-summary right-to-left="[[rightToLeft]]" theme="[[theme]]"></smart-pager>\n                        <div id="loadingIndicatorContainer" class="smart-loader-container smart-hidden" aria-label="Loading">\n                            <span id="loadingIndicator" class="smart-loader" role="presentation"></span>\n                        </div>\n                    </div>'}attached(){super.attached()}detached(){super.detached()}refresh(){const e=this;if(e.__updating)return;const t=e._columns.filter((e=>e.visible)),i=e.$.tableContainer,l=i.querySelector(".smart-table-filter-row"),a=i.querySelector("tfoot"),n=document.createElement("tbody"),r=e._getFractionOfMax(),s=e.virtualization?e.$.virtualizationContainer:e.$.tableContainer.parentElement,o={top:s.scrollTop,left:s.scrollLeft};for(e.columns.canNotify=!1;i.childNodes.length>0;)i.childNodes[0].remove();e._createTableHeader(),e.isRendered||!e.onInit||e._loadingState||e.onInit(),e._createCustomHeaderRow(),e._createFooterRow(a),e._createDataRows(n),e._createFilterRow(l),e._recycleRowTickets();const d=i.querySelectorAll("th[data-field]");for(let i=0;i<t.length;i++){const l=t[i];l.headerCellElement=d[i],l.headerCellElement.onclick=function(){const t=this.dataField;e.$.fireEvent("columnClick",{dataField:t}),"none"===e.sortMode||!1===l.allowSort||"timeline"!==l.dataField&&e._preventClickSort||(e._addSortIconContainer(this),e._sortOnClick=!0,this.headerCellElement.sortIconContainerElement.classList.contains("asc")?e.sortBy(t,"desc"):this.headerCellElement.sortIconContainerElement.classList.contains("desc")?e.sortBy(t,null):e.sortBy(t,"asc"),e._sortOnClick=!1)}.bind(l)}if(e._sortColumns&&e._sortColumns.length>0)for(let t=0;t<e._sortColumns.length;t++){const i=e._sortColumns[t],l=e.columnByDataField[i.dataField];e._addSortIconContainer(l,i.direction,t+1)}e._handleAutoSizeMode(),e._handleFrozenColumnPositions(),e._refreshHorizontalScrollbar(),e.isRendered&&(e.selection&&e._updateSelectAllState(),e._setFractionOfMax(r)),[s.scrollTop,s.scrollLeft]=[o.top,o.left],e.columns.canNotify=!0}_setRowDetail(e,t){const i=this,l=t.querySelector("smart-table");if(!l)return;const a=e.data.timeline,n=i.columns,r=["name","label","status","transmission","timeline","empty","empty","unassign"];let s=[{label:"",dataField:"options"}];for(let e=0,t=n.length;e<t;e+=1){const t=n[e],l=r[e],a={width:t.width,label:""};a.dataField=l,"unassign"===l&&(a.formatFunction=e=>e.value=i.localize("unassign")||""),s.push(a)}l.dataSource=a,l.columns=s,l.rightToLeft=i.rightToLeft,l.theme=i.theme,l.wait=!1}_createElement(){this.classList.add("smart-table"),super._createElement()}_createRowDetailOnDemand(e,t,i){const l=this,a=Number(l.selection)+Number(!!l.rowDetailTemplate)+l._columns.filter((e=>e.visible)).length;e.data=Object.assign(i,{detail:!0}),e.classList.add("smart-table-row-detail"),e.removeAttribute("aria-rowindex"),e.removeAttribute("row-id"),e.hasAttribute("unused")||(e.innerHTML=`<td colspan="${a}"><div class="smart-table-detail-container">${l._applyRowDetailTemplate(t)}</div></td>`),l._setRowDetail(t,e)}_createVirtualDataRows(e){const t=this,i=t.rowDetailTemplate,l=t.selection,a=t.hasAttribute("hierarchy"),n=document.createDocumentFragment(),r=t.$.virtualizationContainer,s=t.$.tableContainer,o=t._rowHeight;t.isRendered&&(r.scrollWidth=0,r.scrollHeight=0,r.$.scrollViewerContainer.classList.remove("hscroll","vscroll"));const d=r.$.scrollViewerContainer.offsetHeight-s.firstElementChild.offsetHeight-(t.filtering&&t.filterRow?o:0)-(t.footerRow?s.lastElementChild.offsetHeight:0),c=d<5,m=t._getVirtualRecords(a,c),u=m.length;let h=a?2*d:d+3*o,f=o*u,p=0;t._rowsVirtual=m,t._rowsInDOM=[];for(let e=0;e<u;e++){const r=m[e],s=r.data;if(!r.detail){if(s.groupDataField)t._rowsInDOM.push(t._createGroupHeader(s,n));else{const e=t._createDataRow(r,n,{hierarchical:a,rowDetailTemplate:i,selection:l,virtualization:!0});t._rowsInDOM.push(e.row),e.detail&&(t._rowsInDOM.push(e.detail),p+=t._rowDetailHeight,h+=t._rowDetailHeight)}if(p+=o,!c&&p>h)break}}e.appendChild(n),t._updateState("expanded"),e.parentElement||t.$.tableContainer.insertBefore(e,t.$.tableContainer.querySelector("tfoot")),t._refreshTicketScroll(),r.refresh(),i&&(f+=t._expandedRowDetailIds.length*(t._rowDetailHeight-o));let b=Math.max(0,f-d);b>0&&r.computedHorizontalScrollBarVisibility&&(b+=r.$.horizontalScrollBar.offsetHeight),r.$.scrollViewerContentContainer.style.top=0,r.$.verticalScrollBar.max=b,t._scrollHeight=f,t._start={view:0,data:0},!c&&t._rowsInDOM.length>0&&r.$.scrollViewerContentContainer.offsetHeight<r.$.scrollViewerContainer.offsetHeight&&t._rowsInDOM[t._rowsInDOM.length-1].classList.add("last-row"),t._focusEquivalentCell()}_createDataRow(e,t,i){const l=this,a=l._columns.filter((e=>e.visible)),n=e.data,r=n.$.id,s=document.createElement("tr"),o={row:s,detail:null};let d=0;s.setAttribute("aria-rowindex",n.$.index+1),l._processAndRenderSelection(n,s,i.hierarchical),l._processAndRenderDetails(n,s,i.hierarchical),i.selection&&d++,l.rowDetailTemplate&&d++;for(let t=0;t<a.length;t++){const o=document.createElement("td"),c=a[t];o.setAttribute("data-field",c.dataField),o.setAttribute("aria-colindex",t+1+ +i.selection);let m,u=l._formatCellValue(e,c,o,"progress"===c.dataField?{completed:n[c.dataField],total:Array.isArray(n.timeline)?n.timeline.length:0}:void 0);if(c.freeze&&o.classList.add("freeze-"+("far"===c.freeze?"far":"near")),c.responsivePriority&&o.classList.add("priority-"+c.responsivePriority),!1===c.allowEdit&&(o.classList.add("no-edit"),o.setAttribute("aria-readonly",!0)),0===t&&i.hierarchical){const e=l._areChildrenFiltered(n);n.leaf||(o.classList.add("tree-cell"),m=e),n.level&&(o.classList.add("outline-level-"+Math.min(n.level,10)),!n.leaf&&e||o.classList.add("tree-leaf"))}if(i.virtualization&&c.templateElement){const e=c.templateElement+"";m&&l._setCellContent(o,u,m);const t=m?o.children[0].children[1]:o;e.indexOf("{{value}}")>=0?t.innerHTML=e.replace(/{{value}}/gi,'<div class="smart-table-cell-template">'+n[c.dataField]+"</div>"):t.innerHTML=e,c.templateElementSettings&&c.templateElementSettings(n[c.dataField],r,t.firstElementChild)}else l._setCellContent(o,u,m);l.onCellRender&&l.onCellRender(n,c.dataField,n[c.dataField],o),l._applyConditionalFormattingToCell(o,c.dataField,n.$.index),s.appendChild(o),d++}if(s.data=n,s.setAttribute("row-id",r),-1!==l._disabledSelection.indexOf(r)&&(s.removeAttribute("aria-selected"),s.classList.add("disable-select"),i.selection&&s.firstElementChild.firstElementChild.setAttribute("aria-disabled",!0)),n.expanded?(-1===l._expandedIds.indexOf(r)&&l._expandedIds.push(r),s.setAttribute("aria-expanded",!0),s.classList.add("expanded")):!1===n.expanded&&s.setAttribute("aria-expanded",!1),n.level&&l._isCollapsed(n)&&(s.setAttribute("aria-hidden",!0),s.classList.add("collapsed","smart-hidden")),t.appendChild(s),-1===l._expandedRowDetailIds.indexOf(r))return o;const c=document.createElement("tr");return c.data=Object.assign(n,{detail:!0}),c.classList.add("smart-table-row-detail"),c.innerHTML=`<td colspan="${d}"><div class="smart-table-detail-container">${l._applyRowDetailTemplate(e)}</div></td>`,l._setRowDetail(e,c),t.appendChild(c),o.detail=c,o}_createHeaderTimeline(){const e=this,t=e._timeline;if(!t||!t.element)return;const i=new Date,l=e._getTimelineScaleCount();let a=[],n=0;for(let e=0;e<l;e+=1)i.setHours(e,0,0,0),a.push({time:i.getTime(),width:50,left:n}),n+=50;t.cellObjs=a,e.$.tableContainer.style.setProperty("--smart-gantt-timeline-width",Math.max(50*l,t.scrollView.offsetWidth)+"px"),e._recycleTimeline(),e._refreshScrollButtons()}_recycleTimeline(){const e=this,t=e._timeline;if(!t||!t.element)return;const i=t.element,l=t.cellObjs,{firstCellObj:a}=e._getVisibleCellObjRange(),n=e._getVisibleCellsCount(a),r=document.createDocumentFragment(),s=i.children,o=l.indexOf(a),d=(new Date).getHours();for(;s.length>n;)s[0].remove();for(let e=0,t=n;e<t;e+=1){const t=s[e]||document.createElement("div"),i=l[o+e];if(!i)break;const a=new Date(i.time),n=t.style,c=a.getHours();n.width=i.width+"px",n.left=i.left+"px",t.date=a,t.classList.add("smart-timeline-cell"),t.setAttribute("date",a.toString()),t.setAttribute("hour",c),d===c?t.setAttribute("now",""):t.removeAttribute("now"),t.parentElement||r.appendChild(t)}r.childElementCount&&i.appendChild(r)}_refreshTickets(e,t){const i=this,l=i._timeline;if(!l||!l.cellObjs||!l.cellObjs.length)return void(t&&t.textContent);let a,n=t.firstElementChild;n&&n.classList.contains("smart-gantt-tickets")?a=n.firstElementChild:(t.innerHTML&&(t.innerHTML=""),n=document.createElement("div"),n.classList.add("smart-gantt-tickets"),t.appendChild(n));const{firstCellObj:r,lastCellObj:s}=i._getVisibleCellObjRange(),o=r.time,d=60*s.time*60*1e3-1,c=document.createDocumentFragment(),m=a?a.children:[];let u,h=l.cellObjs[0].time,f=0,[p]=0;for(let t=0,l=e.length;t<l;t+=1){const l=e[t];let a=m[t-f];if(i._validateTicketObj(l),!l||"object"!=typeof l||!l.duration){a&&(a.remove(),f++);continue}const n=h,r=n+60*(l.duration||1)*1e3;if(h=r,!u&&l.progress<100&&(u=l),o>r||d<n){a&&(a.remove(),f++);continue}const{cellStart:s,cellEnd:b}=i._getTicketCellObjRange(n,r),{left:g,width:_}=i._getTicketStyles({cellStart:s,cellEnd:b,ticketStart:n,ticketEnd:r});a||(a=document.createElement("div"),c.appendChild(a)),l.progress>=100?(a.setAttribute("completed",""),a.removeAttribute("active")):(a.removeAttribute("completed"),u===l?a.setAttribute("active",""):a.removeAttribute("active")),l.class&&(a.className=l.class),a.setAttribute("progress",l.progress),a.classList.add("smart-gantt-ticket"),i._setTicketTemplate(a,l),i._setTicketProggressBar(a,l),a.style.left=g+"px",a.style.width=_+"px",p=g+_}c.childElementCount&&(a||(a=document.createElement("div"),a.classList.add("smart-gantt-ticket-container"),n.appendChild(a)),a.appendChild(c)),a.style.setProperty("--smart-gantt-ticket-drop-zone-left",p+"px"),a.style.setProperty("--smart-gantt-ticket-drop-zone-width",a.offsetWidth-p+"px"),n.scrollLeft=l.scrollView.scrollLeft}_getTicketStyles(e){const{cellStart:t,cellEnd:i,ticketStart:l,ticketEnd:a}=e,n=t.width,r=t.time,s=r+36e5,o=i.time,d=o+36e5,c=t.left+(l-r)/(s-r)*n;return{left:c,width:i.left+(a-o)/(d-o)*n-c}}_setTicketProggressBar(e,t){const i=t.progress,l=e.firstElementChild;l&&l.classList.contains("smart-gantt-ticket-progress-thumb")&&i&&100!==i&&e.hasAttribute("active")&&(l.style[this.rightToLeft?"right":"left"]=(Math.min(100,Math.max(0,i))||0)+"%")}_setTicketTemplate(e,t){const i=this,l=t.label||"",a=e.children[1];let n=t.template;if(a&&a.classList.contains("smart-gantt-ticket-task-label")){if(!n)return void(a.textContent=l)}else if(e.innerHTML=!e.hasAttribute("active")||e.hasAttribute("completed")?`</div><div class="smart-gantt-ticket-content">${l}</div>`:`<div class="smart-gantt-ticket-progress-thumb"></div><div class="smart-gantt-ticket-content">${l}</div>`,!n)return;if("function"==typeof n)return n.call(i,a,t),void delete i._ticketTemplateBindings;if("string"==typeof n&&(n=document.getElementById(n)),!("content"in document.createElement("template")))return i.error(i.localize("htmlTemplateNotSuported",{elementType:i.nodeName.toLowerCase()})),void delete i._ticketTemplateBindings;if(null===n||!("content"in n))return i.error(i.localize("invalidTicketTemplate",{elementType:i.nodeName.toLowerCase(),property:"template"})),void delete i._ticketTemplateBindings;i._ticketTemplateBindings||(i._ticketTemplateBindings={}),a.innerHTML="";let r,s=i._ticketTemplateBindings;const o=document.importNode(n.content,!0).childNodes;s&&(r=s);for(let e=0;e<o.length;e++){let i=o[e].outerHTML;if(i){if(!s){const e=/{{\s*\w*\s*}}/gm;if(e.test(i)){const t=i.match(e);r||(r=[]),t&&t.forEach((e=>{r.includes(e)||r.push(e)}))}}if(r)for(let e=0;e<r.length;e++){const l=r[e];i=i.replace(l,t[l.replace(/{{|}}/gm,"").trim()]||"")}a.innerHTML+=i}}r&&(i._ticketTemplateBindings=r)}_validateTicketObj(e){if("object"!=typeof e)return;const t=e.class,i=e.duration,l=e.progress,a=e.delay;t&&(e.class="string"!=typeof t?"":t),e.duration="number"!=typeof i||isNaN(i)?0:i,e.progress="number"!=typeof l||isNaN(l)?parseFloat(l.toFixed(2)):l,a&&(e.delay="number"!=typeof a||isNaN(a)?0:parseInt(a))}_setCellContent(e,t,i){const l=this;if(t instanceof HTMLElement==1){for(;e.childNodes.length>0;)e.childNodes[0].remove();if(i){const i=document.createElement("div");i.innerHTML='<div class="hierarchy-arrow smart-arrow smart-arrow-down" role="button" aria-label="Toggle row"></div><div></div>',i.children[1].appendChild(t),e.appendChild(i)}else e.appendChild(t)}else if(i)e.innerHTML=t=`<div>\n                                                <div class="hierarchy-arrow smart-arrow smart-arrow-down" role="button" aria-label="Toggle row"></div>\n                                                <div>${t}</div>\n                                            </div>`;else if("string"==typeof t&&t.indexOf(">")>=0)if(/<.+?>/.test(t)||/&\S+;/.test(t)){if(e._content===t)return;e.innerHTML=t,e._content=t}else e.textContent!==t&&(e.textContent=t);else"timeline"===e.getAttribute("data-field")?(Array.isArray(t)||(t=[t]),l._refreshTickets(t,e)):e.textContent!==t&&("object"==typeof t&&"progress"===e.getAttribute("data-field")?e.textContent=`${t.completed}/${t.total}`:e.textContent=t)}_getTicketCellObjRange(e,t){const i=this._timeline;let l,a;if(!i||!i.cellObjs||!i.cellObjs.length)return{cellStart:l,cellEnd:a};const n=i.cellObjs;for(let i=0,r=n.length;i<r;i+=1){const r=n[i],s=r.time,o=s+36e5;if(!l&&e>=s&&e<o&&(l=r),!a&&t>=s&&t<=o&&(a=r),l&&a)break}return l&&!a&&(a=n[n.length-1]),{cellStart:l,cellEnd:a}}_getVisibleCellObjRange(){const e=this._timeline;let t,i;if(!e)return{firstCellObj:t,lastCellObj:i};const l=e.cellObjs;if(!l)return{firstCellObj:t,lastCellObj:i};const[a,n]=["left","width"],r=e.scrollView.offsetWidth,s=Math.abs(e.scrollView.scrollLeft);for(let e=0;e<l.length;e++){const o=l[e];if(!t&&o[a]+o[n]>=s&&(t=o),o[a]+o[n]>=s+r&&(i=o),t&&i)break}return i||(i=l[l.length-1]),!t&&i&&(t=s>i[a]?i:l[0]),{firstCellObj:t,lastCellObj:i}}_getVisibleCellsCount(e){const t=this,i=t._timeline;if(!i||!i.element)return;const l=i.cellObjs;if(!l)return 0;e||({firstCellObj:e}=t._getVisibleCellObjRange());const[a,n]=["left","width"],r=i.scrollView.scrollLeft,s=Math.abs(r||0);if(!e)return 0;const o=i.scrollView.offsetWidth,d=1-(e[a]+e[n]-s)/l[0][n];return isNaN(d)||!isFinite(d)?0:Math.min(l.length,Math.ceil(parseFloat((o/e[n]+d).toFixed(2))))}_getTimelineScaleCount(){return 24}_createTableHeader(){const e=this,t=e.selection,i=document.createElement("thead"),l=e._columns.filter((e=>e.visible)),a=e._getColumnHeaderStructure(),n=window.innerWidth,r={};for(let s=0;s<a;s++){const o=document.createElement("tr"),d=document.createDocumentFragment();t&&(o.innerHTML=s<a-1?'<th class="empty"></th>':'<th class="smart-table-select-all freeze-near" scope="col" aria-colindex="1"><div role="checkbox" aria-checked="false" aria-label="Toggle selection of all rows"></div></th>'),e.rowDetailTemplate&&(o.innerHTML+='<th class="smart-table-detail-col freeze-near" aria-colindex="1"></th>'),s<a-1&&o.classList.add("column-groups-header");for(let i=0;i<l.length;i++){const o=l[i];if(0===s&&(o.width&&isNaN(parseFloat(o.width))&&delete o.width,o.responsivePriority&&("number"!=typeof o.responsivePriority&&(o.responsivePriority=1),o.responsivePriority=Math.max(Math.min(Math.round(o.responsivePriority),5),1),a>1&&(r[i]=e._isColumnHidden(o.responsivePriority,n)))),s<a-1){if(r[i])continue;const t=l[i],a=t.headerStructure[s];if(i>0){let r=i-1,o=l[r];for(;o&&e._isColumnHidden(o.responsivePriority,n);)r--,o=l[r];if(o&&a===o.headerStructure[s]&&e._areColumnsWithSameFreezeSettings(t,o))continue}const o=document.createElement("th");if(o.includes=[t],i<l.length-1){let r=1,d=i+1,c=l[d];for(;c;){if(!e._isColumnHidden(c.responsivePriority,n)){if(a!==c.headerStructure[s]||!e._areColumnsWithSameFreezeSettings(t,c))break;r++,o.includes.push(c)}d++,c=l[d]}o.colSpan=r}0!==s&&t.headerStructure[s-1]===a||(o.textContent=a),o.includes.forEach((e=>e.thHierarchy[s]=o)),o.classList.add("column-header"),t.freeze&&o.classList.add("freeze-"+("far"===t.freeze?"far":"near")),d.appendChild(o)}else e._setupColumnHeaderCell(t,d,i,o)}o.appendChild(d),i.appendChild(o)}if(e.$.tableContainer.appendChild(i),e._createHeaderTimeline(),"default"===e.columnSizeMode){for(let t=0;t<e.columns.length;t++){const l=e.columns[t];if(!l.width){const t=i.querySelector('[data-field="'+l.dataField+'"]');t&&t.offsetWidth<5&&(t.style.width=parseInt(e.columnMinWidth)+"px")}}if(t){const t=e.columns.filter((e=>e.visible));if(1===t.length){const e=t[0],l=i.querySelector('[data-field="'+e.dataField+'"]');l&&(l.style.width="")}}}}_handleTimelineButonClick(e,t=20){const i=this,l=i._timeline;let a;if(!e||!l)return;const n=i._timeline.scrollView;e instanceof Smart.RepeatButton&&(a=t*(e.hasAttribute("prev")?-1:1)),n.scrollLeft+=i.rightToLeft?-1*a:a,i._recycleTimeline(),i._refreshScrollButtons(),i._recycleRowTickets()}_refreshScrollButtons(){const e=this;if(!e._timeline)return;const t=e._timeline.scrollView,i=e._timeline.buttons;if(!t||!i)return;const l=t.scrollLeft,a=i.prev,n=i.next;a&&(a.disabled=!l),n&&(n.disabled=t.offsetWidth+Math.abs(l)===t.scrollWidth)}_processAndRenderDetails(e,t,i,l){if(!this.rowDetailTemplate)return;let a,n;const r=this._expandedRowDetailIds.indexOf(e.$.id)>-1;l?(a=t.firstElementChild,n=a.firstElementChild):(a=document.createElement("td"),n=document.createElement("div")),n.className="detail-checkbox",n.setAttribute("role","checkbox"),n.setAttribute("aria-checked",r),n.setAttribute("aria-label","Toggle row selection"),a.className="smart-table-detail-row freeze-near"+(r?" selected":""),a.setAttribute("aria-colindex",1),l||(a.appendChild(n),t.appendChild(a)),t.setAttribute("aria-expanded",r)}_setupColumnHeaderCell(e,t,i,l){const a=this,n=document.createElement("th");if(n.setAttribute("aria-colindex",i+1+ +e),l.width?n.style.width=a._getColumnWidth(l.width,!0):l._manualWidth&&(l._isResponsive?n.style.width=l._manualPercentageWidth+"%":n.style.width=l._manualWidth+"px"),1!==a._columns.length&&l.allowResize||n.setAttribute("locked",""),l.freeze&&n.classList.add("freeze-"+("far"===l.freeze?"far":"near")),l.responsivePriority&&n.classList.add("priority-"+l.responsivePriority),n.setAttribute("data-field",l.dataField),"timeline"===l.dataField){let e=a._timeline;if(n.innerHTML='<div class="smart-gantt-timeline-column">\n                                <smart-repeat-button class="smart-timeline-button" prev></smart-repeat-button>\n                                    <div class="smart-timeline-container">\n                                        <div class="smart-timeline"></div>\n                                    </div>\n                                <smart-repeat-button class="smart-timeline-button" next></smart-repeat-button>\n                             </div>',e||(e=a._timeline={}),!e.element){const t=n.querySelectorAll(".smart-timeline-button[prev], .smart-timeline, .smart-timeline-button[next]");e.element=t[1],e.scrollView=t[1].parentElement,e.buttons={prev:t[0],next:t[2]}}}else n.innerHTML=`<div class="wrapper" role="presentation"><div class="label">${l.label}</div></div>`;a.onColumnRender&&a.onColumnRender(l.dataField,n),t.appendChild(n)}_tableContainerClickHandler(e){const t=this,i=t.isInShadowDOM?e.composedPath()[0]:e.target;if(!i.closest)return;const l=i.closest(".smart-timeline-button");if(l)return void t._handleTimelineButonClick(l);if(t._editing||!t.$.tableContainer.contains(i))return;const a=i.closest("tbody tr[row-id], tfoot tr.grand-total");if(a){const l=i.closest("td");if(i.classList.contains("hierarchy-arrow")){const e=t.animation;return t.virtualization&&(t._animation="none"),t._hierarchyArrowClickHandler(a,l),void(t.virtualization&&(t._animation=e))}const n=a.getAttribute("row-id");let r;n&&(r=t.rowById?t.rowById[n].data:t.rows.dataItemById[n]);const s=r?r.$.id:void 0,o=l?l.getAttribute("data-field"):void 0;if(!r&&a.classList.contains("grand-total")&&(r=a.data),void 0!==o&&t.$.fireEvent("cellClick",{id:n,row:r,dataField:o,value:r[o],originalEvent:e}),t._toggleSelection(a,r,e,i),t.editing||t.drillDown){if(!o||l.classList.contains("no-edit"))return;clearTimeout(t._dblclickObject.timeout),t._dblclickObject.numberOfClicks++,2===t._dblclickObject.numberOfClicks?(t._dblclickObject.numberOfClicks=0,t._beginEdit({rowElement:a,cell:l,dataField:o})):t._dblclickObject.timeout=setTimeout((function(){t._dblclickObject.numberOfClicks=0}),300)}return void(t.rowDetailTemplate&&e.target.closest(".detail-checkbox")&&l.classList.contains("smart-table-detail-row")&&t._toggleRowDetail(a,s))}const n=i.closest(".smart-table-select-all");if(n){if("one"===t.selectionMode)return;return void t._selectAllCheckboxClickHandler(n)}const r=i.closest(".smart-table-filter-row smart-button");if(r){const e=r.parentElement.firstElementChild,i=r.parentElement.children[1];return e.value="",-1!==["EMPTY","NOT_EMPTY","NULL","NOT_NULL"].indexOf(i.$.input.dataValue)&&(i.value=t.localize("text"===e.type?"CONTAINS":"EQUAL"),delete i.$.input.dataValue),void t._applyRowFilters()}}_toggleRowDetail(e,t){const i=e.nextElementSibling,l=e.querySelector(".detail-checkbox");l&&l.setAttribute("aria-checked",!i||!i.classList.contains("smart-table-row-detail")),this._toggleRowDetailVirtualization(e,t)}_refreshTicketScroll(){const e=this,t=e._timeline,i=e.columns.toArray().findIndex((e=>"timeline"===e.dataField));if(i<0||!t)return;const l=e._rowsInDOM,a=Number(e.selection),n=Number(!!e.rowDetailTemplate);for(let e=0,r=l.length;e<r;e+=1){const r=l[e].children[i+a+n];r&&"timeline"===r.getAttribute("data-field")&&(r.firstElementChild.scrollLeft=t.scrollView.scrollLeft)}}_resizeHandler(){const e=this;clearTimeout(e._resizeTimeout);const t=()=>{if(Smart.Utilities.Core.Browser.Firefox&&e.virtualization){const t=e.$.virtualizationContainer.$.verticalScrollBar.value;e._onVerticalChange({detail:{value:t}},!0)}};t(),e._resizeTimeout=setTimeout((function(){if(e.columnGroups&&e._columns.some((e=>e.responsivePriority&&e.responsivePriority>1)))return void e.refresh();e._recycleTimeline(),e._refreshScrollButtons(),e._recycleRowTickets();const i=e.offsetWidth,l=e.offsetHeight;if(e.virtualization&&e._cachedHeight!==l){const a=e._getFractionOfMax();return e._refreshDataRows(),e._setFractionOfMax(a),e._cachedWidth=i,e._cachedHeight=l,void t()}e._handleAutoSizeMode(),e._handleFrozenColumnPositions(),e._refreshHorizontalScrollbar(),e._cachedWidth=i,e._cachedHeight=l,t()}),75)}_recycleRowTickets(){const e=this,t=e.columns.toArray().findIndex((e=>"timeline"===e.dataField));if(t<0)return;const i=e._rowsInDOM,l=e.columns[t],a=Number(e.selection),n=Number(!!e.rowDetailTemplate);for(let r=0,s=i.length;r<s;r+=1){const s=i[r],o=i[r].children[t+a+n];o&&"timeline"===o.getAttribute("data-field")&&e._refreshTickets(e._formatCellValue(s,l,o),o)}}_updateVisibleRow(e,t,i){const l=this,a=l._columns.filter((e=>e.visible));if(!a.length)return;const n=l._rowsVirtual[t],r=n.data,s=r.$.id,o=Number(i.selection),d=Number(!!l.rowDetailTemplate),c=!r.groupDataField&&e.firstElementChild&&!e.firstElementChild.classList.contains("group-header")&&!n.detail&&!e.classList.contains("smart-table-row-detail")&&e.childElementCount>1;if(e.className="",c){const t=e.attributes;for(;t.length>0;)e.removeAttribute(t[0].name)}else e.innerHTML="";if(r.groupDataField)l._createGroupHeader(r,void 0,e);else if(n.detail)l._createRowDetailOnDemand(e,n,r);else{e.setAttribute("aria-rowindex",r.$.index+1),l._processAndRenderSelection(r,e,i.hierarchical,c),l._processAndRenderDetails(r,e,i.hierarchical,c),e.data=r,e.setAttribute("row-id",s);for(let t=0;t<a.length;t++){const m=a[t];let u=c?e.children[t+o+d]:document.createElement("td"),h=!1;if(u&&(l.grouping&&!r.groupDataField||l.dataSource&&l.dataSource.groupBy&&l.dataSource.groupBy.length>0)&&u.removeAttribute("colspan"),!u){if(!c)continue;u=document.createElement("td"),h=!0,e.appendChild(u)}c&&(u.className=""),u.setAttribute("data-field",m.dataField),u.setAttribute("aria-colindex",t+1+o+d);let f,p=l._formatCellValue(n,m,u,"progress"===m.dataField?{completed:r[m.dataField],total:Array.isArray(r.timeline)?r.timeline.length:0}:void 0);if(h&&l._setCellContent(u,p,f),m.freeze&&u.classList.add("freeze-"+("far"===m.freeze?"far":"near")),m.responsivePriority&&u.classList.add("priority-"+m.responsivePriority),!1===m.allowEdit?(u.classList.add("no-edit"),u.setAttribute("aria-readonly",!0)):u.removeAttribute("aria-readonly"),0===t&&i.hierarchical){const e=l._areChildrenFiltered(r);r.leaf||(u.classList.add("tree-cell"),f=e),r.level&&(u.classList.add("outline-level-"+Math.min(r.level,10)),!r.leaf&&e||u.classList.add("tree-leaf"))}if(m.templateElement){if(h&&l.grouping){const e=m.templateElement+"",t=u;e.indexOf("{{value}}")>=0?t.innerHTML=e.replace(/{{value}}/gi,'<div class="smart-table-cell-template">'+r[m.dataField]+"</div>"):t.innerHTML=e}else if(i.hierarchical&&l.grouping&&r.leaf){const e=m.templateElement+"",t=u;if((!t.firstElementChild||!t.firstElementChild.hasAttribute("ng-version"))&&t.firstElementChild&&!t.firstElementChild.classList.contains(".smart-table-cell-template")){const i=t.innerHTML;e.substring(e.lastIndexOf("</"))!==i.substring(i.lastIndexOf("</"))&&(e.indexOf("{{value}}")>=0?t.innerHTML=e.replace(/{{value}}/gi,'<div class="smart-table-cell-template">'+r[m.dataField]+"</div>"):t.innerHTML=e)}}if(f&&!u.querySelector(".hierarchy-arrow")){l._setCellContent(u,p,f);const e=u.children[0].children[1],t=m.templateElement+"";t.indexOf("{{value}}")>=0?e.innerHTML=t.replace(/{{value}}/gi,'<div class="smart-table-cell-template">'+r[m.dataField]+"</div>"):e.innerHTML=t}else if(i.hierarchical&&!l.grouping&&r.leaf){const e=u;if(!e.firstElementChild||!e.firstElementChild.hasAttribute("ng-version")){l._setCellContent(u,p,!1);const t=m.templateElement+"";t.indexOf("{{value}}")>=0?e.innerHTML=t.replace(/{{value}}/gi,'<div class="smart-table-cell-template">'+r[m.dataField]+"</div>"):e.innerHTML=t}}if(!c){const e=m.templateElement+"",t=f?u.children[0].children[1]:u;e.indexOf("{{value}}")>=0?t.innerHTML=e.replace(/{{value}}/gi,'<div class="smart-table-cell-template">'+r[m.dataField]+"</div>"):t.innerHTML=e}let e=f?u.children[0].children[1].firstElementChild:u.firstElementChild;if(!e&&i.hierarchical){l._setCellContent(u,p,!1);const t=u,i=m.templateElement+"";i.indexOf("{{value}}")>=0?t.innerHTML=i.replace(/{{value}}/gi,'<div class="smart-table-cell-template">'+r[m.dataField]+"</div>"):t.innerHTML=i,e=f?u.children[0].children[1].firstElementChild:u.firstElementChild}m.templateElementSettings?m.templateElementSettings(r[m.dataField],s,e):m.templateElement.indexOf("{{value}}")>=0&&(u.querySelector(".smart-table-cell-template").textContent=r[m.dataField])}else m.formatFunction,l._setCellContent(u,p,f);l.onCellRender&&l.onCellRender(r,m.dataField,r[m.dataField],u),l._applyConditionalFormattingToCell(u,m.dataField,r.$.index),c||e.appendChild(u)}-1!==l._disabledSelection.indexOf(s)&&(e.removeAttribute("aria-selected"),e.classList.add("disable-select"),i.selection&&e.firstElementChild.firstElementChild.setAttribute("aria-disabled",!0)),r.expanded?(-1===l._expandedIds.indexOf(s)&&l._expandedIds.push(s),e.setAttribute("aria-expanded",!0),e.classList.add("expanded")):!1===r.expanded&&e.setAttribute("aria-expanded",!1),r.level&&l._isCollapsed(r)&&(e.setAttribute("aria-hidden",!0),e.classList.add("collapsed","smart-hidden"))}}});