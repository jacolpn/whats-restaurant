(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+p+5":function(e,t,r){"use strict";r.r(t),r.d(t,"OrderModule",function(){return w});var o=r("tyNb"),i=r("PCNd");class n{constructor(e,t,r){this.quantity=e,this.menuId=t,this.name=r}}var s=r("3Pt+"),c=r("vkgz"),a=r("fXoL"),b=r("mCRk"),l=r("ofXK");function u(e,t){1&e&&(a.Lb(0,"span",4),a.Jb(1,"i",2),a.jc(2," Ok "),a.Kb())}function m(e,t){if(1&e&&(a.Lb(0,"span",4),a.Jb(1,"i",5),a.jc(2),a.Kb()),2&e){const e=a.Ub();a.yb(2),a.lc(" ",e.errorMessage," ")}}const d=["*"];let p=(()=>{class e{constructor(){this.showTip=!0}ngOnInit(){}ngAfterContentInit(){if(this.input=this.model||this.control,void 0===this.input)throw new Error("Esse componente precisa ser usado com uma diretiva ngModel ou formControlName.")}hasSuccess(){return this.input.valid&&(this.input.dirty||this.input.touched)}hasError(){return this.input.invalid&&(this.input.dirty||this.input.touched)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-input-container"]],contentQueries:function(e,t,r){if(1&e&&(a.Bb(r,s.j,1),a.Bb(r,s.d,1)),2&e){let e;a.dc(e=a.Tb())&&(t.model=e.first),a.dc(e=a.Tb())&&(t.control=e.first)}},inputs:{label:"label",errorMessage:"errorMessage",showTip:"showTip"},ngContentSelectors:d,decls:7,vars:7,consts:[[1,"form-group","has-feedback"],["for","inputSuccess",1,"control-label","sr-only"],[1,"fa","fa-check"],["class","help-block",4,"ngIf"],[1,"help-block"],[1,"fa","fa-remove"]],template:function(e,t){1&e&&(a.ac(),a.Lb(0,"div",0),a.Lb(1,"label",1),a.Jb(2,"i",2),a.jc(3),a.Kb(),a.Zb(4),a.ic(5,u,3,0,"span",3),a.ic(6,m,3,1,"span",3),a.Kb()),2&e&&(a.Ab("has-success",t.hasSuccess())("has-error",t.hasError()),a.yb(3),a.lc(" ",t.label," "),a.yb(2),a.bc("ngIf",t.showTip&&t.hasSuccess()),a.yb(1),a.bc("ngIf",t.showTip&&t.hasError()))},directives:[l.l],encapsulation:2}),e})();const h=function(){return["/restaurant"]};function f(e,t){1&e&&(a.Lb(0,"div",2),a.Lb(1,"p"),a.jc(2," N\xe3o h\xe1 itens no seus carrinho. Que tal come\xe7ar por "),a.Lb(3,"a",3),a.jc(4," aqui"),a.Kb(),a.jc(5,"? "),a.Kb(),a.Kb()),2&e&&(a.yb(3),a.bc("routerLink",a.cc(1,h)))}function v(e,t){if(1&e){const e=a.Mb();a.Lb(0,"tr"),a.Lb(1,"td",6),a.Lb(2,"a",9),a.Sb("click",function(){a.fc(e);const r=t.$implicit;return a.Ub(2).emitDecreaseQty(r)}),a.Jb(3,"i",10),a.Kb(),a.jc(4),a.Lb(5,"a",9),a.Sb("click",function(){a.fc(e);const r=t.$implicit;return a.Ub(2).emitIncreaseQty(r)}),a.Jb(6,"i",11),a.Kb(),a.Kb(),a.Lb(7,"td"),a.jc(8),a.Kb(),a.Lb(9,"td"),a.jc(10),a.Kb(),a.Lb(11,"td",7),a.jc(12),a.Vb(13,"currency"),a.Kb(),a.Lb(14,"td",7),a.Lb(15,"a",12),a.Sb("click",function(){a.fc(e);const r=t.$implicit;return a.Ub(2).emitRemove(r)}),a.Jb(16,"i",13),a.Kb(),a.Kb(),a.Kb()}if(2&e){const e=t.$implicit;a.yb(4),a.lc(" ",e.quantity," "),a.yb(4),a.kc(e.menuItem.name),a.yb(2),a.kc(e.menuItem.description),a.yb(2),a.lc(" ",a.Yb(13,4,e.value(),"BRL","symbol")," ")}}function L(e,t){if(1&e&&(a.Lb(0,"div",4),a.Lb(1,"table",5),a.Lb(2,"thead"),a.Lb(3,"tr"),a.Lb(4,"th",6),a.jc(5,"Quantidade"),a.Kb(),a.Lb(6,"th"),a.jc(7,"Item"),a.Kb(),a.Lb(8,"th"),a.jc(9,"Descri\xe7\xe3o"),a.Kb(),a.Lb(10,"th",7),a.jc(11,"Subtotal"),a.Kb(),a.Jb(12,"th",7),a.Kb(),a.Kb(),a.Lb(13,"tbody"),a.ic(14,v,17,8,"tr",8),a.Kb(),a.Kb(),a.Kb()),2&e){const e=a.Ub();a.yb(14),a.bc("ngForOf",e.items)}}let y=(()=>{class e{constructor(){this.increaseQty=new a.n,this.decreaseQty=new a.n,this.remove=new a.n}ngOnInit(){}emitIncreaseQty(e){this.increaseQty.emit(e)}emitDecreaseQty(e){this.decreaseQty.emit(e)}emitRemove(e){this.remove.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-order-items"]],inputs:{items:"items"},outputs:{increaseQty:"increaseQty",decreaseQty:"decreaseQty",remove:"remove"},decls:2,vars:2,consts:[["class","col-xs-12",4,"ngIf"],["class","col-xs-12 table-responsive",4,"ngIf"],[1,"col-xs-12"],[3,"routerLink"],[1,"col-xs-12","table-responsive"],[1,"table","table-striped"],[1,"text-center"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm",3,"click"],[1,"fa","fa-minus"],[1,"fa","fa-plus"],[1,"btn","btn-sm","danger",3,"click"],[1,"fa","fa-remove"]],template:function(e,t){1&e&&(a.ic(0,f,6,2,"div",0),a.ic(1,L,15,1,"div",1)),2&e&&(a.bc("ngIf",!t.items.length),a.yb(1),a.bc("ngIf",t.items.length))},directives:[l.l,o.e,l.k],pipes:[l.d],encapsulation:2}),e})();function K(e,t){if(1&e){const e=a.Mb();a.Lb(0,"div"),a.Lb(1,"label"),a.Lb(2,"div",1),a.Sb("click",function(){a.fc(e);const r=t.$implicit;return a.Ub().setValue(r.value)}),a.Jb(3,"ins",2),a.Kb(),a.jc(4),a.Kb(),a.Kb()}if(2&e){const e=t.$implicit,r=a.Ub();a.yb(2),a.Ab("checked",e.value===r.value),a.yb(2),a.lc(" ",e.label," ")}}let g=(()=>{class e{constructor(){}ngOnInit(){}setValue(e){this.value=e,this.onChange(this.value)}writeValue(e){this.value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){}setDisabledState(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-radio"]],inputs:{options:"options"},features:[a.xb([{provide:s.g,useExisting:Object(a.T)(()=>e),multi:!0}])],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["aria-checked","false","aria-disabled","false",1,"iradio_flat-red",2,"position","relative",3,"click"],[1,"iCheck-helper","checkbox"]],template:function(e,t){1&e&&a.ic(0,K,5,3,"div",0),2&e&&a.bc("ngForOf",t.options)},directives:[l.k],encapsulation:2}),e})(),I=(()=>{class e{constructor(){}ngOnInit(){}total(){return this.delivery+this.itemsValue}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-delivery-costs"]],inputs:{delivery:"delivery",itemsValue:"itemsValue"},decls:21,vars:15,consts:[[1,"table-responsive"],[1,"table"],[2,"width","50%"],[1,"text-right"]],template:function(e,t){1&e&&(a.Lb(0,"div",0),a.Lb(1,"table",1),a.Lb(2,"tbody"),a.Lb(3,"tr"),a.Lb(4,"th",2),a.jc(5,"Itens:"),a.Kb(),a.Lb(6,"td",3),a.jc(7),a.Vb(8,"currency"),a.Kb(),a.Kb(),a.Lb(9,"tr"),a.Lb(10,"th"),a.jc(11,"Frete:"),a.Kb(),a.Lb(12,"td",3),a.jc(13),a.Vb(14,"currency"),a.Kb(),a.Kb(),a.Lb(15,"tr"),a.Lb(16,"th"),a.jc(17,"Total:"),a.Kb(),a.Lb(18,"td",3),a.jc(19),a.Vb(20,"currency"),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&e&&(a.yb(7),a.lc(" ",a.Yb(8,3,t.itemsValue,"BRL","symbol")," "),a.yb(6),a.lc(" ",a.Yb(14,7,t.delivery,"BRL","symbol")," "),a.yb(6),a.lc(" ",a.Yb(20,11,t.total(),"BRL","symbol")," "))},pipes:[l.d],encapsulation:2}),e})();function k(e,t){1&e&&(a.Lb(0,"span",31),a.Jb(1,"i",32),a.jc(2," E-mails n\xe3o conferem. "),a.Kb())}const j=[{path:"",component:(()=>{class e{constructor(e,t,r){this.orderService=e,this.router=t,this.formBuilder=r,this.emailPattern=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,this.numberPattern=/^[0-9]*$/,this.delivery=8,this.whats=null,this.paymentOptions=[{label:"Dinheiro",value:"MON"},{label:"Cart\xe3o de d\xe9bito",value:"DEB"},{label:"Vale refei\xe7\xe3o",value:"VR"}]}ngOnInit(){this.orderForm=this.formBuilder.group({name:this.formBuilder.control("Jackson Neves",[s.l.required,s.l.minLength(5)]),email:this.formBuilder.control("jacoLPN@outlook.com",[s.l.required,s.l.pattern(this.emailPattern)]),emailConfirmation:this.formBuilder.control("jacoLPN@outlook.com",[s.l.required,s.l.pattern(this.emailPattern)]),address:this.formBuilder.control("Rua Xanxer\xea",[s.l.required,s.l.minLength(5)]),number:this.formBuilder.control("650",[s.l.required,s.l.pattern(this.numberPattern)]),optionalAddress:new s.c("Apto 104, BL 03",{updateOn:"blur"}),paymentOption:this.formBuilder.control("MON",[s.l.required])},{validator:e.equalsTo})}static equalsTo(e){const t=e.get("email"),r=e.get("emailConfirmation");if(t&&r)return t.value!==r.value?{emailsNotMatch:!0}:void 0}itemsValue(){return this.orderService.itemsValue()}cartItems(){return this.orderService.cartItems()}increaseQty(e){this.orderService.increaseQty(e)}decreaseQty(e){this.orderService.decreaseQty(e)}removeItem(e){this.orderService.removeItem(e)}isOrderCompleted(){return void 0!==this.orderId}checkOrder(e){e.orderItems=this.cartItems().map(e=>new n(e.quantity,e.menuItem.id,e.menuItem.name)),this.orderService.checkOrder(e).pipe(Object(c.a)(e=>{this.orderId=e})).subscribe(t=>{let r=[];r=e.orderItems.map(e=>` (${e.quantity}) ${e.name}`),this.whats=`https://web.whatsapp.com/send/?phone=+554796974076&text=Ol\xe1 VilleMeat, gostaria de${r}. Entregar no endere\xe7o: ${e.address}, N\xba ${e.number}. (Ass. Jackson)`,window.location.href=this.whats,this.orderService.clear(),console.log(`Compra conclu\xedda: ${t}.`),console.log(r),console.log(this.whats)})}}return e.\u0275fac=function(t){return new(t||e)(a.Ib(b.a),a.Ib(o.c),a.Ib(s.b))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-order"]],decls:56,vars:7,consts:[[1,"content"],[1,"invoice"],["novalidate","",3,"formGroup"],[1,"row"],[1,"col-xs-12"],[1,"page-header"],[1,"fa","fa-shopping-cart"],[1,"col-xs-12","col-sm-9"],[1,"lead"],[1,"col-xs-12","col-sm-3"],["class","help-block pull-right has-error-block",4,"ngIf"],[1,"col-sm-6","col-xs-12"],["errorMessage","Campo obrigat\xf3rio e com 5 caracteres.","label","Nome"],["type","text","formControlName","name","placeholder","Nome","autocomplete","off",1,"form-control"],[1,"col-sm-3","col-xs-6"],["errorMessage","E-mail inv\xe1lido.","label","E-mail"],["type","text","placeholder","E-mail","formControlName","email","autocomplete","off",1,"form-control"],["errorMessage","E-mail inv\xe1lido.","label","Confirma\xe7\xe3o do e-mail"],["type","text","placeholder","E-mail","formControlName","emailConfirmation","autocomplete","off",1,"form-control"],["errorMessage","Campo obrigat\xf3rio e com 5 caracteres.","label","Endere\xe7o"],["type","text","formControlName","address","placeholder","Endere\xe7o","autocomplete","off",1,"form-control"],["errorMessage","Obrigat\xf3rio e somente n\xfameros.","label","N\xfamero"],["type","text","placeholder","N\xfamero","formControlName","number","autocomplete","off",1,"form-control"],["label","Complemento"],["type","text","placeholder","Complemento","formControlName","optionalAddress","autocomplete","off",1,"form-control"],[3,"items","increaseQty","decreaseQty","remove"],[1,"form-group"],["formControlName","paymentOption",3,"options"],[3,"delivery","itemsValue"],["href","order-summary.html",1,"btn","btn-success","pull-right",3,"disabled","click"],[1,"fa","fa-credit-card"],[1,"help-block","pull-right","has-error-block"],[1,"fa","fa-remove"]],template:function(e,t){1&e&&(a.Lb(0,"section",0),a.Lb(1,"section",1),a.Lb(2,"form",2),a.Lb(3,"div",3),a.Lb(4,"div",4),a.Lb(5,"h2",5),a.Jb(6,"i",6),a.jc(7," Finalize o seu pedido "),a.Kb(),a.Kb(),a.Kb(),a.Lb(8,"div",3),a.Lb(9,"div",7),a.Lb(10,"p",8),a.jc(11,"Seus dados:"),a.Kb(),a.Kb(),a.Lb(12,"div",9),a.ic(13,k,3,0,"span",10),a.Kb(),a.Lb(14,"div",11),a.Lb(15,"app-input-container",12),a.Jb(16,"input",13),a.Kb(),a.Kb(),a.Lb(17,"div",14),a.Lb(18,"app-input-container",15),a.Jb(19,"input",16),a.Kb(),a.Kb(),a.Lb(20,"div",14),a.Lb(21,"app-input-container",17),a.Jb(22,"input",18),a.Kb(),a.Kb(),a.Kb(),a.Lb(23,"div",3),a.Lb(24,"div",4),a.Lb(25,"p",8),a.jc(26,"Endere\xe7o de Entrega:"),a.Kb(),a.Kb(),a.Lb(27,"div",11),a.Lb(28,"app-input-container",19),a.Jb(29,"input",20),a.Kb(),a.Kb(),a.Lb(30,"div",14),a.Lb(31,"app-input-container",21),a.Jb(32,"input",22),a.Kb(),a.Kb(),a.Lb(33,"div",14),a.Lb(34,"app-input-container",23),a.Jb(35,"input",24),a.Kb(),a.Kb(),a.Kb(),a.Lb(36,"div",3),a.Lb(37,"div",4),a.Lb(38,"p",8),a.jc(39,"Itens do Pedido:"),a.Kb(),a.Kb(),a.Lb(40,"app-order-items",25),a.Sb("increaseQty",function(e){return t.increaseQty(e)})("decreaseQty",function(e){return t.decreaseQty(e)})("remove",function(e){return t.removeItem(e)}),a.Kb(),a.Kb(),a.Lb(41,"div",3),a.Lb(42,"div",11),a.Lb(43,"p",8),a.jc(44,"Formas de Pagamento:"),a.Kb(),a.Lb(45,"div",26),a.Jb(46,"app-radio",27),a.Kb(),a.Kb(),a.Lb(47,"div",11),a.Lb(48,"p",8),a.jc(49,"Frete e Total:"),a.Kb(),a.Jb(50,"app-delivery-costs",28),a.Kb(),a.Kb(),a.Kb(),a.Lb(51,"div",3),a.Lb(52,"div",4),a.Lb(53,"button",29),a.Sb("click",function(){return t.checkOrder(t.orderForm.value)}),a.Jb(54,"i",30),a.jc(55," Concluir Pedido "),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&e&&(a.yb(2),a.bc("formGroup",t.orderForm),a.yb(11),a.bc("ngIf",t.orderForm.hasError("emailsNotMatch")),a.yb(27),a.bc("items",t.cartItems()),a.yb(6),a.bc("options",t.paymentOptions),a.yb(4),a.bc("delivery",t.delivery)("itemsValue",t.itemsValue()),a.yb(3),a.bc("disabled",!t.orderForm.valid||0===t.cartItems().length))},directives:[s.m,s.i,s.e,l.l,p,s.a,s.h,s.d,y,g,I],encapsulation:2}),e})()}];let w=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[i.a,o.f.forChild(j)]]}),e})()}}]);