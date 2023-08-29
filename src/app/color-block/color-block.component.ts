import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.css'],
  animations: [
    trigger('currentColor', [
      state('red', style({
        width: '100px',
        backgroundColor: 'red'
      })),
      state('green', style({
        width: '200px',
        backgroundColor: 'green'
      })),
      state('blue', style({
        width: '300px',
        backgroundColor: 'blue'
      })),
      transition('red => green', animate('1s ease')),
      transition('red => blue', animate('2s ease')),
      transition('green => red', animate('1s ease')),
      transition('green => blue', animate('1s ease')),
      transition('blue => red', animate('2s ease')),
      transition('blue => green', animate('1s ease')),
    ])
  ]
})
export class ColorBlockComponent {

  @Input() currentState = 'blue';
}
