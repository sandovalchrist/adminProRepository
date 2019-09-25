import { NgModule } from '@angular/core';

// Sub-Routes
import { PAGES_ROUTES } from './pages.routes';

// Module (Breadcrumbs / Header / Sidebar / Nopagefound)
import { SharedModule } from '../shared/shared.module';

// NgModel
import { FormsModule } from '@angular/forms';

// Rutas Hijas
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// Componente personalizado
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
declarations: [
        PagesComponent, // Contiene HTML, Menús - RouterOutlet a Rutas HIjas
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent
    ],
    imports: [
        PAGES_ROUTES,  // Sub Rutas
        SharedModule, // Importo los Menus y Sidebars
        FormsModule // Permite utilizar [(ngModule)]
    ],
    exports: [
        // No hacen falta.-
        /*
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
        */
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }