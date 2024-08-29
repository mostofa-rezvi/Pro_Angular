import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsettingsdocComponent } from './addsettingsdoc.component';

describe('AddsettingsdocComponent', () => {
  let component: AddsettingsdocComponent;
  let fixture: ComponentFixture<AddsettingsdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddsettingsdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsettingsdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
