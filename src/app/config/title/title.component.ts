import {Component, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../../app-config";

@Component({
  selector: 'app-title',
  template: '{{title}}',
})
export class TitleComponent  {
  title = 'no title';

}
