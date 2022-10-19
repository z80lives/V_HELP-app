import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../core/services/authentication-service.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss'],
})
export class AdminMenuComponent implements OnInit {
  goBack = (): String => {
    return '/';
  };
  goToEdit = (): String => {
    return '/AdminDetailsComponent';
  };
  schoolName = '';
  schoolID = '';

  constructor(private auth: AuthenticationServiceService) {}

  ngOnInit(): void {
    console.log(this.auth.getCurrentUser().schoolName);

    this.schoolName = this.auth.getCurrentUser().schoolName;
    this.schoolID = this.auth.getCurrentUser().schoolID;
  }
}
