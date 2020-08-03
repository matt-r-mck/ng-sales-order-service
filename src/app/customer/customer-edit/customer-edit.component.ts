import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.class';

@Component({ 
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer = null;
  pageTitle: string = "Edit Customer";

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private custSvc: CustomerService

  ) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params.id;
    this.custSvc.get(+id).subscribe(
      res=>{
        console.log("Customer", res);
        this.customer = res as Customer;
      },
      err=>{
        console.error(err);
      }
    )
  }

  save(): void{
    this.custSvc.change(this.customer).subscribe(
      res=>{
        console.log("Customer change successful");
        this.router.navigateByUrl("/customers/list")
      },
      err=>{
        console.error(err);
      }
    )
  }

  cancel(): void {
    this.router.navigateByUrl("/customers/list")
  }

}
