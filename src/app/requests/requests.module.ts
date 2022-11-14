import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import {MatCardModule} from "@angular/material/card";
import {TableModule} from "primeng/table";
import {SharedModule} from "../shared/shared.module";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
// import { SubmitRequestComponent } from './components/submit-request/submit-request.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    ViewRequestsComponent,
    // SubmitRequestComponent
  ],
  exports: [
    ViewRequestsComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule,
    MatButtonModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    DialogModule,
    // FormlyModule.forRoot(),
    // FormlyMaterialModule,
  ]
})
export class RequestsModule { }
