import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }


  createPayment(BeneficiaryDetails: any) {
    return this.http.post(
      `https://hit200node.herokuapp.com/payment/post-payment`,
      BeneficiaryDetails
    );
  }
  getAllPayments() {
    return this.http.get(`https://hit200node.herokuapp.com/payment/view-all-payements`);
  }

  getCarByRegNumber(regNumber: any) {
    return this.http.get(
      `https://hit200node.herokuapp.com/car/get-car-by-regNumber/${regNumber}`
    );
  }
  getPaymentsByCarID(carId: any) {
    return this.http.get(
      `https://hit200node.herokuapp.com/payment/get-payment-by-vehcleId/${carId}`
    );
  }

  getInsuranceByName(name: any) {
    return this.http.get(
      `https://hit200node.herokuapp.com/insurance/get-insurance-by-name/${name}`
    );
  }

  getCarById(id: any) {
    return this.http.get(
      `https://hit200node.herokuapp.com/car/get-car-by-id/${id}`
    );
  }
}
