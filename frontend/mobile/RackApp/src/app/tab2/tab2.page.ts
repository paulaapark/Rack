import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
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
  seasonsChecked:[]=[];
  typesChecked:[]=[];
  mainRackFunction:any;
  
//   $('input[name=seasonsChecked]:checked').each(function(){
//     this.seasonsChecked.push($(this).val()); //each loops through all the checked items, put a callback function. $(this) is a checked item. .val is getting the value and push pushes the item into the array extras.
// });
  constructor(public service:RackService) {}
  
  ngOnInit(){
    this.mainRackFunction = this.service.getUserRack();
    
    this.mainRackFunction.subscribe((res:any) => {
      this.userRack = Object.values(res);
    });


    // for(let i = 0; i < this.seasonsChecked.length; i++){
    //   let seasonChecked = this.seasonsChecked[i];

    //   if(seasonChecked === 'Spring'){
    //       total_cost += 1.5;
    //   }
    //   else if (seasonChecked === 'Summer'){
    //       total_cost += 2;
    //   }
    //   else if (seasonChecked === 'Fall'){
    //       total_cost += 3;
    //   }
    //   else if (seasonChecked === 'Winter'){
    //     total_cost += 3;
    // }
  }
  


  toggle(){
    this.show = !this.show;
  }


}
