import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { NgModule } from '@angular/core';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderItemCreateComponent } from './orderItem/order-item-create/order-item-create.component';
import { OrderItemEditComponent } from './orderItem/order-item-edit/order-item-edit.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/customers/list', pathMatch: 'full'},
  { path: 'customers/create', component: CustomerCreateComponent},
  { path: 'customers/detail/:id', component: CustomerDetailComponent},
  { path: 'customers/edit/:id', component: CustomerEditComponent},
  { path: 'customers/list', component: CustomerListComponent},
  { path: 'items/create', component: ItemCreateComponent},
  { path: 'items/detail/:id', component: ItemDetailComponent},
  { path: 'items/edit/:id', component: ItemEditComponent},
  { path: 'items/list', component: ItemListComponent},
  { path: 'orders/create', component: OrderCreateComponent},
  { path: 'orders/edit/:id', component: OrderEditComponent},
  { path: 'orders/lines/:id', component: OrderLinesComponent},
  { path: 'orders/detail/:id', component: OrderDetailComponent},
  { path: 'orders/list', component: OrderListComponent},
  { path: 'orderitems/create/:id', component: OrderItemCreateComponent},
  { path: 'orderitems/edit/:id', component: OrderItemEditComponent},
  { path: '**', component: CustomerListComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
