import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './create-insurance/create-customer.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';



@NgModule({
  declarations: [
    CreateCustomerComponent,
    ViewInsuranceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
