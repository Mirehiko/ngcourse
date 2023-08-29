import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CssTransitionComponent} from './css-transition/css-transition.component';
import {CssTransitionFunctionsComponent} from './css-transition-functions/css-transition-functions.component';
import {CssAnimationsComponent} from './css-animations/css-animations.component';
import {AngularAnimationsComponent} from './angular-animations/angular-animations.component';
import {ColorBlockComponent} from './color-block/color-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CssTransitionComponent,
    CssTransitionFunctionsComponent,
    CssAnimationsComponent,
    AngularAnimationsComponent,
    ColorBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
