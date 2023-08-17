import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { UserDetailsComponent } from "./user-details.component";

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UserComponent,
        children: [
          {
            path: ':id', component: UserDetailsComponent
          },
        ],
      },
      { path: 'details', component: UserDetailsComponent, outlet: "details" }
    ])
  ]
})
export class UserModule {}
