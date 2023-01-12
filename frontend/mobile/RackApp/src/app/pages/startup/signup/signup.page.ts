import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
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
      FirstName: ['', [Validators.required]],
      LastName: ['', ],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confPass: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  signup(){
    let formData = this.signupForm.value;
    this.service.signup(formData).subscribe({
      next() {alert('Register successful!');}
      , error(err)  {
      alert('Register failed!');
      console.log(err);
    }
    });
  }
}
