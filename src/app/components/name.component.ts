import {Component, Input} from "@angular/core";

@Component({
  selector: 'm-name',
  template: `
    <ng-container [ngTemplateOutlet]="type === 'name' ? name:surname"></ng-container><br>
    <ng-template #name let-name="name">
        <span>{{name}}</span>
    </ng-template>
    <ng-template #surname let-name="name" let-surname="surname">
        <span>{{name}}</span>
    </ng-template>
  `
})
export class NameComponent {
  @Input() type: 'name' | 'fullName' = 'name';

  protected fname = {
    $implicit: 'Luke',
    surname: 'Skywalker'
  };
  protected full_name = {
    $implicit: 'Luke',
    surname: 'Skywalker',
  };
}
