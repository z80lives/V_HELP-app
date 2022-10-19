import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule,
    ReactiveFormsModule,
    MatCardModule,
    TableModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    MatCardModule,
    TableModule
  ]
})
export class SharedModule { }
