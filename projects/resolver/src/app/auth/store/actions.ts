import {createAction, createActionGroup, props} from "@ngrx/store";
import {UserInterface} from "../../main/module/interfaces";

// export const login = createAction('login', props<{email: string, password: string}>());
// export const loginSuccess = createAction('loginSuccess', props<{ user: UserInterface }>());
// export const loginFailed = createAction('loginFailed', props<{ error: any }>());

export const AuthGroup = createActionGroup({
  source: 'Auth',
  events: {
    login: props<{email: string, password: string}>(),
    loginSuccess: props<{ user: UserInterface }>(),
    loginFailed: props<{ error: any }>(),
  }
});

export const loginFailed = createAction('loginFailed');