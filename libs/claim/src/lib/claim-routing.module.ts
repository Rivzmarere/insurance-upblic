import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimDetailsComponent } from './pages/claim-details/claim-details.component';
import { CreateClaimComponent } from './pages/create-claim/create-claim.component';
import { ViewClaimsComponent } from './pages/view-claims/view-claims.component';


const routes: Routes = [
  { path:'create-claim', component:CreateClaimComponent},
  { path:'view-claims', component:ViewClaimsComponent},
  { path:'make-claim/:id', component:ClaimDetailsComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClaimRoutingModule {}
