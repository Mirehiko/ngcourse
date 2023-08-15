// <div *generateInputs="3"></div>
import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[generateInputs]'
})
export class GenerateInputsDirective {
  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  @Input() set generateInputs(count: number) {
    for (let i = 0; i < count; i++) {
      this.renderer.appendChild(this.elementRef.nativeElement,
        this.renderer.createElement('input'));
    }
  }
}
