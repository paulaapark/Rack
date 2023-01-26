import { Component, OnInit } from '@angular/core';
import { RackService } from 'src/app/services/rack.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

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
  generatedItem:any;
  generatedArray:any;
  builderForm;
  filterQuery:any;
  

  constructor(public userService:UserService, public rackService:RackService, private formBuilder:FormBuilder) { 
    if (this.hrs < 12){
      this.timeOfDay = 'morning';
    }else if ( this.hrs >= 12 && this.hrs <=17){
      this.timeOfDay = 'afternoon';
    }else{
      this.timeOfDay = 'evening';
    };

    this.builderForm = formBuilder.group({
      items: this.formBuilder.array([
        this.itemInit(),
      ])
    });
    
    
  }



  ngOnInit() {
    // this.rackService.getUserRack().subscribe(res => {
    //   this.userRack = Object.values(res);
    // });

    
    // this.filteredRack = this.userRack.filter(this.filterQuery)
  }


  itemInit(){
    return this.formBuilder.group({
      Season: ['', [Validators.required]],
      Item_type: ['', [Validators.required]]
    })
  }

  addItem(){
    const control = <FormArray>this.builderForm.controls['items'];
    control.push(this.itemInit());
  }

  deleteItem(i: number){
    const control = <FormArray>this.builderForm.controls['items'];
    control.removeAt(i);
  }

  onSubmit(){
    // let formData= this.builderForm.value;
// hide first view, show loading bar for random amount of time between 3 and 7 seconds, then show the results     
// let generatedItem = filteredRack[Math.floor(Math.random() * filteredRack.length)];

//generated array for more than one item? 


  }

}
