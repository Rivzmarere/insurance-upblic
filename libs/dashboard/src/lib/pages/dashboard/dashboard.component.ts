import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../../customer/src/lib/service/customer.service';
import { PaymentsService } from '../../../../../payments/src/lib/service/payments.service';
import { ClaimService } from '../../../../../claim/src/lib/service/claim.service';


@Component({
  selector: 'insurance-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customers: any;
  claims: any;
  payments: any;

  constructor(
    private CustomerService:CustomerService,
    private PaymentsService:PaymentsService,
    private ClaimService:ClaimService,
  ) { }

  ngOnInit(): void {
    this.CustomerService.getAllCustomers().subscribe((res:any) =>{
      this.customers = res
    console.log(this.customers.length)



    },(err:any)=>{
    })

    this.PaymentsService.getAllPayments().subscribe((res:any) =>{
      this.payments = res

    },(err)=>{
    })

    this.ClaimService.getAllClaims().subscribe((res:any) =>{
      this.claims = res


    },(err)=>{

    })
  }

}
