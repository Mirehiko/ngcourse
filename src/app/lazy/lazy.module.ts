import { NgModule } from '@angular/core';
import {RandomLazyComponent} from './random.lazy.component';
import {LazyAppComponent} from './lazy.component';
import {RouterModule} from '@angular/router';
import {RandomService3} from "./random.service3";
import { RandomService } from '../random.service';

@NgModule({
  declarations: [
    RandomLazyComponent,
    LazyAppComponent,
  ],
  providers:[{provide: RandomService3, useClass: RandomService}],
  imports: [
      RouterModule.forChild([
      { path: '', component: LazyAppComponent }
    ]),
  ],
})
export class LazyModule { }
