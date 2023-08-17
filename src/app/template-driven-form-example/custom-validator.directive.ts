import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[appStartWith]',
    providers: [{
        provide: NG_VALIDATORS, useExisting: CustomValidatorDirective,
        multi: true
    }]
})
export class CustomValidatorDirective implements Validator {
    @Input('appStartWith') expr?: string;

    validate(control: AbstractControl) {
        if (control.value && !control.value.startsWith(this.expr)) {
            return {startWith: control.value};
        }
        return null;
    }
}

