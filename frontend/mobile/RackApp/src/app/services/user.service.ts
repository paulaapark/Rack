import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class UserService {
  baseUrl!:string; 
  // environment:string = 'development';
  environment:string = 'production';


  constructor(private http:HttpClient) { 
    if (this.environment === 'development'){
      this.baseUrl = "http://localhost:3000/"
    }
    else {
      this.baseUrl = 'https://rack-p.herokuapp.com/'
    }
  }

  
  public currentUser: any = JSON.parse(localStorage.getItem('currentUser')!);

  userURL:string= this.baseUrl + 'users/' + this.currentUser.id;

  login(formData:object){
    return this.http.post(this.baseUrl + 'login', formData);
  }

  signup(formData:object){
    return this.http.post(this.baseUrl + 'signup', formData);
  }

  userEdit(formData:object){
    return this.http.patch(this.userURL, formData);
  }

  get_current_user(){
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  isAuthenticated(){
    return this.get_current_user() ? true: false;
  }
  
};
