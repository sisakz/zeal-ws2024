(self.webpackChunkangular_io=self.webpackChunkangular_io||[]).push([["src_app_custom-elements_toc_toc_module_ts"],{4082:function(e,t,n){"use strict";n.r(t),n.d(t,{TocModule:function(){return T}});var s=n(8583),i=n(622),o=n(9765),c=n(9112),l=n(4581),a=n(6782),d=n(7574),r=n(6561);class p extends d.y{constructor(e,t=0,n=l.e){super(),this.source=e,this.delayTime=t,this.scheduler=n,(!(0,r.k)(t)||t<0)&&(this.delayTime=0),n&&"function"==typeof n.schedule||(this.scheduler=l.e)}static create(e,t=0,n=l.e){return new p(e,t,n)}static dispatch(e){const{source:t,subscriber:n}=e;return this.add(t.subscribe(n))}_subscribe(e){return this.scheduler.schedule(p.dispatch,this.delayTime,{source:this.source,subscriber:e})}}function u(e,t=0){return function(n){return n.lift(new h(e,t))}}class h{constructor(e,t){this.scheduler=e,this.delay=t}call(e,t){return new p(t,this.delay,this.scheduler).subscribe(e)}}var m=n(9761),b=n(7716),f=n(9026),g=n(6308);const x=["tocItem"];function y(e,t){1&e&&(b.TgZ(0,"div",7),b._uU(1," Contents "),b.qZA())}function E(e,t){if(1&e){const e=b.EpF();b.TgZ(0,"button",8),b.NdJ("click",function(){return b.CHM(e),b.oxw(2).toggle(!1)}),b._uU(1," Contents "),b._UZ(2,"mat-icon",9),b.qZA()}if(2&e){const e=b.oxw(2);b.uIk("aria-pressed",!e.isCollapsed),b.xp6(2),b.ekj("collapsed",e.isCollapsed)}}function v(e,t){if(1&e&&(b.TgZ(0,"li",11,12),b._UZ(2,"a",13),b.qZA()),2&e){const e=b.oxw(),t=e.$implicit,n=e.index,s=b.oxw(2);b.Tol(t.level),b.ekj("secondary","EmbeddedExpandable"===s.type&&n>=s.primaryMax)("active",n===s.activeIndex),b.s9C("title",t.title),b.xp6(2),b.Q6J("href",t.href,b.LSH)("innerHTML",t.content,b.oJD)}}function I(e,t){if(1&e&&(b.ynx(0),b.YNc(1,v,3,10,"li",10),b.BQk()),2&e){const e=t.$implicit,n=b.oxw(2);b.xp6(1),b.Q6J("ngIf","Floating"===n.type||"h1"!==e.level)}}function k(e,t){if(1&e){const e=b.EpF();b.TgZ(0,"button",14),b.NdJ("click",function(){return b.CHM(e),b.oxw(2).toggle()}),b.qZA()}if(2&e){const e=b.oxw(2);b.ekj("collapsed",e.isCollapsed),b.uIk("aria-pressed",!e.isCollapsed)}}function w(e,t){if(1&e&&(b.TgZ(0,"div",1),b.YNc(1,y,2,0,"div",2),b.YNc(2,E,3,3,"button",3),b.TgZ(3,"ul",4),b.YNc(4,I,2,1,"ng-container",5),b.qZA(),b.YNc(5,k,1,3,"button",6),b.qZA()),2&e){const e=b.oxw();b.ekj("collapsed",e.isCollapsed),b.xp6(1),b.Q6J("ngIf","EmbeddedSimple"===e.type),b.xp6(1),b.Q6J("ngIf","EmbeddedExpandable"===e.type),b.xp6(1),b.ekj("embedded","Floating"!==e.type),b.xp6(1),b.Q6J("ngForOf",e.tocList),b.xp6(1),b.Q6J("ngIf","EmbeddedExpandable"===e.type)}}let C=(()=>{class e{constructor(e,t,n){this.scrollService=e,this.tocService=n,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new o.xQ,this.primaryMax=4,this.isEmbedded=-1!==t.nativeElement.className.indexOf("embedded")}ngOnInit(){this.tocService.tocList.pipe((0,a.R)(this.onDestroy)).subscribe(e=>{this.tocList=e;const t=(n=e=>"h1"!==e.level,this.tocList.reduce((e,t)=>n(t)?e+1:e,0));var n;this.type=t>0?this.isEmbedded?t>this.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})}ngAfterViewInit(){this.isEmbedded||(0,c.aj)([this.tocService.activeItemIndex.pipe(u(l.E)),this.items.changes.pipe((0,m.O)(this.items))]).pipe((0,a.R)(this.onDestroy)).subscribe(([e,t])=>{if(this.activeIndex=e,null===e||e>=t.length)return;const n=t.toArray()[e].nativeElement,s=n.offsetParent,i=n.getBoundingClientRect(),o=s.getBoundingClientRect();i.top>=o.top&&i.bottom<=o.bottom||(s.scrollTop+=i.top-o.top-s.clientHeight/2)})}ngOnDestroy(){this.onDestroy.next()}toggle(e=!0){this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()}toTop(){this.scrollService.scrollToTop()}}return e.\u0275fac=function(t){return new(t||e)(b.Y36(f.a),b.Y36(b.SBq),b.Y36(g.I))},e.\u0275cmp=b.Xpm({type:e,selectors:[["aio-toc"]],viewQuery:function(e,t){if(1&e&&b.Gf(x,5),2&e){let e;b.iGM(e=b.CRH())&&(t.items=e)}},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&b.YNc(0,w,6,8,"div",0),2&e&&b.Q6J("ngIf","None"!==t.type)},directives:[s.O5,s.sg,i.Hw],encapsulation:2}),e})(),T=(()=>{class e{constructor(){this.customElementComponent=C}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.oAB({type:e}),e.\u0275inj=b.cJS({imports:[[s.ez,i.Ps]]}),e})()}}]);
//# sourceMappingURL=src_app_custom-elements_toc_toc_module_ts-es2017.1337522d0bd53e657011.js.map