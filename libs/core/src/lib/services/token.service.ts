import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  public setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public clearToken() {
    localStorage.clear();
  }
}
