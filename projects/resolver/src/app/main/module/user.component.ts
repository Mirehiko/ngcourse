import {Component, inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectUsers} from "./store";

@Component({
  selector: 'users',
  template: `
      <div class="d-flex">
          <div>
              <div *ngFor="let user of users$ | async">
                  <a routerLink="{{user?.id}}" routerLinkActive="active">{{user?.firstName}} {{user?.lastName}}</a>
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
  private store = inject(Store);

  get users$() {
    return this.store.select(selectUsers);
  }
}
