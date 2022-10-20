import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../core/services/authentication-service.service';
import { LogInDataServiceService } from '../core/services/log-in-data-service.service';
import {UserDataService} from "../core/services/user-data.service";
import {SchoolAdmin} from "../tools/tools/api/models/school-admin";
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss'],
})
export class AdminDetailsComponent implements OnInit {
  goBack = (): String => {
    return '/dashboard/';
  };

  loading=true;
  currentAdmin! : SchoolAdmin;

  detailsForm = this._fb.group({
    username: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    fullname: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    position: ['', [Validators.required]],
    staffID: ['', [Validators.required]],
    schoolId: ['', [Validators.required]],
  });


  constructor(
    private readonly _fb: FormBuilder,
    private readonly _auth: AuthenticationServiceService,
    private user : UserDataService,
  ) {}

  ngOnInit(): void {
    this.user.fetchUser().subscribe((user) => {
      this.detailsForm.patchValue({...user})
      this.detailsForm.updateValueAndValidity();
      this.currentAdmin = (user as SchoolAdmin) ;
    }).add( () => {
      this.loading = false;
    })
  }

  onClickSubmit($event: SubmitEvent) {
    $event.preventDefault();
    const formData = this.detailsForm.value;

    if (
      // formData.email?.length !== 0 ||
      // formData.fullname?.length !== 0 ||
      // formData.password?.length !== 0 ||
      // formData.phonenumber?.length !== 0 ||
      // formData.position?.length !== 0 ||
      // formData.school?.length !== 0 ||
      // formData.staffID?.length !== 0 ||
      // formData.username?.length !== 0
      this.detailsForm.valid
    ) {
      if(this.currentAdmin && this.currentAdmin._id){
        this.user
          .updateSchoolAdmin(this.currentAdmin._id, formData)
          .subscribe((result) => {
            // console.log(result);
              alert('Update success');
          });
      }else{
        alert("User data was not properly loaded")
      }

    } else {
      alert('inputs cannot be empty');
    }
  }
}
