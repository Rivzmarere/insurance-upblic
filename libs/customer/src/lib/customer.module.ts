import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [CommonModule, CustomerRoutingModule, PagesModule],
})
export class CustomerModule {}
