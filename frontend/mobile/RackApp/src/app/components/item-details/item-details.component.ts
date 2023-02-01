import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  // name!: string;
  defaultView!:boolean;
  editView!:boolean;

  constructor(private modalCtrl: ModalController) { }

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
  }


}
