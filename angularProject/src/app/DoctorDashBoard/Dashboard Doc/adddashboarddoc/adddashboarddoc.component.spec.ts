import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddashboarddocComponent } from './adddashboarddoc.component';

describe('AdddashboarddocComponent', () => {
  let component: AdddashboarddocComponent;
  let fixture: ComponentFixture<AdddashboarddocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdddashboarddocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddashboarddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
