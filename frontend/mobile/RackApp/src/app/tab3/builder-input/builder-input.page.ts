import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-builder-input',
  templateUrl: './builder-input.page.html',
  styleUrls: ['./builder-input.page.scss'],
})
export class BuilderInputPage implements OnInit {
  public myDate = new Date();
  public hrs = this.myDate.getHours();
  public timeOfDay:string;

  constructor(public userService:UserService) { 
    if (this.hrs < 12){
      this.timeOfDay = 'morning';
    }else if ( this.hrs >= 12 && this.hrs <=17){
      this.timeOfDay = 'afternoon';
    }else{
      this.timeOfDay = 'evening';
    }
  }

  ngOnInit() {
  }

}
