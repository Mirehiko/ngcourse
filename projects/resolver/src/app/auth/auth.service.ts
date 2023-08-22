import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserInterface } from '../main/module/interfaces';
import { SERVER_URL } from '../server-url.const';


@Injectable()
export class AuthService {
  public isAuthorized: boolean = false;
  public activeUser: UserInterface | null = null;
  private http = inject(HttpClient);
  private serverUrl = inject(SERVER_URL);
  
  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.serverUrl}/authenticate`,
      { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.activeUser = user;
        this.isAuthorized = true;
        return user;
      }));
  }
  
  public logout(): void {
    localStorage.removeItem('currentUser');
    this.activeUser = null;
  }
}
