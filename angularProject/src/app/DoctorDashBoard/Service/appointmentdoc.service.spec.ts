import { TestBed } from '@angular/core/testing';

import { AppointmentdocService } from './appointmentdoc.service';

describe('AppointmentdocService', () => {
  let service: AppointmentdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
