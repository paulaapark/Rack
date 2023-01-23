import { Component, OnInit} from '@angular/core';
import { RackService } from '../services/rack.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  filterTerm:string = '';
  userRack:any;
  public show:boolean = false;
  // public rackFilter:any;

  constructor(public service:RackService) {}

  ngOnInit(){
    this.service.getUserRack().subscribe(res => {
      this.userRack = Object.values(res);
    });

  }

  // handleChange(event:any) {
  //   const query = event.target.value.toLowerCase();
  //   this.rackFilter = this.userRack.filter((d:any) => d.toLowerCase().indexOf(query) > -1);
  // }

  toggle(){
    this.show = !this.show;
  }


}
