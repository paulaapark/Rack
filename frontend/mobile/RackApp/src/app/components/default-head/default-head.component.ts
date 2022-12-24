import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-default-head',
  templateUrl: './default-head.component.html',
  styleUrls: ['./default-head.component.scss'],
})
export class DefaultHeadComponent implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) {}
    async presentActionSheet() {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Do you wish to import or capture a new image?',
        subHeader: 'Attach up to 3 images for a new Rack item!',
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

  ngOnInit() {}
  
  
}
