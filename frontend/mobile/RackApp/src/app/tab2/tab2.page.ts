import { Component, ViewChild, OnInit } from '@angular/core';
import { RackService } from '../services/rack.service';
// import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController, ToastController } from '@ionic/angular';
import { ItemDetailsComponent } from '../components/item-details/item-details.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {



  filterTerm: string = '';
  userRack: any;
  public show: boolean = false;
  public grid: boolean = false;
  mainRackFunction: any;
  selection!: any;
  strSel!: any;

  gridToggle!:any;

  seasons = [];
  item_types = [];

  // name!: string;

  constructor(public service: RackService, private http: HttpClient,
    private modalCtrl: ModalController, private toastController: ToastController) {
      // if(this.grid = true){
      //   this.gridToggle = 'width=50%';
      // }
      // else {
      //   this.gridToggle = '';
      // }
  }

  async openModal(item: any) {
    const modal = await this.modalCtrl.create({
      component: ItemDetailsComponent,
      componentProps: {
        'item': item
      }
    });

    modal.present();
    // console.log(item);
    const { data, role } = await modal.onWillDismiss();

    if (role === 'delete') {
      console.log('deleted');
      const toast = await this.toastController.create({
        message: `${data} successfully deleted`,
        duration: 2500,
        position: 'bottom'
      });

      await toast.present();
    }

    if (role === 'save') {
      console.log('item updated');
      const toast = await this.toastController.create({
        message: `${data} successfully updated`,
        duration: 2500,
        position: 'bottom'
      });

      await toast.present();
    }

    
  }



  handleChange() {
    this.selection = this.seasons.concat(this.item_types);
    this.strSel = this.selection.join("");

    if (this.selection.length > 0) {
      this.getFilter().subscribe((res: any) => {
        this.userRack = Object.values(res);
      });
    }
    else {
      this.mainRackFunction = this.service.getUserRack();
      this.mainRackFunction.subscribe((res: any) => {
        this.userRack = Object.values(res);
      });
    }
  }

  handleSChange(e: any) {
    this.seasons = (e.detail.value);
    this.handleChange();
  }

  handleTChange(e: any) {
    this.item_types = (e.detail.value);
    this.handleChange();
  }

  ngOnInit() {
    this.mainRackFunction = this.service.getUserRack();
    this.mainRackFunction.subscribe((res: any) => {
      this.userRack = Object.values(res);
    });

    
  }

  toggle() {
    this.show = !this.show;
  }

  getFilter() {
    return this.http.get(this.service.userURL + this.strSel);
  }

  gridButton(){
    this.grid = !this.grid;
  }

}

