import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from '../../service/payments.service';

@Component({
  selector: 'insurance-view-car-details',
  templateUrl: './view-car-details.component.html',
  styleUrls: ['./view-car-details.component.scss']
})
export class ViewCarDetailsComponent implements OnInit {
  isVisible = false;
  id: any;
  selectedVehicles:any
  insurance: any;
  insuranceAmount: any;
  ownerId: any;
  vehcleIdNumber: any;

  Form2: FormGroup = this.fb.group({
    name: [{value:'', disabled: true}, [Validators.required]],
    regNumber: [{value:'', disabled:true}, [Validators.required]],
    year: [{value:'', disabled:true}, [Validators.required]],
    country: [{value:'', disabled:true}, [Validators.required]],
    dateRegistered: [{value:'', disabled:true}, [Validators.required]],
    type: [{value:'', disabled:true}, [Validators.required]],
    insurance: [{value:'', disabled:true}, [Validators.required]],
    amount: [{value:'', disabled:true}, [Validators.required]],
  });

  paymentForm: FormGroup = this.fb.group({
    name: [{value:'', disabled: true}, [Validators.required]],
    insurance: [{value:'', disabled:true}, [Validators.required]],
    amount: [{value:'', disabled:true}, [Validators.required]],
    paymentMethod: [{value:'',}, [Validators.required]],

  });

  paymentSubmitForm: FormGroup = this.fb.group({
    name: [{value:'', disabled: true}, [Validators.required]],
    insurance: [{value:'', disabled:true}, [Validators.required]],
    amount: [{value:'', disabled:true}, [Validators.required]],
    ownerId: [{value:'', disabled:true}, [Validators.required]],
    vehcleId: [{value:'', disabled:true}, [Validators.required]],
    paymentMethod: [{value:'',}, [Validators.required]],
  });


  constructor(private router: ActivatedRoute,private service: PaymentsService,private fb: FormBuilder) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Form2
    this.paymentSubmitForm
    this.getCarById()
    this.getInsuranceByName()
  }

  getInsuranceByName(){
    this.service.getInsuranceByName(this.insurance).subscribe((res:any) =>{
     this.insuranceAmount = res.amount

    })
    this.paymentFormTo()
    this.form()

  }

  getCarById(){
    this.service.getCarById(this.id).subscribe((res:any) =>{
      this.showDetails(res)
      this.insurance = res.insurance
      this.ownerId = res.ownerId
      this.vehcleIdNumber = res._id
    })

  }


  showDetails(details:any){
    console.log(details)
    this.Form2.controls["name"].setValue( details.name)
      this.Form2.controls["regNumber"].setValue(details.regNumber)
      this.Form2.controls["year"].setValue(details.year)
      this.Form2.controls["country"].setValue(details.country)
      this.Form2.controls["dateRegistered"].setValue(details.dateRegistered)
      this.Form2.controls["type"].setValue(details.type)
      this.Form2.controls["insurance"].setValue(details.insurance)
      this.Form2.controls["amount"].setValue(details.amount)

  }

  showModal(): void {
    this.isVisible = true;

    console.log(this.ownerId)


  }

  form(){

    this.paymentSubmitForm.controls["name"].setValue(this.paymentForm.value.name)
    this.paymentSubmitForm.controls["insurance"].setValue(this.paymentForm.value.insurance)
    this.paymentSubmitForm.controls["amount"].setValue(this.insuranceAmount)
    this.paymentSubmitForm.controls["ownerId"].setValue(this.ownerId)
    this.paymentSubmitForm.controls["vehcleId"].setValue(this.vehcleIdNumber)
    this.paymentSubmitForm.controls["paymentMethod"].setValue(this.paymentForm.value.paymentMethod)
  }

  handleOk(): void {
    this.form()
    console.log(this.paymentForm.value)
    this.service.createPayment(this.paymentSubmitForm.value).subscribe((res:any) =>{
  console.log(res)
    })

    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  paymentFormTo(){

    this.paymentForm.controls["name"].setValue(this.Form2.value.name)
    this.paymentForm.controls["insurance"].setValue(this.Form2.value.insurance)
    this.paymentForm.controls["amount"].setValue(this.insuranceAmount)
    console.log(this.paymentForm.value)

  }

}
