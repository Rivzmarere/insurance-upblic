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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ViewCarDetailsComponent } from './view-car-details/view-car-details.component';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    CreatePaymentComponent,
    ViewPaymentsComponent,
    ViewCarDetailsComponent
  ],
  imports: [
    CommonModule,
    NzFormModule ,
    NzInputModule,
    NzSelectModule,
   ReactiveFormsModule,
   NzTableModule,
   FormsModule,
   NzDividerModule,
   NzButtonModule,
   RouterModule,
   NzModalModule,
  ],
  providers:[
    NzNotificationService

  ]
})
export class PagesModule { }
