import {
  Component,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AlertComponent} from './alert.component';

@Component({
  selector: 'app-dynamic',
  template: `
    <template #alertContainer></template>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  `,
})
export class DynamicComponent implements OnDestroy {
  @ViewChild("alertContainer", { read: ViewContainerRef, static: true })
  container?: ViewContainerRef;

  componentRef?: ComponentRef<AlertComponent>;

  createComponent(type: 'success'|'danger') {
    if (!this.container) return;
    this.container.clear();
    this.componentRef = this.container.createComponent(AlertComponent);
    if (this.componentRef) {
      this.componentRef.instance.type = type;
    }
  }

  ngOnDestroy() {
    this.componentRef?.destroy();
  }
}
