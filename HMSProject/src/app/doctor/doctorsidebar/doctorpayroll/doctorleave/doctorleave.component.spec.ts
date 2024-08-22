import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorleaveComponent } from './doctorleave.component';

describe('DoctorleaveComponent', () => {
  let component: DoctorleaveComponent;
  let fixture: ComponentFixture<DoctorleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorleaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
