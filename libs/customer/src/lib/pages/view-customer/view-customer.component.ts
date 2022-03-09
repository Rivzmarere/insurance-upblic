import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from 'libs/add-insurance/src/lib/service/insurance.service';
import { CustomerService } from '../../service/customer.service';
@Component({
  selector: 'insurance-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {
  id: any;
  isVisible = false;
  isConfirmLoading = false;

  data:any= []


  Form1: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    surname: [null, [Validators.required]],
    dateOfBirth: [null, [Validators.required]],
    idNumber: [null, [Validators.required]],
    city: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    address: [null, [Validators.required]],
    occupation: [null, [Validators.required]],
    email: [null, [Validators.required]],
    path:[null, [Validators.required]]
  });

  Form2: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    regNumber: [null, [Validators.required]],
    year: [null, [Validators.required]],
    country: [null, [Validators.required]],
    dateRegistered: [null, [Validators.required]],
    type: [null, [Validators.required]],
    insurance: [null, [Validators.required]],
  });


  carForm: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    regNumber: [null, [Validators.required]],
    year: [null, [Validators.required]],
    country: [null, [Validators.required]],
    dateRegistered: [null, [Validators.required]],
    type: [null, [Validators.required]],
    ownerId: [null, [Validators.required]],
    insurance: [null, [Validators.required]],
  });
  cars: any = [];
  currentCustomer: any;
  insurance: any;



  constructor(private router: ActivatedRoute,private service: CustomerService,private fb: FormBuilder,private service1: InsuranceService) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.id)
    this.Form1
    this.getCustomer()
    this.getOwnerCars()
  }


  getCustomer(){
    this.service.getCustomerById(this.id).subscribe(res =>{
      this.currentCustomer = res
      console.log(this.currentCustomer)
      this.Form1.controls["name"].setValue( this.currentCustomer.name)
      this.Form1.controls["surname"].setValue(this.currentCustomer.surname)
      this.Form1.controls["dateOfBirth"].setValue(this.currentCustomer.dateOfBirth)
      this.Form1.controls["idNumber"].setValue(this.currentCustomer.idNumber)
      this.Form1.controls["city"].setValue(this.currentCustomer.city)
      this.Form1.controls["phoneNumber"].setValue(this.currentCustomer.phoneNumber)
      this.Form1.controls["address"].setValue(this.currentCustomer.address)
      this.Form1.controls["occupation"].setValue(this.currentCustomer.occupation)
      this.Form1.controls["email"].setValue(this.currentCustomer.email)
    })
  }
  showModal(): void {
    this.Form2
    this.isVisible = true;
    this.getInsurances()
  }
  handleOk(): void {
    this.save()
    console.log(this.carForm.value)
    this.service.addCar(this.carForm.value).subscribe(res=>{
      console.log(res)
    })
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  save(){
    this.carForm
    this.carForm.controls["name"].setValue(this.Form2.value.name)
    this.carForm.controls["regNumber"].setValue(this.Form2.value.regNumber)
    this.carForm.controls["year"].setValue(this.Form2.value.year)
    this.carForm.controls["country"].setValue(this.Form2.value.country)
    this.carForm.controls["dateRegistered"].setValue(this.Form2.value.dateRegistered)
    this.carForm.controls["type"].setValue(this.Form2.value.type)
    this.carForm.controls["insurance"].setValue(this.Form2.value.insurance)
    this.carForm.controls["ownerId"].setValue(this.id)
  }

  getOwnerCars(){
    this.service.getOwnerCars(this.id).subscribe(res=>{
      this.cars = res
    })
  }

  getInsurances(){
    this.service1.getAllInsurances().subscribe(res=>{
     this.insurance = res
     console.log(this.insurance)
    })
  }

}
