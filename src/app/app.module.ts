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

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    AllRandomsComponent,
    TopComponent,
    ParentComponent,
    ChildDirective,
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
    ConfigModule.forRoot({title: 'lol kek', apiEndpoint: ''}),
    // ConfigModule,
  ],
  // providers: [{provide: APP_CONFIG, useValue: CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
