import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator-menu',
  templateUrl: './administrator-menu.component.html',
  styleUrls: ['./administrator-menu.component.scss'],
})
export class AdministratorMenuComponent implements OnInit {
  goToSchool = (): String => {
    return '/AdministratorComponent_component';
  };
  goToNewAdmin = (): String => {
    return '/AdministratorMenuComponent';
  };
  goBack = (): String => {
    return '/';
  };
  goToAddSchool = (): String => {
    return '/AdministratorMenuComponent';
  };

  constructor() {}

  ngOnInit(): void {}
}
