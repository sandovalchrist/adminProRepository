import { NgModule } from '@angular/core';

// Para ngFor / ngIf / Pipes
import { CommonModule } from '@angular/common';

// Router para Link por ej. de SidebarComponent
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    imports: [ RouterModule, CommonModule ],
    exports: [
        // Para que lo lea PagesModule
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    bootstrap:    []
})
export class SharedModule { }