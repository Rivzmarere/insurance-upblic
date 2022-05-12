"use strict";(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[461],{2461:(O,z,o)=>{o.r(z),o.d(z,{AddInsuranceModule:()=>b});var m=o(9808),p=o(9291),a=o(2382),n=o(5e3),u=o(5278),f=o(4467),C=o(7968),Z=o(7407),l=o(4546),g=o(1894),h=o(1047),d=o(5197),v=o(6042),T=o(2643),A=o(2683);function I(e,r){1&e&&n._uU(0),2&e&&n.hij("and ",r.$implicit.length," more selected")}let y=(()=>{class e{constructor(t,s,c,x,M){this.notification=t,this.fb=s,this.service=c,this.logger=x,this.uiLoader=M,this.listOfOption=[],this.listOfSelectedValue=["a10","c12"],this.captchaTooltipIcon={type:"info-circle",theme:"twotone"}}submitForm(){console.log(this.validateForm.value),this.service.createInsurance(this.validateForm.value).subscribe(t=>{this.uiLoader.stop()},t=>{this.logger.error(t),this.uiLoader.stop()})}getCaptcha(t){t.preventDefault()}ngOnInit(){this.validateForm=this.fb.group({name:[null,[a.kI.required]],type:[null,[a.kI.required]],amount:[null,[a.kI.required]],period:[null,[a.kI.required]],model:[null,[a.kI.required]]})}save(){this.service.createInsurance(this.validateForm.value).subscribe(t=>{this.notification.success("Success","Succefully Created the Insurance.")},t=>{this.notification.error("Error",t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.zb),n.Y36(a.qu),n.Y36(f.y),n.Y36(C.Kf),n.Y36(Z.LA))},e.\u0275cmp=n.Xpm({type:e,selectors:[["insurance-create-customer"]],decls:43,vars:23,consts:[["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","name"],["formControlName","type","nzPlaceHolder","Please select",3,"nzMaxTagPlaceholder"],["nzValue","liability cover","nzLabel","liability cover"],["nzValue","third party fire and theft cover","nzLabel","third party fire and theft cover"],["nzValue","fully comprehensive vehicle.","nzLabel","fully comprehensive vehicle."],["nz-input","","formControlName","amount"],["formControlName","period","nzPlaceHolder","Please select"],["nzValue","4-Months","nzLabel","4-Months"],["nzValue","8-Months","nzLabel","8-Months"],["nzValue","1-Year","nzLabel","1-Year"],["formControlName","model","nzPlaceHolder","Please select",3,"nzMaxTagPlaceholder"],["nzValue","Van","nzLabel","Van"],["nzValue","SEDAN","nzLabel","SEDAN"],["nzValue","HATCHBACK","nzLabel","HATCHBACK"],["nzValue","COUPE","nzLabel","COUPE"],["nzValue","SPORT-UTILITY VEHICLE (SUV)","nzLabel","SPORT-UTILITY VEHICLE (SUV)"],["nzValue","PICKUP TRUCK","nzLabel","PICKUP TRUCK"],["tagPlaceHolder",""],["nz-button","","nzType","primary"],[3,"click"]],template:function(t,s){if(1&t&&(n.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),n._uU(3,"Name"),n.qZA(),n.TgZ(4,"nz-form-control",2),n._UZ(5,"input",3),n.qZA()(),n.TgZ(6,"nz-form-item")(7,"nz-form-label",1),n._uU(8,"Type"),n.qZA(),n.TgZ(9,"nz-form-control",2)(10,"nz-select",4),n._UZ(11,"nz-option",5)(12,"nz-option",6)(13,"nz-option",7),n.qZA()()(),n.TgZ(14,"nz-form-item")(15,"nz-form-label",1),n._uU(16,"Amount"),n.qZA(),n.TgZ(17,"nz-form-control",2),n._UZ(18,"input",8),n.qZA()(),n.TgZ(19,"nz-form-item")(20,"nz-form-label",1),n._uU(21,"Period"),n.qZA(),n.TgZ(22,"nz-form-control",2)(23,"nz-select",9),n._UZ(24,"nz-option",10)(25,"nz-option",11)(26,"nz-option",12),n.qZA()()(),n.TgZ(27,"nz-form-item")(28,"nz-form-label",1),n._uU(29,"model"),n.qZA(),n.TgZ(30,"nz-form-control",2)(31,"nz-select",13),n._UZ(32,"nz-option",14)(33,"nz-option",15)(34,"nz-option",16)(35,"nz-option",17)(36,"nz-option",18)(37,"nz-option",19),n.qZA(),n.YNc(38,I,1,1,"ng-template",null,20,n.W1O),n.qZA()(),n.TgZ(40,"button",21)(41,"span",22),n.NdJ("click",function(){return s.save()}),n._uU(42,"submit"),n.qZA()()()),2&t){const c=n.MAs(39);n.Q6J("formGroup",s.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("nzMaxTagPlaceholder",c),n.xp6(5),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(6),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("nzMaxTagPlaceholder",c)}},directives:[a._Y,a.JL,l.Lr,a.sg,g.SK,l.Nx,g.t3,l.iK,l.Fd,h.Zp,a.Fj,a.JJ,a.u,d.Vq,d.Ip,v.ix,T.dQ,A.w],styles:["nz-select[_ngcontent-%COMP%]{width:100%}"]}),e})();var i=o(4285);function U(e,r){if(1&e&&(n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA()()),2&e){const t=r.$implicit;n.xp6(2),n.Oqu(t.name),n.xp6(2),n.Oqu(t.type),n.xp6(2),n.Oqu(t.amount),n.xp6(2),n.hij(" ",t.model," ")}}const L=[{path:"create-insurance",component:y},{path:"view-insurance",component:(()=>{class e{constructor(t,s){this.notification=t,this.service=s,this.data=[],this.listOfData=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}ngOnInit(){this.getInsurances()}getInsurances(){this.service.getAllInsurances().subscribe(t=>{this.data=t,this.notification.success("Success","Succefully Retrived Insurances.")},t=>{this.notification.success("Eror",t)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.zb),n.Y36(f.y))},e.\u0275cmp=n.Xpm({type:e,selectors:[["insurance-view-insurance"]],decls:14,vars:2,consts:[[3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(n.TgZ(0,"nz-table",0,1)(2,"thead")(3,"tr")(4,"th"),n._uU(5,"Name"),n.qZA(),n.TgZ(6,"th"),n._uU(7,"Type"),n.qZA(),n.TgZ(8,"th"),n._uU(9,"Amount"),n.qZA(),n.TgZ(10,"th"),n._uU(11,"Model"),n.qZA()()(),n.TgZ(12,"tbody"),n.YNc(13,U,9,4,"tr",2),n.qZA()()),2&t&&(n.Q6J("nzData",s.listOfData),n.xp6(13),n.Q6J("ngForOf",s.data))},directives:[i.N8,i.Om,i.$Z,i.Uo,i._C,i.p0,m.sg],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[p.Bz.forChild(L)],p.Bz]}),e})();var P=o(5737);let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[u.zb],imports:[[m.ez,l.U5,h.o7,d.LV,a.UX,i.HQ,a.u5,P.S,v.sL]]}),e})();var J=o(9727);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[u.zb,J.dD],imports:[[m.ez,S,V]]}),e})()}}]);