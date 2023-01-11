import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // loginForm:FormGroup;

  constructor(
    // private formBuilder:FormBuilder
    ) {

    // this.loginForm = formBuilder.group({
    //   email: ['', [Validators.required]],
    //   password: ['', [Validators.required]]
    // });
  }

  ngOnInit() {
  }
  // onSubmit(){
  //   console.log(this.loginForm.value);


  // }
}
