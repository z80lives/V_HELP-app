import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from "rxjs";
import {User} from "../../tools/tools/api/models/user";


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
  currentUser : BehaviorSubject<User|undefined> = new BehaviorSubject<User|undefined>(undefined);
  // helper = new JwtHelperService();

  constructor(
  ) {
    const sessionStr = localStorage.getItem('token');
    this.loadUserFromStorage();
    if(sessionStr){
      // console.log("Token decoded", this.helper.decodeToken(sessionStr))
      // this.currentUser.next(this.helper.decodeToken(sessionStr));
    }
  }

  storeSession(token : any){
    const tokenStr = JSON.stringify(token);
    localStorage.setItem('token', tokenStr);
    console.debug("Token stored");
    return of(tokenStr);
  }

  setUser(user : User){
    this.currentUser.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadUserFromStorage(){
    const user : any = localStorage.getItem('user');
    user && this.currentUser.next(JSON.parse(user));
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
    localStorage.removeItem('user');
    this.currentUser.next(undefined);
    return of(true);
  }
}
