import {
  ComponentRef,
  Directive,
  HostListener,
  Input,
  ViewContainerRef
} from '@angular/core';
import {PopoverSimpleComponent} from './popover-simple.component';

@Directive({
  selector: '[popover-simple]'
})
export class PopoverSimpleDirective {
  @Input() text?: string;
  componentRef?: ComponentRef<PopoverSimpleComponent>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  @HostListener('mouseenter')
  show() {
    if (this.componentRef) { return; }
    this.componentRef =
      this.viewContainerRef.createComponent(PopoverSimpleComponent);
    this.componentRef.instance.text = this.text;
  }

  @HostListener('mouseleave')
  hide() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = undefined;
    }
  }

}
