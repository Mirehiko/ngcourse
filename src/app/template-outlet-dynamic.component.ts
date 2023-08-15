import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'template-component-dynamic',
  template: `
    <ng-container [ngTemplateOutlet]="lang?lang:eng"></ng-container><br>
    <ng-template #eng>English text</ng-template>
    <ng-template #rus>Russian text</ng-template>
   `
})
export class TemplateOutletComponentDynamic {
  @ViewChild('eng')
  eng?: TemplateRef<any>;
  @ViewChild('rus')
  rus?: TemplateRef<any>;

  language = 'rus';

  get lang() {
    if (this.language == 'rus') return this.rus;
    return null;
  }
}
