import { Component, OnInit } from '@angular/core';
import { RackService } from 'src/app/services/rack.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { concat } from 'rxjs';

@Component({
  selector: 'app-builder-input',
  templateUrl: './builder-input.page.html',
  styleUrls: ['./builder-input.page.scss'],
})
export class BuilderInputPage implements OnInit {
  public myDate = new Date();
  public hrs = this.myDate.getHours();
  public timeOfDay: string;
  userRack: any;
  filteredRack: any;
  generatedItem: any;
  generatedArray: any;
  builderForm;
  filterQuery: any;
  filterQueryArray: any = [];
 
  item!:any;
  selectedSeasons: any = [];
  selectedTypes: any = [];
  strSelSeasons!: any;
  strSelTypes!: any;
  itemArray!: any;
  formData!: object;
  strItem!: any;


  constructor(public userService: UserService, public rackService: RackService, private formBuilder: FormBuilder) {
    if (this.hrs < 12) {
      this.timeOfDay = 'morning';
    } else if (this.hrs >= 12 && this.hrs <= 17) {
      this.timeOfDay = 'afternoon';
    } else {
      this.timeOfDay = 'evening';
    };

    this.builderForm = formBuilder.group({
      items: this.formBuilder.array([
        this.itemInit(),
      ])
    });


  }



  ngOnInit() {

  }


  itemInit() {
    return this.formBuilder.group({
      Season: ['', [Validators.required]],
      Item_type: ['', [Validators.required]]
    })
  }

  addItem() {
    const control = <FormArray>this.builderForm.controls['items'];
    control.push(this.itemInit());
  }

  deleteItem(i: number) {
    const control = <FormArray>this.builderForm.controls['items'];
    control.removeAt(i);
  }

  onSubmit() {
    this.formData = this.builderForm.value;
    // console.log(this.formData);


    this.itemArray = this.builderForm.value.items;


    // console.log(this.itemArray);
    // let strItems = JSON.stringify(this.itemArray);

    for (let i = 0; i < this.itemArray.length; i++) {
      // let Seasons = this.itemArray[i].Season;
      // this.strSelSeasons = Seasons.toString();

      // let Item_types=this.itemArray[i].Item_type;
      // this.strSelTypes = Item_types.toString();
      
      // this.filterQuery = concat(this.strSelSeasons, this.strSelTypes);
      // this.filterQueryArray.push(this.filterQuery);

      //This didnt work
      let season = this.itemArray[i].Season.join();
      let item_type = this.itemArray[i].Item_type.join();
      this.filterQuery = concat(season, item_type);
      // this.strItem = this.item.toString();

      this.filterQueryArray.push(this.filterQuery);

    }

    console.log(this.filterQueryArray);

    // for(let i =0; i < this.itemArray.length; i++){
    //   let Seasons=this.itemArray[i].Season
    //   if (Seasons.length < 1) {
    //     this.strSelSeasons = Seasons.toString();
    //   }
    //   else {
    //     this.strSelSeasons = Seasons.join("&Season=");
    //   };
    //   this.selectedSeasons.push(this.strSelSeasons);
    //   let Item_types=this.itemArray[i].Item_type;
    //   if (Item_types.length < 1) {
    //     this.strSelTypes = Item_types.toString();
    //   }
    //   else {
    //     this.strSelTypes = Item_types.join("&Item_type=");
    //   };
    //   this.selectedTypes.push(this.strSelTypes);
    // }



    // console.log(this.selectedTypes);
    // console.log(this.selectedSeasons);



    // this.rackService.getUserRack().subscribe(res => {
    //   this.userRack = Object.values(res);
    // });


    // this.filteredRack = this.userRack.filter(this.filterQuery)




    // let generatedItem = filteredRack[Math.floor(Math.random() * filteredRack.length)];




  }

}
