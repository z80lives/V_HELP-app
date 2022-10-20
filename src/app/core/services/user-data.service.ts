import { Injectable } from '@angular/core';
import {AuthControllerService} from "../../tools/tools/api/services/auth-controller.service";
import {AuthService} from "../../auth/guards/auth.service";
import {concat, concatAll, flatMap, forkJoin, map, merge, mergeAll, mergeMap, Observable, of} from "rxjs";
import {User} from "../../tools/tools/api/models/user";
import {SchoolAdmin} from "../../tools/tools/api/models/school-admin";
import {Volunteer} from "../../tools/tools/api/models/volunteer";
import {VolunteerControllerService} from "../../tools/tools/api/services/volunteer-controller.service";
import {SchoolAdminControllerService} from "../../tools/tools/api/services/school-admin-controller.service";
import {VolunteerWithRelations} from "../../tools/tools/api/models/volunteer-with-relations";
import {SchoolAdminWithRelations} from "../../tools/tools/api/models/school-admin-with-relations";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private readonly _authController : AuthControllerService,
    private readonly _localAuth : AuthService,
    private readonly _volunteerController : VolunteerControllerService,
    private readonly _schoolAdminController : SchoolAdminControllerService,
  ) { }

  registerVolunteer(value: any) {
    return this._authController.create({
      body: {
        ...value,
        type: 'volunteer'
      }
    });
  }

  registerSchoolAdmin(value : any){
    return this._authController.create({
      body: {
        ...value,
        type: 'admin'
      }
    });
  }

  updateSchoolAdmin(_id : string, value : any){
    return this._schoolAdminController.updateById({
      id: _id,
      body: {
        value
      }
    })
  }

  login(body: any, root = false) {
    const action = root ? this._authController.rootLogin({body}) : this._authController.login({body});

    return action.pipe( map( async (token) => {
      console.log("Token ", token);
      this._localAuth.storeSession(token);
      const info : any = await this._authController.info().toPromise();
      const user : User = info;
      // const type = user['type'];
      console.log("Type", info)
      user &&
      this._localAuth.setUser(user);
      // console.log("ID was ", _id);
      return {...token, info};
    })).pipe(flatMap((el) => Promise.resolve(el)))
  }

  fetchUserData(){
    return this._authController.info();
  }

  fetchCurrentUser(){
    return this._localAuth.currentUser.asObservable();
  }

  fetchUser() : Observable<VolunteerWithRelations | SchoolAdminWithRelations | undefined> {
    const authUserData = this._localAuth.currentUser.value;
    const type : string = (authUserData && authUserData['type']) ?? '';
    if(authUserData?.username){
      if(type === 'volunteer'){
        return this._volunteerController.find({
          filter: {where: {username: authUserData.username}}
        })
          .pipe( map((users) => users.filter(user => user.email === authUserData.email)))
          .pipe(map( (el) => el.length > 0? el[0] : undefined))
      }else if(type === 'admin'){

        return this._schoolAdminController.find({
          //TODO: Fix the filter issue @assign z80lives
          // filter: {filter: {where: {username: authUserData.username }}}
          // For now, we're going to manually filter the result from front end
        })
          .pipe( map((users) => users.filter(user => user.email === authUserData.email)))
          .pipe( map( (el) => {
          return el[0];
        }));

        //.pipe(map( (el) => el.length > 0? el[0] : undefined))
      }
    }
    return of(undefined);
  }
}
