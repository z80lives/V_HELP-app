import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministratorComponent } from './Administrator/Administrator.component';
import { AdministratorMenuComponent } from './administrator-menu/administrator-menu.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, LogInComponent, AdministratorComponent, AdministratorMenuComponent, AddAdminComponent, AdminMenuComponent, AdminDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
