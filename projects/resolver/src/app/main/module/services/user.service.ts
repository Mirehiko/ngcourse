import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { from, Observable } from 'rxjs';
import {tap} from "rxjs/operators";
import {UserInterface} from "projects/resolver/src/app/main/module/interfaces/user.interface";

@Injectable()
export class UserService {
  public users: UserInterface[] = [
    {
      first_name: 'Admin',
      last_name: 'Adminovich',
      id: 194045,
      ip_address: '',
      gender: '',
      email: 'admin',
      role: 'admin'
    }
  ];
  private http = inject(HttpClient);

  getUsers(): Observable<UserInterface[]> {
    if (this.users.length > 1) {
      console.log(this.users)
      return from([this.users]);
    }
    return this.http.get<UserInterface[]>("./assets/48MB_DATA.json")
      .pipe(tap((data) => {
        this.users.push(...data.splice(0, 20));
      }));
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

