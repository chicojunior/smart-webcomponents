
/* Smart UI v11.0.5 (2021-12-02) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Chart&&(Smart.Chart.prototype._moduleAnnotations=!0,Smart.Chart.prototype._renderAnnotation=function(t,e){const i=this.seriesGroups[t],a=this.renderer;if(isNaN(t))return;let s=this._get([this.getXAxisDataPointOffset(e.xValue,t),e.x]),o=this._get([this.getValueAxisDataPointOffset(e.yValue,t),e.y]),n=this._get([this.getXAxisDataPointOffset(e.xValue2,t),e.x2]),r=this._get([this.getValueAxisDataPointOffset(e.yValue2,t),e.y2]);if(i.polar||i.spider){const i=this.getPolarDataPointOffset(e.xValue,e.yValue,t);!i||isNaN(i.x)||isNaN(i.y)?(s=e.x,o=e.y):(s=i.x,o=i.y)}if(isNaN(o)||isNaN(s))return!1;if("horizontal"===i.orientation){let t=s;s=o,o=t,t=n,n=r,r=t}e.offset&&(isNaN(e.offset.x)||(s+=e.offset.x,n+=e.offset.x),isNaN(e.offset.y)||(o+=e.offset.y,r+=e.offset.y));const l=this._get([e.width,n-s]),f=this._get([e.height,r-o]);let c,h;switch(e.type){case"rect":c=a.rect(s,o,l,f);break;case"circle":c=a.rect(s,o,e.radius);break;case"line":c=a.rect(s,o,n,r);break;case"path":c=a.path(e.path)}if(c&&a.attr(c,{fill:e.fillColor,stroke:e.lineColor,opacity:this._get([e.fillOpacity,e.opacity]),"stroke-opacity":this._get([e.lineOpacity,e.opacity]),"stroke-width":e.lineWidth,"stroke-dasharray":e.dashStyle||"none"}),e.text){const t=e.text;let i=0,n=0;t.offset&&(isNaN(t.offset.x)||(i+=t.offset.x),isNaN(t.offset.y)||(n+=t.offset.y)),h=a.text(t.value,s+i,o+n,NaN,NaN,t.angle,{},!0===t.clip,t.horizontalAlignment||"center",t.verticalAlignment||"center",t.rotationPoint||"centermiddle"),a.attr(h,{fill:t.fillColor,stroke:t.lineColor,class:"smart-chart-annotation-text "+(t.class||"")})}const y=["click","mouseenter","mouseleave"],p=this;for(let t=0;t<y.length;t++){const i=y[t];c&&this.renderer.addHandler(c,i,(function(){p._raiseAnnotationEvent(e,i)})),h&&this.renderer.addHandler(h,i,(function(){p._raiseAnnotationEvent(e,i)}))}},Smart.Chart.prototype._raiseAnnotationEvent=function(t,e){this.$.fireEvent("annotation"+e.charAt(0).toUpperCase()+e.slice(1),{annotation:t})});