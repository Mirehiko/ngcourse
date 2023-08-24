import {createAction, props} from "@ngrx/store";
import {UserInterface} from "../interfaces";
import {UserState} from "./reducers";
import {Update} from "@ngrx/entity";

export const loadUsers = createAction('Load users');
export const loadUsersSuccess = createAction('Load users success', props<{users: UserInterface[]}>());
export const loadUsersFailed = createAction('Load users failed', props<{error?: any}>());


export const updateUserById = createAction('Update user', props<{update: Update<UserInterface>}>());
export const updateUserByIdSuccess = createAction('Update user error');
export const updateUserByIdFailed = createAction('Update user error', props<{error?: any}>());

export const deleteUserById = createAction('Delete user', props<{id: number}>());
export const deleteUserByIdSuccess = createAction('Delete user error');
export const deleteUserByIdFailed = createAction('Delete user error', props<{error?: any}>());

