
<<<<<<< HEAD
/* Smart HTML Elements v5.1.0 (2019-Dec) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Export",class{exportData(a,b){const c=this,d=new Smart.Utilities.DataExporter({exportHeader:c.dataExport.header}),e=[];if(d.expandChar=c.dataExport.expandChar,d.collapseChar=c.dataExport.collapseChar,d.pageOrientation=c.dataExport.pageOrientation,d.style=c.dataExport.style,d.filterBy=c.dataExport.filterBy,d.groupBy=c.dataExport.groupBy,d.header={columns:c.columns.toArray().slice(0),columngroups:c.columnGroups.slice(0)},!c.dataExport.style){const b=window.getComputedStyle(c),f=window.getComputedStyle(0<c.columns.length&&c.columns[0].element?c.columns[0].element:c.$.columnHeader),g=window.getComputedStyle(c.$.columnHeader),h=0===c.offsetWidth||0===c.offsetHeight;if(!h){const h=a=>{function b(a){return a=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),a?"#"+c(a[1])+c(a[2])+c(a[3]).toUpperCase():"#ffffff"}function c(a){return isNaN(a)?"00":h[(a-a%16)/16]+h[a%16]}const d=a.fontSize,e=a.borderRightColor,f=a.backgroundColor,g=a.color,h=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return{borderColor:b(e),fontSize:d,fontFamily:"Helvetica",color:b(g),backgroundColor:b(f)}},i=h(b),j=h(f),k=h(g),l={height:c.$.columnHeader.offsetHeight+"px",border:"1px solid "+i.borderColor,fontFamily:k.fontFamily,fontSize:k.fontSize,color:k.color,backgroundColor:j.backgroundColor,fontWeight:"400"},m={border:"1px solid "+i.borderColor,fontFamily:i.fontFamily,fontSize:i.fontSize},n={height:c.rowMinHeight+"px"};for(let b=0;b<c.columns.length;b++){const d=c.columns[b];if(!d.allowExport)continue;if(!d.visible)continue;l[d.dataField]={textAlign:d.align,width:d.computedWidth+"px",format:d.cellsFormat||""};let f=d.cellsFormat||"";"date"===d.dataType?f="d":"dateTime"===d.dataType?f="D":"time"===d.dataType&&(f="t");const g={textAlign:d.cellsAlign,format:f};if(m[d.dataField]=g,c.dataExport.view&&-1!==["html","jpeg","pdf","png"].indexOf(a)&&(d.template||d.formatFunction))for(let a=0;a<c.rows.length;a++){const b=c.rows[a];let f=c.rows[a]["column_"+d.dataField];if(c.dataExport.viewStart&&a<c.dataExport.viewStart||c.dataExport.viewEnd&&a>c.dataExport.viewEnd)continue;if(!f||b&&b.element&&b.element.classList.contains("smart-hidden")){const a=c._rowElements[0];if(!a)continue;if(b.element=a,b.grid=c,b.render(),f=b["column_"+d.dataField],!f)continue}const h={border:f.borderColor,background:f.background,color:f.color},i=void 0===c.dataExport.viewStart?a:a-c.dataExport.viewStart;e[a]=Object.assign({},b.data),e[a][d.dataField]=f.element.textContent,g[i]=h}}0<c.appearance.alternationCount&&(n.alternationCount=c.appearance.alternationCount,n.alternationStart=c.appearance.alternationStart,n.alternationEnd=c.appearance.alternationEnd,n.alternationIndex0Color=i.color,n.alternationIndex0BackgroundColor=i.backgroundColor,n.alternationIndex1Color=i.color,n.alternationIndex1BackgroundColor="#F5F5F5"),d.style={border:"1px solid "+i.borderColor,borderCollapse:"collapse",header:l,columns:m,rows:n}}}const f=!c.rowHierarchy||c.grouping.enabled?c.rows.toArray():c.rowHierarchy;let g=[];if(c.dataExport.view)c._recyclingRows.forEach((a,b)=>!!(c.dataExport.viewStart&&b<c.dataExport.viewStart||c.dataExport.viewEnd&&b>c.dataExport.viewEnd)||void(e[b]?g.push(e[b]):g.push(a.data)));else{for(let a=0;a<f.length;a++){const b=f[a];b.visible&&(!1!==b.filtered||void 0===b.filtered)&&g.push(b.data)}f===c.rowHierarchy&&(g=c.dataSource.boundHierarchy,d.hierarchical=!0)}!c.dataExport.groupBy&&c.grouping.enabled&&c.dataSource&&c.dataSource.groupBy&&(d.groupBy=c.dataSource.groupBy&&c.dataSource.groupBy.toArray?c.dataSource.groupBy.toArray():null),c.checkLicense(!0);const h=d.exportData(g,a,c.dataExport.fileName,b);return c.dataExport.view&&c._recycle(!1),h}print(){const a=this,b=a.dataExport.fileName;a.dataExport.fileName=null;const c=a.exportData("html"),d=window.open("","","width=800,height=500"),e=d.document.open();try{e.write("<!DOCTYPE html><html><head><meta charset=\"utf-8\" /><title>"+b+"</title></head><body>"+c+"</body></html>"),e.close(),setTimeout(function(){d.print(),d.close()},100)}catch(a){}a.dataExport.fileName=b}});
=======
/* Smart HTML Elements v4.6.0 (2019-Oct) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Export",class{exportData(a){const b=this,c=new Smart.Utilities.DataExporter({exportHeader:b.dataExport.header});if(c.expandChar=b.dataExport.expandChar,c.collapseChar=b.dataExport.collapseChar,c.pageOrientation=b.dataExport.pageOrientation,c.style=b.dataExport.style,c.filterBy=b.dataExport.filterBy,c.groupBy=b.dataExport.groupBy,c.header={columns:b.columns.toArray().slice(0),columngroups:b.columnGroups.slice(0)},!b.dataExport.style){const d=window.getComputedStyle(b),e=window.getComputedStyle(0<b.columns.length&&b.columns[0].element?b.columns[0].element:b.$.columnHeader),f=window.getComputedStyle(b.$.columnHeader),g=0===b.offsetWidth||0===b.offsetHeight;if(!g){const g=a=>{function b(a){return a=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),a?"#"+c(a[1])+c(a[2])+c(a[3]).toUpperCase():"#ffffff"}function c(a){return isNaN(a)?"00":h[(a-a%16)/16]+h[a%16]}const d=a.fontSize,e=a.borderRightColor,f=a.backgroundColor,g=a.color,h=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return{borderColor:b(e),fontSize:d,fontFamily:"Helvetica",color:b(g),backgroundColor:b(f)}},h=g(d),i=g(e),j=g(f),k={height:b.$.columnHeader.offsetHeight+"px",border:"1px solid "+h.borderColor,fontFamily:j.fontFamily,fontSize:j.fontSize,color:j.color,backgroundColor:i.backgroundColor,fontWeight:"400"},l={border:"1px solid "+h.borderColor,fontFamily:h.fontFamily,fontSize:h.fontSize},m={height:b.rowMinHeight+"px"};for(let c=0;c<b.columns.length;c++){const d=b.columns[c];if(!d.allowExport)continue;if(!d.visible)continue;k[d.dataField]={textAlign:d.align,width:d.computedWidth+"px",format:d.cellsFormat||""};let e=d.cellsFormat||"";"date"===d.dataType?e="d":"dateTime"===d.dataType?e="D":"time"===d.dataType&&(e="t");const f={textAlign:d.cellsAlign,format:e};if(l[d.dataField]=f,b.dataExport.view&&-1!==["html","jpeg","pdf","png"].indexOf(a)&&(d.template||d.formatFunction))for(let a=0;a<b.rows.length;a++){const c=b.rows[a]["column_"+d.dataField];if(!c)continue;const e={};e.border=c.borderColor,e.background=c.background,e.color=c.color,f[a]=e}}0<b.appearance.alternationCount&&(m.alternationCount=b.appearance.alternationCount,m.alternationStart=b.appearance.alternationStart,m.alternationEnd=b.appearance.alternationEnd,m.alternationIndex0Color=h.color,m.alternationIndex0BackgroundColor=h.backgroundColor,m.alternationIndex1Color=h.color,m.alternationIndex1BackgroundColor="#F5F5F5"),c.style={border:"1px solid "+h.borderColor,borderCollapse:"collapse",header:k,columns:l,rows:m}}}const d=!b.rowHierarchy||b.grouping.enabled?b.rows.toArray():b.rowHierarchy;let e=[];if(b.dataExport.view)b._recyclingRows.forEach(a=>e.push(a.data));else{for(let a=0;a<d.length;a++){const b=d[a];b.visible&&(!1!==b.filtered||void 0===b.filtered)&&e.push(b.data)}d===b.rowHierarchy&&(e=b.dataSource.boundHierarchy,c.hierarchical=!0)}!b.dataExport.groupBy&&b.grouping.enabled&&b.dataSource&&b.dataSource.groupBy&&(c.groupBy=b.dataSource.groupBy&&b.dataSource.groupBy.toArray?b.dataSource.groupBy.toArray():null),b.checkLicense(!0),c.exportData(e,a,b.dataExport.fileName)}});
>>>>>>> origin/master
