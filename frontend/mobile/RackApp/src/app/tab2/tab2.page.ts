import { Component, OnInit} from '@angular/core';
import { filter, Observable } from 'rxjs';
import { RackService } from '../services/rack.service';
// import { ActivatedRoute } from '@angular/router';

import * as $ from "jquery";
import { IonCheckbox } from '@ionic/angular';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { event } from 'jquery';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  filterTerm:string = '';
  userRack:any;
  public show:boolean = false;
  mainRackFunction:any;
  selection:undefined;
  selectedSeasons:any = [];
  selectedTypes:any=[];
  // selectionS:undefined;
  // selectionT:undefined;

  filteredArray:any=[this.selectedSeasons, this.selectedTypes];
  
//   $('input[name=seasonsChecked]:checked').each(function(){
//     this.seasonsChecked.push($(this).val()); //each loops through all the checked items, put a callback function. $(this) is a checked item. .val is getting the value and push pushes the item into the array extras.
// });
  constructor(public service:RackService) {}
  
  ngOnInit(){
    this.mainRackFunction = this.service.getUserRack();
    
    this.mainRackFunction.subscribe((res:any) => {
      this.userRack = Object.values(res);
    });

    // if(this.filterTerm == null && (this.onSeasonCheckboxChange(event).val == true || this.onTypeCheckboxChange(event).val ==true)){

    // }

    console.log(this.filteredArray);

  }

  toggle(){
    this.show = !this.show;
  }

  handleChange(e:any) {
    this.selection = (e.detail.value);
    // if (this.selection == "spring" || "summer" || "fall" || "winter"){
      
    // }
  }

  
  

  // onSeasonCheckboxChange(event:any){
  //   let val = event.target.value;
  //   let seasonsChecked:any=[];
  //   if(this.filterTerm == null){
  //     $('ion-checkbox[name=season]:checked').each(function(){
  //       seasonsChecked.push($(this).val());
  //     })
  //   }

  //   console.log(seasonsChecked);

  // }

  // onTypeCheckboxChange(event:any){
  //   let typesChecked:any=[];
  //   $('Ion-Checkbox[name=type]:checked').each(function(){
  //     typesChecked.push($(this).val());
  //   })

  //   console.log(typesChecked);
  // }
}
