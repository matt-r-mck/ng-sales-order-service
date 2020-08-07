import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.class';

@Pipe({
  name: 'orderSearch'
})
export class OrderSearchPipe implements PipeTransform {

  transform(orders: Order[], searchCriteria: string): Order[] {
    //prevents async issues and user not entering data
    if (orders == null || searchCriteria == null || searchCriteria == "") return orders;
    //initalize new empty array to fill
    let selOrders: Order[]=[];
    searchCriteria = searchCriteria.toLowerCase();
    for(let o of orders){
      if(o.description.toLowerCase().includes(searchCriteria)
        ||o.customer.name.toLowerCase().includes(searchCriteria)
        || o.total.toString().includes(searchCriteria)
        ){
        selOrders.push(o);
      }
    }
    return selOrders;
  }

}
