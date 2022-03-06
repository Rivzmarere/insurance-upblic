/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

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



  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
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
    console.log('done');
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
      case 2: {
        this.formpage = false
        this.documentspage = false
        break;
      }
      default: {
        this.index = 'error';
      }
    }}


  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder, private msg: NzMessageService) {}
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
    this.validateForm = this.fb.group({
      name: [null, [Validators.email, Validators.required]],
      surname: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      idNumber: [null, [Validators.required]],
      city: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }
}
