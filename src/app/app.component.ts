import { Component } from '@angular/core';

// Service
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminPro';

  // Carga del theme
  constructor(private settingsService: SettingsService) {

  }
}
