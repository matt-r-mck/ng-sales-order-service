import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Order} from './order.class';

const baseUrl = "http://localhost:56616/api/orders"

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  list(): Observable<Order[]>{
    return this.http.get(`${baseUrl}`) as Observable<Order[]>;
  }

  get( id: number ): Observable<Order>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<Order>;
  }

  create( order: Order ): Observable<Order>{
    return this.http.post(`${baseUrl}`, order ) as Observable<Order>;
  }

  change( order: Order ): Observable<any>{
    return this.http.put(`${baseUrl}/${order.id}`, order ) as Observable<any>;
  }

  remove( id: number ): Observable<Order>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<Order>;
  }


}
