import { createAction, props } from '@ngrx/store';
import { CurrentUserEntity, UserAvatar } from './current-user.models';

export const userLoggedIn = createAction('[CurrentUser] User Logged IN',
  props<{ userid: string }>());

export const currentUserLoaded = createAction(
  '[CurrentUser] User loaded',
  props<{ currentUser: CurrentUserEntity }>()
);

export const errorAction = createAction(
  '[CurrentUser] Load CurrentUser Failure',
  props<{ error: any }>()
);

export const userLoggedOut = createAction('[CurrentUser] User logged out');

export const updateAvatar = createAction('[CurrentUser] Update Avatar',
  props<{ avatar: UserAvatar }>());
