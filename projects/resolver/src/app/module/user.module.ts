import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserComponent}
    ])
  ]
})
export class UserModule {}