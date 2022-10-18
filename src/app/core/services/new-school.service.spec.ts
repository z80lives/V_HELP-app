import { TestBed } from '@angular/core/testing';

import { NewSchoolService } from './new-school.service';

describe('NewSchoolService', () => {
  let service: NewSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
