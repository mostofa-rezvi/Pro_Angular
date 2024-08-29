import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappointmentdocComponent } from './viewappointmentdoc.component';

describe('ViewappointmentdocComponent', () => {
  let component: ViewappointmentdocComponent;
  let fixture: ComponentFixture<ViewappointmentdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewappointmentdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewappointmentdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
