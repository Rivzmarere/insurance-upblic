import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { ViewClaimsComponent } from './view-claims/view-claims.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    CreateClaimComponent,
    ViewClaimsComponent
  ],
  imports: [
    CommonModule,
    NzFormModule ,
    NzInputModule,
    NzSelectModule,
   ReactiveFormsModule,
   NzTableModule,
   FormsModule,
   NzDividerModule
  ]
})
export class PagesModule { }
