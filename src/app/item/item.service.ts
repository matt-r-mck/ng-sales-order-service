import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Item} from './item.class';

const baseUrl = "http://localhost:56616/api/items"

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  list(): Observable<Item[]>{
    return this.http.get(`${baseUrl}`) as Observable<Item[]>;
  }

  get( id: number ): Observable<Item>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<Item>;
  }

  create( item: Item ): Observable<Item>{
    return this.http.post(`${baseUrl}`, item ) as Observable<Item>;
  }

  change( item: Item ): Observable<any>{
    return this.http.put(`${baseUrl}/${item.id}`, item ) as Observable<any>;
  }

  remove( id: number ): Observable<Item>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<Item>;
  }

}
