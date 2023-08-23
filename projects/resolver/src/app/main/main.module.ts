import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeResComponent } from "./home.component";
import { MainComponent } from "./main.component";
import { DataComponent } from "../data.component";
import { DataResolver } from "../data.resolver";
import { UserDataResolver, UserService } from './module';


@NgModule({
  declarations: [
    HomeResComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            component: HomeResComponent,
          },
          {
            path: 'mydata', component: DataComponent,
            resolve: {
              mydata: DataResolver
            }
          },
          {
            path: 'users',
            loadChildren: ()=>import('./module/user.module')
              .then(m=>m.UserModule),
            resolve: {
              users: UserDataResolver
            }
          }
        ]
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [
    UserDataResolver,
    UserService
  ]
})
export class MainModule {
}
