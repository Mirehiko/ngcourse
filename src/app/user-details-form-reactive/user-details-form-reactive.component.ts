import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-details-form-reactive',
  templateUrl: './user-details-form-reactive.component.html',
  styleUrls: ['./user-details-form-reactive.component.css']
})
export class UserDetailsFormReactiveComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    cardNumber: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
