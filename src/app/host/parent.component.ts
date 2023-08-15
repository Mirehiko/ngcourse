import {Component} from "@angular/core";
import {OtherService} from "./other.service";
import {HostService} from "./host.service";

@Component({
  selector: 'app-parent',
  viewProviders: [HostService],
  template: '<child-directive></child-directive>',
})
export class ParentComponent {}
