import {Component, Inject, Injectable, InjectionToken, Injector, Input, OnChanges} from '@angular/core';

export const WORLD = new InjectionToken<string>('World');

@Injectable()
export class Greeter {
  greet(text: string) {
    return "Hello, " + text + "!";
  }
}

@Component({
  selector: 'greet-component',
  template: '{{greeter.greet(this.world)}}',
})
export class GreetComponent {
  constructor(public greeter: Greeter,
              @Inject(WORLD) public world: string) {}
}

@Component({
  selector: 'component-outlet2',
  entryComponents: [GreetComponent],
  template: `Greeting:
    <ng-container *ngComponentOutlet="GreetWorld; injector:createInjector()">
    </ng-container>`
})
export class ComponentOutlet2Component {
  GreetWorld = GreetComponent;
  @Input() name = "World";

  constructor(private injector: Injector) {}
  createInjector() {
    return Injector.create({providers: [
          { provide: Greeter, deps: [] },
          { provide: WORLD, useValue: this.name }
        ], parent: this.injector});
  }
}
