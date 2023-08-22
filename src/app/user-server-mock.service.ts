import { Injectable } from '@angular/core';
import users from './users';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServerMockService {

  constructor() { }

  getUser(id: number) {
    return of(users.find(user => user.id == id));
  }
}
