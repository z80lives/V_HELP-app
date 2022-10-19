import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss']
})
export class ViewRequestsComponent implements OnInit {

  menuItems = [
    {label: 'Details', icon: 'pi pi-fw pi-info-circle'}
  ];

  data = [
    {
      _id: "r01",
      type: "Tutorial",
      description: "Bahasa Melayu Class"
    },
    {
      _id: "r02",
      type: "Resources",
      description: "5 Android phone"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
