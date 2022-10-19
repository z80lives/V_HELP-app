import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LogInComponent} from './log-in/log-in.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdministratorComponent} from './Administrator/Administrator.component';
import {AdministratorMenuComponent} from './administrator-menu/administrator-menu.component';
import {AddAdminComponent} from './add-admin/add-admin.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {AdminDetailsComponent} from './admin-details/admin-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyMatDatepickerModule} from "@ngx-formly/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {SharedModule} from "./shared/shared.module";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";

@NgModule({
  declarations: [AppComponent, LogInComponent, AdministratorComponent, AdministratorMenuComponent, AddAdminComponent, AdminMenuComponent, AdminDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
    SharedModule,
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
