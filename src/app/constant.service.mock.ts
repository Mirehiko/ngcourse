import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantServiceMock {

  anyNumber() {
    return 42;
  }
}
