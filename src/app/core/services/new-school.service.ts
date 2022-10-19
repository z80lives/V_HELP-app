import { LogInDataServiceService } from './log-in-data-service.service';
import { Injectable } from '@angular/core';
import { of, map } from 'rxjs';
import {SchoolControllerService} from "../../tools/tools/api/services/school-controller.service";
import {School} from "../../tools/tools/api/models/school";
import {NewSchool} from "../../tools/tools/api/models/new-school";

// export interface SchoolModel {
//   schoolID: string;
//   schoolName: string;
// }

@Injectable({
  providedIn: 'root',
})
export class NewSchoolService {
  // Schools: SchoolModel[] = [
  //   // { schoolID: 'S1', schoolName: 'school1' },
  //   // { schoolID: 'S2', schoolName: 'school2' },
  //   // { schoolID: 'S3', schoolName: 'school3' },
  // ];
  constructor(
    private readonly _adminService: LogInDataServiceService,
    private readonly _schoolService : SchoolControllerService
  ) {}

  create(data: NewSchool) {
    return this._schoolService.create({
      body: data
    })
    // data.schoolID = 'S' + this.Schools.length;
    // this.Schools.push(data as SchoolModel);
    // return of(data);
  }

  fetchSchoolByUsername(username: string) {

    // const user = this._adminService.findByUsername(username);
    // return of(user && this.Schools.find((e) => e.schoolID === user.schoolID));
  }

  // findUsersBySchoolId(schoolId: string) {
  //   return this._adminService
  //     .fetch()
  //     .pipe(map((users) => users.filter((user) => user.schoolID === schoolId)));
  // }

  fetch() {
    return this._schoolService.find();
  }
}
