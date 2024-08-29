import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpntComponent } from './dashboardpnt.component';

describe('DashboardpntComponent', () => {
  let component: DashboardpntComponent;
  let fixture: ComponentFixture<DashboardpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardpntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
