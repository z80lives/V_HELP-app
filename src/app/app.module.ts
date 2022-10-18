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
import { ReactiveFormsModule } from '@angular/forms';
import { LogInDataServiceService } from './core/services/log-in-data-service.service';
import { AuthenticationServiceService } from './core/services/authentication-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AdministratorComponent,
    AdministratorMenuComponent,
    AddAdminComponent,
    AdminMenuComponent,
    AdminDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [LogInDataServiceService, AuthenticationServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
