import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../core/services/authentication-service.service';
import { LogInDataServiceService } from '../core/services/log-in-data-service.service';
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss'],
})
export class AdminDetailsComponent implements OnInit {
  goBack = (): String => {
    return '/AdminMenuComponent';
  };
  detailsForm = this._fb.group({
    username: ['', [Validators.minLength(8)]],
    email: ['', [Validators.email]],
    password: [''],
    fullname: [''],
    phonenumber: [''],
    position: [''],
    staffID: [''],
    school: [''],
  });

  constructor(
    private readonly _adminService: LogInDataServiceService,
    private readonly _fb: FormBuilder,
    private readonly _auth: AuthenticationServiceService
  ) {}

  ngOnInit(): void {}

  onClickSubmit($event: SubmitEvent) {
    $event.preventDefault();
    const formData = this.detailsForm.value;
    if (
      formData.email?.length !== 0 ||
      formData.fullname?.length !== 0 ||
      formData.password?.length !== 0 ||
      formData.phonenumber?.length !== 0 ||
      formData.position?.length !== 0 ||
      formData.school?.length !== 0 ||
      formData.staffID?.length !== 0 ||
      formData.username?.length !== 0
    ) {
      this._adminService
        .updateByUsername(this._auth.currentUser.value.username, formData)
        .subscribe((result) => {
          console.log(result);
          if (result) {
            alert('Update success');
          }
        });
    } else {
      alert('inputs cannot be empty');
    }
  }
}
