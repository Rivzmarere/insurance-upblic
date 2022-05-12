import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { ClaimsComponent } from './pages/claims/claims.component';
import { PaymentsComponent } from './pages/payments/payments.component';

const routes: Routes = [
  { path:'customers', component:CustomersComponent},
  { path:'claims', component:ClaimsComponent},
  { path:'payments', component:PaymentsComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
})
export class ReportsRoutingModule {}
