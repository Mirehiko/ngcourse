import {Component} from "@angular/core";
import {OtherService} from "./other.service";

@Component({
  selector: 'app-top',
  viewProviders: [OtherService],
  template: '<app-parent></app-parent>',
})
export class TopComponent {}
