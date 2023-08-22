import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  users: User[] = [];
  selectedUserId = 1;

  constructor(http: HttpClient) {
    http.get<User[]>('http://localhost:4000/users').subscribe( res => {
      console.log(res, 'users===>');
      this.users = res;
    });
  }

  details(id: number) {
    this.selectedUserId = id;
  }
}
