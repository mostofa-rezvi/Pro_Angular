import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofiledocComponent } from './viewprofiledoc.component';

describe('ViewprofiledocComponent', () => {
  let component: ViewprofiledocComponent;
  let fixture: ComponentFixture<ViewprofiledocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewprofiledocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewprofiledocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
