import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // Alias: 'nombre', es el nombre que tiene el componente padre
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  // Es el Id (#idElemento) de un elemento HTML
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
    // Se vera el valor por defecto
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  ngOnInit() {
    // Tomara el valor por referencia
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  cambiarValor(valor){
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();

  }


  onChanges( newValue: number ){
    // console.log('newValue', newValue);

    // Dado que las validaciones estan de este lado y el ctrl nose entera del todo.-
    // let elemenHTML: any = document.getElementsByName('progreso')[0];
    // Lo de la linea de arriba esta en desuso por el ViewChild.-

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.cambioValor.emit( this.progreso );

    // Dado que como es un componente personalizado la posiicon [0] siempre me toma 1 elemento
    // y yo lo tengo repetido.-
    // elemenHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    // console.log('progreso', this.progreso);
  }
}
