import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'libs/customer/src/lib/service/customer.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PaymentsService } from '../../../../../payments/src/lib/service/payments.service';
import { ClaimService } from '../../service/claim.service';

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
    surname: [{value:'', disabled: true}, [Validators.required]],
    carName: [{value:'', disabled: true}, [Validators.required]],
    insurance: [{value:'', disabled:true}, [Validators.required]],
    ownerId: [{value:'', disabled:true}, [Validators.required]],
    vechleId: [{value:'',disabled:true}, [Validators.required]],

  });
  paymentSubmitForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    ownerId: ['', [Validators.required]],
    vechleId: ['', [Validators.required]],
    carName: ['', [Validators.required]],

  });
  carDetails: any;
  period: any;
  currentCustomer: any;


  constructor(private notification: NzNotificationService,private router: ActivatedRoute,private service: PaymentsService,private fb: FormBuilder,private customerService:CustomerService,private ClaimService: ClaimService) {
    this.id = this.router.snapshot.params['id']
   }

  ngOnInit(): void {
    this.Form2
    this.getCarById()
    this.getPaymentsByCarID()
  }


  getCarById(){
    this.service.getCarById(this.id).subscribe((res:any) =>{
      this.paymentForm.controls["ownerId"].setValue(res.ownerId)
      this.paymentForm.controls["vechleId"].setValue(res._id)
      this.showDetails(res)
      this.notification.success(
        'Success',
        'Succefully Retrived Customer.'
      );

    })

  }

  getCustomer(data:any){
    this.customerService.getCustomerById(data).subscribe((res:any) =>{
      this.currentCustomer = res
      this.paymentForm.controls["surname"].setValue(this.currentCustomer.surname)
      this.paymentForm.controls["name"].setValue(res.name)

    },(err)=>{
      this.notification.error(
        'Error',
       err
      );
    })
  }


  showDetails(details:any){
    console.log(details)
    this.getCustomer(details.ownerId)
    this.Form2.controls["name"].setValue(details.name)
      this.Form2.controls["regNumber"].setValue(details.regNumber)
      this.Form2.controls["year"].setValue(details.year)
      this.Form2.controls["country"].setValue(details.country)
      this.Form2.controls["dateRegistered"].setValue(details.dateRegistered)
      this.Form2.controls["type"].setValue(details.type)
      this.Form2.controls["insurance"].setValue(details.insurance)
      this.service.getInsuranceByName(details.insurance).subscribe((res:any) =>{
        this.period = res.period

       })

  }

  showModal(): void {
    this.isVisible = true;
    this.paymentForm.controls["carName"].setValue(this.Form2.value.name)
      this.paymentForm.controls["insurance"].setValue(this.Form2.value.insurance)

  }

  handleOk(): void {
    this.paymentSubmitForm.controls["carName"].setValue(this.paymentForm.value.carName)
      this.paymentSubmitForm.controls["name"].setValue(this.paymentForm.value.name)
      this.paymentSubmitForm.controls["surname"].setValue(this.paymentForm.value.surname)
      this.paymentSubmitForm.controls["ownerId"].setValue(this.paymentForm.value.ownerId)
      this.paymentSubmitForm.controls["vechleId"].setValue(this.paymentForm.value.vechleId)
      this.ClaimService.createClaim(this.paymentSubmitForm.getRawValue()).subscribe(res=>{
        console.log(res)
        this.notification.success(
          'Success',
          'Claim Created Succefully.'
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

  getPaymentsByCarID(){
    this.service.getPaymentsByCarID(this.id).subscribe((res:any) =>{
      this.cars = res
      console.log(res)
      this.notification.success(
        'Success',
        'Succefully Retrived Payments.'
      );

    },(err)=>{
      this.notification.error(
        'Error',
        err
      );
    })
  }

}
