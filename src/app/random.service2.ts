import {Injectable} from "@angular/core";

@Injectable()
export class RandomService2  {
  random: string;

  constructor() {
    this.random = Math.random().toFixed(2);
  }
}
