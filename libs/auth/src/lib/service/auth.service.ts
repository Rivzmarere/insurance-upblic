import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PasswordResetRequest {
  phoneNumber: string;
  password: string;
  token: string;
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(body:any): Observable<any> {


    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json;'
    );

    return this.http
      .post<any>(`http://localhost:1000/login`,body)
      .pipe(
        map((response) => {
          console.log(response)
          return response
        })
      );
  }


}
