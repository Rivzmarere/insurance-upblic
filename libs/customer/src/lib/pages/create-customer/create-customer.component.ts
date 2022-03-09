/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'insurance-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  current = 0;
  formpage: boolean =true
  documentspage: boolean =false
  filePath:any


  index = 'First-content';
  title = 'fileUpload';
  images:any;
  multipleImages = [];
  firstFormGroup: FormGroup = this.fb.group({
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


  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  // done(): void {
  //   this.service.createCustomer(this.Form1.value)
  // }
  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.formpage = true
        this.documentspage = false
        break;
      }
      case 1: {
        this.formpage = false
        this.documentspage = true
        break;
      }
      default: {
        this.index = 'error';
      }
    }}

  constructor(private fb: FormBuilder,private service: CustomerService,   private logger: NGXLogger,
    private uiLoader: NgxUiLoaderService, private msg: NzMessageService) {}

    ngOnInit(){
      this.firstFormGroup

    }

    selectImage(event:any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.images = file;
      }
    }

    selectMultipleImage(event:any){
      if (event.target.files.length > 0) {
        this.multipleImages = event.target.files;
      }
    }

    onSubmit(){
      const formData = new FormData();
      formData.append('file', this.images);

      this.service.uploadImage(formData).subscribe((res:any) =>{
        this.filePath = res.path
        this.save()

      }
      );

    }

    save(){
      console.log(this.filePath)
      this.firstFormGroup.controls["name"].setValue(this.Form1.value.name)
      this.firstFormGroup.controls["surname"].setValue(this.Form1.value.surname)
      this.firstFormGroup.controls["dateOfBirth"].setValue(this.Form1.value.dateOfBirth)
      this.firstFormGroup.controls["idNumber"].setValue(this.Form1.value.idNumber)
      this.firstFormGroup.controls["city"].setValue(this.Form1.value.city)
      this.firstFormGroup.controls["phoneNumber"].setValue(this.Form1.value.phoneNumber)
      this.firstFormGroup.controls["address"].setValue(this.Form1.value.address)
      this.firstFormGroup.controls["occupation"].setValue(this.Form1.value.occupation)
      this.firstFormGroup.controls["email"].setValue(this.Form1.value.email)
      this.firstFormGroup.controls["path"].setValue(this.filePath)
      this.hitEndpoint()



    }

    hitEndpoint(){
      console.log(this.firstFormGroup.value)
      this.service.createCustomer(this.firstFormGroup.value).subscribe((res:any) =>{
        this.filePath = res.path
      })

    }

    onMultipleSubmit(){
      const formData = new FormData();
      for(const img of this.multipleImages){
        formData.append('files', img);
      }

      this.service.uploadImage(formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
}
