import { Component, OnInit } from '@angular/core';
import { Item } from '../item.class';
import {ItemService} from '../item.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[]

  constructor(private itemSvc: ItemService) { }

  ngOnInit(): void { 
      this.itemSvc.list().subscribe(
        res=>{
          console.log(res);
          this.items = res as Item[];
        },
        err=>{
          console.error(err);
        }
      );
  }

}
