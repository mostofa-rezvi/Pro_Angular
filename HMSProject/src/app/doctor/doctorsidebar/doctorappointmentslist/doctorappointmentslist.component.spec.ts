import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorappointmentslistComponent } from './doctorappointmentslist.component';

describe('DoctorappointmentslistComponent', () => {
  let component: DoctorappointmentslistComponent;
  let fixture: ComponentFixture<DoctorappointmentslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorappointmentslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorappointmentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
