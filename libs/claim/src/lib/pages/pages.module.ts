import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { ViewClaimsComponent } from './view-claims/view-claims.component';



@NgModule({
  declarations: [
    CreateClaimComponent,
    ViewClaimsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
