import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of, switchMap} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {UserService} from "../services/user.service";
import {loadUsers, loadUsersFailed, loadUsersSuccess} from "./actions";

@Injectable()
export class UsersEffects {
  private userService = inject(UserService);
  private actions$ = inject(Actions);

  loadUserEffects$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadUsers),
      switchMap(actions => this.userService.getUsers()
        .pipe(
          map( users => {
            return loadUsersSuccess({users})
          }),
          catchError(err => of(loadUsersFailed({error: err})))
        )
      )
    )
  );
}