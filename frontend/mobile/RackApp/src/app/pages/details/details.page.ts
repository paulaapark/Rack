import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  detailsForm;

  constructor(private service:UserService, private formBuilder: FormBuilder, private router:Router, private route:ActivatedRoute) { 
    this.detailsForm = formBuilder.group({
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      image: ['']
    });
  }

  ngOnInit(): void {
  }

  details() {
    let formData = this.detailsForm.value;
    this.service.details(formData).subscribe({
        next: (result) => {
          console.log(result);
          alert('Thank you!');
          this.router.navigate(['../tabs'], {relativeTo: this.route});
        }, 
        error: error => {
        alert('Error - please try again');
        console.error(error);
        }
    });
  }

  get birthdayFormControl(){
    return this.detailsForm.get('birthday')!;
  }

  get genderFormControl(){
    return this.detailsForm.get('gender')!;
  }
  get imageFormControl(){
    return this.detailsForm.get('image')!;
  }



}

