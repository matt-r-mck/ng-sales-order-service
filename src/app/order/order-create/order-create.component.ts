import { Component, OnInit } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer.class';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  pageTitle: string = "CreateOrder";
  order: Order = new Order();
  customers: Customer[];

  constructor(
    private router: Router,
    private ordSvc: OrderService,
    private custSvc: CustomerService
  ) { }

  save(): void {
    this.order.customerId= +this.order.customerId;
    this.ordSvc.create(this.order).subscribe(
      res => {
        console.log("Order create Successful!"),
        this.router.navigateByUrl("/orders/list");
      },
      err => {
        console.error(err);
      }
      );
  }
  
  cancel(): void {
    this.router.navigateByUrl("/orders/list")
  }

  ngOnInit() {
    this.custSvc.list().subscribe(
      res => {
        this.customers= res as Customer[];
      },
      err => {
        console.error(err);
      }
      );
  }
 
}
