import {Component, Input} from '@angular/core';

@Component({
  selector: 'popover',
  styles: [
    `.popover {
      font-size: 8pt;
      background-color: aliceblue;
      padding: 5px;
      width: 100px;
    }`
  ],
  template: `
      <div class="popover">
         {{text}}
      </div>
   `
})
export class PopoverSimpleComponent {
  @Input() text?: string;
}
