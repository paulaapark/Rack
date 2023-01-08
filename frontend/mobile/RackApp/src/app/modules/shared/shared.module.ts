import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DefaultHeadComponent } from 'src/app/components/default-head/default-head.component';
import { TabsPage } from 'src/app/tabs/tabs.page';


@NgModule({
  declarations: [ DefaultHeadComponent ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ DefaultHeadComponent ],
})
export class SharedModule { }
