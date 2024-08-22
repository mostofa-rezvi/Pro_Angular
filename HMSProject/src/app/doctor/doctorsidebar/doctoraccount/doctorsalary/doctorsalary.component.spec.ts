import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsalaryComponent } from './doctorsalary.component';

describe('DoctorsalaryComponent', () => {
  let component: DoctorsalaryComponent;
  let fixture: ComponentFixture<DoctorsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorsalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
