
<<<<<<< HEAD
/* Smart HTML Elements v5.1.0 (2019-Dec) 
=======
/* Smart HTML Elements v4.6.0 (2019-Oct) 
>>>>>>> origin/master
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Sort",class{clearSort(){const a=this;if(!a._isSorting&&a.dataSource){a._isSorting=!0,a.dataSource.clearSort(),a._sortedColumns||(a._sortedColumns=[]);for(let b=0;b<a._sortedColumns.length;b++){const c=a._sortedColumns[b],d=a.columnByDataField[c.dataField];d&&(d.setProperty("sortOrder",null),d.setProperty("sortIndex",null))}a._sortedColumns=[];for(let b=0;b<a.dataSource.length;b++){const c=a.rows[b],d=a.dataSource[b];c&&(c.data=d,c.boundIndex=d.boundIndex)}a._recycle(),a._isSorting=!1}}getSortedColumns(){const a=this,b=[];if(a._sortedColumns)for(let c=0;c<a._sortedColumns.length;c++){const d=a._sortedColumns[c];b[d.dataField]={sortOrder:d.sortOrder,sortIndex:d.sortIndex},b.length++}return b}addSort(a,b){const c=this;c.sortBy(a,b)}removeSort(a){const b=this;b.sortBy(a,null)}_refreshSort(a){const b=this;if(b._isSorting||!a)return;const c=[],d=[],e=[];b._isSorting=!0;for(let f=0;f<a.length;f++){const g=a[f],h=b.columnByDataField[g.dataField];h&&(h.setProperty("sortOrder",g.sortOrder),c.push(g.dataField),d.push(g.sortOrder),e.push(g.dataType))}(function(){if(b.dataSource&&b.dataSource.virtualDataSource)b._virtualDataRequest("sort");else{if(b.dataSource.sortBy(c,e,d),b.dataSource.boundHierarchy)b._refreshRowHierarchy();else for(let a=0;a<b.dataSource.length;a++){const c=b.rows[a],d=b.dataSource[a];c.data=d,c.boundIndex=d.boundIndex}b._recycle()}})(),b._isSorting=!1,b._sortedColumns=a}sortBy(a,b){var c=Math.floor;const d=this,e=d.columnByDataField[a],f=[],g=[],h=[],j=!(b!==void 0);if(d._isSorting||!e)return;d._isSorting=!0,void 0===b&&(b="asc");const k=function(a){a&&a.setProperty("sortOrder",null)},i=function(){if(0<d._sortedColumns.length)for(let a=0;a<d._sortedColumns.length;a++){const b=d._sortedColumns[a],c=d.columnByDataField[b.dataField];k(c)}d._sortedColumns=[]};if(null===e)return i(),void(d._isSorting=!1);if(!d.sorting.enabled||!d.dataSource||!e.allowSort||d._sortAnimation)return void(d._isSorting=!1);k(e),d._sortedColumns||(d._sortedColumns=[]);let l="string";for(let c=0;c<d.dataSource.dataFields.length;c++){const b=d.dataSource.dataFields[c];if(b.name===a){l=b.dataType;break}}let m=!0;for(let c=0;c<d._sortedColumns.length;c++){const f=d._sortedColumns[c];if(f.dataField===a)if(m=!1,f.sortIndex=e.sortIndex,!j)f.sortOrder=b,null===b&&(d._sortedColumns.splice(c,1),k(e));else if("asc"===f.sortOrder)f.sortOrder="desc",b="desc";else if("desc"===f.sortOrder){d.sorting.sortToggleThreeStates?(d._sortedColumns.splice(c,1),k(e),b=null):(f.sortOrder="asc",b="asc");break}}m&&("one"===d.sorting.mode&&i(),null!==b&&d._sortedColumns.push({dataField:a,sortOrder:b,sortIndex:e.sortIndex,dataType:l})),e.setProperty("sortOrder",b),d._sortedColumns.sort((c,a)=>"string"==typeof c.sortIndex&&"string"==typeof a.sortIndex?0:"number"==typeof c.sortIndex&&"string"==typeof a.sortIndex?-1:"string"==typeof c.sortIndex&&"number"==typeof a.sortIndex?1:"number"==typeof c.sortIndex&&"number"==typeof a.sortIndex?c.sortIndex-a.sortIndex:void 0);for(let c=0;c<d._sortedColumns.length;c++){const a=d._sortedColumns[c];f.push(a.dataField),g.push(a.sortOrder),h.push(a.dataType)}const n=function(){if(d.dataSource&&d.dataSource.virtualDataSource)d._virtualDataRequest("sort");else{if(d.dataSource.sortBy(f,h,g),d.dataSource.boundHierarchy)d._refreshRowHierarchy();else for(let a=0;a<d.dataSource.length;a++){const b=d.rows[a],c=d.dataSource[a];b.data=c,b.boundIndex=c.boundIndex}d._recycle()}const a=[];for(let b=0;b<d._sortedColumns.length;b++){const c=d.columnByDataField[d._sortedColumns[b].dataField];c&&a.push(c)}d.$.fireEvent("sort",{columns:a,data:d._sortedColumns})};if(d.appearance.allowSortAnimation){let a=[],b=[];d.rows.canNotify=!1,d._sortAnimation=!0;const e=function(){for(let b=0;b<d._rowElements.length;b++){const c=d._rowElements[b];c.classList.remove("smart-grid-sort-animation"),d.removeTransformMoveStyle(c),0<c.offsetHeight&&a.push(c.offsetTop)}};e(),d._sortTimer=setTimeout(function(){e(),d._sortAnimation=!1,d.rows.canNotify=!0},d.appearance.sortAnimationDuration),d._sortTimer2=setTimeout(function(){n()},d.appearance.sortAnimationDuration/2);for(let e=0;e<a.length;e++){const f=d._rowElements[e];f.classList.remove("smart-grid-sort-animation"),d.removeTransformMoveStyle(f);let g=c(Math.random()*a.length-1+1);for(;b[g];)g=c(Math.random()*a.length-1+1);b[g]=!0,d.addTransformMoveStyle(f,"0ms",0,-f.offsetTop+a[g],0,.5),f.classList.add("smart-grid-sort-animation"),setTimeout(function(){d.addTransformMoveStyle(f,d.appearance.sortAnimationDuration+"ms",0,0,0,1)}),setTimeout(function(){f.classList.remove("smart-grid-sort-animation")},d.appearance.sortAnimationDuration)}}else n();d._isSorting=!1}});