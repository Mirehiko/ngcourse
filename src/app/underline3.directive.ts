import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[underline3]'
})
export class Underline3Directive {

  @HostBinding('style.textDecoration') textDecoration?: string;

  constructor() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.textDecoration = 'underline';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.textDecoration = 'none';
  }
}
