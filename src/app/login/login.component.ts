import { Component, OnInit } from '@angular/core';

// Navegacion
import { Router } from '@angular/router';

// Declarar la funcion que tenemos en custom.js
// Carga el Menu de dashboard
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    // console.log('Ingresando ....');

    this._router.navigate(['/dashboard']);
  }
}
