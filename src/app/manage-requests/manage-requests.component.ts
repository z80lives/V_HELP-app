import {Component, Input, OnInit} from '@angular/core';
import { NewSchoolService } from '../core/services/new-school.service';
import { Offer, Request, SchoolAdmin } from '../tools/tools/api/models';
import {
  RequestOfferControllerService,
  RequestsControllerService,
  ResourceRequestsControllerService,
  SchoolResourceRequestControllerService,
  SchoolTutorialRequestControllerService,
  TutorialsRequestsControllerService, VolunteerControllerService,
  VolunteerOfferControllerService,
} from '../tools/tools/api/services';
import {concatMap, flatMap, mergeMap} from "rxjs";

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.scss'],
})
export class ManageRequestsComponent implements OnInit {
  loadingRequest = false;
  loading = false;
  data: Request[] = [];
  selectedRequest: any = '';
  selectedOffers = [];

  @Input() schoolId! : string;

  offersValid = false;
  constructor(
    private readonly _schoolService: NewSchoolService,
    private readonly _requestOffer: RequestOfferControllerService,
    // private readonly _offer: controllerService,
    private readonly _CTrequests: TutorialsRequestsControllerService,
    private readonly _CRrequests: ResourceRequestsControllerService,
    private readonly _Rrequests: SchoolResourceRequestControllerService,
    private readonly _Trequests: SchoolTutorialRequestControllerService,
    private readonly _volunteerService : VolunteerControllerService
  ) {}
  offers: Offer[] = [];
  async onAcceptOffer() {
    console.log(this.selectedOffers);
    const promiseMap = this.selectedOffers.map((id) =>
      this._requestOffer
        .patch({
          id: this.selectedReqID ?? '',
          where: {
            _id: id,
          },
          body: {
            offerStatus: 'ACCEPTED',
          },
        })
        .toPromise()
    );
    await Promise.all(promiseMap);
    this.fetchRequestData();
    console.log('all promises done');
  }

  buttonOffer() {
    let valid = true;
    this.selectedOffers.map((i: string) => {
      if (!i.includes('ACCEPTED')) {
        valid = false;
      }
    });

    return valid;
  }
  buttonRequest() {
    let valid = true;

    if (
      this.selectedRequest.requestStatus !== 'CLOSED' &&
      this.selectedRequest
    ) {
      valid = false;
    }

    return valid;
  }

  onCloseRequest() {
    this.loadingRequest = true;
    const service = this.selectedRequest.numStudents
      ? this._CTrequests
      : this._CRrequests;
    if (this.selectedReqID) {
      service
        .updateById({
          id: this.selectedReqID,
          body: {
            requestStatus: 'CLOSED',
          },
        })
        .subscribe(() => {
          console.log('change done');
          this.fetchRequestData();
          this.loadingRequest = false;
        });
    }
  }

  filter = { include: ['volunteer'] };

  description = '';
  selectedReqID: string | undefined = undefined;
  onReqSelect($event: any) {
    this.description = $event.data.description;
    this.selectedReqID = $event.data.id;
    this.fetchRequestData();
  }

  calAge(date: any) {
    return new Date().getFullYear() - new Date(date).getFullYear();
  }

  fetchRequestData() {
    // const schoolId = this.schoolId;
    this._schoolService.currentSchoolId.subscribe(async (schoolId) => {
      if(schoolId){

        const obsR = (await this._Rrequests.find({id: schoolId}).toPromise()) ?? [];
        const obsT = (await this._Trequests.find({id: schoolId}).toPromise()) ?? [];
        const result = [...obsR, ...obsT];
        this.data = result;
          // console.log("Resullt", result)
          if (this.selectedReqID) {
            const filter = {include: ['volunteer']}
            this._requestOffer
              .find({id: this.selectedReqID,
                filter: JSON.stringify(filter)
              })
              .subscribe( (r) => {
                this.offers = r;
                if (this.selectedOffers.length !== 0) {
                }
                console.table(r);
              });
          }
          // this.data = result;
          // console.table(result);
        // }
      }
    })


  }

  async ngOnInit() {
    const tempDate = new Date('2010-04-15');
    this.fetchRequestData();

    // this._CRrequests
    //   .create({
    //     body: {
    //       numRequired: 1,
    //       resourceType: 'money',
    //       description: 'des1',
    //       requestDate: tempDate.toISOString(),
    //       requestStatus: 'Pending',
    //       requestId: '1',
    //       schoolId: '1',
    //     },
    //   })
    //   .subscribe((r) => {
    //     console.log(r);
    //   });
    // this._CTrequests
    //   .create({
    //     body: {
    //       description: 'des',
    //       numStudents: 2,
    //       proposedDate: tempDate.toISOString(),
    //       proposedTime: tempDate.toISOString(),
    //       requestDate: tempDate.toISOString(),
    //       requestStatus: 'pending',
    //       studentLevel: 'primary',
    //       requestId: '1',
    //       schoolId: '1',
    //     },
    //   })
    //   .subscribe((r) => {
    //     console.log(r);
    //   });
    // await this._requestOffer
    //   .create({
    //     id: '3',
    //     body: {
    //       offerDate: tempDate.toISOString(),
    //       offerStatus: 'pending',
    //       remarks: 'this is my remark',
    //       volunteerId: '1',
    //     },
    //   })
    //   .subscribe((r) => {
    //     console.log(r);
    //   });
  }
}
