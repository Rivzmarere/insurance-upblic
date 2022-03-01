import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContainerComponent } from './pages/container/container.component';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
