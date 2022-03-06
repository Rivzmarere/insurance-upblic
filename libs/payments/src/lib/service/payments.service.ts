import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }


  createPayment(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/`,
      BeneficiaryDetails
    );
  }
  getAllPayments() {
    return this.http.get(`http://localhost:1000/`);
  }
}
