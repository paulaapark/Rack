import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DefaultHeadComponent } from 'src/app/components/default-head/default-head.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ DefaultHeadComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ DefaultHeadComponent ],
})
export class SharedModule { }
