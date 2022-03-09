import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { ViewCutomersComponent } from './pages/view-cutomers/view-cutomers.component';
import { ViewCustomerComponent } from './pages/view-customer/view-customer.component';


const routes: Routes = [
  { path:'create-customer', component:CreateCustomerComponent},
  { path:'view-customer/:id', component: ViewCustomerComponent},
  { path:'view-customers', component:ViewCutomersComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
