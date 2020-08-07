import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.class';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  pageTitle: string= "Customer List"
  
  sortCriteria: string = "id";
  sortAsc: boolean = true;
  searchCriteria: string = "";

  sort(col: string): void {
    if(col === this.sortCriteria){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria=col;
    
  }
 
  constructor(private custSvc: CustomerService) { }

  ngOnInit(): void {
    this.custSvc.list().subscribe(
      res=>{
        console.log(res);
        this.customers = res as Customer[];
      },
      err=>{
        console.error(err);
      }
    );
  }

}
