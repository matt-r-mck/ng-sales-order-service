import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { OrderItem } from '../order-item.class';
import { OrderItemService } from '../order-item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-item-create',
  templateUrl: './order-item-create.component.html',
  styleUrls: ['./order-item-create.component.css']
})
export class OrderItemCreateComponent implements OnInit {

  pageTitle: string = "Add Line";
  orderItem: OrderItem = new OrderItem();
  items: Item[];
  orderId: number= 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordItemSvc: OrderItemService,
    private   itemSvc: ItemService
  ) { } 

  save(): void {
    this.orderItem.orderId= +this.orderId;
    this.orderItem.itemId= +this.orderItem.itemId;
    this.ordItemSvc.create(this.orderItem).subscribe(
      res => {
        console.log("Order Item create Successful!"),
        this.router.navigateByUrl(`/orders/lines/${this.orderId}`);
      },
      err => {
        console.error(err);
      }
      );
  }

  cancel(): void {
    this.router.navigateByUrl(`/orders/lines/${this.orderId}`)
  }

  ngOnInit(): void {
    this.orderId = +this.route.snapshot.params.id;
    this.itemSvc.list().subscribe(
      res => {
        this.items= res as Item[];
      },
      err => {
        console.error(err);
      }
      );
  }

}
