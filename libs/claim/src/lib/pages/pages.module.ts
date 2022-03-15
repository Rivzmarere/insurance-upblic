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
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    CreateClaimComponent,
    ViewClaimsComponent,
    ClaimDetailsComponent
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
   NzButtonModule,
   NzModalModule,
   RouterModule,
  ],
  providers:[
    NzNotificationService
  ]
})
export class PagesModule { }
