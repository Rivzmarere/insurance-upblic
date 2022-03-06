import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  createClaim(BeneficiaryDetails: any) {
    return this.http.post(
      `http://localhost:1000/`,
      BeneficiaryDetails
    );
  }
  getAllClaims() {
    return this.http.get(`http://localhost:1000/`);
  }
  getClaimsById() {
    return this.http.get(`http://localhost:1000/`);
  }
}
