import { Component, OnInit } from '@angular/core';
import { TutorialsRequestsControllerService } from 'src/app/tools/tools/api/services';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss']
})
export class ViewRequestsComponent implements OnInit {

  menuItems = [
    {label: 'Details', icon: 'pi pi-fw pi-info-circle'}
  ];

cols = ["id", "requestType", "Description", "Action"]
  
  data : any []= [
    // {
    //   _id: "r01",
    //   type: "Tutorial",
    //   description: "Bahasa Melayu Class"
    // },
    // {
    //   _id: "r02",
    //   type: "Resources",
    //   description: "5 Android phone"
    // }
  ];

  constructor(
    private readonly _tutorialRequests : TutorialsRequestsControllerService
  ) { }

  ngOnInit(): void {
    this._tutorialRequests.find({}).subscribe( (results) => {
      this.data = results
    })
  }

}
