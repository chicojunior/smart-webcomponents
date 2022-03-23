
/* Smart UI v13.1.1 (2022-03-23) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-rating",class extends Smart.BaseElement{static get properties(){return{max:{value:5,type:"number"},name:{value:"rating",type:"string"},value:{value:3,type:"number"}}}static get listeners(){return{"stars.click":"_clickHandler","stars.move":"_moveHandler","stars.mouseout":"_mouseoutHandler"}}refresh(){}attached(){this.value>this.max&&(this.value=this.max),this._updateActiveStars(this.value)}template(){return'<div id="container" role="presentation">\n                    <div id="stars" class="smart-content" role="presentation">\n                        <template>\n                            <div id="ratingStars" *items={{max}} role="presentation"><span class="rating-star" index={{item}} role="button" aria-label="Star"></span></div>\n                        </template>\n                    </div>\n                    <input class="smart-hidden" value="[[value]]" name="[[max]]"></input>\n                </div>'}propertyChangedHandler(t,e,a){switch(t){case"value":case"max":this._updateActiveStars(this.value);break;default:super.propertyChangedHandler(t,e,a)}}render(){const t=this;t.setAttribute("role","group"),t.disabled||t.setAttribute("tabindex","0"),t.$.stars.firstElementChild.setAttribute("role","presentation"),super.render()}_clickHandler(t){if(t.target.className.includes("rating-star")){const e=t.target,a=e.parentNode,s=Array.prototype.indexOf.call(a.children,e);this.value=s+1,this._updateActiveStars(this.value),this._updateHoveredStars(0)}}_moveHandler(t){const e=this,a=t=>{const e=t.getBoundingClientRect();return{left:e.left+window.scrollX,top:e.top+window.scrollY}},s=(()=>{const s=e.querySelectorAll("#ratingStars .rating-star");for(let e=0;e<s.length;e++){const r=a(s[e]);if(t.x>=r.left&&t.x<=r.left+s[e].offsetWidth)return e}})();e._updateHoveredStars(s+1)}_mouseoutHandler(){this._updateHoveredStars(0)}_updateActiveStars(t){const e=this.value,a=this.getElementsByClassName("rating-star");for(let e=0;e<a.length;e++)e<t?a[e].classList.add("active"):a[e].classList.remove("active");this.$.fireEvent("change",{value:t,oldValue:e})}getValue(){return this.value}setValue(t){this.value=t,this._updateActiveStars(this.value),this._updateHoveredStars(0)}_updateHoveredStars(t){if(Smart.Utilities.Core.isMobile)return;const e=this.getElementsByClassName("rating-star");for(let a=0;a<e.length;a++)a<t?e[a].classList.add("hover"):e[a].classList.remove("hover")}});