import {inject, Injectable} from "@angular/core";
import { catchError, from, map, Observable, of } from 'rxjs';
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "./user.interface";

@Injectable()
export class UserService {
  public users: UserInterface[] = [];
  private http = inject(HttpClient);

  getUsers(): Observable<UserInterface[]> {
    if (this.users.length) {
      return from([this.users]);
    }
    return this.http.get<UserInterface[]>("./assets/48MB_DATA.json")
      .pipe(tap((data) => {
        this.users = data.splice(0, 20);
      }));
  }

  getUserInfo(id: number): UserInterface {
    return this.users.find(u => u.id === id)!;
  }
}

