import { Injectable, Inject } from '@angular/core';

// Se elimino DOCUMENT de platform-browser
// import { DOCUMENT } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(
    // Tenemos acceso al todo al DOM : _document
    // Es lo mismo que hacer document
    @Inject(DOCUMENT) private _document
  ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    // console.log('Guardar en LocalStorage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      // console.log('Cargar de LocalStorage');

      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      this.aplicarTema( this.ajustes.tema );
    } else {
      // console.log('Defecto');
      this.aplicarTema( this.ajustes.tema );
    }
  }


  aplicarTema( tema: string ) {
    let url = `assets/css/colors/${ tema }.css`;

    // Cambia el href de index.html
    this._document.getElementById('theme').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
