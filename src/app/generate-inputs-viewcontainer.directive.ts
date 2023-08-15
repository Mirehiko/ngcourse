import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[generateInputsViewcontainer]'
})
export class GenerateInputsViewcontainerDirective {

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef
  ) { }

  @Input('content') content?: string;

  @Input('generateInputsViewcontainer') set generateInputs(repetitions: number) {
    if( repetitions <= 0 || !this.content ) {
      return;
    }

    const content = this.templateRef;
    for(let i = 0; i < repetitions; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
