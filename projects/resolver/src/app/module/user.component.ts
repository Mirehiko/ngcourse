import {Component, inject} from "@angular/core";
import { UserService } from "./user.service";
import { AuthService } from 'projects/resolver/src/app/module/auth.service';

@Component({
  selector: 'users',
  template: `
      <div>
          <button [routerLink]="['/users', {outlets: {auth: 'auth'}}]">Authorize</button>
          <button *ngIf="isAuthorized" (click)="logout()">Logout</button>
          <button *ngIf="isAuthorized" routerLink="admin">Create user</button>
          <router-outlet name="auth"></router-outlet>
      </div>
      <div class="d-flex">
          <div>
              <div *ngFor="let user of users">
                  <a routerLink="{{user.id}}" routerLinkActive="active">{{user.first_name}} {{user.last_name}}</a>
              </div>
          </div>
          <div>
              <router-outlet></router-outlet>
          </div>
      </div>
  `,
  styleUrls: ['./components/details/user.component.scss']
})
export class UserComponent {
  private userService = inject(UserService);
  private authService = inject(AuthService);

  get users() {
    return this.userService.users.filter(u => u.email !== 'admin');
  }
  
  get isAuthorized(): boolean {
    return this.authService.isAuthorized;
  }
  
  logout(): void {
    this.authService.logout();
  }

}