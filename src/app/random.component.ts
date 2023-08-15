import {Component} from '@angular/core';
import {RandomService} from "./random.service";
import {RandomService3} from "./lazy/random.service3";

@Component({
  selector: 'random',
  template: '<p>{{randomService.random}}</p>',
  // providers: [RandomService] // 31
})
export class RandomComponent {
  constructor(public randomService: RandomService) {}
}
