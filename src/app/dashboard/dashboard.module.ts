import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home-component/home.component';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MatCardModule } from '@angular/material/card';
import { LogInDataServiceService } from '../core/services/log-in-data-service.service';
import { AdministratorMenuComponent } from '../administrator-menu/administrator-menu.component';
import { AdminDetailsComponent } from '../admin-details/admin-details.component';
import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { AccordionModule } from 'primeng/accordion';
import { ManageSchoolComponent } from '../manage-school/manage-school.component';
import { SharedModule } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { FormlyModule } from '@ngx-formly/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatProgressBar,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import { ManageRequestsComponent } from '../manage-requests/manage-requests.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SubmitRequestComponent } from '../requests/components/submit-request/submit-request.component';
import {AppModule} from "../app.module";
import {VolunteerMenuComponent} from "../volunteer-menu/volunteer-menu.component";
import {RequestsModule} from "../requests/requests.module";
import { ReviewOfferFormComponent } from './components/review-offer-form/review-offer-form.component';

@NgModule({
  declarations: [
    DashboardViewComponent,
    NavComponent,
    HomeComponent,
    AdministratorMenuComponent,
    AdminMenuComponent,
    ManageSchoolComponent,
    AddAdminComponent,
    AdminDetailsComponent,
    ManageRequestsComponent,
    SubmitRequestComponent,
    VolunteerMenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BadgeModule,
    AvatarModule,
    MenuModule,
    MatCardModule,
    AccordionModule,
    SharedModule,
    ReactiveFormsModule,
    FormlyModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    TableModule,
    ToolbarModule,
    RequestsModule,
    // AppModule,
  ],
  providers: [
    //refactor to SchoolAdmin Module
    // LogInDataServiceService
  ],
  exports: []
})
export class DashboardModule {}
