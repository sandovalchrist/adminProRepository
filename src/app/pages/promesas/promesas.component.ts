import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    // Se puede hacer asi
    /*
    promesa.then(
      () => console.log('Salio todo OK'),
      () => console.log('Error')
    );*/

    this.contarTres().then(
      (mensaje) => console.log('Salio todo OK', mensaje)
    ).catch(
      (error) => console.error('Error: ', error)
    );

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador: number = 0;

      // Ciclo de tiempo, cada x min dispara esta funcion;
      let intervalo = setInterval( () => {
        contador++;
        console.log('contador', contador);

        if(contador === 3) {
          // A los 3 seg deberia llamar a resolve
          resolve(true);
          // reject(false);

          clearInterval(intervalo); // Detengo el interval
        }
      }, 1000 ); // 1 seg.-
    });
  }
}
