import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpRequestInterceptor} from './interceptor';

import { environment } from '../environments/environment';
import {HttpMockRequestInterceptor} from './interceptor.mock';
import {UserDetailsServerComponent} from './user-details-server/user-details.component';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserServerService} from "./user-server.service";
import {UserServerMockService} from "./user-server-mock.service";
import { UserDetailsFormComponent } from './user-details-form/user-details-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserDetailsFormReactiveComponent} from "./user-details-form-reactive/user-details-form-reactive.component";
export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetailsServerComponent,
    HelloComponent,
    UserDetailsFormComponent,
    UserDetailsFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
      multi: true
    },
    {
      provide: UserServerService,
      useClass: isMock ? UserServerMockService : UserServerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
