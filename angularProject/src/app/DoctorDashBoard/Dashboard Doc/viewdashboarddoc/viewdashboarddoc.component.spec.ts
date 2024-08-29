import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdashboarddocComponent } from './viewdashboarddoc.component';

describe('ViewdashboarddocComponent', () => {
  let component: ViewdashboarddocComponent;
  let fixture: ComponentFixture<ViewdashboarddocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewdashboarddocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdashboarddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
