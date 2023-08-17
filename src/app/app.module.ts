import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveControlExampleComponent} from './reactive-control-example/reactive-control-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormExampleComponent} from './reactive-form-example/reactive-form-example.component';
import {ReactiveValidatorsExampleComponent} from './reactive-validators-example/reactive-validators-example.component';
import {ReactiveFormComplexExampleComponent} from './reactive-form-complex-example/reactive-form-complex-example.component';
import {TemplateDrivenFormExampleComponent} from './template-driven-form-example/template-driven-form-example.component';
import {CustomValidatorDirective} from './template-driven-form-example/custom-validator.directive';
import {CommonModule} from "@angular/common";
import {EqualToValidatorDirective} from "./template-driven-form-example/equal-to-validator.directive";
import {UserUniqueValidatorDirective} from "./template-driven-form-example/user-unique-validator.directive";

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormExampleComponent,
    ReactiveControlExampleComponent,
    ReactiveFormExampleComponent,
    ReactiveValidatorsExampleComponent,
    ReactiveFormComplexExampleComponent,
    CustomValidatorDirective,
    EqualToValidatorDirective,
    UserUniqueValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
