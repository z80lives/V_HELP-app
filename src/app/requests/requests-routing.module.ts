import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewRequestsComponent} from "./components/view-requests/view-requests.component";
import { SubmitRequestComponent } from './components/submit-request/submit-request.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {path: 'view', component: ViewRequestsComponent},
  {path: 'submit', component: SubmitRequestComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
