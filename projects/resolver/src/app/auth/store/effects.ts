import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of, switchMap} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {AuthService} from "../auth.service";
import {AuthGroup} from "./actions";
import {Router} from "@angular/router";

@Injectable()
export class CredentialEffects {
  private authService = inject(AuthService);
  private router = inject(Router);
  private actions$ = inject(Actions);
  loginEffects$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthGroup.login),
      switchMap(actions => this.authService.login(actions.email, actions.password)
        .pipe(
          map( user => {
            this.router.navigate(['/main']);
            return AuthGroup.loginsuccess({user})
          }),
          catchError(err => of(AuthGroup.loginfailed({error: err})))
        )
      )
    )
  );
}