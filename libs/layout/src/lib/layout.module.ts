import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './pages/container/container.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  imports: [CommonModule,
    NzLayoutModule],
  declarations: [
    ContainerComponent
  ],
})
export class LayoutModule {}
