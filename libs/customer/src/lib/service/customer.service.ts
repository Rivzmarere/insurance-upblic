import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(BeneficiaryDetails: any) {
    return this.http.post(
      `http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/customer/post-customer`,
      BeneficiaryDetails
    );
  }

  addCar(BeneficiaryDetails: any) {
    return this.http.post(
      `http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/car/add-car`,
      BeneficiaryDetails
    );
  }

  getOwnerCars(OwnerId: any) {
    return this.http.get(
      `http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/car/get-car-by-owner-id/${OwnerId}`
    );
  }
  getCarbyId(CarId: any) {
    return this.http.get(
      `http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/car/get-car-by-id/${CarId}`
    );
  }
  uploadImage(BeneficiaryDetails: any) {
    return this.http.post(
      `http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/file`,
      BeneficiaryDetails
    );
  }
  updateVehcleById(id:any ,BeneficiaryDetails: any) {
    return this.http.put(
      `http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/car/update-car/${id}`,
      BeneficiaryDetails
    );
  }
  getAllCustomers() {
    return this.http.get(`http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/customer/get-all-customers`);
  }
  getCustomerById(id:any) {
    return this.http.get(`http://hit200node-env.eba-arzr3fni.us-east-1.elasticbeanstalk.com/customer/get-customer-by/${id}`);
  }


}
