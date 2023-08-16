import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {ProductDetailComponent} from "./product.detail.component";
import {HomeComponent} from "./home.component";
import {routing} from "./app.routing";
import {ProductDescriptionComponent} from "./product.description.component";
import {SellerInfoComponent} from "./seller.info.component";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent,
    ProductDescriptionComponent, SellerInfoComponent // used in child routes
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
