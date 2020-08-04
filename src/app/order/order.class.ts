import {Customer} from '../customer/customer.class'

export class Order {

    id: number;
    description: string;
    total: number;
    customerId: number;

constructor(){
    this.id = 0;
    this.description = '';
    this.total = 0;
    this.customerId = 0;
}

}