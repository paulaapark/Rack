import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DefaultHeadComponent } from 'src/app/components/default-head/default-head.component';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { TabsPageRoutingModule } from 'src/app/tabs/tabs-routing.module';




@NgModule({
  declarations: [ DefaultHeadComponent, TabsPage ],
  imports: [
    CommonModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  exports: [ DefaultHeadComponent, TabsPage ],
})
export class SharedModule { }
