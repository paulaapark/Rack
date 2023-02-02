import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { Camera, CameraResultType } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RackService } from 'src/app/services/rack.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  // name!: string;
  defaultView!:boolean;
  editView!:boolean;

  imageUrl:string|undefined = '';

  handlerMessage = '';
  roleMessage = '';

  

  @Input("item") item:any;

  constructor(private modalCtrl: ModalController, 
    private alertController: AlertController, 
    private actionSheetCtrl: ActionSheetController, private http:HttpClient, private service:RackService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.defaultView=true;
    this.editView=false;
  }

  back() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  cancel(){
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

  onSubmit() {
    console.log('confirm');
    // return this.modalCtrl.dismiss(this.name, 'confirm');
    return this.modalCtrl.dismiss(null, 'confirm');
    //load & apply changes, toast successful item update 
  }


  async presentAlert() {
    console.log(this.item.id);
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
          role: 'delete',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(role);
    if (role === 'delete'){
      this.deleteItem().subscribe({
        next: (result) => {
          return this.modalCtrl.dismiss(this.item.Title, 'delete');
        }
        });

    }

  }

    //yes -> dismiss the modal & toast on tab 2 saying youve successfully deleted {{item.title}} from your rack
    //http delete method service & backend

  deleteItem(){
    return this.http.delete(this.service.baseURL + '/' + this.item.id)
  }



}
