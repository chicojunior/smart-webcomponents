
<<<<<<< HEAD
/* Smart HTML Elements v5.1.0 (2019-Dec) 
=======
/* Smart HTML Elements v4.6.0 (2019-Oct) 
>>>>>>> origin/master
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Row",class{constructor(a){const b=this;if(a||(a={}),Object.assign(b,a),!!a){if(void 0===b.data){const c={$:{}};if(a.grid&&a.grid.dataSource){const b=a.grid.dataSource;for(let a=0;a<b.dataFields.length;a++){const d=b.dataFields?b.dataFields[a]:{};c[d.name]=""}}a.id&&(c.$.id=a.id),b.data=c}(void 0===a.$||a.$&&void 0===a.$.id)&&(a.data?(a.data.$&&a.data.$.id&&(b.id=a.data.$.id),!b.id&&(b.id=a.index)):void 0===b.id&&(b.id=a.index),void 0===b.id&&(b.id=Smart.Utilities.Core.createGUID())),void 0===b.detailHeight&&(b.grid?b.detailHeight=b.grid.rowDetail.height:b.detailHeight=200),void 0===b.height&&b.grid&&(b.height=b.grid.layout.rowMinHeight,b.grid.__autoRowHeight&&(b.height=b.grid.__autoRowHeight),b.grid.layout.rowHeight&&(b.height=b.grid.layout.rowHeight)),void 0===b.cellHeight&&(b.cellHeight=b.height),void 0===b.showDetail&&(b.showDetail=!1),void 0===b.index&&(b.index=-1),void 0===b.visibleIndex&&(b.visibleIndex=-1),void 0===b.freeze&&(b.freeze=!1),void 0===b.height&&(b.height=null),void 0===b.minHeight&&(b.minHeight=25,b.grid&&(b.minHeight=b.grid.layout.rowMinHeight)),void 0===b.checked&&(b.checked=!1),void 0===b.selected?(b.selected=!1,b.grid&&b.grid._selection.rows[b.id]&&(b.selected=!0)):b.selected&&b.grid&&(b.grid._selection.rows[b.id]=!0),void 0===b.enabled&&(b.enabled=!0),void 0===b.visible&&(b.visible=!0),void 0===b.allowCheck&&(b.allowCheck=!0),void 0===b.filtered&&(b.filtered=!0),void 0===b.allowResize&&(b.allowResize=!0),void 0===b.allowToggle&&(b.allowToggle=!0),void 0===b.allowSelect&&(b.allowSelect=!0),void 0===b.expanded&&(a.data&&void 0!==a.data.expanded?b.expanded=a.data.expanded:b.expanded=!1),b.headerCell=null,b._cells=[]}}get properties(){return["allowToggle","allowResize","allowSelect","allowCheck","canNotify","children","checked","cells","detailHeight","detailTemplate","cellHeight","expandHeight","data","enabled","expanded","filtered","freeze","grid","headerCell","height","index","id","minHeight","unbound","selected","showDetail","visible","parent","leaf","visibleIndex"]}createElement(){const a=this,b=document.createElement("smart-grid-row");return a.element=b,b._initialize(a),b}_autoSize(a){const b=this,c=b.grid;let d=c.layout.rowMinHeight;const e=b.element;if(a||(a=b),a&&(b.data=a.data),!e)return b.height;c.__autoHeightRows||(c.__autoHeightRows=[]);const f=(a,b,e)=>{if(!e||b.autoGenerated)return 0;const f=()=>{e.style.height="auto",b.cellsWrap?e.content.classList.add("wrap"):e.content.classList.add("nowrap"),a&&b&&(e.content.textContent=a.data[b.dataField]);const c=e.offsetHeight;return e.style.height="",e.content.classList.remove("wrap"),e.content.classList.remove("nowrap"),c};c.__autoHeightRows[b.dataField]||(c.__autoHeightRows[b.dataField]=[]);const g=a.data[b.dataField].length,h=c.__autoHeightRows[b.dataField][g],i=h?h:f();d=Math.max(d,i),h||(c.__autoHeightRows[b.dataField][g]=i)};for(let b=0;b<c._frozenNearColumns.length;b++){const d=c._frozenNearColumns[b],g=e.children[0].children[b];f(a,d,g)}for(let b=0;b<c._frozenFarColumns.length;b++){const d=c._frozenFarColumns[b],g=e.children[2].children[b];f(a,d,g)}for(let b=0;b<e.children[1].children.length;b++){const d=c._columnElements[b],g=d.column,h=e.children[1].children[b];f(a,g,h)}return d}autoSize(){const a=this,b=a._autoSize();a.height=b}getCell(a){const b=this,c=b.grid;if(("string"==typeof a||"number"==typeof a)&&(a=c.columnByDataField[a]),!a)return null;if(!b["column_"+a.dataField]){const d=new Smart.Grid.Cell(b,a,c);return b["column_"+a.dataField]=d,d}else{const c=b["column_"+a.dataField];return c.column=a,c}}get cells(){const a=this;return a._cells&&a.grid&&a._cells.length===a.grid.columns.length?a._cells:(a.createCells(),a._cells)}get viewCells(){const a=this,b=[];for(let c=0;c<a.grid.viewColumns.length;c++){const d=a.grid.viewColumns[c];if(!a["column_"+d.dataField]){const c=new Smart.Grid.Cell(a,d,a.grid);a["column_"+d.dataField]=c,b.push(c)}else{const c=a["column_"+d.dataField];b.push(c)}}return a._viewCells=b,b}createCells(){const a=this,b=a.grid;a._cells=[];for(let c=0;c<b.viewColumns.length;c++){const d=b.viewColumns[c];if(!d.autoGenerated)if(!a["column_"+d.dataField]){const c=new Smart.Grid.Cell(a,d,b);a["column_"+d.dataField]=c,a._cells.push(c)}else{const b=a["column_"+d.dataField];a._cells.push(b)}}}toggle(a){const b=this;b.element._handleExpandCollapse(!b.expanded,a)}expand(){const a=this;a.element._handleExpandCollapse(!0)}collapse(){const a=this;a.element._handleExpandCollapse(!1)}render(){const a=this;a.element.row=a,a.element._render()}setProperty(a,b){const c=this,d=c.getProperty(a);c[a]=b,d!==b&&(c.canNotify=!1,c.propertyChanged(a,d,b),c.canNotify=!0)}getProperty(a){const b=this;if("selected"===a){let c=!1;return b.grid._selection.cells["row"+b.id]&&(c=null),b.grid&&b.grid._selection.rows[b.id]&&(c=!0),b.grid.rows.canNotify=!1,b[a]=c,b.grid.rows.canNotify=!0,c}return b[a]}propertyChanged(a,b,c){const d=this;if("showDetail"===a){d.height=0;const a=d.element.rowDetail;if(d.grid.appearance.allowRowDetailToggleAnimation&&!d.grid.rowDetail.dialog.enabled){const b=function(a){const b=d.grid._toggledRow;b&&("transform"===a.propertyName||"height"===a.propertyName)&&e(b)},e=function(a){a.grid.$.content.style.transition="",a.element.rowDetail.removeEventListener("transitionend",b),a.element.rowDetail.removeEventListener("transitioncancel",b),a.grid._toggledRow=null,a.element.removeAttribute("has-detail"),d.grid._refresh()};d.grid._toggledRow=d,a.addEventListener("transitionend",b),a.addEventListener("transitioncancel",b),c?(d.element.setAttribute("has-detail",""),d.element.toggleDetailButton.removeAttribute("toggled"),d.element.toggleDetailButton.classList.remove("smart-animate"),setTimeout(()=>{d.element.toggleDetailButton.classList.add("smart-animate"),d.element.toggleDetailButton.setAttribute("toggled",""),d.element.setAttribute("show-detail","")}),d.element.style.height=d.cellHeight+d.detailHeight+"px",d.grid._autoHeight&&(d.grid.$.content.style.transition="0.25s height ease-in-out",d.grid.$.content.style.height=parseInt(d.grid.$.content.style.height)+d.detailHeight+"px",d.grid.$.scrollView.style.height="auto"),a.classList.remove("smart-hidden"),a.style.height!==d.detailHeight+"px"&&(a.style.height=d.detailHeight+"px"),a.style.lineHeight!==d.detailHeight+"px"&&(a.style.lineHeight=d.detailHeight+"px"),a.style.top!==d.cellHeight+"px"&&(a.style.top=d.cellHeight+"px")):(d.element.setAttribute("has-detail",""),d.element.toggleDetailButton.removeAttribute("toggled"),d.grid._autoHeight&&(d.grid.$.content.style.transition="0.25s height ease-in-out",d.grid.$.content.style.height=parseInt(d.grid.$.content.style.height)-d.detailHeight+"px",d.grid.$.scrollView.style.height="auto"),setTimeout(()=>{d.element.style.height=d.cellHeight+"px",d.element.removeAttribute("show-detail")}))}else d.grid._refresh()}if("allowCheck"===a&&d.grid._recycle(),"checked"===a&&(d.grid.checkBoxes.hasThreeStates&&d.grid._hasThreeStates(d,d),d.grid._recycle()),"selected"===a){if(c?d.grid._selection.rows[d.id]=!0:!1===c&&d.grid._selection.rows[d.id]&&delete d.grid._selection.rows[d.id],!d.element)return;d.grid._recycle()}"visible"===a&&d.grid.refresh(),"expanded"!==a||d.expandHeight||d.grid.refresh(),"height"!==a||d.expandHeight||d.cellHeight===c||(d.cellHeight=c,d.grid.refresh()),"freeze"===a&&(!0===c||"near"===c?d.grid._frozenNearRows.push(d):"far"===c?d.grid._frozenFarRows.push(d):(d.grid._frozenNearRows.splice(d.grid._frozenNearRows.indexOf(d),1),d.grid._frozenFarRows.splice(d.grid._frozenFarRows.indexOf(d),1)),d.grid._recycle())}}),Smart("smart-grid-row",class extends Smart.BaseElement{static get properties(){return{}}get isUtilityElement(){return!0}get hasStyleObserver(){return!1}addThemeClass(){}addDefaultClass(){}_initialize(a){const b=this,c=a.grid,d=c._columnElements,e=c._frozenNearColumns,f=c._frozenFarColumns,g=document.createElement("div"),h=document.createElement("div"),i=document.createElement("div"),j=document.createDocumentFragment(),k=document.createDocumentFragment(),l=document.createDocumentFragment();h.classList.add("near","smart-grid-cell-container"),g.classList.add("center","smart-grid-cell-container"),i.classList.add("far","smart-grid-cell-container"),b.row=a,a.createCells(),b.addEventListener("mouseenter",function(){if(!(c.isScrolling||c.editing.isEditing)&&(b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null),c.editing.enabled&&c.editing.commandColumn.visible&&c.editing.commandColumn.inline&&!b.commandBar)){const a=document.createElement("div"),d=c._getCommandColumnCommandsTemplate();a.classList.add("smart-grid-command-bar"),a.innerHTML=d,g.appendChild(a),requestAnimationFrame(()=>{a.classList.add("show")}),c._updateCommandColumnCommandsVisibility(a,b.row),a.onmousedown=function(a){const d=a.path;let e=null;for(let b=0;b<d.length;b++)if(d[b].classList.contains("smart-grid-command-item")){e=d[b];break}if(!e,e){const d=e.getAttribute("command");c._applyCommand(d,[b.row]),b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null),b.removeAttribute("hover"),a.stopPropagation(),a.preventDefault()}},b.commandBar=a}}),b.addEventListener("mouseleave",function(){c.isScrolling||c.editing.isEditing||b.commandBar&&(b.commandBar.classList.remove("show"),b.commandBar.addEventListener("transitionend",function(){b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null)}),b.commandBar.addEventListener("transitioncancel",function(){b.commandBar&&(b.commandBar.parentNode.removeChild(b.commandBar),b.commandBar=null)}))});for(let b=0;b<e.length;b++){const c=e[b],d=a.getCell(c),f=d.createElement();k.appendChild(f)}for(let b=0;b<f.length;b++){const c=f[b],d=a.getCell(c),e=d.createElement();l.appendChild(e)}for(let c=0;c<d.length;c++){const e=d[c],f=e.column;if(!e.parentNode||!f)break;const g=a.getCell(f),h=g.createElement();f&&f._treeColumn&&(b.toggleButton=h.toggleButton),j.appendChild(h)}h.appendChild(k),g.appendChild(j),i.appendChild(l);const m=document.createElement("div");m.classList.add("smart-grid-row-detail","smart-hidden","smart-animate");const n=document.createElement("div");n.classList.add("smart-grid-row-sub-container","smart-hidden"),b._rowFragment=document.createDocumentFragment(),b._rowFragment.appendChild(h),b._rowFragment.appendChild(g),b._rowFragment.appendChild(i),b._rowFragment.appendChild(m),b._rowFragment.appendChild(n),b.appendChild(b._rowFragment),b.cellsNearContainerElement=b.children[0],b.cellsContainerElement=b.children[1],b.cellsFarContainerElement=b.children[2],b.rowDetail=b.children[3],b.rowContainer=b.children[4],c.layout.rowHeight&&"auto"!==c.layout.rowHeight&&(b.style.height=c.layout.rowHeight+"px")}get enableShadowDOM(){return!1}_handleExpandCollapse(a,b){const c=this,d=c.row,e=d.grid;if(!d.allowToggle)return null;e._toggledRow=d;let f={row:d};b&&(f.originalEvent=b.originalEvent),e.$.fireEvent(a?"rowExpand":"rowCollapse",f);const g=function(){const a=e._toggledRow;e._refresh(),e._refreshRowHierarchy();let b=0;for(let a=0;a<e.rowHierarchy.length;a++){const c=e.rowHierarchy[a];for(let a=c.parent;a;)a.id===e._toggledRow.id&&(b+=c.height),a=a.parent}const c=e._scrollView.scrollTop,d=e._contentHeight-(a.cellHeight+a.top-c);a.expandHeight=Math.min(d,b),a.height=a.cellHeight+a.expandHeight},h=e.dataSource.virtualDataSourceOnExpand&&a&&!0!==d.data._loaded;if(!e.appearance.allowRowToggleAnimation||h)e.rows.canNotify=!1,d.expanded=a,e.rows.canNotify=!0,h&&(d.data._loaded=!0,d.data.expanded=a,e._virtualDataRequest("expand")),e._toggledRow=null,e._refresh(),h&&e.appearance.allowRowToggleAnimation&&(c.toggleButton.removeAttribute("toggled"),c.toggleButton.classList.remove("smart-animate"),setTimeout(()=>{c.toggleButton.classList.add("smart-animate"),c.toggleButton.setAttribute("toggled","")},50));else{const b=function(a){a.height=a.cellHeight,e.$.content.style.transition="",a.element.rowContainer.innerHTML="",a.element.rowContainer.classList.add("smart-hidden"),a.element.rowContainer.removeEventListener("transitionend",f),a.element.rowContainer.removeEventListener("transitioncancel",f),a.element.rowContainer.style.height="",a.element.rowContainer.style.transform="",a.element.rowContainer.style.transition="",a.element.rowContainer.classList.remove("smart-animate"),a.element.toggleButton.classList.remove("smart-animate"),e._refresh()},f=function(a){const d=e._toggledRow;c._toggleTimer=null,e._toggledRow=null,d&&("transform"===a.propertyName||"height"===a.propertyName)&&setTimeout(()=>{b(d)},50)};if(c._toggleTimer){clearTimeout(c._toggleTimer);const a=e._toggledRow;e._toggledRow=null,b(a)}c._toggleTimer=setTimeout(()=>{const b=function(){g(),e._recycle(!1),c.style.overflow="hidden",c.style.height="auto",c.style.lineHeight=d.cellHeight+"px"};a?(d.expanded=!0,b(),c.rowContainer.style.transform="scaleY(0)",c.rowContainer.style.height="0px",c.toggleButton.removeAttribute("toggled"),e._autoHeight&&(e.$.content.style.height=parseInt(e.$.content.style.height)-d.expandHeight+"px"),setTimeout(function(){c.toggleButton.classList.add("smart-animate"),c.toggleButton.setAttribute("toggled",""),c.rowContainer.addEventListener("transitionend",f),c.rowContainer.addEventListener("transitioncancel",f),e._autoHeight&&(e.$.content.style.transition="0.25s height ease-in-out",e.$.content.style.height=parseInt(e.$.content.style.height)+d.expandHeight+"px"),c.rowContainer.classList.add("smart-animate"),c.rowContainer.style.height=d.expandHeight+"px",c.rowContainer.style.transform="scaleY(1)"})):(b(),d.expanded=!1,c.rowContainer.style.transform="scaleY(0)",c.rowContainer.style.height="0px",e._autoHeight&&(e.$.content.style.height=parseInt(e.$.content.style.height)-d.expandHeight+"px",e.$.content.style.transition="",e.$.content.style.height=parseInt(e.$.content.style.height)+d.expandHeight+"px"),c.rowContainer.style.height=d.expandHeight+"px",c.rowContainer.style.transform="scaleY(1)",c.toggleButton.setAttribute("toggled",""),c.toggleButton.classList.add("smart-animate"),setTimeout(function(){c.toggleButton.removeAttribute("toggled",""),e._autoHeight&&(e.$.content.style.transition="0.25s height ease-in-out",e.$.content.style.height=parseInt(e.$.content.style.height)-d.expandHeight+"px"),c.rowContainer.addEventListener("transitionend",f),c.rowContainer.addEventListener("transitioncancel",f),c.rowContainer.classList.add("smart-animate"),c.rowContainer.style.transform="scaleY(0)",c.rowContainer.style.height="0px"},0))},50)}}_renderAddNewRow(){const a=this,b=a.row,c=b.grid,d=b.element,e=new Smart.Grid.Cell(b,c.columns[0],c);b.visible?d.classList.remove("smart-hidden"):d.classList.add("smart-hidden"),d.innerHTML="<smart-grid-cell><div>"+c.localize("addNewRow")+"</div></smart-grid-cell>",d.firstChild.firstChild.classList.add("align-center"),d.firstChild.classList.add("smart-grid-column-border-collapse"),d.firstChild.setAttribute("freeze",""),d.firstChild.setAttribute("addNewRow",""),d.firstChild.style.width="100%",0<c._scrollView.vScrollBar.offsetWidth&&(d.firstChild.style.width="calc(100% - "+(-1+c._scrollView.vScrollBar.offsetWidth)+"px)"),d.firstChild.cell=e,0<c._rowGap&&b!==c.rows[c.rows.length-1]?(a.style.marginBottom=c._rowGap+"px",parseInt(a.style.height)-c._rowGap!==b.height&&(a.style.height=b.height-c._rowGap+"px"),parseInt(a.style.lineHeight)-c._rowGap!==b.height&&(a.style.lineHeight=b.height-c._rowGap+"px")):(a.style.marginBottom="",parseInt(a.style.height)!==b.height&&(a.style.height=b.height+"px"),parseInt(a.style.lineHeight)!==b.height&&(a.style.lineHeight=b.height+"px"))}_renderEmpty(){const a=this;a.classList.add("smart-hidden")}_renderCell(a,b,c){if(!b)return void c.classList.add("smart-hidden");let d=a.getCell(b);d.element!==c&&(d._styleChanged=!0),c.cell!==d&&(c.cell.background!==d.background||c.cell.borderColor!==d.borderColor||c.cell.color!==d.color||c.cell.fontSize!==d.fontSize||c.cell.fontFamily!==d.fontFamily||c.cell.fontWeight!==d.fontWeight||c.cell.fontStyle!==d.fontStyle)&&(d._styleChanged=!0),d.element=c,c.cell=d,d.render(),b&&b.rowHeaderColumn&&(a.header=c,c.setAttribute("data-id",a.id))}_alternate(){const a=this,b=a.row,c=b.grid,d=c.appearance.alternationStart,e=0<c.appearance.alternationEnd?c.appearance.alternationEnd:1/0;if(!(0>=c.appearance.alternationCount)&&(a.removeAttribute("alternation-index"),b.visibleIndex>=d&&b.visibleIndex<=e)){const e=(b.visibleIndex-d)%c.appearance.alternationCount;a.setAttribute("alternation-index",e)}}_openRowDetailDialog(a){const b=this,c=b.row.grid,d=b.row;if(!c.rowDetail.dialog.enabled||!d.showDetail)return!1;const e=c._dialogRowDetail||c._createDialog(c.rowDetail.dialog);if(c.rowDetail.dialog.visible&&e.row!==d)return void(d.showDetail=!1);const f="{{message}}"===c.rowDetail.dialog.header?c.localize("dialogRowDetailHeader",{value:d.visibleIndex+1}):c.rowDetail.dialog.header;return c.rowDetail.dialog.visible&&c.rowDetail.dialog.row===d&&!d.showDetail?void e.close():void(e.header.innerHTML=f,e.content.innerHTML="",e.content.style.width="100%",e.content.style.height="100%",e.row=d,e.querySelector(".smart-footer").classList.add("smart-hidden"),!c._dialogRowDetail&&(e.setAttribute("tabindex",0),e.modal=!0,e.btnConfirm.innerHTML=c.localize("dialogRowDetailButtonConfirm"),e.btnCancel.innerHTML=c.localize("dialogRowDetailButtonCancel"),e.btnCancel.classList.add("smart-hidden"),e.onOpen=function(){c.rowDetail.dialog.visible=!0},e.onClose=function(){c.rowDetail.dialog.visible=!1,e.row.showDetail=!1},e.btnCancel.onclick=function(){e.close()},e.btnClose.onclick=function(){e.close()},e.btnConfirm.onclick=function(){e.close()},e.onkeydown=function(a){"Escape"===a.key&&e.close()},c._dialogRowDetail=e),e.open(),setTimeout(function(){e.focus()},100),e.content.appendChild(a))}_renderDetail(a){const b=this,c=b.row.grid,d=b.row;let e=d.id,f=d.detailTemplate||c.rowDetail.template;if(f.startsWith("#")&&(f=document.querySelector(f)),d._detail)return a.firstChild===d._detail?void(c.onRowDetailUpdated&&c.onRowDetailUpdated(d.index,d,a.firstChild)):(a.firstChild&&a.removeChild(a.firstChild),a.appendChild(d._detail),void(c.onRowDetailUpdated&&c.onRowDetailUpdated(d.index,d,a.firstChild)));if(f instanceof HTMLTemplateElement){const b=f.content.cloneNode(!0).firstElementChild;e=e.toString(),e=e.replace(/'/ig,"\\'"),e=e.replace(/"/ig,"\\\"");let c=b.outerHTML.replace(/{{value}}/ig,e).replace(/{{id}}/ig,d.id);for(let a in 0<=c.indexOf("{{value=")&&(e?(c=c.substring(0,c.indexOf("{{value="))+e+c.substring(c.indexOf("}")),c=c.replace(/}/ig,""),c=c.replace(/{/ig,"")):(c=c.replace(/{{value=/ig,""),c=c.replace(/}}/ig,""))),c="<div>"+c+"</div>",d.data)c=c.replace("{{"+a+"}}",d.data[a]);a.innerHTML!==c&&(a.innerHTML=c)}else{let b="<div>"+f.replace(/{{value}}/ig,e).replace(/{{id}}/ig,d.id)+"</div>";for(let a in d.data)b=b.replace("{{"+a+"}}",d.data[a]);a.innerHTML!==b&&(a.innerHTML=b)}c.onRowDetailInit&&c.onRowDetailInit(d.index,d,a.firstChild),c.rowDetail.dialog.enabled?b._openRowDetailDialog(a.firstChild.firstElementChild):d._detail=a.firstChild}_render(){let a=this;const b=a.row,c=b.grid,d=b.getProperty("selected");if(!1===d&&a.hasAttribute("selected")?a.removeAttribute("selected"):!0===d?a.setAttribute("selected",""):null===d&&a.setAttribute("selected","indeterminate"),a.hasAttribute("unbound")&&a.removeAttribute("unbound"),b.unbound&&a.setAttribute("unbound",""),a.removeAttribute("focus"),!c._toggledRow&&a.classList.contains("smart-animate"))return a.classList.remove("smart-animate"),a.rowContainer.innerHTML="",a.rowContainer.classList.add("smart-hidden"),c._refreshLayout(),void c._recycle();if(0===c.columns.length)return void a._renderEmpty();if(b.addNewRow)return void a._renderAddNewRow();if(c._toggledRow&&(b.id===c._toggledRow.id?a.setAttribute("toggle",""):a.hasAttribute("toggle")&&a.removeAttribute("toggle")),c._toggledRow&&c.appearance.allowRowToggleAnimation){let d=b.parent;if(!c._toggledRow.expanded&&c._toggledRow.id===b.id){const b=a.rowContainer;for(let a=0;a<b.children.length;a++){const d=b.children[a],e=d.getAttribute("data-id"),f=c.rowById[e];d.getAttribute("data-rendered")||(d.setAttribute("data-rendered",!0),f.element=d,f.render())}}for(;d;){if(d.id===c._toggledRow.id){const e=d.element.rowContainer;if(c._toggledRow.expanded){a.classList.add("smart-hidden");let d=b.createElement(c);for(let a=0;a<e.children.length;a++){const c=e.children[a];if(c.getAttribute("data-id")===b.id.toString())return void(d=c)}b.element=d,e.appendChild(d),e.classList.remove("smart-hidden"),d.row=b,a=d}break}d=d.parent}}a._alternate();const e=parseFloat(c.$.columnNearContainer.style.width),f=parseFloat(c.$.columnContainer.style.width),g=parseFloat(c.$.columnFarContainer.style.width),h=a.children[1],i=a.children[0],j=a.children[2];if(j.classList.remove("vscroll"),c.computedVerticalScrollBarVisibility&&j.classList.add("vscroll"),a.hasAttribute("group")&&a.removeAttribute("group"),a.hasAttribute("tree")&&a.removeAttribute("tree"),a.hasAttribute("level")&&a.removeAttribute("level"),a.hasAttribute("leaf")&&a.removeAttribute("leaf"),a.hasAttribute("expanded")&&a.removeAttribute("expanded"),a.hasAttribute("summary")&&a.removeAttribute("summary"),a.hasAttribute("filter")&&a.removeAttribute("filter"),null===b.filtered&&a.setAttribute("filter","indeterminate"),c.dataSource.groupBy&&0<c.dataSource.groupBy.length?(a.setAttribute("level",b.level),b.expanded&&a.setAttribute("expanded",""),void 0!==b.label&&b.level===c.dataSource.groupBy.length-1&&a.setAttribute("leaf",""),void 0===b.label?a.setAttribute("leaf",""):a.setAttribute("group",""),b.summaryRow&&a.setAttribute("summary",""),a.toggleButton&&a.toggleButton.classList.remove("smart-hidden")):c.dataSource.boundHierarchy?(a.setAttribute("level",b.level),b.expanded&&a.setAttribute("expanded",""),b.leaf&&a.setAttribute("leaf",""),b.summaryRow&&a.setAttribute("summary",""),a.toggleButton&&a.toggleButton.classList.remove("smart-hidden")):(b.canNotify=!1,b.leaf=!0,b.expanded=!1,b.summaryRow=!1,b.level=0,a.toggleButton&&a.toggleButton.classList.add("smart-hidden"),b.canNotify=!0),a.setAttribute("data-id",b.id),a.visible=b.visible,a.cellsNearContainerElement.classList.remove("smart-visibility-hidden"),a.cellsContainerElement.classList.remove("smart-visibility-hidden"),a.cellsFarContainerElement.classList.remove("smart-visibility-hidden"),a.removeAttribute("rowspan"),0<c._rowGap&&b!==c.rows[c.rows.length-1]?(a.style.marginBottom=c._rowGap+"px",parseInt(a.style.height)-c._rowGap!==b.height&&(a.style.height=b.height-c._rowGap+"px"),parseInt(a.style.lineHeight)-c._rowGap!==b.height&&(a.style.lineHeight=b.height-c._rowGap+"px")):(a.style.marginBottom="",parseInt(a.style.height)!==b.height&&(a.style.height=b.height+"px"),parseInt(a.style.lineHeight)!==b.height&&(a.style.lineHeight=b.height+"px")),h.style.left!==-c._scrollView.scrollLeft+"px"&&(h.style.left=-c._scrollView.scrollLeft+"px"),c.rowDetail.enabled){const d=a.rowDetail;a.removeAttribute("show-detail"),b.showDetail?(d.classList.remove("smart-hidden"),a.setAttribute("show-detail",""),c.rowDetail.dialog.enabled?d.classList.add("smart-hidden"):(d.style.height!==b.detailHeight+"px"&&(d.style.height=b.detailHeight+"px"),d.style.lineHeight!==b.detailHeight+"px"&&(d.style.lineHeight=b.detailHeight+"px"),d.style.top!==b.cellHeight+"px"&&(d.style.top=b.cellHeight+"px")),a._renderDetail(d)):d.classList.add("smart-hidden")}else if(a.rowDetail){const b=a.rowDetail;b.classList.add("smart-hidden")}i.classList.remove("smart-hidden"),j.classList.remove("smart-hidden"),i.style.width!==e+"px"&&(i.style.width=e+"px"),h.style.width!==f+"px"&&(h.style.width=f+"px"),j.style.width!==g+"px"&&(j.style.width=g+"px"),i.style.height=b.cellHeight+"px",h.style.height=b.cellHeight+"px",j.style.height=b.cellHeight+"px",0===g&&j.classList.add("smart-hidden"),0===e&&i.classList.add("smart-hidden"),0<e&&parseInt(e)===parseInt(c._autoGeneratedColumnsNearWidth),0<g&&parseInt(g)===parseInt(c._autoGeneratedColumnsFarWidth)&&j.classList.add("border-collapse");for(let d=0;d<c._frozenNearColumns.length;d++){const e=c._frozenNearColumns[d];let f=a.children[0].children[d];if(!f){const c=b.getCell(e);f=c.createElement(),a.children[0].appendChild(f)}a._renderCell(b,e,f)}for(let d=0;d<c._frozenFarColumns.length;d++){const e=c._frozenFarColumns[d];let f=a.children[2].children[d];if(!f){const c=b.getCell(e);f=c.createElement(),a.children[2].appendChild(f)}a._renderCell(b,e,f)}for(let d=0;d<h.children.length;d++){const e=c._columnElements[d+c._frozenNearColumns.length];if(!e){let c=a.children[1].children[d];a._renderCell(b,null,c)}}for(let d=0;d<c._columnElements.length;d++){const e=c._columnElements[d],f=e.column;if(!e.parentNode||!f){if(e&&!f){let b=a.children[1].children[d];b&&b.classList.add("smart-visibility-hidden")}continue}let g=a.children[1].children[d];if(!g){e.column||(e.column=f);const c=b.getCell(f);g=c.createElement(),a.children[1].appendChild(g)}if(e.classList.contains("smart-visibility-hidden")){g.classList.add("smart-visibility-hidden");continue}else g.classList.remove("smart-visibility-hidden");a._renderCell(b,f,g)}a.visible?a.classList.remove("smart-hidden"):a.classList.add("smart-hidden")}template(){return""}});