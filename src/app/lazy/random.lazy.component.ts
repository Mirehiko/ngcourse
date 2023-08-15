import {Component, Injectable} from '@angular/core';
import {RandomService3} from "./random.service3";
import {RandomService} from "../random.service";

@Component({
  selector: 'random-lazy',
  template: '<p>{{randomService.random}}</p>',
  //providers: [RandomService] // 29
})
export class RandomLazyComponent {
  constructor(public randomService: RandomService3) {}
}
