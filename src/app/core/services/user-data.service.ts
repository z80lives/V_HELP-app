import { Injectable } from '@angular/core';
import {AuthControllerService} from "../../tools/tools/api/services/auth-controller.service";
import {AuthService} from "../../auth/guards/auth.service";
import {concat, concatAll, flatMap, forkJoin, map, merge, mergeAll, mergeMap} from "rxjs";
import {User} from "../../tools/tools/api/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private readonly _authController : AuthControllerService,
    private readonly _localAuth : AuthService
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

  login(formVals: any) {
    return this._authController.login({
      body: formVals
    }).pipe( map( async (token) => {
      this._localAuth.storeSession(token);
      const info : any = await this._authController.info().toPromise();
      const user : User = info?.user;
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
}
