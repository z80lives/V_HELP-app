import { Component, OnInit } from '@angular/core';
import { NewSchoolService } from '../core/services/new-school.service';
import { SchoolAdmin } from '../tools/tools/api/models';

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.scss'],
})
export class ManageRequestsComponent implements OnInit {
  loading = false;
  data: SchoolAdmin[] = [];
  selectedCustomers = '';
  constructor(private readonly _schoolService: NewSchoolService) {}
  description = 'temp description';
  ngOnInit(): void {
    this.loading = true;
    this._schoolService
      .fetchSchoolAdmins()
      .subscribe((admins) => {
        this.data = admins;
      })
      .add(() => {
        this.loading = false;
      });
  }
}
