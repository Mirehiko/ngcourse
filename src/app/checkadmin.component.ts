import {Component, EmbeddedViewRef, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'checkadmin',
  template: `
      <ng-template #admin>You are admin</ng-template>
      <ng-template #notAdmin>You are NOT admin</ng-template>
   `
})
export class CheckAdminComponent {
  @ViewChild('admin', {static: true})
  adminTemplate?: TemplateRef<any>;
  @ViewChild('notAdmin', {static: true})
  notAdminTemplate?: TemplateRef<any>;

  private view?: EmbeddedViewRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  @Input('admin') set isAdmin(value: boolean) {
    if (value && this.adminTemplate) {
      this.viewContainerRef.createEmbeddedView(this.adminTemplate);
    } else if (this.notAdminTemplate) {
      this.viewContainerRef.createEmbeddedView(this.notAdminTemplate);
    }
  }
}
