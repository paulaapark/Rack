import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public userService:UserService) {}

  // ngOnInit() {
  //   this.UserInfo = JSON.parse(localStorage.getItem('currentUser')!);
  //   console.log(this.UserInfo);
   
  // }
}
