import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofiledocComponent } from './updateprofiledoc.component';

describe('UpdateprofiledocComponent', () => {
  let component: UpdateprofiledocComponent;
  let fixture: ComponentFixture<UpdateprofiledocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateprofiledocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateprofiledocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
