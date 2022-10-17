import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Administrator',
  templateUrl: './Administrator.component.html',
  styleUrls: ['./Administrator.component.scss'],
})
export class AdministratorComponent implements OnInit {
  goBack = (): String => {
    return '/AdministratorMenuComponent';
  };

  constructor() {}

  ngOnInit(): void {}
}
