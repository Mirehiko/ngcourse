import { Component } from '@angular/core';
import {LazyService} from "./lazy.service";

@Component({
  templateUrl: './lazy.component.html',
  providers: [LazyService]
})
export class LazyAppComponent {

  constructor(private lazyService: LazyService) {
  }
}
