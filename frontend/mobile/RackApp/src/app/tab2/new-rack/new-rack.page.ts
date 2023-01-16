import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';
import { RackService } from 'src/app/services/rack.service';

@Component({
  selector: 'app-new-rack',
  templateUrl: './new-rack.page.html',
  styleUrls: ['./new-rack.page.scss'],
})
export class NewRackPage {

  rackForm:FormGroup;

  constructor(private actionSheetCtrl: ActionSheetController, 
    private formBuilder: FormBuilder, 
    private router:Router, 
    private route:ActivatedRoute,
    private rackService:RackService,
    public userService:UserService) {
    this.rackForm = formBuilder.group({
      Title: ['', [Validators.required]],
      Description: ['', ],
      Season: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      User_id: [this.userService.currentUser.id, [Validators.required]]
    })
   }

   newRack(){
    let formData = this.rackForm.value;
    this.rackService.newRack(formData).subscribe({
      next: (result) => {
        console.log(result);
        alert('New item added!');
        this.router.navigate(['../../tab2'], {relativeTo: this.route})
      },
      error: error => {
        alert('Unsuccessful');
        console.error(error);
      }
    });
   }

  get User_idFormControl(){
    return this.rackForm.get('User_id')!;
  }

  get TitleFormControl(){
    return this.rackForm.get('Title')!;
  }

  get DescriptionFormControl(){
    return this.rackForm.get('Description')!;
  }

  get SeasonFormControl(){
    return this.rackForm.get('Season')!;
  }

  get TypeFormControl(){
    return this.rackForm.get('Type')!;
  }


  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Do you wish to import or capture a new image?',
  //     subHeader: 'Attach up to 3 images',
  //     buttons: [
  //       {
  //         text: 'Import',
  //         data: {
  //           action: 'import',
  //         },
  //       },
  //       {
  //         text: 'Capture',
  //         data: {
  //           action: 'capture',
  //         },
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         data: {
  //           action: 'cancel',
  //         },
  //       },
  //     ],
  //   });

  //   await actionSheet.present();
  // }
}
