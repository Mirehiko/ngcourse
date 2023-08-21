import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { UserService } from 'projects/resolver/src/app/module/services/user.service';


@Injectable()
export class AuthService {
  public isAuthorized: boolean = false;
  public activeUser: UserInterface | null = null;
  private userService = inject(UserService);

  
  authorize(name: string): boolean {
    const user = this.userService.users.find(u => u.email === name);
    if (user) {
      this.isAuthorized = true;
      this.activeUser = user;
    }
    return this.isAuthorized;
  }
  
  logout(): void {
    this.activeUser = null;
    this.isAuthorized = false;
  }
}
