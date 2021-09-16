"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[5557],{85557:function(t,e,r){r.r(e),r.d(e,{SortExamplesModule:function(){return l},SortHarnessExample:function(){return h},SortOverviewExample:function(){return n}});var i=r(38583),a=r(37716),s=r(11494);function o(t,e){if(1&t&&(a.TgZ(0,"tr"),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.TgZ(5,"td"),a._uU(6),a.qZA(),a.TgZ(7,"td"),a._uU(8),a.qZA(),a.TgZ(9,"td"),a._uU(10),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(2),a.Oqu(t.name),a.xp6(2),a.Oqu(t.calories),a.xp6(2),a.Oqu(t.fat),a.xp6(2),a.Oqu(t.carbs),a.xp6(2),a.Oqu(t.protein)}}let n=(()=>{class t{constructor(){this.desserts=[{name:"Frozen yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:4,carbs:67,protein:4},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:4}],this.sortedData=this.desserts.slice()}sortData(t){const e=this.desserts.slice();this.sortedData=t.active&&""!==t.direction?e.sort((e,r)=>{const i="asc"===t.direction;switch(t.active){case"name":return c(e.name,r.name,i);case"calories":return c(e.calories,r.calories,i);case"fat":return c(e.fat,r.fat,i);case"carbs":return c(e.carbs,r.carbs,i);case"protein":return c(e.protein,r.protein,i);default:return 0}}):e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["sort-overview-example"]],decls:13,vars:1,consts:[["matSort","",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","calories"],["mat-sort-header","fat"],["mat-sort-header","carbs"],["mat-sort-header","protein"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(a.TgZ(0,"table",0),a.NdJ("matSortChange",function(t){return e.sortData(t)}),a.TgZ(1,"tr"),a.TgZ(2,"th",1),a._uU(3,"Dessert (100g)"),a.qZA(),a.TgZ(4,"th",2),a._uU(5,"Calories"),a.qZA(),a.TgZ(6,"th",3),a._uU(7,"Fat (g)"),a.qZA(),a.TgZ(8,"th",4),a._uU(9,"Carbs (g)"),a.qZA(),a.TgZ(10,"th",5),a._uU(11,"Protein (g)"),a.qZA(),a.qZA(),a.YNc(12,o,11,5,"tr",6),a.qZA()),2&t&&(a.xp6(12),a.Q6J("ngForOf",e.sortedData))},directives:[s.YE,s.nU,i.sg],styles:[".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"]}),t})();function c(t,e,r){return(t<e?-1:1)*(r?1:-1)}function d(t,e){if(1&t&&(a.TgZ(0,"tr"),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.TgZ(5,"td"),a._uU(6),a.qZA(),a.TgZ(7,"td"),a._uU(8),a.qZA(),a.TgZ(9,"td"),a._uU(10),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(2),a.Oqu(t.name),a.xp6(2),a.Oqu(t.calories),a.xp6(2),a.Oqu(t.fat),a.xp6(2),a.Oqu(t.carbs),a.xp6(2),a.Oqu(t.protein)}}let h=(()=>{class t{constructor(){this.disableThirdHeader=!1,this.desserts=[{name:"Frozen yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:4,carbs:67,protein:4},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:4}],this.sortedData=this.desserts.slice()}sortData(t){const e=this.desserts.slice();this.sortedData=t.active&&""!==t.direction?e.sort((e,r)=>(e[t.active]<r[t.active]?-1:1)*("asc"===t.direction?1:-1)):e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["sort-harness-example"]],decls:13,vars:2,consts:[["matSort","",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","calories"],["mat-sort-header","fat",3,"disabled"],["mat-sort-header","carbs"],["mat-sort-header","protein"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(a.TgZ(0,"table",0),a.NdJ("matSortChange",function(t){return e.sortData(t)}),a.TgZ(1,"tr"),a.TgZ(2,"th",1),a._uU(3,"Dessert"),a.qZA(),a.TgZ(4,"th",2),a._uU(5,"Calories"),a.qZA(),a.TgZ(6,"th",3),a._uU(7,"Fat"),a.qZA(),a.TgZ(8,"th",4),a._uU(9,"Carbs"),a.qZA(),a.TgZ(10,"th",5),a._uU(11,"Protein"),a.qZA(),a.qZA(),a.YNc(12,d,11,5,"tr",6),a.qZA()),2&t&&(a.xp6(6),a.Q6J("disabled",e.disableThirdHeader),a.xp6(6),a.Q6J("ngForOf",e.sortedData))},directives:[s.YE,s.nU,i.sg],encapsulation:2}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,s.JX]]}),t})()},11494:function(t,e,r){r.d(e,{YE:function(){return f},nU:function(){return Z},JX:function(){return x}});var i=r(37716),a=r(39490),s=r(72458),o=r(36461),n=r(79765),c=r(66682),d=r(17238),h=r(38583),l=r(19238);const u=["mat-sort-header",""];function m(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",3),i.NdJ("@arrowPosition.start",function(){return i.CHM(t),i.oxw()._disableViewStateAnimation=!0})("@arrowPosition.done",function(){return i.CHM(t),i.oxw()._disableViewStateAnimation=!1}),i._UZ(1,"div",4),i.TgZ(2,"div",5),i._UZ(3,"div",6),i._UZ(4,"div",7),i._UZ(5,"div",8),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.Q6J("@arrowOpacity",t._getArrowViewState())("@arrowPosition",t._getArrowViewState())("@allowChildren",t._getArrowDirectionState()),i.xp6(2),i.Q6J("@indicator",t._getArrowDirectionState()),i.xp6(1),i.Q6J("@leftPointer",t._getArrowDirectionState()),i.xp6(1),i.Q6J("@rightPointer",t._getArrowDirectionState())}}const _=["*"],g=new i.OlP("MAT_SORT_DEFAULT_OPTIONS"),p=(0,s.dB)((0,s.Id)(class{}));let f=(()=>{class t extends p{constructor(t){super(),this._defaultOptions=t,this.sortables=new Map,this._stateChanges=new n.xQ,this.start="asc",this._direction="",this.sortChange=new i.vpe}get direction(){return this._direction}set direction(t){this._direction=t}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=(0,a.Ig)(t)}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){var e,r,i;if(!t)return"";const a=null!==(r=null!==(e=null==t?void 0:t.disableClear)&&void 0!==e?e:this.disableClear)&&void 0!==r?r:!!(null===(i=this._defaultOptions)||void 0===i?void 0:i.disableClear);let s=function(t,e){let r=["asc","desc"];return"desc"==t&&r.reverse(),e||r.push(""),r}(t.start||this.start,a),o=s.indexOf(this.direction)+1;return o>=s.length&&(o=0),s[o]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(g,8))},t.\u0275dir=i.lG2({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[i.qOj,i.TTD]}),t})();const w=s.mZ.ENTERING+" "+s.yN.STANDARD_CURVE,S={indicator:(0,d.X$)("indicator",[(0,d.SB)("active-asc, asc",(0,d.oB)({transform:"translateY(0px)"})),(0,d.SB)("active-desc, desc",(0,d.oB)({transform:"translateY(10px)"})),(0,d.eR)("active-asc <=> active-desc",(0,d.jt)(w))]),leftPointer:(0,d.X$)("leftPointer",[(0,d.SB)("active-asc, asc",(0,d.oB)({transform:"rotate(-45deg)"})),(0,d.SB)("active-desc, desc",(0,d.oB)({transform:"rotate(45deg)"})),(0,d.eR)("active-asc <=> active-desc",(0,d.jt)(w))]),rightPointer:(0,d.X$)("rightPointer",[(0,d.SB)("active-asc, asc",(0,d.oB)({transform:"rotate(45deg)"})),(0,d.SB)("active-desc, desc",(0,d.oB)({transform:"rotate(-45deg)"})),(0,d.eR)("active-asc <=> active-desc",(0,d.jt)(w))]),arrowOpacity:(0,d.X$)("arrowOpacity",[(0,d.SB)("desc-to-active, asc-to-active, active",(0,d.oB)({opacity:1})),(0,d.SB)("desc-to-hint, asc-to-hint, hint",(0,d.oB)({opacity:.54})),(0,d.SB)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",(0,d.oB)({opacity:0})),(0,d.eR)("* => asc, * => desc, * => active, * => hint, * => void",(0,d.jt)("0ms")),(0,d.eR)("* <=> *",(0,d.jt)(w))]),arrowPosition:(0,d.X$)("arrowPosition",[(0,d.eR)("* => desc-to-hint, * => desc-to-active",(0,d.jt)(w,(0,d.F4)([(0,d.oB)({transform:"translateY(-25%)"}),(0,d.oB)({transform:"translateY(0)"})]))),(0,d.eR)("* => hint-to-desc, * => active-to-desc",(0,d.jt)(w,(0,d.F4)([(0,d.oB)({transform:"translateY(0)"}),(0,d.oB)({transform:"translateY(25%)"})]))),(0,d.eR)("* => asc-to-hint, * => asc-to-active",(0,d.jt)(w,(0,d.F4)([(0,d.oB)({transform:"translateY(25%)"}),(0,d.oB)({transform:"translateY(0)"})]))),(0,d.eR)("* => hint-to-asc, * => active-to-asc",(0,d.jt)(w,(0,d.F4)([(0,d.oB)({transform:"translateY(0)"}),(0,d.oB)({transform:"translateY(-25%)"})]))),(0,d.SB)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",(0,d.oB)({transform:"translateY(0)"})),(0,d.SB)("hint-to-desc, active-to-desc, desc",(0,d.oB)({transform:"translateY(-25%)"})),(0,d.SB)("hint-to-asc, active-to-asc, asc",(0,d.oB)({transform:"translateY(25%)"}))]),allowChildren:(0,d.X$)("allowChildren",[(0,d.eR)("* <=> *",[(0,d.IO)("@*",(0,d.pV)(),{optional:!0})])])};let b=(()=>{class t{constructor(){this.changes=new n.xQ}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({factory:function(){return new t},token:t,providedIn:"root"}),t})();const v={provide:b,deps:[[new i.FiY,new i.tp0,b]],useFactory:function(t){return t||new b}},A=(0,s.Id)(class{});let Z=(()=>{class t extends A{constructor(t,e,r,i,a,s){super(),this._intl=t,this._changeDetectorRef=e,this._sort=r,this._columnDef=i,this._focusMonitor=a,this._elementRef=s,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this._handleStateChanges()}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=(0,a.Ig)(t)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{const e=!!t;e!==this._showIndicatorHint&&(this._setIndicatorHintVisible(e),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}_setIndicatorHintVisible(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(t){this._viewState=t||{},this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}_toggleOnInteraction(){this._sort.sort(this),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(t){!this._isDisabled()&&(t.keyCode===o.L_||t.keyCode===o.K5)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){const t=this._viewState.fromState;return(t?`${t}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_handleStateChanges(){this._rerenderSubscription=(0,c.T)(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&"active"===this._viewState.toState&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(b),i.Y36(i.sBO),i.Y36(f,8),i.Y36("MAT_SORT_HEADER_COLUMN_DEF",8),i.Y36(l.tE),i.Y36(i.SBq))},t.\u0275cmp=i.Xpm({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,e){1&t&&i.NdJ("click",function(){return e._handleClick()})("keydown",function(t){return e._handleKeydown(t)})("mouseenter",function(){return e._setIndicatorHintVisible(!0)})("mouseleave",function(){return e._setIndicatorHintVisible(!1)}),2&t&&(i.uIk("aria-sort",e._getAriaSortAttribute()),i.ekj("mat-sort-header-disabled",e._isDisabled()))},inputs:{disabled:"disabled",arrowPosition:"arrowPosition",disableClear:"disableClear",id:["mat-sort-header","id"],start:"start"},exportAs:["matSortHeader"],features:[i.qOj],attrs:u,ngContentSelectors:_,decls:4,vars:6,consts:[["role","button",1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(t,e){1&t&&(i.F$t(),i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.Hsn(2),i.qZA(),i.YNc(3,m,6,6,"div",2),i.qZA()),2&t&&(i.ekj("mat-sort-header-sorted",e._isSorted())("mat-sort-header-position-before","before"==e.arrowPosition),i.uIk("tabindex",e._isDisabled()?null:0),i.xp6(3),i.Q6J("ngIf",e._renderArrow()))},directives:[h.O5],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],encapsulation:2,data:{animation:[S.indicator,S.leftPointer,S.rightPointer,S.arrowOpacity,S.arrowPosition,S.allowChildren]},changeDetection:0}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[v],imports:[[h.ez,s.BQ]]}),t})()}}]);