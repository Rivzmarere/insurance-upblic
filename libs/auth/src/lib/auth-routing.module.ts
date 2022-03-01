import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@insurance/core';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {
    path: '', component: CoverComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
