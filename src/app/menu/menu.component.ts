import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Customers", "/customers/list"),
    new Menu("Orders", "/orders/list"),
    new Menu("Items", "/items/list")
  ];

  constructor() { }

  ngOnInit() {
  }

}
