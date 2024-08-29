import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpayrolldocComponent } from './viewpayrolldoc.component';

describe('ViewpayrolldocComponent', () => {
  let component: ViewpayrolldocComponent;
  let fixture: ComponentFixture<ViewpayrolldocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewpayrolldocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpayrolldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
