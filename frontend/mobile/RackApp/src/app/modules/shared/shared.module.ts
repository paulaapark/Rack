import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DefaultHeadComponent } from 'src/app/components/default-head/default-head.component';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RackService } from 'src/app/services/rack.service';



@NgModule({
  declarations: [ DefaultHeadComponent],
  providers: [ UserService, RackService ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ DefaultHeadComponent ],
})
export class SharedModule { }
