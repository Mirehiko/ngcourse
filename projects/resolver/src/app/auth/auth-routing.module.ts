import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForbiddenComponent } from "./forbidden";
import { LoginPageComponent } from "./login-page";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
  
  // {
  //   path: 'forbidden',
  //   component: ForbiddenComponent,
  // },
  // {
  //   path: "**",
  //   redirectTo: "login"
  // },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AuthRoutingModule {
}
