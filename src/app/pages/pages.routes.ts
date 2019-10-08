import { RouterModule, Routes } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' }  },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }  },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }  },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }  },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Theme' }  },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    }
];

// Rutas dentro de otras rutas.-
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
