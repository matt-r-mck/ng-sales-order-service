import { Component, OnInit } from '@angular/core';
//import service, class and route
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ 
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  //variable of return
  customer: Customer = null;
  pageTitle: string = "Customer Detail";
  showDelete: boolean = false;

  verify(): void{ this.showDelete = !this.showDelete;}
  
  delete(): void {
    this.custSvc.remove(this.customer.id).subscribe(
      res => {
        console.log("Customer delete successful");
        this.router.navigateByUrl("/customer/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(
    //inject service and route into constructor
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //use + to convert id string to num
    let id = this.route.snapshot.params.id;
    this.custSvc.get(+id).subscribe(
      res => {
        console.log("Customer", res);
        this.customer = res as Customer;
      },
      err => {
        console.error(err);
      }
    );
  }
}
