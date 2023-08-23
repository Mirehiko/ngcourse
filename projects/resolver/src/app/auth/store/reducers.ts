import {createReducer, on} from "@ngrx/store";
import {UserInterface} from "../../main/module/interfaces";
import {AuthGroup} from "./actions";

export const featureKey: string = 'Auth';

export interface CredentialsState {
  user: UserInterface | null;
  token: string | null;
  isSignIn: boolean;
  error: any;
  loading: boolean;
}

export const initialState: CredentialsState = {
  user: null,
  token: null,
  isSignIn: false,
  error: null,
  loading: false
}

export const credentialsState = createReducer(
  initialState,
  on(AuthGroup.login, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthGroup.loginsuccess, (state, {user}) => ({
    ...state,
    loading: false,
    isSignIn: true,
    user,
  }))
);