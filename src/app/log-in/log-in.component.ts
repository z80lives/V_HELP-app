import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  Submit = (): String => {
    return "/AdminMenuComponent"
  };
  title = 'HELP_V Log In';

  loginForm = this._fb.group({
    email: '',
    password: ''
  });

  constructor(
    private  _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {

  }

  onSubmit(){
    const values = this.loginForm.value;
    this._router.navigate(['/AdminMenuComponent']);
  }
}
