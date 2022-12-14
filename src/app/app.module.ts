import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { SharedModule } from './shared/shared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { LogInDataServiceService } from './core/services/log-in-data-service.service';
import { SchoolAdminListComponent } from './school-admin-list/school-admin-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SubmitRequestComponent } from './requests/components/submit-request/submit-request.component';
// import { VolunteerMenuComponent } from './volunteer-menu/volunteer-menu.component';
// import {AccordionModule} from "primeng/accordion";
// import { ManageRequestsComponent } from './manage-requests/manage-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    // AdministratorMenuComponent,
    // AdminMenuComponent,
    // AdminDetailsComponent,
    SchoolAdminListComponent,
    // VolunteerMenuComponent,

    // ManageRequestsComponent,
  ],
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
    MatProgressBarModule,
    // AccordionModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },

    //refactor to Admin MOdule
    LogInDataServiceService,
  ],
  bootstrap: [AppComponent],
    exports: [
        // VolunteerMenuComponent,
        // AdministratorMenuComponent
    ],
})
export class AppModule {}

