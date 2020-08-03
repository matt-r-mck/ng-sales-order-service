export class Customer {

    id: number;
    name: string;
    state: string;
    sales: number;
    active: boolean;

    constructor(){
        this.id = 0;
        this.name = '';
        this.state = '';
        this.sales = 0;
        this.active = true;
    }

}