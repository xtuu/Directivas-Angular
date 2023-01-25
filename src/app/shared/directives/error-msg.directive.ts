import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red'
  private _mensaje: string = 'Este campo es requerido'



  htmlElement: ElementRef<HTMLElement>

  //cambio de color con setters
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor
    this._color = valor
  }

  //cambio de mensaje con setters

  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor
    this._mensaje = valor
  }


  constructor(
    private el: ElementRef<HTMLElement>
  ) {

    this.htmlElement = el
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue
    //   this.htmlElement.nativeElement.style.color = color

    // }

  }


  ngOnInit(): void {
    // this.setColor()
    // this.setMensaje()
    this.setEstilo()
  }

  setEstilo(): void {
    // this.htmlElement.nativeElement.className = 'mt-2 text-sm'
    this.htmlElement.nativeElement.classList.add('mt-2')
    this.htmlElement.nativeElement.classList.add('text-sm')

  }



  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje
  }

}
