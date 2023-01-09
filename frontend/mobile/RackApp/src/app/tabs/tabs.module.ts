import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { SharedModule } from '../modules/shared/shared.module';

// import { TabsPage } from './tabs.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SharedModule
  ],
  declarations: []
  //was declaring TabsPage here before but moved it to shared module 
})
export class TabsPageModule {}
