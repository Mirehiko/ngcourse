import {
    Component,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef
} from "@angular/core";


@Component({
    selector: 'm-email',
    template: 'email'
})
export class MEmailComponent {
}

@Component({
    selector: 'm-number',
    template: 'number'
})
export class MNumberComponent {
}

@Directive({
    selector: '[inputCount]',
    standalone: true
})
export class GenerateCustomInputDirective implements OnChanges {
    private _initial: string[] = [];

    @Input('inputCountInitial') set initial(vals: string[]) {
        console.log(vals);
        this._initial = vals;
    }
    get initial(): string[] {
        return this._initial;
    }


    constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('initial' in changes) {
            console.log(changes)
        }
    }

    @Input() set inputCount(nums: string[]) {
        this.initial.forEach((current, index) => {
            if (current === 'email') {
                this.viewRef.createComponent(MEmailComponent)
            }
            if (current === 'number') {
                this.viewRef.createComponent(MNumberComponent)
            }
        });
    }
}



// @Directive({
//     selector: '[inputCount]',
//     standalone: true
// })
// export class GenerateCustomInputDirective {
//     @Input() public inputCountInit: number[] = []; // TODO
//
//     constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) {}
//
//     @Input() set inputCount(nums: number[]) {
//
//         nums.forEach(
//           (current, index) =>
//             this.viewRef.createEmbeddedView(this.templateRef, {
//                 $implicit: current,
//                 index,
//             })
//         );
//     }
// }

// @Directive({
//     selector: '[inputCount]',
//     standalone: true
// })
// export class GenerateCustomInputDirective {
//
//     constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) {}
//
//     @Input() set inputCount(n: number) {
//         for(let i = 0; i < n; i++) {
//             this.vcr.createEmbeddedView(this.templateRef);
//         }
//     }
// }

// @Directive({
//     selector: '[inputCount]',
//     standalone: true
// })
// export class GenerateCustomInputDirective {
//
//     constructor(private _el: ElementRef, private _renderer: Renderer2) {}
//
//     @Input() set inputCount(n: number) {
//         for(let i = 0; i < n; i++) {
//             const input = this._renderer.createElement('input');
//             this._renderer.appendChild(this._el.nativeElement, input);
//         }
//     }
// }