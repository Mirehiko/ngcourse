import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RandomComponent} from './random.component';
import {RouterModule} from '@angular/router';
import {ConfigModule} from './config/config.module';
import {AllRandomsComponent} from './all.randoms.component';
import {TopComponent} from "./host/top.component";
import {ParentComponent} from "./host/parent.component";
import {ChildDirective} from "./host/child.directive";
import { APP_CONFIG, CONFIG } from './app-config';
import { RandomTitleComponent } from './random-title.component';
import { RandomTitleService } from './random-title.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    AllRandomsComponent,
    TopComponent,
    ParentComponent,
    ChildDirective,
    RandomTitleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'lazy',
        loadChildren: () => import('./lazy/lazy.module')
          .then(m => m.LazyModule)
      }
    ]),
    ConfigModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: CONFIG},
    {provide: RandomTitleService, useFactory: () => {

    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
