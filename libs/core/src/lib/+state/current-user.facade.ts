import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromCurrentUser from './current-user.reducer';
import * as Selectors from './current-user.selectors';
import { UserAvatar } from './current-user.models';
import { updateAvatar } from './current-user.actions';

@Injectable()
export class CurrentUserFacade {
  loaded$ = this.store.pipe(select(Selectors.getCurrentUserLoaded));
  currentUser$ = this.store.pipe(select(Selectors.getCurrentUser));

  constructor(private store: Store<fromCurrentUser.CurrentUserPartialState>) {
  }

  public updateProfilePicture(userAvatar: UserAvatar) {
    this.store.dispatch(updateAvatar({ avatar: userAvatar }));
  }
}
