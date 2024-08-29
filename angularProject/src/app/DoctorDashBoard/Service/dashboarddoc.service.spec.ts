import { TestBed } from '@angular/core/testing';

import { DashboarddocService } from './dashboarddoc.service';

describe('DashboarddocService', () => {
  let service: DashboarddocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboarddocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
