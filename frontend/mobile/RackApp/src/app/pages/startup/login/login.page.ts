import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;

  constructor(private service:UserService, private formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }
  login(){
    let formData = this.loginForm.value;
    this.service.login(formData).subscribe((result) => {
      localStorage.setItem('currentUser', JSON.stringify(result)); //Storing the data of the currently logged in user on the browser
      alert('Login successful!');
    }, (err) => {
      alert('Incorrect email/password');
      console.log(err);
    });
  }
}
