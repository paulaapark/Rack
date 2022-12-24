import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultHeadComponent } from 'src/app/components/default-head/default-head.component';


@NgModule({
  declarations: [ DefaultHeadComponent ],
  imports: [
    CommonModule,
  ],
  exports: [ DefaultHeadComponent ],
})
export class SharedModule { }
