import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorattendanceComponent } from './doctorattendance.component';

describe('DoctorattendanceComponent', () => {
  let component: DoctorattendanceComponent;
  let fixture: ComponentFixture<DoctorattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorattendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
