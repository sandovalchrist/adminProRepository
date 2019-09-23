import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app-routing.module';

// Modules
import { PagesModule } from './pages/pages.module';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppComponent, // RouterOutlet Principal
  ],
  imports: [
    BrowserModule,
    APP_ROUTES, // Rutas
    PagesModule // Encapsulamiento de DashBoard, Graficas, Progress y sub-routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
