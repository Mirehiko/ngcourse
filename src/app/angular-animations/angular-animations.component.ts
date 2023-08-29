import {Component} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-angular-animations',
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.css'],
  animations: [
    trigger('complexAnimation', [
      transition(':enter', group([ // defines a group of parallel animations
        query('.animated-first-row', [  // fade in first row
          style({opacity: 0}),
          animate('2s linear', style({opacity: 1}))
        ]),
        query('.animated-second-row', [ // next, fade in and move second row
          style({transform: 'translateY(100px)', opacity: 0}),
          animate('2s linear', style({opacity: 1})),
          animate('1s linear', style({transform: 'translateY(0)'}))
        ])
      ]))
    ])
  ]
})
export class AngularAnimationsComponent {
}
