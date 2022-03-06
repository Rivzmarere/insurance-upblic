import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [
    CreatePaymentComponent,
    ViewPaymentsComponent
  ],
  imports: [
    CommonModule,
    NzFormModule ,
    NzInputModule,
    NzSelectModule,
   ReactiveFormsModule,
   NzTableModule,
   FormsModule,
   NzDividerModule
  ]
})
export class PagesModule { }
