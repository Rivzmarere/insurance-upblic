"use strict";(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[105],{2105:(O,y,a)=>{a.r(y),a.d(y,{PaymentsModule:()=>x});var p=a(9808),u=a(9291),e=a(5e3),l=a(5278),o=a(2382),z=a(9201),h=a(1047),g=a(6042),v=a(2643),T=a(2683),s=a(4285);function C(n,i){if(1&n&&(e.TgZ(0,"tr",4)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",5),e._uU(13,"Make Payment"),e.qZA()()()),2&n){const t=i.$implicit;e.MGl("routerLink","/payment/make-payment/",t._id,""),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.regNumber),e.xp6(2),e.Oqu(t.type),e.xp6(2),e.Oqu(t.dateRegistered),e.xp6(2),e.Oqu(t.year)}}let q=(()=>{class n{constructor(t,r,m){this.notification=t,this.fb=r,this.service=m,this.searchText="",this.captchaTooltipIcon={type:"info-circle",theme:"twotone"},this.result=[]}submitForm(){this.validateForm.valid?console.log("submit",this.validateForm.value):Object.values(this.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}getCaptcha(t){t.preventDefault()}ngOnInit(){}search(){console.log(this.searchText),this.service.getCarByRegNumber(this.searchText).subscribe(t=>{this.result=[t],this.notification.success("Success","Succefully Retrived.")},t=>{this.notification.error("Error",t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.zb),e.Y36(o.qu),e.Y36(z.c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["insurance-create-payment"]],decls:23,vars:2,consts:[["nz-input","","size","40","id","email",3,"ngModel","ngModelChange"],["nz-button","",3,"click"],["basicTable",""],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["nz-button",""]],template:function(t,r){1&t&&(e.TgZ(0,"div")(1,"input",0),e.NdJ("ngModelChange",function(d){return r.searchText=d}),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return r.search()}),e._uU(3," Search"),e.qZA()(),e.TgZ(4,"div")(5,"nz-table",null,2)(7,"thead")(8,"tr")(9,"th"),e._uU(10,"Name"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"RegNumber"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Type"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Date Registered"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Year"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Action"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,C,14,6,"tr",3),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngModel",r.searchText),e.xp6(21),e.Q6J("ngForOf",r.result))},directives:[h.Zp,o.Fj,o.JJ,o.On,g.ix,v.dQ,T.w,s.N8,s.Om,s.$Z,s.Uo,s._C,s.p0,p.sg,u.rH],styles:[""]}),n})();function A(n,i){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()),2&n){const t=i.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.amount),e.xp6(2),e.Oqu(t.ownerId),e.xp6(2),e.Oqu(t.paymentMethod),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.Oqu(t._id)}}let _=(()=>{class n{constructor(t,r){this.notification=t,this.service=r,this.data=[],this.listOfData=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}ngOnInit(){this.getCustomers()}getCustomers(){this.service.getAllPayments().subscribe(t=>{this.data=t,this.notification.success("Success","Succefully Retrived Customers.")},t=>{this.notification.error("Error",t)})}getUser(t){console.log(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.zb),e.Y36(z.c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["insurance-view-payments"]],decls:19,vars:2,consts:[[3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"]],template:function(t,r){1&t&&(e.TgZ(0,"nz-table",0,1)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Car Name"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Amount"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Owner Id"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Payment Method"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Date of Payment"),e.qZA(),e._UZ(14,"th"),e.TgZ(15,"th"),e._uU(16,"Reference Number"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,A,13,6,"tr",2),e.qZA()()),2&t&&(e.Q6J("nzData",r.listOfData),e.xp6(18),e.Q6J("ngForOf",r.data))},directives:[s.N8,s.Om,s.$Z,s.Uo,s._C,s.p0,p.sg],styles:[""]}),n})();var c=a(4546),b=a(1894),f=a(7957),Z=a(5197);function F(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"form",0)(2,"nz-form-item")(3,"nz-form-label",1),e._uU(4,"Name "),e.qZA(),e.TgZ(5,"nz-form-control",2),e._UZ(6,"input",3),e.qZA()(),e.TgZ(7,"nz-form-item")(8,"nz-form-label",7),e._uU(9,"Insurance Cover"),e.qZA(),e.TgZ(10,"nz-form-control",2),e._UZ(11,"input",9),e.qZA()(),e.TgZ(12,"nz-form-item")(13,"nz-form-label",7),e._uU(14,"Amount"),e.qZA(),e.TgZ(15,"nz-form-control",2),e._UZ(16,"input",13),e.qZA()(),e.TgZ(17,"nz-form-item")(18,"nz-form-label",7),e._uU(19,"Select Payment"),e.qZA(),e.TgZ(20,"nz-form-control",2)(21,"nz-select",14),e._UZ(22,"nz-option",15)(23,"nz-option",16)(24,"nz-option",17)(25,"nz-option",18),e.qZA()()()(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.paymentForm),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)}}const U=[{path:"create-payment",component:q},{path:"view-payments",component:_},{path:"make-payment/:id",component:(()=>{class n{constructor(t,r,m,d){this.notification=t,this.router=r,this.service=m,this.fb=d,this.isVisible=!1,this.Form2=this.fb.group({name:[{value:"",disabled:!0},[o.kI.required]],regNumber:[{value:"",disabled:!0},[o.kI.required]],year:[{value:"",disabled:!0},[o.kI.required]],country:[{value:"",disabled:!0},[o.kI.required]],dateRegistered:[{value:"",disabled:!0},[o.kI.required]],type:[{value:"",disabled:!0},[o.kI.required]],insurance:[{value:"",disabled:!0},[o.kI.required]],amount:[{value:"",disabled:!0},[o.kI.required]]}),this.paymentForm=this.fb.group({name:[{value:"",disabled:!0},[o.kI.required]],insurance:[{value:"",disabled:!0},[o.kI.required]],amount:[{value:"",disabled:!0},[o.kI.required]],paymentMethod:[{value:""},[o.kI.required]],ownerId:[{value:"",disabled:!0},[o.kI.required]],vechleId:[{value:"",disabled:!0},[o.kI.required]]}),this.paymentSubmitForm=this.fb.group({name:["",[o.kI.required]],insurance:["",[o.kI.required]],amount:["",[o.kI.required]],paymentMethod:["",[o.kI.required]],ownerId:["",[o.kI.required]],vechleId:["",[o.kI.required]]}),this.id=this.router.snapshot.params.id}ngOnInit(){this.getCarById()}getCarById(){this.service.getCarById(this.id).subscribe(t=>{this.paymentForm.controls.ownerId.setValue(t.ownerId),this.paymentForm.controls.vechleId.setValue(t._id),this.notification.success("Success","Succefully Retrived Car."),this.showDetails(t)},t=>{this.notification.error("Error",t)})}showDetails(t){console.log(t),this.Form2.controls.name.setValue(t.name),this.Form2.controls.regNumber.setValue(t.regNumber),this.Form2.controls.year.setValue(t.year),this.Form2.controls.country.setValue(t.country),this.Form2.controls.dateRegistered.setValue(t.dateRegistered),this.Form2.controls.type.setValue(t.type),this.Form2.controls.insurance.setValue(t.insurance),this.service.getInsuranceByName(t.insurance).subscribe(r=>{this.paymentForm.controls.amount.setValue(r.amount)})}showModal(){this.isVisible=!0,this.paymentForm.controls.name.setValue(this.Form2.value.name),this.paymentForm.controls.insurance.setValue(this.Form2.value.insurance)}handleOk(){this.paymentSubmitForm.controls.name.setValue(this.paymentForm.value.name),this.paymentSubmitForm.controls.insurance.setValue(this.paymentForm.value.insurance),this.paymentSubmitForm.controls.amount.setValue(this.paymentForm.value.amount),this.paymentSubmitForm.controls.ownerId.setValue(this.paymentForm.value.ownerId),this.paymentSubmitForm.controls.vechleId.setValue(this.paymentForm.value.vechleId),this.service.createPayment(this.paymentForm.getRawValue()).subscribe(t=>{console.log(t),this.notification.success("Success","Payment Was Succefully Made.")},t=>{this.notification.error("Error",t)}),this.isVisible=!1}handleCancel(){console.log("Button cancel clicked!"),this.isVisible=!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.zb),e.Y36(u.gz),e.Y36(z.c),e.Y36(o.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["insurance-view-car-details"]],decls:36,vars:27,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","email",3,"nzSm","nzXs"],["nzErrorTip","The input is not valid E-mail!",3,"nzSm","nzXs"],["nz-input","","formControlName","name"],["nz-input","","formControlName","type"],["nz-input","","formControlName","regNumber"],["nz-input","","formControlName","year"],["nzRequired","","nzFor","City",3,"nzSm","nzXs"],["nz-input","","formControlName","dateRegistered"],["nz-input","","formControlName","insurance"],["nz-button","",3,"nzType","click"],["nzTitle","The first Modal",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nz-input","","formControlName","amount"],["id","gender","formControlName","paymentMethod","nzPlaceHolder","Select Payment Method"],["nzValue","Ecocash","nzLabel","Ecocash"],["nzValue","One-Money","nzLabel","One-Money"],["nzValue","Telecash","nzLabel","Telecash"],["nzValue","Swipe","nzLabel","Swipe"]],template:function(t,r){1&t&&(e.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),e._uU(3,"Name"),e.qZA(),e.TgZ(4,"nz-form-control",2),e._UZ(5,"input",3),e.qZA()(),e.TgZ(6,"nz-form-item")(7,"nz-form-label",1),e._uU(8,"Type"),e.qZA(),e.TgZ(9,"nz-form-control",2),e._UZ(10,"input",4),e.qZA()(),e.TgZ(11,"nz-form-item")(12,"nz-form-label",1),e._uU(13,"RegNumber"),e.qZA(),e.TgZ(14,"nz-form-control",2),e._UZ(15,"input",5),e.qZA()(),e.TgZ(16,"nz-form-item")(17,"nz-form-label",1),e._uU(18,"Year"),e.qZA(),e.TgZ(19,"nz-form-control",2),e._UZ(20,"input",6),e.qZA()(),e.TgZ(21,"nz-form-item")(22,"nz-form-label",7),e._uU(23,"Date Registered"),e.qZA(),e.TgZ(24,"nz-form-control",2),e._UZ(25,"input",8),e.qZA()(),e.TgZ(26,"nz-form-item")(27,"nz-form-label",7),e._uU(28,"Insurance Cover"),e.qZA(),e.TgZ(29,"nz-form-control",2),e._UZ(30,"input",9),e.qZA()()(),e.TgZ(31,"button",10),e.NdJ("click",function(){return r.showModal()}),e.TgZ(32,"span"),e._uU(33,"Proceed"),e.qZA()(),e.TgZ(34,"nz-modal",11),e.NdJ("nzVisibleChange",function(d){return r.isVisible=d})("nzOnCancel",function(){return r.handleCancel()})("nzOnOk",function(){return r.handleOk()}),e.YNc(35,F,26,17,"ng-container",12),e.qZA()),2&t&&(e.Q6J("formGroup",r.Form2),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(2),e.Q6J("nzType","primary"),e.xp6(3),e.Q6J("nzVisible",r.isVisible))},directives:[o._Y,o.JL,c.Lr,o.sg,b.SK,c.Nx,b.t3,c.iK,c.Fd,h.Zp,o.Fj,o.JJ,o.u,g.ix,v.dQ,T.w,f.du,f.Hf,Z.Vq,Z.Ip],styles:[""]}),n})()}];let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(U)],u.Bz]}),n})();var S=a(5737);let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[l.zb],imports:[[p.ez,c.U5,h.o7,Z.LV,o.UX,s.HQ,o.u5,S.S,g.sL,u.Bz,f.Qp]]}),n})();var J=a(9727);let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[l.zb,J.dD],imports:[[p.ez,V,I]]}),n})()}}]);