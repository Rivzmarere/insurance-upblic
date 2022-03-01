import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePaymentComponent } from './pages/create-payment/create-payment.component';
import { ViewPaymentsComponent } from './pages/view-payments/view-payments.component';

const routes: Routes = [
  { path:'create-payment', component:CreatePaymentComponent},
  { path:'view-payments', component:ViewPaymentsComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {}
