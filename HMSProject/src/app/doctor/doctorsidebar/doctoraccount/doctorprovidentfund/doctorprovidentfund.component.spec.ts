import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorprovidentfundComponent } from './doctorprovidentfund.component';

describe('DoctorprovidentfundComponent', () => {
  let component: DoctorprovidentfundComponent;
  let fixture: ComponentFixture<DoctorprovidentfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorprovidentfundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorprovidentfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
