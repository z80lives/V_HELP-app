import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { CoreDataService } from 'src/app/core/services/core-data.service';
import { NewSchoolService } from 'src/app/core/services/new-school.service';
import { SchoolResourceRequestControllerService, SchoolTutorialRequestControllerService } from 'src/app/tools/tools/api/services';
import {Observable} from "rxjs";
import {ResourceRequestWithRelations} from "../../../tools/tools/api/models/resource-request-with-relations";
import {RequestWithRelations} from "../../../tools/tools/api/models/request-with-relations";
import {TutorialRequest} from "../../../tools/tools/api/models/tutorial-request";
import {ResourceRequest} from "../../../tools/tools/api/models/resource-request";

@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.scss']
})
export class SubmitRequestComponent implements OnInit {

  submitForm = this._fb.group({
    // requestDate: [''],
    // Description: [''],
    // proposedDate: [''],
    // proposedTime: [''],
    // StudentLevel: [''],
    // NumberOfStudensExpected:[''],
  })


  selectedSchema : FormlyFieldConfig[]= [];

  resourceTypeForm = new FormGroup({})
  resourceTypeFormSchema : FormlyFieldConfig[]= [
    {
      key: 'requestType',
      type: 'select',
      props: {
        label: 'Request Type',
        placeholder: 'Pick a request type',
        description: 'Description',
        required: true,
        options: [
          { value: 'tutorial', label: 'Tutorial' },
          { value: 'resource', label: 'Resource' },
        ],
      },
    },
  ];
  selectedForm : string | undefined = undefined;

  resourceRequestFields : FormlyFieldConfig[] = [
    {
      key: 'description',
      type: 'input',
      props: {
        label: "Resource Description",
        placeholder:" Write your description",
         required: true,
        description: "Write the resource description"
      }
    },
    {
      key: 'resourceType',
      type: 'input',
      props: {
        label: "Enter Resource Type",
        placeholder:"resourceType",
         required: true,
        description: "Write the resourceType"
      }
    },
    {
      key: 'numRequired',
      type: 'number',
      props: {
        label: "Enter numRequired",
        placeholder:"numRequired",
        required: true,
        description: "Write the Number Required",
        min: 1
      }
    },
    {
      key: 'requestDate',
      type: 'datepicker',
      props: {
        label: 'requestDate',
        placeholder: 'Placeholder',
        description: 'Provide a Date',
        required: true,
      },
    },

  ]

  tutorialFields : FormlyFieldConfig[] = [
      {
        key: 'description',
        type: 'input',
        props: {
          label: "Description",
          placeholder:" Write your description",
           required: true
        }
      },
      {
        key: 'proposedDate',
        type: 'datepicker',
        props: {
          label: 'Proposed Date',
          placeholder: 'Placeholder',
          description: 'Provide the Date',
          required: true,
        },
      },
      {
        key: 'proposedTime',
        type: 'input',
        props: {
          label: "Proposed Time",
          placeholder:"",
           required: true
        }
      },
      {
        key: 'studentLevel',
        type: 'input',
        props: {
          label: "studentLevel",
          placeholder:"",
           required: true
        }
      },
      {
        key: 'numStudents',
        type: 'number',
        props: {
          label: "Expected Number Of Students",
          placeholder:"",
           required: true
        }
      },
      {
        key: 'requestDate',
        type: 'datepicker',
        props: {
          label: 'Request Date',
          placeholder: 'Provide the Request Date',
          description: '',
           required: true
        }
      }
  ];

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _tutorialRequest :
      SchoolTutorialRequestControllerService,
    private readonly _resourceService :
      SchoolResourceRequestControllerService,
      private schoolService: NewSchoolService,
      private core : CoreDataService
  ) { }

  ngOnInit(
  ): void {

    this.resourceTypeForm.valueChanges.subscribe( (values : any) => {
      console.log("Vals are ", values);
      this.selectedForm = values.requestType;
      if(values.requestType==='tutorial'){
        this.selectedSchema = this.tutorialFields
      }else{
        this.selectedSchema = this.resourceRequestFields;
      }
    })

  }

  onClickSubmit ($event : SubmitEvent){
     $event.preventDefault();
     const schoolId = this.schoolService.currentSchoolId.value;

     //pick a backend service based on the type
    let $requestService :SchoolTutorialRequestControllerService | SchoolResourceRequestControllerService;
     if (schoolId && this.selectedForm==="tutorial") {
       $requestService = this._tutorialRequest
     }else{
       $requestService = this._resourceService
     }

     //create the request and notify
    if(schoolId) {
      const $createObs : Observable<any> = $requestService.create({
        id: schoolId,
        body: {
          ...(this.submitForm.value as any),
          requestStatus: "NEW"
        }
      })
      $createObs
        // .pipe( this.core.$handleError)
        .subscribe((values ) => {
        this.core.notifyInfo("Success", "Successfully created the request")
      }, this.core.handleError)
    }

  }



}
