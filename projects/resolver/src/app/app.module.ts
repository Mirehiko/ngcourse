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
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./utils";
import {EffectsModule} from "@ngrx/effects";
import {CredentialEffects} from "./auth/store";

@NgModule({
  declarations: [ AppComponent, DataComponent],
  imports:      [
    BrowserModule,
    HttpClientModule,
    routing,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CredentialEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
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
