import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }


  createPayment(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/insurance/post-insurance`,
      BeneficiaryDetails
    );
  }
  getAllPayments() {
    return this.http.get(`http://localhost:1000/`);
  }

  getCarByRegNumber(regNumber: any) {
    return this.http.get(
      `http://localhost:1000/car/get-car-by-regNumber/${regNumber}`
    );
  }

  getInsuranceByName(name: any) {
    return this.http.get(
      `http://localhost:1000/insurance/get-insurance-by-name/${name}`
    );
  }

  getCarById(id: any) {
    return this.http.get(
      `http://localhost:1000/car/get-car-by-id/${id}`
    );
  }
}
