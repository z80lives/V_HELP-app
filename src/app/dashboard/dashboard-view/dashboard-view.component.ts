import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {CoreDataService} from "../../core/services/core-data.service";
import {AuthService} from "../../auth/guards/auth.service";
import {PanelDataService} from "../services/panel-data.service";

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

  sideMenu: {label: string; routerLink: string}[] = [

  ];


  constructor(
    private _core : CoreDataService,
    private _auth : AuthService,
    private _panelData : PanelDataService
  ) { }

  ngOnInit(): void {
    this._panelData.loadPanelData().subscribe(data => {
      this.sideMenu = data.navMenu;
    });
  }


  onClickLogout(){
    this._auth.logout().subscribe( () => {
      this._core.fetchRouter().navigate([""])
    });
  }
}
