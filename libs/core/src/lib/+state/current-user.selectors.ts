import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CURRENT_USER_FEATURE_KEY,
  State,
  CurrentUserPartialState
} from './current-user.reducer';

// Lookup the 'CurrentUser' feature state managed by NgRx
export const getCurrentUserState = createFeatureSelector<CurrentUserPartialState,
  State>(CURRENT_USER_FEATURE_KEY);

export const getCurrentUserLoaded = createSelector(
  getCurrentUserState,
  (state: State) => state.loaded
);

export const getCurrentUserError = createSelector(
  getCurrentUserState,
  (state: State) => state.error
);

export const getCurrentUser = createSelector(
  getCurrentUserState,
  (state: State) => state.currentUser
);
