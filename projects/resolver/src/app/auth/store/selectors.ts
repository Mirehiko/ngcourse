import {createFeatureSelector, createSelector} from "@ngrx/store";
// import { CredentialsState, featureKey } from "./reducers";
import * as fromCredentials from './reducers'

export const selectCredentialState = createFeatureSelector<fromCredentials.CredentialsState>(fromCredentials.featureKey);

export const selectToken = createSelector(
  selectCredentialState, state => state.token
);