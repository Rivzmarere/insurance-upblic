import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PagesModule } from './pages/pages.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  imports: [CommonModule,PaymentsRoutingModule, PagesModule],
  providers:[
    NzNotificationService,NzMessageService
  ]
})
export class PaymentsModule {}
