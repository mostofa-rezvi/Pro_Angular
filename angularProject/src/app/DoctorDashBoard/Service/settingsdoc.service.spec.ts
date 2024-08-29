import { TestBed } from '@angular/core/testing';

import { SettingsdocService } from './settingsdoc.service';

describe('SettingsdocService', () => {
  let service: SettingsdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
