import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../core/services/authentication-service.service';
import { LogInDataServiceService } from '../core/services/log-in-data-service.service';

@Component({
  selector: 'app-administrator-menu',
  templateUrl: './administrator-menu.component.html',
  styleUrls: ['./administrator-menu.component.scss'],
})
export class AdministratorMenuComponent implements OnInit {
  constructor() {}

  goToSchool = (): String => {
    return '/AdministratorComponent_component';
  };
  goToNewAdmin = (): String => {
    return '/AddAdminComponent';
  };
  goBack = (): String => {
    return '/';
  };
  goToAddSchool = (): String => {
    // console.log(this.auth.getCurrentUser());
    return '/AdministratorMenuComponent';
  };

  // console.log(this.auth.getcurrentUser());

  ngOnInit(): void {}
}
