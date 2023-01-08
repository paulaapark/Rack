import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  @ViewChild(IonModal) modal!: IonModal;
 
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }
  constructor(private alertController: AlertController) { }

  async presentLogin() {
    const alert = await this.alertController.create({
      header: 'Log In',
      buttons: ["Let's Go!"],
      inputs: [
        {
          placeholder: 'Email',
        },
        {
          placeholder: 'Password',
          // attributes: {
          //   maxlength: 8,
          // },
        },
      ],
    });

    await alert.present();
  }


}
