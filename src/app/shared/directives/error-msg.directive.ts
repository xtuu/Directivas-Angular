import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {


  htmlElement: ElementRef<HTMLElement>
  @Input() color: string = 'red'
  @Input() mensaje: string = 'Debe ingresar este campo'


  constructor(
    private el: ElementRef<HTMLElement>
  ) {

    this.htmlElement = el
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

    if (changes['mensaje']) {
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje
    }

    if (changes['color']) {
      const color = changes['color'].currentValue
      this.htmlElement.nativeElement.style.color = color

    }

  }


  ngOnInit(): void {
    this.setColor()
    this.setMensaje()
  }


  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color
    this.htmlElement.nativeElement.className = 'mt-2 text-sm'
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje
  }

}
