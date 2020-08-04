import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'] 
})
export class OrderDetailComponent implements OnInit { 

  order: Order = null;
  pageTitle: string = "Order Detail";
  showDelete: boolean = false;

  verify(): void{ this.showDelete = !this.showDelete;}

  delete(): void {
    this.ordSvc.remove(this.order.id).subscribe(
      res => {
        console.log("Order delete successful");
        this.router.navigateByUrl("/orders/list");
      },
      err => {
        console.error(err);
      }
    );
  }


  constructor(

    private ordSvc: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { } 

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; 
    this.ordSvc.get(+id).subscribe(
      res => {
        console.log("Order", res);
        this.order = res as Order;
      },
      err => {
        console.error(err);
      }
    );
    // this.custSvc.get(order.).subscribe(
    //   res => {
    //     console.log("Customer", res);
    //     this.customer = res as Customer;
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // );
  }

}
