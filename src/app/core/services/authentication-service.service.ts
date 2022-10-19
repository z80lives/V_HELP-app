import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogInDataServiceService } from './log-in-data-service.service';

interface LogInModel {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private readonly adminDataService: LogInDataServiceService) {}

  async login(email: string, password: string) {
    //simulate login
    const adminList = await this.adminDataService.fetch().toPromise();
    const foundAdmin = adminList?.find((user) => user.email === email);
    if (foundAdmin) {
      // console.log(foundAdmin);
      this.currentUser.next(foundAdmin);
      return this.currentUser.value;
    }
    return null;
  }

  getCurrentUser() {
    return this.currentUser.value;
  }
}
