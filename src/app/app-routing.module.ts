import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CssTransitionComponent} from './css-transition/css-transition.component';
import {CssTransitionFunctionsComponent} from './css-transition-functions/css-transition-functions.component';
import {CssAnimationsComponent} from './css-animations/css-animations.component';
import {AngularAnimationsComponent} from './angular-animations/angular-animations.component';


const routes: Routes = [
  {path: 'css-transitions', component: CssTransitionComponent},
  {path: 'transition-functions', component: CssTransitionFunctionsComponent},
  {path: 'css-animations', component: CssAnimationsComponent},
  {path: 'angular-animations', component: AngularAnimationsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'css-transitions'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
