import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'template-component',
  template: `
    <ng-container *ngTemplateOutlet="greeting"></ng-container><br>
    <ng-container *ngTemplateOutlet="eng; context: engContext"></ng-container><br>
    <ng-container *ngTemplateOutlet="rus; context: rusContext"></ng-container>

    <ng-template #greeting><span>Hello!</span></ng-template><br>

    <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
    <ng-template #rus let-name let-person="surname">
      <span>Hello, {{name}} {{person}}!</span>
    </ng-template>

    <h3>Flexible template with context:</h3>
    Template: <input [(ngModel)]="template"><br>
    <ng-container [ngTemplateOutlet]="template==='greet'?greet:bye"
                  [ngTemplateOutletContext]="engContext" >

    </ng-container><br>
    <ng-template #greet let-name><span>Hello, {{name}}</span></ng-template>
    <ng-template #bye let-name><span>Good Bye, {{name}}</span></ng-template>
   `
})
export class TemplateOutletComponent {
  template = "greet"
  engContext = {$implicit: 'John', surname: 'Johnson'};
  rusContext = {$implicit: 'Ivan', surname: 'Ivanov'};
}
