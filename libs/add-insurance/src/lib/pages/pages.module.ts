import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './create-insurance/create-customer.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    ViewInsuranceComponent
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
  ],
  providers:[
    NzNotificationService
  ]
})
export class PagesModule { }
