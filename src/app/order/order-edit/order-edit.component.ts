import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order: Order = null;
  pageTitle: string = "Edit Order";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordSvc: OrderService
  ) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params.id;
    this.ordSvc.get(+id).subscribe(
      res=>{
        console.log("Order", res);
        this.order = res as Order;
      },
      err=>{
        console.error(err);
      }
    )
  }
  save(): void{
    this.ordSvc.change(this.order).subscribe(
      res=>{
        console.log("Order change successful");
        this.router.navigateByUrl("/orders/list")
      },
      err=>{
        console.error(err);
      }
    )
  }

  cancel(): void {
    this.router.navigateByUrl("/orders/list")
  }

}
