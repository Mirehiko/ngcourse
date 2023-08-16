import {inject, Injectable} from "@angular/core";
import {catchError, Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "./user.interface";

@Injectable()
export class UserService {
  public users: UserInterface[] = [];
  private http = inject(HttpClient);

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>("./assets/48MB_DATA.json")
      .pipe(tap(data => this.users = data));
  }

  getUserInfo(id: number): Observable<UserInterface> {
    return of(this.users.find(u=>id)!)
      .pipe(
        catchError(e => of(e))
      );
  }
}

