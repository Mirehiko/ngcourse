import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import {APP_CONFIG, AppConfig} from "../app-config";

@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class ConfigModule {



}
