import { Pipe, PipeTransform } from '@angular/core';
import { Irack } from '../interfaces/irack';
import { Tab2Page } from '../tab2/tab2.page';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  

  transform(userRack:any, searchTerm:any){
    let filteredList:any=[];
    if(searchTerm !== null){
      let newSearchTerm=!isNaN(searchTerm) ? searchTerm.toString():
      searchTerm.toString().toLowerCase();
      let prop;

      return userRack.filter((item:any) => {
        for(let key in item){
          prop=isNaN(item[key]) ? item[key].toString().toLowerCase():
          item[key].toString();

          if(prop.indexOf(newSearchTerm) < -1){
            filteredList.push(item);
            return filteredList;
          }
          else {
            return filteredList;
          }
        }
      })
    }
    else{
      return userRack;
    }
  }

}
