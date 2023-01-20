import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { map } from 'rxjs';
import { Irack } from '../interfaces/irack';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {
  public currentUser: any = JSON.parse(localStorage.getItem('currentUser')!);

  baseURL:string = 'http://localhost:3000/rack';
  userURL:string = this.baseURL + '?User_id=' + this.currentUser.id;
  typeQuery:string = '?Item_Type=';
  seasonQuery:string = '?Season=';
  

  constructor(private http:HttpClient, public service:UserService) { }
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
    return this.http.get(this.userURL + this.seasonQuery + 'Summer')
  };




  
  // getRackFilter(){
  //   return this.http.get('http://localhost:3000/rack' + '?User_id=' + this.currentUser.id + '?Season=')
  // }
}