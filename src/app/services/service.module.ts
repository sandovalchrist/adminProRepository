import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { SettingsService, SidebarService, SharedService } from './service.index'; // Themes

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ SettingsService, SidebarService, SharedService ]
})
export class ServiceModule { }
