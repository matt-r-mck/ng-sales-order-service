import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItem } from '../order-item.class';
import { OrderItemService } from '../order-item.service';
import { Order } from 'src/app/order/order.class';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-order-item-edit',
  templateUrl: './order-item-edit.component.html',
  styleUrls: ['./order-item-edit.component.css']
})
export class OrderItemEditComponent implements OnInit {

  orderItem: OrderItem = null;
  items: Item[] = null;
  pageTitle: string = "Edit Order Line"

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordItemSvc: OrderItemService,
    private itemSvc: ItemService
  ) { }

  save(): void {
    this.orderItem.item = null;
    this.orderItem.itemId= +this.orderItem.itemId;
    this.ordItemSvc.change(this.orderItem).subscribe(
      res=>{
        console.log("Order Item change successful");
        this.router.navigateByUrl(`/orders/lines/${this.orderItem.orderId}`);
      },
      err=>{
        console.error(err);
      }
    );
  }
  ngOnInit(): void{
    this.itemSvc.list().subscribe(
      res=> this.items = res as Item[],
      err=> console.error(err)
      );
      let id = this.route.snapshot.params.id;
      this.ordItemSvc.get(+id).subscribe(
      res=> this.orderItem = res as OrderItem,
      err=> console.error(err));
  }

  cancel(): void {
    this.router.navigateByUrl(`/orders/lines/${this.orderItem.orderId}`)
  }

}
