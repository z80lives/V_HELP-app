import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardViewComponent} from "./dashboard-view/dashboard-view.component";
import {HomeComponent} from "./components/home-component/home.component";
import {PageNotFoundComponent} from "../shared/components/page-not-found/page-not-found.component";

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
