import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [CommonModule,PaymentsRoutingModule, PagesModule],
})
export class PaymentsModule {}
