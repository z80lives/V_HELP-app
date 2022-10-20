import { Component, OnInit } from '@angular/core';
import {SchoolAdmin} from "../tools/tools/api/models/school-admin";
import {NewSchoolService} from "../core/services/new-school.service";

@Component({
  selector: 'app-school-admin-list',
  templateUrl: './school-admin-list.component.html',
  styleUrls: ['./school-admin-list.component.scss']
})
export class SchoolAdminListComponent implements OnInit {
  loading = false;
  data : SchoolAdmin[] = [];

  constructor(
    private readonly _schoolService : NewSchoolService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this._schoolService.fetchSchoolAdmins().subscribe(admins => {
      this.data = admins;
    }).add( () => {
      this.loading = false;
    })
  }

}
