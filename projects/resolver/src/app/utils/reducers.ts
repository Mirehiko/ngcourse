import {ActionReducerMap} from "@ngrx/store";
import {credentialsState, featureKey} from "../auth/store";

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  'Auth': credentialsState,
}