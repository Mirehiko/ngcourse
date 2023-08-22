import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import {UserService} from "projects/resolver/src/app/main/module/services/user.service";
import {UserInterface} from "projects/resolver/src/app/main/module/interfaces/user.interface";

@Injectable()
export class UserDataResolver implements Resolve<UserInterface[]> {

  constructor( private userService: UserService ) {}

  resolve(): Observable<UserInterface[]> {
    return this.userService.getUsers();
  }
}
