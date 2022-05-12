import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAllPayments() {
    return this.http.get(`https://hit200node.herokuapp.com/`);
  }
}
