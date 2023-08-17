import {Component, inject} from "@angular/core";
import {UserService} from "./user.service";

@Component({
  selector: 'admin-comp',
  template: `
      <div class="d-flex">
          <div>
              <div *ngFor="let user of users">
                  <a routerLink="{{user.id}}" routerLinkActive="active">{{user.first_name}} {{user.last_name}}</a>
                  <button [routerLink]="['', {outlets: { details: 'details'}}]">pin</button>
              </div>
          </div>
          <div>
              <router-outlet></router-outlet>
              <router-outlet name="details"></router-outlet>
          </div>
      </div>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  private userService = inject(UserService);

  get users() {
    return this.userService.users;
  }

}
