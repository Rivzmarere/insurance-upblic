import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ViewCutomersComponent } from './view-cutomers/view-cutomers.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateCustomerComponent,
    ViewCutomersComponent,

  ],
  imports: [
    CommonModule,
    NzFormModule ,
     NzInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
