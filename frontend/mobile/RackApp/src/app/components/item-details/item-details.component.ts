import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  // name!: string;
  defaultView!:boolean;
  editView!:boolean;

  handlerMessage = '';
  roleMessage = '';

  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }

  ngOnInit() {
    this.defaultView=true;
    this.editView=false;
  }

  back() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  cancelEdit(){
    this.defaultView=true;
    this.editView=false;
    console.log('cancel edit')
  }

  edit() {
    console.log('edit');
    // return this.modalCtrl.dismiss(this.name, 'confirm');
    // return this.modalCtrl.dismiss(null, 'confirm');
    this.defaultView = false;
    this.editView = true;
  }


  onSubmit() {
    console.log('confirm');
    // return this.modalCtrl.dismiss(this.name, 'confirm');
    return this.modalCtrl.dismiss(null, 'confirm');
    //load & apply changes, toast successful item update 
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Permanently delete from your Rack?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },

          //cancel -> back to the edit page?
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;

    //yes -> dismiss the modal & toast on tab 2 saying youve successfully deleted {{item.title}} from your rack
    //http delete method service & backend
  }

  onDelete(){
    
    
  }



}
