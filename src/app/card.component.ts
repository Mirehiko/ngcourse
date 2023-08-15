import {Component} from '@angular/core';

@Component({
  selector: 'card',
  template: `<span><ng-content></ng-content></span>`,
  styles: [`
    span {
        background-color: yellow;
        width: 40px;
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
        text-align: center;
    }
  `]
})
export class CardComponent {
}

