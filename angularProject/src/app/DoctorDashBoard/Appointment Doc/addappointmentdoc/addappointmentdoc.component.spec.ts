import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappointmentdocComponent } from './addappointmentdoc.component';

describe('AddappointmentdocComponent', () => {
  let component: AddappointmentdocComponent;
  let fixture: ComponentFixture<AddappointmentdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddappointmentdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddappointmentdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
