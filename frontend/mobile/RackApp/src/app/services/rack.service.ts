import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { map } from 'rxjs';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {
  public currentUser: any = JSON.parse(localStorage.getItem('currentUser')!);
  
  constructor(private http:HttpClient, public service:UserService) { }
  newRack(formData:object){
    return this.http.post('http://localhost:3000/rack', formData)
  };

  getRack(){
    return this.http.get('http://localhost:3000/rack')
  };
  // getUserRack(){
  //   return this.http.get('http://localhost:3000/rack/:User_id'+ this.currentUser)
  // };
  
  getUserRack(){
    return this.http.get('http://localhost:3000/rack/:User_id'+ this.currentUser)
    .pipe(map(this.currentUser))
  };

}
