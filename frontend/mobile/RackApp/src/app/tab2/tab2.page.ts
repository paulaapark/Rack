import { Component, OnInit} from '@angular/core';
import { RackService } from '../services/rack.service';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  userRack:any;
  public show:boolean = false;

  constructor(public service:RackService) {}
  ngOnInit(){
    this.service.getUserRack().subscribe(res => {
      this.userRack = Object.values(res);
    });
  }  

  toggle(){
    this.show = !this.show;
  }


}
