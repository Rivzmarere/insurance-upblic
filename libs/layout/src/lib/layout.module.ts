import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './pages/container/container.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  imports: [CommonModule,
    RouterModule,
    NzMenuModule,
    NzLayoutModule],
  declarations: [
    ContainerComponent,
  ],
})
export class LayoutModule {}
