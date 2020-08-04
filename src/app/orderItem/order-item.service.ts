import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {OrderItem} from './order-item.class';

const baseUrl = "http://localhost:56616/api/orderitems"

@Injectable({
  providedIn: 'root'
}) 
export class OrderItemService {

  constructor(private http: HttpClient) { }

  list(): Observable<OrderItem[]>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<OrderItem[]>;
  }

  get( id: number ): Observable<OrderItem>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<OrderItem>;
  }

  create( orderItem: OrderItem ): Observable<OrderItem>{
    return this.http.post(`${baseUrl}`, orderItem ) as Observable<OrderItem>;
  }

  change( orderItem: OrderItem ): Observable<any>{
    return this.http.put(`${baseUrl}/${orderItem.id}`, orderItem ) as Observable<any>;
  }

  remove( id: number ): Observable<OrderItem>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<OrderItem>;
  }

}
