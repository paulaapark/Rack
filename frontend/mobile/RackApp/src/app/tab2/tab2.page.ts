import { Component, ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonModal) modal!: IonModal;
 
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  constructor(private actionSheetCtrl: ActionSheetController) {}
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
