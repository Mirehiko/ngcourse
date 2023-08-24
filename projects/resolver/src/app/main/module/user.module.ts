import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { UserComponent } from "projects/resolver/src/app/main/module/user.component";
import { UserDetailsComponent } from 'projects/resolver/src/app/main/module/components';
import { AdminGuard } from "projects/resolver/src/app/main/module/guards/admin.guard";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {featureKey, userListState, UsersEffects} from "./store";


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(featureKey, userListState),
    EffectsModule.forFeature([UsersEffects]),
    RouterModule.forChild([
      {
        path: '', component: UserComponent,
        children: [
          // {
          //   path: 'admin', canActivate: [AdminGuard],
          //   loadComponent: () => import('projects/resolver/src/app/main/module/components/edit/edit.component').then((m) => m.EditComponent)
          // },
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
