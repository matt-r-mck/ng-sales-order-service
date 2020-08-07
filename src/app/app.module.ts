import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { MenuComponent } from './menu/menu.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { OrderItemCreateComponent } from './orderItem/order-item-create/order-item-create.component';
import { OrderItemEditComponent } from './orderItem/order-item-edit/order-item-edit.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { SortPipe } from './sort/sort.pipe';
import { CustomerSearchPipe } from './customer/customer-search.pipe';
import { ItemSearchPipe } from './item/item-search.pipe';
import { OrderSearchPipe } from './order/order-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    OrderListComponent,
    OrderEditComponent,
    OrderDetailComponent,
    OrderCreateComponent,
    BoolDisplayPipe,
    MenuComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemEditComponent,
    ItemCreateComponent,
    OrderItemCreateComponent,
    OrderItemEditComponent,
    OrderLinesComponent,
    SortPipe,
    CustomerSearchPipe,
    ItemSearchPipe,
    OrderSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
