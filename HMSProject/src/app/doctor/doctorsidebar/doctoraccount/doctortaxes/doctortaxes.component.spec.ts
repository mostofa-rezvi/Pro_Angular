import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctortaxesComponent } from './doctortaxes.component';

describe('DoctortaxesComponent', () => {
  let component: DoctortaxesComponent;
  let fixture: ComponentFixture<DoctortaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctortaxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctortaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
