import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NotMargaretValidator} from '../validators/not-margaret-validator';
import {forbiddenNameValidator} from '../validators/forbidden-name-validator';
import {asyncLengthValidator} from '../validators/async-length-validator.service';
import {domainValidator} from "../validators/domain-validator";

@Component({
  selector: 'app-reactive-validators-example',
  templateUrl: './reactive-validators-example.component.html',
  styleUrls: ['./reactive-validators-example.component.css']
})
export class ReactiveValidatorsExampleComponent {

  name = new FormControl('', [
    domainValidator(['.com', '.ch'])
  ]);

  // name = new FormControl(null, [
  //   Validators.minLength(3),
  //   Validators.maxLength(5),
  // ]);

  anotherName = new FormControl('', [
    NotMargaretValidator
  ]);

  notBadName = new FormControl('', [
    forbiddenNameValidator(['Alice', 'Bob'])
  ]);

  public addValidator() {
    this.notBadName.addValidators(Validators.required)
  }

  evenLengthName = new FormControl('', null,
    asyncLengthValidator);
}
