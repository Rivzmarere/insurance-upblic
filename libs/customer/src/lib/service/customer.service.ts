import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/customer/post-customer`,
      BeneficiaryDetails
    );
  }

  addCar(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/car/add-car`,
      BeneficiaryDetails
    );
  }

  getOwnerCars(OwnerId: any) {
    return this.http.get(
      `http://localhost:1000/car/get-car-by-owner-id/${OwnerId}`
    );
  }
  uploadImage(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/file`,
      BeneficiaryDetails
    );
  }
  getAllCustomers() {
    return this.http.get(`http://localhost:1000/customer/get-all-customers`);
  }
  getCustomerById(id:any) {
    return this.http.get(`http://localhost:1000/customer/get-customer-by/${id}`);
  }


}
