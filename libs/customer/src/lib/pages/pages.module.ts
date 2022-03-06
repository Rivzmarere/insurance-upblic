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



@NgModule({
  declarations: [
    CreateCustomerComponent,
    ViewCutomersComponent,

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
  ],
  providers:[
    NzMessageService
  ]
})
export class PagesModule { }
