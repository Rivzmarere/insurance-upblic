import { createReducer, on, Action } from '@ngrx/store';
import * as CurrentUserActions from './current-user.actions';
import { CurrentUserEntity } from './current-user.models';

export const CURRENT_USER_FEATURE_KEY = 'currentUser';

export interface State {
  currentUser: CurrentUserEntity | null;
  loaded: boolean;
  error?: string | null; // last known error (if any)
}

export interface CurrentUserPartialState {
  readonly [CURRENT_USER_FEATURE_KEY]: State;
}

export const initialState: State = {
  loaded: false,
  currentUser: null
};

const currentUserReducer = createReducer(
  initialState,
  on(CurrentUserActions.userLoggedIn, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(CurrentUserActions.currentUserLoaded, (state, { currentUser }) =>
    ({
      loaded: true,
      error: undefined,
      currentUser: currentUser
    })
  ),
  on(CurrentUserActions.errorAction, (state, { error }) => ({
    ...state,
    loaded: false,
    error
  })),
  on(CurrentUserActions.userLoggedOut, () => ({
    loaded: true,
    currentUser: null,
    error: undefined
  })),
  on(CurrentUserActions.updateAvatar, (state, { avatar }) => {
    const currentUser = state.currentUser;
    const userWithUpdatedAvatar = Object.assign({}, currentUser, {
      profile: {
        userAvatar: avatar
      }
    });
    return {
      ...state,
      currentUser: userWithUpdatedAvatar
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return currentUserReducer(state, action);
}
