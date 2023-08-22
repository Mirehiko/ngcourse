import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {DataComponent} from "./data.component";
import {DataResolver} from "./data.resolver";
import {DataService} from "./data.service";
import {routing} from "./app.routing";
import { AuthService } from './main/module';
import { SERVER_URL } from './server-url.const';
import { AuthModule } from './auth';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';

@NgModule({
  declarations: [ AppComponent, DataComponent],
  imports:      [ BrowserModule, HttpClientModule, routing, AuthModule],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: SERVER_URL, useValue: 'http://localhost:4000' },
    DataService, DataResolver, AuthService,
    // { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
