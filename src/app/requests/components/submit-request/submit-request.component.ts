import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { CoreDataService } from 'src/app/core/services/core-data.service';
import { NewSchoolService } from 'src/app/core/services/new-school.service';
import { SchoolResourceRequestControllerService, SchoolTutorialRequestControllerService } from 'src/app/tools/tools/api/services';

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
      type: 'input',
      props: {
        label: "Enter numRequired",
        placeholder:"numRequired",
         required: true,
        description: "Write the Number Required"
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
          label: 'proposedDate',
          placeholder: 'Placeholder',
          description: 'Provide a Date',
          required: true,
        },
      },
      {
        key: 'proposedTime',
        type: 'input',
        props: {
          label: "proposedTime",
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
        type: 'input',
        props: {
          label: "Expected Number Of Students",
          placeholder:"",
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
console.log(schoolId, this.selectedForm)
    
     if (schoolId && this.selectedForm==="tutorial"){
      this._tutorialRequest.create({
        id: schoolId,
        body: this.submitForm.value as any 
      }).subscribe((values) => {
         this.core.notifyInfo("Success", " Yes")
      }, this.core.handleError)

    }
    
  }
 


}
