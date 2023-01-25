import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>
  @Input() color: string = 'red'
  @Input() mensaje: string = 'Debe ingresar este campo'

  constructor(
    private el: ElementRef<HTMLElement>
  ) {

    this.htmlElement = el
  }


  ngOnInit(): void {
    console.log('NgOnInit en la directiva')
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
