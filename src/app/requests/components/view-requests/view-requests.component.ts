import { Component, OnInit } from '@angular/core';
import {ResourceRequestsControllerService, TutorialsRequestsControllerService} from 'src/app/tools/tools/api/services';
import {concatMap, forkJoin, map, mergeMap, Observable, of} from "rxjs";
import {ResourceRequestWithRelations} from "../../../tools/tools/api/models/resource-request-with-relations";
import {TutorialRequestWithRelations} from "../../../tools/tools/api/models/tutorial-request-with-relations";

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
    private readonly _tutorialRequests : TutorialsRequestsControllerService,
    private readonly _resourceRequests : ResourceRequestsControllerService
  ) { }

  ngOnInit(): void {
    const $tutorials : Observable<TutorialRequestWithRelations[]> = this._tutorialRequests.find({})
      .pipe(map((el) => el.map(val => ({
        ...val,
        type: 'tutorial'
      }))))

    const $resources : Observable<ResourceRequestWithRelations[]> = this._resourceRequests.find({})
      .pipe(map((el) => el.map((val) => ({
          ...val,
        type: 'tutorial'
        })
      )))

      forkJoin([$tutorials, $resources])
        .pipe(map(([tut, res]) => [...tut, ...res]))
      .subscribe( (results) => {
        this.data = results
        console.debug("Data", results)
      })
  }

}
