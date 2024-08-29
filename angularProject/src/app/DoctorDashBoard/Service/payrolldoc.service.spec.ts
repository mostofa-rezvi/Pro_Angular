import { TestBed } from '@angular/core/testing';

import { PayrolldocService } from './payrolldoc.service';

describe('PayrolldocService', () => {
  let service: PayrolldocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrolldocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
