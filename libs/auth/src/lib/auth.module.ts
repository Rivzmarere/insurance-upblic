import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthService } from './service/auth.service';
@NgModule({
  imports: [CommonModule,
     AuthRoutingModule,
    PagesModule],
  declarations: [
  ],
  providers:[AuthService]
})
export class AuthModule {}
