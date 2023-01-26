import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  filterTerm: string = '';
  userRack: any;
  public show: boolean = false;
  mainRackFunction: any;

  selectedSeasons: any;
  selectedTypes: any;

  strSelSeasons: any;
  strSelTypes: any;

  constructor(public service: RackService, private http: HttpClient) {

  }

  handleSChange(e: any) {
    let val = (e.detail.value);
    this.selectedSeasons = val;
    if (this.selectedSeasons.length < 1) {
      this.strSelSeasons = this.selectedSeasons.toString();
    }
    else {
      this.strSelSeasons = this.selectedSeasons.join("&Season=");
    };
    // console.log(this.selectedSeasons);
    // console.log(this.strSelSeasons);
  }

  handleTChange(e: any) {
    let val = (e.detail.value);
    this.selectedTypes = val;
    // console.log(this.selectedTypes);
    if (this.selectedTypes.length < 1) {
      this.strSelTypes = this.selectedTypes.toString();
    }
    else {
      this.strSelTypes = this.selectedTypes.join("&Item_type=");
    };
    // console.log(this.strSelTypes);
  }


  async ngOnInit() {
    this.selectedSeasons = [];
    this.selectedTypes = [];

    this.mainRackFunction = this.service.getUserRack();
    this.mainRackFunction.subscribe((res: any) => {
      this.userRack = Object.values(res);
    });

    // this.strSelSeasons || this.strSelTypes;

    await Promise.all([this.handleSChange, this.handleTChange])
      .then(res => {
        if (this.selectedSeasons.length > 0 && this.selectedTypes.length > 0) {
          this.getFilteredMulti().subscribe((res: any) => {
            this.userRack = Object.values(res);
          });
        }
        if (this.selectedSeasons.length > 0 && this.selectedTypes.length < 1) {
          this.getFilteredSeasons().subscribe((res: any) => {
            this.userRack = Object.values(res);
          })
        }
        if (this.selectedSeasons.length < 1 && this.selectedTypes.length > 0) {
          this.getFilteredTypes().subscribe((res: any) => {
            this.userRack = Object.values(res);
          })
        }
        else {
          this.mainRackFunction = this.service.getUserRack();
          this.mainRackFunction.subscribe((res: any) => {
            this.userRack = Object.values(res);
          })
        }
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });



  }

  // ngAfterViewInit() {
  //   console.log(this.selectedSeasons);
  //   console.log(this.selectedTypes);

  //   if (this.selectedSeasons.length > 0 && this.selectedTypes.length > 0) {
  //     this.getFilteredMulti().subscribe((res: any) => {
  //       this.userRack = Object.values(res);
  //     });
  //   }
  //   if (this.selectedSeasons.length > 0 && this.selectedTypes.length < 1) {
  //     this.getFilteredSeasons().subscribe((res: any) => {
  //       this.userRack = Object.values(res);
  //     })
  //   }
  //   if (this.selectedSeasons.length < 1 && this.selectedTypes.length > 0) {
  //     this.getFilteredTypes().subscribe((res: any) => {
  //       this.userRack = Object.values(res);
  //     })
  //   }
  //   else {
  //     this.mainRackFunction = this.service.getUserRack();
  //     this.mainRackFunction.subscribe((res: any) => {
  //       this.userRack = Object.values(res);
  //     });
  //   }
  // }

  toggle() {
    this.show = !this.show;
  }

  getFilteredMulti() {
    return this.http.get(this.service.userURL + this.service.seasonQuery + this.strSelSeasons + this.service.typeQuery + this.strSelTypes);
  };

  getFilteredSeasons() {
    return this.http.get(this.service.userURL + this.service.seasonQuery + this.strSelSeasons);
  };

  getFilteredTypes() {
    return this.http.get(this.service.userURL + this.service.typeQuery + this.strSelTypes);
  };


}

