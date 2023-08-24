import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromUsers from './reducers'
import {userAdapter} from "./reducers";

// export const selectUsersState = createFeatureSelector<fromUsers.UserListState>(fromUsers.featureKey);
//
// export const selectUsers = createSelector(
//   selectUsersState, state => state.users
// );
//
// export const selectUsersLoading = createSelector(
//   selectUsersState,
//   state => state.loading
// )
export const selectUsersState = createFeatureSelector<fromUsers.UserState>(fromUsers.featureKey);
export const { selectAll } = userAdapter.getSelectors();

export const selectUsers = createSelector(
  selectUsersState, selectAll
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  state => state.loading
)