import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzCardModule,
    NzIconModule,
    


  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContainerComponent
  ],
})
export class PagesModule {}
