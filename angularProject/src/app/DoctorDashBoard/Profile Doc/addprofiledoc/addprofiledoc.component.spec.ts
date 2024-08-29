import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofiledocComponent } from './addprofiledoc.component';

describe('AddprofiledocComponent', () => {
  let component: AddprofiledocComponent;
  let fixture: ComponentFixture<AddprofiledocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprofiledocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprofiledocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
