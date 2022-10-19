import { Injectable } from '@angular/core';
import {UserDataService} from "../../core/services/user-data.service";
import {flatMap, map} from "rxjs";
import {User} from "../../tools/tools/api/models/user";
import {MenuItem} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class PanelDataService {
  data = {
    title: 'VHELP',
    navMenu: []
  }

  constructor(
    private readonly _userData : UserDataService
  ) { }

  loadPanelData(){
    return this._userData.fetchCurrentUser().pipe(
      map((user : User | undefined) => {
        let navMenu  : any[] = [];

        if(user){
          const type = user['type'];
          switch (type){
            case 'volunteer':
              navMenu = [
                {label: 'Home', routerLink: '/dashboard'},
                {label: "View Request", routerLink: "/dashboard/requests/view"}
              ]
              break;
            case 'admin':
              navMenu = [
                {label: 'Edit School', routerLink: "/dashboard/admin"},
              ]
              break;
            case 'root': {
              navMenu =[
                {label: 'Home', routerLink: '/dashboard'},
                {label: 'Add Admin', routerLink: '/dashboard/admin/add'},
                {label: 'Register School', routerLink: "/dashboard/school/add"}
                // {label: 'Edit Admin', routerLink: '/dashboard/admin/edit'}
              ];
              break;
            }
            break;
            default:
            {}
          }
        }
        return {
          ...this.data,
          navMenu
        };
    }))
  }
}
