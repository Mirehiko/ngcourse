import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'render-component',
  template: '<div #elem>Element text</div>'
})
export class RenderComponent implements AfterViewInit {
  @ViewChild('elem', {static: true})
  elem?: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const buttonElement = this.renderer.createElement('button');
    const text = this.renderer.createText('Text');
    this.renderer.appendChild(buttonElement, text);
    this.renderer.appendChild(this.elem!.nativeElement, buttonElement);
  }
}
