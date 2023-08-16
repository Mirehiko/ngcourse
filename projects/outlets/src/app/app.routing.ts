import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ChatComponent} from "./chat.component";
import {DetailsComponent} from "./details.component";

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent, outlet:"aux"},
  {path: 'details', component: DetailsComponent, outlet:"details"}
];

export const routing = RouterModule.forRoot(routes);
