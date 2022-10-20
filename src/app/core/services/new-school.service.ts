import { LogInDataServiceService } from './log-in-data-service.service';
import { Injectable } from '@angular/core';
import {of, map, switchMap} from 'rxjs';
import {SchoolControllerService} from "../../tools/tools/api/services/school-controller.service";
import {School} from "../../tools/tools/api/models/school";
import {NewSchool} from "../../tools/tools/api/models/new-school";
import {SchoolAdminControllerService} from "../../tools/tools/api/services/school-admin-controller.service";
import {AuthService} from "../../auth/guards/auth.service";
import {
  SchoolAdminSchoolControllerService
} from "../../tools/tools/api/services/school-admin-school-controller.service";
import {UserDataService} from "./user-data.service";
import {SchoolAdmin} from "../../tools/tools/api/models/school-admin";

// export interface SchoolModel {
//   schoolId: string;
//   schoolName: string;
// }

@Injectable({
  providedIn: 'root',
})
export class NewSchoolService {
  // Schools: SchoolModel[] = [
  //   // { schoolId: 'S1', schoolName: 'school1' },
  //   // { schoolId: 'S2', schoolName: 'school2' },
  //   // { schoolId: 'S3', schoolName: 'school3' },
  // ];
  constructor(
    // private readonly _adminService: LogInDataServiceService,
    private readonly _userService : UserDataService,
    private readonly _schoolService : SchoolControllerService,
    private readonly _schoolAdminService : SchoolAdminControllerService,
    private readonly _schoolAdminToSchool : SchoolAdminSchoolControllerService,
  ) {}

  create(data: NewSchool) {
    return this._schoolService.create({
      body: data
    })
    // data.schoolId = 'S' + this.Schools.length;
    // this.Schools.push(data as SchoolModel);
    // return of(data);
  }

  fetchSchoolByUsername(username: string) {

    // const user = this._adminService.findByUsername(username);
    // return of(user && this.Schools.find((e) => e.schoolId === user.schoolId));
  }

  // findUsersBySchoolId(schoolId: string) {
  //   return this._adminService
  //     .fetch()
  //     .pipe(map((users) => users.filter((user) => user.schoolId === schoolId)));
  // }


  fetch() {
    return this._schoolService.find();
  }

  findSchoolByAdminID(schoolId : string) {
    return this._schoolService.findById({id: schoolId});
  }

  fetchSchoolAdmins(){
    return this._schoolAdminService.find();
  }

  fetchCurrentUserSchool(userId : string){
    return this._schoolAdminToSchool.getSchool({id: userId})
      .pipe(map((el: any) => (el as School)))
      // .pipe(map((el) =>  el[0]));
    // const fetchUserObs = this._userService.fetchUser();
    // return fetchUserObs.pipe(switchMap( (user) => {
    //   const schoolId = (user as SchoolAdmin).schoolId;
    //   if(user && schoolId){
    //     return this._schoolService.findById({id: schoolId})
    //   }
    //   return of(undefined)
    // }))
  }
}
