import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../core/services/authentication-service.service';
import { NewSchoolService } from '../core/services/new-school.service';

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

  constructor(
    private auth: AuthenticationServiceService,
    private schools: NewSchoolService
  ) {}

  ngOnInit(): void {
    console.log(this.auth.getCurrentUser().schoolName);
    const school = this.schools.findSchoolBySchoolID(
      this.auth.getCurrentUser().schoolID
    );
    this.schoolName = school ? school.schoolName : '';
    this.schoolID = school ? school.schoolID : '';
  }
}
