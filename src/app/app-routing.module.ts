import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Body
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
];

// Rutas Principal.-
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
