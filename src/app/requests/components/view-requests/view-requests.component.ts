import { Component, OnInit } from '@angular/core';
import {
  ResourceRequestsControllerService,
  TutorialsRequestsControllerService,
  VolunteerOfferControllerService
} from 'src/app/tools/tools/api/services';
import {concatMap, forkJoin, map, mergeMap, Observable, of} from "rxjs";
import {ResourceRequestWithRelations} from "../../../tools/tools/api/models/resource-request-with-relations";
import {TutorialRequestWithRelations} from "../../../tools/tools/api/models/tutorial-request-with-relations";
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../auth/guards/auth.service";
import {OfferWithRelations} from "../../../tools/tools/api/models/offer-with-relations";
import {VolunteerServiceService} from "../../../core/services/volunteer-service.service";

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss']
})
export class ViewRequestsComponent implements OnInit {

  menuItems : MenuItem[] = [
    {label: 'Details', icon: 'pi pi-fw pi-info-circle', command: () => this.showDetailPopup=true},
    {label: 'Make Offer', icon: 'pi pi-fw pi-comments', command: ($event) => this.clickMakeOffer($event)}
  ];

  showDetailPopup : boolean = false;
  showReviewPopup: boolean = false;
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
  selectedItem: any;
  selectedItemOffers: OfferWithRelations[] = []

  constructor(
    private readonly _tutorialRequests : TutorialsRequestsControllerService,
    private readonly _resourceRequests : ResourceRequestsControllerService,
    private readonly _userService : AuthService,
    private readonly _offerService : VolunteerOfferControllerService,
    private readonly _volunteerService : VolunteerServiceService
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
        type: 'resource'
        })
      )))

      forkJoin([$tutorials, $resources])
        .pipe(map(([tut, res]) => [...tut, ...res]))
        .pipe(map((els) => els.filter(el => el.requestStatus !== "CLOSED")))
      .subscribe( (results) => {
        this.data = results
        console.debug("Data", results)
      })
  }

  async onClickSelectRequest($event: any, menu: any, item: any){
    menu.toggle($event);
    // console.log("item", item);
    // this.fetchOffers();
    this.selectedItem = item;
  }

  fetchOffers() {
    const volunteerId = this._userService.currentUser.value?.id;
    if(volunteerId && this.selectedItem && this.selectedItem.id){
      // this.sentOffers = undefined;
      return this._offerService.find({id: volunteerId} ) //, filter: {where: {requestId: this.requestId}}})
        .pipe(map((els) => els.filter(el => el.requestId === this.selectedItem.id)))
        // .pipe(map((els) => els.filter(el => el.offerStatus !== "CLOSED")))
        .pipe(map(result => {
          console.log("Found results", result)
          // console.log("Request id", this.selectedItem.id)
          this.selectedItemOffers = result;
          // this.sentOffers = result;
          return true;
        }));
    }else {
      console.log(volunteerId, this.selectedItem)
      return of(false);
    }
  }

  private clickMakeOffer($event: any) {
    // console.log("Clicked", $event)

    this.fetchOffers().subscribe( (result) => {
      if(result){
        this.showReviewPopup = true;
      }
    })
    return undefined;
  }
}
