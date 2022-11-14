import { Component, OnInit } from '@angular/core';
import { User } from '../../../tools/tools/api/models/user';
import { UserDataService } from '../../../core/services/user-data.service';
import { NewSchoolService } from 'src/app/core/services/new-school.service';
import {
  SchoolAdminWithRelations,
  VolunteerWithRelations,
} from 'src/app/tools/tools/api/models';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUser!: User;
  constructor(
    private readonly _userService: UserDataService,
    private schools: NewSchoolService
  ) {}
  schoolName = '';
  Position = '';
  schoolId = '';
  async ngOnInit() {
    this._userService.fetchCurrentUser().subscribe((user) => {
      console.log('User was', user);
      if (user) {
        console.log('User fetched', user);
        this.currentUser = user;
      }
    });
    const adminUser: any = await this._userService.fetchUser().toPromise();
    console.log('Admin id', adminUser?._id);
    if (adminUser?._id) {
      this.schools.fetchCurrentUserSchool(adminUser._id).subscribe((school) => {
        console.debug(school);
        console.log(adminUser);
        this.schoolName = school.schoolName ?? '';
        this.schoolId = school.schoolId ?? '';
        this.Position = adminUser.position ?? '';
        this.schools.currentSchoolId.next(this.schoolId)
      });
    }
  }
}
