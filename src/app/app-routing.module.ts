import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AdministratorComponent } from './Administrator/Administrator.component';
import { AdministratorMenuComponent } from './administrator-menu/administrator-menu.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import {AuthModule} from "./auth/auth.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AuthGuard} from "./auth/guards/auth.guard";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'auth', loadChildren: () => AuthModule},
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
  // { path: '', component: LogInComponent },
  // {
  //   path: 'AdministratorComponent_component',
  //   component: AdministratorComponent,
  // },
  // {
  //   path: 'AdministratorMenuComponent',
  //   component: AdministratorMenuComponent,
  // },
  // {
  //   path: 'AddAdminComponent',
  //   component: AddAdminComponent,
  // },
  // {
  //   path: 'AdminMenuComponent',
  //   component: AdminMenuComponent,
  // },
  // {
  //   path: 'AdminDetailsComponent',
  //   component: AdminDetailsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
