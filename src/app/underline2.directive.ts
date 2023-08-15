import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[underline2]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class Underline2Directive {

  constructor(private el: ElementRef) {
  }

  onMouseEnter() {
    this.el.nativeElement.style.textDecoration = 'underline';
  }

  onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
  }
}
