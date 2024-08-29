import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesettingsdocComponent } from './updatesettingsdoc.component';

describe('UpdatesettingsdocComponent', () => {
  let component: UpdatesettingsdocComponent;
  let fixture: ComponentFixture<UpdatesettingsdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatesettingsdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesettingsdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
