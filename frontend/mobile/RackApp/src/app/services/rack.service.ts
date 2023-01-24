import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { map } from 'rxjs';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {
  baseURL:string = 'http://localhost:3000/rack';
  typeQuery:string = '&Item_Type=';
  seasonQuery:string = '&Season=';

  seasonsChecked:string='';
  typesChecked:string='';
  
  constructor(private http:HttpClient, public service:UserService) { }
  public currentUser: any = this.service.currentUser;
  userURL:string = this.baseURL + '?User_id=' + this.currentUser.id;

  newRack(formData:object){
    return this.http.post(this.baseURL, formData)
  };

  getRack(){
    return this.http.get(this.baseURL)
  };
  
  getUserRack(){
    return this.http.get(this.userURL)
  };

  getFilteredSeason(){
    return this.http.get(this.userURL + this.seasonQuery + this.seasonsChecked)
  };
  getFilteredType(){
    return this.http.get(this.userURL + this.typeQuery + this.typesChecked)
  };

  getFilteredMulti(){
    return this.http.get(this.userURL + this.seasonQuery + this.seasonsChecked + this.typeQuery + this.typesChecked)
  };
  
  getUserTops(){
    return this.http.get(this.userURL + this.typeQuery + 'Top')
  };
  getUserBottoms(){
    return this.http.get(this.userURL + this.typeQuery + 'Bottom')
  };
  getUserSpring(){
    return this.http.get(this.userURL + this.seasonQuery + 'Spring')
  };
  getUserSummer(){
    return this.http.get(this.userURL + this.seasonQuery + 'Summer')
  };
  getUserFall(){
    return this.http.get(this.userURL + this.seasonQuery + 'Fall')
  };
  getUserWinter(){
    return this.http.get(this.userURL + this.seasonQuery + 'Winter')
  };
}