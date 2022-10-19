import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginFormCfg : FormlyFieldConfig[] =  [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: "Email/Username",
        placeholder: "Username"
      }
    },
    {
      key: "password",
      type: 'input',
      templateOptions: {
        type: 'password'
      }
    }
  ];
  loginForm = new FormGroup({});
  options : FormlyFormOptions = {};

  constructor() { }

  ngOnInit(): void {
  }

}
