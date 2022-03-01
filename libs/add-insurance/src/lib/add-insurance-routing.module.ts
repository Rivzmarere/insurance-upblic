import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './pages/create-insurance/create-customer.component';
import { ViewInsuranceComponent } from './pages/view-insurance/view-insurance.component';

const routes: Routes = [
  { path:'create-insurance', component:CreateCustomerComponent},
  { path:'view-insurance', component:ViewInsuranceComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AddInsuranceRoutingModule {
}
