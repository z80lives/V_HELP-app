import { TestBed } from '@angular/core/testing';

import { LogInDataServiceService } from './log-in-data-service.service';

describe('LogInDataServiceService', () => {
  let service: LogInDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
