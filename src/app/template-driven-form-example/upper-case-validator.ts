import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[uppercase]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: UpperCaseValidator,
    multi: true
  }]
})
export class UpperCaseValidator implements Validator {
  validate(control: AbstractControl) {
    if (!control.value) {
      return null
    }
    if (control.value !== control.value.toUpperCase()) {
      return {uppercase: control.value};
    }
    return null;
  }
}

