import {
  Component,
  ComponentFactoryResolver, ComponentRef,
  Directive,
  ElementRef, EmbeddedViewRef,
  HostBinding,
  HostListener, Injector,
  Input, OnDestroy,
  ViewContainerRef
} from '@angular/core';

@Directive({
    selector: 'input[only-number]'
})
export class OnlyNumberTextDirective implements OnDestroy {
    private isValid = true;
    constructor(private viewContainerRef: ViewContainerRef) {
    }

    componentRef?: ComponentRef<AlertMessageComponent>;
    contentViewRef?: EmbeddedViewRef<AlertMessageComponent>;

    @HostBinding('style.borderColor') borderColor?: string;

    @HostListener('keyup')
    onKeyUp() {
        this.borderColor = !this.isValid ? 'red' : 'initial';
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: any) {
        if (event.keyCode !== 8) {
            if (this.componentRef) {
                this.componentRef.destroy();
            }
            this.isValid = !!Number(event.key);
            if (!this.isValid) {
                this.componentRef = this.viewContainerRef
                  .createComponent(AlertMessageComponent);
                this.componentRef.instance.char = event.key;
                event.preventDefault();
            } else if (this.componentRef) {
                this.componentRef.destroy();
            }
        }
    }

    ngOnDestroy(): void {
      if (this.componentRef) this.componentRef.destroy();
    }
}

@Component({
    selector: 'alert-message',
    template: `
        <p>Symbol '{{char}}' is not allowed</p>
  `
})
export class AlertMessageComponent {
    constructor() {}
    @Input() char?: string;
}
