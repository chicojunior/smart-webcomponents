
/* Smart UI v10.0.1 (2021-08-16) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Grid.Reorder",class{reorderColumns(e,r,t=!1){const o=this;if(void 0===e||void 0===r)return;const a=o.columnByDataField[e],n=o.columnByDataField[r],i="string"==typeof e?o.columns.indexOf(a):e,d="string"==typeof r?o.columns.indexOf(n):r;"string"==typeof e&&"string"===r?a.columnGroup=n.columnGroup:o.columns[i].columnGroup=o.columns[d].columnGroup,t&&d+1<=o.columns.length?o.columns.move(i,d):o.columns.move(i,d-1)}swapColumns(e,r){const t=this;if(void 0===e||void 0===r)return;const o=t.columnByDataField[e],a=t.columnByDataField[r],n="string"==typeof e?t.columns.indexOf(o):e,i="string"==typeof r?t.columns.indexOf(a):r,d="string"==typeof e?o.columnGroup:t.columns[n].columnGroup;"string"==typeof e&&"string"===r?o.columnGroup=a.columnGroup:t.columns[n].columnGroup=t.columns[i].columnGroup,t.columns.move(n,i),"string"==typeof e&&"string"===r?a.columnGroup=d:t.columns[i-1].columnGroup=d,t.columns.move(i-1,n)}_createLine(e){const r=this;return e.classList.contains("smart-breadcrumb-item")||e.column?function(){const t=document.createElement("div"),o=r.getBoundingRect(e),a=r.getBoundingRect(r.$.columnHeader),n=r.getBoundingRect(r),i=r.$.content.offsetHeight-7-r._scrollView.hScrollBar.offsetHeight-o.top+n.top;return t.classList.add("smart-grid-drag-line"),r.rightToLeft?t.style.left=-a.left+o.left+"px":t.style.left=-a.left+o.right+"px",t.style.top=o.top-n.top+"px",t.style.height=i+"px",t.style.opacity=0,t}():function(){const t=document.createElement("div"),o=r.getBoundingRect(e);return t.classList.add("smart-grid-drag-line","row"),t.style.width=r.$.scrollView.offsetWidth-e.offsetLeft-e.row.header.offsetWidth-r._scrollView.vScrollBar.offsetWidth+"px",t.style.left=e.row.header.offsetWidth+"px",t.style.top=o.bottom-r.offsetTop+"px",t.style.opacity=0,t}()}_drag(e){const r=this,t=e.originalEvent;if(!r._dragDrop)return;let o=r._dragDrop.dragDetails.feedback;if(!o&&r._dragDrop.showFeedback){if(o=r._dragDrop.createFeedback(t),!o)return;if(r._overlay=document.createElement("div"),r._overlay.classList.add("smart-grid-overlay"),r._overlay.style.cursor="",r.$.root.appendChild(r._overlay),r._dragDrop.column)r._dragLine=r._createLine(r._dragDrop.column.element),r.$.root.appendChild(r._dragLine),requestAnimationFrame((()=>{r._dragLine&&(r._dragLine.style.opacity=1)})),r._dragDrop.feedbackLine=r._dragLine;else{const e=r._dragDrop.row;let t="<div>";for(let o=0;o<r.columns.length;o++){const a=r.columns[o];t+="<div>"+a.label+": "+e["column_"+a.dataField].value+"</div>"}r._dragDrop.items=r._rowElements,r._dragDrop.getItemCoordinates(r._rowElements),t+="</div>",o.innerHTML=t,r._dragLine=r._createLine(r._dragDrop.row.element),r.$.root.appendChild(r._dragLine),requestAnimationFrame((()=>{r._dragLine.style.opacity=1})),o.classList.add("smart-grid-row-drag-feedback"),r._dragDrop.feedbackLine=r._dragLine}}r._dragDrop.drag(e),r._dragDrop.column?r._dragColumn(e):r._dragRow(e),t.preventDefault()}_dragRow(e){const r=this,t=r._dragDrop.dragDetails,o=r._dragLine,a=e.originalEvent,n=r.getBoundingRect(r);if(e.pageY<n.top||e.pageY>n.bottom||e.pageX<n.left||e.pageX>n.right||t.target&&!t.target.row||!t.target)r._dragDrop.error(),o.style.opacity=0;else{if(r._dragDrop.getItemCoordinates(r._dragDrop.items),o.style.opacity=1,r._dragDrop.success(),!t.target)return;let a=r.getBoundingRect(t.target);o.style.width=r.$.scrollView.offsetWidth-r._dragDrop.row.offsetLeft-r._dragDrop.row.header.offsetWidth-r._scrollView.vScrollBar.offsetWidth+"px",o.style.left=r._dragDrop.row.header.offsetWidth+"px";let i=a.top-r.offsetTop-r.scrollTop;r._recyclingRows[r._recyclingRows.length-1].element===t.target&&e.pageY>n.bottom-10&&(t.before=!1),e.pageY>i+r.offsetTop+a.height-7&&(t.before=!1),o.style.top=t.before?i+"px":i+a.height-7+"px"}r.$.fireEvent("rowDragging",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.visibleIndex,data:r._dragDrop,originalEvent:a})}_dragColumn(e){const r=this,t=r._dragDrop.dragDetails,o=r.getBoundingRect(r),a=e.originalEvent;if(e.pageY<o.top||e.pageY>o.bottom||e.pageX<o.left||e.pageX>o.right?(r._dragDrop.error(),r._dragLine.style.opacity=0):r._dragLine.style.opacity=1,t.target&&r._dragDrop.feedback&&!r._dragDrop.feedback.classList.contains("error")){r._dragDrop.getItemCoordinates(r._dragDrop.items);const e=r.getBoundingRect(t.target),a=r.getBoundingRect(r.$.content);if(r._dragDrop.column){if(r._dragLine.style.opacity=1,!1===t.before?r._dragLine.style.left=-r.offsetLeft+e.right-r.scrollLeft+"px":r._dragLine.style.left=-r.offsetLeft+e.left-r.scrollLeft+"px",t.target.classList.contains("smart-breadcrumb-item"))r._dragLine.style.top=e.top-o.top-r.scrollTop+"px",r._dragLine.style.height=e.height+"px",r.$.breadcrumb.dataSource.forEach((e=>{e.value===t.item.column.dataField&&(r._dragLine.style.opacity=0,r._dragDrop.error())}));else{r._dragLine.style.top=e.top-o.top-r.scrollTop+"px";const t=r.$.content.offsetHeight-7-r._scrollView.hScrollBar.offsetHeight-e.top+a.top;r._dragLine.style.height=t+"px"}parseInt(r._dragLine.style.left)<3?r._dragLine.style.left="3px":parseInt(r._dragLine.style.left)>=r.offsetWidth-3&&(r._dragLine.style.left=r.offsetWidth-7+"px")}}else r._dragLine.style.opacity=0;r.$.fireEvent("columnDragging",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:r.columns.indexOf(r._dragDrop.column),data:r._dragDrop,originalEvent:a})}_beginRowDrag(e,r){const t=this;let o=!1;t.behavior.allowRowReorder&&r.allowReorder&&(o=!0),o&&(t.$.fireEvent("rowDragStart",{row:r,id:r.id,index:r.visibleIndex,data:null,originalEvent:e.originalEvent}).defaultPrevented||(t._dragDrop=new Smart.Utilities.DragDrop(t),t._dragDrop.capture(r.element,e),t._dragDrop.row=r,t._recycle(!1),t._dragInterval&&clearInterval(t._dragInterval),t._dragInterval=setInterval((function(){const e=t._dragDrop.dragDetails;if(!e.feedback)return;const r=parseInt(e.feedback.style.left),o=parseInt(e.feedback.style.top),a=t.getBoundingClientRect();t._dragLine&&a.left<=r&&a.left+a.width>=r&&(o>=a.top&&o<=a.top+20?t.scrollTop-=5:o>=a.top+a.height+5&&o<=a.top+a.height+20&&(t.scrollTop+=5))}),10)))}_beginDrag(e,r){const t=this;if(!r.dataField)return void t._beginRowDrag(e,r);const o=r;if(t.behavior.allowColumnReorder&&o.allowReorder&&!t.$.fireEvent("columnDragStart",{column:o,dataField:o.dataField,index:t.columns.indexOf(o),data:null,originalEvent:e.originalEvent}).defaultPrevented){t._dragDrop=new Smart.Utilities.DragDrop(t),t._dragDrop.capture(o.element,e),t._dragDrop.column=o;const r=t.columns.map((e=>e.element));t.$.breadcrumb?t._dragDrop.items=r.concat(t.$.breadcrumb._items):t._dragDrop.items=r,t._dragInterval&&clearInterval(t._dragInterval),t._dragInterval=setInterval((function(){const e=t._dragDrop.dragDetails;if(!e.feedback)return;const r=parseInt(e.feedback.style.left),o=t.getBoundingClientRect();t._dragLine&&o.left<=r&&o.left+o.width>=r&&(r>=o.left&&r<=o.left+20?t.scrollLeft-=5:r>=o.left+o.width-20&&r<=o.left+o.width&&(t.scrollLeft+=5))}),3)}}_cancelDrag(){const e=this;e._dragLine&&(e._dragLine.parentNode&&e._dragLine.parentNode.removeChild(e._dragLine),e._dragLine=null),e._dragDrop&&(e._dragDrop.removeFeedback(),e._dragDrop=null),e._dragInterval&&clearInterval(e._dragInterval),e._recycle()}_endDrag(e){const r=this;if(r._dragDrop){const t=r._dragDrop.dragDetails;if(!t.feedback||t.feedback&&t.feedback.classList.contains("error")&&!t.feedback.classList.contains("data"))return void r._cancelDrag();if(e.key&&"Escape"===e.key)return r._dragDrop.column?r.$.fireEvent("columnDragCancel",{column:t.item.column,dataField:t.item.column.dataField,index:r.columns.indexOf(r._dragDrop.column),data:r._dragDrop}):r._dragDrop.row&&r.$.fireEvent("rowDragCancel",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.row.visibleIndex,data:r._dragDrop}),void r._cancelDrag();r.beginUpdate();let o=t.target;const a=t.before;if(r._dragDrop.column){if(r.filtering.filterRow)for(let e=0;e<r.columns.length;e++)r.columns[e]._filterEditorInitialized=!1;if(o&&o.column&&"Escape"!==e.key&&!t.feedback.classList.contains("data")){if(!r.$.fireEvent("columnDragEnd",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:r.columns.indexOf(r._dragDrop.column),newIndex:r.columns.indexOf(o.column),data:r._dragDrop,originalEvent:e.originalEvent}).defaultPrevented){const t=r.columns.indexOf(r._dragDrop.column),a=r.columns.indexOf(o.column);r._dragDrop.column.columnGroup=o.column.columnGroup,r.columns.move(t,a),r.$.fireEvent("columnReorder",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:t,newIndex:a,data:r._dragDrop,originalEvent:e.originalEvent})}}else r.$.fireEvent("columnDragEnd",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:r.columns.indexOf(r._dragDrop.column),newIndex:-1,data:r._dragDrop,originalEvent:e.originalEvent});if("Escape"!==e.key&&r.$.breadcrumb){const t=r.getBoundingRect(r.$.breadcrumb);if(e.originalEvent.pageY>=t.top-r.scrollTop&&e.originalEvent.pageY<=t.bottom-r.scrollTop){const e=r.$.breadcrumb._items.indexOf(o),t=r._dragDrop.dragDetails.item.column,n=r.$.breadcrumb.dataSource.slice(0);n.splice(Math.max(0,e+(a?0:1)),0,{label:t.label,value:t.dataField}),r.$.breadcrumb.dataSource=n;const i=r.$.breadcrumb.dataSource.map((e=>e.value));r.dataSource.groupBy=i,r.refresh(!0),r.refreshFilters()}}}else if(r._dragDrop.row)if(o&&o.row&&"Escape"!==e.key&&!t.feedback.classList.contains("data")){if(!r.$.fireEvent("rowDragEnd",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.row.visibleIndex,newIndex:o.row.visibleIndex,data:r._dragDrop,originalEvent:e.originalEvent}).defaultPrevented){const a=r._dragDrop.row.visibleIndex;let n=o.row.visibleIndex;t.before||n++,a<n&&n--,r.rows.move(a,n),r.$.fireEvent("rowReorder",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:a,newIndex:n,data:r._dragDrop,originalEvent:e.originalEvent})}}else r.$.fireEvent("rowDragEnd",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.row.visibleIndex,newIndex:-1,data:r._dragDrop,originalEvent:e.originalEvent});r._cancelDrag(),r.endUpdate(),r.columnGroups&&r.columnGroups.length>0&&r._renderColumns(!0),r.paging.enabled&&r.grouping.enabled&&r._refreshPagesCount()}}});