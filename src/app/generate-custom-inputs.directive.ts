import {
    Component,
    Directive,
    Input,
    OnDestroy,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[generateInputs]'
})
export class GenerateCustomInputsDirective implements OnDestroy {
    constructor(private viewContainerRef: ViewContainerRef) {
    }

    @Input('generateInputs') set types(types: string[]) {
        for (let i = 0; i < types.length; i++) {
            this.createComponent(types[i]);
        }
    }

    createComponent(type: string) {
        let componentType = OnlyNumbersComponent;
        if (type === 'email') {
            componentType = OnlyEmailComponent;
        }
        this.viewContainerRef.createComponent(componentType);
    }

    ngOnDestroy(): void {
        this.viewContainerRef.clear();
    }
}

@Component({
    selector: 'only-numbers',
    template: `
    <div>
        <input only-number placeholder="Enter only number"  />
    </div>
  `
})
export class OnlyNumbersComponent {
    constructor() {}
}

@Component({
    selector: 'only-email',
    template: `
    <div>
        <input type="email" placeholder="Enter your email" />
    </div>
  `
})
export class OnlyEmailComponent {
    constructor() {}
}
