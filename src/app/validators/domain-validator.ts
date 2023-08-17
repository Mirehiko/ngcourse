import {ValidatorFn} from '@angular/forms';

export const domainValidator = (exclude: string[]): ValidatorFn => {
  return control => {
    const isInvalid = exclude.some(domain => control.value.includes(domain));
    if (isInvalid) {
      return {
        prohibitedDomains: {
          prohibitedDomain: exclude,
          current: control.value
        }
      }
    }
    return null;
  }
};
