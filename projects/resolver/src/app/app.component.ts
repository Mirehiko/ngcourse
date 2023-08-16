import {Component} from '@angular/core';
import {
  Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Event
} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home</a> |
        <a [routerLink]="['mydata']">Data</a> |
        <a [routerLink]="['users']">Users</a> |
        <router-outlet></router-outlet>
        <div *ngIf="navigating">
            Loading...
        </div>
    `
})
export class AppComponent {

  navigating = false;

  constructor(private router: Router) {
    this.router.events.subscribe(
      (event) => this.eventLogger(event)
    );
  }

  eventLogger(event: Event) {
    console.log(event)
    if (event instanceof NavigationStart) {
      this.navigating = true;
      console.log("Navigation started");
    }

    if (event instanceof NavigationEnd ||
      event instanceof NavigationError || event instanceof NavigationCancel) {
      this.navigating = false;
      console.log("Navigation ended");
    }
  }
}
