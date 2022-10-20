import { Component, OnInit } from '@angular/core';
import {User} from "../../../tools/tools/api/models/user";
import {UserDataService} from "../../../core/services/user-data.service";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser! : User;
  constructor(
    private readonly _userService: UserDataService
  ) { }

  ngOnInit(): void {
    this._userService.fetchCurrentUser().subscribe(user => {
      console.log("User was", user);
      if(user) {
        console.log("User fetched", user)
        this.currentUser = user;
      }
    })
  }

}
