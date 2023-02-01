import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class UserService {
  // baseUrl="https://rack-p.herokuapp.com/" //for production
  baseUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  public currentUser: any = JSON.parse(localStorage.getItem('currentUser')!);

  detailsURL:string= this.baseUrl + 'details/' + this.currentUser.id;

  login(formData:object){
    return this.http.post('http://localhost:3000/login', formData);
  }

  signup(formData:object){
    return this.http.post('http://localhost:3000/signup', formData);
  }

  details(formData:object){
    return this.http.post(this.detailsURL, formData);
  }

  get_current_user(){
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  isAuthenticated(){
    return this.get_current_user() ? true: false;
  }
  
};
