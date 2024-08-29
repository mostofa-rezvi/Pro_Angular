import { TestBed } from '@angular/core/testing';

import { ReportdocService } from './reportdoc.service';

describe('ReportdocService', () => {
  let service: ReportdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
