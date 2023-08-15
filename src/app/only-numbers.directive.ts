// <input type="text" only-number color="#FAA">
import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: 'input[only-number]'
})
export class OnlyNumberDirective {
    private isValid = true;
    constructor(private el: ElementRef) {
    }

    @Input() color?: string;

    @HostListener('keyup')
    onKeyUp() {
        this.el.nativeElement.style.backgroundColor =
          !this.isValid ? this.color : 'initial';
        setTimeout(()=>
          this.el.nativeElement.style.backgroundColor = "#FFF",
          100
        )
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: any) {
        if (event.keyCode !== 8) {
            this.isValid = !!Number(event.key);
            if (!this.isValid) {
                event.preventDefault();
            }
        }
    }
}
