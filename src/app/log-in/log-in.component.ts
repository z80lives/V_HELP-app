import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInDataServiceService } from '../core/services/log-in-data-service.service';

interface LogInModel {
  username: string;
  email: string;
  password: string;
}
interface FormModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private readonly _adminData: LogInDataServiceService
  ) {}

  ngOnInit(): void {
    this._adminData.fetch();
  }
  Submit = (): String => {
    return '/AdminMenuComponent';
  };
  title = 'HELP_V Log In';

  loginForm = this._fb.group({
    email: '',
    password: '',
  });

  onSubmit() {
    const values: FormModel = this.loginForm.value;
    if (values.email != '' || values.password != '') {
      if (values.email == 'Admin@gmail.com' && values.password == 'admin') {
        this.router.navigate(['/AdministratorMenuComponent']);
      } else {
        this._adminData.fetch().forEach((admins) => {
          let currentUser: LogInModel | undefined = admins.find(
            (admin) =>
              admin.email == values.email && admin.password == values.password
          );
          if (currentUser) {
            this.router.navigate(['/AdministratorComponent_component']);
          } else {
            alert('administrator not found');
          }
        });
      }
    } else {
      alert('fields cannot be empty');
    }
  }
}
