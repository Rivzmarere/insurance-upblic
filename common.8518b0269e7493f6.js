"use strict";(self.webpackChunkinsurance=self.webpackChunkinsurance||[]).push([[592],{4467:(p,o,r)=>{r.d(o,{y:()=>s});var n=r(5e3),a=r(520);let s=(()=>{class e{constructor(t){this.http=t}createInsurance(t){return this.http.post("https://hit200node.herokuapp.com/insurance/post-insurance",t)}getAllInsurances(){return this.http.get("https://hit200node.herokuapp.com/insurance/get-all-insurances")}getInsuranceById(){return this.http.get("https://hit200node.herokuapp.com/")}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(a.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2446:(p,o,r)=>{r.d(o,{v:()=>s});var n=r(5e3),a=r(520);let s=(()=>{class e{constructor(t){this.http=t}createCustomer(t){return this.http.post("https://hit200node.herokuapp.com/customer/post-customer",t)}addCar(t){return this.http.post("https://hit200node.herokuapp.com/car/add-car",t)}getOwnerCars(t){return this.http.get(`https://hit200node.herokuapp.com/car/get-car-by-owner-id/${t}`)}getCarbyId(t){return this.http.get(`https://hit200node.herokuapp.com/car/get-car-by-id/${t}`)}uploadImage(t){return this.http.post("https://hit200node.herokuapp.com/file",t)}updateVehcleById(t,c){return this.http.put(`https://hit200node.herokuapp.com/car/update-car/${t}`,c)}getAllCustomers(){return this.http.get("https://hit200node.herokuapp.com/customer/get-all-customers")}getCustomerById(t){return this.http.get(`https://hit200node.herokuapp.com/customer/get-customer-by/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(a.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9201:(p,o,r)=>{r.d(o,{c:()=>s});var n=r(5e3),a=r(520);let s=(()=>{class e{constructor(t){this.http=t}createPayment(t){return this.http.post("https://hit200node.herokuapp.com/payment/post-payment",t)}getAllPayments(){return this.http.get("https://hit200node.herokuapp.com/payment/view-all-payments")}getCarByRegNumber(t){return this.http.get(`https://hit200node.herokuapp.com/car/get-car-by-regNumber/${t}`)}getPaymentsByCarID(t){return this.http.get(`https://hit200node.herokuapp.com/payment/get-payment-by-vehcleId/${t}`)}getInsuranceByName(t){return this.http.get(`https://hit200node.herokuapp.com/insurance/get-insurance-by-name/${t}`)}getCarById(t){return this.http.get(`https://hit200node.herokuapp.com/car/get-car-by-id/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(a.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);