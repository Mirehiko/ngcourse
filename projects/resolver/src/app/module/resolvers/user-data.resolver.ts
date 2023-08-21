import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import {UserService} from "../services/user.service";
import {UserInterface} from "../interfaces/user.interface";

@Injectable()
export class UserDataResolver implements Resolve<UserInterface[]> {

  constructor( private userService: UserService ) {}

  resolve(): Observable<UserInterface[]> {
    return this.userService.getUsers();
  }
}
