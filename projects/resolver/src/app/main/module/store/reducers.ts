import {ActionReducerMap, createReducer, on} from "@ngrx/store";
import {UserInterface} from "../interfaces";
import {loadUsers, loadUsersSuccess, updateUserById} from "./actions";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export const featureKey: string = 'UserList';

// export interface UserListState {
//   users: UserState;
//   error: any;
//   loading: boolean;
// }

// export const initialState: UserListState = {
//   users: userAdapter.getInitialState(),
//   loading: false,
//   error: null
// }

// export const userListState = createReducer(
//   initialState,
//   on(loadUsers, (state) => ({
//     ...state,
//     loading: true,
//   })),
//   on(loadUsersSuccess, (state, {users}) => ({
//     ...state,
//     loading: false,
//     users: userAdapter.setAll(users, state)
//   }))
// );


export interface UserState extends EntityState<UserInterface> {
  loading: boolean,
  error: any
};

export const userAdapter: EntityAdapter<UserInterface> = createEntityAdapter<UserInterface>()

export const initialState: UserState = userAdapter.getInitialState({
  loading: false,
  error: null
})

export const userListState = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  // on(loadUsersSuccess, (state, {users}) => ({
  //   ...state,
  //   loading: false,
  //   users: userAdapter.setAll(users, state)
  // })),
  on(loadUsersSuccess, (state, {users}) => {
    return userAdapter.setAll(users, {
      ...state,
      loading: false
    })
  }),
  on(updateUserById, (state, {update}) => {
    return userAdapter.updateOne(update, {
      ...state
    })
  })
  // on(updateUserById, (state, {update}) => ({
  //   ...state,
  //   users: userAdapter.updateOne(update, state)
  // }))
);


