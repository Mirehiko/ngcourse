import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserInterface } from '../../user.interface';
import { UserService } from '../../user.service';


@Component({
  selector: 'edit',
  template: `
      <label for="fname">
          First name:
          <input [(ngModel)]="fname" id="fname" type="text">
      </label>
      <label for="lname">
          Last name:
          <input [(ngModel)]="lname" id="lname" type="text">
      </label>
      <label for="email">
          Email:
          <input [(ngModel)]="email" id="email" type="email">
      </label>
      <div>
          <button [routerLink]="['/users']">Cancel</button>
          <button (click)="create()">Create</button>
      </div>
  `,
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class EditComponent {
  protected fname = '';
  protected lname = '';
  protected email = '';
  private userService = inject(UserService);
  private router = inject(Router);
  
  
  protected create(): void {
    const newUser: UserInterface = {
      first_name: this.fname,
      last_name: this.lname,
      email: this.email,
      id: Math.max(...this.userService.users.map(u => u.id)) + 1,
      gender: 'unknown',
      ip_address: '112.123.124.14',
    }
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
  
}
