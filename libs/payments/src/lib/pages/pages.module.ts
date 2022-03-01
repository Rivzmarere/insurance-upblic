import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';



@NgModule({
  declarations: [
    CreatePaymentComponent,
    ViewPaymentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
