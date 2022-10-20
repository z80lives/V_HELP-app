import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { UserDataService } from '../core/services/user-data.service';
import { AuthControllerService } from '../tools/tools/api/services';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, AuthViewComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormlyModule,
    MatProgressBarModule,
  ],
  exports: [RegisterFormComponent],
  providers: [AuthControllerService],
})
export class AuthModule {}
