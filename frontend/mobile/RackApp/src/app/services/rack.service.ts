import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {
  // baseUr:string ="https://rack-p.herokuapp.com/rack"; //for production
  baseURL:string = 'http://localhost:3000/rack';
  typeQuery:string = '&Item_type=';
  seasonQuery:string = '&Season=';

  selectedSeasons:string='';
  selectedTypes:string='';
  
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

    

  // getFilteredSeasons(){
  //   return this.http.get(this.userURL + this.seasonQuery + this.selectedSeasons)
  // };
  // getFilteredTypes(){
  //   return this.http.get(this.userURL + this.typeQuery + this.selectedTypes)
  // };

  // getFilteredMulti(){
  //   return this.http.get(this.userURL + this.seasonQuery + this.selectedSeasons + this.typeQuery + this.selectedTypes)
  // };

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