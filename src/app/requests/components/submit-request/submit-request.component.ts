import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.scss']
})
export class SubmitRequestComponent implements OnInit {

  submitForm = this._fb.group({
    requestDate: [''],
    Description: [''],
    proposedDate: [''],
    proposedTime: [''],
    StudentLevel: [''],
    NumberOfStudensExpected:[''],
  })

  resourceRequestFields : FormlyFieldConfig[] = [
    {
      key: 'description',
      type: 'input',
      props: {
        label: "Resource Description",
        placeholder:" Write your description",
         required: true,
        description: "Write the resource d"
      }
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
          label: 'Datepicker',
          placeholder: 'Placeholder',
          description: 'Description',
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
        key: 'StudentLevel',
        type: 'input',
        props: {
          label: "Student Level",
          placeholder:"",
           required: true
        }
      },
      {
        key: 'ExpectedStudent',
        type: 'input',
        props: {
          label: "Expected Number Of Students",
          placeholder:"",
           required: true
        }
      }
  ];

  constructor(
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(
  ): void {
  }

  onClickSubmit($event : SubmitEvent){
     $event.preventDefault();
    console.log("Data", this.submitForm.value)
     alert("Done");
  }

}
