import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { UserInterface } from './interfaces/user.interface';


@Component({
  selector: 'user-details',
  template: `
      <div><b>Name:</b> {{user?.first_name}} {{user?.last_name}}</div>
      <div><b>Email:</b> {{user?.email}}</div>
      <div><b>Gender:</b> {{user?.gender}}</div>
      <div><b>IP:</b> {{user?.ip_address}}</div>
  `
})
export class UserDetailsComponent implements OnDestroy {
  protected user?: UserInterface;
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private sub$: Subscription = new Subscription();
  
  constructor() {
    this.sub$.add(
      this.route.paramMap.subscribe(params => {
        this.user = this.userService.getUserInfo(+params.get('id')!);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
