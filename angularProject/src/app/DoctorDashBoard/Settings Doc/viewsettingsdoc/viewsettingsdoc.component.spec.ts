import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsettingsdocComponent } from './viewsettingsdoc.component';

describe('ViewsettingsdocComponent', () => {
  let component: ViewsettingsdocComponent;
  let fixture: ComponentFixture<ViewsettingsdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsettingsdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsettingsdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
