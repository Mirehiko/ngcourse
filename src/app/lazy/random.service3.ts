import { Injectable } from "@angular/core";

@Injectable()
export class RandomService3 {
  random: string;

  constructor() {
    this.random = Math.random().toFixed(3);
  }
}
