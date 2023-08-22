import { Component, OnInit } from '@angular/core';
import {User} from "../user.model";

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent implements OnInit {

  user = {} as User

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
