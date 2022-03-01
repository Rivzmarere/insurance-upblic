import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import * as Actions from './current-user.actions';
import { CurrentUserPartialState } from './current-user.reducer';
import { NGXLogger } from 'ngx-logger';
import { CurrentUserService } from './current-user.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrentUserEffects {
  loadCurrentUser$ = createEffect(() =>
    this.dataPersistence.fetch(Actions.userLoggedIn, {
      run: (
        action: ReturnType<typeof Actions.userLoggedIn>,
        state: CurrentUserPartialState
      ) => {
        return this.currentUserService.getCurrentUser(action.userid)
          .pipe(map(user => {
            return Actions.currentUserLoaded({ currentUser: user });
          }));
      },
      onError: (
        action: ReturnType<typeof Actions.userLoggedIn>,
        error
      ) => {
        this.logger.error('Error', error);
        return Actions.errorAction({ error });
      }
    })
  );

  constructor(
    private logger: NGXLogger,
    private currentUserService: CurrentUserService,
    private dataPersistence: DataPersistence<CurrentUserPartialState>
  ) {
  }
}
