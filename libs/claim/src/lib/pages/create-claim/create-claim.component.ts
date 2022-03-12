/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentsService } from '../../../../../payments/src/lib/service/payments.service';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'insurance-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.scss']
})
export class CreateClaimComponent implements OnInit {
  searchText:string = '';
  result: any = [];




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


  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder,  private service:PaymentsService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }

  search(){
    console.log(this.searchText)
    this.service.getCarByRegNumber(this.searchText).subscribe((data) => {
      this.result = [data]
    })

  }

}
