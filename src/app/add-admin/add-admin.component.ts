import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInDataServiceService } from '../core/services/log-in-data-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NewSchoolService } from '../core/services/new-school.service';

interface adminForm {
  username: string;
  email: string;
  password: string;
  fullname: string;
  phonenumber: string;
  position: string;
  staffID: string;
  schoolID: string;
}

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  goBack = (): String => {
    return '/AdministratorMenuComponent';
  };

  addAdminForm = this._fb.group({
    username: ['', [Validators.minLength(8)]],
    email: ['', [Validators.email]],
    password: [''],
    fullname: [''],
    phonenumber: [''],
    position: [''],
    staffID: [''],
    schoolID: [''],
  });

  constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _adminService: LogInDataServiceService,
    private readonly _schools: NewSchoolService
  ) {}

  schools = this._schools.fetch();

  ngOnInit(): void {
    this._schools.fetch();
  }

  onClickSubmit() {
    const formData: adminForm = this.addAdminForm.value;
    if (
      formData.email.length !== 0 ||
      formData.fullname.length !== 0 ||
      formData.password.length !== 0 ||
      formData.phonenumber.length !== 0 ||
      formData.position.length !== 0 ||
      formData.staffID.length !== 0 ||
      formData.username.length !== 0 ||
      formData.schoolID.length !== 0
    ) {
      this._adminService.create(formData).subscribe((result) => {
        console.log(result);

        if (result) {
          alert('New School administrator created!');
          this._router.navigate(['/AdministratorMenuComponent']);
        }
      });
    } else {
      alert('inputs cannot be empty');
    }
  }
}
