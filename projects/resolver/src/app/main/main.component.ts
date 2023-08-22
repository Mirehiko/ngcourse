import { Component } from '@angular/core';


@Component({
  selector: 'main',
  template: `
      <a [routerLink]="['/main']">Home</a> |
      <a [routerLink]="['mydata']">Data</a> |
      <a [routerLink]="['users']">Users</a> |
      <a [routerLink]="['/auth']">Login</a> |
      <div>
        <router-outlet></router-outlet>
      </div>
  `,
})
export class MainComponent {}
