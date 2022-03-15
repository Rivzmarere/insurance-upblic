import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NGXLogger } from 'ngx-logger';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InsuranceService } from '../../service/insurance.service';

@Component({
  selector: 'insurance-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12']

  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    console.log(this.validateForm.value)
    this.service.createInsurance(this.validateForm.value).subscribe(res => {
      // this.PurchasesFacade.createNewPurchase(requestBody);
        this.uiLoader.stop();
      },
      error => {
        this.logger.error(error);
        this.uiLoader.stop();
      });

  }


  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private notification: NzNotificationService,private fb: FormBuilder, private service: InsuranceService,   private logger: NGXLogger,
    private uiLoader: NgxUiLoaderService,) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [ Validators.required]],
      type: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      period: [null, [Validators.required]],
      model: [null, [Validators.required]],
    });
  }

  save(){
    this.service.createInsurance(this.validateForm.value).subscribe(res => {
      this.notification.success(
        'Success',
        'Succefully Created the Insurance.'
      );
    }, (err)=>{
      this.notification.error(
        'Error',
        err
      );
    })
  }

}
