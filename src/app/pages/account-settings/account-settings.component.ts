import { Component, OnInit } from '@angular/core';

// Services
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private settingService: SettingsService
  ) {
  }

  ngOnInit() {
    this.colocarCheck();
  }

  // link: es el "a" completo
  cambiarColor(tema: string, link: any) {
    this.settingService.aplicarTema( tema );

    this.aplicarCheck(link);
  }

  // Al selecccionar un item ...
  aplicarCheck(link: any) {
    // Tanto el "link" como el "selector, array" es todo el elemento html
    // console.log(link);

    let selectores: any = document.getElementsByClassName('selector');

    for (const iterator of selectores) {
      // console.log(iterator);
      iterator.classList.remove('working');
    }

    link.classList.add('working');
  }

  // Al refrescar ...
  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.settingService.ajustes.tema;

    for (const iterator of selectores) {
      if ( iterator.getAttribute('data-theme') ===  tema) {
        iterator.classList.add('working');
      }
    }
  }
}
