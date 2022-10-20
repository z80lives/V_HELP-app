import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewRequestsComponent} from "./components/view-requests/view-requests.component";

const routes: Routes = [
  {path: 'view', component: ViewRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
