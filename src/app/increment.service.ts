import {Injectable} from '@angular/core';
import {ConstantService} from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class IncrementService {

  constructor(private constantService: ConstantService) {
  }

  increment() {
    return this.constantService.anyNumber() + 1;
  }
}
