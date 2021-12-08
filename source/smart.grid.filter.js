
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Grid.Filter",class{addFilter(e,t,l){const i=this,a=i.columnByDataField[e];if("string"==typeof t&&(t=i.dataSource._createFilter(a.dataType,[t])),a&&a.canNotify){if(a.setProperty("filter",t),i._isUpdating)return;!1!==l&&i.refreshFilters()}}removeFilter(e,t){const l=this,i=l.columnByDataField[e];if(i&&i.canNotify){if(i.setProperty("filter",null),l._isUpdating)return;!1!==t&&l.refreshFilters()}}clearFilter(){const e=this;for(let t=0;t<e.columns.length;t++)e.columns[t].setProperty("filter",null);e.refreshFilters()}getFilteredColumns(){const e=this;if(e._filters){const t=[];for(let l=0;l<e._filters.length;l++){const i=e._filters[l];t[i[0]]=i[1],t.length++}return t}return[]}getVisibleRows(){const e=this;if(e._visibleRows)return e._visibleRows;const t=[],l=e._viewRows,i=e.editing.addNewRow.visible&&"far"!==e.editing.addNewRow.position&&"button"!==e.editing.addNewRow.displayMode?1:0;for(let e=0;e<l.length;e++){const a=l[e];a.canNotify=!1,a.visibleIndex=-1,!a.visible||!1===a.filtered&&void 0!==a.filtered||(a.visibleIndex=t.length-i,t.push(a)),a.canNotify=!0}return e._visibleRows=t,t}_refreshFilterRowEditors(){const e=this;if(e.filtering.filterRow)for(let t=0;t<e.columns.length;t++)e.columns[t]._filterEditorInitialized&&(e.columns[t]._filterEditorInitialized=!1)}refreshFilters(){const e=this,t=[];e._filters||(e._filters=[]);for(let l=0;l<e.columns.length;l++){const i=e.columns[l];i.filter&&t.push([i.dataField,i.filter])}if(e.scrollTop=0,e.closeMenu(),e.dataSource&&!e.dataSource.onFilter&&(e.dataSource.onFilter=function(){const t=e._viewRows;for(let e=0;e<t.length;e++){const l=t[e];if(l.data&&!l.addNewRow){if(!l.data.$){l.filtered=!1;continue}l.filtered=void 0===l.data.$.filtered||l.data.$.filtered}}e.refresh()}),JSON.stringify(e._filters)===JSON.stringify(t))return void(e._visibleRows=null);if(e._filters=t,e._visibleRows=null,e.dataSource&&e.dataSource.virtualDataSource)e.closeMenu(),e._virtualDataRequest("filter");else{const l=e._filterOperator||"and";e.dataSource._filter(t,l)}e.paging.enabled&&e.dataSource&&!e.dataSource.virtualDataSource&&e._refreshPagesCount();let l=[];for(let t=0;t<e.columns.length;t++){const i=e.columns[t];i.filter&&l.push(i)}let i=[];if(e._filters)for(let t=0;t<e._filters.length;t++){const l=e._filters[t];i.push({dataField:l[0],filter:l[1]})}e.summaryRow.visible&&(e._calculateSummary(),e._recycle(!1)),e.$.fireEvent("filter",{columns:l,data:i})}_handleFilterCellFocus(e){const t=this,l=e.column._filterInfo,i=l.editor,a=l.input,n=e.column,r=n.dataType;i.setAttribute("focus",""),t.filtering.filterRow.cell=e,"RANGE"===l.condition?t._openFilterCellDialog(e,(e=>{const l=e._filterInfo,i=l.editor,a=l.range,n=l.input,r=l.cell;if(a){const l=new Smart.FilterGroup;l.addFilter("and",l.createFilter(e.dataType,a.min,"GREATER_THAN_OR_EQUAL")),l.addFilter("and",l.createFilter(e.dataType,a.max,"LESS_THAN_OR_EQUAL")),t.addFilter(e.dataField,l)}else t.removeFilter(e.dataField);if(i&&n)if(n.type="",a){const t=r.getFormattedValue(a.min,e.cellsFormat),l=r.getFormattedValue(a.max,e.cellsFormat);n.value=t+" - "+l}else n.value=""})):(a.type="number"===r||"int"===r||"float"===r?"number":"",l.value&&(a.value=l.value,"date"===r&&(a.value=e.getFormattedValue(l.value,n.cellsFormat))))}_handleFilterCellBlur(e){const t=this,l=e.column._filterInfo,i=l.editor,a=l.input,n=e.column,r=l.condition;t.filtering.filterRow.cell=null,n.filterRowMenu&&n.filterRowMenu.classList.contains("open")||(""!==a.value&&"RANGE"!==r&&("date"===n.dataType?(l.value=new Date(a.value),a.value=e.getFormattedValue(l.value,n.cellsFormat)):"number"===n.dataType||"int"===n.dataType||"float"===n.dataType?(l.value=parseFloat(a.value),a.type="",a.value=e.getFormattedValue(l.value,n.cellsFormat)):l.value=a.value),"auto"===t.filtering.filterRow.applyMode&&t._handleFilterCellValue(e)),i.removeAttribute("focus")}_handleFilterCellValue(e){const t=this,l=e.column._filterInfo,i=e.column;if("RANGE"===l.condition){const e=l.range;if(e){const l=new Smart.FilterGroup;l.addFilter("and",l.createFilter(i.dataType,e.min,"GREATER_THAN_OR_EQUAL")),l.addFilter("and",l.createFilter(i.dataType,e.max,"LESS_THAN_OR_EQUAL")),t.addFilter(i.dataField,l)}else t.removeFilter(i.dataField)}else{const e=l.value;if(""!==e&&void 0!==e){const a=new Smart.FilterGroup;a.addFilter("and",a.createFilter(i.dataType,e,l.condition||("string"===i.dataType?"CONTAINS":"EQUAL"))),t.addFilter(i.dataField,a)}else t.removeFilter(i.dataField)}}_handleFilterCellKeyDown(e,t){const l=this,i=e.column._filterInfo.input;t.ctrlKey&&"a"===t.key?i.select():t.altKey&&"ArrowDown"===t.key&&l._handleFilterCellIconClick(e)}_handleFilterCellKeyUp(e,t){const l=e.column,i=l._filterInfo.input,a=this,n=l._filterInfo,r=t.key;n.value=i.value,"Escape"===r&&(n.value="",n.range=null,i.value=""),"Enter"===r||"Escape"===r||""===i.value?a._handleFilterCellValue(e):"auto"===a.filtering.filterRow.applyMode&&"Ctrl"!==r&&"Shift"!==r&&(a._filterRowTimer&&clearTimeout(a._filterRowTimer),a._filterRowTimer=setTimeout((()=>{a._handleFilterCellValue(e)}),a.filtering.filterRow.autoApplyModeDelay)),t.ctrlKey&&"a"===r&&i.select()}_handleFilterCellCheckBoxClick(e){const t=this,l=e.column,i=l._filterInfo;void 0===i.value&&(i.value=null),!0===i.value?i.value=!1:!1===i.value?i.value=null:null===i.value&&(i.value=!0);const a=e.element.querySelector(".smart-input");if(i.value?a.setAttribute("checked",i.value):null===i.value?a.setAttribute("checked","indeterminate"):a.removeAttribute("checked"),null===i.value)return void t.removeFilter(l.dataField);const n=new Smart.FilterGroup;n.addFilter("and",n.createFilter(l.dataType,!0===i.value,"EQUAL")),t.addFilter(l.dataField,n)}_handleFilterCellIconClick(e){const t=this,l=e.column;l.filterRowMenu&&l.filterRowMenu.classList.contains("open")?t._closeMenu(l.filterRowMenu):t._openColumnFilterMenu(l)}_handleFilterCalendarCellClick(e){const t=this;t._openFilterCellDialog(e,(l=>{const i=l._filterInfo,a=i.editor.querySelector("input"),n=i.value;if(a)if(n){a.value=e.getFormattedValue(n,l.cellsFormat||"");const r=new Smart.FilterGroup;r.addFilter("and",r.createFilter(l.dataType,n,i.condition||"EQUAL")),t.addFilter(l.dataField,r)}else a.value="",t.removeFilter(l.dataField)}))}_handleFilterMenuClick(e,t){const l=this,i=e._filterInfo,a=i.editor,n=i.input;if(a.firstElementChild.innerHTML=`<i class="smart-grid-icon ${t.icon} show"></i>`,"CLEAR_FILTER"===t.value&&(n.value="",a.firstElementChild.innerHTML='<i class="smart-grid-icon smart-icon-search show"></i>',i.condition=null,i.value="",i.range=null),n.type="","RANGE"===i.condition&&"RANGE"!==t.value){let e=i.range;i.value=e.min}else if("RANGE"===t.value&&"RANGE"!==i.condition&&null!==i.condition){let e=i.range;i.value&&(e={min:i.value,max:i.value},i.range=e)}if("RANGE"!==t.value){if(n.readonly=!1,"CLEAR_FILTER"!==t.value&&(i.condition=t.value),""===n.value)l.removeFilter(e.dataField);else{const t=new Smart.FilterGroup,a=i.value;t.addFilter("and",t.createFilter(e.dataType,a,i.condition||"EQUAL")),l.addFilter(e.dataField,t),n.value=i.cell.getFormattedValue(a,e.cellsFormat)}setTimeout((()=>{n.focus()}),25)}else{n.readonly=!0;const a=new Smart.FilterGroup,r=i.range;if(r){a.addFilter("and",a.createFilter(e.dataType,r.min,"GREATER_THAN_OR_EQUAL")),a.addFilter("and",a.createFilter(e.dataType,r.max,"LESS_THAN_OR_EQUAL")),l.addFilter(e.dataField,a);const t=i.cell.getFormattedValue(r.min,e.cellsFormat),o=i.cell.getFormattedValue(r.max,e.cellsFormat);n.value=t+" - "+o}else n.value="";i.condition=t.value}}_handleFilterNumberCellEditor(e,t,l){const i=t.querySelector("input"),a=t.querySelector(".up"),n=t.querySelector(".down"),r=e.column,o=this;let d=t=>{const l=r._filterInfo;if("RANGE"===l.condition)return void i.focus();let a=parseFloat(l.value);if(isNaN(a))return l.value=0,void(i.value=0);(t<0?a>i.min||""===i.min:a<i.max||""===i.max)&&(i.value=a+t,l.value=i.value,i.focus(),o._handleFilterCellValue(e))};l&&(d=l);const c=(e,t)=>{let l,i;e.onpointerdown=function(e){d(t),l&&clearTimeout(l),l=setTimeout((()=>{i&&clearInterval(i),i=setInterval((()=>{d(t)}),50)}),300),e.preventDefault(),e.stopPropagation()},e.onpointerup=()=>{i&&clearInterval(i),l&&clearTimeout(l),i=null},e.onpointerenter=()=>{i&&(clearInterval(i),i=setInterval((()=>{d(1)}),50))},e.onpointerleave=()=>{clearInterval(i)},document.addEventListener("pointerup",(()=>{i&&clearInterval(i),i=null,l&&clearTimeout(l)}))};c(a,1),c(n,-1)}_openFilterCellDialog(e,t){const l=this,i=l._dialogFilter||l._createDialog(),a=l.localize("dialogFilterHeader")+" "+e.column.label,n=i.content;i.header.innerHTML=a,i.confirm=t;let r=null,o=0;l._cellEditors||(l._cellEditors=[]),l._dialogFilter||(i.modal=!0,i.btnConfirm.innerHTML=l.localize("dialogFilterButtonConfirm"),i.btnCancel.innerHTML=l.localize("dialogFilterButtonCancel"),i.onOpen=function(){i.focus();const e=l._dialogFilterCell,t=e.column._filterInfo.range,a=e.column._filterInfo.value;if("date"===e.column.dataType){const i=n.querySelector("smart-calendar");i.locale=l.locale,setTimeout((()=>{"RANGE"===e.column._filterInfo.condition&&t?(i.selectedDates=[new Date(t.min.getTime()),new Date(t.max.getTime())],i._selectMultipleDates(new Date(t.min.getTime()),new Date(t.max.getTime()))):a&&(i.selectedDates=[new Date(a.getTime())]),i.focus()}),100),i.focus()}else{const e=n.querySelectorAll("input");e[0].focus(),t&&(e[0].value=t.min,e[1].value=t.max)}},i.onClose=function(){},i.btnCancel.onclick=function(){i.close();const e=l._dialogFilterCell;e.column._filterInfo.range=null,e.column._filterInfo.value=null,i.confirm(e.column)},i.btnClose.onclick=function(){i.close()},i.btnConfirm.onclick=function(){const e=l._dialogFilterCell;if(e.column._filterInfo.range=null,e.column._filterInfo.value=null,"date"===e.column.dataType){const t=n.querySelector("smart-calendar"),l=t.selectedDates;"range"===t.selectionMode?e.column._filterInfo.range={min:new Date(l[0].getTime()),max:new Date(l[l.length-1].getTime())}:e.column._filterInfo.value=new Date(l[0].getTime())}else{const t=n.querySelectorAll("input");let l=t[0].value,i=t[1].value;""===i&&(i=100),""===l&&(l=0),e.column._filterInfo.range={min:l,max:i}}i.confirm(e.column),i.close()},i.onkeydown=function(e){const t=e.key;"Enter"===t?i.btnConfirm.onclick():"Escape"===t&&i.close()}),n.classList.remove("smart-grid-layout"),n.innerHTML="";const d=()=>{const e=n.querySelectorAll("input");i.btnConfirm.disabled=!0,""===e[0].value&&(e[0].value=0),""===e[1].value&&(e[1].value=100),parseFloat(e[0].value)<=parseFloat(e[1].value)&&(i.btnConfirm.disabled=!1)};"date"!==e.column.dataType&&n.classList.add("smart-grid-layout");for(let t=0;t<2;t++){const i=e.column;if("date"===i.dataType){const e=document.createElement("div");"RANGE"===i._filterInfo.condition?e.innerHTML='<smart-calendar selection-mode="range"></smart-calendar>':e.innerHTML="<smart-calendar></smart-calendar>",n.appendChild(e);break}o%2==0&&(r=document.createElement("div"),r.classList.add("row"),n.appendChild(r));const a=document.createElement("div");a.classList.add("col-sm-6");const c=document.createElement("div");c.classList.add("column");const u=document.createElement("label");u.innerHTML=0===t?l.localize("dialogFilterMinLabel"):l.localize("dialogFilterMaxLabel");const s=document.createElement("div");s.classList.add("smart-grid-dialog-editor"),s.setAttribute("editor",i.dataField),s.setAttribute("template",i.editor.template),a.appendChild(c),r.appendChild(a),c.appendChild(u),c.appendChild(s),o++,s.innerHTML='<div class="smart-grid-cell-editor smart-filter-input-value smart-grid-number-input-cell-editor"><input class="smart-input" type="number"><div class="nav"><div tabindex="-1" class="up"></div><div tabindex="-1" class="down"></div></div></div>';const f=s.querySelector("input");f.onchange=()=>{d()},l._handleFilterNumberCellEditor(e,s,(e=>{let t=parseFloat(f.value);isNaN(t)?f.value=0:((e<0?t>f.min||""===f.min:t<f.max||""===f.max)&&(f.value=t+e),d())}))}l._dialogFilter=i,l._dialogFilterCell=e;const c=e.column.element.getBoundingClientRect(),u=l.offset(l);let s=c.left+window.pageXOffset-u.left,f=c.bottom+l.layout.rowMinHeight+window.pageYOffset-u.top,m=Math.max(i.offsetWidth,314);s+m>u.left+l.offsetWidth&&(s=c.left+c.width+window.pageXOffset-u.left-m),e.column.filterRowMenu&&e.column.filterRowMenu.classList.contains("open")&&l._closeMenu(e.column.filterRowMenu),i.open(s,f)}});