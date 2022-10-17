import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss'],
})
export class AdminMenuComponent implements OnInit {
  goBack = (): String => {
    return '/';
  };
  goToEdit = (): String => {
    return '/AdminDetailsComponent';
  };

  constructor() {}

  ngOnInit(): void {}
}
