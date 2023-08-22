import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { from, Observable, of } from 'rxjs';
import {UserInterface} from "projects/resolver/src/app/main/module/interfaces/user.interface";
import { tap } from 'rxjs/operators';
import { SERVER_URL } from 'projects/resolver/src/app/server-url.const';

@Injectable()
export class UserService {
  public users: UserInterface[] = [];
  private http = inject(HttpClient);
  private serverUrl = inject(SERVER_URL)

  getUsers(): Observable<UserInterface[]> {
    if (this.users.length) {
      return of(this.users);
    }
    return this.http.get<UserInterface[]>(`${this.serverUrl}/users`).pipe(tap(d => {
      this.users = d;
    }));
    // if (this.users.length > 1) {
    //   console.log(this.users)
    //   return from([this.users]);
    // }
    // return this.http.get<UserInterface[]>("./assets/48MB_DATA.json")
    //   .pipe(tap((data) => {
    //     this.users.push(...data.splice(0, 20));
    //   }));
  }
  
  addUser(user: UserInterface): void {
    this.users.push(user);
  }
  
  removeUser(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }

  getUserInfo(id: number): UserInterface {
    return this.users.find(u => u.id === id)!;
  }
}

