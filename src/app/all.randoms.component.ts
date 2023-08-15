import {Component, Inject, InjectionToken} from '@angular/core';
import {RandomService} from "./random.service";
import {RandomService2} from "./random.service2";
export const RANDOM_SERVICES = new InjectionToken('Random.Services');

@Component({
  selector: 'randoms',
  template: ` All randoms:
    <p *ngFor="let s of randomServices">
    {{s.random}}
    </p>
  `,
  providers: [
    { provide: RANDOM_SERVICES, useClass: RandomService, multi: true},
    { provide: RANDOM_SERVICES, useClass: RandomService2, multi: true},
  ]
})
export class AllRandomsComponent {
  constructor(@Inject(RANDOM_SERVICES)
              public randomServices: RandomService[]) {
  }
}
