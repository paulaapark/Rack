import { Component, ViewChild, OnInit} from '@angular/core';
import { RackService } from '../services/rack.service';
// import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
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
  mainRackFunction: any;
  selection!:any;
  strSel!:any;

  seasons = [];
  item_types = [];

  
  // name!: string;

  constructor(public service: RackService, private http: HttpClient, private modalCtrl: ModalController) {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ItemDetailsComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
      // console.log(`Hello, ${data}!`);
      console.log('success');
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

  handleSChange(e:any){
    this.seasons = (e.detail.value);
    this.handleChange();
  }

  handleTChange(e:any){
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

  getFilter(){
    return this.http.get(this.service.userURL + this.strSel);
  }


  // showDetails(){
  //   console.log(this.userRack);

  //   //want to get the id and use it to get info in either a modal or something


  // }
}

