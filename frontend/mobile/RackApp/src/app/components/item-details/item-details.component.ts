import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  // name!: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  back() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  edit() {
    console.log('success');
    // return this.modalCtrl.dismiss(this.name, 'confirm');
    // return this.modalCtrl.dismiss(null, 'confirm');
  }



}
