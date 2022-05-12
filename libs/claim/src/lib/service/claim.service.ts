import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  createClaim(BeneficiaryDetails: any) {
    return this.http.post(
      `https://hit200node.herokuapp.com/claim/post-claim`,
      BeneficiaryDetails
    );
  }
  getAllClaims() {
    return this.http.get(`https://hit200node.herokuapp.com/claim/view-all-claims`);
  }
  getClaimsById() {
    return this.http.get(`https://hit200node.herokuapp.com/`);
  }

  updateClaim(BeneficiaryDetails: any, id:any) {
    return this.http.put(
      `https://hit200node.herokuapp.com/claim/update-claim/${id}`,
      BeneficiaryDetails
    );
  }
}
