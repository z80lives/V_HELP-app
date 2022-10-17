import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  Submit = (): String => {
    return "/AdministratorMenuComponent"
  };

  title = 'HELP_V Log In';

  constructor() {}

  ngOnInit(): void {}
}
