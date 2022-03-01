import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.auth.isAuthenticated$.pipe(map((isAuthenticated): boolean | UrlTree => {
      if (!isAuthenticated) {
        return this.router.createUrlTree(['/auth/login']);
      }
      return true;
    }));
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuthenticated$.pipe(
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
}
