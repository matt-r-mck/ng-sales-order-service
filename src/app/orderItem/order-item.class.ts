import {Order} from '../order/order.class'
import { Item } from '../item/item.class'

export class OrderItem {

    id: number;
    orderId: number;
    itemId: number;
    quantity: number;

constructor(){

    this.id = 0;
    this.orderId = 0;
    this.itemId = 0;
    this.quantity = 0;
}

}