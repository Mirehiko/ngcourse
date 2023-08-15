import {Component, Input} from '@angular/core';

@Component({
  selector: 'greet-component',
  template: `Hello from <ng-content></ng-content>
        <br>This is second name: <ng-content></ng-content>`,
})
export class ContentComponent {}

@Component({
  selector: 'component-outlet3',
  entryComponents: [ContentComponent],
  template: `Greeting:
    <ng-container
      *ngComponentOutlet="Component; content: myContent">
    </ng-container>
    <br>
    <span #el1>Sveta</span>
    <span #el2>Diana</span>
  `
})
export class ComponentOutlet3Component {
  Component = ContentComponent;
  myContent: Array<Text>[] = [];

  @Input() set name(name: string) {
    this.myContent = [
      [document.createTextNode(name)],
      [document.createTextNode('Ivan')]
    ];
  }
}
