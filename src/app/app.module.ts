import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccountComponent} from './account.component';
import {HighlightDirective} from './highlight.directive';
import {FormsModule} from '@angular/forms';
import {UnderlineDirective} from './underline.directive';
import {Underline2Directive} from './underline2.directive';
import { Underline3Directive } from './underline3.directive';
import {RangeDirective} from './range.directive';
import {AlertComponent} from './alert.component';
import {DynamicComponent} from './dynamic.component';
import {RenderDirective} from './render.directive';
import {IsAdminDirective} from './admin.directive';
import {CheckAdminComponent} from './checkadmin.component';
import {DelayDirective} from './delay.directive';
import {CardComponent} from './card.component';
import {RenderComponent} from './render.component';
import {PopoverComponent} from './popover.component';
import {PopoverSimpleComponent} from './popover-simple.component';
import {PopoverSimpleDirective} from './popover-simple.directive';
import {TemplateOutletComponent} from './template-outlet.component';
import {ByeComponent, ComponentOutletComponent, HelloComponent} from './component-outlet.component';
import {ComponentOutlet2Component, GreetComponent} from './component-outlet2.component';
import {ComponentOutlet3Component, ContentComponent} from './component-outlet3.component';
import {
  ComponentOutletExerciseComponent,
  OnlyEmailInputComponent,
  OnlyNumberInputComponent
} from "./component-outlet-exercise";
import { GenerateInputsViewcontainerDirective } from './generate-inputs-viewcontainer.directive';
import {TemplateOutletComponentDynamic} from "./template-outlet-dynamic.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DynamicComponent,
    AccountComponent,
    HighlightDirective,
    UnderlineDirective,
    Underline2Directive,
    Underline3Directive,
    RangeDirective,
    RenderDirective,
    IsAdminDirective,
    DelayDirective,
    CardComponent,
    RenderComponent,
    CheckAdminComponent,
    PopoverComponent,
    PopoverSimpleComponent,
    PopoverSimpleDirective,
    TemplateOutletComponent,
    HelloComponent,
    ByeComponent,
    ComponentOutletComponent,
    GreetComponent,
    ComponentOutlet2Component,
    ComponentOutlet3Component,
    ContentComponent,
    OnlyEmailInputComponent,
    OnlyNumberInputComponent,
    ComponentOutletExerciseComponent,
    GenerateInputsViewcontainerDirective,
    TemplateOutletComponentDynamic,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
