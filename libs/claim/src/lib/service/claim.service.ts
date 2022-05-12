import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  createClaim(BeneficiaryDetails: any) {
    return this.http.post(
      `https://hit200node.herokuapp.com/`,
      BeneficiaryDetails
    );
  }
  getAllClaims() {
    return this.http.get(`https://hit200node.herokuapp.com/`);
  }
  getClaimsById() {
    return this.http.get(`https://hit200node.herokuapp.com/`);
  }
}
