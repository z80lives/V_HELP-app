import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {Volunteer} from "../../tools/tools/api/models/volunteer";
import {UntypedFormGroup} from "@angular/forms";
import {UserDataService} from "../../core/services/user-data.service";
import {httpErrorHandler} from "../../core/utils/error.helper";
import {CoreDataService} from "../../core/services/core-data.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  loading = false;

  fieldCfg : FormlyFieldConfig[] = [
    {
      key: "username",
      type: "input",
      props: {
        label: "Username",
        placeholder: "Enter your username",
        pattern: "^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$",
        required: true
      }
    },
    {
      key: "dateOfBirth",
      type: "datepicker",
      props: {
        label: "Date Of Birth",
        placeholder: 'Select date of birth',
        required: true,
      }
    },
    {
      key: "email",
      type: "input",
      props: {
        label: "Email",
        placeholder: "Enter your email",
        required: true,
        type: 'email',
      }
    },
    {
      key: "fullname",
      type: "input",
      props: {
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true
      }
    },
    {
      key: "occupation",
      type: "input",
      props: {
        label: "Occupation",
        placeholder: "Enter your occupation",
        required: true
      }
    },
    {
      key: "password",
      type: "input",
      props: {
        label: "Password",
        placeholder: "Enter password",
        required: true,
        type: "password"
      }
    },
    {
      key: "phone",
      type: "input",
      props: {
        label: "Phone",
        placeholder: "Enter phone number",
        required: true,
        type: "phone"
      }
    }
  ]
  registerForm = new UntypedFormGroup({});
  options = {};
  model = {
    dateOfBirth: new Date(),
    email: "test@mail.com",
    username: "volunteer1",
    password: "123456789",
    phone: "123456789",
    occupation: "Student",
    fullname: "Ibrahim Shaatha"
  }

  constructor(
    private readonly _userData : UserDataService,
    private readonly _coreData : CoreDataService
  ) { }

  ngOnInit(): void {
  }

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    this.loading = true;
    this._userData.registerVolunteer(
      this.registerForm.value
    ).subscribe( (user) => {
      if(user){
        this._coreData.notifyInfo(
          "Volunteer created",
          `Volunteer ${user.username} was successfully created`
        )
      }
    }).add( () => {
      this.loading = false;
    });
  }

}
