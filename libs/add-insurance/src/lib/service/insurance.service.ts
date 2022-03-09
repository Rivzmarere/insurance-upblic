import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }


  createInsurance(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/insurance/post-insurance`,
      BeneficiaryDetails
    );
  }
  getAllInsurances() {
    return this.http.get(`http://localhost:1000/insurance/get-all-insurances`);
  }
  getInsuranceById() {
    return this.http.get(`http://localhost:1000/`);
  }
}
