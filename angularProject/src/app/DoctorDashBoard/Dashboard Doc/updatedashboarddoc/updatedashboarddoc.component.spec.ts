import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedashboarddocComponent } from './updatedashboarddoc.component';

describe('UpdatedashboarddocComponent', () => {
  let component: UpdatedashboarddocComponent;
  let fixture: ComponentFixture<UpdatedashboarddocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedashboarddocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedashboarddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
