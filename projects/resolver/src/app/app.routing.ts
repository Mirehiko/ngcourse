import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module')
      .then(m=>m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: ()=>import('./main/main.module')
      .then(m=>m.MainModule),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'users',
  //   loadChildren: ()=>import('./module/user.module')
  //     .then(m=>m.UserModule),
  //   canActivate: [AuthGuard],
  //   resolve: {
  //     users: UserDataResolver
  //   }
  // },
  {
    path: '**', redirectTo: 'main', pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
