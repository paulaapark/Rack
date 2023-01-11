import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;

  constructor(private service:UserService, private formBuilder: FormBuilder) { 
    this.signupForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  signup(){
    let formData = this.signupForm.value;
    this.service.signup(formData).subscribe((result) => {
      alert('Signup successful!');
    }, (err) => {
      alert('Signup failed');
      console.log(err);
    });
  }
}
