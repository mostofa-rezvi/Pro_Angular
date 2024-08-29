import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpayrolldocComponent } from './addpayrolldoc.component';

describe('AddpayrolldocComponent', () => {
  let component: AddpayrolldocComponent;
  let fixture: ComponentFixture<AddpayrolldocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpayrolldocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpayrolldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
