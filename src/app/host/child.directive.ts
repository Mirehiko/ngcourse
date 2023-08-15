import {Directive, Host, Optional} from "@angular/core";
import {OtherService} from "./other.service";
import {HostService} from "./host.service";

@Directive({selector: 'child-directive'})
export class ChildDirective {
  logs: string[] = [];

  constructor(@Optional() @Host() os: OtherService,
              @Optional() @Host() hs: HostService) {
    console.log(`os = ${os}`); // null
    console.log(`hs is ${hs.constructor.name}`);  // HostService
  }
}

