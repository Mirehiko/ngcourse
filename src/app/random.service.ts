import {Injectable} from "@angular/core";
import {RandomTitleService} from "./random-title.service";

@Injectable({providedIn: 'root'}) // 31
export class RandomService {
  random: string;

  constructor(titleService: RandomTitleService) {
    this.random = titleService.title + Math.random().toFixed(1);
    console.log("creating Random Service INIT" + this.random);
  }
}
