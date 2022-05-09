import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [CommonModule,
    PagesModule,
    DashboardRoutingModule],
})
export class DashboardModule {}
