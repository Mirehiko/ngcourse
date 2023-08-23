import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { AuthService } from '../auth.service';
import {Store} from "@ngrx/store";
import {AuthGroup} from "../store";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  aSub: Subscription;

  private store = inject(Store);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  async submit(): Promise<void> {
    this.form.disable();
    if ( !this.form.invalid ) {
      const user = this.form.value;

      this.store.dispatch(AuthGroup.login(user));
      // this.authService.login(user.email, user.password).pipe(take(1)).subscribe(() => {
      //   this.form.enable();
      //   this.router.navigate(['/main']);
      // });
    }
    else {
      this.form.enable();
    }
  }

  public onClick(): void {
    // @todo: restore pass form
  }
}
