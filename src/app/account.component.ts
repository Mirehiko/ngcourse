import {Component, Input} from '@angular/core';

@Component({
  selector: 'account',
  template: `
    <div>
      Account balance is: {{balance}}
    </div>
  `
})
export class AccountComponent {
  @Input()
  balance?: number;
}
