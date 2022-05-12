/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentsService } from '../../../../../payments/src/lib/service/payments.service';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ClaimService } from '../../service/claim.service';
import { NzModalService } from 'ng-zorro-antd/modal';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'insurance-view-claims',
  templateUrl: './view-claims.component.html',
  styleUrls: ['./view-claims.component.scss']
})
export class ViewClaimsComponent implements OnInit {
  searchText:string = '';
  result: any = [];
  isVisible = false;

  public update={
    status:"Approved"
  }




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

  constructor(private modal: NzModalService,private notification: NzNotificationService,private fb: FormBuilder,  private service:ClaimService) {}

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

     this.getClaims()
  }

  getClaims(){
    this.service.getAllClaims().subscribe((data) => {
      this.result = data
      this.notification.success(
        'Success',
        'Succefully Retrived All Claims.'
      );
    },(err)=>{
      this.notification.error(
        'Error',
        err
      );
    })

  }

  search(){
    console.log(this.searchText)
    this.service.getClaimsById().subscribe((data) => {
      this.result = [data]
      this.notification.success(
        'Success',
        'Succefully Retrived Car.'
      );
    },(err)=>{
      this.notification.error(
        'Error',
        err
      );
    })

  }


  info(name:any,surname:any,car:any,id:any){
    this.modal.info({
      nzTitle: 'Confrimation of Authorization for '+ name + ' ' + surname,
      nzContent: 'Are you sure you want to confrim the car ' + car + ' of '+ name +' '+ surname+' with refrence number '+ id,
      nzOnOk: () => this.edit(id)
    });

  }

  edit(id:any){
    this.service.updateClaim(this.update,id).subscribe( data => {
      this.notification.success(
        'Success',
        'Succefully Approved A Claim.'
      );
      this.getClaims()
    },(err)=>{
      this.notification.error(
        'Error',
        err
      );
    })


  }

}
