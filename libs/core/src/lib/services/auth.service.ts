import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { tap, map, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './token.service';
import { Store } from '@ngrx/store';
import { userLoggedIn, userLoggedOut } from '../+state/current-user.actions';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$: Observable<boolean> = timer(0, 5000).pipe(
    map(() => !this.jwtHelperService.isTokenExpired()),
    distinctUntilChanged(),
    tap((val) => {
      if (val) {
        const token = this.jwtHelperService.decodeToken();
        this.store.dispatch(userLoggedIn({ userid: token['nameid'] }));
      }
    })
  );

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private jwtHelperService: JwtHelperService,
    private store: Store<any>,
    private logger: NGXLogger
  ) {
  }

  login(redirectPath: string = '/'): void {
    this.router.navigate(['/auth/login'], {
      queryParams: { returnUrl: redirectPath }
    }).then(() => {
    }, err => {
      this.logger.warn('Navigation to "/auth/login" failed', err);
    });
  }

  logout(): void {
    this.tokenService.clearToken();
    this.store.dispatch(userLoggedOut());
    window.location.href = '/';
  }
}
