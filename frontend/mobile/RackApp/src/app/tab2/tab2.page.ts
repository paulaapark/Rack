import { Component, OnInit} from '@angular/core';
import { filter, Observable } from 'rxjs';
import { RackService } from '../services/rack.service';
// import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  

  selectedSeasons:any;
  selectedTypes:any;

  public strSelSeasons:undefined;
  public strSelTypes:undefined;
  
  constructor(public service:RackService, private http:HttpClient) {}
  handleSChange(e:any) {
    let val = (e.detail.value);
    this.selectedSeasons = [];
    this.selectedSeasons.push(val);
    // let filteredArray = [selectedSeasons, selectedTypes];
    // console.log(filteredArray);
    // console.log(this.selectedSeasons);

    if(this.selectedSeasons !== null){
      this.strSelSeasons = this.selectedSeasons.join("&Season=");
    }

    console.log(this.strSelSeasons);
  }
  handleTChange(e:any) {
    let val = (e.detail.value);
    this.selectedTypes = [];
    this.selectedTypes.push(val);
    // console.log(this.selectedTypes);

    if(this.selectedTypes !== null){
      this.strSelTypes = this.selectedTypes.join("&Item_type=");
    }
    console.log(this.strSelTypes);
  }
  
  async ngOnInit(){
    this.mainRackFunction = this.service.getUserRack();
    
    this.mainRackFunction.subscribe((res:any) => {
      this.userRack = Object.values(res);
    });
    // await this.selectedSeasons.length > 0 || this.selectedTypes.length > 0;

    // if(this.selectedSeasons.length > 0 && this.selectedTypes.length > 0){
    //   this.getFilteredMulti().subscribe((res:any) => {
    //     this.userRack = Object.values(res);
    //   });
    // }
    // if(this.selectedSeasons.length > 0 && this.selectedTypes.length < 1){
    //   this.getFilteredSeasons().subscribe((res:any) => {
    //     this.userRack = Object.values(res);
    //   })
    // }
    // if(this.selectedSeasons.length < 1 && this.selectedTypes.length < 1){
    //   this.getFilteredTypes().subscribe((res:any) => {
    //     this.userRack = Object.values(res);
    //   })
    // } else { 
    //   this.mainRackFunction = this.service.getUserRack();
    //   this.mainRackFunction.subscribe((res:any) => {
    //     this.userRack = Object.values(res);
    //   });
    // }
  }
    
  ngOnChanges(){
    if(this.selectedSeasons.length > 0 && this.selectedTypes.length > 0){
      this.getFilteredMulti().subscribe((res:any) => {
        this.userRack = Object.values(res);
      });
    }
    if(this.selectedSeasons.length > 0 && this.selectedTypes.length < 1){
      this.getFilteredSeasons().subscribe((res:any) => {
        this.userRack = Object.values(res);
      })
    }
    if(this.selectedSeasons.length < 1 && this.selectedTypes.length < 1){
      this.getFilteredTypes().subscribe((res:any) => {
        this.userRack = Object.values(res);
      })
    } else { 
      this.mainRackFunction = this.service.getUserRack();
      this.mainRackFunction.subscribe((res:any) => {
        this.userRack = Object.values(res);
      });
    }
  }

  toggle(){
    this.show = !this.show;
  }

  getFilteredMulti(){
    return this.http.get(this.service.userURL + this.service.seasonQuery + this.strSelSeasons + this.service.typeQuery + this.strSelTypes);
  };

  getFilteredSeasons(){
    return this.http.get(this.service.userURL + this.service.seasonQuery + this.strSelSeasons);
  };

  getFilteredTypes(){
    return this.http.get(this.service.userURL + this.service.typeQuery + this.strSelTypes);
  };
  
  
}

