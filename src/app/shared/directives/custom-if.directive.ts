import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {


  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      this.viewContainer.createEmbeddedView(this.templeRef)
    } else {
      this.viewContainer.clear()
    }
  }

  constructor(
    private templeRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) { }

}
