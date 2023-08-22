import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'projects/resolver/src/app/auth/auth.service';
import { UserInterface } from 'projects/resolver/src/app/main/module/interfaces/user.interface';
import { UserService } from 'projects/resolver/src/app/main/module/services/user.service';


@Component({
  selector: 'user-details',
  template: `
      <div><b>Name:</b> {{user?.first_name}} {{user?.last_name}}</div>
      <div><b>Email:</b> {{user?.email}}</div>
      <ng-container *ngIf="isAuth">
        <div><b>Gender:</b> {{user?.gender}}</div>
        <div><b>IP:</b> {{user?.ip_address}}</div>
      </ng-container>

  `
})
export class UserDetailsComponent implements OnDestroy {
  protected user?: UserInterface;
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private sub$: Subscription = new Subscription();
  
  constructor() {
    this.sub$.add(
      this.route.paramMap.subscribe(params => {
        this.user = this.userService.getUserInfo(+params.get('id')!);
      })
    );
  }
  
  get isAuth(): boolean {
    return this.authService.isAuthorized;
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
