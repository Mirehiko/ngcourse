import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {DataComponent} from "./data.component";
import {DataResolver} from "./data.resolver";
import {DataService} from "./data.service";
import {routing} from "./app.routing";
import { AuthService } from './main/module';
import { SERVER_URL } from './server-url.const';
import { AuthModule } from './auth';

@NgModule({
  declarations: [ AppComponent, DataComponent],
  imports:      [ BrowserModule, HttpClientModule, routing, AuthModule],
  providers:[
    { provide: SERVER_URL, useValue: 'http://localhost:4000' },
    DataService, DataResolver, AuthService,
    // { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
