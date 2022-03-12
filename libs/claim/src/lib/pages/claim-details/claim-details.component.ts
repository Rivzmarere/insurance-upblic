import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from '../../../../../payments/src/lib/service/payments.service';

@Component({
  selector: 'insurance-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss']
})
export class ClaimDetailsComponent implements OnInit {
  insuranceAmount: any;
  isVisible = false;
  id: any;
  selectedVehicles:any
  insurance: any;
  ownerId: any;
  vehcleIdNumber: any;
  cars: any = [];

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
    ownerId: [{value:'', disabled:true}, [Validators.required]],
    vechleId: [{value:'',disabled:true}, [Validators.required]],

  });
  paymentSubmitForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    insurance: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    paymentMethod: ['', [Validators.required]],
    ownerId: ['', [Validators.required]],
    vechleId: ['', [Validators.required]],

  });
  carDetails: any;


  constructor(private router: ActivatedRoute,private service: PaymentsService,private fb: FormBuilder) {
    this.id = this.router.snapshot.params['id']
   }

  ngOnInit(): void {
    this.Form2
    this.getCarById()
  }


  getCarById(){
    this.service.getCarById(this.id).subscribe((res:any) =>{
      this.paymentForm.controls["ownerId"].setValue(res.ownerId)
      this.paymentForm.controls["vechleId"].setValue(res._id)
      this.showDetails(res)

    })

  }


  showDetails(details:any){
    console.log(details)
    this.Form2.controls["name"].setValue(details.name)
      this.Form2.controls["regNumber"].setValue(details.regNumber)
      this.Form2.controls["year"].setValue(details.year)
      this.Form2.controls["country"].setValue(details.country)
      this.Form2.controls["dateRegistered"].setValue(details.dateRegistered)
      this.Form2.controls["type"].setValue(details.type)
      this.Form2.controls["insurance"].setValue(details.insurance)
      this.service.getInsuranceByName(details.insurance).subscribe((res:any) =>{
        this.paymentForm.controls["amount"].setValue(res.amount)

       })

  }

  showModal(): void {
    this.isVisible = true;
    this.paymentForm.controls["name"].setValue(this.Form2.value.name)
      this.paymentForm.controls["insurance"].setValue(this.Form2.value.insurance)

  }

  handleOk(): void {

      this.paymentSubmitForm.controls["name"].setValue(this.paymentForm.value.name)
      this.paymentSubmitForm.controls["insurance"].setValue(this.paymentForm.value.insurance)
      this.paymentSubmitForm.controls["amount"].setValue(this.paymentForm.value.amount)
      this.paymentSubmitForm.controls["ownerId"].setValue(this.paymentForm.value.ownerId)
      this.paymentSubmitForm.controls["vechleId"].setValue(this.paymentForm.value.vechleId)
      this.service.createPayment(this.paymentForm.getRawValue()).subscribe(res=>{
        console.log(res)
      })


    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getPaymentsByCarID(){
    this.service.getPaymentsByCarID(this.id).subscribe(res=>{
      this.cars = res
    })
  }

}
