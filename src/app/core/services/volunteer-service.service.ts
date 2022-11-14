import { Injectable } from '@angular/core';
import {AuthService} from "../../auth/guards/auth.service";
import {VolunteerControllerService} from "../../tools/tools/api/services/volunteer-controller.service";
import {map, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VolunteerServiceService {

  constructor(
    private readonly _userService : AuthService,
    private readonly _volunteerService : VolunteerControllerService
  ) { }

  fetchCurrentVolunteer(){
    const user = this._userService.currentUser?.value;
    if(user){
      return this._volunteerService.find({filter: {where: {username: user?.username}}})
        .pipe(map((el) => {
          if(el.length === 1){
            return el[0];
          }
          return undefined;
        }))
    }
    return of(undefined);
  }
}
