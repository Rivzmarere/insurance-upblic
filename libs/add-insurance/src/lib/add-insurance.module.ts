import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInsuranceRoutingModule } from './add-insurance-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [CommonModule, AddInsuranceRoutingModule,PagesModule],
})
export class AddInsuranceModule {}
