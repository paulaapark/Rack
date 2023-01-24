import { Component, OnInit } from '@angular/core';
import { RackService } from 'src/app/services/rack.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder-input',
  templateUrl: './builder-input.page.html',
  styleUrls: ['./builder-input.page.scss'],
})
export class BuilderInputPage implements OnInit {
  public myDate = new Date();
  public hrs = this.myDate.getHours();
  public timeOfDay:string;
  userRack:any;
  filteredRack:any;
  generatedArray:any;
  builderForm:FormGroup;

  constructor(public userService:UserService, public rackService:RackService, private formBuilder:FormBuilder) { 
    if (this.hrs < 12){
      this.timeOfDay = 'morning';
    }else if ( this.hrs >= 12 && this.hrs <=17){
      this.timeOfDay = 'afternoon';
    }else{
      this.timeOfDay = 'evening';
    };


    this.builderForm = formBuilder.group({
      Season: ['', [Validators.required]],
      Item_type: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.rackService.getUserRack().subscribe(res => {
      this.userRack = Object.values(res);
    });
  }

  pushItem(){

  }

  generate(){
    let formData= this.builderForm.value;
    

  }

}
