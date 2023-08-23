import { Component, inject } from '@angular/core';
import { AuthService } from './module';
import { take } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'main',
  template: `
      <a [routerLink]="['/main']">Home</a> |
      <a [routerLink]="['mydata']">Data</a> |
      <a [routerLink]="['users']">Users</a> |
      <a (click)="logout()">Logout</a> |
      <div>
        <router-outlet></router-outlet>
      </div>
  `,
})
export class MainComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  protected logout(): void {
    this.authService.logout().pipe(take(1)).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
