import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {UntypedFormGroup} from "@angular/forms";
import {CoreDataService} from "../../core/services/core-data.service";
import {AuthService} from "../guards/auth.service";
import {UserDataService} from "../../core/services/user-data.service";

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
        label: "Username",
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
  loginForm = new UntypedFormGroup({});
  options : FormlyFormOptions = {};
  model = {
    username: 'volunteer1',
    password: '123456789'
  }

  constructor(
    private readonly _core: CoreDataService,
    private readonly _user : UserDataService
  ) { }

  ngOnInit(): void {
  }

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    const formVals = this.loginForm.value;
    this._user.login(formVals).subscribe( (val) => {
      console.log("Loggin in...", val);
      this._core.fetchRouter().navigate(['', 'dashboard']);
    });
  }
}
