import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ViewCutomersComponent } from './view-cutomers/view-cutomers.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {RouterModule} from '@angular/router';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    ViewCutomersComponent,
    ViewCustomerComponent,

  ],
  imports: [
    CommonModule,
    NzFormModule ,
     NzInputModule,
     NzSelectModule,
    ReactiveFormsModule,
    NzTableModule,
    FormsModule,
    NzDividerModule,
    NzStepsModule,
    NzGridModule,
    NzUploadModule,
    NzButtonModule,
    NzIconModule,
    RouterModule,
    NzModalModule,
    NzPopoverModule,
    NzDropDownModule,


  ]
})
export class PagesModule { }
