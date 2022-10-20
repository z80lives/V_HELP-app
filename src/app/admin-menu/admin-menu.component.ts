import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../core/services/authentication-service.service';
import { NewSchoolService } from '../core/services/new-school.service';
import {AuthService} from "../auth/guards/auth.service";
import {UserDataService} from "../core/services/user-data.service";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss'],
})
export class AdminMenuComponent implements OnInit {
  goBack = (): String => {
    // return '/';
    return '/dashboard';
  };
  goToEdit = (): String => {
    // return '/AdminDetailsComponent';
    return '/dashboard/schoolAdmin/edit';
  };
  schoolName = '';
  schoolId = '';

  constructor(
    // private auth: AuthenticationServiceService,
    private auth : AuthService,
    private user : UserDataService,
    private schools: NewSchoolService
  ) {}

  async ngOnInit() {
    // console.log(this.auth.getCurrentUser().schoolName);
    // const adminID = this.auth.currentUser.value?.id;
    const adminUser = await this.user.fetchUser().toPromise();
    console.log("Admin id", adminUser?._id);
    if(adminUser?._id){
      this.schools.
      fetchCurrentUserSchool(adminUser._id).subscribe((school) => {
        console.debug(school);
        this.schoolName = school.schoolName  ?? '';
          this.schoolId = school.schoolId ?? '';
      })
    }

  }
}
