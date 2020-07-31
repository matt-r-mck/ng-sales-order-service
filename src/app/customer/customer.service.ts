import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Customer} from './customer.class';

const baseUrl = "http:localhost:56616/api/customers"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http: HttpClient) { }

  list(): Observable<Customer[]>{
    return this.http.get(`${baseUrl}`) as Observable<Customer[]>;
  }

  get( id: number ): Observable<Customer>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<Customer>;
  }

  create( customer: Customer ): Observable<Customer>{
    return this.http.post(`${baseUrl}`, customer ) as Observable<Customer>;
  }

  change( customer: Customer ): Observable<any>{
    return this.http.put(`${baseUrl}/${customer.id}`, customer ) as Observable<any>;
  }

  remove( id: number ): Observable<Customer>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<Customer>;
  }

}
