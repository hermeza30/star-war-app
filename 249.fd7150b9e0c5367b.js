"use strict";(self.webpackChunkstar_wars_angular_app=self.webpackChunkstar_wars_angular_app||[]).push([[249],{249:(D,p,s)=>{s.r(p),s.d(p,{PeopleComponent:()=>m});var e=s(8256),a=s(7579),_=s(9751),i=s(8746),c=s(2722),l=s(72),o=s(6895),E=s(4954),P=s(6376);function v(n,r){if(1&n&&(e.ynx(0),e._UZ(1,"app-card",2),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.Q6J("img",t.image)("title",t.name)}}let m=(()=>{class n{constructor(){this.destroy$=new a.x,this.starWarsServiceService=(0,e.f3M)(l.t),this.spinnerService=(0,e.f3M)(P.V),this.peoples$=new _.y,this.getPeoples()}getPeoples(){this.spinnerService.showSpinner(),this.peoples$=this.starWarsServiceService.getPeopleById().pipe(this.starWarsServiceService.mapOperator("people"),(0,i.x)(()=>{this.spinnerService.hideSpinner()}),(0,c.R)(this.destroy$))}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-people"]],standalone:!0,features:[e.jDz],decls:3,vars:3,consts:[[1,"flex","flex-row","flex-wrap"],[4,"ngFor","ngForOf"],[3,"img","title"]],template:function(t,O){1&t&&(e.TgZ(0,"section",0),e.YNc(1,v,2,2,"ng-container",1),e.ALo(2,"async"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,O.peoples$)))},dependencies:[o.ez,o.sg,o.Ov,E.A]}),n})()}}]);