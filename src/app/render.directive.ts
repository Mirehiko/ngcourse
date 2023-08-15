import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective {
  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  @Input() set button(name: string) {
    const buttonElement = this.renderer.createElement('button');
    const buttonName = this.renderer.createText(name);
    this.renderer.appendChild(buttonElement, buttonName);
    this.renderer.appendChild(this.elementRef.nativeElement, buttonElement);
  }
}

