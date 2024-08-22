import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorholidaysComponent } from './doctorholidays.component';

describe('DoctorholidaysComponent', () => {
  let component: DoctorholidaysComponent;
  let fixture: ComponentFixture<DoctorholidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorholidaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
