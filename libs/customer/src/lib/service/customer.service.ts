import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/`,
      BeneficiaryDetails
    );
  }
  getAllCustomers() {
    return this.http.get(`http://localhost:1000/`);
  }
  getCustomerById() {
    return this.http.get(`http://localhost:1000/`);
  }


}
