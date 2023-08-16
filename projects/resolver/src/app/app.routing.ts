import { Routes, RouterModule } from '@angular/router';
import {DataResolver} from "./data.resolver";
import {DataComponent} from "./data.component";
import {HomeResComponent} from "./home.component";
import {UserDataResolver} from "./module/user-data.resolver";

const routes: Routes = [
  {path: '',        component: HomeResComponent},
  {path: 'mydata', component: DataComponent,
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
];

export const routing = RouterModule.forRoot(routes);
