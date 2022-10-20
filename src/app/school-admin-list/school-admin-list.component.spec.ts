import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdminListComponent } from './school-admin-list.component';

describe('SchoolAdminListComponent', () => {
  let component: SchoolAdminListComponent;
  let fixture: ComponentFixture<SchoolAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAdminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
