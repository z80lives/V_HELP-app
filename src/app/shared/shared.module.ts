import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule
  ]
})
export class SharedModule { }
