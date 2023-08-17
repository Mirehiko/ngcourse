import { Component, inject} from '@angular/core';
import { AuthService } from 'projects/resolver/src/app/module/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'auth',
  template: `
    <div>
        <label for="uname">
            Email:
            <input [(ngModel)]="uname" id="uname" type="text">
        </label>
        <div>
            <button [routerLink]="['/users', {outlets: {auth: null}}]">Cancel</button>
            <button (click)="authorize()">Authorize</button>
        </div>
    </div>
  `,
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  private authService = inject(AuthService);
  protected uname: string = '';
  private router = inject(Router);
  
  authorize(): void {
    const isAdmin = this.authService.authorize(this.uname);
    if (isAdmin) {
      this.router.navigate(['/users', {outlets: {auth: null}}])
    }
  }
}
