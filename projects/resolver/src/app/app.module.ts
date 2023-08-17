import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HomeResComponent} from "./home.component";
import {DataComponent} from "./data.component";
import {DataResolver} from "./data.resolver";
import {DataService} from "./data.service";
import {HttpClientModule} from "@angular/common/http";
import {routing} from "./app.routing";
import { AuthService, UserDataResolver, UserService } from './module';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, routing],
  declarations: [ AppComponent, HomeResComponent, DataComponent],
  providers:[
    DataService, DataResolver,
    UserDataResolver, UserService, AuthService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
