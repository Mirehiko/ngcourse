import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.css']
})
export class TemplateDrivenFormExampleComponent implements AfterViewInit {

  // user is mutable by the ngModel
  user = {
    // this field will change after user input
    name: '',
    userName: '',
    password: '',
    password2: '',
    uppercase: ''
  };

  @ViewChild('nameInput', {static: false})
  nameInput?: NgModel;

  @ViewChild('myForm', {static: false})
  myForm?: NgForm;

  nameInputValue?: string;
  formValue?: string;

  ngAfterViewInit() {
    if (this.nameInput && this.nameInput.valueChanges) {
      this.nameInput.valueChanges.subscribe(v =>
        this.nameInputValue = v
      );
    }
    if (this.myForm && this.myForm.valueChanges) {
      this.myForm.valueChanges.subscribe(v =>
        this.formValue = v
      );
    }
  }
  onSubmit(myForm: NgForm) {
    console.log(`Username is '${myForm.value.name}'`);
  }
}
