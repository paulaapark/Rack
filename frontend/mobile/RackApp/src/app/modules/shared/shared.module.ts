import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DefaultHeadComponent } from 'src/app/components/default-head/default-head.component';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RackService } from 'src/app/services/rack.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';



@NgModule({
  declarations: [ DefaultHeadComponent, FilterPipe],
  providers: [ UserService, RackService ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ DefaultHeadComponent, FilterPipe ],
})
export class SharedModule { }
