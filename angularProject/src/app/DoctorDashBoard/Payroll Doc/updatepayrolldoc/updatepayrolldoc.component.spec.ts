import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepayrolldocComponent } from './updatepayrolldoc.component';

describe('UpdatepayrolldocComponent', () => {
  let component: UpdatepayrolldocComponent;
  let fixture: ComponentFixture<UpdatepayrolldocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatepayrolldocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepayrolldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
