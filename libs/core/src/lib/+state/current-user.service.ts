import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserEntity } from './current-user.models';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

export type Profile = { [key: string]: any };

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  constructor(private http: HttpClient) {
  }

  public getCurrentUser(userid: string): Observable<CurrentUserEntity> {

    const profileUrl = `http://192.168.10.33:1008/api/v1/User/${userid}`;
    const userUrl = `http://192.168.10.33:1008/api/v1/User/${userid}`;

    return this.http.get<{ success: boolean; data: Profile }>(profileUrl)
      .pipe(switchMap(result => {
        return this.http.get<CurrentUserEntity>(userUrl).pipe(map(user => {
          return Object.assign(user, {
            profile: result.data
          });
        }));
      }));
  }
}
