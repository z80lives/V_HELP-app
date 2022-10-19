import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {CoreDataService} from "../../core/services/core-data.service";
import {AuthService} from "../../auth/guards/auth.service";

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  data = [
  	'dasdasd',
	'dsadasd',
  ]
  cornerMenu: MenuItem[] = [
    {label: "Logout", command: () => this.onClickLogout()},
  ];

  constructor(
    private _core : CoreDataService,
    private _auth : AuthService
  ) { }

  ngOnInit(): void {

  }


  onClickLogout(){
    this._auth.logout().subscribe( () => {
      this._core.fetchRouter().navigate([""])
    });
  }
}
