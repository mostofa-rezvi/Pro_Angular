import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationcreateComponent } from './locationcreate.component';

describe('LocationcreateComponent', () => {
  let component: LocationcreateComponent;
  let fixture: ComponentFixture<LocationcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
