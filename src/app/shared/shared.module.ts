import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from 'primeng/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule,
    ReactiveFormsModule,
    MatCardModule,
    TableModule,
    MatInputModule,
    MatFormFieldModule,
    FormlyModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    MatCardModule,
    TableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
