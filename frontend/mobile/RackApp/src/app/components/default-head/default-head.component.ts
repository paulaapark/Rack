import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-default-head',
  templateUrl: './default-head.component.html',
  styleUrls: ['./default-head.component.scss'],
})
export class DefaultHeadComponent implements OnInit {

  imageUrl:string|undefined = '';

  constructor(private actionSheetCtrl: ActionSheetController) {}
    // async presentActionSheet() {
    //   const actionSheet = await this.actionSheetCtrl.create({
    //     header: 'Do you wish to import or capture a new image?',
    //     subHeader: 'Attach up to 3 images for a new Rack item!',
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

    takePicture(){
      const snapPicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        });
      
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        this.imageUrl = image.webPath;
      
        // Can be set to the src of an image now
        // imageElement.src = imageUrl;
        // alert(imageUrl);
      };
      snapPicture();
    }

  ngOnInit() {}
  
  
}
