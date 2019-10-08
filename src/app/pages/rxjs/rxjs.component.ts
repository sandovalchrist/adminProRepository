import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators'; // http://reactivex.io/documentation/operators.html


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  // Para el unsuscribe.
  subscription: Subscription;

  constructor() {
    // El pipe transforma la informacion o hacer un proceso para transformarla.-
    // El pipe permite definir operadores
    // El subscription es para hacer referencia a la subcripcion del observable
    this.subscription = this.regresaObservable()

    // Por el observer error
    // .pipe(
      // Vuelve a ejecutar el observable
      // podemos poner el num de retry, reordar que lo ejecuta 3 veces dado q la primera ejecucion es la normal
      // en la pasada 2 se ira al error del subscribe
      // retry(2)
    // )

    // No importa qu se cambie de pagina, siempre escucha
    // El subscribe posee 3 callback
    .subscribe(
      (numero: number) => { /*console.log('numero', numero);*/ }, // 1. Callback Next
      (error) => { console.error('Descripcion:', error); }, // 2. Callback Error
      () => { console.log('Finalizo el subscribe'); }  // 3. Termino
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    // observer es de tipo subscriber
    return new Observable( (observer: Subscriber<any> ) => {
      let contador: number = 0;

      let intervalo = setInterval( () => {
        contador++;

        const salida = {
          valor : contador
        };

        observer.next( salida );

        /* Lo comento para el que observer sea infinito... tema : unsuscribe
        if(contador === 3) {
          clearInterval( intervalo ); // Pero el observable sigue escuchando, pero...
          observer.complete();
        }*/

        // if(contador === 2) {
          // Al comentar ira a retry y luego segui con el proceso como venia. Sin iniciar contador
          // clearInterval( intervalo );

          // Se supone que el server estaba ocupado o se cayo un proceso...
          // observer.error('Error');
        // }

      }, 1000);

    // }); // Si lo hiciera sin el Pipe (rxjs) Map

    // Porque hacemos este Pipe aca; porque si tenemos el subcriber en varios lugaes hay q replicar codigo
   }) // Con Pipe Map
   .pipe(
     // Aca puedo poner todos los operators que quiera
     map(resp => {
        return resp.valor;
     }),
     filter((valor, index) => { // Esto tiene que retornar si o si un booleano
        // valor: observer.next
        // index es el numero de veces que paso por el operador.-
        // console.log('valor/index: ', valor, index);

        if ( (valor % 2 ) === 1 ) {
          return true;
        } else {
          return false;
        }

        // return true;
     })
   );

  } // Fin Fn
} // Fin Clase
