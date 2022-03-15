import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PaymentsService } from '../../service/payments.service';

@Component({
  selector: 'insurance-view-car-details',
  templateUrl: './view-car-details.component.html',
  styleUrls: ['./view-car-details.component.scss']
})
export class ViewCarDetailsComponent implements OnInit {
  insuranceAmount: any;
  isVisible = false;
  id: any;
  selectedVehicles:any
  insurance: any;
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


  constructor(private notification: NzNotificationService,private router: ActivatedRoute,private service: PaymentsService,private fb: FormBuilder) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Form2
    // this.paymentSubmitForm
    this.getCarById()

  }



  getCarById(){
    this.service.getCarById(this.id).subscribe((res:any) =>{
      this.paymentForm.controls["ownerId"].setValue(res.ownerId)
      this.paymentForm.controls["vechleId"].setValue(res._id)
      this.notification.success(
        'Success',
        'Succefully Retrived Car.'
      );
      this.showDetails(res)

    },(err)=>{
      this.notification.error(
        'Error',
        err
      );
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
        this.notification.success(
          'Success',
          'Payment Was Succefully Made.'
        );
      },(err)=>{
        this.notification.error(
          'Error',
          err
        );
      })


    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }




}
