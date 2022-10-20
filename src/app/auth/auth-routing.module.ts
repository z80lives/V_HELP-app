import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthViewComponent} from "./auth-view/auth-view.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {LogInComponent} from "../log-in/log-in.component";

const routes: Routes = [
  {
    path: '',
    component: AuthViewComponent,
    children:[
      {path: 'login', component: LoginFormComponent},
      {path: 'register', component: RegisterFormComponent},
      // {path: 'register/admin', component: LogInComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
