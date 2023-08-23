import {Component, inject} from "@angular/core";
import { UserService } from "projects/resolver/src/app/main/module/services/user.service";
import { AuthService } from 'projects/resolver/src/app/auth/auth.service';

@Component({
  selector: 'users',
  template: `
      <div class="d-flex">
          <div>
              <div *ngFor="let user of users | async">
                  <a routerLink="{{user.id}}" routerLinkActive="active">{{user.firstName}} {{user.lastName}}</a>
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
    return this.userService.getUsers();
  }
}
