import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { PagesModule } from './pages/pages.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  imports: [CommonModule, CustomerRoutingModule, PagesModule],
  providers:[
    NzNotificationService,NzMessageService
  ]
})
export class CustomerModule {}
