import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappointmentdocComponent } from './updateappointmentdoc.component';

describe('UpdateappointmentdocComponent', () => {
  let component: UpdateappointmentdocComponent;
  let fixture: ComponentFixture<UpdateappointmentdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateappointmentdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateappointmentdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
