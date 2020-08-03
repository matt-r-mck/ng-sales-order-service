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

  constructor(private ordSvc: OrderService ) { }

  ngOnInit(): void {
    this.ordSvc.list().subscribe(
      res=>{
        console.log(res);
        this.orders = res as Order[];
      },
      err=>{
        console.error(err);
      }
    );
  }

}
