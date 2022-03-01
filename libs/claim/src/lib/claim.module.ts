import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimRoutingModule } from './claim-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [CommonModule,ClaimRoutingModule,PagesModule],
})
export class ClaimModule {}
