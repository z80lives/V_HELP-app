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
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {MatCardModule} from "@angular/material/card";
import {LogInDataServiceService} from "../core/services/log-in-data-service.service";
import {AdministratorMenuComponent} from "../administrator-menu/administrator-menu.component";
import {AdminDetailsComponent} from "../admin-details/admin-details.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";


@NgModule({
  declarations: [
    DashboardViewComponent,
    NavComponent,
    HomeComponent,
    AdministratorMenuComponent,
    AdminMenuComponent
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
    MatCardModule
  ],
  providers: [
    //refactor to SchoolAdmin Module
    // LogInDataServiceService
  ]
})
export class DashboardModule { }
