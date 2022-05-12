import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }


  createInsurance(BeneficiaryDetails: any) {
    return this.http.post(
      `https://hit200node.herokuapp.com/insurance/post-insurance`,
      BeneficiaryDetails
    );
  }
  getAllInsurances() {
    return this.http.get(`https://hit200node.herokuapp.com/insurance/get-all-insurances`);
  }
  getInsuranceById() {
    return this.http.get(`https://hit200node.herokuapp.com/`);
  }
}
