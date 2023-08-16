import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import {UserService} from "./user.service";
import {UserInterface} from "./user.interface";

@Injectable()
export class UserDataResolver implements Resolve<UserInterface[]> {

  constructor( private userService: UserService) {}

  resolve(): Observable<UserInterface[]> {
    return this.userService.getUsers();
  }
}
