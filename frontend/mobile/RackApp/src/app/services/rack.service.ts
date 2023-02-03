import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {
  // baseURL:string ="https://rack-p.herokuapp.com/rack"; //for production
  baseURL!:string; //for development
  typeQuery:string = '&Item_type=';
  seasonQuery:string = '&Season=';

  selectedSeasons:string='';
  selectedTypes:string='';
  
  constructor(private http:HttpClient, public service:UserService) { 
    if (service.environment ==='development'){
      this.baseURL = 'http://localhost:3000/rack'
    }
    else {
      this.baseURL = 'https://rack-p.herokuapp.com/rack'
    };
  }
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