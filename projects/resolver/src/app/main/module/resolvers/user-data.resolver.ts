import {Resolve} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {UserService} from "projects/resolver/src/app/main/module/services/user.service";
import {UserInterface} from "projects/resolver/src/app/main/module/interfaces/user.interface";
import {Store} from "@ngrx/store";
import {loadUsers} from "../store";

@Injectable()
export class UserDataResolver implements Resolve<UserInterface[]> {
  private store = inject(Store);

  constructor( private userService: UserService ) {}

  resolve(): Observable<UserInterface[]> {
    this.store.dispatch(loadUsers());
    return of([])
  }
}
