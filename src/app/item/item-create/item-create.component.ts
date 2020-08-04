import { Component, OnInit } from '@angular/core'; 
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  pageTitle: string = "Create Item";
  item: Item = new Item();

  constructor(

    private router: Router,
    private itemSvc: ItemService

  ) { }

  save(): void {
    this.itemSvc.create(this.item).subscribe(
      res => {
        console.log("Item create Successful!"),
        this.router.navigateByUrl("/items/list");
      },
      err => {
        console.error(err);
      }
      );
  }
  
  cancel(): void {
    this.router.navigateByUrl("/items/list")
  }

  ngOnInit() {
  }

}
