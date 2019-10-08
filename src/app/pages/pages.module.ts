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
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Componente personalizado (Progress / Graficas1)
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Chats de Graficas1
import { ChartsModule } from 'ng2-charts';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
declarations: [
        PagesComponent, // Contiene HTML, Menús - RouterOutlet a Rutas HIjas
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        AccountSettingsComponent,

        // Componente Personalizado
        IncrementadorComponent,
        GraficoDonaComponent,
        PromesasComponent,
        RxjsComponent
    ],
    imports: [
        PAGES_ROUTES,  // Sub Rutas
        SharedModule, // Importo los Menus y Sidebars
        FormsModule, // Permite utilizar [(ngModule)]
        ChartsModule
    ],
    exports: [
        // No hacen falta.-
        /*
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
        */
    ],
    providers: [ ],
    bootstrap: []
})
export class PagesModule { }