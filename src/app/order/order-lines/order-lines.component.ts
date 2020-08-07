import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer/customer.class';
import { Order } from 'src/app/order/order.class';
import { OrderService } from 'src/app/order/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItemService } from 'src/app/orderItem/order-item.service';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent implements OnInit {

  customer: Customer = null;
  pageTitle: string = "Order Lines";
  orderId: number = 0;
  order: Order = null;
  showDelete: boolean = false;

  verify(): void{this.showDelete = !this.showDelete;}

  delete(id: number): void {
    this.showDelete = false;
    this.ordItemSvc.remove(id).subscribe(
      res => {
        console.log("Order Item delete successful");
        this.refresh(this.orderId);
      },
      err => {
        console.error(err);
      }
    );
  }
  constructor(
    private route: ActivatedRoute,
    private ordSvc: OrderService,
    private ordItemSvc: OrderItemService,
    private router: Router,

  ) { }


  
  refresh(id: number): void {
    this.ordSvc.get(id).subscribe(
      res => {
        console.log("Order", res);
        this.order = res as Order;
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.orderId = +this.route.snapshot.params.id;
    this.refresh(this.orderId);
  }

}
