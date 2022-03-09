import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePaymentComponent } from './pages/create-payment/create-payment.component';
import { ViewPaymentsComponent } from './pages/view-payments/view-payments.component';
import { ViewCarDetailsComponent } from './pages/view-car-details/view-car-details.component';

const routes: Routes = [
  { path:'create-payment', component:CreatePaymentComponent},
  { path:'view-payments', component:ViewPaymentsComponent},
  { path:'make-payment/:id', component:ViewCarDetailsComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {}
