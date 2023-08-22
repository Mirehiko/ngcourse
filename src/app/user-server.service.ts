import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServerService {

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get<User>('http://localhost:4000/users/' + id);
  }
}
