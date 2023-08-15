import {Component, Inject, inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../../app-config";

@Component({
  selector: 'app-title',
  template: '{{title}}',
})
export class TitleComponent  {
  protected title: string = 'no title';
  private _config: AppConfig = inject(APP_CONFIG);

  constructor () {
    this.title = this._config.title;
  }

}
