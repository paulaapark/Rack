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

  constructor(public rackService:RackService) {}
  ngOnInit(){
    this.rackService.getRack().subscribe(res => {
      this.userRack = Object.values(res);
    });
  }  

}
