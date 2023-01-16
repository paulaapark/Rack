import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Camera, CameraResultType } from '@capacitor/camera';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-default-head',
  templateUrl: './default-head.component.html',
  styleUrls: ['./default-head.component.scss'],
})
export class DefaultHeadComponent implements OnInit {

  imageUrl:string|undefined = '';

  constructor(private router:Router) {}
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

    // async scheduleNotification(){
    //   await LocalNotifications.schedule([
    //     {title: "Test title", body: "Test Content", id: 1, schedule: null}
    //   ]);
    // } THIS DOESNT WORK CUZ THEY DIDNT PUT THE EXAMPLE IN THE IONIC 6 DOCUMENTATION FOR NATIVE PLUGINS

  ngOnInit() {}

  logout(){
    localStorage.removeItem("currentUser");
    alert("You have successfully logged out");
    this.router.navigate(['startup']);
  }
  
}
