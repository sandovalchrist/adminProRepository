import { Component, OnInit } from '@angular/core';

// Declarar la funcion que tenemos en custom.js
// Carga el Menu de dashboard
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
