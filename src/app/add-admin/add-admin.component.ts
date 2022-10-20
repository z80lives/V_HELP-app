import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInDataServiceService } from '../core/services/log-in-data-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NewSchoolService } from '../core/services/new-school.service';
import { SchoolWithRelations } from '../tools/tools/api/models/school-with-relations';
import { School } from '../tools/tools/api/models/school';
import { CoreDataService } from '../core/services/core-data.service';
import { AuthService } from '../auth/guards/auth.service';
import { UserDataService } from '../core/services/user-data.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

interface adminForm {
  username: string;
  email: string;
  password: string;
  fullname: string;
  phone: string;
  position: string;
  staffID: string;
  schoolId: string;
}

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  goBack = (): String => {
    // return '/AdministratorMenuComponent';
    return '/dashboard/root';
  };

  addAdminForm = this._fb.group({
    username: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    fullname: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    position: ['', [Validators.required]],
    staffID: ['', [Validators.required]],
    schoolId: ['', [Validators.required]],
  });

  fieldConfig: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      props: {
        label: 'UserName',
        placeholder: 'UserName',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      props: {
        type: 'email',
        label: 'Email',
        placeholder: 'Email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      props: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true,
      },
    },
    {
      key: 'fullname',
      type: 'input',
      props: {
        label: 'Full Name',
        placeholder: 'Full Name',
        required: true,
      },
    },
    {
      key: 'phone',
      type: 'input',
      props: {
        type: 'tel',
        label: 'Phone Number',
        placeholder: 'Phone Number',
        required: true,
      },
    },
    {
      key: 'position',
      type: 'input',
      props: {
        label: 'Position',
        placeholder: 'Position',
        required: true,
      },
    },
    {
      key: 'staffID',
      type: 'input',
      props: {
        label: 'StaffID',
        placeholder: 'StaffID',
        required: true,
      },
    },
    {
      key: 'schoolId',
      type: 'select',
      props: {
        label: 'SchoolID',
        placeholder: 'SchoolID',
        required: true,
        options: [],
      },
      expressionProperties: {
        'props.options': 'formState.schools',
      },
    },
  ];

  option: FormlyFormOptions = {
    formState: {
      schools: [],
    },
  };

  constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    // private readonly _adminService: LogInDataServiceService,
    private readonly _adminService: UserDataService,
    private readonly _schools: NewSchoolService,
    private readonly _core: CoreDataService
  ) {}

  schools: School[] = [];

  ngOnInit(): void {
    this._schools.fetch().subscribe((schools) => {
      // this.schools = schools;
      this.option.formState.schools = schools.map(
        ({ schoolName, schoolId }) => ({
          label: schoolName,
          value: schoolId,
        })
      );
    });
  }

  onClickSubmit() {
    const formData: adminForm = this.addAdminForm.value as any;
    if (this.addAdminForm.valid) {
      this._adminService.registerSchoolAdmin(formData).subscribe(
        (result) => {
          if (result) {
            // alert('New School administrator created!');
            this._core.notify({
              severity: 'info',
              summary: 'New School administrator created!',
              detail: 'New School administrator created!',
            });
            this.addAdminForm.reset();
          }
        },
        (err: Error) => {
          this._core.notify({
            severity: 'error',
            summary: err.name,
            detail: err.message,
          });
        }
      );
    } else {
      alert('inputs cannot be empty');
      console.log('data', formData);
    }
  }
}
