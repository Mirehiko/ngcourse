import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from './auth-routing.module';
import { ForbiddenComponent } from "./forbidden";
import { LoginPageComponent } from "./login-page";


@NgModule({
  declarations: [
    LoginPageComponent,
    ForbiddenComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {
}
