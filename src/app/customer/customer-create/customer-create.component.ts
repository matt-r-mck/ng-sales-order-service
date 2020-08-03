import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  pageTitle: string = "Create Customer";
  customer: Customer = new Customer();

  constructor(

    // allows us to establish links
    private router: Router,
    private custSvc: CustomerService,

  ) { }

    save(): void {
      this.custSvc.create(this.customer).subscribe(
        res => {
          console.log("Customer create Successful!"),
          this.router.navigateByUrl("/customers/list");
        },
        err => {
          console.error(err);
        }
        );
    }
    
    cancel(): void {
      this.router.navigateByUrl("/customers/list")
    }

  ngOnInit() {
  }

}
