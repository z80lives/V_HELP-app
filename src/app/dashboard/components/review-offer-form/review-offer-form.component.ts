import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {FormGroup} from "@angular/forms";
import {VolunteerOfferControllerService} from "../../../tools/tools/api/services/volunteer-offer-controller.service";
import {UserDataService} from "../../../core/services/user-data.service";
import {AuthService} from "../../../auth/guards/auth.service";
import {CoreDataService} from "../../../core/services/core-data.service";
import {catchError, map} from "rxjs";
import {OfferWithRelations} from "../../../tools/tools/api/models/offer-with-relations";

@Component({
  selector: 'app-review-offer-form',
  templateUrl: './review-offer-form.component.html',
  styleUrls: ['./review-offer-form.component.scss']
})
export class ReviewOfferFormComponent implements OnInit {
  sending = false;

  form = new FormGroup({})

  sentOffers : OfferWithRelations[] | undefined;

  fields : FormlyFieldConfig[] = [
    {
      key: 'remarks',
      type: 'textarea',
      props: {
        label: 'Remarks',
        placeholder: 'Enter your remarks',
        description: 'The remark will be read by the school administrators',
        required: true,
      }
    }
  ]

  @Output() onSubmit = new EventEmitter<any>();
  @Input() requestId!: string;
  @Input() existingOffers : OfferWithRelations[] = [];

  constructor(
    private offerService : VolunteerOfferControllerService,
    private userService : AuthService,
    private core : CoreDataService
  ) { }

  ngOnInit(): void {
    this.fetchOffers();
  }

  onClickSubmit($event : SubmitEvent){
    $event.preventDefault();
    const volunteerId = this.userService.currentUser.value?.id;
    const remarks : string = (this.form.value as any).remarks;
    if(volunteerId) {
      this.sending = true;
      this.offerService.create({
        id: volunteerId,
        body: {
          offerDate: (new Date()).toISOString(),
          offerStatus: "PENDING",
          remarks,
          requestId: this.requestId
        }
      })
        .subscribe( () => {
        this.core.notifyInfo("Offer successfuly created",
          "Offer successfully created")
        this.onSubmit.emit({success: true})
          this.sending = false;
      }, this.core.handleError)
        .add(() => {
          this.sending = false;
          this.form.reset();
          this.form.clearValidators();
        })
    }
  }

  fetchOffers() {
    // const volunteerId = this.userService.currentUser.value?.id;
    // if(volunteerId){
    //   this.sentOffers = undefined;
    //   this.offerService.find({id: volunteerId} ) //, filter: {where: {requestId: this.requestId}}})
    //     .pipe(map((els) => els.filter(el => el.requestId === this.requestId)))
    //     .subscribe(result => {
    //     console.log("Found results", result)
    //     console.log("Request id", this.requestId)
    //     this.sentOffers = result;
    //   });
    // }
  }
}

