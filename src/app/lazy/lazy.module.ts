import { NgModule } from '@angular/core';
import {RandomLazyComponent} from './random.lazy.component';
import {LazyAppComponent} from './lazy.component';
import {RouterModule} from '@angular/router';
import {RandomService3} from "./random.service3";

@NgModule({
  declarations: [
    RandomLazyComponent,
    LazyAppComponent,
  ],
  providers:[RandomService3],
  imports: [
      RouterModule.forChild([
      { path: '', component: LazyAppComponent }
    ]),
  ],
})
export class LazyModule { }
