import { TestBed } from '@angular/core/testing';

import { ProfiledocService } from './profiledoc.service';

describe('ProfiledocService', () => {
  let service: ProfiledocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfiledocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
