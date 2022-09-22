import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }

}
