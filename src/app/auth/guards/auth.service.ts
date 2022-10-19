import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


export interface UserSession{
  email : string,
  token: string;
  idToken: string;
  type: string;
  privileges: string [];
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser : BehaviorSubject<UserSession|undefined> = new BehaviorSubject<UserSession|undefined>(undefined);
  // helper = new JwtHelperService();

  constructor(
  ) {
    const sessionStr = localStorage.getItem('token');
    if(sessionStr){
      // console.log("Token decoded", this.helper.decodeToken(sessionStr))
      // this.currentUser.next(this.helper.decodeToken(sessionStr));
    }
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    const hasToken = !!token;
    // const tokenExpired = token && this.helper.isTokenExpired(token);
    // if(hasToken && tokenExpired){
    //   console.log("Session expired.")
    // }
    // return hasToken && !tokenExpired;
    return hasToken;
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUser.next(undefined);
  }
}
