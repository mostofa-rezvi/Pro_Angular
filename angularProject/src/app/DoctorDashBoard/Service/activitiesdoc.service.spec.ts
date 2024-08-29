import { TestBed } from '@angular/core/testing';

import { ActivitiesdocService } from './activitiesdoc.service';

describe('ActivitiesdocService', () => {
  let service: ActivitiesdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
