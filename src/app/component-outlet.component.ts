import {Component, Input, OnChanges, Type} from '@angular/core';

@Component({selector: 'hello', template: 'Hello World!'})
export class HelloComponent {
}
@Component({selector: 'hello', template: 'Bye World! <ng-content></ng-content>'})
export class ByeComponent {
}

@Component({
  selector: 'component-outlet',
  template: `Greeting:
    <ng-container *ngComponentOutlet="GreetWorld">
    </ng-container>`
})
export class ComponentOutletComponent {
  GreetWorld: Type<Component>|null = null;

  @Input() set type(type: string) {
    switch (type) {
      case 'bye': this.GreetWorld = ByeComponent; break;
      case 'hello': this.GreetWorld = HelloComponent; break;
    }
  }
}
