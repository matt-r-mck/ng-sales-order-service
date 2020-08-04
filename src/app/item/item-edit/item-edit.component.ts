import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.class';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  item: Item = null;
  pageTitle: string= "Edit Item";

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private itemSvc: ItemService

  ) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params.id;
    this.itemSvc.get(+id).subscribe(
      res=>{
        console.log("Item", res);
        this.item = res as Item;
      },
      err=>{
        console.error(err);
      } 
    )
  }

  save(): void{
    this.itemSvc.change(this.item).subscribe(
      res=>{
        console.log("Item change successful");
        this.router.navigateByUrl("/items/list")
      },
      err=>{
        console.error(err);
      }
    )
  }

  cancel(): void {
    this.router.navigateByUrl("/items/list")
  }

}
