import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRackPageRoutingModule } from './new-rack-routing.module';

import { NewRackPage } from './new-rack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRackPageRoutingModule
  ],
  declarations: [NewRackPage]
})
export class NewRackPageModule {}
