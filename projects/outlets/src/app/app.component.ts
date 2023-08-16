import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['']">Home</a> |
        <a [routerLink]="['', {outlets: { aux: 'chat'}}]">Open Chat</a> |
        <a [routerLink]="['', {outlets: { details: 'details'}}]">Open Details</a> |
        <a [routerLink]="[{outlets: { aux: null}}]">Close Chat</a> |
        <a [routerLink]="[{outlets: { details: null}}]">Close Details</a> |
        <br/><br/>
        <router-outlet></router-outlet>
        <router-outlet name="aux"></router-outlet>
        <router-outlet name="details"></router-outlet>
    `
})
export class AppComponent {}
