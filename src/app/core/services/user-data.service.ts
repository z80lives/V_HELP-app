import { Injectable } from '@angular/core';
import {AuthControllerService} from "../../tools/tools/api/services/auth-controller.service";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private readonly _authController : AuthControllerService
  ) { }

  registerVolunteer(value: any) {
    return this._authController.create({
      ...value,
      type: 'volunteer'
    });
  }

  registerSchoolAdmin(value : any){
    return this._authController.create({
      ...value,
      type: 'admin'
    });
  }
}
