import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationupdateComponent } from './locationupdate.component';

describe('LocationupdateComponent', () => {
  let component: LocationupdateComponent;
  let fixture: ComponentFixture<LocationupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
