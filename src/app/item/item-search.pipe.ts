import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.class';

@Pipe({
  name: 'itemSearch'
})
export class ItemSearchPipe implements PipeTransform {

  transform(items: Item[], searchCriteria: string): Item[] {
    //prevents async issues and user not entering data
    if (items == null || searchCriteria == null || searchCriteria == "") return items;
    //initalize new empty array to fill
    let selItems: Item[]=[];
    searchCriteria = searchCriteria.toLowerCase();
    for(let i of items){
      if(i.upc.toLowerCase().includes(searchCriteria)
        ||i.name.toLowerCase().includes(searchCriteria)
        || i.price.toString().includes(searchCriteria)
        ){
        selItems.push(i);
      }
    }
    return selItems;
  }

}
