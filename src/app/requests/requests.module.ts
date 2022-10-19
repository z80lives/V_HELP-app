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


@NgModule({
  declarations: [
    ViewRequestsComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    MenuModule
  ]
})
export class RequestsModule { }
