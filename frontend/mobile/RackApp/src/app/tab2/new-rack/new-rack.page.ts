import { Component, OnInit } from '@angular/core';


import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-new-rack',
  templateUrl: './new-rack.page.html',
  styleUrls: ['./new-rack.page.scss'],
})
export class NewRackPage {

  constructor(private actionSheetCtrl: ActionSheetController) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Do you wish to import or capture a new image?',
      subHeader: 'Attach up to 3 images',
      buttons: [
        {
          text: 'Import',
          data: {
            action: 'import',
          },
        },
        {
          text: 'Capture',
          data: {
            action: 'capture',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
