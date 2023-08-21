import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { UserComponent } from "./user.component";
import { AuthComponent, UserDetailsComponent } from './components';
import { AdminGuard } from "./guards/admin.guard";


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: UserComponent,
        children: [
          
          { path: 'auth', component: AuthComponent, outlet: "auth" },
          {
            path: 'admin', canActivate: [AdminGuard],
            loadComponent: () => import('./components/edit/edit.component').then((m) => m.EditComponent)
          },
          {
            path: ':id', component: UserDetailsComponent
          },
        ],
      },
      
    ])
  ],
  providers: [
    AdminGuard,
  ]
})
export class UserModule {}
