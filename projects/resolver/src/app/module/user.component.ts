import {Component, inject} from "@angular/core";
import {UserService} from "./user.service";

@Component({
  selector: 'admin-comp',
  template: `
    <a *ngFor="let user of getUsers()"
       routerLink="user.id"
       routerLinkActive="active"
    >{{user.first_name}} {{user.last_name}}</a>
  `
})
export class UserComponent {
  private userService = inject(UserService);

  public getUsers() {
    return this.userService.users;
  }

}