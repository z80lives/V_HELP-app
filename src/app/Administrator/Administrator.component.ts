import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {NewSchoolService, SchoolModel} from '../core/services/new-school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Administrator',
  templateUrl: './Administrator.component.html',
  styleUrls: ['./Administrator.component.scss'],
})
export class AdministratorComponent implements OnInit {
  goBack = (): String => {
    return '/AdministratorMenuComponent';
  };

  constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _schoolService: NewSchoolService
  ) {}
  addSchoolForm = this._fb.group({
    schoolName: '',
    address: '',
    city: '',
  });

  ngOnInit(): void {}

  onClickSubmit($event: SubmitEvent) {
    $event.preventDefault();
    const formData : Partial<SchoolModel> = this.addSchoolForm.value as any;

    this._schoolService.create(formData).subscribe((result) => {
      if (result) {
        alert('Successfully created');
        this.addSchoolForm.reset();
        this._router.navigate(['/AdministratorMenuComponent']);
      }
    });
  }
}
