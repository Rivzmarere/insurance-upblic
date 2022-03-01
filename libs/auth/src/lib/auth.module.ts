import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ContainerComponent } from './pages/container/container.component';

@NgModule({
  imports: [CommonModule,
     AuthRoutingModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContainerComponent
  ],
})
export class AuthModule {}
