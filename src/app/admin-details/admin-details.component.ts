import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss'],
})
export class AdminDetailsComponent implements OnInit {
  goBack = (): String => {
    return '/AdminMenuComponent';
  };

  constructor() {}

  ngOnInit(): void {}
}
