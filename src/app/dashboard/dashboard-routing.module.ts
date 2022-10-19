import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardViewComponent} from "./dashboard-view/dashboard-view.component";
import {HomeComponent} from "./components/home-component/home.component";
import {PageNotFoundComponent} from "../shared/components/page-not-found/page-not-found.component";
import {AdministratorMenuComponent} from "../administrator-menu/administrator-menu.component";
import {ManageSchoolComponent} from "../manage-school/manage-school.component";
import {AddAdminComponent} from "../add-admin/add-admin.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminDetailsComponent} from "../admin-details/admin-details.component";
import {RequestsModule} from "../requests/requests.module";

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'root',
        component: AdministratorMenuComponent,
      },
      {
        path: 'school/add',
        component: ManageSchoolComponent
      },
      {
        path: 'admin/add',
        component: AddAdminComponent
      },
      {
        path: 'schoolAdmin',
        component: AdminMenuComponent
      },
      {
        path: 'schoolAdmin/edit',
        component: AdminDetailsComponent
      },
      {
        path: 'requests',
        loadChildren: () => RequestsModule
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
