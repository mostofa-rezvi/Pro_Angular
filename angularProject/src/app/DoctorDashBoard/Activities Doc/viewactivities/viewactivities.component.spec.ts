import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewactivitiesComponent } from './viewactivities.component';

describe('ViewactivitiesComponent', () => {
  let component: ViewactivitiesComponent;
  let fixture: ComponentFixture<ViewactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewactivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
