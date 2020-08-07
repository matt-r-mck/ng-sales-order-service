import { Component, OnInit } from '@angular/core';
import { Order } from "../order.class"
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  pageTitle: string = "Order List";
  sortCriteria: string = "id";
  sortAsc: boolean = true;
  searchCriteria: string = "";

  sort(col: string): void {
    if(col === this.sortCriteria){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria=col;
    
  }

  constructor(private ordSvc: OrderService ) { }

  ngOnInit(): void {
    this.ordSvc.list().subscribe(
      res=>{
        for( let o of res){
          o.customerName = o.customer.name;
        }
        console.log(res);
        this.orders = res as Order[];
      },
      err=>{
        console.error(err);
      }
    );
  }

}
