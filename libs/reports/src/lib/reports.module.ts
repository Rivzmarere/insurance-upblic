import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [CommonModule,PagesModule,ReportsRoutingModule],
})
export class ReportsModule {}
