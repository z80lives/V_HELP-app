import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewSchoolService } from '../core/services/new-school.service';
import { Router } from '@angular/router';
import { NewSchool } from '../tools/tools/api/models/new-school';
import { CoreDataService } from '../core/services/core-data.service';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-school-manage',
  templateUrl: './manage-school.component.html',
  styleUrls: ['./manage-school.component.scss'],
})
export class ManageSchoolComponent implements OnInit {
  goBack = (): String => {
    return '/dashboard/root';
  };

  constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _schoolService: NewSchoolService,
    private readonly _core: CoreDataService,
  ) {}
  addSchoolForm = this._fb.group({
    schoolName: '',
    address: '',
    city: '',
  });

  fieldConfig: FormlyFieldConfig[] = [
    {
      key: 'schoolName',
      type: 'input',
      props: {
        label: 'School Name',
        placeholder: 'School Name',
        required: true,
      },
    },
    {
      key: 'address',
      type: 'input',
      props: {
        label: 'Address',
        placeholder: 'Address',
        required: true,
      },
    },
    {
      key: 'city',
      type: 'input',
      props: {
        label: 'City',
        placeholder: 'City',
        required: true,
      },
    },
  ];

  ngOnInit(): void {
  }

  onClickSubmit($event: SubmitEvent) {
    $event.preventDefault();
    const formData: NewSchool = this.addSchoolForm.value as any;

    this._schoolService.create(formData).subscribe((result) => {
      if (result) {
        this._core.notifyInfo('School Created', 'School Created');
        this.addSchoolForm.reset();
        this._router.navigate(['/dashboard/root']);
      }
    });
  }
}
