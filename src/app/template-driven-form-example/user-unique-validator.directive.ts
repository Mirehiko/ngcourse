import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator,
  NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {delay, map, Observable, of, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Directive({
  selector:   '[userUniqueValid][ngModel]',
  providers: [{provide: NG_ASYNC_VALIDATORS,
    useExisting: UserUniqueValidatorDirective,
    multi: true}]
})
export class UserUniqueValidatorDirective implements AsyncValidator {

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    const user = c.value;
    return of(user)
      .pipe(
        delay(1000),
        map(user => user.length> 2 ),
        map(res => res ? null : {userNotUnique: true})
      );
  }


}
