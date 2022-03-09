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


  index = 'First-content';



 Form1!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };
  formData: any;
  fileName!: string;
  type!: string;
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
    data:[null, [Validators.required]],
    path:[null, [Validators.required]]
  });

  submitForm(): void {
    console.log(this.Form1.value)
    if (this.Form1.valid) {
      console.log('submit', this.Form1.value);
    } else {
      Object.values(this.Form1.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    this.service.createCustomer(this.Form1.value)
  }
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


  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }



  constructor(private fb: FormBuilder,private service: CustomerService,   private logger: NGXLogger,
    private uiLoader: NgxUiLoaderService, private msg: NzMessageService) {}
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  ngOnInit(): void {
    this.form()


  }

  form(){
    this.Form1 = this.fb.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      idNumber: [null, [Validators.required]],
      city: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      email: [null, [Validators.required]],
      data:[null, [Validators.required]],
      path:[null, [Validators.required]]
    });

  }

  transferfiles(){
    this.firstFormGroup.controls["name"].setValue(this.Form1.value.name)
    this.firstFormGroup.controls["surname"].setValue(this.Form1.value.surname)
    this.firstFormGroup.controls["dateOfBirth"].setValue(this.Form1.value.dateOfBirth)
    this.firstFormGroup.controls["idNumber"].setValue(this.Form1.value.idNumber)
    this.firstFormGroup.controls["city"].setValue(this.Form1.value.city)
    this.firstFormGroup.controls["phoneNumber"].setValue(this.Form1.value.phoneNumber)
    this.firstFormGroup.controls["address"].setValue(this.Form1.value.address)
    this.firstFormGroup.controls["occupation"].setValue(this.Form1.value.occupation)
    this.firstFormGroup.controls["email"].setValue(this.Form1.value.email)
    this.firstFormGroup.controls["data"].setValue(this.fileName)
    this.firstFormGroup.controls["path"].setValue(this.Form1.value.data)

  }

  save(){
    this.transferfiles()
    console.log(this.firstFormGroup.value)

    this.service.createCustomer(this.firstFormGroup.value).subscribe(res => {
      // this.PurchasesFacade.createNewPurchase(requestBody);
        this.uiLoader.stop();
      },
      error => {
        this.logger.error(error);
        this.uiLoader.stop();
      });
  }

  check(event:any){
    this.service.uploadImage(event).subscribe(res => {
      // this.PurchasesFacade.createNewPurchase(requestBody);
        this.uiLoader.stop();
      },
      error => {
        this.logger.error(error);
        this.uiLoader.stop();
      });
  }
}
