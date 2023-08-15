import {Component, inject} from '@angular/core';
import { APP_CONFIG, AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title: string = 'DI';
  private _config: AppConfig = inject(APP_CONFIG);
  
  constructor() {
    this.title = this._config.title;
  }
}
