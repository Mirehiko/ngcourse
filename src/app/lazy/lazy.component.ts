import { Component } from '@angular/core';
import {LazyService} from "./lazy.service";
import { RandomService } from '../random.service';

@Component({
  templateUrl: './lazy.component.html',
  // providers: [LazyService]
  // providers: [RandomService] // 31
})
export class LazyAppComponent {

  constructor(private randomService: RandomService) {}
  // constructor(private lazyService: LazyService) {}
}
